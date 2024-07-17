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

namespace addon\data_scope\app\validate\data_scope;
use core\base\BaseValidate;
/**
 * 角色和部门关联验证器
 * Class Scope
 * @package addon\data_scope\app\validate\data_scope
 */
class Scope extends BaseValidate
{

       protected $rule = [
            'role_id' => 'require|unique:data_scope_role_dept',
            'data_scope' => 'require'
        ];

       protected $message = [
           'role_id.require' => ['common_validate.require', ['role_id']],
           'data_scope.require' => ['common_validate.require', ['data_scope']],
        ];

       protected $scene = [
            "save" => ['role_id', 'data_scope'],
        ];

}
