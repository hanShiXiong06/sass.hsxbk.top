<?php
return [
    [
        'menu_name' => '升级助手',
        'menu_key' => 'tk_upgrade',
        'menu_short_name' => '升级',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'nc-iconfont nc-icon-fenxiangV6xx1',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '100',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '升级助手',
                'menu_key' => 'tk_upgrade_base',
                'menu_short_name' => '升级助手',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-fenxiangV6xx1',
                'api_url' => 'tk_upgrade/base',
                'router_path' => 'tk_upgrade/base',
                'view_path' => 'base/index',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];