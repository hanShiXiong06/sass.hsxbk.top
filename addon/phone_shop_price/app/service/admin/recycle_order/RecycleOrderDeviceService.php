<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\service\admin\recycle_order;


use addon\phone_shop_price\app\model\recycle_order\RecycleDevice;
// 引入订单模型
use addon\phone_shop_price\app\model\recycle_order\RecycleOrder;
use addon\phone_shop_price\app\dict\RecycleOrderDict;
use core\base\BaseAdminService;
use think\db\exception\DbException;
use think\facade\Db;
use core\exception\CommonException;

/**
 * 回收订单设备服务层
 */
class RecycleOrderDeviceService extends BaseAdminService
{
    /**
     * @var RecycleOrderDevice
     */
    protected $model;

    public function __construct()
    {
        parent::__construct();
        $this->model = new RecycleDevice();
    }

    /**
     * 获取设备列表
     * @param array $where
     * @return array
     */
    public function getList(array $where = []): array
    {
        $field = 'id,order_id,imei,model,initial_price,check_images,final_price,price_remark,status,check_status,check_result,check_at,remark,create_at,update_time';
        $order = 'create_at desc';
        
        $condition = [];
        if (!empty($where['order_id'])) {
            $condition[] = ['order_id', '=', $where['order_id']];
        }
        if (!empty($where['imei'])) {
            $condition[] = ['imei', 'like', "%{$where['imei']}%"];
        }
        if (!empty($where['model'])) {
            $condition[] = ['model', 'like', "%{$where['model']}%"];
        }
        if (isset($where['status']) && $where['status'] !== '') {
            $condition[] = ['status', '=', $where['status']];
        }

        $list = $this->model->where($condition)
            ->field($field)
            ->order($order)
            ->page($where['page'], $where['limit'])
            ->select()
            ->toArray();

        $count = $this->model->where($condition)->count();

        return [
            'count' => $count,
            'list' => $list
        ];
    }

    /**
     * 获取设备详情
     * @param int $id
     * @return array
     */
    public function getInfo(int $id): array
    {
        $field = 'id,order_id,imei,model,initial_price,final_price,price_remark,status,check_status,check_result,check_at,remark,create_at,update_time';
        return $this->model->where([['id', '=', $id]])->field($field)->findOrEmpty()->toArray();
    }

    /**
     * 获取订单下的设备列表
     * @param int $order_id
     * @return array
     */
    public function getOrderDevices(int $order_id): array
    {
        $field = 'id,order_id,imei,model,initial_price,final_price,price_remark,status,check_status,check_result,check_at,remark,create_at,update_time';
        $list = $this->model->where([
            ['order_id', '=', $order_id]
        ])->field($field)->order('create_at desc')->select()->toArray();

        return ['list' => $list];
    }

    /**
     * 添加设备
     * @param array $data
     * @return int
     */
    public function add(array $data): int
    {
        Db::startTrans();
        try {
            // 设置初始状态
            $data['status'] = RecycleOrderDict::DEVICE_STATUS['PENDING_CHECK'];
            $data['create_at'] = time();
            $data['site_id'] = $this->site_id;
            
            // 创建设备
            $device_id = $this->model->create($data)->id;
            
            // 更新订单设备数量
            $this->updateOrderDeviceCount($data['order_id']);
            
            // 如果需要更新订单状态
            if (!empty($data['should_update_order'])) {
                $this->updateOrderStatus($data['order_id']);
            }
            
            Db::commit();
            return $device_id;
        } catch (\Exception $e) {
            Db::rollback();
            throw new DbException($e->getMessage());
        }
    }

