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

namespace addon\phone_shop_price\app\validate\recycle_order;

use core\base\BaseValidate;

/**
 * 回收订单验证器
 */
class RecycleOrder extends BaseValidate
{
    protected $rule = [
        'member_name' => 'require|max:50',
        'phone' => 'require|mobile',
        'total_price' => 'require|float|egt:0',
        'status' => 'require|in:1,2,3,4',
        'remark' => 'max:500'
    ];

    protected $message = [
        'member_name.require' => ['common_validate.require', ['member_name']],
        'member_name.max' => ['common_validate.max', ['member_name', '50']],
        'phone.require' => ['common_validate.require', ['phone']],
        'phone.mobile' => ['common_validate.mobile', ['phone']],
        'total_price.require' => ['common_validate.require', ['total_price']],
        'total_price.float' => ['common_validate.float', ['total_price']],
        'total_price.egt' => ['common_validate.egt', ['total_price', '0']],
        'status.require' => ['common_validate.require', ['status']],
        'status.in' => ['common_validate.in', ['status', '1,2,3,4']],
        'remark.max' => ['common_validate.max', ['remark', '500']]
    ];

    protected $scene = [
        'add' => ['member_name', 'phone', 'total_price', 'status', 'remark'],
        'edit' => ['member_name', 'phone', 'total_price', 'status', 'remark']
    ];
}
