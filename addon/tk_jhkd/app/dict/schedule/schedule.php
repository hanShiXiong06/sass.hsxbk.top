<?php

return [
    [
        'key' => 'jhkd_order_close',
        'name' => '聚合快递未支付订单自动关闭',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 1
        ],
        'class' => 'addon\tk_jhkd\app\job\order\OrderClose',
        'function' => ''
    ],
    [
        'key' => 'jhkd_order_addpay',
        'name' => '聚合快递补差价订单催收',
        'desc' => '',
        'time' => [
            'type' => 'day',
            'day' => 1,
            'hour' => 10,
            'minute' => 0,
            'second' => 0
        ],
        'class' => 'addon\tk_jhkd\app\job\order\AddPay',
        'function' => ''
    ],
    [
        'key' => 'jhkd_order_commission_order',
        'name' => '聚合快递结算佣金单',
        'desc' => '',
        'time' => [
            'type' => 'day',
            'day' => 1,
            'hour' => 4,
            'minute' => 0,
            'second' => 0
        ],
        'class' => 'addon\tk_jhkd\app\job\order\JsOrder',
        'function' => ''
    ],
    [
        'key' => 'jhkd_order_commission_close_order',
        'name' => '聚合快递佣金单关闭',
        'desc' => '',
        'time' => [
            'type' => 'day',
            'day' => 1,
            'hour' => 3,
            'minute' => 0,
            'second' => 0
        ],
        'class' => 'addon\tk_jhkd\app\job\order\CloseOrderCommission',
        'function' => ''
    ],
];
