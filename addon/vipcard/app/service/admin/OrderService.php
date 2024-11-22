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

namespace addon\vipcard\app\service\admin;

use addon\vipcard\app\dict\order\OrderDict;
use addon\vipcard\app\model\Order;
use core\base\BaseAdminService;

/**
 *
 * Class OrderService
 */
class OrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Order();
    }

    /**
     * 订单分页列表
     * @param array $where
     * @return mixed
     */
    public function getPage(array $where)
    {
        $field = 'order_id, site_id, member_id, order_from, order_type, order_no, out_trade_no, order_status, refund_status, ip, create_time, pay_time, close_time, auto_close_time, is_enable_refund, delete_time, order_money, pay_money';
        $order = 'create_time desc';
        $search_model = $this->model->where([ ['site_id', '=', $this->site_id] ])->withSearch([ 'order_no', 'order_from', 'order_status', 'member_id', 'out_trade_no', 'create_time'], $where)->field($field)
            ->with([ 'item' => function ($query){
                $query->field('order_id, item_name, item_image, price, num, item_money, site_id');
            }, 'member' => function($query){
                $query->field('member_id, nickname, mobile, headimg');
            }, 'pay' => function($query){
                $query->field('out_trade_no,type');
            } ])->order($order)->append(['order_status_info', 'order_from_name', 'item.item_image_thumb_small']);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 订单详情
     * @param array $where
     * @return mixed
     */
    public function getDetail(int $order_id)
    {
        $field = 'order_id, site_id, member_id, order_from, order_type, order_no, out_trade_no, order_status, refund_status, ip, create_time, pay_time, close_time, auto_close_time, is_enable_refund, delete_time, order_money, pay_money';

        $detail = $this->model->where([ ['site_id', '=', $this->site_id], ['order_id', '=', $order_id]])->field($field)->with([ 'item' => function($query) {
            $query->field('order_id, item_name, item_image, price, num, item_money, site_id');
        }, 'member' => function($query) {
            $query->field('member_id, nickname, mobile, headimg');
        },'order_log' => function($query){
            $query->field('order_id, action, action_time, nick_name, action_way');
        }, 'member_card' => function($query){
            $query->field('order_id,goods_id,card_id,total_num,card_type,total_use_num,expire_time,status')->with(['member_card_item' => function($query){
                $query->field('card_id,item_id,goods_id,num,use_num,verify_code')->with(['goods' => function($query){
                    $query->field('goods_id,goods_name,goods_cover,site_id');
                }]);
            }, 'goods' => function($query){
                $query->field('goods_id,goods_name');
            }])->append(['card_type_name', 'expire_time_name', 'status_name']);
        } ])->append(['order_status_info', 'order_from_name', 'item.item_image_thumb_small'])->findOrEmpty()->toArray();
        return $detail;
    }

    /**
     * 订单状态
     * @return array|array[]|string
     */
    public function getStatus()
    {
        return array_map(function ($item) {
            return [ 'name' => $item['name'], 'status' => $item['status'] ];
        }, OrderDict::getStatus());
    }
}