<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\o2o\app\validate;

use think\validate\ValidateRule;

/**
 * 订单验证器
 */
class Order extends \think\Validate
{

    protected $rule = [
        'goods' => 'checkGoods',
    ];

    protected $message = [

    ];

    protected $scene = [
        "create" => ['sku'],
        "confirm" => ['sku'],
        "calculate" => ['sku']
    ];

    protected function checkGoods($value, $rule, $data = []) {
        if (!count($value)) return get_lang('validate_o2o_order.goods_require');
        return true;
    }
}