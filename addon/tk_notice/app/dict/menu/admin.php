<?php
return [
    [
        'menu_name' => '消息通知',
        'menu_key' => 'tk_notice_admin',
        'menu_short_name' => '通知',
        'parent_key' => 'setting_manage',
        'menu_type' => '0',
        'icon' => 'nc-iconfont nc-icon-shezhiV6xx1',
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
                'menu_key' => 'tk_notice_config_admin',
                'menu_short_name' => '基本设置',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-shezhiV6xx1',
                'api_url' => '',
                'router_path' => 'tk_notice/admin',
                'view_path' => 'config/admin',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];