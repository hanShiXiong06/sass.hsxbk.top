<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\phone_shop_price\app\adminapi\controller\recycle_order;

use core\base\BaseAdminController;
use addon\phone_shop_price\app\service\admin\recycle_order\RecycleDeviceService;

/**
 * 回收设备控制器
 * Class RecycleDevice
 * @package addon\phone_shop_price\app\adminapi\controller\recycle_order
 */
class RecycleDevice extends BaseAdminController
{
    /**
     * 获取设备列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            ["page", 1],
            ["limit", 10],
            ["name", ""],
            ["model", ""],
            ["status", ""]
        ]);
        return success((new RecycleDeviceService())->getPage($data));
    }

    /**
     * 设备详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new RecycleDeviceService())->getInfo($id));
    }

    /**
     * 添加设备
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            ["name", ""],
            ["model", ""],
            ["price", 0],
            ["status", 1],
            ["description", ""]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleDevice.add');
        $id = (new RecycleDeviceService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 编辑设备
     * @param int $id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ["name", ""],
            ["model", ""],
            ["price", 0],
            ["status", 1],
            ["description", ""]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleDevice.edit');
        (new RecycleDeviceService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 删除设备
     * @param int $id
     * @return \think\Response
     */
    public function del(int $id)
    {
        (new RecycleDeviceService())->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 更新设备状态
     */
    public function editStatus(int $id)
    {
        $data = $this->request->params([
            ["status", 1]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleDevice.editStatus');
        (new RecycleDeviceService())->editStatus($id, $data['status']);
        return success('EDIT_SUCCESS');
    }

    /**
     * 更新设备价格
     */
    public function editPrice(int $id)
    {
        $data = $this->request->params([
            ["price", 0]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order\RecycleDevice.editPrice');
        (new RecycleDeviceService())->editPrice($id, $data['price']);
        return success('EDIT_SUCCESS');
    }

    /**
     * 获取订单下的设备列表
     */
    public function getOrderDevices(int $order_id)
    {
        return success((new RecycleDeviceService())->getOrderDevices($order_id));
    }
} 