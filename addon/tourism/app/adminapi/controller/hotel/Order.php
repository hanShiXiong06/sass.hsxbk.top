<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tourism\app\adminapi\controller\hotel;

use addon\tourism\app\service\admin\hotel\HotelOrderService;
use core\base\BaseAdminController;
use think\Response;

class Order extends BaseAdminController
{
    /**
     * 酒店订单列表
     * @return Response
     */
    public function lists()
    {
        $data = $this->request->params([
            ['order_no', ''],
            ['order_status', ''],
            ['order_from', ''],
            ['create_time', []],
            ['pay_time', []],
            ['member_id', ''],
        ]);
        return success((new HotelOrderService())->getPage($data));
    }

    /**
     * 酒店订单详情
     * @param int $order_id
     * @return Response
     */
    public function detail(int $order_id)
    {
        return success((new HotelOrderService())->getDetail($order_id));
    }

    /**
     * 酒店订单状态
     */
    public function status()
    {
        return success((new HotelOrderService())->getStatus());
    }



}
