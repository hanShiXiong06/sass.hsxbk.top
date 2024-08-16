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

namespace addon\tk_cps\app\validate\actitem;
use core\base\BaseValidate;
/**
 * 活动详情验证器
 * Class ActItem
 * @package addon\tk_cps\app\validate\actitem
 */
class ActItem extends BaseValidate
{

       protected $rule = [
            'act_id' => 'require',
        ];

       protected $message = [
            'act_id.require' => ['common_validate.require', ['act_id']],
        ];

       protected $scene = [
            "add" => ['act_id', 'act_name', 'type', 'h5', 'weapp', 'aliapp', 'share_info'],
            "edit" => ['act_id', 'act_name', 'type', 'h5', 'weapp', 'aliapp', 'share_info']
        ];

}
