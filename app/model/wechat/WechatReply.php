<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\model\wechat;

use app\dict\channel\ReplyDict;
use core\base\BaseModel;

/**
 * 微信回复模型
 * Class WechatReply
 * @package app\model\wechat
 */
class WechatReply extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'wechat_reply';

    protected $type = [
        'content' => 'json'
    ];

}