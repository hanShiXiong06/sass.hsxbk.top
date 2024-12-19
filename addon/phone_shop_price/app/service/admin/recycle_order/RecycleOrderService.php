<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\service\admin\recycle_order;

use core\base\BaseAdminService;
use addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrder;
use addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrderDevice;

/**
 * 回收订单服务层
 * Class RecycleOrderService
 * @package addon\phone_shop_price\app\service\admin\recycle_order
 */
class RecycleOrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new PhoneShopRecycleOrder();
    }

    /**
     * 获取回收订单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,order_no,site_id,count,express_id,send_username,telphone,pay_type,account,delivery_type,return_type,qrcode_image,return_address,status,create_at,update_at,over_at,comment,close_express_id';
        $order = '';

        $search_model = $this->model->where([['site_id', "=", $this->site_id]])
            ->withSearch(["order_no", "send_username", "telphone", "status", "create_at"], $where)
            ->with(['devices'])
            ->field($field)
            ->order($order);
            
        $list = $this->pageQuery($search_model);
        
        // 处理列表数据,添加统计信息
        if (!empty($list['data'])) {
            foreach ($list['data'] as &$item) {
                // 初始化统计数据  待验机 | 验机中 | 已验机 | 待确认 | 待打款 | 已完成 | 退货
                $item['device_stats'] = [
                    'total' => 0,           // 总数量
                    'pending' => 0,         // 待验机数量 (status = 1)
                    'checking' => 0,        // 验机中数量 (status = 2)
                    'checked' => 0,         // 已验机数量 (status = 3)
                    'priced' => 0,         // 待确认数量 (status = 4)
                    'completed' => 0,       // 已完成数量 (status = 5)
                    'returned' => 0,        // 退货数量 (status = 4)
                    'total_amount' => 0,    // 总金额
                ];

                // 统计各状态数量
                if (!empty($item['devices'])) {
                    $item['device_stats']['total'] = count($item['devices']);
                    
                    foreach ($item['devices'] as $device) {
                        // 统计各状态数量
                        switch ($device['status']) {
                            case 1:
                                $item['device_stats']['pending']++;
                                break;
                            case 2:
                                $item['device_stats']['checking']++;
                                break;
                            case 3:
                                $item['device_stats']['checked']++;
                                break;
                            case 4:
                                $item['device_stats']['returned']++;
                                break;
                            case 5:
                                $item['device_stats']['completed']++;
                                break;
                        }
                        
                        // 计算总金额(使用最终价格,如果没有则使用预估价格)
                        $item['device_stats']['total_amount'] += !empty($device['final_price']) ? 
                            floatval($device['final_price']) : 
                            floatval($device['initial_price']);
                    }
                }
            }
            unset($item); // 解除引用
        }
        
        return $list;
    }

    /**
     * 获取回收订单信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,order_no,site_id,count,express_id,send_username,telphone,pay_type,account,delivery_type,return_type,qrcode_image,return_address,status,create_at,update_at,over_at,comment,close_express_id';
        $info = $this->model->field($field)
            ->where([['id', "=", $id], ['site_id', '=', $this->site_id]])
            ->with(['devices'])
            ->findOrEmpty()
            ->toArray();
        return $info;
    }

    /**
     * 添加回收订单
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $data['create_at'] = time();
        $data['update_at'] = time();
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 编辑回收订单
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $data['update_at'] = time();
        $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除回收订单
     * @param int $id
     * @return bool
     */
    public function deleteOrder(int $id)
    {
        $model = $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->find();
        if (empty($model)) {
            return $this->error('订单不存在');
        }
        $res = $model->together(['devices'])->delete();
        return $res;
    }

    /**
     * 更新设备状态
     * @param int $device_id
     * @param string $status
     * @return array
     */
    public function updateDeviceStatus(int $device_id, array $status)
    {
       
        // return $status;
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['site_id', '=', $this->site_id]])->find($device_id);
        // return $device;
        // if (empty($device)) {
        //     return $this->error('设备不存在');
        // }

        $result = $device_model->where(['id' => $device_id])->update([
            'status' => $status['status'],
            'check_result' => $status['check_result'],
            'final_price' => $status['final_price'],
            'price_remark' => $status['price_remark'],
            'model'=>$status['model'],
            'update_at' => time()
        ]);
        // if ($result === false) {
        //     return $this->error('更新失败');
        // }
        // 需要判断当前订单是否依然有设备未完成 , 如果有则更新为质检中
      
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['site_id', '=', $this->site_id], ['order_id', '=', $status['order_id']]])->select();
        // if ($device->isEmpty()) {
        //     return $this->error('订单不存在');
        // }
        // 更新订单状态
        // 如果订单中还有设备未完成 , 则更新为质检中
        $this->updateOrderStatus($status['order_id']);
        return success( $device->toArray());
    }

    /**
     * 更新设备最终价格
     * @param int $device_id
     * @param float $final_price
     * @param string $remark
     * @return array
     */
    public function updateDeviceFinalPrice(int $device_id, float $final_price, string $remark = '')
    {
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['site_id', '=', $this->site_id]])->find($device_id);
        if (empty($device)) {
            return $this->error('设备不存在');
        }

        $result = $device_model->where(['id' => $device_id])->update([
            'final_price' => $final_price,
            'remark' => $remark,
            'status' => 'priced',
            'update_at' => time()
        ]);

        if ($result === false) {
            return $this->error('更新失败');
        }

        // 更新订单状态
        $this->updateOrderStatus($device['order_id']);
        return success('更新成功');
    }

    /**
     * 更新设备退货信息
     * @param int $device_id
     * @param array $data
     * @return array
     */
    public function updateDeviceReturn(int $device_id, array $data)
    {
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['site_id', '=', $this->site_id]])->find($device_id);
        if (empty($device)) {
            return $this->error('设备不存在');
        }

        $update_data = [
            'return_express_company' => $data['express_company'],
            'return_express_no' => $data['express_no'],
            'return_remark' => $data['remark'],
            'status' => 'returned',
            'update_at' => time()
        ];

        $result = $device_model->where(['id' => $device_id])->update($update_data);
        if ($result === false) {
            return $this->error('更新失败');
        }

        // 更新订单状态
        $this->updateOrderStatus($device['order_id']);
        return success(  $result );
    }

    /**
     * 获设备详情
     * @param int $device_id
     * @return array
     */
    public function getDeviceDetail(int $device_id)
    {
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['site_id', '=', $this->site_id]])
            ->with(['order'])
            ->find($device_id);
            
        if (empty($device)) {
            return $this->error('设备不存在');
        }

        return success($device->toArray());
    }

    /**
     * 根据设备状态更新订单状态
     * @param int $order_id
     */
    private function updateOrderStatus(int $order_id)
    {
        $device_model = new PhoneShopRecycleOrderDevice();
        
        // 查询该订单下是否还有未完成质检的设备(status != 3)
        $unfinished_count = $device_model->where([
            ['order_id', '=', $order_id],
            ['site_id', '=', $this->site_id],
            ['status', '<>', 3] // 不等于质检完成的状态
        ])->count();

        // 更新订单状态
        if ($unfinished_count > 0) {
            // 还有未完成的设备,更新订单状态为质检中(2)
            $this->model->where([
                ['id', '=', $order_id],
                ['site_id', '=', $this->site_id]
            ])->update([
                'status' => 2, // 质检中
                'update_at' => time()
            ]);
        } else {
            // 所有设备都已完成质检,更新订单状态为质检完成(3)
            $this->model->where([
                ['id', '=', $order_id],
                ['site_id', '=', $this->site_id]
            ])->update([
                'status' => 3, // 质检完成
                'update_at' => time()
            ]);
        }
    }

    /**
     * 添加设备
     * @param array $data
     * @return array
     */
    public function addDevice(array $data)
    {
        $device_model = new PhoneShopRecycleOrderDevice();
        
        // 检查订单是否存在
        $order = $this->model->where([['id', '=', $data['order_id']], ['site_id', '=', $this->site_id]])->find();
        if (empty($order)) {
            return $this->error('订单不存在');
        }
        
        // 检查IMEI是否重复
        // $exists = $device_model->where([
        //     ['imei', '=', $data['imei']],
        //     ['site_id', '=', $this->site_id]
        // ])->find();
        // if (!empty($exists)) {
        //     return $this->error('该IMEI已存在');
        // }
        
        // 添加设备
        $data['site_id'] = $this->site_id;
        $data['create_at'] = time();
        $data['update_at'] = time();
        
        $result = $device_model->create($data);
        if ($result === false) {
            return $this->error('添加失败');
        }
        
        // 更新订单状态
        $this->updateOrderStatus($data['order_id']);
        
        return success('添加成功');
    }

    /**
     * 删除设备
     * @param int $id
     * @return array
     */
    public function deleteDevice(int $id)
    {
        // return $id;
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->find();
        
        if (empty($device)) {
            return $this->error('设备不存在');
        }
        
        // 记录订单ID用于后续更新状态
        $order_id = $device['order_id'];
        
        // 删除设备
        $result = $device->delete();
        if ($result === false) {
            return $this->error('删除失败');
        }
        
        // 更新订单状态
        $this->updateOrderStatus($order_id);
        
        return success('删除成功');
    }

    /**
     * 编辑设备
     * @param int $id
     * @param array $data
     * @return array
     */
    public function editDevice(int $id, array $data)
    {
        $device_model = new PhoneShopRecycleOrderDevice();
        $device = $device_model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->find();
        
        if (empty($device)) {
            return $this->error('设备不存在');
        }
        
        // 如果修改了IMEI,需要检查是否重复
        if (!empty($data['imei']) && $data['imei'] !== $device['imei']) {
            $exists = $device_model->where([
                ['imei', '=', $data['imei']],
                ['site_id', '=', $this->site_id],
                ['id', '<>', $id]
            ])->find();
            if (!empty($exists)) {
                return $this->error('该IMEI已存在');
            }
        }
        
        // 更新设备信息
        $data['update_at'] = time();
        $result = $device_model->where(['id' => $id])->update($data);
        
        if ($result === false) {
            return $this->error('更新失败');
        }
        
        return success('更新成功');
    }
}