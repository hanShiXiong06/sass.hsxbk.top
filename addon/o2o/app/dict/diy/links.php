<?php

return [
    'O2O_LINK' => [
        'key' => 'o2o',
        'addon_title' => get_lang('dict_diy.o2o_title'),
        'title' => get_lang('dict_diy.o2o_link'),
        'child_list' => [
            [
                'name' => 'O2O_INDEX',
                'title' => get_lang('dict_diy.o2o_index'),
                'url' => '/addon/o2o/pages/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'O2O_CATEGORY',
                'title' => get_lang('dict_diy.o2o_category'),
                'url' => '/addon/o2o/pages/goods/category',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'O2O_GOODS_LIST',
                'title' => get_lang('dict_diy.o2o_link_goods_list'),
                'url' => '/addon/o2o/pages/goods/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'O2O_MEMBER_INDEX',
                'title' => get_lang('dict_diy.o2o_link_member_index'),
                'url' => '/addon/o2o/pages/member/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'O2O_ORDER_LIST',
                'title' => get_lang('dict_diy.o2o_link_order_list'),
                'url' => '/addon/o2o/pages/order/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'O2O_REFUND_LIST',
                'title' => get_lang('dict_diy.o2o_link_order_refund_list'),
                'url' => '/addon/o2o/pages/refund/list',
                'is_share' => 1,
                'action' => ''
            ],
//            [
//                'name' => 'O2O_TECHNICIAN_LIST',
//                'title' => get_lang('dict_diy.o2o_link_technician_list'),
//                'url' => '/addon/o2o/pages/technician/list',
//                'is_share' => 1,
//                'action' => ''
//            ],
            [
                'name' => 'O2O_REFUND_LIST',
                'title' => get_lang('dict_diy.o2o_link_order_refund_list'),
                'url' => '/addon/o2o/pages/refund/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'O2O_ADDRESS_LIST',
                'title' => get_lang('dict_diy.o2o_link_address_list'),
                'url' => '/addon/o2o/pages/address/index',
                'is_share' => 1,
                'action' => ''
            ],
        ]
    ],
];
