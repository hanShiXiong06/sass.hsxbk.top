<?php

return [
    'grant' => [
        'tk_cps_bwc_order' => [
            'key' => 'tk_cps_bwc_order',
            'name' => '霸王餐下单',
            'desc' => '霸王餐订单完成赠送积分',
            'component' => '/src/addon/tk_cps/views/member/components/point-rule-bwcorder.vue',
            'calculate' => '', // 计算成长值,
            'content' => [
                'admin' => function ($site_id, $config) {
                    return "霸王餐订单完成后赠送{$config['point']}积分";
                },
                'task' => function ($site_id, $config) {
                    return [
                        'icon' => '/addon/tk_cps/rule/growth-rule-cart.png',
                        'title' => '霸王餐下单',
                        'desc' => "霸王餐订单完成后赠送{$config['point']}积分",
                        'button' => [
                            'text' => '去购买',
                            'wap_redirect' => '/addon/tk_cps/pages/bwc/act'
                        ]
                    ];
                }
            ]
        ],
        'tk_cps_order' => [
            'key' => 'tk_cps_order',
            'name' => 'CPS活动下单',
            'desc' => 'CPS活动下单结算完成赠送积分',
            'component' => '/src/addon/tk_cps/views/member/components/point-rule-cpsorder.vue',
            'calculate' => '', // 计算成长值,
            'content' => [
                'admin' => function ($site_id, $config) {
                    return "CPS活动下单结算完成后赠送{$config['point']}积分";
                },
                'task' => function ($site_id, $config) {
                    return [
                        'icon' => '/addon/tk_cps/rule/growth-rule-cart.png',
                        'title' => 'CPS活动下单',
                        'desc' => "CPS活动下单结算完成赠送{$config['point']}积分",
                        'button' => [
                            'text' => '去购买',
                            'wap_redirect' => '/addon/tk_cps/pages/diy'
                        ]
                    ];
                }
            ]
        ],
    ],
    'consume' => [
//        'shop_order_deduction' => [
//            'key' => 'shop_order_deduction',
//            'name' => '积分抵现',
//            'desc' => '订单交易时积分可抵部分现金',
//            'component' => '/src/addon/shop/views/member/components/point-rule-orderdeduction.vue',
//            'content' => [
//                'admin' => function($site_id, $config) {
//                    return "订单交易时{$config['point']}积分可抵{$config['money']}元";
//                }
//            ]
//        ]
    ]
];
