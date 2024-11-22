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

namespace addon\qf_notice\app\validate\qflog;
use core\base\BaseValidate;
/**
 * 发送日志验证器
 * Class Qflog
 * @package addon\qf_notice\app\validate\qflog
 */
class Qflog extends BaseValidate
{

       protected $rule = [
            
        ];

       protected $message = [
            
        ];

       protected $scene = [
            "add" => ['addon_name', 'wx_openid', 'email', 'mobile', 'type', 'log'],
            "edit" => ['addon_name', 'wx_openid', 'email', 'mobile', 'type', 'log']
        ];

}
