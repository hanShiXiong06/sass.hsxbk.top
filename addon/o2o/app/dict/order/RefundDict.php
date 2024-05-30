<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\o2o\app\dict\order;

/**
 * 旅游订单相关字典类
 * Class HotelOrderDict
 * @package app\dict\order
 */
class RefundDict
{
    // 退款相关状态
    // 待退款
    const WAIT_REFUND = 'wait_refund';
    // 退款中
    const REFUNDING = 'refunding';
    // 退款完成
    const REFUND_COMPLETED = 'refund_completed';
    // 退款失败
    const REFUND_FAIL = 'refund_fail';
    // 拒绝退款申请
    const REFUND_REFUSE = 'refund_refuse';
    const CANCEL = 'cancel';

    /**
     * 获取退款状态
     * @param string $status
     * @return array|array[]
     */
    public static function getRefundStatus(string $status = '')
    {
        $data = [
            self::WAIT_REFUND => [
                'name' => get_lang('dict_o2o_order_refund.wait_refund'),
                'status' => self::WAIT_REFUND
            ],
            self::REFUNDING => [
                'name' => get_lang('dict_o2o_order_refund.refunding'),
                'status' => self::REFUNDING
            ],
            self::REFUND_COMPLETED => [
                'name' => get_lang('dict_o2o_order_refund.refund_completed'),
                'status' => self::REFUND_COMPLETED
            ],
            self::REFUND_REFUSE => [
                'name' => get_lang('dict_o2o_order_refund.refund_refuse'),
                'status' => self::REFUND_REFUSE
            ],
            self::REFUND_FAIL => [
                'name' => get_lang('dict_o2o_order_refund.refund_fail'),
                'status' => self::REFUND_FAIL
            ],
            self::CANCEL => [
                'name' => get_lang('dict_o2o_order_refund.cancel'),
                'status' => self::CANCEL
            ]
        ];

        if ($status == '') {
            return $data;
        }
        return $data[ $status ] ?? [];
    }

    /**
     * 拒绝理由
     * @return array
     */
    public static function getRefundReason()
    {
        return [
            get_lang('dict_o2o_order_refund_reason.delivery_timeout'),//未按约定时间发货
            get_lang('dict_o2o_order_refund_reason.buy_more_or_dislike'),//拍错/多拍/不喜欢
            get_lang('dict_o2o_order_refund_reason.negotiation_completed'),//协商一致退款
            get_lang('dict_o2o_order_refund_reason.other'),//其他
        ];
    }
}
