<?php
return [
    [
        'menu_name' => '导入导出',
        'menu_key' => 'site_goods_export_shop_goods',
        'menu_short_name' => '批量',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'nc-iconfont nc-icon-jiaohuanV6xx',
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
                'menu_key' => 'site_goods_export_shop_goods_export',
                'menu_short_name' => '导出',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-shezhiV6xx1',
                'api_url' => '',
                'router_path' => 'site_spdr/shop/goods/export_do',
                'view_path' => 'spdr/goods',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '商品导入',
                'menu_key' => 'site_goods_export_shop_goods_import',
                'menu_short_name' => '导入',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-xiangshangV6xx',
                'api_url' => '',
                'router_path' => 'site_spdr/shop/goods/import_do',
                'view_path' => 'spdr/import',
                'methods' => '',
                'sort' => '99',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '导入列表',
                'menu_key' => 'site_goods_export_spdr_list_spdrlist_spdrList_list',
                'menu_short_name' => '列表',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-yingyongliebiaoV6xx',
                'api_url' => 'site_spdr/spdrlist',
                'router_path' => 'spdrlist/spdrlist',
                'view_path' => 'spdrlist/spdrlist',
                'methods' => 'get',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
    [
        'menu_name' => '导入导出',
        'menu_key' => 'goods_export_shop_goods',
        'menu_short_name' => '批量',
        'parent_key' => 'shop',
        'menu_type' => '0',
        'icon' => 'nc-iconfont nc-icon-jiaohuanV6xx',
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
                'menu_key' => 'goods_export_shop_goods_export',
                'menu_short_name' => '导出',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-shezhiV6xx1',
                'api_url' => '',
                'router_path' => 'spdr/shop/goods/export_do',
                'view_path' => 'spdr/goods',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '商品导入',
                'menu_key' => 'goods_export_shop_goods_import',
                'menu_short_name' => '导入',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-xiangshangV6xx',
                'api_url' => '',
                'router_path' => 'spdr/shop/goods/import_do',
                'view_path' => 'spdr/import',
                'methods' => '',
                'sort' => '99',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '导入列表',
                'menu_key' => 'goods_export_spdr_list_spdrlist_spdrList_list',
                'menu_short_name' => '列表',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-yingyongliebiaoV6xx',
                'api_url' => 'spdr/spdrlist',
                'router_path' => 'spdrlist/spdrlist',
                'view_path' => 'spdrlist/spdrlist',
                'methods' => 'get',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];