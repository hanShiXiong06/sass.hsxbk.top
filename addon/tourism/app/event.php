<?php

return [
    //文件执行序列号
    'bind' => [
    ],

    'listen' => [
        'AddSiteAfter' => ['addon\tourism\app\listener\AddSiteAfterListener'],
        'PayCreate' => ['addon\tourism\app\listener\PayCreateListener'],
        'PaySuccess' => ['addon\tourism\app\listener\PaySuccessListener'],
        'RefundSuccess' => ['addon\tourism\app\listener\RefundSuccessListener'],
        'SiteIndex' => ['addon\tourism\app\listener\SiteIndexListener'],
        'NoticeData' => [
            'addon\tourism\app\listener\notice_template\OrderPay',
            'addon\tourism\app\listener\notice_template\OrderAutoClose',
            'addon\tourism\app\listener\notice_template\OrderVerifySuccess',
            'addon\tourism\app\listener\notice_template\OrderUseRemind',
            'addon\tourism\app\listener\notice_template\RefundSuccess',
            'addon\tourism\app\listener\notice_template\RefundRefuse'
        ],
        'WapIndex' => [ 'addon\tourism\app\listener\WapIndexListener' ],
        'BottomNavigation' => [ 'addon\tourism\app\listener\BottomNavigationListener' ],
       // 'VerifyType' => ['addon\tourism\app\listener\verify\VerifyTypeListener'],
        //'Verify' => [ 'addon\tourism\app\listener\verify\VerifyListener' ],


        //获取海报数据
        'GetPosterType' => [ 'addon\tourism\app\listener\poster\TourismPosterType' ],
        'GetPosterData' => [ 'addon\tourism\app\listener\poster\TourismPoster' ],

        //导出数据类型
        'ExportDataType' => [
            //酒店订单导出
            'addon\tourism\app\listener\order\TourismHotelOrderExportTypeListener',
            //景点订单导出
            'addon\tourism\app\listener\order\TourismScenicOrderExportTypeListener',
            //路线订单导出
            'addon\tourism\app\listener\order\TourismWayOrderExportTypeListener',
            //退款维权导出
            'addon\tourism\app\listener\refund\TourismOrderRefundExportTypeListener',

        ],
        //导出数据源
        'ExportData' => [
            //酒店订单导出
            'addon\tourism\app\listener\order\TourismHotelOrderExportDataListener',
            //景点订单导出
            'addon\tourism\app\listener\order\TourismScenicOrderExportDataListener',
            //路线订单导出
            'addon\tourism\app\listener\order\TourismWayOrderExportDataListener',
            //退款维权导出
            'addon\tourism\app\listener\refund\TourismOrderRefundExportDataListener',

        ],


    ],

    'subscribe' => [
    ],
];
