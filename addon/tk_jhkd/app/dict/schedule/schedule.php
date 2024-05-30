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
];
