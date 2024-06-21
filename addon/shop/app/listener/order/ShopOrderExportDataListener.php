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

use addon\shop\app\model\order\Order;
use think\db\Query;

/**
 * 订单导出数据源查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopOrderExportDataListener
{

    public function handle($param)
    {
        $data = [];
        if ($param['type'] == 'shop_order') {
            $model = new Order();
            $field = 'order_id,order_no,member_id,order_type,order_from,out_trade_no,status,goods_money,delivery_money,order_money,invoice_id,create_time,pay_time,delivery_time,take_time,finish_time,close_time,delivery_type,taker_name,taker_mobile,taker_province,taker_city,taker_district,taker_address,taker_full_address,taker_longitude,taker_latitude,take_store_id,is_enable_refund,member_remark,shop_remark,close_remark,discount_money,point';
            $order = 'create_time desc';
            $pay_where = [];
            if($param['where'][ 'pay_type' ]){
                $pay_where[] = ['pay.type', '=',  $param['where'][ 'pay_type' ] ];
            }
            //查询导出订单数据
            $search_model = $model
                ->where([['order.site_id', '=', $param['site_id']]])
                ->withSearch([ 'search_type', 'order_from', 'join_status', 'create_time', 'join_pay_time' ], $param['where'])
                ->field($field)
                ->withJoin([
                    'pay' => function(Query $query) use($pay_where){
                        $query->where($pay_where);
                    }
                ], 'left')
                ->with([
                    'order_goods' => function ($query) {
                        $query->field('extend,order_goods_id, order_id, member_id, goods_id, sku_id, goods_name, sku_name, goods_image, sku_image, price, num, goods_money, is_enable_refund, goods_type, delivery_status, status')->append(['delivery_status_name', 'status_name']);
                    },
                    'member' => function($query) {
                        $query->field('member_id, nickname, mobile, headimg');
                    }
                ])->order($order)->append(['order_from_name', 'order_type_name', 'status_name', 'delivery_type_name']);
            if ($param['page']['page'] > 0 && $param['page']['limit'] > 0) {
                $data = $search_model->page($param['page']['page'], $param['page']['limit'])->select()->toArray();
            } else {
                $data = $search_model->select()->toArray();
            }
            foreach ($data as $key => $val) {
                $data[$key]['status_name'] = $val['status_name']['name'];
                $data[$key]['nickname'] = $val['member']['nickname'];
            }
        }
        return $data;
    }
}