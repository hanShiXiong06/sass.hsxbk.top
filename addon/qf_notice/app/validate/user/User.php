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

namespace addon\qf_notice\app\validate\user;
use core\base\BaseValidate;
/**
 * 用户列验证器
 * Class User
 * @package addon\qf_notice\app\validate\user
 */
class User extends BaseValidate
{

       protected $rule = [
            
        ];

       protected $message = [
            
        ];

       protected $scene = [
            "add" => ['cat_id', 'nickname', 'headimg', 'config_id', 'mobile', 'openid', 'unionid', 'email', 'num'],
            "edit" => ['cat_id', 'nickname', 'headimg', 'config_id', 'mobile', 'openid', 'unionid', 'email', 'num']
        ];

}
