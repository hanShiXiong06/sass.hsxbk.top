<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\phone_shop\app\service\core\order;

use addon\phone_shop\app\job\order_event\OrderCloseAfter;
use addon\phone_shop\app\job\order_event\OrderCreateAfter;
use addon\phone_shop\app\job\order_event\OrderDeliveryAfter;
use addon\phone_shop\app\job\order_event\OrderEditPriceAfter;
use addon\phone_shop\app\job\order_event\OrderFinishAfter;
use addon\phone_shop\app\job\order_event\OrderPayAfter;
use addon\phone_shop\app\model\order\Order;
use core\base\BaseCoreService;

/**
 * 订单关闭服务层
 */
class CoreOrderEventService extends BaseCoreService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new Order();
    }

    /**
     * 订单创建事件
     * @param $data
     * @return true
     */
    public static function orderCreate($data){
        event('PhoneShopOrderCreate', $data);
        return true;
    }

    /**
     * 订单创建后事件
     * @param $data
     * @return true
     */
    public static function orderCreateAfter($data){
        OrderCreateAfter::dispatch(['data' => $data]);
        return true;
    }

    /**
     * 订单支付
     * @param $data
     * @return true
     */
    public static function orderPay($data){
        event('PhoneShopOrderPay', $data);
        return true;
    }

    /**
     * 订单支付后事件
     * @param $data
     * @return true
     */
    public static function orderPayAfter($data){
        OrderPayAfter::dispatch(['data' => $data]);
        return true;
    }

    /**
     * 订单关闭
     * @param $data
     * @return true
     */
    public static function orderClose($data){
        event('PhoneShopOrderClose', $data);
        return true;
    }

    /**
     * 订单关闭后事件
     * @param $data
     * @return true
     */
    public static function orderCloseAfter($data){
        OrderCloseAfter::dispatch(['data' => $data]);
        return true;
    }


    /**
     * 订单发货
     * @param $data
     * @return true
     */
    public static function orderDelivery($data){
        event('PhoneShopOrderDelivery', $data);
        return true;
    }

    /**
     * 订单发货后事件
     * @param $data
     * @return true
     */
    public static function orderDeliveryAfter($data){
        OrderDeliveryAfter::dispatch(['data' => $data]);
        return true;
    }

    /**
     * 订单完成
     * @param $data
     * @return true
     */
    public static function orderFinish($data){
        event('PhoneShopOrderFinish', $data);
        return true;
    }

    /**
     * 订单完成后事件
     * @param $data
     * @return true
     */
    public static function orderFinishAfter($data){
        OrderFinishAfter::dispatch(['data' => $data]);
        return true;
    }

    /**
     * 订单改价
     * @param $data
     * @return true
     */
    public static function orderEditPrice($data){
        event('PhoneShopOrderEditPrice', $data);
        return true;
    }

    /**
     * 订单改价后事件
     * @param $data
     * @return true
     */
    public static function orderEditPriceAfter($data){
        OrderEditPriceAfter::dispatch(['data' => $data]);
        return true;
    }
}
