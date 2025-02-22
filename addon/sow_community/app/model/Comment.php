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

use addon\sow_community\app\dict\CommentDict;
use app\model\member\Member;
use core\base\BaseModel;

/**
 * 社区评论模型
 * Class Comment
 * @package addon\sow_community\app\model
 */
class Comment extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'comment_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_comment';

    /**
     * 关联会员
     * @return \think\model\relation\hasOne
     */
    public function member()
    {
        return $this->hasOne(Member::class, 'member_id', 'member_id')
            ->joinType('left')
            ->withField('member_id,nickname,headimg');
    }

    /**
     * 关联会员
     * @return \think\model\relation\hasOne
     */
    public function replyMember()
    {
        return $this->hasOne(Member::class, 'member_id', 'reply_member_id')
            ->joinType('left')
            ->withField('member_id,nickname,headimg');
    }

    /**
     * 关联内容
     * @return \think\model\relation\hasOne
     */
    public function content()
    {
        return $this->hasOne(Content::class, 'content_id', 'content_id');
    }

    /**
     * 搜索器:评论内容
     * @param $value
     * @param $data
     */
    public function searchCommentContentAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("comment_content", 'like', '%' . $value . '%');
        }
    }

    /**
     * 搜索器:社区话题分类状态
     * @param $value
     * @param $data
     */
    public function searchStatusAttr($query, $value, $data)
    {
        if ($value !== '') {
            $query->where("comment.status", $value);
        }
    }

    /**
     * 创建时间搜索器
     * @param $query
     * @param $value
     * @param $data
     */
    public function searchCreateTimeAttr($query, $value, $data)
    {
        $start_time = empty($value[ 0 ]) ? 0 : strtotime($value[ 0 ]);
        $end_time = empty($value[ 1 ]) ? 0 : strtotime($value[ 1 ]);
        if ($start_time > 0 && $end_time > 0) {
            $query->whereBetweenTime('comment.create_time', $start_time, $end_time);
        } else if ($start_time > 0 && $end_time == 0) {
            $query->where([ [ 'comment.create_time', '>=', $start_time ] ]);
        } else if ($start_time == 0 && $end_time > 0) {
            $query->where([ [ 'comment.create_time', '<=', $end_time ] ]);
        }
    }

    /**
     * 状态字段转化
     * @param $value
     * @param $data
     * @return mixed
     */
    public function getStatusNameAttr($value, $data)
    {
        if ($data[ 'status' ] != '') {
            return CommentDict::getStatusList($data[ 'status' ]) ?? '';
        }
        return '';
    }

}
