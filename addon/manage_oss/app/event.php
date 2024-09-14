<?php

return [
    'bind' => [

    ],
    'listen' => [
        //站点创建后事件
        'AddSiteAfter' => ['addon\manage_oss\app\listener\AddSiteAfterListener'],

//        'StorageType'=>[
//            'addon\manage_oss\app\listener\storage\StorageType',
//        ]
    ],
    'subscribe' => [
    ],
];