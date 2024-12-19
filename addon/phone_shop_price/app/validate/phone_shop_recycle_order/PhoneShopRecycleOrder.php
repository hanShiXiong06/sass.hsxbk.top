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

namespace addon\phone_shop_price\app\validate\phone_shop_recycle_order;
use core\base\BaseValidate;
/**
 * 回收订单主验证器
 * Class PhoneShopRecycleOrder
 * @package addon\phone_shop_price\app\validate\phone_shop_recycle_order
 */
class PhoneShopRecycleOrder extends BaseValidate
{

       protected $rule = [
            'order_no' => 'require',
            'member_id' => 'require',
            'count' => 'require',
            'express_id' => 'require',
            'send_username' => 'require',
            'telphone' => 'require',
            'account' => 'require',
            'delivery_type' => 'require',
            'return_type' => 'require',
            'close_express_id' => 'require'
        ];

       protected $message = [
            'order_no.require' => ['common_validate.require', ['order_no']],
            'member_id.require' => ['common_validate.require', ['member_id']],
            'count.require' => ['common_validate.require', ['count']],
            'express_id.require' => ['common_validate.require', ['express_id']],
            'send_username.require' => ['common_validate.require', ['send_username']],
            'telphone.require' => ['common_validate.require', ['telphone']],
            'account.require' => ['common_validate.require', ['account']],
            'delivery_type.require' => ['common_validate.require', ['delivery_type']],
            'return_type.require' => ['common_validate.require', ['return_type']],
            'close_express_id.require' => ['common_validate.require', ['close_express_id']]
        ];

       protected $scene = [
            "add" => ['order_no', 'member_id', 'count', 'express_id', 'send_username', 'telphone', 'pay_type', 'account', 'delivery_type', 'return_type', 'qrcode_image', 'return_address', 'status', 'create_at', 'update_at', 'over_at', 'comment', 'close_express_id'],
            "edit" => ['order_no', 'member_id', 'count', 'express_id', 'send_username', 'telphone', 'pay_type', 'account', 'delivery_type', 'return_type', 'qrcode_image', 'return_address', 'status', 'create_at', 'update_at', 'over_at', 'comment', 'close_express_id']
        ];

}
