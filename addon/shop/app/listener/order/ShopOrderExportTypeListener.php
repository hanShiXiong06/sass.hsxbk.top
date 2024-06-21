<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\shop\app\listener\order;

/**
 * 订单导出数据类型查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopOrderExportTypeListener
{

    public function handle()
    {
        return [
            'shop_order' => [
                'name' => '订单列表',
                'column' => [
                    'order_id' => [ 'name' => '订单id'],
                    'order_no' => [ 'name' => '订单编号'],
                    'member_id' => [ 'name' => '会员id'],
                    'nickname' => [ 'name' => '会员昵称'],
                    'order_from_name' => [ 'name' => '订单来源'],
                    'out_trade_no' => [ 'name' => '支付流水号'],
                    'goods_money' => [ 'name' => '商品金额'],
                    'delivery_money' => [ 'name' => '配送金额'],
                    'discount_money' => [ 'name' => '优惠金额'],
                    'order_money' => [ 'name' => '订单金额'],
                    'point' => [ 'name' => '积分'],
                    'taker_name' => [ 'name' => '收货人'],
                    'taker_mobile' => [ 'name' => '收货人手机号'],
                    'taker_full_address' => [ 'name' => '收货详细地址'],
                    'delivery_type_name' => [ 'name' => '配送方式'],
                    'status_name' => [ 'name' => '订单状态'],
                    'create_time' => [ 'name' => '创建时间'],
                    'pay_time' => [ 'name' => '订单支付时间'],
                    'delivery_time' => [ 'name' => '订单发货时间'],
                    'take_time' => [ 'name' => '订单收货时间'],
                    'finish_time' => [ 'name' => '订单完成时间'],
                    'close_time' => [ 'name' => '订单关闭时间'],
                    'member_remark' => [ 'name' => '会员留言信息'],
                    'shop_remark' => [ 'name' => '商家留言'],
                    'close_remark' => [ 'name' => '关闭原因'],
                ]
            ]
        ];
    }
}