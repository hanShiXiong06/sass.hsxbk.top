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

namespace addon\manage_oss\app\validate\manageoss;
use core\base\BaseValidate;
/**
 * 存储管理验证器
 * Class ManageOss
 * @package addon\manage_oss\app\validate\manageoss
 */
class ManageOss extends BaseValidate
{

    protected $rule = [
        'value' => 'require'
    ];

    protected $message = [
        'value.require' => ['common_validate.require', ['value']]
    ];

    protected $scene = [
        "add" => ['value', 'size', 'use_size', 'limit'],
        "edit" => ['value', 'size', 'use_size', 'limit']
    ];

}