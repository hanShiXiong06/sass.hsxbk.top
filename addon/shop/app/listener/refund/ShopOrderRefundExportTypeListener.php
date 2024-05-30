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

namespace addon\shop\app\listener\refund;

/**
 * 订单退款维权导出数据类型查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopOrderRefundExportTypeListener
{
    public function handle()
    {
        return [
            'shop_order_refund' => [
                'name' => '退款维权',
                'column' => [
                    'order_refund_no' => [ 'name' => '退款单号'],
                    'member_id' => [ 'name' => '会员id'],
                    'nickname' => [ 'name' => '会员昵称'],
                    'refund_type_name' => [ 'name' => '退款方式'],
                    'reason' => [ 'name' => '退款原因'],
                    'apply_money' => [ 'name' => '申请退款'],
                    'money' => [ 'name' => '实际退款'],
                    'status_name' => [ 'name' => '退款状态'],
                    'create_time' => [ 'name' => '申请时间'],
                    'transfer_time' => [ 'name' => '转账时间'],
                ]
            ]
        ];
    }
}