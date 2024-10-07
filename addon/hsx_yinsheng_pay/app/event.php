<?php

return [
    'bind' => [

    ],
    'listen' => [
        'PayType' => [
            'addon\hsx_yinsheng_pay\app\listener\PayType'
        ],
        'PaySuccess' =>[
            'addon\hsx_yinsheng_pay\app\listener\PaySuccess'
        ],
        'RefundSuccess' => [
            'addon\hsx_yinsheng_pay\app\listener\RefundSuccess'
        ],
        'PayClose' => [
            'addon\hsx_yinsheng_pay\app\listener\PayClose'
        ]
    ],
    'subscribe' => [
    ],
];


