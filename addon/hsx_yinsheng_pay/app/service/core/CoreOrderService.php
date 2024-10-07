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

namespace addon\hsx_yinsheng_pay\app\service\core;

use addon\hsx_yinsheng_pay\app\model\YinshengOrder;
use addon\hsx_yinsheng_pay\app\dict\maidan\MaidanOrderDict;
use app\dict\pay\PayDict;
use app\service\core\pay\CorePayService;
use core\base\BaseCoreService;
use core\exception\CommonException;
use Exception;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;

/**
 * 订单流程
 * Class CoreOrderService
 * @package app\service\core\order
 */
class CoreOrderService extends BaseCoreService
{
    /**
     * 订单创建
     * @param array $data //[‘member_id’ => 1， 'order_from' => 'h5', 'member_message' => '','seafox_pay_money' => 12.00]
     * @return array
     */
    public function create(array $data)
    {
        $order_data = [
            'order_from' => $data[ 'order_from' ] ?? 'h5',
            'order_type' => 'yinshengpay',
            'order_status' => MaidanOrderDict::WAIT_PAY,
            'member_id' => $data[ 'member_id' ],
            'ip' => $data[ 'ip' ] ?? '',
            'merchant_id' => $data[ 'merchant_id' ] ?? '',
            'order_item_money' => $data[ 'goods_money' ],
            'order_discount_money' => 0,
            'order_money' => $data[ 'goods_money' ],
            'site_id' => $data['site_id']
        ];

        Db::startTrans();
        try {
            //添加订单表
            $order_data[ 'order_no' ] = create_no();
           //var_dump($order_data);
            $create_order = ( new YinshengOrder() )->create($order_data);
            $order_id = $create_order->order_id;
            //添加订单支付表
            // ( new CorePayService() )->create($data['site_id'], PayDict::MEMBER, $order_data[ 'member_id' ], $order_data[ 'order_money' ], $order_data[ 'order_type' ], $order_id, get_lang("dict_order.trade_type_maidan"));

            Db::commit();
            //返回订单信息
            return [
                'trade_type' => $order_data[ 'order_type' ],
                'trade_id' => $order_id
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
            $trade_id = $pay_info[ 'trade_id' ] ?? 0;
            $order_model = new YinshengOrder();
            $order_info = $order_model->where([ [ 'order_id', '=', $trade_id ] ])->findOrEmpty()->toArray();
            if (empty($order_info))
                throw new CommonException('ORDER_NOT_EXIST');
            $order_data = [
                'pay_time' => time(),
                'order_status' => MaidanOrderDict::FINISH,
                'is_enable_refund' => 0, // 是否允许退款
                'out_trade_no' => $pay_info[ 'out_trade_no' ]//支付后的交易流水号
            ];
            $order_model->where([ [ 'order_id', '=', $trade_id ] ])->update($order_data);
            return true;
        } catch (Exception $e) {
            throw new CommonException($e->getMessage());
        }
    }

 
    /**
     * 关闭订单
     * @param int $order_id
     * @return true
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function close(int $order_id)
    {
        $order = ( new YinshengOrder() )->where([ [ 'order_id', '=', $order_id ], ])->find();
        if ($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');
        //如果是支付中的话
        //if ($order->order_status == MaidanOrderDict::CLOSE) throw new CommonException('ORDER_CLOSED');
        //关闭支付单据
        if ($order->order_status == MaidanOrderDict::WAIT_PAY)
            ( new CorePayService() )->closeByTrade($order['site_id'], 'seafox_pay_maidan', $order_id);
        $order->save([ 'order_status' => MaidanOrderDict::CLOSE ]);

        return true;
    }

    /**
     * 获取订单信息
     * @param int $order_id
     * @return array
     */
    public function orderInfo(int $order_id)
    {
        return ( new YinshengOrder() )->where([
            [ 'order_id', '=', $order_id ]
        ])->field('*')->findOrEmpty()->toArray();
    }

    public function refund_ok(int $order_id)
    {
        $order = ( new YinshengOrder() )->where([ [ 'order_id', '=', $order_id ], ])->find();
        $order->save([ 'order_status' => -1 ]);
        return true;
    }


}

