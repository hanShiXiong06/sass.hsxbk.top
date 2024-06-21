<?php
return [
    [
        'menu_name' => 'CPS联盟',
        'menu_key' => 'tk_cps',
        'menu_short_name' => 'CPS联盟',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont-iconxinyongqia',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '100',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '基本配置',
                'menu_key' => 'tk_cps_hello_world',
                'menu_short_name' => '基本配置',
                'menu_type' => '1',
                'icon' => 'iconfont-iconshangchengshezhi',
                'api_url' => '',
                'router_path' => 'tk_cps/config',
                'view_path' => 'config/index',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => 'CPS活动',
                'menu_key' => 'tk_cps_cps_act_act_act',
                'menu_short_name' => 'CPS活动链接',
                'menu_type' => '0',
                'icon' => 'iconfont-iconwodedingdan',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '活动列表',
                        'menu_key' => 'tk_cps_cps_act_act_act_list',
                        'menu_short_name' => 'CPS活动链接列表',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => 'tk_cps/act',
                        'router_path' => 'tk_cps/act/act',
                        'view_path' => 'act/act',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '推广列表',
                        'menu_key' => 'tk_cps_cps_act_item_actitem_actItem_list',
                        'menu_short_name' => '推广',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodezhanghu',
                        'api_url' => 'tk_cps/actitem',
                        'router_path' => 'tk_cps/act/actitem',
                        'view_path' => 'actitem/actitem',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => 'CPS活动链接添加',
                        'menu_key' => 'tk_cps_cps_act_act_act_add',
                        'menu_short_name' => 'CPS活动链接添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/act',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => 'CPS活动链接编辑',
                        'menu_key' => 'tk_cps_cps_act_act_act_edit',
                        'menu_short_name' => 'CPS活动链接编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/act',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '活动详情编辑',
                        'menu_key' => 'tk_cps_cps_act_item_actitem_actItem_edit',
                        'menu_short_name' => '活动详情编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/actitem/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => 'CPS活动链接删除',
                        'menu_key' => 'tk_cps_cps_act_act_act_delete',
                        'menu_short_name' => 'CPS活动链接删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/act/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '50',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '活动详情删除',
                        'menu_key' => 'tk_cps_cps_act_item_actitem_actItem_delete',
                        'menu_short_name' => '活动详情删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/actitem/<id>',
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
                'menu_name' => '霸王餐',
                'menu_key' => 'tk_cps_cpsbwc_order_bwcorder_bwcOrder',
                'menu_short_name' => '霸王餐',
                'menu_type' => '0',
                'icon' => 'iconfont-iconyunshichang',
                'api_url' => '',
                'router_path' => 'bwcorder',
                'view_path' => '',
                'methods' => '',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '基础配置',
                        'menu_key' => 'tk_cps_bwc_config',
                        'menu_short_name' => '配置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconfudonganniu1',
                        'api_url' => '',
                        'router_path' => 'config/bwc',
                        'view_path' => 'config/bwc',
                        'methods' => 'post',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单列表',
                        'menu_key' => 'tk_cps_cpsbwc_order_bwcorder_bwcOrder_list',
                        'menu_short_name' => '订单',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icona-dingdanliebiao',
                        'api_url' => 'tk_cps/bwcorder',
                        'router_path' => 'bwcorder/bwcorder',
                        'view_path' => 'bwcorder/bwcorder',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '霸王餐订单添加',
                        'menu_key' => 'tk_cps_cpsbwc_order_bwcorder_bwcOrder_add',
                        'menu_short_name' => '霸王餐订单添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/bwcorder',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '70',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '霸王餐订单编辑',
                        'menu_key' => 'tk_cps_cpsbwc_order_bwcorder_bwcOrder_edit',
                        'menu_short_name' => '霸王餐订单编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/bwcorder/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '60',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '霸王餐订单删除',
                        'menu_key' => 'tk_cps_cpsbwc_order_bwcorder_bwcOrder_delete',
                        'menu_short_name' => '霸王餐订单删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'tk_cps/bwcorder/<id>',
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
                'menu_key' => 'tk_cps_order',
                'menu_short_name' => '订单',
                'menu_type' => '0',
                'icon' => 'iconfont-iconjingdiandingdan',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => 'post',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '聚推客',
                        'menu_key' => 'tk_cps_jtk_order',
                        'menu_short_name' => '聚推客',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconwodedingdan',
                        'api_url' => '',
                        'router_path' => 'tk_cps/order/jtkorder',
                        'view_path' => 'jtk/order',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '蚂蚁星球',
                        'menu_key' => 'tk_cps_myxq_order',
                        'menu_short_name' => '蚂蚁',
                        'menu_type' => '0',
                        'icon' => 'iconfont-iconwodezhanghu',
                        'api_url' => '',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '1',
                        'children' => [
                            [
                                'menu_name' => '推广订单',
                                'menu_key' => 'tk_cps_myxq_other_order',
                                'menu_short_name' => '其他',
                                'menu_type' => '1',
                                'icon' => 'iconfont-icongerenxinxi',
                                'api_url' => '',
                                'router_path' => 'tk_cps/order/myxq/myxq_other_order',
                                'view_path' => 'myxq/other_order',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '充值订单',
                                'menu_key' => 'tk_cps_myxq_recharge_order',
                                'menu_short_name' => '充值订单',
                                'menu_type' => '1',
                                'icon' => 'iconfont-iconwodedingdan',
                                'api_url' => '',
                                'router_path' => 'tk_cps/order/myxq/myxq_recharge_order',
                                'view_path' => 'myxq/recharge_order',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '电影订单',
                                'menu_key' => 'tk_cps_myxq_movie_order',
                                'menu_short_name' => '电影',
                                'menu_type' => '1',
                                'icon' => 'iconfont-iconwodedingdan',
                                'api_url' => '',
                                'router_path' => 'tk_cps/order/myxq/myxq_movie_order',
                                'view_path' => 'myxq/movie_order',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '点餐订单',
                                'menu_key' => 'tk_cps_myxq_dc_order',
                                'menu_short_name' => '点餐订单',
                                'menu_type' => '1',
                                'icon' => '',
                                'api_url' => '',
                                'router_path' => 'tk_cps/order/myxq/myxq_dc_order',
                                'view_path' => 'myxq/dc_order',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '1',
                            ],
                            [
                                'menu_name' => '周边订单',
                                'menu_key' => 'tk_cps_myxq_near_order',
                                'menu_short_name' => '周边订单',
                                'menu_type' => '1',
                                'icon' => 'iconfont-iconwodedingdan',
                                'api_url' => '',
                                'router_path' => 'tk_cps/order/myxq/myxq_near_order',
                                'view_path' => 'myxq/near_order',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                            [
                                'menu_name' => '自营订单',
                                'menu_key' => 'tk_cps_myxq_shop_order',
                                'menu_short_name' => '自营',
                                'menu_type' => '1',
                                'icon' => 'iconfont-iconwodedingdan',
                                'api_url' => '',
                                'router_path' => 'tk_cps/order/myxq/myxq_shop_order',
                                'view_path' => 'myxq/shop_order',
                                'methods' => 'post',
                                'sort' => '0',
                                'status' => '1',
                                'is_show' => '0',
                            ],
                        ],
                    ],
                ],
            ],
            [
                'menu_name' => '使用文档',
                'menu_key' => 'tk_cps_doc_index',
                'menu_short_name' => '文档',
                'menu_type' => '1',
                'icon' => 'iconfont-icontishi',
                'api_url' => '',
                'router_path' => 'tk_cps/doc_index',
                'view_path' => 'doc/index',
                'methods' => 'post',
                'sort' => '0',
                'status' => '1',
                'is_show' => '1',
            ],
        ],
    ],
];