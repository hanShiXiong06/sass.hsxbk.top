<?php

namespace addon\o2o\app\listener\notice_template;

use addon\o2o\app\model\Order;
use app\listener\notice_template\BaseNoticeTemplate;

class OrderPay extends BaseNoticeTemplate
{

    private $key = 'o2o_order_pay';

    public function handle(array $params)
    {
        if ($this->key == $params['key']) {
            $order = (new Order())->where([['order_id', '=', $params['data']['order_id']]])->findOrEmpty();
            if (!$order->isEmpty()) {
                return $this->toReturn(
                    [
                        '__wechat_page' => getWapDemain($order['site_id']) . '/addon/pages/o2o/order/detail?order_id=' . $order['order_id'],//模板消息链接
                        '__weapp_page' => 'addon/pages/o2o/order/detail?order_id=' . $order['order_id'],//小程序链接
                        'goods_name' => $order['order_name'],
                        'order_no' => $order['order_no'],
                        'order_money' => $order['order_money'], //交易流水号
                        'create_time' => $order['create_time'],//创建时间
                    ],
                    [
                        'member_id' => $order['member_id']
                    ]
                );
            }
        }
    }
}