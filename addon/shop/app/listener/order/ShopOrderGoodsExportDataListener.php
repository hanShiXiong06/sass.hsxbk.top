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
use addon\shop\app\model\order\OrderGoods;
use think\db\Query;

/**
 * 订单项导出数据源查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopOrderGoodsExportDataListener
{

    public function handle($param)
    {
        $data = [];
        if ($param['type'] == 'shop_order_goods') {
            $model = new Order();
            $orderGoodsModel = new OrderGoods();
            $field = 'order_id,order_no,order.member_id,nickname,order_type,order_from,pay.out_trade_no,order.status,order.goods_money,delivery_money,order_money,invoice_id,order.create_time,order.pay_time,delivery_time,take_time,finish_time,close_time,delivery_type,taker_name,taker_mobile,taker_province,taker_city,taker_district,taker_address,taker_full_address,taker_longitude,taker_latitude,take_store_id,order.is_enable_refund,member_remark,shop_remark,close_remark,discount_money,pay_money';
            $order = 'order.create_time desc';
            $pay_where = [];
            if($param['where'][ 'pay_type' ]){
                $pay_where[] = ['pay.type', '=',  $param['where'][ 'pay_type' ] ];
            }
            //查询导出订单项数据
            $order_data = $model->where([['order.site_id', '=', $param['site_id']]])->withSearch([ 'search_type', 'order_from', 'join_status', 'create_time', 'join_pay_time' ], $param['where'])
                ->withJoin([
                    'pay' => function(Query $query) use($pay_where){
                        $query->where($pay_where);
                    }], 'left')
                ->field($field)->order($order)->column('order_id');
            
            $order_goods_field = 'extend,order_goods_id,order_goods.order_id,member_id,goods_id,sku_id,delivery_id,goods_name,sku_name,goods_image,sku_image,price num,goods_money,is_enable_refund,goods_type,delivery_status,order_goods.status,id,express_number';
            $search_model = $orderGoodsModel->where([['order_goods.site_id', '=', $param['site_id']], ['order_goods.order_id', 'in', $order_data]])
                ->withJoin([
                    'orderDelivery' => ['id', 'express_number']
                ], 'left')
                ->field($order_goods_field)->append(['status_name', 'delivery_status_name', 'goods_type_name']);
            if ($param['page']['page'] > 0 && $param['page']['limit'] > 0) {
                $data = $search_model->page($param['page']['page'], $param['page']['limit'])->select()->toArray();
            } else {
                $data = $search_model->select()->toArray();
            }
        }
        return $data;
    }
}