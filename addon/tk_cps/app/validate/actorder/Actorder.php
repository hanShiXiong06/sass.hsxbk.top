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

namespace addon\tk_cps\app\validate\actorder;
use core\base\BaseValidate;
/**
 * CPS活动订单验证器
 * Class Actorder
 * @package addon\tk_cps\app\validate\actorder
 */
class Actorder extends BaseValidate
{

       protected $rule = [
            'jl_js' => 'require',
        ];

       protected $message = [
            'jl_js.require' => ['common_validate.require', ['jl_js']],
        ];

       protected $scene = [
            "add" => ['sid', 'member_id', 'name', 'chanel', 'order_id', 'pay_money', 'rate', 'commission', 'status', 'status_name', 'jl_js', 'pt_js'],
            "edit" => ['sid', 'member_id', 'name', 'chanel', 'order_id', 'pay_money', 'rate', 'commission', 'status', 'status_name', 'jl_js', 'pt_js']
        ];

}
