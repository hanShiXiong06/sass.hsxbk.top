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

namespace addon\hlwoauth\app\validate\hlwoauth;
use core\base\BaseValidate;
/**
 * 域名授权验证器
 * Class Domain
 * @package addon\hlwoauth\app\validate\hlwoauth
 */
class Domain extends BaseValidate
{

       protected $rule = [
            'name' => 'require',
            'domain' => 'require',
            'auth_url' => 'require',
            'number' => 'require',
            'status' => 'require'
        ];

       protected $message = [
            'name.require' => ['common_validate.require', ['name']],
            'domain.require' => ['common_validate.require', ['domain']],
            'auth_url.require' => ['common_validate.require', ['auth_url']],
            'number.require' => ['common_validate.require', ['number']],
            'status.require' => ['common_validate.require', ['status']]
        ];

       protected $scene = [
            "add" => ['name', 'domain'],
            "edit" => ['name', 'domain']
        ];

}
