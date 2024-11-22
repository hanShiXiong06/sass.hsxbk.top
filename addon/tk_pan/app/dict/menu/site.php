<?php
return [
    [
        'menu_name' => '请前往设置',
        'menu_key' => 'tk_pan',
        'menu_short_name' => '请前往设置',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => '',
        'api_url' => '',
        'router_path' => 'tk_pan_menu',
        'view_path' => '',
        'methods' => '',
        'sort' => '100',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '存储设置完成设置',
                'menu_key' => 'tk_pan_hello_world',
                'menu_short_name' => '存储设置完成设置',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'tk_pan/config',
                'view_path' => 'config/index',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];