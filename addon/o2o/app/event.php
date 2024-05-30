<?php

return [
    //文件执行序列号
    'bind' => [
    ],

    'listen' => [
        'AddSiteAfter' => [ 'addon\o2o\app\listener\AddSiteAfter' ],
        'BottomNavigation' => [ 'addon\o2o\app\listener\BottomNavigationListener' ],

        //订单创建后
        'AfterO2oOrderCreate' => [ 'addon\o2o\app\listener\AfterO2oOrderCreate' ],
        //订单支付后
        'AfterO2oOrderPay' => [ 'addon\o2o\app\listener\AfterO2oOrderPay' ],

        'PayCreate' => ['addon\o2o\app\listener\pay\PayCreateListener'],
        'PaySuccess' => ['addon\o2o\app\listener\pay\PaySuccessListener'],
        'RefundSuccess' => ['addon\o2o\app\listener\pay\RefundSuccessListener'],

        'SiteIndex' => ['addon\o2o\app\listener\SiteIndexListener'],
        'NoticeData' => [
            'addon\o2o\app\listener\notice_template\OrderPay',
            'addon\o2o\app\listener\notice_template\OrderPayRemind',
            'addon\o2o\app\listener\notice_template\OrderAutoClose',
            'addon\o2o\app\listener\notice_template\RefundSuccess',
            'addon\o2o\app\listener\notice_template\RefundRefuse',
            'addon\o2o\app\listener\notice_template\O2oOrderService',
        ]
    ],

    'subscribe' => [
    ],
];
