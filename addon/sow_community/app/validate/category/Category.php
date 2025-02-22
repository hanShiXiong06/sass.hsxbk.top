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

namespace addon\sow_community\app\validate\category;

use addon\sow_community\app\service\admin\category\CategoryService;
use core\base\BaseValidate;

/**
 * 社区分类验证器
 * Class Category
 * @package addon\sow_community\app\validate\category
 */
class Category extends BaseValidate
{

    protected $rule = [
        'category_name' => 'require|checkCategoryNameUnique',
    ];

    protected $message = [
        'category_name.require' => [ 'common_validate.require', [ 'category_name' ] ]
    ];

    protected $scene = [
        "add" => [ 'category_name' ],
        "edit" => [ 'category_name' ]
    ];

    public function checkCategoryNameUnique($value, $rule, $data)
    {
        return ( new CategoryService() )->checkCategoryNameUnique($data) ? get_lang("common_validate.category_name_unique") : true;
    }

}
