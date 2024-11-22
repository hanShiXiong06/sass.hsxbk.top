<?php

namespace addon\tk_cps\app\dict\order;

/**
 * 订单相关枚举类
 */
class MyxqOrderDict
{
     //充值订单状态
    public static function getRerechargeOrderStatus()
    {
        return [
            0 => '待付款',
            1 => '已付款',
            2 => '已付款充值中',
            3 => '充值完成',
            5 => '已结算',
            10 => '订单关闭'
        ];
    }

    //电影票订单状态
    public static function getMovieOrderStatus()
    {
        return [
            1 => '已付款',
            2 => '受理中',
            3 => '待出票',
            5 => '已结算',
            6 => '待付款',
            10 => '订单关闭'
        ];
    }

    //点餐平台标识
    public static function getDcPf()
    {
        return [
            'nx' => '奈雪',
            'bsk' => '必胜客',
            'mdl' => '麦当劳',
            'xbk'=> '星巴克',
        ];
    }
    //点餐订单状态
    public static function getDcOrderStatus()
    {
        return [
            0 => '待付款',
            1 => '已付款待出餐',
            2 => '出餐中',
            3 => '出餐成功',
            4 => '确认收货',
            5 => '出餐失败退款',
            10=>'订单关闭'
        ];
    }
    //点餐订单状态
    public static function getNearOrderStatus()
    {
        return [
            0 => '未支付',
            1 => '已支付',
            2 => '已发码',
            3 => '已核销',
            4 => '订单完成',
            5 => '已退款',
            10=>'订单关闭'
        ];
    }
    //自营商品订单状态
    public static function getShopOrderStatus()
    {
        return [
            0 => '待付款',
            1 => '已付款',
            2 => '已下单',
            3 => '已发货',
            4 => '确认收货',
            5 => '退款',
            10=>'订单取消'
        ];
    }
    //其他订单平台标识
    public static function getOthersPf()
    {
        return [
            1 => '京东',
            2 => '拼多多',
            3 => '淘宝',
            6=> '唯品会',
            7=> '美团分销联盟',
            13=> '美团联盟',
            14=> '其他',
            15=> '快手',
            30=> '饿了么',
            31=> '滴滴',
            32=> '吃喝玩乐周边',
            34=> '流量卡',
        ];
    }
}
