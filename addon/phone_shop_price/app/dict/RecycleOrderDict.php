<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\dict;

use app\dict\pay\PayDict;

/**
 * 回收订单相关枚举类
 * Class RecycleOrderDict
 * @package app\dict\order
 */
class RecycleOrderDict
{
    // 订单状态
    const ORDER_STATUS = [
        'PENDING_CONFIRM' => 1,    // 待确认（初始状态：客户提交订单）
        'CHECKING' => 2,           // 质检中（商户收到设备，开始质检）
        'CHECKED' => 3,            // 已质检（质检完成，等待客户确认）
        'PAYING' => 4,             // 待打款（客户确认价格，进入打款流程）
        'PAYED' => 5,              // 已打款（打款完成）
        'COMPLETED' => 6,          // 已完成（订单完成）
        'CANCELLED' => 7,          // 已取消（订单取消）
        'RETURNING' => 8,          // 退回中（客户选择退回设备）
        'RETURNED' => 9            // 已退回（退回完成）
    ];

    // 订单状态文本
    const ORDER_STATUS_TEXT = [
        1 => '待签收',
        2 => '质检中',
        3 => '已质检',
        4 => '待打款',
        5 => '已打款',
        6 => '已完成',
        7 => '已取消',
        8 => '退回中',
        9 => '已退回'
    ];
    // // 订单状态 给客户看的
    // const ORDER_STATUS_TEXT_CLIENT = [
    //     1 => '待签收',
    //     2 => '质检中',
    //     3 => '已质检',
    //     4 => '待打款',
    //     5 => '已打款',
    //     6 => '已完成',
    //     7 => '已取消',
    //     8 => '退回中',
    //     9 => '已退回'
    // ];

    // 设备状态
    const DEVICE_STATUS = [
        'PENDING_CHECK' => 1,      // 待质检
        'CHECKING' => 2,           // 质检中
        'CHECKED' => 3,            // 已质检（定价完成）
        'CONFIRMED' => 4,          // 已确认（客户确认价格）
        'COMPLETED' => 5,          // 已完成
        'RETURNED' => 6            // 已退回
    ];

