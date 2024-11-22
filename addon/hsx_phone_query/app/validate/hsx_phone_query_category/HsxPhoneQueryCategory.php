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

namespace addon\hsx_phone_query\app\validate\hsx_phone_query_category;
use core\base\BaseValidate;
/**
 * 分类验证器
 * Class HsxPhoneQueryCategory
 * @package addon\hsx_phone_query\app\validate\hsx_phone_query_category
 */
class HsxPhoneQueryCategory extends BaseValidate
{

       protected $rule = [
            'type_id' => 'require',
            'name' => 'require',
            'price' => 'require'
        ];

       protected $message = [
            'type_id.require' => ['common_validate.require', ['type_id']],
            'name.require' => ['common_validate.require', ['name']],
            'price.require' => ['common_validate.require', ['price']]
        ];

       protected $scene = [
            "add" => ['type_id', 'name', 'price'],
            "edit" => ['type_id', 'name', 'price']
        ];

}
