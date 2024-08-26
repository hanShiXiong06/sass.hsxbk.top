<?php
declare (strict_types = 1);

namespace addon\phone_shop\app\listener\refund;

use addon\phone_shop\app\dict\order\OrderRefundDict;
use addon\phone_shop\app\dict\order\OrderRefundLogDict;
use addon\phone_shop\app\service\core\refund\CoreRefundLogService;

/**
 * 退款修改退货后操作
 */
class AfterShopOrderRefundEditDelivery
{

    public function handle($data){

        $refund_data = $data['refund_data'];
        $main_type = $data['main_type'] ?? OrderRefundLogDict::MEMBER;
        $main_id = $data['main_id'] ?? $refund_data['member_id'];
        //日志
        (new CoreRefundLogService())->add([
            'order_refund_no' => $refund_data['order_refund_no'],
            'status' => $refund_data['status'],
            'main_type' => $main_type,
            'main_id' => $main_id,
            'type' => OrderRefundDict::EDIT_DELIVERY_ACTION,
            'content' => ''
        ]);
        //消息发送
    }
}