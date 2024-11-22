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
 * 回收订单验证器
 * Class PhoneShopRecycleOrder
 * @package addon\phone_shop_price\app\validate\phone_shop_recycle_order
 */
class PhoneShopRecycleOrder extends BaseValidate
{

       protected $rule = [
            'id' => 'number',
            'count' => 'require|number',
            'telphone' => 'require|mobile',
            'pay_type' => 'require',
            'account' => 'require'
        ];

       protected $message = [
            'id.number' => ['common_validate.number', ['id']],
            'count.require' => ['common_validate.require', ['count']],
            'count.number' => ['common_validate.number', ['count']],
            'telphone.require' => ['common_validate.require', ['telphone']],
            'telphone.mobile' => ['common_validate.mobile', ['telphone']],
            'pay_type.require' => ['common_validate.require', ['pay_type']],
            'account.require' => ['common_validate.require', ['account']]
        ];

       protected $scene = [
            "add" => ['count', 'express_id', 'send_username', 'telphone', 'pay_type', 'account', 'status', 'close_express_id'],
            "edit" => ['count', 'express_id', 'send_username', 'telphone', 'pay_type', 'account', 'status', 'close_express_id']
        ];

}
