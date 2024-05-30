<?php

// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team hsx
// +----------------------------------------------------------------------

namespace addon\shop\app\service\admin\order;

use addon\shop\app\dict\order\OrderDict;
use addon\shop\app\dict\order\OrderLogDict;
use addon\shop\app\service\admin\order\OrderService;
use app\service\admin\member\MemberAccountService;

use core\base\BaseAdminService;
use app\service\api\pay\PayService;

/**
 * 订单支付服务层
 */
class OrderPayService extends BaseAdminService
{

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 订单关闭
     * @param int $order_id
     * @return bool
     */
    public function orderPay(int $order_id)
    {
        $order_info = (new OrderService())->getDetail($order_id);
        $data = [
            'member_id'=>$order_info['member_id'],
            'account_data'=>$order_info['order_money'],
            'memo'=>""
        ];

        $res = (new MemberAccountService())->adjustBalance($data);

        $ress=  (new PayService())->pay('balancepay', 'shop', $order_id);

        return  $ress;
    }

}
