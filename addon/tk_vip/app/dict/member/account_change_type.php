<?php

use app\dict\member\MemberAccountTypeDict;

return [
    //会员佣金
    MemberAccountTypeDict::COMMISSION => [
        'tk_vip_send_commission' => [
            //名称
            'name' => '权益赠送佣金',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
    ]
];
