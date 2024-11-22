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

namespace addon\o2o\app\service\core;

use addon\o2o\app\dict\order\OrderDict;
use addon\o2o\app\dict\order\OrderLogDict;
use addon\o2o\app\model\Order;
use addon\o2o\app\model\OrderItem;
use addon\o2o\app\model\Technician;
use app\service\core\member\CoreMemberService;
use app\service\core\notice\NoticeService;
use core\base\BaseCoreService;
use core\exception\CommonException;
use think\facade\Db;

/**
 * 订单
 * Class CoreOrderService
 */
class  CoreOrderService extends BaseCoreService
{
    private $scene;

    public function __construct()
    {
        parent::__construct();
        $this->model = new Order();
    }

    /**
     * 订单是否能退款
     * @param int $order_id
     */
    public function checkOrderIsEnableRefund(int $order_id, $is_enable_refund)
    {
        $order_item_info = (new OrderItem())->field('is_enable_refund')->where([ ['order_id', '=', $order_id], ['item_type', 'in', 'reservation,buy'] ])->findOrEmpty()->toArray();
        if(!empty($order_item_info)) $is_enable_refund = $order_item_info['is_enable_refund'];
        return $is_enable_refund;
    }

    /**
     * 订单关闭
     * @param Order $order
     * @return true
     */
    public function close(Order $order) {
        if (!in_array($order['order_status'], [ OrderDict::WAIT_PAY, OrderDict::DISPATCH, OrderDict::WAIT_SERVICE,OrderDict::IN_SERVICE  ] )) throw new CommonException('ORDER_NOT_ALLOW_CLOSE');

        Db::startTrans();
        try {
            $order->order_status = OrderDict::CLOSE;
            $order->close_time = time();
            $order->is_enable_refund = 0;
            $order->save();
            // 添加订单日志
            CoreOrderLogService::addLog($order['site_id'], $order->order_id, OrderLogDict::ORDER_CANCEL, 'member', $order->member_id, OrderDict::getStatus(OrderDict::CLOSE));

            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 订单自动关闭
     * @param int $order_id
     * @return void
     */
    public function autoClose(int $order_id) {
        $order = (new Order())->where([ ['order_id', '=', $order_id ] ])->findOrEmpty();
        if ($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');
        if ($order->order_status != OrderDict::WAIT_PAY) return true;

        try {
            $this->close($order);
            // 添加订单日志
            CoreOrderLogService::addLog($order['site_id'], $order_id, OrderLogDict::ORDER_OVERTIME, 'system', 0, OrderDict::getStatus(OrderDict::CLOSE));

            // 发送订单关闭通知
            (new NoticeService())->send($order['site_id'], 'o2o_order_auto_close', [ 'order_id' => $order['order_id'] ]);
            Db::commit();
            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }


    /**
     * 订单派单
     * @param array $data
     * @return bool
     */
    public function orderDispatch(array $data)
    {
        $order = (new Order())->where([ ['order_id', '=', $data['order_id'] ] ])->findOrEmpty();
        if ($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');
        if (!in_array($order->order_status, [OrderDict::DISPATCH, OrderDict::WAIT_SERVICE])) throw new CommonException('当前订单不可派单');
        Db::startTrans();
        try {
            $order->order_status = OrderDict::WAIT_SERVICE;
            $order->dispatch_time = time();
            $order->technician_id = $data['technician_id'];
            $order->save();

            (new CoreOrderLogService())->addLog($order->site_id, $data['order_id'], OrderLogDict::ORDER_DISPATCH,'user', $data['id'] ?? 0, OrderDict::getStatus(OrderDict::WAIT_SERVICE));
            Db::commit();
            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 订单转单
     * @param array $data
     * @return bool
     */
    public function orderTransfer(array $data)
    {
        $order = (new Order())->where([ ['order_id', '=', $data['order_id'] ] ])->findOrEmpty();
        if ($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');
        if ($order->order_status != OrderDict::WAIT_SERVICE) throw new CommonException('当前订单不可转单');
        Db::startTrans();
        try {
            $order->order_status = OrderDict::DISPATCH;
            $order->dispatch_time = 0;
            $order->technician_id = 0;
            $order->save();
            $action_way = $data['action_way'] ?? 'system';
            $id = $data['id'] ?? 0;
            (new CoreOrderLogService())->addLog($order->site_id, $data['order_id'], OrderLogDict::ORDER_TRANSFER,$action_way, $id ?? 0, OrderDict::getStatus(OrderDict::DISPATCH));
            Db::commit();
            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 订单添加项目
     * @param array $data
     * @return bool
     */
    public function orderAddItem(array $data)
    {
        $order = (new Order())->where([ ['order_id', '=', $data['order_id'] ] ])->findOrEmpty()->toArray();
        if (empty($order)) throw new CommonException('ORDER_NOT_EXIST');
        if ($order['order_status'] != OrderDict::IN_SERVICE ) throw new CommonException('当前订单不可添加项目');
        Db::startTrans();
        try {
            $item_image = $data['item_images'] ? explode(',', $data['item_images'])[0] : '';
            $add_data = [
                'order_id' => $order['order_id'],
                'site_id' => $order['site_id'],
                'member_id' => $order['member_id'],
                'item_id' => 0,
                'item_type' => 'custom',
                'item_name' => $data['item_name'],
                'item_image' => $item_image,
                'item_images' => $data['item_images'],
                'price' => $data['price'],
                'num' => 1,
                'item_money' => $data['price'],
                'out_trade_no' => '',
                'technician_id' => $order['technician_id'],
                'is_enable_refund' => 0
            ];
            $order_item = (new OrderItem())->create($add_data);
            $order_item_id = $order_item->order_item_id;

            //订单金额为0的话,要直接支付
            if ($add_data['item_money'] == 0) {
                (new CoreOrderPayService())->itemPay(['site_id' => $order['order_id'], 'trade_id' => $order_item_id]);
            }

            $action_way = $data['action_way'] ?? 'system';
            $id = $data['id'] ?? 0;
            (new CoreOrderLogService())->addLog($order['site_id'], $order['order_id'], OrderLogDict::ORDER_ADD_PAY,$action_way, $id ?? 0, OrderDict::getStatus(OrderDict::IN_SERVICE));
            Db::commit();
            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 删除订单项
     */
    public function orderItemDel(array $data)
    {
        $order_item_id = $data['order_item_id'] ?? 0;
        if (!$order_item_id) throw new CommonException('PARAMS_ERROR');

        $order_item = (new OrderItem())->where([ ['order_item_id','=',$order_item_id] ])->findOrEmpty();
        if ($order_item->isEmpty()) throw new CommonException('ORDER_ITEM_NOT_EXIST');

        $order = (new Order())->where([ ['order_id','=',$order_item['order_id']] ])->findOrEmpty();
        if($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');

        if($order->technician_id != $data['id']) throw new CommonException('ORDER_ITEM_NOT_DEL_AUTHORITY');
        if($order->order_status != OrderDict::IN_SERVICE) throw new CommonException('ORDER_ITEM_NOT_DEL');
        if($order_item->item_type != 'custom') throw new CommonException('ORDER_ITEM_NOT_DEL');
        if($order_item->pay_time > 0) throw new CommonException('ORDER_ITEM_NOT_DEL');
        Db::startTrans();
        try {
            (new OrderItem())->where([ ['order_item_id', '=', $order_item_id] ])->delete();

            $action_way = $data['action_way'] ?? 'system';
            $id = $data['id'] ?? 0;
            (new CoreOrderLogService())->addLog($order->site_id, $order->order_id, OrderLogDict::ORDER_DEL_PAY,$action_way, $id ?? 0, OrderDict::getStatus(OrderDict::IN_SERVICE));
            Db::commit();
            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
        return true;
    }

    /**
     * 修改订单项
     */
    public function orderItemEdit(array $data)
    {
        $order_item_id = $data['order_item_id'] ?? 0;
        if (!$order_item_id) throw new CommonException('PARAMS_ERROR');

        $order_item = (new OrderItem())->where([ ['order_item_id','=',$order_item_id] ])->findOrEmpty();
        if ($order_item->isEmpty()) throw new CommonException('ORDER_ITEM_NOT_EXIST');

        $order = (new Order())->where([ ['order_id','=',$order_item['order_id']] ])->findOrEmpty();
        if($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');

        if($order->technician_id != $data['id']) throw new CommonException('ORDER_ITEM_NOT_DEL_AUTHORITY');
        if($order->order_status != OrderDict::IN_SERVICE) throw new CommonException('ORDER_ITEM_NOT_EDIT');
        if($order_item->item_type != 'custom') throw new CommonException('ORDER_ITEM_NOT_EDIT');
        if($order_item->pay_time > 0) throw new CommonException('ORDER_ITEM_NOT_EDIT');
        Db::startTrans();
        try {
            $item_image = $data['item_images'] ? explode(',', $data['item_images'])[0] : '';
            $edit_data = [
                'item_id' => 0,
                'item_type' => 'custom',
                'item_name' => $data['item_name'],
                'item_image' => $item_image,
                'item_images' => $data['item_images'],
                'price' => $data['price'],
                'num' => 1,
                'item_money' => $data['price'],
                'out_trade_no' => '',
            ];
            (new OrderItem())->where([ ['order_item_id', '=', $order_item_id] ])->update($edit_data);

            //订单金额为0的话,要直接支付
            if ($edit_data['item_money'] == 0) {
                (new CoreOrderPayService())->itemPay(['site_id' => $order->site_id, 'trade_id' => $order_item_id]);
            }

            $action_way = $data['action_way'] ?? 'system';
            $id = $data['id'] ?? 0;
            (new CoreOrderLogService())->addLog($order->site_id, $order->order_id, OrderLogDict::ORDER_EDIT_PAY,$action_way, $id ?? 0, OrderDict::getStatus(OrderDict::IN_SERVICE));
            Db::commit();
            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
        return true;
    }


    /**
     * 服务完成
     * @param array $data
     */
    public function orderServiceFinish(array $data)
    {
        $order = $this->model->where('order_id', $data['order_id'])->find();

        if ($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');
        if ($order->order_status != OrderDict::IN_SERVICE ) throw new CommonException('当前订单不可操作');
        $no_pay_count = (new OrderItem())->where([ ['order_id','=', $data['order_id']], ['pay_time', '=', 0] ])->count();
        if($no_pay_count > 0) throw new CommonException('当前订单有项目未支付，请先支付');
        Db::startTrans();
        try {
            $order->order_status = OrderDict::FINISH;
            $order->finish_time = time();
            $order->save();
            (new OrderItem())->where([ ['order_id', '=', $data['order_id']] ])->update(['is_enable_refund' => 0]);
            $action_way = $data['action_way'] ?? 'system';
            $id = $data['id'] ?? 0;
            (new CoreOrderLogService())->addLog($order->site_id, $data['order_id'], OrderLogDict::ORDER_FINISH,$action_way, $id ?? 0, OrderDict::getStatus(OrderDict::FINISH));
            (new Technician())->where([ ['id', '=', $order->technician_id] ])->inc('order_num', 1)->update();
            Db::commit();

            $order_money = (new OrderItem())->where([ ['order_id', '=', $data['order_id']], ['pay_time', '>', 0] ])->sum('item_money');

            // 订单完成发放积分成长值
            CoreMemberService::sendGrowth($order->site_id, $order->member_id, 'o2o_buy_goods', [
                'order_money' => $order_money,
                 'from_type' => 'o2o_buy_order',
                 'related_id' => $order['order_id']
            ]);
            CoreMemberService::sendGrowth($order->site_id, $order->member_id, 'o2o_buy_order',[
                'from_type' => 'o2o_buy_order',
                'related_id' => $order['order_id']
            ]);

            return true;
        } catch (\Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }


    /**
     * 订单信息
     * @param int $site_id
     * @param int $order_id
     * @return array
     */
    public function orderInfo(int $site_id, int $order_id) {
        return (new Order())->where([
            ['site_id', '=', $site_id],
            ['order_id', '=', $order_id]
        ])->field('*')->findOrEmpty()->toArray();
    }

    /**
     * 订单信息
     * @param int $site_id
     * @param int $order_item_id
     * @return array
     */
    public function orderItemInfo(int $site_id, int $order_item_id) {
        return (new OrderItem())->where([
            ['site_id', '=', $site_id],
            ['order_item_id', '=', $order_item_id]
        ])->field('*')->findOrEmpty()->toArray();
    }
}