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

use addon\sow_community\app\dict\ContentDict;
use core\base\BaseModel;
use think\model\relation\HasOne;

/**
 * 社区内容点赞模型
 * Class ContentLike
 * @package addon\sow_community\app\model
 */
class ContentLike extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'content_like_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_content_like';

    /**
     * 关联点赞内容
     * @return HasOne
     */
    public function content()
    {
        return $this->hasOne(Content::class, 'content_id', 'content_id')->where([ [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ] ])->bind([ 'content_title', 'content_type', 'content_cover', 'content_image', 'member', 'like_num', 'content_cover_thumb_mid' ]);
    }

}
