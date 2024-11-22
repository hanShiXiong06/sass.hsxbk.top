<?php

return [
    'FAST_PAY_SITE_COMMONLINK' => [
        'key' => 'fast_pay',
        'addon_title' => '快速支付',
        'title' => '快速支付',
        'child_list' => [
            [
                'name' => 'FAST_PAY_SITE_PAY',
                'title' => '商家收款',
                'url' => '/addon/fast_pay/pages/pay/pay',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'FAST_PAY_SITE_ORDER',
                'title' => '支付记录',
                'url' => '/addon/fast_pay/pages/pay/list',
                'is_share' => 1,
                'action' => 'decorate'
            ],
        ]
    ],

];