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

namespace addon\tourism\app\listener\order;

use addon\tourism\app\dict\order\HotelOrderDict;
use addon\tourism\app\dict\order\OrderDict;
use addon\tourism\app\dict\order\RefundDict;
use addon\tourism\app\model\TourismOrder;
use think\db\Query;

/**
 * 订单导出数据源查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class TourismHotelOrderExportDataListener
{

    public function handle($param)
    {
        $list = [];
        if ($param['type'] == 'tourism_hotel_order') {
            $field = 'order_id, site_id, member_id, order_from, order_type, order_no, out_trade_no, order_status, refund_status, ip, create_time, pay_time, close_time, auto_close_time, is_enable_refund, delete_time, order_money, buyer_info, start_time, end_time, days, num, goods_id, goods_name, goods_image, mobile, hotel_id, verify_code, verify_time, verifier_id';
            $order = 'create_time desc';
            $where = $param['where'];
            $where['order_type'] = HotelOrderDict::TYPE;
            $list = (new TourismOrder())->where([['site_id', '=', $param['site_id']]])->withSearch(['order_from', 'order_status', 'order_type', 'member_id', 'order_no', 'create_time', 'pay_time'], $where)->field($field)->with([ 'member' => function($query) {
                $query->field('member_id, nickname, mobile, headimg');
            },'hotel' => function ($query){
                $query->field('hotel_id, hotel_name, hotel_cover,site_id')->append(['cover_thumb_small']);
            },'item' => function ($query){
                $query->field('order_id, price, goods_money', 'price', 'goods_name', 'goods_image');
            }
            ])->order($order)->append(['order_from_name', 'image_thumb_small'])->select()->toArray();
            $order_status = OrderDict::getStatus();
            $refund_status = RefundDict::getRefundStatus();
            foreach ($list as $k => $v)
            {
                $list[$k]['order_status_info'] = $order_status[$v['order_status']] ?? [];
                $list[$k]['refund_status_name'] = $refund_status[$v['refund_status']]['name'] ?? '';
                $list[$k]['nickname'] = $v['member']['nickname'] ?? '';
                $list[$k]['hotel_name'] = $v['hotel']['hotel_name'] ?? '';
                $list[$k]['price'] = $v['item'][0]['price'] ?? '0.00';
                $list[$k]['buyer'] = implode(',', array_column($v['buyer_info'], 'name'));

                $list[$k]['status_name'] = $list[$k]['order_status_info']['name'] ?? '';
            }

        }
        return $list;
    }
}