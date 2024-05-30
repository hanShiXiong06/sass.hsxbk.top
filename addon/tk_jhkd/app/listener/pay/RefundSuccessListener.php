<?php
declare (strict_types=1);

namespace addon\tk_jhkd\app\listener\pay;

use addon\tk_jhkd\app\service\core\OrderService;
use app\model\pay\Pay;
use core\exception\CommonException;
use addon\tk_jhkd\app\dict\order\JhkdOrderDict;

/**
 * 退款完成后操作
 */
class RefundSuccessListener
{
    public function handle($data)
    {
        $this->PayModel = new Pay();
        $trade_id = $data['trade_id'];
        $site_id = $data['site_id'];
        $payInfo = $this->PayModel->where(['site_id' => $site_id, 'trade_id' => $trade_id])->findOrEmpty();
        if($payInfo['trade_type']==JhkdOrderDict::getOrderType()['type']){
            (new OrderService())->refund($data);
        }

    }
}
