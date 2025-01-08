<?php
declare(strict_types=1);

// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\phone_shop_price\app\service\api\recycle_order;

use addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrder;
use addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrderDevice;
use app\model\member\Member;
use addon\phone_shop_price\app\dict\RecycleOrderDict;

use core\base\BaseApiService;


/**
 * 二手机回收报价订单服务层
 * Class RecycleOrderService
 * @package addon\phone_shop_price\app\service\admin\phone_shop_recycle_order
 */
class RecycleOrderService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new PhoneShopRecycleOrder();
    }

    /**
     * 获取二手机回收报价订单列表
     * @param array $where
     * @return array
     */
     /**
     * 获取二手机回收报价订单列表
     * @param array $where
     * @return array
     */
     /**
     * 获取二手机回收报价订单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
       
        $field = 'id,order_no,site_id,count,express_id,send_username,telphone,pay_type,account,delivery_type,return_type,qrcode_image,return_address,status,create_at,update_at,over_at,comment,close_express_id';
        $order = 'create_at desc';

 
        
        // 先查询总数，不带任何条件
        $total = $this->model->where([['delete_at', '=', null],['site_id', '=', $this->site_id]])->count();

        
        // 添加site_id和member_id条件
        $search_model = $this->model->where([
            ['site_id', "=", $this->site_id],
            ['member_id', "=", $this->member_id],
            ['delete_at', '=', null]
        ]);
        
        // 查询当前用户的记录数
        $user_total = $search_model->count();
        trace('当前用户记录数：' . $user_total, 'debug');
        
        // 处理时间查询条件
        if (!empty($where['create_at']) && is_array($where['create_at']) && count($where['create_at']) == 2) {
            $start_time = strtotime($where['create_at'][0]);
            $end_time = strtotime($where['create_at'][1]);
            if ($start_time && $end_time) {
                $search_model = $search_model->whereBetweenTime('create_at', $start_time, $end_time);
            }
        }
        
        $search_model = $search_model->withSearch(["order_no", "send_username", "telphone", "status"], $where)
            ->with(['devices'])
            ->field($field)
            ->order($order);
            
        trace('最终SQL查询语句：' . $search_model->getLastSql(), 'debug');
        
        $list = $this->pageQuery($search_model);
        trace('查询结果：' . json_encode($list, JSON_UNESCAPED_UNICODE), 'debug');
        
       //  处理列表数据,添加统计信息
        if (!empty($list['data'])) {
            foreach ($list['data'] as &$item) {
                // 初始化统计数据
                $item['device_stats'] = [
                    'total' => 0,           // 总数量
                    'pending' => 0,         // 待验机数量 (status = 1)
                    'checking' => 0,        // 验机中数量 (status = 2)
                    'checked' => 0,         // 已验机数量 (status = 3)
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
     * 获取二手机回收报价订单信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,order_no,member_id,site_id,count,express_id,send_username,telphone,pay_type,account,delivery_type,return_type,qrcode_image,return_address,status,create_at,update_at,over_at,comment,close_express_id';

        $info = $this->model->field($field)
            ->where([['id', "=", $id], ['site_id', "=", $this->site_id]])
            // ->with(['member'])
            ->findOrEmpty()
            ->toArray();
        return $info;
    }

    /**
     * 添加二手机回收报价订单
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        try {
            $this->model->startTrans();
            
            // 生成订单号
            $orderNo = $this->generateOrderNo();
            
            // 准备订单数据
            $orderData = [
                'order_no' => $orderNo,
                'site_id' => $this->site_id,
                'member_id' => $this->member_id,
                'count' => count($data['phone_list'] ?? []),
                'express_id' => $data['express_id'] ?? '',
                'send_username' => $data['send_username'],
                'telphone' => $data['telphone'],
                'pay_type' => $data['pay_type'],
                'account' => $data['account'],
                'delivery_type' => $data['delivery_type'] ?? 'mail',
                'return_type' => $data['return_type'] ?? 'self',
                'qrcode_image' => $data['qrcode_image'] ?? '',
                'return_address' => $data['return_address'] ?? '',
                'status' => 1,
                'create_at' => time(),
                'update_at' => time(),
                'comment' => $data['comment'] ?? '',
                'close_express_id' => ''
            ];

            // 创建订单
            $order = $this->model->create($orderData);
            if (!$order) {
                throw new \Exception('创建单失败');
            }

            // 处理设备信息
            if (!empty($data['phone_list'])) {
                $deviceModel = new PhoneShopRecycleOrderDevice();
                foreach ($data['phone_list'] as $phone) {
                    // 检查IMEI是否已存在
                    // $exists = $deviceModel->where('imei', $phone['imei'])->find();
                    // if ($exists) {
                    //     throw new \Exception('IMEI号码已存在：' . $phone['imei']);
                    // }

                    $deviceData = [
                        'order_id' => $order->id,
                        'imei' => $phone['imei'],
                        'model' => $phone['model'] ?? '待识别',
                        'status' => 1,
                        'create_at' => time(),
                        'site_id'=>$this->site_id
                    ];

                    $result = $deviceModel->create($deviceData);
                    if (!$result) {
                        throw new \Exception('添加设备信息失败');
                    }
                }
            }

            $this->model->commit();
            return $order->id;

        } catch (\Exception $e) {
            $this->model->rollback();
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 生成唯一单号
     * @return string
     */
    private function generateOrderNo(): string
    {
        $date = date('YmdHis');
        $random = mt_rand(1000, 9999);
        $orderNo = 'RC' . $date . $random;
        
        // 检查订单号是否已存在，如果存在则重新生成
        while($this->model->where('order_no', $orderNo)->find()) {
            $random = mt_rand(1000, 9999);
            $orderNo = 'RC' . $date . $random;
        }
        
        return $orderNo;
    }

    /**
     * 二手机回收报价订单编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $data['update_at'] = time();
        $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除二手机回收报价订单
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
    public function getMemberAll(){
       $memberModel = new Member();
       return $memberModel->where([["site_id","=",$this->site_id]])->select()->toArray();
    }

    
    // getStatus
    /**
     * 充值订单状态
     * @return array|array[]|string
     */
    public function getStatus()
    {
        return RecycleOrderDict::getStatus();
    }

    /**
     * 更新设备验机信息
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function updateDeviceCheck(int $id, array $data)
    {
        try {
            $deviceModel = new PhoneShopRecycleOrderDevice();
            
            // 获取设备信息
            $device = $deviceModel->where('id', $id)->find();
            if (!$device) {
                throw new \Exception('设备不存在');
            }
            
            // 更新设备信息
            $updateData = [
                'check_status' => $data['check_status'],
                'check_result' => $data['check_result'],
                'initial_price' => $data['initial_price'],
                'final_price' => $data['final_price'],
                'price_remark' => $data['price_remark'],
                'update_at' => time()
            ];
            
            if ($data['check_status'] == 2) { // 验机完成
                $updateData['check_at'] = time();
            }
            
            $result = $deviceModel->where('id', $id)->update($updateData);
            if (!$result) {
                throw new \Exception('更新设备信息失败');
            }
            
            // 如果验机完成，更新订单状态
            if ($data['check_status'] == 2) {
                $order = $this->model->where('id', $device['order_id'])->find();
                if ($order) {
                    // 检查该订单所有设备是否都验机完成
                    $unfinishedCount = $deviceModel->where([
                        ['order_id', '=', $device['order_id']],
                        ['check_status', '<>', 2]
                    ])->count();
                    
                    if ($unfinishedCount == 0) {
                        // 所有设备都验机完成，更新订单状态
                        $this->model->where('id', $device['order_id'])->update([
                            'status' => 4, // 质检完成
                            'update_at' => time()
                        ]);
                    }
                }
            }
            
            return true;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    /**
     * 获取设备详情
     * @param int $id
     * @return array
     */
    public function getDeviceInfo(int $id)
    {
        $deviceModel = new PhoneShopRecycleOrderDevice();
        $info = $deviceModel->where('id', $id)->find();
        if (!$info) {
            throw new \Exception('设备不存在');
        }
        return $info->toArray();
    }

    /**
     * 获取订单下的所有设备
     * @param int $orderId
     * @return array
     */
    public function getOrderDevices(int $orderId)
    {
        
        $deviceModel = new PhoneShopRecycleOrderDevice();
        return $deviceModel->where('order_id', $orderId)->select()->toArray();
    }
    /**
     * 获取订单状态统计
     * @return array
     */
    public function getStatusCount()
    {
        // 获取所有状态的订单数量
        $counts = $this->model->where([
            ['site_id', '=', $this->site_id],
            ['member_id', '=', $this->member_id],['delete_at', '=', null]
        ])->group('status')->column('count(*)', 'status');

        // 构建返回数据
        $result = [
            'list' => [
                [
                    'label' => '全部',
                    'value' => '',
                    'count' => array_sum($counts)
                ]
            ]
        ];

        // 添加各状态数量
        foreach (RecycleOrderDict::ORDER_STATUS_TEXT as $status => $label) {
            $result['list'][] = [
                'label' => $label,
                'value' => (string)$status,
                'count' => $counts[$status] ?? 0,
                'actions' => RecycleOrderDict::getStatus($status)['actions'] ?? []
            ];
        }
        // $result =  $result['list'];
        // unset($result['list']);

        $result['status_count'] = $counts;
        return $result;
    }
    // updateStatus
    public function updateStatus(int $id, array $data)
    {
        // 优先判断是否是删除订单
        if($data['action'] == 'delete'){
            return $this->deleteOrder($id);
        }
        try {
            // 开启事务
            $this->model->startTrans();
            
            \think\facade\Log::info('updateStatus 开始 - 参数:', ['id' => $id, 'data' => $data]);
            
            // 更新订单状态
            switch ($data['action']) {
                case 'cancel':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['CANCELLED']; // 7
                    break;
                
                case 'start_check':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['CHECKING']; // 2
                    break;
                
                case 'complete_check':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['CHECKED']; // 3
                    break;
                
                case 'confirm':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['PAYING']; // 4
                    break;
                
                case 'pay':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['PAYED']; // 5
                    break;
                
                case 'complete':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['COMPLETED']; // 6
                    break;
                
                case 'reject':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['RETURNING']; // 8
                    break;
                
                case 'return_confirm':
                    $data['status'] = RecycleOrderDict::ORDER_STATUS['RETURNED']; // 9
                    break;
                
               
            }

            // 更新订单状态
            if (isset($data['status'])) {
                $order_result = $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->update([
                    'status' => $data['status'],
                    'update_at' => time()
                ]);
                \think\facade\Log::info('更新订单状态结果:', ['status' => $data['status'], 'result' => $order_result]);
                
                if (!$order_result) {
                    throw new \Exception('更新订单状态失败');
                }
            }

            // 如果客户点击了一键确认，则需要将设备的状态改为已确认
            if ($data['action'] == 'confirm') {
                $deviceModel = new PhoneShopRecycleOrderDevice();
                
                // 检查是否有可以更新的设备
                $devices_to_update = $deviceModel->where([
                    ['order_id', '=', $id], 
                    ['site_id', '=', $this->site_id],
                    ['status', '=', RecycleOrderDict::DEVICE_STATUS['CHECKED']] // 只更新已质检的设备
                ])->count();
                
                \think\facade\Log::info('待更新设备数量:', ['count' => $devices_to_update]);
                
                if ($devices_to_update > 0) {
                    // 只更新状态为已质检(3)的设备
                    $device_result = $deviceModel->where([
                        ['order_id', '=', $id], 
                        ['site_id', '=', $this->site_id],
                        ['status', '=', RecycleOrderDict::DEVICE_STATUS['CHECKED']] // 只更新已质检的设备
                    ])->update([
                        'status' => RecycleOrderDict::DEVICE_STATUS['CONFIRMED'],
                        'update_at' => time()
                    ]);
                    
                    \think\facade\Log::info('更新设备状态结果:', [
                        'order_id' => $id,
                        'old_status' => RecycleOrderDict::DEVICE_STATUS['CHECKED'],
                        'new_status' => RecycleOrderDict::DEVICE_STATUS['CONFIRMED'],
                        'result' => $device_result
                    ]);
                    
                    if (!$device_result) {
                        throw new \Exception('更新设备状态失败');
                    }
                } else {
                    \think\facade\Log::info('没有需要更新的设备');
                }
            }
            
            // 提交事务
            $this->model->commit();
            \think\facade\Log::info('updateStatus 完成');
            return true;
            
        } catch (\Exception $e) {
            // 回滚事务
            $this->model->rollback();
            \think\facade\Log::error('updateStatus 异常:', ['message' => $e->getMessage()]);
            throw new \Exception($e->getMessage());
        }
    }

    // 单台确认
    public function deviceConfirm($device_id)
    {
        try {
            $deviceModel = new PhoneShopRecycleOrderDevice();
            
            // 获取设备信息
            $device = $deviceModel->where([['id', '=', $device_id]])->find();
            if (empty($device)) {
                throw new \Exception('设备不存在');
            }
            
            // 检查设备状态是否为已质检(3)
            if ($device['status'] != 3) {
                throw new \Exception('设备状态不正确，无法确认');
            }
            
            // 开启事务
            $deviceModel->startTrans();
            
            try {
                // 更新设备状态为已确认(4)
                $result = $deviceModel->where([['id', '=', $device_id]])->update([
                    'status' => RecycleOrderDict::DEVICE_STATUS['CONFIRMED'],
                    'update_at' => time()
                ]);
                
                if (!$result) {
                    throw new \Exception('更新设备状态失败');
                }
                
                // 检查订单下所有设备是否都已确认
                $unconfirmed = $deviceModel->where([
                    ['order_id', '=', $device['order_id']],
                    ['status', '<>', RecycleOrderDict::DEVICE_STATUS['CONFIRMED']],
                    ['status', '<>', RecycleOrderDict::DEVICE_STATUS['RETURNED']] // 排除已退回的设备
                ])->count();
                
                // 如果所有设备都已确认，更新订单状态为已确认(4)
                if ($unconfirmed == 0) {
                    $order_result = $this->model->where([['id', '=', $device['order_id']]])->update([
                        'status' => RecycleOrderDict::ORDER_STATUS['PAYING'],
                        'update_at' => time()
                    ]);
                    
                    if (!$order_result) {
                        throw new \Exception('更新订单状态失败');
                    }
                }
                
                // 提交事务
                $deviceModel->commit();
                return true;
                
            } catch (\Exception $e) {
                // 回滚事务
                $deviceModel->rollback();
                throw new \Exception($e->getMessage());
            }
            
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    // 单台取消
    public function deviceCancle($device_id)
    {
        try {
            $deviceModel = new PhoneShopRecycleOrderDevice();
            
            // 获取设备信息
            $device = $deviceModel->where([['id', '=', $device_id]])->find();
            if (empty($device)) {
                throw new \Exception('设备不存在');
            }
            
            // 检查设备状态是否为已质检(3)
            if ($device['status'] != 3) {
                throw new \Exception('设备状态不正确，无法取消');
            }
            
            // 开启事务
            $deviceModel->startTrans();
            
            try {
                // 更新设备状态为已退回(6)
                $result = $deviceModel->where([['id', '=', $device_id]])->update([
                    'status' => RecycleOrderDict::DEVICE_STATUS['RETURNED'],
                    'update_at' => time()
                ]);
                
                if (!$result) {
                    throw new \Exception('更新设备状态失败');
                }
                
                // 检查订单下是否还有未处理的设备
                $pending_devices = $deviceModel->where([
                    ['order_id', '=', $device['order_id']],
                    ['status', '<>', RecycleOrderDict::DEVICE_STATUS['CONFIRMED']], // 不是已确认
                    ['status', '<>', RecycleOrderDict::DEVICE_STATUS['RETURNED']]  // 不是已退回
                ])->count();
                
                // 如果没有未处理的设备，检查是否有确认的设备
                if ($pending_devices == 0) {
                    $confirmed_devices = $deviceModel->where([
                        ['order_id', '=', $device['order_id']],
                        ['status', '=', RecycleOrderDict::DEVICE_STATUS['CONFIRMED']]
                    ])->count();
                    
                    // 更新订单状态
                    // 有确认的设备则为已确认(4)，否则为已取消(7)
                    $new_status = $confirmed_devices > 0 ? 
                        RecycleOrderDict::ORDER_STATUS['PAYING'] : 
                        RecycleOrderDict::ORDER_STATUS['CANCELLED'];
                    
                    $order_result = $this->model->where([['id', '=', $device['order_id']]])->update([
                        'status' => $new_status,
                        'update_at' => time()
                    ]);
                    
                    if (!$order_result) {
                        throw new \Exception('更新订单状态失败');
                    }
                }
                
                // 提交事务
                $deviceModel->commit();
                return true;
                
            } catch (\Exception $e) {
                // 回滚事务
                $deviceModel->rollback();
                throw new \Exception($e->getMessage());
            }
            
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }
    
    // deleteOrder  
    protected function deleteOrder($id)
    {
        // 开启事务
        $this->model->startTrans();
        $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->delete();
        $deviceModel = new PhoneShopRecycleOrderDevice();
        $deviceModel->where([['order_id', '=', $id], ['site_id', '=', $this->site_id]])->delete();
        // 提交事务
        $this->model->commit();
        return true;
    }
}

