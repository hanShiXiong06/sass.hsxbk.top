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

use app\model\member\Member;
use core\base\BaseModel;
use think\model\relation\HasOne;

/**
 * 关注模型
 * Class Follow
 * @package addon\sow_community\app\model
 */
class Follow extends BaseModel
{
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'follow_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_follow';

    /**
     * 关联关注用户
     * @return HasOne
     */
    public function member()
    {
        return $this->hasOne(Member::class, 'member_id', 'follow_member_id')->bind([ 'nickname', 'headimg' ]);
    }

    /**
     * 关联粉丝用户
     * @return HasOne
     */
    public function fans()
    {
        return $this->hasOne(Member::class, 'member_id', 'member_id')->bind([ 'nickname', 'headimg' ]);
    }
}
