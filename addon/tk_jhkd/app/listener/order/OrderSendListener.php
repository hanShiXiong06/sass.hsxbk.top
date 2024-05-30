<?php


namespace addon\tk_jhkd\app\listener\order;
use addon\tk_jhkd\app\service\core\OrderService;
/**
 * 发单三方平台
 */
class OrderSendListener
{
    public function handle($order_id)
    {
        (new OrderService())->sendOrder($order_id);
    }
}

