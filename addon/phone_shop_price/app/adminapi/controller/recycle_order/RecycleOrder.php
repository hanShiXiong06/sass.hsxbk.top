<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\adminapi\controller\recycle_order;

use core\base\BaseAdminController;
use addon\phone_shop_price\app\service\admin\recycle_order\RecycleOrderService;
use addon\phone_shop_price\app\dict\RecycleOrderDict;

/**
 * 回收订单控制器
 * Class RecycleOrder
 * @package addon\phone_shop_price\app\adminapi\controller\recycle_order
 */
class RecycleOrder extends BaseAdminController
{
    /**
     * 获取回收订单列表
     * @return \think\Response
     */
    public function lists()
    {
        
        $data = $this->request->params([
            ["page", 1],
            ["limit", 10],
            ["order_no", ""],
            ["send_username", ""],
            ["telphone", ""],
            ["status", ""],
            ["start_time", ""],
            ["end_time", ""]
        ]);
        return success((new RecycleOrderService())->getPage($data));
    }

    /**
     * 回收订单详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new RecycleOrderService())->getInfo($id));
    }

    /**
     * 添加回收订单
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["send_username", ""],
            ["telphone", ""],
            ["express_id", ""],
            ["pay_type", ""],
            ["account", ""],
            ["status", 1],
            ["comment", ""]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.add');
        $id = (new RecycleOrderService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 编辑回收订单
     * @param int $id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ["status", ""]
        ]);
        
      //   $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.edit');
        (new RecycleOrderService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 删除回收订单
     * @param int $id
     * @return \think\Response
     */
    public function deleteOrder(int $id)
    {
        (new RecycleOrderService())->deleteOrder($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 更新���备状态
     * @return \think\Response
     */
    public function updateDeviceStatus(int $id ) 
    {
        $data = $this->request->params([
           
            ["status", ""],
            ['check_result',''],
            ['order_id',0],
            ['model',''],
            ['price_remark',''],
            ['final_price',0],

        ]);
        // 获取 设备的id  从路径中
      
        // $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.updateStatus');
     
        return  (new RecycleOrderService())->updateDeviceStatus($id, $data);
    }

    /**
     * 更新设备最终价格
     * @return \think\Response
     */
    public function updateDeviceFinalPrice()
    {
        $data = $this->request->params([
            ["device_id", 0],
            ["final_price", 0],
            ["remark", ""]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.updatePrice');
        return (new RecycleOrderService())->updateDeviceFinalPrice($data['device_id'], $data['final_price'], $data['remark']);
    }

    /**
     * 更新设备退货信息
     * @return \think\Response
     */
    public function updateDeviceReturn()
    {
        $data = $this->request->params([
            ["device_id", 0],
            ["express_company", ""],
            ["express_no", ""],
            ["remark", ""]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.updateReturn');
        return (new RecycleOrderService())->updateDeviceReturn($data['device_id'], $data);
    }

    /**
     * 获取设备详情
     * @return \think\Response
     */
    public function getDeviceDetail()
    {
        $device_id = $this->request->param('id', 0);
        if (empty($device_id)) {
            return error('参数错误');
        }
        return (new RecycleOrderService())->getDeviceDetail($device_id);
    }

    /**
     * 添加设备
     * @return \think\Response
     */
    public function addDevice()
    {
        $data = $this->request->params([
            ["order_id", 0],
            ["imei", ""],
            ["model", ""],
            ["initial_price", 0],
            ["remark", ""],
            ["status", 1]
        ]);
        
        // $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.addDevice');
        return (new RecycleOrderService())->addDevice($data);
    }

    /**
     * 删除设备
     * @param int $id
     * @return \think\Response
     */
    public function deleteDevice(int $id)
    {
        return (new RecycleOrderService())->deleteDevice($id);
    }

    /**
     * 获取设备详情
     * @param int $id
     * @return \think\Response
     */
    public function deviceInfo(int $id)
    {
        return (new RecycleOrderService())->getDeviceDetail($id);
    }

    /**
     * 编辑设备
     * @param int $id
     * @return \think\Response
     */
    public function editDevice(int $id)
    {
        $data = $this->request->params([
            ["imei", ""],
            ["model", ""],
            ["initial_price", 0],
            ["remark", ""]
        ]);
        
        // $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleOrder.editDevice');
        return (new RecycleOrderService())->editDevice($id, $data);
    }

    // getStatus 获取订单状态列表
    public function getStatus(){
        return success(RecycleOrderDict::ORDER_STATUS_TEXT);
    }
    

}
