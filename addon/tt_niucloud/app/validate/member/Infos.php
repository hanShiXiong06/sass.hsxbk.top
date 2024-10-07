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

namespace addon\tt_niucloud\app\validate\member;
use think\Validate;
/**
 * 验证器
 * Class UserAccounts
 * @package addon\tt_niucloud\app\validate\member_extends
 */
class Infos extends Validate
{

       protected $rule = [
            'wx_id' => 'require',
            'wx_qrcode' => 'require',
        ];

       protected $message = [
            'wx_id.require' => 'member_infos.wx_id',
            'wx_qrcode.require' => 'member_infos.wx_qrcode',
        ];

       protected $scene = [
            "set" => ['wx_id', 'wx_qrcode']
        ];

}
