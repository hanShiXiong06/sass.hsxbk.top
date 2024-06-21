<?php

return [
    'bind' => [

    ],
    'listen' => [
        'editPubId' => ['addon\tk_cps\app\listener\EditLinkListener'],
        'changeAllUrl' => ['addon\tk_cps\app\listener\ChangeAllUrlListener'],
        //增加导航
        'BottomNavigation' => ['addon\tk_cps\app\listener\BottomNavigationListener'],
        //站点创建后事件
        'AddSiteAfter' => ['addon\tk_cps\app\listener\AddSiteAfterListener'],
        //获取海报数据
        'GetPosterType' => ['addon\tk_cps\app\listener\poster\BwcPosterType'],
        'GetPosterData' => ['addon\tk_cps\app\listener\poster\BwcPoster'],
    ],
    'subscribe' => [
    ],
];