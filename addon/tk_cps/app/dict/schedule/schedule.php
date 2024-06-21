<?php

return [
    [
        'key' => 'tk_cps_upgrade',
        'name' => 'CPS联盟插件修改',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 1
        ],
        'class' => 'addon\tk_cps\app\job\AddonUpgrade',
        'function' => ''
    ],
    [
        'key' => 'tk_cps_bwcclose',
        'name' => '霸王餐订单关闭',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 1
        ],
        'class' => 'addon\tk_cps\app\job\BwcOrderClose',
        'function' => ''
    ],
    [
        'key' => 'tk_cps_bwc_cron_order',
        'name' => '霸王餐订单同步',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 1
        ],
        'class' => 'addon\tk_cps\app\job\BwcOrderAsync',
        'function' => ''
    ],
];
