<?php
return [
    [
        'menu_name' => '分销',
        'menu_key' => 'shop_fenxiao',
        'menu_short_name' => '分销',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => '',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '1',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '分销概况',
                'menu_key' => 'shop_fenxiao_index',
                'menu_short_name' => '分销概况',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'shop_fenxiao/index',
                'view_path' => 'index/index',
                'methods' => '',
                'sort' => '200',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '添加分销商',
                'menu_key' => 'shop_fenxiao_edit',
                'menu_short_name' => '添加分销商',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'shop_fenxiao/edit',
                'view_path' => 'fenxiao/edit',
                'methods' => '',
                'sort' => '190',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '分销商',
                'menu_key' => 'shop_fenxiao_list',
                'menu_short_name' => '分销商',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'shop_fenxiao/lists',
                'view_path' => 'fenxiao/lists',
                'methods' => '',
                'sort' => '180',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '分销商详情',
                'menu_key' => 'shop_fenxiao_detail',
                'menu_short_name' => '分销商详情',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'shop_fenxiao/detail',
                'view_path' => 'fenxiao/detail',
                'methods' => '',
                'sort' => '170',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '会员列表',
                'menu_key' => 'shop_fenxiao_member_list',
                'menu_short_name' => '会员列表',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => '',
                'router_path' => 'shop_fenxiao/member',
                'view_path' => 'member/lists',
                'methods' => '',
                'sort' => '160',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '分销管理',
                'menu_key' => 'shop_fenxiao_management',
                'menu_short_name' => '分销管理',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '140',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '分销设置',
                        'menu_key' => 'shop_fenxiao_config_index',
                        'menu_short_name' => '分销设置',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/config',
                        'view_path' => 'config/index',
                        'methods' => 'get',
                        'sort' => '10',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '推广海报',
                        'menu_key' => 'shop_fenxiao_config_poster',
                        'menu_short_name' => '推广海报',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/poster',
                        'view_path' => 'config/poster',
                        'methods' => 'get',
                        'sort' => '10',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '分销等级',
                        'menu_key' => 'shop_fenxiao_level',
                        'menu_short_name' => '分销等级',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/level',
                        'view_path' => 'level/lists',
                        'methods' => '',
                        'sort' => '9',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '添加/编辑分销等级',
                        'menu_key' => 'shop_fenxiao_level_edit',
                        'menu_short_name' => '添加/编辑分销等级',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/level_edit',
                        'view_path' => 'level/edit',
                        'methods' => '',
                        'sort' => '8',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分销商品',
                        'menu_key' => 'shop_fenxiao_goods',
                        'menu_short_name' => '分销商品',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/goods',
                        'view_path' => 'goods/lists',
                        'methods' => '',
                        'sort' => '4',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '分销商品详情',
                        'menu_key' => 'shop_fenxiao_goods_detail',
                        'menu_short_name' => '分销商品详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/goods_detail',
                        'view_path' => 'goods/detail',
                        'methods' => '',
                        'sort' => '3',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '佣金设置',
                        'menu_key' => 'shop_fenxiao_goods_config',
                        'menu_short_name' => '佣金设置',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/goods_config',
                        'view_path' => 'goods/config',
                        'methods' => '',
                        'sort' => '2',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分销订单',
                        'menu_key' => 'shop_fenxiao_order',
                        'menu_short_name' => '分销订单',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/management/order',
                        'view_path' => 'order/lists',
                        'methods' => 'get',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '销售奖励',
                'menu_key' => 'shop_fenxiao_sale',
                'menu_short_name' => '销售奖励',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '130',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '奖励明细',
                        'menu_key' => 'shop_fenxiao_sale_period_member',
                        'menu_short_name' => '奖励明细',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/sale/member_list',
                        'view_path' => 'sale/member_list',
                        'methods' => 'get',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '结算周期',
                        'menu_key' => 'shop_fenxiao_sale_period',
                        'menu_short_name' => '结算周期',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/sale/list',
                        'view_path' => 'sale/list',
                        'methods' => 'get',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '奖励配置',
                        'menu_key' => 'shop_fenxiao_sale_config',
                        'menu_short_name' => '奖励配置',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/sale/config',
                        'view_path' => 'sale/config',
                        'methods' => 'get',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '渠道代理',
                'menu_key' => 'shop_fenxiao_agent',
                'menu_short_name' => '渠道代理',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '127',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '代理商',
                        'menu_key' => 'shop_fenxiao_agent_list',
                        'menu_short_name' => '代理商',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/agent/list',
                        'view_path' => 'agent/list',
                        'methods' => 'get',
                        'sort' => '3',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '代理设置',
                        'menu_key' => 'shop_fenxiao_agent_level_config',
                        'menu_short_name' => '代理设置',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/agent/level/config',
                        'view_path' => 'agent/level_config',
                        'methods' => 'get',
                        'sort' => '2',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '代理订单',
                        'menu_key' => 'shop_fenxiao_agent_order',
                        'menu_short_name' => '代理订单',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/agent/order',
                        'view_path' => 'agent/order',
                        'methods' => '',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '任务奖励',
                'menu_key' => 'shop_fenxiao_task',
                'menu_short_name' => '任务奖励',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '120',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '任务配置',
                        'menu_key' => 'shop_fenxiao_task_config',
                        'menu_short_name' => '任务配置',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/task/config',
                        'view_path' => 'task/config',
                        'methods' => 'get',
                        'sort' => '4',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '任务详情',
                        'menu_key' => 'shop_fenxiao_task_detail',
                        'menu_short_name' => '任务详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/task/task_detail',
                        'view_path' => 'task/detail',
                        'methods' => '',
                        'sort' => '3',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '任务添加',
                        'menu_key' => 'shop_fenxiao_task_add',
                        'menu_short_name' => '任务添加',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/task/task_edit',
                        'view_path' => 'task/edit',
                        'methods' => '',
                        'sort' => '2',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '奖励详情',
                        'menu_key' => 'shop_fenxiao_task_reward_detail',
                        'menu_short_name' => '奖励详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/task/reward_detail',
                        'view_path' => 'task/reward_detail',
                        'methods' => '',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '奖励明细',
                        'menu_key' => 'shop_fenxiao_task_reward',
                        'menu_short_name' => '奖励明细',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/task/reward',
                        'view_path' => 'task/reward_list',
                        'methods' => '',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '任务列表',
                        'menu_key' => 'shop_fenxiao_task_list',
                        'menu_short_name' => '任务列表',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/task/list',
                        'view_path' => 'task/list',
                        'methods' => '',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
            [
                'menu_name' => '团队分红',
                'menu_key' => 'shop_fenxiao_team',
                'menu_short_name' => '团队分红',
                'menu_type' => '0',
                'icon' => '',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '110',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '分红设置',
                        'menu_key' => 'shop_fenxiao_team_level',
                        'menu_short_name' => '分红设置',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/team/level',
                        'view_path' => 'team/level',
                        'methods' => 'get',
                        'sort' => '2',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '分红记录',
                        'menu_key' => 'shop_fenxiao_team_order',
                        'menu_short_name' => '分红记录',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'shop_fenxiao/team/order',
                        'view_path' => 'team/order',
                        'methods' => '',
                        'sort' => '1',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
        ],
    ],
];