    /**
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        // 查询当前设备
        $device = $this->model->where([['id', '=', $id]])->find();
        if (!$device) {
            throw new CommonException('设备不存在');
        }
        
        // 获取关联的订单
        $order = RecycleOrder::where([['id', '=', $device['order_id']]])->find();
        if (!$order) {
            throw new CommonException('订单不存在');
        }

        // 记录初始状态
        \think\facade\Log::info('开始更新设备状态', [
            'device_id' => $id,
            'order_id' => $device['order_id'],
            'current_device_status' => $device->status,
            'current_order_status' => $order->status,
            'input_data' => $data
        ]);

        // 开启事务
        Db::startTrans();
        try {
            // 更新设备信息
            if ($data['check_status'] == 1) {
                // 质检并定价：更新所有信息，状态设为已质检(3)
                if (!isset($data['check_result']) || !isset($data['final_price']) || !isset($data['price_remark'])) {
                    throw new CommonException('质检结果、最终价格和价格备注不能为空');
                }
                $device->status = RecycleOrderDict::DEVICE_STATUS['CHECKED'];
                $device->check_status = 1;
                $device->check_result = $data['check_result'];
                $device->check_images = $data['check_images'] ?? '';
                $device->final_price = $data['final_price'];
                $device->price_remark = $data['price_remark'];
                $device->check_at = time();

            } else {
                // 只质检：只更新质检信息，状态设为质检中(2)
                if (!isset($data['check_result'])) {
                    throw new CommonException('质检结果不能为空');
                }
                $device->status = RecycleOrderDict::DEVICE_STATUS['CHECKING'];
                $device->check_status = 0;
                $device->check_result = $data['check_result'];
                $device->check_images = $data['check_images'] ?? '';
            }
            
            // 保存设备状态
            $device->save();

            // 获取订单下所有设备的状态
            $allDevices = $this->model->where([
                ['order_id', '=', $device['order_id']]
            ])->select();

            $deviceStatuses = [];
            foreach ($allDevices as $dev) {
                $deviceStatuses[] = $dev->status;
            }

            // 确定新的订单状态
            $newOrderStatus = null;

            // 检查是否只有一台设备且已完成质检
            if (count($allDevices) === 1 && $device->status == RecycleOrderDict::DEVICE_STATUS['CHECKED']) {
                $newOrderStatus = RecycleOrderDict::ORDER_STATUS['CHECKED'];
            } else {
                // 检查是否所有设备都已质检
                $allChecked = !in_array(RecycleOrderDict::DEVICE_STATUS['PENDING_CHECK'], $deviceStatuses) 
                    && !in_array(RecycleOrderDict::DEVICE_STATUS['CHECKING'], $deviceStatuses);

                // 检查是否有质检中的设备
                $hasChecking = in_array(RecycleOrderDict::DEVICE_STATUS['CHECKING'], $deviceStatuses);

                // 检查订单是否处于待签收状态
                $isPendingReceive = $order->status == RecycleOrderDict::ORDER_STATUS['PENDING_CONFIRM'];

                // 如果订单是待签收状态，且有设备开始质检，则更新为质检中
                if ($isPendingReceive && ($hasChecking || $device->status == RecycleOrderDict::DEVICE_STATUS['CHECKED'])) {
                    $newOrderStatus = RecycleOrderDict::ORDER_STATUS['CHECKING'];
                } elseif ($hasChecking) {
                    // 如果有质检中的设备，订单状态为质检中
                    $newOrderStatus = RecycleOrderDict::ORDER_STATUS['CHECKING'];
                } elseif ($allChecked) {
                    // 如果所有设备都已质检完成，订单状态为已质检
                    $newOrderStatus = RecycleOrderDict::ORDER_STATUS['CHECKED'];
                }
            }

            // 如果需要更新订单状态
            if ($newOrderStatus !== null && $newOrderStatus != $order->status) {
                $updateResult = Db::name('phone_shop_recycle_order')->where('id', $device['order_id'])->update([
                    'status' => $newOrderStatus,
                    'update_at' => time()
                ]);
                
               
            }

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
          
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 删除设备
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $device = $this->model->where([['id', '=', $id]])->find();


       
        if ($device->isEmpty()) {
            throw new DbException('设备不存在');
        }

        if ($device['status'] !== 1) {
            throw new DbException('只有验证状态的设备可以删除');
        }

        Db::startTrans();
        try {
            // 删除设备
            $this->model->where([['id', '=', $id]])->delete();
            
            // 更新订单设备数量
            $this->updateOrderDeviceCount($device['order_id']);
            
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new DbException($e->getMessage());
        }
    }

    /**
     * 更新设备状态
     * @param array $data
     * @return bool
     */
    public function editStatus(array $data): bool
    {
        Db::startTrans();
        try {
            $device = $this->model->findOrEmpty($data['id']);
            if ($device->isEmpty()) {
                throw new DbException('设备不存在');
            }

            if ($device['status'] >= 5) {
                throw new DbException('设备已完成或已退回，无法更新状态');
            }

            $update = [
                'status' => $data['status'],
                'check_result' => $data['check_result'] ?? '',
                'check_at' => time(),
                'final_price' => $data['final_price'] ?? 0,
                'price_remark' => $data['price_remark'] ?? ''
            ];

            // 更新设备状态
            $result = $this->model->where([['id', '=', $data['id']]])->update($update);
            if ($result === false) {
                throw new DbException('更新设备状态失败');
            }

            // 如果需要更新订单状态
            if (!empty($data['should_update_order'])) {
                $this->updateOrderStatus($device['order_id']);
            }

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new DbException($e->getMessage());
        }
    }

