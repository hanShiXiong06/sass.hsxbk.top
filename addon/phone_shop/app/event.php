<?php

return [
    'bind' => [

    ],
    'listen' => [

        // 添加/编辑商品之后的事件
        'AfterGoodsEdit' => [
            'addon\phone_shop\app\listener\point_exchange\AfterGoodsEdit'
        ],
        //订单创建后
        'ShopOrderCreate' => [ 'addon\phone_shop\app\listener\order\ShopOrderCreate' ],
        // 站点创建之后
        'AddSiteAfter' => [ 'addon\phone_shop\app\listener\AddSiteAfterListener' ],
        //订单创建时 优惠抵扣减免业务
        'ShopOrderDiscountCreate' => [
            'addon\phone_shop\app\listener\point_exchange\ShopOrderDiscountCreate'   //积分商城兑换
        ],
        //订单创建后
        'AfterShopOrderCreate' => [
            'addon\phone_shop\app\listener\order\AfterShopOrderCreate',
            'addon\phone_shop\app\listener\point_exchange\AfterShopOrderCreate',   //积分商城业务
        ],
        //订单支付后
        'AfterShopOrderPay' => [ 'addon\phone_shop\app\listener\order\AfterShopOrderPay' ],
        //订单发货后
        'AfterShopOrderDelivery' => [ 'addon\phone_shop\app\listener\order\AfterShopOrderDelivery' ],
        //订单收货后
        'AfterShopOrderFinish' => [ 'addon\phone_shop\app\listener\order\AfterShopOrderFinish' ],
        //订单编辑价格后
        'AfterShopOrderEditPrice' => [ 'addon\phone_shop\app\listener\order\AfterShopOrderEditPrice' ],
        //订单关闭后
        'AfterShopOrderClose' => [
            'addon\phone_shop\app\listener\order\AfterShopOrderClose',
            'addon\phone_shop\app\listener\point_exchange\AfterShopOrderClose',   //积分商城业务
        ],
        //活动信息
        'ShopGoodsMarketCalculate' => [
            'addon\phone_shop\app\listener\marketing\ShopDiscountCalculate'
        ],
        /***************************************************** 退款 start *****************************************************/
        'AfterShopOrderRefundApply' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundApply' ],
        'AfterShopOrderRefundAuditApply' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundAuditApply' ],
        'AfterShopOrderRefundAuditRefundGoods' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundAuditRefundGoods' ],
        'AfterShopOrderRefundClose' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundClose' ],
        'AfterShopOrderRefundDelivery' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundDelivery' ],
        'AfterShopOrderRefundEdit' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundEdit' ],
        'AfterShopOrderRefundEditDelivery' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundEditDelivery' ],
        'AfterShopOrderRefundFinish' => [ 'addon\phone_shop\app\listener\refund\AfterShopOrderRefundFinish' ],
        /***************************************************** 退款 end *****************************************************/

        'ShopPromotion' => [ 'addon\phone_shop\app\listener\app\ShopPromotionListener' ],
        'WapIndex' => [ 'addon\phone_shop\app\listener\WapIndexListener' ],
        'BottomNavigation' => [ 'addon\phone_shop\app\listener\BottomNavigationListener' ],

        //支付
        'PayCreate' => [ 'addon\phone_shop\app\listener\pay\PayCreateListener' ],
        'PaySuccess' => [ 'addon\phone_shop\app\listener\pay\PaySuccessListener' ],
        'RefundSuccess' => [ 'addon\phone_shop\app\listener\pay\RefundSuccessListener' ],

        'NoticeData' => [
            'addon\phone_shop\app\listener\notice_template\OrderPay',
            'addon\phone_shop\app\listener\notice_template\OrderPayRemind',
            'addon\phone_shop\app\listener\notice_template\OrderDelivery',
            'addon\phone_shop\app\listener\notice_template\RefundAgree',
            'addon\phone_shop\app\listener\notice_template\RefundRefuse',
        ],
        //优惠券
        'CouponReceiveType' => [ 'addon\phone_shop\app\listener\coupon\CouponReceiveListener' ],


        //获取海报数据
        'GetPosterType' => [ 'addon\phone_shop\app\listener\poster\ShopPosterType' ],
        'GetPosterData' => [ 'addon\phone_shop\app\listener\poster\ShopPoster' ],

        //导出数据类型
        'ExportDataType' => [
            //订单列表导出
            'addon\phone_shop\app\listener\order\ShopOrderExportTypeListener',
            //订单项导出
            'addon\phone_shop\app\listener\order\ShopOrderGoodsExportTypeListener',
            //退款维权导出
            'addon\phone_shop\app\listener\refund\ShopOrderRefundExportTypeListener',
            //发票列表导出
            'addon\phone_shop\app\listener\order\ShopInvoiceExportTypeListener',
        ],
        //导出数据源
        'ExportData' => [
            //订单列表导出
            'addon\phone_shop\app\listener\order\ShopOrderExportDataListener',
            //订单项导出
            'addon\phone_shop\app\listener\order\ShopOrderGoodsExportDataListener',
            //退款维权导出
            'addon\phone_shop\app\listener\refund\ShopOrderRefundExportDataListener',
            //发票列表导出
            'addon\phone_shop\app\listener\order\ShopInvoiceExportDataListener',
        ],
        //商城统计执行
        'StatExecute' => [ 'addon\phone_shop\app\listener\stat\StatExecuteListener' ],
        //商城统计字段
        'StatField' => [ 'addon\phone_shop\app\listener\stat\StatFieldListener' ],
        //核销
        'VerifyType' => [ 'addon\phone_shop\app\listener\verify\VerifyTypeListener' ],
        'VerifyCreate' => [ 'addon\phone_shop\app\listener\verify\VerifyCreateListener' ],
        'Verify' => [ 'addon\phone_shop\app\listener\verify\VerifyListener' ],
        'VerifyInfo' => [ 'addon\phone_shop\app\listener\verify\VerifyInfoListener' ],

        'ActiveStartAfter' => [
            'addon\phone_shop\app\listener\marketing\DiscountActiveStartAfter'
        ],

        'ActiveEndAfter' => [
            'addon\phone_shop\app\listener\marketing\DiscountActiveEndAfter'
        ],
        //通过支付信息获取手机端订单详情路径
        'WapOrderDetailPath' => [
            'addon\phone_shop\app\listener\order\WapOrderDetailPathListener',
        ],

        'PrinterContent' => [
            'addon\phone_shop\app\listener\printer\PrinterContentListener'
        ],
    ],
    'subscribe' => [
    ],
];