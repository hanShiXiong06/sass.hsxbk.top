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
    [
        'key' => 'tk_cps_act_async',
        'name' => '同步CPS联盟订单',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 30
        ],
        'class' => 'addon\tk_cps\app\job\act\ActOrder',
        'function' => ''
    ],
    [
        'key' => 'tk_cps_act_order_jl',
        'name' => 'CPS联盟激励结算',
        'desc' => '',
        'time' => [
            'type' => 'min',
            'min' => 3
        ],
        'class' => 'addon\tk_cps\app\job\order\JsOrder',
        'function' => ''
    ],
    [
        'key' => 'tk_cps_act_order_day',
        'name' => 'CPS联盟活动订单天任务',
        'desc' => 'CPS联盟活动订单天任务',
        'time' => [
            'type' => 'day',//任务调度频率类型
            'day' => 1,//每隔几日
            'hour' => 4,//当日执行时间具体小时数
            'min' => 20,//当日执行时间具体分钟数
        ],
        'class' => 'addon\tk_cps\app\job\act\ActOrderDay',
        'function' => ''
    ],
];