    /**
     * 更新订单状态
     * @param int $order_id
     * @return bool
     */
    protected function updateOrderStatus(int $order_id): bool
    {
        // 获取订单下所有设备的状态
        $devices = $this->model->where([
            ['order_id', '=', $order_id]
        ])->column('status');

        if (empty($devices)) {
            return false;
        }

        // 计算新的订单状态
        $new_status = $this->calculateOrderStatus($devices);

        // 更新订单状态
        return Db::name('phone_shop_recycle_order')->where([
            ['id', '=', $order_id]
        ])->update([
            'status' => $new_status,
            'update_at' => time()
        ]) !== false;
    }

    /**
     * 根据设备状态计算订单状态
     * @param array $device_status_list
     * @return int
     */
    protected function calculateOrderStatus(array $device_status_list): int
    {
        $status_count = array_count_values($device_status_list);
        $total = count($device_status_list);

        // 如果所有设备都是同一状态
        if (count($status_count) === 1) {
            $status = reset($device_status_list);
            switch ($status) {
                case RecycleOrderDict::DEVICE_STATUS['PENDING_CHECK']:
                    return RecycleOrderDict::ORDER_STATUS['PENDING_CHECK'];
                case RecycleOrderDict::DEVICE_STATUS['CHECKING']:
                    return RecycleOrderDict::ORDER_STATUS['CHECKING'];
                case RecycleOrderDict::DEVICE_STATUS['CHECKED']:
                    return RecycleOrderDict::ORDER_STATUS['PENDING_CONFIRM'];
                case RecycleOrderDict::DEVICE_STATUS['COMPLETED']:
                    return RecycleOrderDict::ORDER_STATUS['PENDING_PAYMENT'];
                case RecycleOrderDict::DEVICE_STATUS['RETURNED']:
                    return RecycleOrderDict::ORDER_STATUS['PENDING_RETURN'];
            }
        }

        // 如果有任何设备在质检中
        if (!empty($status_count[RecycleOrderDict::DEVICE_STATUS['CHECKING']])) {
            return RecycleOrderDict::ORDER_STATUS['CHECKING'];
        }

        // 如果有待确认的设备
        if (!empty($status_count[RecycleOrderDict::DEVICE_STATUS['PENDING_CONFIRM']])) {
            return RecycleOrderDict::ORDER_STATUS['PENDING_CONFIRM'];
        }

        // 如果所有设备都已完成或退回
        $completed = ($status_count[RecycleOrderDict::DEVICE_STATUS['COMPLETED']] ?? 0);
        $returned = ($status_count[RecycleOrderDict::DEVICE_STATUS['RETURNED']] ?? 0);
        if (($completed + $returned) === $total) {
            if ($returned === $total) {
                return RecycleOrderDict::ORDER_STATUS['PENDING_RETURN'];
            }
            if ($completed === $total) {
                return RecycleOrderDict::ORDER_STATUS['PENDING_PAYMENT'];
            }
            return RecycleOrderDict::ORDER_STATUS['PENDING_CONFIRM'];
        }

        // 默认返回待质检状态
        return RecycleOrderDict::ORDER_STATUS['PENDING_CHECK'];
    }

    /**
     * 更新订单设备数量
     * @param int $order_id
     * @return bool
     */
    protected function updateOrderDeviceCount(int $order_id): bool
    {
        $count = $this->model->where([
            ['order_id', '=', $order_id]
        ])->count();

        return Db::name('phone_shop_recycle_order')->where([
            ['id', '=', $order_id]
        ])->update(['count' => $count]) !== false;
    }
} 