<?php

namespace addon\tk_jhkd\app\service\core;

use addon\tk_jhkd\app\service\api\OrderService as ApiOrderService;
use app\dict\pay\PayDict;
use app\service\core\notice\NoticeService;
use app\service\core\pay\CorePayService;
use core\base\BaseApiService;
use addon\tk_jhkd\app\model\tkjhkdorder\Tkjhkdorder;
use addon\tk_jhkd\app\model\orderdelivery\OrderDelivery;
use addon\tk_jhkd\app\model\OrderDeliveryReal;
use addon\tk_jhkd\app\model\order\OrderAdd;
use core\exception\CommonException;
use think\Exception;
use addon\tk_jhkd\app\dict\order\JhkdOrderAddDict;
use addon\tk_jhkd\app\dict\order\JhkdOrderDict;
use think\facade\Db;
use think\Response;
use addon\tk_jhkd\app\model\shop_order\ShopOrder;
use addon\tk_jhkd\app\service\admin\shop\OrderService;

/**
 * 易达接口对接
 * Class ConfigService
 * @package addon\tk_jhkd\service\core\yida
 */
class ChangeNoticeService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->orderModel = new Tkjhkdorder();
        $this->deliveryModel = new OrderDelivery();
        $this->deliveryRealModel = new OrderDeliveryReal();
    }

    /**
     * 订单状回调
     */
    public function changeOrderStatus($data)
    {
        Db::startTrans();
        try {
            $order_no = $data['orderNo'];
            //增加商城发单情况
            $shopDelivery = (new ShopOrder())->where(['yida_order_no' => $order_no])->findOrEmpty();
            if (!$shopDelivery->isEmpty()) {
                if ($data['contextObj']['ydOrderStatus'] == 11 || $data['contextObj']['ydOrderStatus'] == 2) {
                    $shopDelivery->is_pick = 1;
                    $shopDelivery->is_send = 1;
                    $shopDelivery->order_status_name = '揽收完成';
                    $shopDelivery->save();
                }
                if ($data['contextObj']['ydOrderStatus'] == 3) {
                    $shopDelivery->is_pick = 1;
                    $shopDelivery->is_send = 1;
                    $shopDelivery->order_status_name = '运单完成';
                    $shopDelivery->save();
                }
                if ($data['contextObj']['ydOrderStatus'] == 10) {
                    $shopDelivery->is_pick = 0;
                    $shopDelivery->is_send = 0;
                    $shopDelivery->order_status_name = '快递取消订单';
                    $shopDelivery->save();
                    //取消订单更改商城发货状态更改
                    (new OrderService())->yidaCancel(['order_no' => $shopDelivery['order_no']]);
                }
            }
            $deliveryInfo = $this->deliveryModel->where(['order_no' => $order_no])->findOrEmpty();
            if ($deliveryInfo->isEmpty()) {
                return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
            }
            $deliveryInfo->save([
                'order_status' => $data['contextObj']['ydOrderStatus'],
                'order_status_desc' => $data['contextObj']['ydOrderStatusDesc']
            ]);
            //订单揽件完成  易达11 揽件完成
            if ($data['contextObj']['ydOrderStatus'] == 11 || $data['contextObj']['ydOrderStatus'] == 2) {
                $orderInfo = $this->orderModel->where(['order_id' => $deliveryInfo['order_id']])->findOrEmpty();
                $orderInfo->save(['order_status' => JhkdOrderDict::FINISH_PICK]);
                (new NoticeService())->send($orderInfo['site_id'], 'tk_jhkd_order_pick', ['order_id' =>$orderInfo['order_id']]);
            }
            //订单完成时候完成系统订单  易达3 完成
            if ($data['contextObj']['ydOrderStatus'] == 3) {
                $orderInfo = $this->orderModel->where(['order_id' => $deliveryInfo['order_id']])->findOrEmpty();
                if($orderInfo['order_status']==JhkdOrderDict::FINISH) return true;
                $orderInfo->save(['order_status' => JhkdOrderDict::FINISH]);
                (new NoticeService())->send($orderInfo['site_id'], 'tk_jhkd_order_sign', ['order_id' => $orderInfo['order_id']]);
                event('JhkdOrderFinish',$orderInfo);
            }
            //快递方取消订单同步发起退款
            if ($data['contextObj']['ydOrderStatus'] == 10) {
                $orderInfo = $this->orderModel->where(['order_id' => $deliveryInfo['order_id']])->findOrEmpty();
                $orderInfo->save(['order_status' => JhkdOrderDict::CLOSE]);
                //自动原路发起退款
                $data = [
                    "id" => $orderInfo['id'],
                    "close_reason" => "运单取消退款"
                ];
                (new ApiOrderService())->applyRefund($data);
                event('CancelOrder', $data);
            }
            Db::commit();
            return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
        } catch (Exception $e) {
            Db::rollback();
            return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
        }
    }

    public function changeWeight($data)
    {
        Db::startTrans();
        try {
            $order_no = $data['orderNo'];
            $info = $data['contextObj'];
            //计算总支付费用
            $total_fee = 0;
            foreach ($info['feeBlockList'] as $k => $v) {
                $total_fee += $v['fee'];
            }
            //增加商城发单情况
            $shopDelivery = (new ShopOrder())->where(['yida_order_no' => $order_no])->findOrEmpty();
            if (!$shopDelivery->isEmpty()) {
                $shopDelivery->is_pick = 1;
                $shopDelivery->is_send = 1;
                $shopDelivery->real_price = $total_fee;
                $shopDelivery->order_status_name = '揽收计费完成';
                $shopDelivery->save();
            }
            $deliveryInfo = $this->deliveryModel->where(['order_no' => $order_no])->findOrEmpty();
            if ($deliveryInfo->isEmpty()) {
                return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
            }
            $realInfo = $this->deliveryRealModel->where(['order_id' => $deliveryInfo['order_id']])->findOrEmpty();

            $realInfo->save([
                'order_id' => $deliveryInfo['order_id'],
                'weight' => $info['realWeight'],
                'volume' => $info['realVolume'] ?? '',
                'fee_weight' => $info['calcFeeWeight'],
                'package_count' => $info['packageCount'],
                'fee_blockList' => json_encode($info['feeBlockList']),
                'total_fee' => $total_fee,
            ]);
            $orderInfo = $this->orderModel->where(['order_id' => $deliveryInfo['order_id']])->findOrEmpty();
            //修改订单状态
            $orderInfo->save(['order_status' => JhkdOrderDict::FINISH_PICK]);
            //生成补差价订单
            if ($orderInfo['order_money'] < $total_fee) {
                $add_money = ($total_fee - $orderInfo['order_money']) * 1.2;
                $addinfo = (new OrderAdd())->save([
                    'site_id' => $orderInfo['site_id'],
                    'member_id' => $orderInfo['member_id'],
                    'order_no' => create_no(),
                    'order_id' => $orderInfo['order_id'],
                    'order_money' => $add_money,
                    'ip' => request()->ip() ?? '',
                ]);
                //添加订单支付表
                (new CorePayService())->create($orderInfo['site_id'], PayDict::MEMBER, $orderInfo['member_id'], $add_money, JhkdOrderAddDict::getOrderType()['type'], $addinfo['id'], "快递补差价付款");
                (new NoticeService())->send($orderInfo['site_id'], 'tk_jhkd_order_add', ['order_id' =>$orderInfo['order_id']]);
            }
            Db::commit();
            return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
        } catch (Exception $e) {
            Db::rollback();
            return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
        }


    }

    public function doPick($data)
    {
        $order_no = $data['orderNo'];
        $info = $data['contextObj'];
        //增加商城发单情况
        $shopDelivery = (new ShopOrder())->where(['yida_order_no' => $order_no])->findOrEmpty();
        if (!$shopDelivery->isEmpty()) {
            $shopDelivery->is_pick = 0;
            $shopDelivery->is_send = 1;
            $shopDelivery->order_status_name = '揽收通知';
            $shopDelivery->save();
        }
        $deliveryInfo = $this->deliveryModel->where(['order_no' => $order_no])->findOrEmpty();
        if ($deliveryInfo->isEmpty()) {
            return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
        }
        $deliveryInfo->save(['courier_context' => json_encode($info)]);
        //订单揽收状态更新
        return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
    }

    public function changeOrder($data)
    {
        $order_no = $data['orderNo'];
        $info = $data['contextObj'];
        $deliveryInfo = $this->deliveryModel->where(['order_no' => $order_no])->findOrEmpty();
        if ($deliveryInfo->isEmpty()) {
            return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
        }
        $deliveryInfo->save([
            'delivery_business' => $info['businessTypeNew'],
            'delivery_id' => $info['deliveryIdNew'],
        ]);
        return Response::create(['msg' => '接受成功', 'code' => 200, 'success' => true], 'json', 200);
    }

}