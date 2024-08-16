<?php

use app\dict\member\MemberAccountTypeDict;

return [
    MemberAccountTypeDict::POINT => [

        'tk_cps_order' => [
            //名称
            'name' => 'CPS激励',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
        'tk_cps_bwc_order'=>[
            //名称
            'name' => '霸王餐激励',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ]
    ],
    MemberAccountTypeDict::BALANCE => [

        'tk_cps_bwc_order'=>[
            //名称
            'name' => '霸王餐激励',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
        'tk_cps_order' => [
            //名称
            'name' => 'CPS激励',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
    ],
    MemberAccountTypeDict::MONEY => [

        'tk_cps_bwc_order'=>[
            //名称
            'name' => '霸王餐激励',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
        'tk_cps_order' => [
            //名称
            'name' => 'CPS激励',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
    ],
    //会员佣金
    MemberAccountTypeDict::COMMISSION => [
        'bwc_award' => [
            //名称
            'name' => '霸王餐分销佣金',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],
        'cps_award' => [
            //名称
            'name' => 'CPS分销佣金',
            //是否增加
            'inc' => 1,
            //是否减少
            'dec' => 1,
        ],

    ]
];
