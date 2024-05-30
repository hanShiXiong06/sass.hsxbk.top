<?php

return [
    'bind' => [

    ],
    'listen' => [

        // 添加/编辑商品之后的事件
        'AfterGoodsEdit' => [
            'addon\shop\app\listener\point_exchange\AfterGoodsEdit'
        ],
        //订单创建后
        'ShopOrderCreate' => [ 'addon\shop\app\listener\order\ShopOrderCreate' ],
        // 站点创建之后
        'AddSiteAfter' => [ 'addon\shop\app\listener\AddSiteAfterListener' ],
        //订单创建时 优惠抵扣减免业务
        'ShopOrderDidcountCreate' => [
            'addon\shop\app\listener\point_exchange\ShopOrderDidcountCreate'   //积分商城兑换
        ],
        //订单创建后
        'AfterShopOrderCreate' => [
            'addon\shop\app\listener\order\AfterShopOrderCreate' ,
            'addon\shop\app\listener\point_exchange\AfterShopOrderCreate',   //积分商城业务
        ],
        //订单支付后
        'AfterShopOrderPay' => [ 'addon\shop\app\listener\order\AfterShopOrderPay' ],
        //订单发货后
        'AfterShopOrderDelivery' => [ 'addon\shop\app\listener\order\AfterShopOrderDelivery' ],
        //订单收货后
        'AfterShopOrderFinish' => [ 'addon\shop\app\listener\order\AfterShopOrderFinish' ],
        //订单关闭后
        'AfterShopOrderClose' => [
            'addon\shop\app\listener\order\AfterShopOrderClose',
            'addon\shop\app\listener\point_exchange\AfterShopOrderClose',   //积分商城业务
        ],
        //活动信息
        'ShopGoodsMarketCalculate' => [
            'addon\shop\app\listener\marketing\ShopDiscountCalculate'
        ],
        /***************************************************** 退款 start *****************************************************/
        'AfterShopOrderRefundApply' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundApply' ],
        'AfterShopOrderRefundAuditApply' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundAuditApply' ],
        'AfterShopOrderRefundAuditRefundGoods' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundAuditRefundGoods' ],
        'AfterShopOrderRefundClose' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundClose' ],
        'AfterShopOrderRefundDelivery' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundDelivery' ],
        'AfterShopOrderRefundEdit' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundEdit' ],
        'AfterShopOrderRefundEditDelivery' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundEditDelivery' ],
        'AfterShopOrderRefundFinish' => [ 'addon\shop\app\listener\refund\AfterShopOrderRefundFinish' ],
        /***************************************************** 退款 end *****************************************************/

        'ShopPromotion' => [ 'addon\shop\app\listener\app\ShopPromotionListener' ],
        'WapIndex' => [ 'addon\shop\app\listener\WapIndexListener' ],
        'BottomNavigation' => [ 'addon\shop\app\listener\BottomNavigationListener' ],

        //支付
        'PayCreate' => [ 'addon\shop\app\listener\pay\PayCreateListener' ],
        'PaySuccess' => [ 'addon\shop\app\listener\pay\PaySuccessListener' ],
        'RefundSuccess' => [ 'addon\shop\app\listener\pay\RefundSuccessListener' ],

        'NoticeData' => [
            'addon\shop\app\listener\notice_template\OrderPay',
            'addon\shop\app\listener\notice_template\OrderPayRemind',
            'addon\shop\app\listener\notice_template\OrderDelivery',
            'addon\shop\app\listener\notice_template\RefundAgree',
            'addon\shop\app\listener\notice_template\RefundRefuse',
        ],
        //优惠券
        'CouponReceiveType' => [ 'addon\shop\app\listener\coupon\CouponReceiveListener' ],


        //获取海报数据
        'GetPosterType' => [ 'addon\shop\app\listener\poster\ShopPosterType' ],
        'GetPosterData' => [ 'addon\shop\app\listener\poster\ShopPoster' ],

        //导出数据类型
        'ExportDataType' => [
            //订单列表导出
            'addon\shop\app\listener\order\ShopOrderExportTypeListener',
            //订单项导出
            'addon\shop\app\listener\order\ShopOrderGoodsExportTypeListener',
            //退款维权导出
            'addon\shop\app\listener\refund\ShopOrderRefundExportTypeListener',
            //发票列表导出
            'addon\shop\app\listener\order\ShopInvoiceExportTypeListener',
        ],
        //导出数据源
        'ExportData' => [
            //订单列表导出
            'addon\shop\app\listener\order\ShopOrderExportDataListener',
            //订单项导出
            'addon\shop\app\listener\order\ShopOrderGoodsExportDataListener',
            //退款维权导出
            'addon\shop\app\listener\refund\ShopOrderRefundExportDataListener',
            //发票列表导出
            'addon\shop\app\listener\order\ShopInvoiceExportDataListener',
        ],
        //商城统计执行
        'StatExecute' => [ 'addon\shop\app\listener\stat\StatExecuteListener' ],
        //商城统计字段
        'StatField' => [ 'addon\shop\app\listener\stat\StatFieldListener' ],
        //核销
        'VerifyType' => [ 'addon\shop\app\listener\verify\VerifyTypeListener' ],
        'VerifyCreate' => [ 'addon\shop\app\listener\verify\VerifyCreateListener' ],
        'Verify' => [ 'addon\shop\app\listener\verify\VerifyListener' ],

        'ActiveStartAfter' => [
            'addon\shop\app\listener\marketing\DiscountActiveStartAfter'
        ],

        'ActiveEndAfter' => [
            'addon\shop\app\listener\marketing\DiscountActiveEndAfter'
        ],
        //通过支付信息获取手机端订单详情路径
        'WapOrderDetailPath' => [
            'addon\shop\app\listener\order\WapOrderDetailPathListener',
        ],
    ],
    'subscribe' => [
    ],
];
