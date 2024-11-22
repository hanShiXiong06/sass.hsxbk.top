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
                    'icon' => '/addon/tk_cps/rule/growth-rule-bwc.png',
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
    'tk_cps_order' => [
        'key' => 'tk_cps_order',
        'name' => 'CPS订单',
        'desc' => 'CPS订单完成结算后发放成长值',
        'component' => '/src/addon/tk_cps/views/member/components/growth-rule-cpsorder.vue',
        'calculate' =>'',
        'content' => [
            'admin' => function($site_id, $config) {
                return "CPS订单完成结算后可获得{$config['growth']}成长值";
            },
            'task' => function($site_id, $config) {
                return [
                    'icon' => '/addon/tk_cps/rule/growth-rule-cps.png',
                    'title' => 'CPS订单完成结算后',
                    'desc' => "CPS订单完成结算后可获得{$config['growth']}成长值",
                    'button' => [
                        'text' => '去下单',
                        'wap_redirect' => '/addon/tk_cps/pages/diy'
                    ]
                ];
            }
        ]
    ],
];
