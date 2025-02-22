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

namespace addon\sow_community\app\model;

use core\base\BaseModel;

/**
 * 社区评论点赞模型
 * Class CommentLike
 * @package addon\sow_community\app\model
 */
class CommentLike extends BaseModel
{


    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'comment_like_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_comment_like';

}
