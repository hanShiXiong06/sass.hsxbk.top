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
    const ORDER_STATUS = [
        'PENDING_RECEIVE' => 1,    // 待收货
        'PENDING_CHECK' => 2,      // 待质检
        'CHECKING' => 3,           // 质检中
        'PENDING_CONFIRM' => 4,    // 待确认
        'PENDING_PAYMENT' => 5,    // 待打款
        'COMPLETED' => 6,          // 已完成
        'PENDING_RETURN' => 7,     // 待退货
        'RETURNED' => 8,           // 已寄出
        'CLOSED' => 9,             // 已关闭
    ];

    // 订单状态文本
    const ORDER_STATUS_TEXT = [
        1 => '待收货',
        2 => '待质检',
        3 => '质检中',
        4 => '待确认',
        5 => '待打款',
        6 => '已完成',
        7 => '待退货',
        8 => '已寄出',
        9 => '已关闭',
    ];

    // 设备状态
    const DEVICE_STATUS = [
        'PENDING_CHECK' => 1,      // 待质检
        'CHECKING' => 2,           // 质检中
        'CHECKED' => 3,            // 质检完成
        'PENDING_CONFIRM' => 4,    // 待确认
        'COMPLETED' => 5,          // 已完成
        'RETURNED' => 6,           // 退回
    ];

    // 设备状态文本
    const DEVICE_STATUS_TEXT = [
        1 => '待质检',
        2 => '质检中',
        3 => '质检完成',
        4 => '待确认',
        5 => '已完成',
        6 => '退回',
    ];

    // 支付方式
    const PAY_TYPE = [
        'ALIPAY' => 1,    // 支付宝
        'WECHAT' => 2,    // 微信
        'BANK' => 3,      // 银行卡
    ];

    // 支付方式文本
    const PAY_TYPE_TEXT = [
        1 => '支付宝',
        2 => '微信',
        3 => '银行卡',
    ];

    // 配送方式
    const DELIVERY_TYPE = [
        'MAIL' => 'mail',          // 邮寄
        'SELF' => 'self',          // 自送
    ];

    // 配送方式文本
    const DELIVERY_TYPE_TEXT = [
        'mail' => '邮寄',
        'self' => '自送',
    ];

    // 退回方式
    const RETURN_TYPE = [
        'MAIL' => 'mail',          // 邮寄
        'SELF' => 'self',          // 自取
    ];

    // 退回方式文本
    const RETURN_TYPE_TEXT = [
        'mail' => '邮寄',
        'self' => '自取',
    ];

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

            self::ORDER_STATUS['PENDING_RECEIVE'] => [
                'name' => '待提交',
                'status' => self::ORDER_STATUS['PENDING_RECEIVE'],
                'is_refund' => 0,
                'action' => [],
                
            ],
            self::ORDER_STATUS['PENDING_CHECK'] => [
                'name' => '待质检',
                'status' => self::ORDER_STATUS['PENDING_CHECK'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['CHECKING'] => [
                'name' => '质检中',
                'status' => self::ORDER_STATUS['CHECKING'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['PENDING_CONFIRM'] => [
                'name' => '待确认',
                'status' => self::ORDER_STATUS['PENDING_CONFIRM'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['PENDING_PAYMENT'] => [
                'name' => '待打款',
                'status' => self::ORDER_STATUS['PENDING_PAYMENT'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['COMPLETED'] => [
                'name' => '已完成',
                'status' => self::ORDER_STATUS['COMPLETED'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['PENDING_RETURN'] => [
                'name' => '待退货',
                'status' => self::ORDER_STATUS['PENDING_RETURN'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['RETURNED'] => [
                'name' => '已寄出',
                'status' => self::ORDER_STATUS['RETURNED'],
                'is_refund' => 0,
                'action' => [],
                'member_action' => [
                ],
            ],
            self::ORDER_STATUS['CLOSED'] => [
                'name' => '已关闭',
                'status' => self::ORDER_STATUS['CLOSED'],
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
