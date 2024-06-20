<?php

namespace addon\tk_jhkd\app\service\admin\order;

use addon\tk_jhkd\app\model\order\Order;
use addon\tk_jhkd\app\service\core\OrderLogService;
use app\model\member\Member;
use addon\tk_jhkd\app\model\orderdelivery\OrderDelivery;
use app\service\core\sys\CoreSysConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use addon\tk_jhkd\app\model\OrderDeliveryReal;
use addon\tk_jhkd\app\model\order\OrderLog;
/**
 * 订单列服务层
 * Class OrderService
 * @package addon\tk_jhkd\app\service\admin\order
 */
class OrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Order();
    }
    public function getLink()
    {
        $wap_url = (new CoreSysConfigService())->getSceneDomain($this->site_id)['wap_url'];
        return $wap_url.'/addon/tk_jhkd/pages/ordersubmit';
    }

    /**
     * 获取订单列列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,member_id,order_from,order_id,order_money,order_discount_money,is_send,is_pick,order_status,refund_status,out_trade_no,remark,pay_time,create_time,close_reason,is_enable_refund,close_time,ip,update_time,delete_time,send_log';
        $order = 'id desc';
        $search_model = $this->model->where([['site_id', "=", $this->site_id]])
            ->withSearch(["member_id", "order_from", "order_id", "is_send", "order_status", "refund_status", "remark", "create_time"], $where)
            ->with('member')->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    public function sendOrder($order_id)
    {
        event('OrderSend', $order_id);
        return true;
    }

    /**
     * 获取订单列信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,member_id,order_from,order_id,order_money,order_discount_money,is_send,is_pick,order_status,refund_status,out_trade_no,remark,pay_time,create_time,close_reason,is_enable_refund,close_time,ip,update_time,delete_time,send_log';
        $info = $this->model->field($field)
            ->where([['id', "=", $id]])
            ->with(
                [
                    'orderInfo' => function ($query) {
                        $query->field('bj_price,start_address,end_address,order_id,goods,long,width,height,delivery_id,delivery_type,weight,courier_context,order_status_desc,order_status')->append(['delivery_arry']);
                    },
                    'payInfo' => function ($query) {
                        $query->field('trade_id,status,pay_time,cancel_time,fail_reason,type,trade_type')->append(['status_name', 'type_name']);
                    },
                    'memberInfo' => function ($query) {
                        $query->field('nickname,member_id');
                    },
                ])
            ->findOrEmpty()->append(['order_status_arr'])->toArray();
        $info['is_send'] = strval($info['is_send']);
        $info['is_pick'] = strval($info['is_pick']);
        return $info;
    }

    /**
     * 添加订单列
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $res = $this->model->create($data);
        return $res->id;

    }

    /**
     * 订单列编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {

        $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除订单列
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->find();
        if ($model['order_status'] == -1 || $model['order_status'] == 0) {
            $deliveryInfo = (new OrderDelivery())->where(['order_id' => $model['order_id']])->findOrEmpty();
            if (!$deliveryInfo->isEmpty()) {
                $deliveryInfo->delete();
            }
            $realInfo=(new OrderDeliveryReal())->where(['order_id' => $model['order_id']])->findOrEmpty();
            if (!$realInfo->isEmpty()) {
                $realInfo->delete();
            }
            (new OrderLog())->where(['order_id' => $model['order_id']])->delete();
            (new OrderLogService())->writeOrderLog(
                $model['site_id'],
                $model['order_id'],
                $model['order_status'],
                '后台删除',
                'system'
            );
            $res = $model->delete();
            return $res;
        }
        throw new CommonException('当前订单状态不允许删除');
    }

    public function getMemberAll()
    {
        $memberModel = new Member();
        return $memberModel->where([["site_id", "=", $this->site_id]])->select()->toArray();
    }

}
