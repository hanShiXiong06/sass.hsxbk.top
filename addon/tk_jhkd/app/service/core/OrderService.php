<?php

namespace addon\tk_jhkd\app\service\core;

use addon\tk_jhkd\app\dict\order\JhkdOrderAddDict;
use addon\tk_jhkd\app\dict\order\JhkdOrderDict;
use addon\tk_jhkd\app\job\notice\Webhook;
use addon\tk_jhkd\app\job\order\SendOrder;
use addon\tk_jhkd\app\model\TkjhkdBrand;
use addon\tk_jhkd\app\model\tkjhkdorder\Tkjhkdorder;
use addon\tk_jhkd\app\model\order\OrderAdd;
use app\dict\pay\PayDict;
use app\model\pay\Pay;
use app\model\pay\Refund;
use app\service\core\notice\NoticeService;
use app\service\core\pay\CorePayService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseApiService;
use core\exception\CommonException;
use addon\tk_jhkd\app\model\orderdelivery\OrderDelivery;
use addon\tk_jhkd\app\model\OrderDeliveryReal;
use Exception;
use think\facade\Cache;
use think\facade\Db;
use think\facade\Log;
use core\util\Snowflake;

/**
 * 聚合快递订单服务层
 * Class OrderService
 * @package addon\tk_jhkd\service\core\order
 */
