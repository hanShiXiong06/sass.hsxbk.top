<?php

namespace addon\tk_cps\app\dict\order;

/**
 * 订单相关枚举类
 */
class BwcOrderDict
{
     //订单品牌

    public static function getOrderStatus()
    {
         return [
             1 => '已取消',
             2 => '已过期',
             3 => '已报名',
             4 => '已下单',
             5=>'审核中',
             6=>'审核通过',
             7=>'审核失败',
             8=>'已返现'
         ];
    }

}
