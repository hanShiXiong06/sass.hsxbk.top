<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\phone_shop\app\listener\order;

use addon\phone_shop\app\dict\order\OrderDict;
use addon\phone_shop\app\service\core\order\CoreOrderService;

/**
 * 通过支付信息获取手机端订单详情路径
 * Class WapOrderDetailPathListener
 * @package addon\phone_shop\app\listener\order
 */
class WapOrderDetailPathListener
{

    public function handle($params)
    {
        $trade_type = $params[ 'trade_type' ] ?? '';
        if (in_array($trade_type, [ OrderDict::TYPE ])) {
            $order_info = ( new CoreOrderService() )->getInfo($params[ 'trade_id' ]);
            return 'addon/phone_shop/pages/order/detail?order_id=' . $order_info[ 'order_id' ];
        }
    }
}