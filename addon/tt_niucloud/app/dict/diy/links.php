<?php

return [
    'TT_NIUCLOUD_LINK' => [
        'title' => 'Trusty组件库',
        'child_list' => [
            [
                'name' => 'TEAM_MEMBER_LIST',
                'title' => '团队成员',
                'url' => '/addon/tt_niucloud/pages/team/index',
                'is_share' => 1,
                'action' => ''  // decorate
            ],
            [
                'name' => 'AUTH_BIND_WX',
                'title' => '绑定微信',
                'url' => '/addon/tt_niucloud/pages/auth/bind-wx',
                'is_share' => 1,
                'action' => ''  // decorate
            ],
        ]
    ],
];