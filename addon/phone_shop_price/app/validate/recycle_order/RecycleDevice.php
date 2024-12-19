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
 * 回收设备验证器
 */
class RecycleDevice extends BaseValidate
{
    protected $rule = [
        'name' => 'require|max:100',
        'model' => 'require|max:50',
        'price' => 'require|float|egt:0',
        'status' => 'require|in:0,1',
        'description' => 'max:500'
    ];

    protected $message = [
        'name.require' => ['common_validate.require', ['name']],
        'name.max' => ['common_validate.max', ['name', '100']],
        'model.require' => ['common_validate.require', ['model']],
        'model.max' => ['common_validate.max', ['model', '50']],
        'price.require' => ['common_validate.require', ['price']],
        'price.float' => ['common_validate.float', ['price']],
        'price.egt' => ['common_validate.egt', ['price', '0']],
        'status.require' => ['common_validate.require', ['status']],
        'status.in' => ['common_validate.in', ['status', '0,1']],
        'description.max' => ['common_validate.max', ['description', '500']]
    ];

    protected $scene = [
        'add' => ['name', 'model', 'price', 'status', 'description'],
        'edit' => ['name', 'model', 'price', 'status', 'description'],
        'editStatus' => ['status'],
        'editPrice' => ['price']
    ];
} 