<?php

namespace addon\fast_pay\app\listener\pay;
use addon\fast_pay\app\model\order\Order;
use app\dict\pay\PayDict;
use addon\fast_pay\app\dict\order\OrderDict;
use think\facade\Log;

/**
 * 支付单据创建事件
 */
class PayCreateListener
{
    public function handle(array $params)
    {
        $trade_type = $params['trade_type'] ?? '';
        Log::write($params);
        if ($trade_type == OrderDict::getOrderType()['type']) {
            $trade_id = $params['trade_id'];
            $site_id = $params['site_id'];
            $order_info = (new Order())->where(['site_id'=>$site_id,'id'=> $trade_id])->findOrEmpty();
            return [
                'site_id' => $order_info['site_id'],
                'main_type' => PayDict::MEMBER,
                'main_id' => $order_info['member_id'],//买家id
                'money' => $order_info['order_money'],//订单金额
                'trade_type' =>  $trade_type,//业务类型
                'trade_id' => $trade_id,
                'body' => '商家收银台',
            ];
        }

    }
}