<?php
return [
    [
        'menu_name' => '消息通知',
        'menu_key' => 'tk_notice',
        'menu_short_name' => '消息通知',
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
                'menu_name' => '基本设置',
                'menu_key' => 'tk_notice_config',
                'menu_short_name' => '基本设置',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'tk_notice/config',
                'router_path' => 'tk_notice/config',
                'view_path' => 'config/index',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];