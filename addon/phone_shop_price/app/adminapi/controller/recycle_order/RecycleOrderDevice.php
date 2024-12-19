<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\adminapi\controller\recycle_order;

use addon\phone_shop_price\app\service\admin\recycle_order\RecycleOrderDeviceService;
use core\base\BaseAdminController;

/**
 * 回收订单设备控制器
 */
class RecycleOrderDevice extends BaseAdminController
{
    /**
     * @var RecycleOrderDeviceService
     */
    protected $service;

    public function __construct()
    {
        parent::__construct();
        $this->service = new RecycleOrderDeviceService();
    }

    /**
     * 获取设备列表
     * @return array
     */
    public function lists()
    {
        $data = $this->request->params([
            ['page', 1],
            ['limit', 10],
            ['order_id', ''],
            ['imei', ''],
            ['model', ''],
            ['status', ''],
        ]);
        return $this->success($this->service->getList($data));
    }

    /**
     * 获取设备详情
     * @param int $id
     * @return array
     */
    public function info(int $id)
    {
        return $this->success($this->service->getInfo($id));
    }

    /**
     * 获取订单下的设备列表
     * @param int $order_id
     * @return array
     */
    public function getOrderDevices(int $order_id)
    {
        return $this->success($this->service->getOrderDevices($order_id));
    }

    /**
     * 添加设备
     * @return array
     */
    public function add()
    {
        $data = $this->request->params([
            ['order_id', ''],
            ['imei', ''],
            ['model', ''],
            ['initial_price', ''],
            ['remark', ''],
        ]);
        $this->validate($data, 'recycle_order/RecycleOrderDevice.add');
        return $this->success($this->service->add($data));
    }

    /**
     * 编辑设备
     * @param int $id
     * @return array
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            ['imei', ''],
            ['model', ''],
            ['initial_price', ''],
            ['remark', ''],
        ]);
        $data['id'] = $id;
        $this->validate($data, 'recycle_order/RecycleOrderDevice.edit');
        return $this->success($this->service->edit($data));
    }

    /**
     * 删除设备
     * @param int $id
     * @return array
     */
    public function del(int $id)
    {
        return $this->success($this->service->del($id));
    }

    /**
     * 更新设备状态
     * @param int $id
     * @return array
     */
    public function editStatus(int $id)
    {
        $data = $this->request->params([
            ['status', ''],
            ['check_result', ''],
        ]);
        $data['id'] = $id;
        $this->validate($data, 'recycle_order/RecycleOrderDevice.edit_status');
        return $this->success($this->service->editStatus($data));
    }

    /**
     * 更新设备价格
     * @param int $id
     * @return array
     */
    public function editPrice(int $id)
    {
        $data = $this->request->params([
            ['final_price', ''],
            ['price_remark', ''],
        ]);
        $data['id'] = $id;
        $this->validate($data, 'recycle_order/RecycleOrderDevice.edit_price');
        return $this->success($this->service->editPrice($data));
    }
} 