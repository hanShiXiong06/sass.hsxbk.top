<?php

return [
    [
        'key' => 'shop_giftcard_card_expire',
        'name' => '礼品卡到期',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 10
        ],
        'class' => 'addon\shop_giftcard\app\job\card\CardExpire',
        'function' => ''
    ]
];
