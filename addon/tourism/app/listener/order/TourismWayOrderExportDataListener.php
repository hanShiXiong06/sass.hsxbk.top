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

use addon\o2o\app\model\Order;
use addon\o2o\app\model\OrderItem;
use addon\tourism\app\dict\order\OrderDict;
use addon\tourism\app\dict\order\RefundDict;
use addon\tourism\app\dict\order\WayOrderDict;
use addon\tourism\app\model\TourismOrder;
use think\db\Query;

/**
 * 订单项导出数据源查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class TourismWayOrderExportDataListener
{

    public function handle($param)
    {
        $list = [];
        if ($param['type'] == 'tourism_way_order') {
            $where = $param['where'];
            $field = 'order_id, site_id, member_id, order_from, order_type, order_no, out_trade_no, order_status, refund_status, ip, create_time, pay_time, close_time, auto_close_time, is_enable_refund, delete_time, order_money, buyer_info, start_time, end_time, days, num, goods_id, goods_name, goods_image, mobile, verify_code, verify_time, verifier_id';
            $order = 'create_time desc';
            $where['order_type'] = WayOrderDict::TYPE;
            $list = (new TourismOrder())->where([['site_id', '=', $param['site_id']]])->withSearch(['order_from', 'order_status', 'order_type', 'member_id', 'order_no', 'create_time', 'pay_time'], $where)->field($field)->with([ 'member' => function($query) {
                $query->field('member_id, nickname, mobile, headimg');
            }, 'item'])->order($order)->append(['order_from_name','image_thumb_small'])->select()->toArray();

            $order_status = OrderDict::getStatus();
            $refund_status = RefundDict::getRefundStatus();
            foreach ($list as $k => $v)
            {
                $list[$k]['order_status_info'] = $order_status[$v['order_status']] ?? [];
                $list[$k]['refund_status_name'] = $refund_status[$v['refund_status']]['name'] ?? '';

                $list[$k]['nickname'] = $v['member']['nickname'] ?? '';
                $list[$k]['scenic_name'] = $v['scenic']['scenic_name'] ?? '';
                $list[$k]['price'] = $v['item'][0]['price'] ?? '0.00';
                $list[$k]['buyer'] = $v['buyer_info']['name'] ?? '';
                $list[$k]['id_card'] = $v['buyer_info']['id_card'] ?? '';
                $list[$k]['type'] = '身份证';
                $list[$k]['status_name'] = $list[$k]['order_status_info']['name'] ?? '';

            }
        }
        return $list;
    }
}