<?php

return [
    'bind' => [

    ],
    'listen' => [
        // 站点创建之后
        'AddSiteAfter' => [ 'addon\sow_community\app\listener\AddSiteAfterListener' ],
        // 会员注册事件，同步社区用户信息
        'MemberRegister' => [ 'addon\sow_community\app\listener\member\MemberRegisterListener' ],

        // 种草秀数据
        'SowShowData' => [ 'addon\sow_community\app\listener\content\SowShowDataListener' ],

        //主题色
        'ThemeColor' => [ 'addon\sow_community\app\listener\diy\ThemeColorListener' ],

        'WapIndex' => [ 'addon\sow_community\app\listener\WapIndexListener' ],
        'BottomNavigation' => [ 'addon\sow_community\app\listener\BottomNavigationListener' ],
    ],
    'subscribe' => [
    ],
];
