<?php
return [
    [
        'menu_name' => '每日签到',
        'menu_key' => 'dailySignIn',
        'menu_short_name' => '每日签到',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => '',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '100',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '每日签到',
                'menu_key' => 'dailySignIn_signIn',
                'menu_short_name' => '每日签到',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'dailySignIn/index',
                'router_path' => 'dailySignIn/index',
                'view_path' => 'index/index',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];