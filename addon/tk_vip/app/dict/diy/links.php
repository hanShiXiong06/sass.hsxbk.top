<?php

return [
    'TK_VIP' => [
        'key' => 'tk_vip',
        'addon_title' => '会员权益',
        'title' => '会员权益',
        'child_list' => [
            [
                'name' => 'TK_VIP_INDEX',
                'title' => '付费会员',
                'url' => '/addon/tk_vip/pages/index',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_VIP_LIST',
                'title' => '购买记录',
                'url' => '/addon/tk_vip/pages/list',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_VIP_SIGN_IN',
                'title' => '每日签到',
                'url' => '/app/pages/member/sign_in',
                'is_share' => 1,
                'action' => 'decorate'
            ],
        ]
    ],

];