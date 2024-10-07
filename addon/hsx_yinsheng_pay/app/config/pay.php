<?php

return [
    'drivers' => [
        // 海狐聚合支付
        'yinshengpay' => [
            'driver' =>  'addon\hsx_yinsheng_pay\app\service\core\YsfApiService', //反射类的名字
            'app_key' => '',
            'secret_key' => '',
            'sign' => ''
        ],
    ]
];
