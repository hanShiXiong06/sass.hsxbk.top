<?php

return [
    'SOW_COMMUNITY_LINK' => [
        'title' => get_lang('dict_diy.sow_community_link'),
        'child_list' => [
            [
                'name' => 'SOW_COMMUNITY_INDEX',
                'title' => get_lang('dict_diy.sow_community_link_index'),
                'url' => '/addon/sow_community/pages/index',
                'is_share' => 1,
            ],
            [
                'name' => 'SOW_COMMUNITY_MEMBER_INDEX',
                'title' => get_lang('dict_diy.sow_community_link_member_index'),
                'url' => '/addon/sow_community/pages/member',
                'is_share' => 1,
            ],
            [
                'name' => 'SOW_COMMUNITY_SEARCH_LIST',
                'title' => get_lang('dict_diy.sow_community_link_search_list'),
                'url' => '/addon/sow_community/pages/search',
                'is_share' => 1
            ],
            [
                'name' => 'SOW_COMMUNITY_FOLLOW_LIST',
                'title' => get_lang('dict_diy.sow_community_link_follow_list'),
                'url' => '/addon/sow_community/pages/follow',
                'is_share' => 1
            ]
        ]
    ],
];
