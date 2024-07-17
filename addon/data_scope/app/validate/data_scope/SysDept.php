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
 * 部门验证器
 * Class SysDept
 * @package addon\data_scope\app\validate\data_scope
 */
class SysDept extends BaseValidate
{

       protected $rule = [
            'dept_name' => 'require',
        ];

       protected $message = [
            'dept_name.require' => ['common_validate.require', ['dept_name']],
        ];

       protected $scene = [
            "add" => ['p_dept_id', 'dept_name', 'sort', 'status'],
            "edit" => ['p_dept_id', 'dept_name', 'sort', 'status'],
        ];

}
