<?php

return [
    'TOURISM_LINK' => [
        'title' => get_lang('dict_diy.tourism_link'),
        'child_list' => [
            [
                'name' => 'TOURISM_INDEX',
                'title' => get_lang('dict_diy.tourism_index'),
                'url' => '/addon/tourism/pages/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TOURISM_SCENIC',
                'title' => get_lang('dict_diy.tourism_scenic'),
                'url' => '/addon/tourism/pages/scenic/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TOURISM_WAY',
                'title' => get_lang('dict_diy.tourism_way'),
                'url' => '/addon/tourism/pages/way/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TOURISM_HOTEL',
                'title' => get_lang('dict_diy.tourism_hotel'),
                'url' => '/addon/tourism/pages/hotel/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TOURISM_ORDER_LIST',
                'title' => get_lang('dict_diy.tourism_order_list'),
                'url' => '/addon/tourism/pages/order/list',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TOURISM_VERIFY',
                'title' => get_lang('dict_diy.tourism_verify'),
                'url' => '/addon/tourism/pages/verify/index',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TOURISM_VERIFY_RECORD',
                'title' => get_lang('dict_diy.tourism_verify_record'),
                'url' => '/addon/tourism/pages/verify/record',
                'is_share' => 1,
                'action' => ''
            ]
        ]
    ],
];
