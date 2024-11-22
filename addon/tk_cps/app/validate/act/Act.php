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

namespace addon\tk_cps\app\validate\act;
use core\base\BaseValidate;
/**
 * CPS活动链接验证器
 * Class Act
 * @package addon\tk_cps\app\validate\act
 */
class Act extends BaseValidate
{

       protected $rule = [
            
        ];

       protected $message = [
            
        ];

       protected $scene = [
            "add" => ['act_id', 'act_name', 'type', 'desc', 'img', 'icon', 'poster', 'commission_rate', 'introduce', 'attribution_explain', 'settlement_time', 'start_date', 'end_date', 'create_time'],
            "edit" => ['act_id', 'act_name', 'type', 'desc', 'img', 'icon', 'poster', 'commission_rate', 'introduce', 'attribution_explain', 'settlement_time', 'start_date', 'end_date', 'create_time']
        ];

}
