<?php

return [
    [
        'key' => 'order_close',
        'name' => '未支付订单自动关闭',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 1
        ],
        'class' => '',
        'function' => ''
    ],
    [
        'key' => 'site_expire_close',
        'name' => '站点到期自动关闭',
        'desc' => '',
        'time' => [
            'type' => 'day',
            'day' => 1,
            'hour' => 1,
            'min' => 1
        ],
        'class' => 'app\job\schedule\SiteExpireClose',
        'function' => ''
    ],

    [
        'key' => 'transfer_check_finish',
        'name' => '检验在线转账是否处理完毕',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 5
        ],
        'class' => 'app\job\transfer\schedule\CheckFinish',
        'function' => ''
    ],
//    [
//        'key' => 'site_stat',
//        'name' => '站点统计',
//        'desc' => '',
//        'time' => [
//            'type' => 'hour',
//            'hour' => 1,
//        ],
//        'class' => 'app\job\schedule\SiteStatJob',
//        'function' => ''
//    ]
];
