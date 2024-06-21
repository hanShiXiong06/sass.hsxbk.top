<?php

return [
    'tk_cps_bwc_level' => [
        'key' => 'tk_cps_bwc_level',
        'name' => '特权', // 权益名称
        'desc' => '返现膨胀', // 权益说明
        'component' => '/src/addon/tk_cps/views/member/components/benefits-bwc-level.vue',
        "content" => [
            'admin' => function($site_id, $config) {
                return "霸王餐单单返{$config['expand']}元";
            },
            'member_level' => function($site_id, $config) {
                return [
                    'title' => "单单多享{$config['expand']}元",
                    'desc' => '霸王餐特权',
                    'icon' => '/static/resource/images/member/benefits/benefits_discount.png'
                ];
            }
        ]
    ],
    'tk_cps_bwc_fenxiao' => [
        'key' => 'tk_cps_bwc_fenxiao',
        'name' => '分销', // 权益名称
        'desc' => '霸王餐分销', // 权益说明
        'component' => '/src/addon/tk_cps/views/member/components/benefits-bwc-fenxiao.vue',
        "content" => [
            'admin' => function($site_id, $config) {
                return "霸王餐分销特权";
            },
            'member_level' => function($site_id, $config) {
                return [
                    'title' => "分销权益",
                    'desc' => '分销特权',
                    'icon' => '/static/resource/images/member/benefits/benefits_discount.png'
                ];
            }
        ]
    ]
];
