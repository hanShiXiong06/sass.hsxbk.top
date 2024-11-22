<?php
return [
    [
        'menu_name' => '导入导出',
        'menu_key' => 'spdr_shop_goods',
        'menu_short_name' => '商品',
        'menu_type' => '0',
        'parent_key' => 'shop',
        'icon' => 'nc-iconfont nc-icon-wendangV6xx1',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '0',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '商品导出',
                'menu_key' => 'spdr_shop_goods_export',
                'menu_short_name' => '导出',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-wendangV6xx1',
                'api_url' => '',
                'router_path' => 'spdr/shop/goods/export_do',
                'view_path' => 'spdr/goods',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '商品导入',
                'menu_key' => 'spdr_shop_goods_import',
                'menu_short_name' => '导入',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-wendangV6xx1',
                'api_url' => '',
                'router_path' => 'spdr/shop/goods/import_do',
                'view_path' => 'spdr/import',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];