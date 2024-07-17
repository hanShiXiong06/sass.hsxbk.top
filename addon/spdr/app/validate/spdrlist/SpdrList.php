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

namespace addon\spdr\app\validate\spdrlist;
use core\base\BaseValidate;
/**
 * 商品导入列验证器
 * Class SpdrList
 * @package addon\spdr\app\validate\spdrlist
 */
class SpdrList extends BaseValidate
{

       protected $rule = [
            
        ];

       protected $message = [
            
        ];

       protected $scene = [
            "add" => ['name', 'cat_id', 'cat_name', 'flie', 'num', 'success_num', 'fail_num', 'status'],
            "edit" => ['name', 'cat_id', 'cat_name', 'flie', 'num', 'success_num', 'fail_num', 'status']
        ];

}
