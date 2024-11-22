<?php
return [
    [
        'menu_name' => '聚合快递',
        'menu_key' => 'tk_jhkd_site',
        'menu_short_name' => '快递',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'tk_jhkd jhkd-kuaidi2',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '90',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '常用配置',
                'menu_key' => 'tk_jhkd_base_config',
                'menu_short_name' => '配置',
                'menu_type' => '0',
                'icon' => 'nc-iconfont nc-icon-shezhi-1V6xx',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '快递配置',
                        'menu_key' => 'tk_jhkd_delivery_config',
                        'menu_short_name' => '快递',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjichushezhi',
                        'api_url' => '',
                        'router_path' => 'tk_jhkd/delivery/config',
                        'view_path' => 'delivery_config',
                        'methods' => '',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '基础配置',
                        'menu_key' => 'tk_jhkd_config',
                        'menu_short_name' => '基础配置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjichushezhi',
                        'api_url' => '',
                        'router_path' => 'tk_jhkd/baseconfig/config',
                        'view_path' => 'config',
                        'methods' => '',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '协议配置',
                        'menu_key' => 'tk_jhkd_agreement',
                        'menu_short_name' => '协议配置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconzhankai',
                        'api_url' => '',
                        'router_path' => 'tk_jhkd/baseconfig/agreement',
                        'view_path' => 'agreement',
                        'methods' => '',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '快递品牌',
                        'menu_key' => 'tk_jhkd_kd',
                        'menu_short_name' => '快递品牌',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconhuiyuandingdan',
                        'api_url' => '',
                        'router_path' => 'tk_jhkd/baseconfig/kd',
                        'view_path' => 'kd',
                        'methods' => '',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '商城发单',
                'menu_key' => 'tk_jhkd_tkjhkd_shop_order_shop_order_shop_order',
                'menu_short_name' => '发单',
                'menu_type' => '0',
                'icon' => 'nc-iconfont nc-icon-fenxiaoV6xx1',
                'api_url' => '',
                'router_path' => 'shop_order',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '发货记录',
                        'menu_key' => 'tk_jhkd_tkjhkd_shop_order_shop_order_shop_order_list',
                        'menu_short_name' => '商城发单列表',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/shop_order',
                        'router_path' => 'shop_order/shop_order',
                        'view_path' => 'shop_order/shop_order',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '商城发单添加',
                        'menu_key' => 'tk_jhkd_tkjhkd_shop_order_shop_order_shop_order_add',
                        'menu_short_name' => '商城发单添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/shop_order',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '快递发货',
                        'menu_key' => 'tk_jhkd_shop_order',
                        'menu_short_name' => '商城',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'jhkd_shop_order/list',
                        'view_path' => 'shop_order/list',
                        'methods' => '',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '商城发单编辑',
                        'menu_key' => 'tk_jhkd_tkjhkd_shop_order_shop_order_shop_order_edit',
                        'menu_short_name' => '商城发单编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/shop_order/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商城发单删除',
                        'menu_key' => 'tk_jhkd_tkjhkd_shop_order_shop_order_shop_order_delete',
                        'menu_short_name' => '商城发单删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/shop_order/<id>',
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
                'menu_name' => '订单管理',
                'menu_key' => 'tk_jhkd_tkjhkd_order_add_order_orderAdd',
                'menu_short_name' => '订单',
                'menu_type' => '0',
                'icon' => 'nc-iconfont nc-icon-liebiaoV6xx',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '补差订单',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_add_order_orderAdd_list',
                        'menu_short_name' => '补差订单',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'tk_jhkd/orderadd/get',
                        'router_path' => 'tk_jhkd/order/orderadd',
                        'view_path' => 'order/orderadd',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单列表',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_order_order_list',
                        'menu_short_name' => '订单列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'tk_jhkd/order/get/get',
                        'router_path' => 'tk_jhkd/order/order',
                        'view_path' => 'order/order',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '日志列表',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_log_order_orderLog_list',
                        'menu_short_name' => '日志列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'tk_jhkd/orderlog/get/get',
                        'router_path' => 'tk_jhkd/order/orderlog',
                        'view_path' => 'order/orderlog',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单日志添加',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_log_order_orderLog_add',
                        'menu_short_name' => '订单日志添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/orderlog/post',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列添加',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_order_order_add',
                        'menu_short_name' => '订单列添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/order/post/post',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列添加',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_add_order_orderAdd_add',
                        'menu_short_name' => '订单列添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/orderadd',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单日志编辑',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_log_order_orderLog_edit',
                        'menu_short_name' => '订单日志编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/orderlog/<id>/put',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列编辑',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_order_order_edit',
                        'menu_short_name' => '订单列编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/order/<id>/put/put',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列编辑',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_add_order_orderAdd_edit',
                        'menu_short_name' => '订单列编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/orderadd/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列删除',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_order_order_delete',
                        'menu_short_name' => '订单列删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/order/<id>/delete/delete',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单列删除',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_add_order_orderAdd_delete',
                        'menu_short_name' => '订单列删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/orderadd/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单日志删除',
                        'menu_key' => 'tk_jhkd_tkjhkd_order_log_order_orderLog_delete',
                        'menu_short_name' => '订单日志删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_jhkd/orderlog/<id>/delete',
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
                'menu_name' => '帮助中心添加',
                'menu_key' => 'tk_jhkd_tkjhkd_help_help_help_add',
                'menu_short_name' => '帮助中心添加',
                'menu_type' => '2',
                'icon' => '',
                'api_url' => 'tk_jhkd/help/post/post',
                'router_path' => '',
                'view_path' => '',
                'methods' => 'post',
                'sort' => '70',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '帮助中心编辑',
                'menu_key' => 'tk_jhkd_tkjhkd_help_help_help_edit',
                'menu_short_name' => '帮助中心编辑',
                'menu_type' => '2',
                'icon' => '',
                'api_url' => 'tk_jhkd/help/<id>/put/put',
                'router_path' => '',
                'view_path' => '',
                'methods' => 'put',
                'sort' => '60',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '帮助中心删除',
                'menu_key' => 'tk_jhkd_tkjhkd_help_help_help_delete',
                'menu_short_name' => '帮助中心删除',
                'menu_type' => '2',
                'icon' => '',
                'api_url' => 'tk_jhkd/help/<id>/delete/delete',
                'router_path' => '',
                'view_path' => '',
                'methods' => 'delete',
                'sort' => '50',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '协议编辑',
                'menu_key' => 'tk_jhkd_agreement_edit',
                'menu_short_name' => '协议编辑',
                'menu_type' => '1',
                'icon' => 'iconfont-iconwodeshouquan',
                'api_url' => '',
                'router_path' => 'tk_jhkd/agreement_edit',
                'view_path' => 'agreement_edit',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '通知列表',
                'menu_key' => 'tk_jhkd_notice',
                'menu_short_name' => '通知',
                'menu_type' => '1',
                'icon' => 'iconfont-iconwangzhan1',
                'api_url' => '',
                'router_path' => 'tk_jhkd/notice',
                'view_path' => 'notice',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '通知编辑',
                'menu_key' => 'tk_jhkd_noticeedit',
                'menu_short_name' => '通知编辑',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'tk_jhkd/noticeedit',
                'view_path' => 'noticeedit',
                'methods' => '',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '帮助中心',
                'menu_key' => 'tk_jhkd_tkjhkd_help_help_help_list',
                'menu_short_name' => '帮助',
                'menu_type' => '1',
                'icon' => 'nc-iconfont nc-icon-bianjiV6xx',
                'api_url' => 'tk_jhkd/help/get/get/get/get',
                'router_path' => 'tk_jhkd/help',
                'view_path' => 'help/help',
                'methods' => 'get',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
    [
        'menu_name' => '快递发货',
        'menu_key' => 'tk_jhkd_shop_order_express',
        'menu_short_name' => '快递',
        'parent_key' => 'shop',
        'menu_type' => '1',
        'icon' => 'nc-iconfont nc-icon-fenxiangV6xx-2',
        'api_url' => '',
        'router_path' => 'thkd_shop_order/list',
        'view_path' => 'shop_order/list',
        'methods' => '',
        'sort' => '70',
        'status' => '1',
        'is_show' => '1',
    ],
];