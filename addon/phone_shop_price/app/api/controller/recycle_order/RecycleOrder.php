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

namespace addon\phone_shop_price\app\api\controller\recycle_order;

use core\base\BaseApiController;
use addon\phone_shop_price\app\service\api\recycle_order\RecycleOrderService;
use addon\phone_shop_price\app\dict\RecycleOrderDict;
use think\App;

/**
 * 二手机回收报价订单控制器
 * Class PhoneShopRecycleOrder
 * @package addon\phone_shop_price\app\api\controller\phone_shop_recycle_order
 */
class RecycleOrder extends BaseApiController
{
    /**
     * 二手机回收报价订单服务
     * @var RecycleOrderService
     */
    protected $service;

    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->service = new RecycleOrderService();
    }

    /**
     * 获取二手机回收报价订单列表
     * @return \think\Response
     */
    public function lists()
    {
        
        $data = $this->request->params([
            ["order_no", ""],
            ["express_id", ""],
            ["send_username", ""],
            ["telphone", ""],
            ["pay_type", ""],
            ["account", ""],
            ["status", ""],
            ["create_at", ["", ""]],
            ["over_at", ""],
            ["comment", ""],
            ["close_express_id", ""]
        ]);
      
        return success($this->service->getPage($data));
    }

    /**
     * 获取二手机回收报价订单详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
       
        $info = $this->service->getInfo($id);
        if (empty($info)) {
            return error('', '订单不存在');
        }
        // 获取设备列表
        $info['devices'] = $this->service->getOrderDevices($id);
        return success($info);
    }
   
  

    /**
     * 添加二手机回收报价订单
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["express_id", ""],
            ["send_username", ""],
            ["telphone", ""],
            ["pay_type", ""],
            ["account", ""],
            ["delivery_type", "mail"],
            ["return_type", "self"],
            ["return_address", ""],
            ["qrcode_image", ""],
            ["comment", ""],
            ["phone_list", []]
        ]);
        
     //   $this->validate($data, 'addon\phone_shop_price\app\validate\phone_shop_recycle_order\PhoneShopRecycleOrder.add');
        $res = $this->service->add($data);
        return success(['id' => $res]);
    }

    /**
     * 编辑二手机回收报价订单
     * @param int $id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ["express_id", ""],
            ["send_username", ""],
            ["telphone", ""],
            ["pay_type", ""],
            ["account", ""],
            ["delivery_type", "mail"],
            ["return_type", "self"],
            ["return_address", ""],
            ["qrcode_image", ""],
            ["status", ""],
            ["comment", ""],
            ["close_express_id", ""],
            ["phone_list", []]
        ]);
        
        $this->validate($data, 'addon\phone_shop_price\app\validate\phone_shop_recycle_order\PhoneShopRecycleOrder.edit');
        $res = $this->service->edit($id, $data);
        return success($res);
    }

    /**
     * 更新设备验机信息
     * @param int $id
     * @return \think\Response
     */
    public function updateDeviceCheck(int $id)
    {
        $data = $this->request->params([
            ["check_status", 0],
            ["check_result", ""],
            ["initial_price", 0],
            ["final_price", 0],
            ["price_remark", ""]
        ]);
        
        $res = $this->service->updateDeviceCheck($id, $data);
        return success($res);
    }

    /**
     * 删除二手机回收报价订单
     * @param int $id
     * @return \think\Response
     */
    public function del(int $id)
    {
        $res = $this->service->del($id);
        return success($res);
    }

    /**
     * 获取所有会员
     * @return \think\Response
     */
    public function getMemberAll()
    {
        $list = $this->service->getMemberAll();
        return success($list);
    }

    /**
     * 获取订单状态列表
     * @return \think\Response
     */
    public function getStatus()
    {
        $status = $this->service->getStatus();
        return success($status);
    }

    /**
     * 获取订单状态列表
     */
    // public function getStatusList()
    // {
    //     return success([
    //         'order_status' => RecycleOrderDict::ORDER_STATUS_TEXT,
    //         'device_status' => RecycleOrderDict::DEVICE_STATUS_TEXT
    //     ]);
    // }

    // getDeviceStatus 获取设备状态列表
    public function getDeviceStatus()
    {
        return success([
            'device_status' => RecycleOrderDict::DEVICE_STATUS_TEXT,
            'order_status' => RecycleOrderDict::ORDER_STATUS_TEXT,
        ]);
    }

    /**
     * 获取订单状态统计
     */
    public function getStatusCount()
    {
        
        $service = new RecycleOrderService();
        $result = $service->getStatusCount( );
        return success($result);
    }
    //updateStatus
    public function updateStatus(int $id)
    {
        $data = $this->request->params([
            ["status", ""],
            ["action", ""]
        ]);
        $res = $this->service->updateStatus($id, $data);
        return success($res);
    }
    // deviceConfirm    
    public function deviceConfirm(int $id)
    {
        $res = $this->service->deviceConfirm($id);
        return success($res);
    }
    // deviceCancel
    public function deviceCancel(int $id)
    {
        $res = $this->service->deviceCancel($id);
        return success($res);
    }
}
