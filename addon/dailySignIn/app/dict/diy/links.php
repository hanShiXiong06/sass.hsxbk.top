<?php
#######################################################################
# File Name: links.php
# Desc:
# Author: hd
# Created Time: 2024/12/11 17:03
#######################################################################
return [
    'SHOP_MARKETING_ACTIVITY_LINK'=>[
        'title' => get_lang('dict_diy.shop_marketing_activity_center_link'),
        'child_list' => [
            [
                'name' => 'SHOP_BLIND_BOX_INDEX',
                'title' => get_lang('dict_diy.shop_blind_box_link_index'),
                'url' => '/addon/blindBoxSolo/pages/blindBox/index',
                'is_share' => 1,
            ],
            [
                'name' => 'SHOP_DAILY_SIGN_IN_INDEX',
                'title' => get_lang('dict_diy.shop_daily_sign_in_link_index'),
                'url' => '/addon/dailySignIn/pages/signIn/index',
                'is_share' => 0,
            ]
        ]
    ]
];