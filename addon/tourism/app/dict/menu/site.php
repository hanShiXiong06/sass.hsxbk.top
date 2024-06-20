<?php
return [
    [
        'menu_name' => '旅游',
        'menu_key' => 'tourism',
        'menu_short_name' => '旅游',
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
                'menu_key' => 'tourism_index',
                'menu_short_name' => '概况',
                'menu_type' => '1',
                'icon' => 'iconfont-icongaikuang1',
                'api_url' => '',
                'router_path' => 'tourism/index',
                'view_path' => 'index',
                'methods' => '',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
            ],
            [
                'menu_name' => '旅游产品',
                'menu_key' => 'niucloud_tourism',
                'menu_short_name' => '产品',
                'menu_type' => '0',
                'icon' => 'iconfont-iconlvyouchanpin',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '酒店管理',
                        'menu_key' => 'tourism_hotel',
                        'menu_short_name' => '酒店管理',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjiudianguanli',
                        'api_url' => '',
                        'router_path' => 'tourism/product/hotel/hotel',
                        'view_path' => 'hotel/list',
                        'methods' => 'get',
                        'sort' => '100',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '添加/编辑酒店',
                        'menu_key' => 'hotel_edit',
                        'menu_short_name' => '添加/编辑酒店',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/hotel/edit',
                        'view_path' => 'hotel/edit_hotel',
                        'methods' => 'post',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '删除酒店',
                        'menu_key' => 'hotel_del',
                        'menu_short_name' => '删除酒店',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '98',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '房型管理',
                        'menu_key' => 'hotel_room',
                        'menu_short_name' => '房型管理',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/hotel/room',
                        'view_path' => 'hotel/room',
                        'methods' => 'get',
                        'sort' => '97',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '添加/编辑房型',
                        'menu_key' => 'hotel_room_add',
                        'menu_short_name' => '添加/编辑房型',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/hotel/edit_room',
                        'view_path' => 'hotel/edit_room',
                        'methods' => 'post',
                        'sort' => '96',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '景点管理',
                        'menu_key' => 'tourism_scenic',
                        'menu_short_name' => '景点管理',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjingdianguanli',
                        'api_url' => '',
                        'router_path' => 'tourism/product/scenic/scenic',
                        'view_path' => 'scenic/list',
                        'methods' => 'get',
                        'sort' => '95',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '添加/编辑景点',
                        'menu_key' => 'scenic_edit',
                        'menu_short_name' => '添加/编辑景点',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/scenic/edit_scenic',
                        'view_path' => 'scenic/edit_scenic',
                        'methods' => 'post',
                        'sort' => '94',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '门票列表',
                        'menu_key' => 'scenic_ticket_list',
                        'menu_short_name' => '门票列表',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/scenic/ticket',
                        'view_path' => 'scenic/ticket',
                        'methods' => 'get',
                        'sort' => '93',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '添加/编辑门票',
                        'menu_key' => 'ticket_edit',
                        'menu_short_name' => '添加/编辑门票',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/scenic/edit_ticket',
                        'view_path' => 'scenic/edit_ticket',
                        'methods' => 'post',
                        'sort' => '92',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '线路管理',
                        'menu_key' => 'way_list',
                        'menu_short_name' => '线路管理',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconluxianguanli',
                        'api_url' => '',
                        'router_path' => 'tourism/product/way/way',
                        'view_path' => 'way/list',
                        'methods' => 'get',
                        'sort' => '91',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '添加/编辑线路',
                        'menu_key' => 'edit_way',
                        'menu_short_name' => '添加/编辑线路',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/product/way/edit',
                        'view_path' => 'way/edit',
                        'methods' => 'get',
                        'sort' => '90',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '旅游订单',
                'menu_key' => 'tourism_order',
                'menu_short_name' => '订单',
                'menu_type' => '0',
                'icon' => 'iconfont-iconlvyoudingdan',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => '',
                'sort' => '80',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '酒店订单',
                        'menu_key' => 'hotel_order',
                        'menu_short_name' => '酒店订单',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconjiudiandingdan',
                        'api_url' => '',
                        'router_path' => 'tourism/order/hotel',
                        'view_path' => 'hotel/order',
                        'methods' => 'get',
                        'sort' => '99',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '酒店订单详情',
                        'menu_key' => 'hotel_order_info',
                        'menu_short_name' => '酒店订单详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/order/hotel/detail',
                        'view_path' => 'hotel/order_detail',
                        'methods' => 'get',
                        'sort' => '98',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '景点订单',
                        'menu_key' => 'ticket_order',
                        'menu_short_name' => '景点订单',
                        'menu_type' => '1',
                        'icon' => 'iconfont-iconlvyoudingdan',
                        'api_url' => '',
                        'router_path' => 'tourism/order/scenic',
                        'view_path' => 'scenic/order',
                        'methods' => 'get',
                        'sort' => '97',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '景点订单详情',
                        'menu_key' => 'ticket_order_info',
                        'menu_short_name' => '景点订单详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/order/scenic/detail',
                        'view_path' => 'scenic/order_detail',
                        'methods' => 'get',
                        'sort' => '96',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '线路订单',
                        'menu_key' => 'way_order',
                        'menu_short_name' => '线路订单',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icondingdan',
                        'api_url' => '',
                        'router_path' => 'tourism/order/way',
                        'view_path' => 'way/order',
                        'methods' => 'get',
                        'sort' => '95',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '线路订单详情',
                        'menu_key' => 'way_order_info',
                        'menu_short_name' => '线路订单详情',
                        'menu_type' => '1',
                        'icon' => '',
                        'api_url' => '',
                        'router_path' => 'tourism/order/way/detail',
                        'view_path' => 'way/order_detail',
                        'methods' => 'get',
                        'sort' => '94',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '订单维权',
                        'menu_key' => 'tourism_refund',
                        'menu_short_name' => '订单维权',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icondingdanweiquan',
                        'api_url' => '',
                        'router_path' => 'tourism/order/refund',
                        'view_path' => 'refund',
                        'methods' => 'get',
                        'sort' => '93',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单核销',
                        'menu_key' => 'tourism_verify',
                        'menu_short_name' => '订单核销',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icondingdanhexiao',
                        'api_url' => '',
                        'router_path' => 'tourism/order/verify',
                        'view_path' => 'verify',
                        'methods' => 'get',
                        'sort' => '92',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                    [
                        'menu_name' => '订单设置',
                        'menu_key' => 'tourism_setting',
                        'menu_short_name' => '订单设置',
                        'menu_type' => '1',
                        'icon' => 'iconfont-icondingdanshezhi',
                        'api_url' => '',
                        'router_path' => 'tourism/order/setting',
                        'view_path' => 'setting',
                        'methods' => 'get',
                        'sort' => '91',
                        'status' => '1',
                        'is_show' => '1',
                    ],
                ],
            ],
        ],
    ],
];