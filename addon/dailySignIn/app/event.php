<?php

return [
    'bind' => [

    ],
    'listen' => [
        //会员签到
        'MemberSignIn'  => [
            'addon\dailySignIn\app\listener\MemberSignIn',
        ]
    ],
    'subscribe' => [
    ],
];