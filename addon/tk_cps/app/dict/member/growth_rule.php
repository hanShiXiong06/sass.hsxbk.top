<?php

return [
    'tk_cps_bwc_order' => [
        'key' => 'tk_cps_bwc_order',
        'name' => '霸王餐下单',
        'desc' => '霸王餐订单完成后发放成长值',
        'component' => '/src/addon/tk_cps/views/member/components/growth-rule-bwcorder.vue',
        'calculate' =>'',
        'content' => [
            'admin' => function($site_id, $config) {
                return "霸王餐订单完成后可获得{$config['growth']}成长值";
            },
            'task' => function($site_id, $config) {
                return [
                    'icon' => '/addon/tk_cps/rule/growth-rule-cart.png',
                    'title' => '霸王餐订单完成',
                    'desc' => "霸王餐订单完成后可获得{$config['growth']}成长值",
                    'button' => [
                        'text' => '去下单',
                        'wap_redirect' => '/addon/tk_cps/pages/bwc/act'
                    ]
                ];
            }
        ]
    ],

];
