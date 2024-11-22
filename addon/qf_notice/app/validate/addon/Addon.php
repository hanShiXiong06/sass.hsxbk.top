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

namespace addon\qf_notice\app\validate\addon;
use core\base\BaseValidate;
/**
 * 群发应用验证器
 * Class Addon
 * @package addon\qf_notice\app\validate\addon
 */
class Addon extends BaseValidate
{

       protected $rule = [
            'name' => 'require'
        ];

       protected $message = [
            'name.require' => ['common_validate.require', ['name']]
        ];

       protected $scene = [
            "add" => ['name', 'desc', 'image', 'is_main', 'type', 'config_id', 'value', 'is_go_url', 'url', 'page'],
            "edit" => ['name', 'desc', 'image', 'is_main', 'type', 'config_id', 'value', 'is_go_url', 'url', 'page']
        ];

}