class OrderService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new TkjhkdOrder();
        $this->deliveryModel = new OrderDelivery();
        $this->yidaService = new YidaService();
        $this->config = $this->getConfig();
        if (!$this->config) throw new CommonException('基础配置未完成，请联系管理员');
    }

    /**
     * $order_id
     * 快递渠道发单，三方下单
     */
    public function sendOrder($order_id)
    {
        Db::startTrans();
        try {
            $order_model = $this->model;
            $order_info = $order_model->where([['order_id', '=', $order_id]])->findOrEmpty();
            if (empty($order_info))
                throw new CommonException('ORDER_NOT_EXIST');
            if($order_info['is_send']==1) throw new CommonException('已经发单');
            $ordeDeliveryInfo = (new OrderDelivery())->where(['order_id' => $order_id])->findOrEmpty();
            if ($ordeDeliveryInfo->isEmpty()) throw new Exception('未找到运单数据');
            $params = $ordeDeliveryInfo;
            $send_address = json_decode($params['start_address'], true);
            $sendName = explode("-", $send_address['address']);
            $receive_address = json_decode($params['end_address'], true);
            $receiveName = explode("-", $receive_address['address']);
            $data = [
                "deliveryType" => $params['delivery_type'],
                "customer_type" => $params['customer_type'],
                "thirdNo" => $params['order_id'],
                "senderProvince" => $sendName[0],
                "senderCity" => $sendName[1],
                "senderDistrict" => $sendName[2],
                "senderAddress" => $send_address['full_address'],
                "senderName" => $send_address['name'],
                "senderMobile" => $send_address['mobile'],
                "senderTel" => $send_address['telephone'] ?? '',
                "receiveProvince" => $receiveName[0],
                "receiveCity" => $receiveName[1],
                "receiveDistrict" => $receiveName[2],
                "receiveAddress" => $receive_address['full_address'],
                "receiveName" => $receive_address['name'],
                "receiveMobile" => $receive_address['mobile'],
                "receiveTel" => $receive_address['telephone'] ?? '',
                "weight" => $params['weight'],
                "vloumLong" => $params['long'],
                "vloumWidth" => $params['width'],
                "vloumHeight" => $params['height'],
                "vloum" => $params['long'] * $params['width'] * $params['height'],
                "guaranteeValueAmount" => $params['bj_price'] > 0 ? $params['bj_price'] : null,
                "goods" => $params['goods'],
                "packageCount" => $params['package_count'],
                "remark" => $params['remark'],
                "deliveryBusiness" => $params['delivery_business'],
                "onlinePay" => $params['online_pay'],
                "payMethod" => $params['online_pay'] == 'N' ? 10 : '',
                "channelId" => $params['channel_id'] ?? ''
            ];
            $submitInfo = event('DeliverySendOrder', ['site_id' => $this->site_id, 'data' => $data]);
            $submitInfo = $submitInfo [0];
            $order_no = $submitInfo['orderNo'];
            $delivery_id = $submitInfo['deliveryId'] ?? '';
            $orderDeliveryInfo = $this->deliveryModel->where(['order_id' => $order_id])->findOrEmpty();
            if ($orderDeliveryInfo->isEmpty()) {
                event('DeliveryCancelOrder', ['site_id' => $this->site_id, 'data' => [
                    'order_no' => $order_no,
                    'task_id' => $orderDeliveryInfo['task_id']
                ]]);
                //取消下单
            } else {
                $orderDeliveryInfo->save(['order_no' => $order_no, 'delivery_id' => $delivery_id]);
                $order_info->save(['is_send' => 1]);
                (new OrderLogService())->writeOrderLog(
                    $order_info['site_id'],
                    $order_info['order_id'],
                    JhkdOrderDict::FINISH_PICK,
                    '成功发单'
                );
                Db::commit();
            }

        } catch (Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    public
    function create_no(string $prefix = '', string $tag = '')
    {

        $data_center_id = 1;
        $machine_id = 2;
        $snowflake = new Snowflake($data_center_id, $machine_id);
        $id = $snowflake->generateId();
        $no = $prefix . date('Ymd') . $tag . $id;
        $cacheKey = 'unique_no_' . $no;
        if (Cache::get($cacheKey)) {
            return create_no($prefix, $tag);
        } else {
            Cache::set($cacheKey, true, 60); // 设置过期时间为 60 秒
            return $no;
        }
    }

    /**
     * 快递预下单
     * @param $params
     * @return array
     * @throws Exception
     */
    public function preOrder($params)
    {
        $startArr = explode("-", $params['startAddress']['address']);
        $endArr = explode("-", $params['endAddress']['address']);
        //必填参数校验
        $data = [
            "receiveAddress" => $params['endAddress']['full_address'],
            "receiveMobile" => $params['endAddress']['mobile'],
            "receiveTel" => "",
            "receiveName" => $params['endAddress']['name'],
            "receiveProvince" => $endArr[0],
            "receiveCity" => $endArr[1],
            "receiveDistrict" => $endArr[2],
            "senderAddress" => $params['startAddress']['full_address'],
            "senderMobile" => $params['startAddress']['mobile'],
            "senderTel" => "",
            "senderName" => $params['startAddress']['name'],
            "senderProvince" => $startArr[0],
            "senderCity" => $startArr[1],
            "senderDistrict" => $startArr[2],
            "goods" => $params['goods'],
            "packageCount" => $params['packageCount'],
            "weight" => $params['weight'],
            "vloumLong" => $params['vloumLong'],
            "vloumWidth" => $params['vloumWidth'],
            "vloumHeight" => $params['vloumHeight'],
            "guaranteeValueAmount" => $params['guaranteeValueAmount'],
            "customerType" => $params['customerType'],
            "onlinePay" => "ALL",
            "payMethod" => 10,
            "thirdNo" => "TD965412356"
        ];
        $resInfo = event('DeliveryPreOrder', ['site_id' => $this->site_id, 'data' => $data]);
        $resInfo = $resInfo[0];
        $url = (new CommonService())->getUrl();
        $dataInfo = [];
        foreach ($resInfo as $k1 => $v1) {
            $brand = (new TkjhkdBrand())->where(['delivery_type' => $v1['deliveryType']])->findOrEmpty();
            if (!$brand->isEmpty()) {
                $v1['logo'] = $url . '/' . $brand['logo'];
            }
            $v1['showPrice'] = $this->showPrice($v1);
            $keysToRemove = ['preDeliveryFee', 'preOrderFee', 'price', 'originalFee', 'originalPrice'];
            $v1 = array_diff_key($v1, array_flip($keysToRemove));
            $dataInfo[] = $v1;
        }
        //增加验证key
        $key = md5(create_no() . time());

        usort($dataInfo, function($a, $b) {
            return $a['showPrice'] <=>$b['showPrice'];
        });
        Cache::set($key, $dataInfo, 180);
        $data = [
            'key' => $key,
            'list' => $dataInfo
        ];
        return $data;
    }

    /**
     * @param $params
     * 创建系统订单
     */
    public
    function createOrder($params)
    {
        if (!isset($params['delivery_info']['deliveryType'])) throw new Exception('请选择正确快递渠道');
        //进行订单验证
        $cacheData = Cache::get($params['key']);
        if (!$cacheData) {
            throw new Exception('报价失效,请重新获取运单报价');
        } else {
            $selectData = $cacheData[$params['delivery_index']];
            if ($selectData['showPrice'] != $params['showPrice']) {
                throw new Exception('非法的价格');
            } else {
                Cache::delete($params['key']);
            }
        }
        Db::startTrans();
        try {

            $orderData = [
                "site_id" => $this->site_id,
                "member_id" => $this->member_id,
                'ip' => request()->ip() ?? '',
                "order_from" => $this->channel,
                "order_id" => $this->create_no(),
                "order_money" => $params['showPrice'],
                "remark" => $params['remark']
            ];
            $deliveryData = [
                "start_address" => $params['startAddress'],
                "end_address" => $params['endAddress'],
                "member_id" => $this->member_id,
                "weight" => $params['weight'],
                "long" => $params['vloumLong'],
                "width" => $params['vloumWidth'],
                "height" => $params['vloumHeight'],
                "goods" => $params['goods'],
                "package_count" => $params['packageCount'],
                "bj_price" => $params['guaranteeValueAmount'],
                "order_id" => $orderData['order_id'],
                "delivery_status" => 1,
                "delivery_type" => $params['delivery_info']['deliveryType'],
                "delivery_business" => $params['delivery_info']['deliveryBusiness'],
                "online_pay" => $params['delivery_info']['onlinePay'],
                "customer_type" => $params['customerType'],
                "pay_method" => $params['pay_method'],
                "remark" => $params['remark'],
                "channel_id" => $params['delivery_info']['channelId']
            ];
            (new OrderDelivery())->create($deliveryData);
            $info = $this->model->create($orderData);
            //添加订单支付表
            (new CorePayService())->create($orderData['site_id'], PayDict::MEMBER, $orderData['member_id'], $orderData['order_money'], JhkdOrderDict::getOrderType()['type'], $info['id'], "快递下单付款");
            (new OrderDeliveryReal())->create(['order_id' => $info['order_id']]);
            (new OrderLogService())->writeOrderLog(
                $orderData['site_id'],
                $orderData['order_id'],
                JhkdOrderDict::WAIT_PAY,
                '订单创建',
                PayDict::MEMBER,
                $this->member_id
            );
            Db::commit();
            return [
                'trade_type' => 'jhkdOrderPay',//type
                'trade_id' => $info['id']//id
            ];
        } catch (Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 订单支付
     * @param array $pay_info
     * @return true
     */
    public function pay(array $pay_info)
    {
        try {
            Db::startTrans();
            $trade_id = $pay_info['trade_id'] ?? 0;
            $order_model = $this->model;
            $order_info = $order_model->where([['site_id', '=', $pay_info['site_id']], ['id', '=', $trade_id]])->findOrEmpty();
            if (empty($order_info))
                throw new CommonException('ORDER_NOT_EXIST');
            $order_data = [
                'pay_time' => time(),
                'order_status' => JhkdOrderDict::FINISH_PAY,
                'is_enable_refund' => 1, // 是否允许退款
                'out_trade_no' => $pay_info['out_trade_no']//支付后的交易流水号
            ];
            $order_info->save($order_data);

            (new OrderLogService())->writeOrderLog(
                $order_info['site_id'],
                $order_info['order_id'],
                JhkdOrderDict::FINISH_PAY,
                '订单支付成功',
                PayDict::MEMBER,
                $this->member_id
            );
            Db::commit();
            (new NoticeService())->send($order_info['site_id'], 'tk_jhkd_order_pay', ['order_id' => $order_info['order_id']]);
            //自动发单方式话，直接发单方式/队列发单方式
            $sendauto = $this->getConfig()['autosend'];
            if ($sendauto == 1) {
                (new OrderService())->sendOrder($order_info['order_id']);
//                $is_pushed= SendOrder::dispatch(['order_id'=>$order_info['order_id']]);
//                if ($is_pushed == false) {
//                    Log::write('发单队列加入失败'.date('Y-m-d H:i:s'));
//                }
            }
            $config=(new CommonService())->getConfig($order_info['site_id']);
            $text = '订单号：'. $order_info['order_id'].',已经支付成功，订单金额：'. $order_info['order_money'].'元，请及时关注是否存在超重补差价';
            Webhook::dispatch(['config' => $config, 'text' => $text]);
            return true;
        } catch (Exception $e) {
            Db::rollback();
            Log::write('支付回调失败'.date('Y-m-d H:i:s'));
            Log::write($e->getMessage());
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 获取配置信息
     * @param $site_id
     * @param string $config_key
     */
    public function getConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, 'tk_jhkd_config');
        if (empty($info)) {
            $info['value'] = ['autosend' => 0];
        }
        return $info['value'];
    }

    /**
     * 补单订单支付
     * @param array $pay_info
     * @return true
     */
    public
    function payAdd(array $pay_info)
    {
        Db::startTrans();
        try {
            $trade_id = $pay_info['trade_id'] ?? 0;
            $order_model = new OrderAdd();
            $order_info = $order_model->where([['site_id', '=', $pay_info['site_id']], ['id', '=', $trade_id]])->findOrEmpty();
            if (empty($order_info))
                throw new CommonException('ORDERADD_NOT_EXIST');
            $order_data = [
                'pay_time' => time(),
                'order_status' => JhkdOrderAddDict::FINISH_PAY,
                'out_trade_no' => $pay_info['out_trade_no']//支付后的交易流水号
            ];
            $order_info->save($order_data);
            (new OrderLogService())->writeOrderLog(
                $order_info['site_id'],
                $order_info['order_id'],
                JhkdOrderDict::FINISH_PAY,
                '补差价支付成功',
                PayDict::MEMBER,
                $this->member_id
            );
            Db::commit();
            return true;
        } catch (Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    public
    function refund($data)
    {
        Db::startTrans();
        try {
            $this->model = new Refund();
            $this->OrderModel = new Tkjhkdorder();
            $this->PayModel = new Pay();
            $refund_no = $data['refund_no'];
            $trade_type = $data['trade_type'];
            $trade_id = $data['trade_id'];
            $site_id = $data['site_id'];
            $payInfo = $this->PayModel->where(['site_id' => $site_id, 'trade_id' => $trade_id,'trade_type'=>JhkdOrderDict::getOrderType()['type']])->where('status', '<>', -1)->findOrEmpty();
            if ($payInfo->isEmpty()) throw new CommonException('select pay is empty');
            $payInfo->save([
                'status' => -1,
                'type' => '',
                'pay_time' => ''
            ]);
            $refundInfo = $this->model->where(['site_id' => $site_id, 'refund_no' => $refund_no, 'trade_id' => $trade_id])->findOrEmpty();
            if ($refundInfo->isEmpty()) throw new CommonException('select refund is empty');
            $refundInfo->save(['trade_type' => $trade_type]);
            $orderInfo = $this->OrderModel->where(['site_id' => $site_id, 'id' => $trade_id])->findOrEmpty();
            if ($orderInfo->isEmpty()) throw new CommonException('select order is empty');
            $orderInfo->save([
                'refund_status' => JhkdOrderDict::REFUND_COMPLETED,
                'is_enable_refund' => 0,
                'close_time' => time(),
                'pay_time' => '',
                'order_status' => JhkdOrderDict::CLOSE,
                'is_send' => 0,
            ]);
            $deliveryInfo = $this->deliveryModel->where(['order_id' => $orderInfo['order_id']])->findOrEmpty();
            if ($deliveryInfo->isEmpty()) {
                Db::rollback();
            } else {
                $order_no = $deliveryInfo['order_no'];
                (new OrderLogService())->writeOrderLog(
                    $orderInfo['site_id'],
                    $orderInfo['order_id'],
                    $orderInfo['order_status'],
                    '订单退款成功',
                    'member'
                );
                event('DeliveryCancelOrder', ['site_id' => $this->site_id, 'data' => [
                    'order_no' => $order_no,
                    'task_id' => $deliveryInfo['task_id']
                ]]);
                Db::commit();
            }

        } catch (Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * @param $price
     */
    public
    function showPrice($data)
    {
        $price = $data['preOrderFee'];
        if ($this->config['floatWay'] == 'floatWayFixed') {
            $price = $price + $this->config['floatAmount'];
        }
        if ($this->config['floatWay'] == 'floatWayRate') {
            $price = $price * (1 + $this->config['floatRate'] / 100);
        }
        if ($this->config['floatWay'] == 'floatWayBetwn') {
            $weight = $data['calcFeeWeight'];
            $rules = json_decode($data['originalPrice'], true)[0];
            if ($weight <= $rules['start']) {
                $price = $rules['first'] - $this->config['firstAmount'] + $data['preBjFee'];
            } else {
                $firstPrice = $rules['first'] - $this->config['firstAmount'];
                $secondPrice = ($rules['add'] - $this->config['secondAmount']) * ($weight - 1);
                $price = $firstPrice + $secondPrice + $data['preBjFee'];
            }

        }
//        if ($price >= ($data['originalFee'] + $data['preBjFee'])) {
//            $price = $data['originalFee'] - 0.02;
//        }
        if ($price < $data['preOrderFee']) {
            $price = $data['preOrderFee'] + 3;
        }
        return round($price, 2);
    }
}