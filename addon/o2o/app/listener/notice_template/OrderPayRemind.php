<?php
declare (strict_types = 1);

namespace addon\o2o\app\listener\notice_template;

use addon\shop\app\dict\order\OrderDict;
use addon\shop\app\service\core\order\CoreOrderService;

/**
 * 订单催付通知
 */
class OrderPayRemind
{
    private $key = 'o2o_order_pay_remind';

    public function handle(array $params)
    {
        if ($this->key == $params['key']) {
            $order = (new CoreOrderService())->getInfo($params['order_id']);
            if (!$order->isEmpty() && $order['status'] == OrderDict::WAIT_PAY) {
                $wap_domain = !empty(env("system.wap_domain")) ? preg_replace('#/$#', '', env("system.wap_domain")) : request()->domain();
                return $this->toReturn(
                    [
                        '__wechat_page' =>'/addon/o2o/pages/order/detail?order_id=' . $order['order_id'],//模板消息链接
                        '__weapp_page' => 'addon/o2o/pages/order/detail?order_id=' . $order['order_id'],//小程序链接
                        'body' => $order['body'],
                        'order_no' => $order['order_no'],
                        'order_money' => $order['order_money'], //交易流水号
                        'timeout' => $order['timeout'],
                        'url' => $wap_domain . '/addon/o2o/pages/order/detail?order_id=' . $order['order_id']
                    ],
                    [
                        'member_id' => $order['member_id']
                    ]
                );
            }
        }
    }
}
