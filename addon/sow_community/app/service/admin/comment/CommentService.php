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

namespace addon\sow_community\app\service\admin\comment;

use addon\sow_community\app\dict\CommentDict;
use addon\sow_community\app\model\Comment;
use addon\sow_community\app\service\core\comment\CoreCommentService;
use addon\sow_community\app\service\core\content\CoreContentService;
use app\service\admin\sys\ConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use think\db\Query;
use think\facade\Db;

/**
 * 社区评论服务层
 * Class CommentService
 * @package  addon\sow_community\app\service\admin\comment;
 */
class CommentService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Comment();
    }

    /**
     * 获取社区评论分页列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getPage(array $where = [])
    {
        $field = 'comment_id,content_id,member_id,reply_member_id,parent_comment_id,comment_content,status,create_time,like_num,reply_num,level';
        $order = 'create_time desc';
        $comment_where = [
            [ 'comment.site_id', '=', $this->site_id ]
        ];
        if (!empty($where[ 'content_id' ])) {
            $comment_where[] = [ 'comment.content_id', '=', $where[ 'content_id' ] ];
        }
        $search_model = $this->model->where($comment_where)->withSearch([ 'comment_content', 'status', 'create_time' ], $where)->field($field)
            ->withJoin([
                'member' => function(Query $query) use ($where) {
                    if (!empty($where[ 'keyword' ])) {
                        $member_where = [
                            [ 'nickname|mobile', '=', $where[ 'keyword' ] ]
                        ];
                        $query->where($member_where);
                    }
                },
                'content' => function(Query $query) use ($where) {
                    if (!empty($where[ 'content_title' ])) {
                        $content_where = [
                            [ 'content_title', '=', $where[ 'content_title' ] ]
                        ];
                        $query->where($content_where);
                    }
                }
            ], 'left')
            ->with([ 'replyMember' ])
            ->append([ 'status_name' ])
            ->order($order);
        $list = $this->pageQuery($search_model);
        if (!empty($list[ 'data' ])) {
            $site_info = ( new ConfigService() )->getWebSite();
            foreach ($list[ 'data' ] as $k => &$v) {
                if ($v[ 'member_id' ] == 0) {//后台评论，展示系统设置的名称和头像
                    $v[ 'member' ] = [
                        'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                        'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                    ];
                }
            }
        }
        return $list;
    }

    /**
     * 获取社区评论信息
     * @param int $id
     * @return array
     */
    public function getInfo($id)
    {
        $field = 'comment_id,content_id,member_id,reply_member_id,comment_content,status,create_time,like_num,reply_num';
        $info = $this->model->field($field)->where([ [ 'comment_id', "=", $id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加社区评论
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        return ( new CoreCommentService() )->add($data, true);
    }

    /**
     * 删除社区评论
     * @param int $id
     * @return bool
     */
    public function del($id)
    {
        $data[ 'site_id' ] = $this->site_id;
        return ( new CoreCommentService() )->del($id, $data);
    }

    /**
     * 社区评论审核
     * @param $id
     * @param $data
     * @return mixed
     */
    public function audit($id, $data)
    {
        $comment = $this->model->where([ [ 'comment_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty();
        if ($comment->isEmpty()) throw new AdminException('COMMENT_NOT_EXIST');
        Db::startTrans();
        try {
            if ($data[ 'status' ] == CommentDict::AUDIT_ADOPT) {
                if ($comment[ 'parent_comment_id' ] > 0) {
                    ( new CoreCommentService() )->editStatNum($comment[ 'parent_comment_id' ], $this->site_id, 'reply_num', 1);//更新回复数
                }
                ( new CoreContentService() )->editStatNum($comment[ 'content_id' ], $this->site_id, 'comment_num', 1);//更新内容评论数
            }
            $comment->save([ 'status' => $data[ 'status' ] ]);
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

}
