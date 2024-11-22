<?php
declare (strict_types = 1);

namespace addon\tk_notice\app\listener\refund;

use addon\shop\app\dict\order\OrderRefundDict;
use addon\shop\app\dict\order\OrderRefundLogDict;
use addon\shop\app\service\core\refund\CoreRefundLogService;

/**
 * 退款申请后操作
 */
class AfterShopOrderRefundApply
{

    public function handle($data){
        $data=$data['refund_data']??['order_refund_no'=>'','site_id'=>''];
        $text='新的商城订单申请退款,退款单号:'.$data['order_refund_no'].',请及时处理!';
        event('TkNoticeSend', ['site_id' => $data['site_id'], 'text' => $text, 'key' => 'shoprefund']);
    }
}
