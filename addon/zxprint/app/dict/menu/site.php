<?php
return [
    [
        'menu_name' => '智享小票打印',
        'menu_key' => 'zxprint',
        'menu_short_name' => '小票',
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
                'menu_name' => '打印设置',
                'menu_key' => 'zxprint/zx_print',
                'menu_short_name' => '设置',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'zx_print/zx_print',
                'router_path' => 'zx_print/zx_print',
                'view_path' => 'zx_print/zx_print',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '打印记录',
                'menu_key' => 'zxprint/zx_printlog',
                'menu_short_name' => '记录',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'zx_printlog/zx_printlog',
                'router_path' => 'zx_printlog/zx_printlog',
                'view_path' => 'zx_printlog/zx_printlog',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];