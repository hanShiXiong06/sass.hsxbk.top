<?php
return [
    [
        'menu_name' => '上门服务',
        'menu_key' => 'o2o',
        'menu_short_name' => '上门服务',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont-iconyingyongshichang',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '90',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '概况',
                'menu_key' => 'o2o_index',
                'menu_short_name' => '概况',
                'menu_type' => '1',
                'icon' => 'iconfont-icongaikuang1',
                'api_url' => '',
                'router_path' => 'o2o/index',
                'view_path' => 'index',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '项目',
                'menu_key' => 'o2o_goods',
                'menu_short_name' => '项目',
                'menu_type' => '0',
                'icon' => 'iconfont-iconkaxiangchanpin',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '80',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '项目管理',
                        'menu_key' => 'o2o_goods_service',
                        'menu_short_name' => '项目管理',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconxiangmuguanli',
                        'api_url' => '',
                        'router_path' => 'o2o/goods/list',
                        'view_path' => 'goods/list',
                        'methods' => 'get',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '删除',
                                'menu_key' => 'o2o_service_delete',
                                'menu_short_name' => '删除',
                                'menu_type' => '2',
                                'icon' => 'element-House',
                                'api_url' => '',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'get',
                                'sort' => '99',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                        ],
                    ],
                    [
                        'menu_name' => '项目详情',
                        'menu_key' => 'o2o_service_record_detail',
                        'menu_short_name' => '项目详情',
                        'menu_type' => '1',
                        'icon' => 'element-House',
                        'api_url' => '',
                        'router_path' => 'o2o/goods/record_info',
                        'view_path' => 'goods/record_info',
                        'methods' => 'get',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '添加/编辑项目',
                        'menu_key' => 'o2o_service_add',
                        'menu_short_name' => '添加/编辑项目',
                        'menu_type' => '1',
                        'icon' => 'element-House',
                        'api_url' => '',
                        'router_path' => 'o2o/goods/edit',
                        'view_path' => 'goods/edit',
                        'methods' => 'get',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '项目分类',
                        'menu_key' => 'o2o_goods_category',
                        'menu_short_name' => '项目分类',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconxiangmufenlei',
                        'api_url' => '',
                        'router_path' => 'o2o/goods/category',
                        'view_path' => 'goods/category',
                        'methods' => 'get',
                        'sort' => '80',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '删除分类',
                                'menu_key' => 'o2o_goods_category_delete',
                                'menu_short_name' => '删除分类',
                                'menu_type' => '2',
                                'icon' => 'element-House',
                                'api_url' => '',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'get',
                                'sort' => '99',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                            [
                                'menu_name' => '添加/编辑分类',
                                'menu_key' => 'o2o_goods_category_edit',
                                'menu_short_name' => '添加/编辑分类',
                                'menu_type' => '2',
                                'icon' => 'element-House',
                                'api_url' => '',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'get',
                                'sort' => '99',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                        ],
                    ],
                    [
                        'menu_name' => '预约设置',
                        'menu_key' => 'o2o_reserve_set',
                        'menu_short_name' => '预约设置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconyuyueshezhi',
                        'api_url' => '',
                        'router_path' => 'o2o/goods/reserve',
                        'view_path' => 'config/reserve',
                        'methods' => 'get',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '订单',
                'menu_key' => 'o2o_order',
                'menu_short_name' => '订单',
                'menu_type' => '0',
                'icon' => 'iconfont-iconkaxiangdingdan',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '70',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '订单列表',
                        'menu_key' => 'o2o_order_list',
                        'menu_short_name' => '订单列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icona-dingdanliebiao',
                        'api_url' => '',
                        'router_path' => 'o2o/order/list',
                        'view_path' => 'order/order',
                        'methods' => 'get',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '退款详情',
                        'menu_key' => 'o2o_refund_detail',
                        'menu_short_name' => '退款详情',
                        'menu_type' => '1',
                        'icon' => 'element-House',
                        'api_url' => '',
                        'router_path' => 'o2o/order/refund/detail',
                        'view_path' => 'refund/detail',
                        'methods' => 'get',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单详情',
                        'menu_key' => 'o2o_order_info',
                        'menu_short_name' => '订单详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'o2o/order/detail',
                        'view_path' => 'order/order_detail',
                        'methods' => 'get',
                        'sort' => '98',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '预约大厅',
                        'menu_key' => 'o2o_order_reserve',
                        'menu_short_name' => '预约大厅',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconyuyuexiangmu',
                        'api_url' => '',
                        'router_path' => 'o2o/order/reserve',
                        'view_path' => 'order/reserve',
                        'methods' => 'get',
                        'sort' => '97',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单维权',
                        'menu_key' => 'o2o_refund',
                        'menu_short_name' => '订单维权',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icondingdanweiquan',
                        'api_url' => '',
                        'router_path' => 'o2o/order/refund',
                        'view_path' => 'refund/refund',
                        'methods' => 'get',
                        'sort' => '92',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单设置',
                        'menu_key' => 'o2o_config_order',
                        'menu_short_name' => '订单设置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjiaoyishezhi',
                        'api_url' => 'order/config',
                        'router_path' => 'o2o/order/order/config',
                        'view_path' => 'order/config',
                        'methods' => '',
                        'sort' => '91',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '技师',
                'menu_key' => 'o2o_technician',
                'menu_short_name' => '技师',
                'menu_type' => '0',
                'icon' => 'iconfont-iconhuiyuanliebiao1',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '60',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '技师管理',
                        'menu_key' => 'o2o_technician_list',
                        'menu_short_name' => '技师管理',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjishiguanli',
                        'api_url' => '',
                        'router_path' => 'o2o/technician/list',
                        'view_path' => 'technician/list',
                        'methods' => 'get',
                        'sort' => '98',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '岗位管理',
                        'menu_key' => 'o2o_goods_position',
                        'menu_short_name' => '岗位管理',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconxiangmuguanli',
                        'api_url' => '',
                        'router_path' => 'o2o/technician/position_list',
                        'view_path' => 'technician/position',
                        'methods' => 'get',
                        'sort' => '97',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '删除',
                                'menu_key' => 'o2o_service_delete',
                                'menu_short_name' => '删除',
                                'menu_type' => '2',
                                'icon' => 'element-House',
                                'api_url' => '',
                                'router_path' => '',
                                'view_path' => '',
                                'methods' => 'get',
                                'sort' => '99',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                        ],
                    ],
                    [
                        'menu_name' => '技师详情',
                        'menu_key' => 'o2o_technician_info',
                        'menu_short_name' => '技师详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'o2o/technician/technician/info',
                        'view_path' => 'technician/detail',
                        'methods' => 'get',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '添加/编辑技师',
                        'menu_key' => 'o2o_technician_edit',
                        'menu_short_name' => '添加/编辑技师',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'o2o/technician/edit',
                        'view_path' => 'technician/edit',
                        'methods' => 'get',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
        ],
    ],
];