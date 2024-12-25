<?php
return [
    [
        'menu_name' => '手机保修查询',
        'menu_key' => 'hsx_phone_query',
        'menu_short_name' => '手机保修查询',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont icongaikuang1',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '100',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '配置信息',
                'menu_key' => 'hsx_phone_query_hsx_phone_query_config_hsx_phone_query_config_hsx_phone_query_config',
                'menu_short_name' => '配置信息',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'hsx_phone_query_config',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '配置信息列表',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_config_hsx_phone_query_config_hsx_phone_query_config_list',
                        'menu_short_name' => '配置信息列表',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_config',
                        'router_path' => 'hsx_phone_query_config/hsx_phone_query_config',
                        'view_path' => 'hsx_phone_query_config/hsx_phone_query_config',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '配置信息添加',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_config_hsx_phone_query_config_hsx_phone_query_config_add',
                        'menu_short_name' => '配置信息添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_config',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '配置信息编辑',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_config_hsx_phone_query_config_hsx_phone_query_config_edit',
                        'menu_short_name' => '配置信息编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_config/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '配置信息删除',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_config_hsx_phone_query_config_hsx_phone_query_config_delete',
                        'menu_short_name' => '配置信息删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_config/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '分类',
                'menu_key' => 'hsx_phone_query_hsx_phone_query_category_hsx_phone_query_category_hsx_phone_query_category',
                'menu_short_name' => '分类',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'hsx_phone_query_category',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '分类列表',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_category_hsx_phone_query_category_hsx_phone_query_category_list',
                        'menu_short_name' => '分类列表',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_category',
                        'router_path' => 'hsx_phone_query_category/hsx_phone_query_category',
                        'view_path' => 'hsx_phone_query_category/hsx_phone_query_category',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '分类添加',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_category_hsx_phone_query_category_hsx_phone_query_category_add',
                        'menu_short_name' => '分类添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_category',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分类编辑',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_category_hsx_phone_query_category_hsx_phone_query_category_edit',
                        'menu_short_name' => '分类编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分类删除',
                        'menu_key' => 'hsx_phone_query_hsx_phone_query_category_hsx_phone_query_category_hsx_phone_query_category_delete',
                        'menu_short_name' => '分类删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'hsx_phone_query/hsx_phone_query_category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '查询列表',
                'menu_key' => 'hsx_phone_query_list',
                'menu_short_name' => '查询列表',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'hsx_phone_query/hsx_phone_query_list',
                'router_path' => 'hsx_phone_query_category/list',
                'view_path' => 'list',
                'methods' => 'get',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];