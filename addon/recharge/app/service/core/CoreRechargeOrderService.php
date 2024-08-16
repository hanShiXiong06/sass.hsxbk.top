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

namespace addon\recharge\app\service\core;

use addon\recharge\app\dict\RechargeOrderDict;
use addon\recharge\app\model\RechargeOrder;
use addon\recharge\app\model\RechargeOrderItem;
use app\dict\member\MemberAccountTypeDict;
use app\dict\pay\PayDict;
use app\model\pay\Pay;
use app\service\core\member\CoreMemberAccountService;
use app\service\core\pay\CorePayService;
use app\service\core\weapp\CoreWeappDeliveryService;
use core\base\BaseCoreService;
use core\exception\CommonException;
use Exception;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;

/**
 * 充值订单流程
 * Class CoreRechargeOrderService
 * @package app\service\core\order
 */
class CoreRechargeOrderService extends BaseCoreService
{
    /**
     * 充值订单创建
     * @param array $data //[‘member_id’ => 1， 'order_from' => 'h5', 'member_message' => '','recharge_money' => 12.00]
     * @return array
     */
    public function create(array $data)
    {
        $order_data = [
            'order_from' => $data[ 'order_from' ] ?? 'h5',
            'order_type' => 'recharge',
            'order_status' => RechargeOrderDict::WAIT_PAY,
            'member_id' => $data[ 'member_id' ],
            'ip' => request()->ip() ?? '',
            'member_message' => $data[ 'member_message' ] ?? '',
            'order_item_money' => $data[ 'recharge_money' ],
            'order_discount_money' => 0,
            'order_money' => $data[ 'recharge_money' ],
            'site_id' => $data[ 'site_id' ]
        ];
        $order_items = [
            [
                'member_id' => $data[ 'member_id' ],
                'item_id' => 0,
                'item_type' => 'recharge', //项目类型 recharge, goods
                'item_name' => '会员充值',
                'item_image' => '/static/image/icon.png',
                'price' => $data[ 'recharge_money' ],
                'num' => 1,
                'item_money' => $data[ 'recharge_money' ],
                'is_refund' => 0,
                'site_id' => $data[ 'site_id' ]
            ]
        ];
        Db::startTrans();
        try {
            //添加订单表
            $order_data[ 'order_no' ] = create_no();
            $create_order = ( new RechargeOrder() )->create($order_data);
            $order_id = $create_order->order_id;
            //添加订单支付表
            ( new CorePayService() )->create($data[ 'site_id' ], PayDict::MEMBER, $order_data[ 'member_id' ], $order_data[ 'order_money' ], $order_data[ 'order_type' ], $order_id, get_lang("dict_order.trade_type_recharge"));
            //添加订单项目表
            $order_item_model = new RechargeOrderItem();
            foreach ($order_items as $k => $order_item) {
                $order_item[ 'order_id' ] = $order_id;
                $order_item_model->create($order_item);
            }
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
            $order_model = new RechargeOrder();
            $order_info = $order_model->where([ [ 'order_id', '=', $trade_id ] ])->findOrEmpty()->toArray();
            if (empty($order_info))
                throw new CommonException('ORDER_NOT_EXIST');
            $order_data = [
                'pay_time' => time(),
                'order_status' => RechargeOrderDict::FINISH,
                'is_enable_refund' => 1, // 是否允许退款
                'out_trade_no' => $pay_info[ 'out_trade_no' ]//支付后的交易流水号
            ];
            $order_model->where([ [ 'order_id', '=', $trade_id ] ])->update($order_data);
            //会员余额

            // 微信小程序 发货信息录入接口
            $this->orderShippingUploadShippingInfo($trade_id);

            ( new CoreMemberAccountService() )->addLog($order_info[ 'site_id' ], $order_info[ 'member_id' ], MemberAccountTypeDict::BALANCE, $order_info[ 'order_item_money' ], 'recharge', '会员充值', $order_info[ 'order_id' ]);
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
        $order = ( new RechargeOrder() )->where([ [ 'order_id', '=', $order_id ], ])->find();
        if ($order->isEmpty()) throw new CommonException('ORDER_NOT_EXIST');
        //如果是支付中的话
        //if ($order->order_status == RechargeOrderDict::CLOSE) throw new CommonException('ORDER_CLOSED');
        //关闭支付单据
        if ($order->order_status == RechargeOrderDict::WAIT_PAY)
            ( new CorePayService() )->closeByTrade($order[ 'site_id' ], 'recharge', $order_id);
        $order->save([ 'order_status' => RechargeOrderDict::CLOSE ]);

        return true;
    }

    /**
     * 获取订单信息
     * @param int $order_id
     * @return array
     */
    public function orderInfo(int $order_id)
    {
        return ( new RechargeOrder() )->where([
            [ 'order_id', '=', $order_id ]
        ])->field('*')->findOrEmpty()->toArray();
    }

    /**
     * 微信小程序 发货信息录入接口
     * @param $order_id
     * @return string
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     */
    public function orderShippingUploadShippingInfo($order_id)
    {
        $field = 'order_id, order_no, out_trade_no, member_id';

        $info = ( new RechargeOrder() )->where([
            [ 'order_id', '=', $order_id ],
            [ 'order_type', '=', 'recharge' ],
            [ 'order_status', '=', RechargeOrderDict::FINISH ]
        ])->field($field)->with([ 'item' => function($query) {
            $query->field('order_item_id, order_id, member_id, item_id, item_type, item_name, price, num, item_money');
        }, 'member' => function($query) {
            $query->field('member_id, weapp_openid');
        } ])->findOrEmpty()->toArray();

        // 订单不存在
        if (empty($info)) {
            return '';
        }

        $pay_model = new Pay();
        $where = array(
            [ 'out_trade_no', '=', $info[ 'out_trade_no' ] ]
        );
        $pay_info = $pay_model->where($where)->field('id,type')->findOrEmpty()->toArray();

        if (empty($pay_info)) {
            return '';
        }

        // 订单未使用微信支付，无须处理
        if ($pay_info[ 'type' ] != PayDict::WECHATPAY) {
            return '订单未使用微信支付';
        }

        $weapp_delivery_service = new CoreWeappDeliveryService();

        // 检测微信小程序是否已开通发货信息管理服务
        $is_trade_managed = $weapp_delivery_service->isTradeManaged($info[ 'site_id' ]);

        if (empty($is_trade_managed[ 'is_trade_managed' ])) {
            return '发货信息录入接口，报错：' . $is_trade_managed[ "errmsg" ];
        }

        // 设置消息跳转路径设置接口
        $result_jump_path = $weapp_delivery_service->setMsgJumpPath($info[ 'site_id' ], 'recharge_order');
        if ($result_jump_path[ 'errcode' ] != 0) {
            return '设置消息跳转路径设置接口，报错：' . $result_jump_path[ "errmsg" ];
        }

        $shipping_list = [];
        $first_shipping_info = [];

        $delivery_mode = 1; // 发货模式，发货模式枚举值：1、UNIFIED_DELIVERY（统一发货）2、SPLIT_DELIVERY（分拆发货） 示例值: UNIFIED_DELIVERY

        foreach ($info[ 'item' ] as $k => $v) {

            $item = [
                'tracking_no' => '', // 物流单号，物流快递发货时必填，示例值: 323244567777 字符字节限制: [1, 128]
                'express_company' => '', // 物流公司编码，快递公司ID，参见「查询物流公司编码列表」，物流快递发货时必填， 示例值: DHL 字符字节限制: [1, 128]
                'item_desc' => '会员充值*' . $v[ 'num' ], // 商品信息，例如：微信红包抱枕*1个，限120个字以内
                'contact' => [
                    'consignor_contact' => '',
                    'receiver_contact' => ''
                ]
            ];

            $shipping_list[] = $item;
            if ($k == 0) {
                $first_shipping_info = $item;
            }
        }

        // 统一发货，只能有一个物流信息，拼装商品信息
        if (count($shipping_list) > 1) {
            foreach ($shipping_list as $k => $v) {
                if ($k > 0) {
                    $first_shipping_info[ 'item_desc' ] .= ',' . $v[ 'item_desc' ];
                }
            }
        }

        $data = [
            'out_trade_no' => $info[ 'out_trade_no' ],
            'logistics_type' => 3, // 物流模式，发货方式枚举值：1、实体物流配送采用快递公司进行实体物流配送形式 2、同城配送 3、虚拟商品，虚拟商品，例如话费充值，点卡等，无实体配送形式 4、用户自提
            'delivery_mode' => $delivery_mode, // 发货模式，发货模式枚举值：1、UNIFIED_DELIVERY（统一发货）2、SPLIT_DELIVERY（分拆发货） 示例值: UNIFIED_DELIVERY
            // 同城配送没有物流信息，只能传一个订单
            'shipping_list' => $delivery_mode == 1 ? [ $first_shipping_info ] : $shipping_list, // 物流信息列表，发货物流单列表，支持统一发货（单个物流单）和分拆发货（多个物流单）两种模式，多重性: [1, 10]
            'weapp_openid' => $info[ 'member' ][ 'weapp_openid' ], // 用户标识，用户在小程序appid下的唯一标识。 下单前需获取到用户的Openid 示例值: oUpF8uMuAJO_M2pxb1Q9zNjWeS6o 字符字节限制: [1, 128]
            'is_all_delivered' => true // 分拆发货模式时必填，用于标识分拆发货模式下是否已全部发货完成，只有全部发货完成的情况下才会向用户推送发货完成通知。示例值: true/false
        ];

        $weapp_delivery_service->uploadShippingInfo($info[ 'site_id' ], $data);
    }

}

