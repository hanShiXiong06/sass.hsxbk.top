<?php
return [
    [
        'menu_name' => '一号通',
        'menu_key' => 'tk_yht',
        'menu_short_name' => '一号通',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont-iconjishuzhichi',
        'api_url' => '',
        'router_path' => 'tk_yht',
        'view_path' => '',
        'methods' => '',
        'sort' => '100',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '通用设置',
                'menu_key' => 'tk_yht_common_config',
                'menu_short_name' => '通用设置',
                'menu_type' => '1',
                'icon' => 'iconfont-iconyun1',
                'api_url' => '',
                'router_path' => 'commonconfig',
                'view_path' => 'config/set',
                'methods' => 'post',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '商品采集',
                'menu_key' => 'tk_yht_copy',
                'menu_short_name' => '采集',
                'menu_type' => '1',
                'icon' => 'iconfont-iconyuanquan_huaban1',
                'api_url' => '',
                'router_path' => 'copy_index',
                'view_path' => 'copy/index',
                'methods' => 'post',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '物流查询',
                'menu_key' => 'tk_yht_delivery_search',
                'menu_short_name' => '物流',
                'menu_type' => '1',
                'icon' => 'iconfont-iconluxiandingda',
                'api_url' => '',
                'router_path' => 'delivery_search',
                'view_path' => 'delivery/search',
                'methods' => 'post',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '短信设置',
                'menu_key' => 'tk_yht_hello_world',
                'menu_short_name' => '短信设置',
                'menu_type' => '1',
                'icon' => 'iconfont-iconshangpinpinglun',
                'api_url' => 'tk_yht/config/get/get/get/get/get/get/get',
                'router_path' => 'yhtconfig',
                'view_path' => 'config/config',
                'methods' => 'get',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '接口文档',
                'menu_key' => 'tk_yht_docs',
                'menu_short_name' => '接口文档',
                'menu_type' => '1',
                'icon' => 'iconfont-iconjishuzhichi',
                'api_url' => '',
                'router_path' => 'yhtdocs',
                'view_path' => 'doc/index',
                'methods' => 'post',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
    [
        'menu_name' => '商品采集',
        'menu_key' => 'tk_yht_shop_copy',
        'menu_short_name' => '采集',
        'parent_key' => 'shop',
        'menu_type' => '1',
        'icon' => 'iconfont-iconjishuzhichi',
        'api_url' => '',
        'router_path' => 'shop_goods_copy',
        'view_path' => 'copy/index',
        'methods' => '',
        'sort' => '0',
        'status' => '1',
        'is_show' => '1',]
];