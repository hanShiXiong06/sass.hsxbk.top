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

namespace addon\phone_shop_price\app\dict;

use app\dict\pay\PayDict;

/**
 *充值订单相关枚举类
 * Class RecycleOrderDict
 * @package app\dict\order
 */
class RecycleOrderDict
{
    // 订单状态
    // 已下单
    const START_ORDER = 1;
    // 质检中
    
    // 质检完成
    // 订单完成
    // 有退货
    // 订单关闭
    const CHECHING = 2;
    // 质检完成
    const CHECHED = 3;
    // 订单完成
    const FINSH = 4;
    // 有退货
    
    //已关闭
    const CLOSE = -1;

    // 退款相关状态
    // 未申请
    const NOT_APPLAY = 0;
    // 退款中
    const REFUNDING = 1;
    // 退款完成
    const REFUND_COMPLETED = 2;
    // 退款失败
    const REFUND_FAIL = -1;

    /**
     * 当前订单支持的支付方式
     */
    const ALLOW_PAY = [
        PayDict::WECHATPAY,
        PayDict::ALIPAY,
        PayDict::OFFLINEPAY,
    ];

    const TYPE = 'recharge';
    /**
     * 订单类型以及名称
     * @return array
     */
    public static function getOrderType()
    {
        return [
            'type' => self::TYPE,
            'name' => get_lang('dict_order.order_type_recharge')
        ];
    }

    public static function getStatus($status = '')
    {
        $data = [

            self::START_ORDER => [
                'name' => '待质检',
                'status' => self::START_ORDER,
                'is_refund' => 0,
                'action' => [],
                
            ],
            self::CHECHING => [
                'name' => '质检中',
                'status' => self::CHECHING,
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::CHECHED => [
                'name' => '质检完成',
                'status' => self::CHECHED,
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::FINSH => [
                'name' => '订单完成',
                'status' => self::FINSH,
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::CLOSE => [
                'name' => '已关闭',
                'status' => self::CLOSE,
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ]


        ];
        if ($status == '') {
            return $data;
        }
        return $data[$status] ?? '';
    }

    /**
     * 获取退款状态
     * @param string $status
     * @return array|array[]|string
     */
    public static function getRefundStatus(string $status = '')
    {
        $data = [
            self::REFUNDING => [
                'name' => get_lang('dict_order_refund.refunding'),
                'status' => self::REFUNDING
            ],
            self::REFUND_COMPLETED => [
                'name' => get_lang('dict_order_refund.refund_complete'),
                'status' => self::REFUND_COMPLETED
            ],
            self::REFUND_FAIL => [
                'name' => get_lang('dict_order_refund.refund_fail'),
                'status' => self::REFUND_FAIL
            ]
        ];

        if ($status == '') {
            return $data;
        }
        return $data[$status] ?? '';
    }

}
