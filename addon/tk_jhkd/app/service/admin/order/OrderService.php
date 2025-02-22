<?php

namespace addon\tk_jhkd\app\service\admin\order;

use addon\tk_jhkd\app\dict\order\CommissionStatusDict;
use addon\tk_jhkd\app\dict\order\JhkdOrderDict;
use addon\tk_jhkd\app\model\fenxiao\FenxiaoOrder;
use addon\tk_jhkd\app\model\order\Order;
use addon\tk_jhkd\app\model\order\OrderAdd;
use addon\tk_jhkd\app\service\core\CommonService;
use addon\tk_jhkd\app\service\core\OrderFinishService;
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

    public function commissionOrder($id)
    {
        $order_info = $this->model->where(['id' => $id])->findOrEmpty();
        if ($order_info->isEmpty()) throw new CommonException('订单不存在');
        $fenxiaoOrderModel = new FenxiaoOrder();
        $fenxiao_order_info = $fenxiaoOrderModel->where(['order_id' => $order_info->order_id])->findOrEmpty();
        if ($fenxiao_order_info->isEmpty()) throw new CommonException('分销订单不存在');
        if ($fenxiao_order_info['status'] != 0) throw new CommonException('订单已结算/关闭');
        (new OrderFinishService())->orderFinish($order_info);
        return [];
    }

    public function getLink()
    {
        $wap_url = (new CoreSysConfigService())->getSceneDomain($this->site_id)['wap_url'];
        return $wap_url . '/addon/tk_jhkd/pages/ordersubmit';
    }

    /**
     * @Notes:更改订单状态
     * @Interface changeStatus
     * @param $data
     * @return true
     * @author: TK
     * @Time: 2024/7/25   下午9:55
     */
    public function changeStatus($data)
    {
        $this->model->where([['order_id', '=', $data['order_id']], ['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 获取订单列列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,member_id,order_from,order_id,order_money,order_discount_money,is_send,is_pick,order_status,refund_status,out_trade_no,remark,pay_time,create_time,close_reason,is_enable_refund,close_time,ip,update_time,delete_time,send_log,remark';
        $order = 'id desc';
        $search_model = $this->model
            ->alias('o')
            ->join('tkjhkd_order_delivery oi', 'oi.order_id = o.order_id')
            ->where([['o.site_id', '=', $this->site_id]])
            ->where(function ($query) use ($where) {
                // 处理order_status查询
                if ($where['order_status'] != '') {
                    $query->where('o.order_status', '=', $where['order_status']);
                }
                if ($where['member_id'] != '') {
                    $query->where('o.member_id', '=', $where['member_id']);
                }
                if ($where['order_from'] != '') {
                    $query->where('o.order_from', '=', $where['order_from']);
                }
                if ($where['refund_status'] != '') {
                    $query->where('o.refund_status', '=', $where['refund_status']);
                }
                if ($where['create_time'][0] != '') {
                    $query->whereBetweenTime('o.create_time', $where['create_time'][0], $where['create_time'][1]);
                }
                if ($where['out_trade_no'] != '') {
                    $query->where('o.out_trade_no', 'like', "%{$where['out_trade_no']}%");
                }
                if ($where['remark'] != '') {
                    $query->where('o.remark', 'like', "%{$where['remark']}%");
                }
                if ($where['is_send'] != '') {
                    $query->where('o.is_send', '=', $where['is_send']);
                }
                // 处理关键字搜索
                if ($where['keyword'] != '') {
                    $query->whereOr([
                        ['oi.delivery_id', 'like', "%{$where['keyword']}%"],
                        ['o.order_id', 'like', "%{$where['keyword']}%"],
                    ]);
                    // 使用JSON_SEARCH实现模糊搜索，增加address和full_address字段
                    $query->whereOr("JSON_SEARCH(oi.start_address, 'one', '%{$where['keyword']}%', NULL, '$.name') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.start_address, 'one', '%{$where['keyword']}%', NULL, '$.mobile') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.start_address, 'one', '%{$where['keyword']}%', NULL, '$.address') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.start_address, 'one', '%{$where['keyword']}%', NULL, '$.full_address') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.end_address, 'one', '%{$where['keyword']}%', NULL, '$.name') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.end_address, 'one', '%{$where['keyword']}%', NULL, '$.mobile') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.end_address, 'one', '%{$where['keyword']}%', NULL, '$.address') IS NOT NULL")
                        ->whereOr("JSON_SEARCH(oi.end_address, 'one', '%{$where['keyword']}%', NULL, '$.full_address') IS NOT NULL");
                }
            })
            ->field([
                'o.*',
                'oi.delivery_id',
                'oi.start_address',
                'oi.end_address'
            ])
            ->with([
                'orderInfo',
                'payInfo' => function ($query) {
                    $query->field('trade_id,status,pay_time,cancel_time,fail_reason,type,trade_type')
                        ->where(['trade_type' => JhkdOrderDict::getOrderType()['type']])
                        ->append(['status_name', 'type_name']);
                },
                'deliveryRealInfo',
                'addorderInfo',
                'member'
            ])
            ->order('o.id desc')
            ->append(['is_send_name', 'order_status_arr']);

        $list = $this->pageQuery($search_model);
        $commService = new CommonService();
        $fenxiaoOrderModel = new FenxiaoOrder();
        foreach ($list['data'] as $k => $v) {
            $list['data'][$k]['platform_name'] = $commService->getDriverByType($v['orderInfo']['platform'])['name'] ?? '';
            $list['data'][$k]['delivery_name'] = $commService->getBrand($v['orderInfo']['platform'], $v['orderInfo']['delivery_type'])['name'] ?? '';
            $list['data'][$k]['start_address'] = json_decode($v['orderInfo']['start_address'], true);
            $list['data'][$k]['end_address'] = json_decode($v['orderInfo']['end_address'], true);
            $fenxiao_info = $fenxiaoOrderModel->where(['site_id' => $this->site_id, 'order_id' => $v['order_id']])->findOrEmpty();
            if ($fenxiao_info->isEmpty()) {
                $list['data'][$k]['fenxiao_order'] = [];
            } else {
                $list['data'][$k]['fenxiao_order'] = $fenxiao_info;
                $list['data'][$k]['fenxiao_order']['status'] = CommissionStatusDict::getStatus($fenxiao_info['status']);
            }
        }
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
                    'orderInfo',
                    'addorderInfo',
                    'deliveryRealInfo',
                    'payInfo' => function ($query) {
                        $query->field('trade_id,status,pay_time,cancel_time,fail_reason,type,trade_type')->append(['status_name', 'type_name']);
                    },
                    'memberInfo' => function ($query) {
                        $query->field('nickname,member_id');
                    },
                ]
            )
            ->findOrEmpty()->append(['order_status_arr'])->toArray();
        $info['is_send'] = strval($info['is_send']);
        $info['is_pick'] = strval($info['is_pick']);
        $info['orderInfo']['price_rule'] = json_decode($info['orderInfo']['price_rule'], true);
        $info['orderInfo']['original_rule'] = json_decode($info['orderInfo']['original_rule'], true);
        $info['orderInfo']['delivery_arry'] = (new CommonService())->getBrand($info['orderInfo']['platform'], $info['orderInfo']['delivery_type']);
        $fee_list = json_decode($info['deliveryRealInfo']['fee_blockList'], true);
        $new_fee_list = [];
        if ($fee_list != '') {
            foreach ($fee_list as $fee) {
                if ($fee['type'] != 0) {
                    $new_fee_list[] = [
                        'fee' => $fee['fee'],
                        'type' => $fee['type'],
                        'name' => $fee['name']
                    ];
                }
            }
        }

        $info['deliveryRealInfo']['fee_blockList'] = $new_fee_list;
        return $info;
    }
    public function getFxInfo($id)
    {
        $field = 'id,site_id,member_id,order_from,order_id,order_money,order_discount_money,is_send,is_pick,order_status,refund_status,out_trade_no,remark,pay_time,create_time,close_reason,is_enable_refund,close_time,ip,update_time,delete_time,send_log';
        $info = $this->model->field($field)
            ->where([['order_id', "=", $id]])
            ->with(
                [
                    'orderInfo',
                    'addorderInfo',
                    'deliveryRealInfo',
                    'payInfo' => function ($query) {
                        $query->field('trade_id,status,pay_time,cancel_time,fail_reason,type,trade_type')->append(['status_name', 'type_name']);
                    },
                    'memberInfo' => function ($query) {
                        $query->field('nickname,member_id');
                    },
                ]
            )
            ->findOrEmpty()->append(['order_status_arr'])->toArray();
        $info['is_send'] = strval($info['is_send']);
        $info['is_pick'] = strval($info['is_pick']);
        $info['orderInfo']['price_rule'] = json_decode($info['orderInfo']['price_rule'], true);
        $info['orderInfo']['original_rule'] = json_decode($info['orderInfo']['original_rule'], true);
        $info['orderInfo']['delivery_arry'] = (new CommonService())->getBrand($info['orderInfo']['platform'], $info['orderInfo']['delivery_type']);
        $fee_list = json_decode($info['deliveryRealInfo']['fee_blockList'], true);
        $new_fee_list = [];
        if ($fee_list != '') {
            foreach ($fee_list as $fee) {
                if ($fee['type'] != 0) {
                    $new_fee_list[] = [
                        'fee' => $fee['fee'],
                        'type' => $fee['type'],
                        'name' => $fee['name']
                    ];
                }
            }
        }

        $info['deliveryRealInfo']['fee_blockList'] = $new_fee_list;
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
            //检查补差价订单
            $addModel = (new OrderAdd())->where(['order_id' => $model['order_id']])->findOrEmpty();
            if (!$addModel->isEmpty()) {
                if ($addModel['order_status'] == 0) throw new CommonException('存在未支付补差价订单，禁止删除');
            }
            $deliveryInfo = (new OrderDelivery())->where(['order_id' => $model['order_id']])->findOrEmpty();
            if (!$deliveryInfo->isEmpty()) {
                $deliveryInfo->delete();
            }
            $realInfo = (new OrderDeliveryReal())->where(['order_id' => $model['order_id']])->findOrEmpty();
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
            //删除分销订单
            (new FenxiaoOrder())->where(['order_id' => $model['order_id']])->delete();
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