    // 设备状态文本
    const DEVICE_STATUS_TEXT = [
        1 => '待质检',
        2 => '质检中',
        3 => '已质检',
        4 => '已确认',
        5 => '已完成',
        6 => '已退回'
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

    // 订单操作类型
    const ORDER_ACTION = [
        'CANCEL' => 'cancel',              // 取消订单
        'START_CHECK' => 'start_check',    // 开始质检
        'COMPLETE_CHECK' => 'complete_check', // 完成质检
        'CONFIRM' => 'confirm',            // 确认价格
        'PAY' => 'pay',                    // 确认打款
        'COMPLETE' => 'complete',          // 完成订单
        'REJECT' => 'reject',              // 退回设备
        'RETURN_CONFIRM' => 'return_confirm', // 确认退回
        'DELETE' => 'delete'               // 删除订单
    ];

    /**
     * 获取订单状态及其可执行的操作
     * @param string $status
     * @return array
     */
    public static function getStatus($status = '')
    {
        $data = [
            self::ORDER_STATUS['PENDING_CONFIRM'] => [
                'name' => '待确认',
                'status' => self::ORDER_STATUS['PENDING_CONFIRM'],
                'actions' => [
                    self::ORDER_ACTION['CANCEL'] => [
                        'name' => '取消订单',
                        'next_status' => self::ORDER_STATUS['CANCELLED']
                    ],
                    self::ORDER_ACTION['START_CHECK'] => [
                        'name' => '开始质检',
                        'next_status' => self::ORDER_STATUS['CHECKING']
                    ]
                ]
            ],
            self::ORDER_STATUS['CHECKING'] => [
                'name' => '质检中',
                'status' => self::ORDER_STATUS['CHECKING'],
                'actions' => [
                    self::ORDER_ACTION['COMPLETE_CHECK'] => [
                        'name' => '完成质检',
                        'next_status' => self::ORDER_STATUS['CHECKED']
                    ]
                ]
            ],
            self::ORDER_STATUS['CHECKED'] => [
                'name' => '已质检',
                'status' => self::ORDER_STATUS['CHECKED'],
                'actions' => [
                    self::ORDER_ACTION['CONFIRM'] => [
                        'name' => '确认价格',
                        'next_status' => self::ORDER_STATUS['PAYING']
                    ],
                    self::ORDER_ACTION['REJECT'] => [
                        'name' => '退回设备',
                        'next_status' => self::ORDER_STATUS['RETURNING']
                    ]
                ]
            ],
            self::ORDER_STATUS['PAYING'] => [
                'name' => '待打款',
                'status' => self::ORDER_STATUS['PAYING'],
                'actions' => [
                    self::ORDER_ACTION['PAY'] => [
                        'name' => '确认打款',
                        'next_status' => self::ORDER_STATUS['PAYED']
                    ]
                ]
            ],
            self::ORDER_STATUS['PAYED'] => [
                'name' => '已打款',
                'status' => self::ORDER_STATUS['PAYED'],
                'actions' => [
                    self::ORDER_ACTION['COMPLETE'] => [
                        'name' => '完成订单',
                        'next_status' => self::ORDER_STATUS['COMPLETED']
                    ]
                ]
            ],
            self::ORDER_STATUS['COMPLETED'] => [
                'name' => '已完成',
                'status' => self::ORDER_STATUS['COMPLETED'],
                'actions' => []
            ],
            self::ORDER_STATUS['CANCELLED'] => [
                'name' => '已取消',
                'status' => self::ORDER_STATUS['CANCELLED'],
                'actions' => [
                    self::ORDER_ACTION['DELETE'] => [
                        'name' => '删除订单',
                        'next_status' => self::ORDER_STATUS['CANCELLED']
                    ]
                ]
            ],
            self::ORDER_STATUS['RETURNING'] => [
                'name' => '退回中',
                'status' => self::ORDER_STATUS['RETURNING'],
                'actions' => [
                    self::ORDER_ACTION['RETURN_CONFIRM'] => [
                        'name' => '确认退回',
                        'next_status' => self::ORDER_STATUS['RETURNED']
                    ]
                ]
            ],
            self::ORDER_STATUS['RETURNED'] => [
                'name' => '已退回',
                'status' => self::ORDER_STATUS['RETURNED'],
                'actions' => []
            ]
        ];

        if ($status === '') {
            return $data;
        }
        return $data[$status] ?? '';
    }

    /**
     * 获取设备状态及其可执行的操作
     * @param string $status
     * @return array
     */
    public static function getDeviceStatus($status = '')
    {
        $data = [
            self::DEVICE_STATUS['PENDING_CHECK'] => [
                'name' => '待质检',
                'status' => self::DEVICE_STATUS['PENDING_CHECK'],
                'actions' => [
                    'start_check' => [
                        'name' => '开始质检',
                        'next_status' => self::DEVICE_STATUS['CHECKING']
                    ]
                ]
            ],
            self::DEVICE_STATUS['CHECKING'] => [
                'name' => '质检中',
                'status' => self::DEVICE_STATUS['CHECKING'],
                'actions' => [
                    'complete_check' => [
                        'name' => '完成质检',
                        'next_status' => self::DEVICE_STATUS['CHECKED']
                    ]
                ]
            ],
            self::DEVICE_STATUS['CHECKED'] => [
                'name' => '已质检',
                'status' => self::DEVICE_STATUS['CHECKED'],
                'actions' => [
                    'confirm' => [
                        'name' => '确认价格',
                        'next_status' => self::DEVICE_STATUS['CONFIRMED']
                    ],
                    'return' => [
                        'name' => '退回设备',
                        'next_status' => self::DEVICE_STATUS['RETURNED']
                    ]
                ]
            ],
            self::DEVICE_STATUS['CONFIRMED'] => [
                'name' => '已确认',
                'status' => self::DEVICE_STATUS['CONFIRMED'],
                'actions' => [
                    'complete' => [
                        'name' => '完成',
                        'next_status' => self::DEVICE_STATUS['COMPLETED']
                    ]
                ]
            ],
            self::DEVICE_STATUS['COMPLETED'] => [
                'name' => '已完成',
                'status' => self::DEVICE_STATUS['COMPLETED'],
                'actions' => []
            ],
            self::DEVICE_STATUS['RETURNED'] => [
                'name' => '已退回',
                'status' => self::DEVICE_STATUS['RETURNED'],
                'actions' => []
            ]
        ];

        if ($status === '') {
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
