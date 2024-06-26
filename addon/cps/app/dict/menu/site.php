<?php
return [
    [
        'menu_name' => 'CPS联盟',
        'menu_key' => 'cps',
        'menu_short_name' => 'CPS联盟',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont-iconyingyongshichang',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '90',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '联盟设置',
                'menu_key' => 'cps_union_config',
                'menu_short_name' => '联盟设置',
                'menu_type' => '1',
                'icon' => 'element-OfficeBuilding',
                'api_url' => '',
                'router_path' => 'cps/config',
                'view_path' => 'cps/config',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '聚推客订单',
                'menu_key' => 'cps_union_jtk_order',
                'menu_short_name' => '聚推客订单',
                'menu_type' => '1',
                'icon' => 'element-OfficeBuilding',
                'api_url' => '',
                'router_path' => 'cps/jtk_order',
                'view_path' => 'cps/jtk_order',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '充值订单',
                'menu_key' => 'cps_union_recharge_order',
                'menu_short_name' => '充值订单',
                'menu_type' => '1',
                'icon' => 'element-PriceTag',
                'api_url' => '',
                'router_path' => 'cps/recharge_order',
                'view_path' => 'cps/recharge_order',
                'methods' => '',
                'sort' => '80',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];