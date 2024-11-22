<?php

return [
    'bind' => [

    ],
    'listen' => [
        //消息通知
        'NoticeData' => [
            'addon\tk_notice\app\listener\notice_template\CommonNotice',
        ],
        //公用发送
        'TkNoticeSend'=>[
            'addon\tk_notice\app\listener\notice\NoticeSend',
        ],
        /**************************封装相关通知事件---start---***********************/
        //支付成功通知
        'PaySuccess' => ['addon\tk_notice\app\listener\pay\PaySuccessListener'],
        //商城订单退款申请
        'AfterShopOrderRefundApply'=>['addon\tk_notice\app\listener\refund\AfterShopOrderRefundApply'],
        //站点创建后事件
        'AddSiteAfter' => ['addon\tk_notice\app\listener\AddSiteAfterListener'],
        /**************************封装相关通知事件---end---***********************/
    ],
    'subscribe' => [
    ],
];