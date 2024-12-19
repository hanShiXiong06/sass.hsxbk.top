<?php
return [
    [
        'menu_name' => '手机回收',
        'menu_key' => 'phone_shop_price',
        'menu_short_name' => '回收',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont iconmobile',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '110',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '分类管理',
                'menu_key' => 'recycle_category',
                'menu_short_name' => '分类',
                'menu_type' => '1',
                'icon' => 'iconfont iconfenlei',
                'api_url' => 'phone_shop_price/recycle_category',
                'router_path' => 'recycle_category/list',
                'view_path' => 'recycle_category/recycle_category',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '添加分类',
                        'menu_key' => 'recycle_category_add',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_category',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '0'
                    ],
                    [
                        'menu_name' => '编辑分类',
                        'menu_key' => 'recycle_category_edit',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '2',
                        'status' => '1',
                        'is_show' => '0'
                    ],
                    [
                        'menu_name' => '删除分类',
                        'menu_key' => 'recycle_category_delete',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '3',
                        'status' => '1',
                        'is_show' => '0'
                    ]
                ]
            ],
            [
                'menu_name' => '回收订单',
                'menu_key' => 'recycle_order',
                'menu_short_name' => '订单',
                'menu_type' => '0',
                'icon' => 'iconfont iconorder',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '订单列表',
                        'menu_key' => 'recycle_order_list',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_order',
                        'router_path' => 'recycle_order/list',
                        'view_path' => 'recycle_order/list',
                        'methods' => 'get',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '添加订单',
                                'menu_key' => 'recycle_order_add',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'phone_shop_price/recycle_order',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'post',
                                'sort' => '1',
                                'status' => '1',
                                'is_show' => '0'
                            ],
                            [
                                'menu_name' => '编辑订单',
                                'menu_key' => 'recycle_order_edit',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'phone_shop_price/recycle_order/<id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'put',
                                'sort' => '2',
                                'status' => '1',
                                'is_show' => '0'
                            ],
                            [
                                'menu_name' => '删除订单',
                                'menu_key' => 'recycle_order_delete',
                                'menu_type' => '2',
                                'icon' => '',
                                'api_url' => 'phone_shop_price/recycle_order/<id>',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'delete',
                                'sort' => '3',
                                'status' => '1',
                                'is_show' => '0'
                            ]
                        ]
                    ]
                ]
            ],
            [
                'menu_name' => '设备管理',
                'menu_key' => 'recycle_device',
                'menu_short_name' => '设备',
                'menu_type' => '1',
                'icon' => 'iconfont iconshebei',
                'api_url' => 'phone_shop_price/recycle_device',
                'router_path' => 'recycle_device/list',
                'view_path' => 'recycle_device/list',
                'methods' => 'get',
                'sort' => '80',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '添加设备',
                        'menu_key' => 'recycle_device_add',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_device',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '0'
                    ],
                    [
                        'menu_name' => '编辑设备',
                        'menu_key' => 'recycle_device_edit',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_device/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '2',
                        'status' => '1',
                        'is_show' => '0'
                    ],
                    [
                        'menu_name' => '删除设备',
                        'menu_key' => 'recycle_device_delete',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_device/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '3',
                        'status' => '1',
                        'is_show' => '0'
                    ],
                    [
                        'menu_name' => '更新设备状态',
                        'menu_key' => 'recycle_device_status',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_device/<id>/status',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '4',
                        'status' => '1',
                        'is_show' => '0'
                    ],
                    [
                        'menu_name' => '更新设备价格',
                        'menu_key' => 'recycle_device_price',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop_price/recycle_device/<id>/price',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '5',
                        'status' => '1',
                        'is_show' => '0'
                    ]
                ]
            ]
        ]
    ]
];