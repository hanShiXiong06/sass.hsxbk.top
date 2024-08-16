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

namespace addon\recharge\app\api\controller;

use addon\recharge\app\service\api\RechargeOrderService;
use core\base\BaseApiController;
use think\Response;

class Recharge extends BaseApiController
{
    /**
     * 充值订单创建
     * @return Response
     */
    public function create()
    {
        $data = $this->request->params([
            [ 'member_message', '' ],
            [ 'recharge_money', 0 ]
        ]);
        $res = ( new RechargeOrderService() )->recharge($data);
        return success($res);
    }

    public function lists()
    {
        $data = $this->request->params([
            [ 'order_status', '' ]
        ]);
        $res = ( new RechargeOrderService() )->getPage($data);
        return success($res);
    }

    /**
     * 查询充值订单详情
     * @param int $order_id
     * @return Response
     */
    public function detail(int $order_id)
    {
        $res = ( new RechargeOrderService() )->getDetail($order_id);
        return success($res);
    }
}
