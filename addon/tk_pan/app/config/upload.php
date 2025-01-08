<?php

return [
    'drivers' => [
        'ott' => [
            'driver' => 'addon\tk_pan\app\service\core\CoreOtt',  //反射类的名字
            'clientID' => 'clientID',
            'clientSecret' => 'clientSecret',
            'dir' => '目录',
            'domain' => '域名前缀',
            'is_dev' => '开发者权益'
        ],
    ]
];
