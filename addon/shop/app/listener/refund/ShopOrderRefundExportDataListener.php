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

use addon\shop\app\model\order\OrderRefund;

/**
 * 订单退款维权导出数据源查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopOrderRefundExportDataListener
{
    public function handle($param)
    {
        $data = [];
        if ($param['type'] == 'shop_order_refund') {
            $model = new OrderRefund();

            $field = 'refund_id, order_id, order_goods_id, order_refund_no, refund_type, reason, member_id, apply_money, money, status, create_time, transfer_time, remark, voucher, source, timeout, refund_no, delivery, shop_reason, refund_address';
            $order = 'create_time desc';

            $search_model = $model
                ->where([ ['site_id', '=', $param['site_id']] ])
                ->withSearch([ 'order_refund_no', 'status', 'create_time' ], $param['where'])
                ->field($field)
                ->with(
                    [
                        'order_goods' => function($query) {
                            $query->field('order_goods_id, order_id, site_id, member_id, goods_id, sku_id, goods_name, sku_name, goods_image, sku_image, price, num, goods_money,discount_money, is_enable_refund, goods_type')->append([ 'goods_image_thumb_small' ]);
                        },
                        'member' => function($query) {
                            $query->field('member_id, nickname');
                        }
                    ])->order($order)->append([ 'status_name', 'refund_type_name' ]);
            if ($param['page']['page'] > 0 && $param['page']['limit'] > 0) {
                $data = $search_model->page($param['page']['page'], $param['page']['limit'])->select()->toArray();
            } else {
                $data = $search_model->select()->toArray();
            }
            foreach ($data as $key => $val) {
                $data[$key]['nickname'] = $val['member']['nickname'];
            }
        }
        return $data;
    }
}