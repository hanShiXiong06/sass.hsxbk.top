<?php

return [
    'SHOP_GIFTCARD_LINK' => [
        'title' => get_lang('dict_diy.shop_giftcard_link'),
        'child_list' => [
            [
                'name' => 'SHOP_GIFTCARD_INDEX',
                'title' => get_lang('dict_diy.shop_giftcard_link_index'),
                'url' => '/addon/shop_giftcard/pages/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'SHOP_GIFTCARD_LIST',
                'title' => get_lang('dict_diy.shop_giftcard_link_list'),
                'url' => '/addon/shop_giftcard/pages/list',
                'is_share' => 1,
            ],
            [
                'name' => 'SHOP_GIFTCARD_ORDER_LIST',
                'title' => get_lang('dict_diy.shop_giftcard_link_order_list'),
                'url' => '/addon/shop_giftcard/pages/order_list',
                'is_share' => 0
            ],
            [
                'name' => 'SHOP_GIFTCARD_MEMBER_INDEX',
                'title' => get_lang('dict_diy.shop_giftcard_link_member_index'),
                'url' => '/addon/shop_giftcard/pages/member',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'SHOP_GIFTCARD_MY_CARD_LIST',
                'title' => get_lang('dict_diy.shop_giftcard_link_my_card_list'),
                'url' => '/addon/shop_giftcard/pages/my_card_list',
                'is_share' => 0
            ],
            [
                'name' => 'SHOP_GIFTCARD_ACTIVATE',
                'title' => get_lang('dict_diy.shop_giftcard_link_activate'),
                'url' => '/addon/shop_giftcard/pages/activate',
                'is_share' => 1,
            ],
            [
                'name' => 'SHOP_GIFTCARD_receive_list',
                'title' => get_lang('dict_diy.shop_giftcard_link_receive_list'),
                'url' => '/addon/shop_giftcard/pages/receive_list',
                'is_share' => 0,
            ],
            [
                'name' => 'SHOP_GIFTCARD_give_list',
                'title' => get_lang('dict_diy.shop_giftcard_link_give_list'),
                'url' => '/addon/shop_giftcard/pages/give_list',
                'is_share' => 0,
            ],
        ]
    ],
];
