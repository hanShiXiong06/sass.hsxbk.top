<?php

return [
    'PHONE_SHOP_PRICE_LINK' => [
        'key' => 'phone_shop_price',
        'addon_title' => '产品报价查看',
        'title' => '产品报价',
        'child_list' => [
            [
                'name' => 'PHONE_SHOP_PRICE_INDEX',
                'title' => '报价系统',
                'url' => '/addon/phone_shop_price/pages/index',
                'is_share' => 1,
                'action' => ''
            ], [
                'name' => 'PHONE_SHOP_PRICE_ORDER',
                'title' => '回收下单',
                'url' => '/addon/phone_shop_price/pages/order/order',
                'is_share' => 1,
                'action' => ''
            ], [
                'name' => 'PHONE_SHOP_PRICE_ORDER_LIST',
                'title' => '回收订单列表',
                'url' => '/addon/phone_shop_price/pages/order/list',
                'is_share' => 1,
                'action' => ''
            ]
        ]
    ]
];
