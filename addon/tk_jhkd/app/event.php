<?php

return [
    //文件执行序列号
    'bind' => [
    ],

    'listen' => [

        //应用管理
        'AppManage' => ['addon\tk_jhkd\app\listener\AppManageListener'],
        //订单创建
        'PayCreate' => ['addon\tk_jhkd\app\listener\pay\PayCreateListener'],
        //支付成功
        'PaySuccess' => ['addon\tk_jhkd\app\listener\pay\PaySuccessListener'],
        //退款成功
        'RefundSuccess'=>['addon\tk_jhkd\app\listener\pay\RefundSuccessListener'],
        //发单操作
        'OrderSend'=>['addon\tk_jhkd\app\listener\order\OrderSendListener'],
        //订单完成事件
        'JhkdOrderFinish'=>['addon\tk_jhkd\app\listener\order\OrderFinishListener'],
        //取消订单，已付款情况
        'CancelOrder'=>['addon\tk_jhkd\app\listener\order\OrderCancelListener'],
        //预下单--封装接口
        "DeliveryPreOrder"=>['addon\tk_jhkd\app\listener\order\delivery\DeliveryPreOrderListener'],
        //发送下单--封装接口
        "DeliverySendOrder"=>['addon\tk_jhkd\app\listener\order\delivery\DeliverySendOrderListener'],
        //取消下单--封装接口
        "DeliveryCancelOrder"=>['addon\tk_jhkd\app\listener\order\delivery\DeliveryCancelOrderListener'],
        //增加导航
        'BottomNavigation' => [ 'addon\tk_jhkd\app\listener\BottomNavigationListener' ],
        //首页设置
        'WapIndex' => [ 'addon\tk_jhkd\app\listener\WapIndexListener' ],
        //消息通知
        'NoticeData' => [
            'addon\tk_jhkd\app\listener\notice_template\OrderPay',
            'addon\tk_jhkd\app\listener\notice_template\OrderPick',
            'addon\tk_jhkd\app\listener\notice_template\OrderAdd',
            'addon\tk_jhkd\app\listener\notice_template\OrderSign',
        ],
        //站点创建后事件
        'AddSiteAfter' => ['addon\tk_jhkd\app\listener\AddSiteAfterListener'],
        //获取海报数据
        'GetPosterType' => ['addon\tk_jhkd\app\listener\poster\JhkdPosterType'],
        'GetPosterData' => ['addon\tk_jhkd\app\listener\poster\JhkdPoster'],
    ],

    'subscribe' => [
    ],
];
