<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tk_jhkd\app\validate;

/**
 * 聚合快递通知列表验证器
 * Class TkjhkdNotice
 * @package app\validate\tkjhkd_notice
 */
class TkjhkdNotice extends \think\Validate
{

       protected $rule = [
            'site_id' => 'require',
            'title' => 'require',
            'image' => 'require',
            'content' => 'require',
            'status' => 'require',
            'create_time' => 'require',
            'update_time' => 'require',
            'addon' => 'require',
        ];

       protected $message = [];

       protected $scene = [
            "add" => ['title','image','content','status','addon'],
            "edit" => ['title','image','content','status','addon']
        ];

}