<?php

namespace addon\tk_cps\app\dict\order;

/**
 * 订单相关枚举类
 */
class JtkOrderDict
{
     //订单品牌
    public static function getOrderBrand()
    {
        return [
            1 => '美团',
            2 => '饿了么',
            3 => '拼多多',
            4 => '京东',
            5 => '肯德基',
            6 => '电影',
            7 => '麦当劳',
            8 => '话费充值',
            9 => '百果园',
            10 => '奈雪的茶',
            11 => '瑞幸咖啡',
            12 => '星巴克',
            13 => '喜茶',
            14 => '唯品会',
            15 => '滴滴/花小猪',
            16 => '汉堡王',
            17 => '高德打车',
            18 => '电费充值',
            19 => '会员充值',
            20 => '特价快递',
            21 => '联联周边游',
            22 => '抖音联盟',
            23 => '必胜客',
            24 => '旅划算',
            25 => '大牌餐券',
            26 => '千千惠生活',
            27 => '流量卡',
            28 => '同程出行',
            29 => '华莱士',
            30 => 'T3出行',
            31 => '景点门票',
            32 => '淘宝'
        ];
    }
    //订单状态
    public static function getOrderStatus()
    {
         return [
             0 => '未付款',
             1 => '已付款',
             2 => '待结算',
             3 => '已结算',
             4 => '无效订单'
         ];
    }

}