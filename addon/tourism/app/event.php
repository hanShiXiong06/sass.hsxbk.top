<?php

return [
    //文件执行序列号
    'bind' => [
    ],

    'listen' => [
        'AddSiteAfter' => ['addon\tourism\app\listener\AddSiteAfterListener'],
        'PayCreate' => ['addon\tourism\app\listener\PayCreateListener'],
        'PaySuccess' => ['addon\tourism\app\listener\PaySuccessListener'],
        'RefundSuccess' => ['addon\tourism\app\listener\RefundSuccessListener'],
        'SiteIndex' => ['addon\tourism\app\listener\SiteIndexListener'],
        'NoticeData' => [
            'addon\tourism\app\listener\notice_template\OrderPay',
            'addon\tourism\app\listener\notice_template\OrderAutoClose',
            'addon\tourism\app\listener\notice_template\OrderVerifySuccess',
            'addon\tourism\app\listener\notice_template\OrderUseRemind',
            'addon\tourism\app\listener\notice_template\RefundSuccess',
            'addon\tourism\app\listener\notice_template\RefundRefuse'
        ],
        'WapIndex' => [ 'addon\tourism\app\listener\WapIndexListener' ],
        'BottomNavigation' => [ 'addon\tourism\app\listener\BottomNavigationListener' ],
    ],

    'subscribe' => [
    ],
];
