<?php

return [
    //文件执行序列号
    'bind' => [
    ],

    'listen' => [

        //应用管理
        'AppManage' => ['addon\cps\app\listener\AppManageListener'],
        'BottomNavigation' => ['addon\cps\app\listener\BottomNavigationListener'],
    ],
    'subscribe' => [
    ],
];
