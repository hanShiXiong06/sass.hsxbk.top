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

namespace addon\sow_community\app\service\api\comment;

use addon\sow_community\app\dict\CommentDict;
use addon\sow_community\app\model\Comment;
use addon\sow_community\app\service\core\comment\CoreCommentService;
use addon\sow_community\app\service\core\config\CoreCommunityConfigService;
use app\service\api\site\SiteService;
use core\base\BaseApiService;


/**
 * 社区评论服务层
 * Class CommentService
 * @package addon\sow_community\app\service\api\comment
 */
class CommentService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Comment();
    }

    /**
     * 获取评论分页列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'comment_id,member_id,reply_member_id,parent_comment_id,comment_content,comment_image,create_time,like_num,reply_num,level';
        $order = 'create_time desc';

        $comment_where = [
            [ 'site_id', '=', $this->site_id ],
            [ 'content_id', '=', $where[ 'content_id' ] ],
            [ 'status', 'in', [ CommentDict::AUDIT_NO, CommentDict::AUDIT_ADOPT ] ]
        ];

        if (empty($where[ 'parent_comment_id' ])) {
            $comment_where[] = [ 'parent_comment_id', '=', 0 ];
        } else {
            $comment_where[] = [ 'parent_comment_id', '=', $where[ 'parent_comment_id' ] ];
            $comment_where[] = [ 'comment_id', '<>', $where[ 'first_comment_id' ] ];
        }

        $search_model = $this->model->where($comment_where)->with([ 'member', 'replyMember' ])->field($field)->order($order);
        $list = $this->pageQuery($search_model);

        $site_info = ( new SiteService() )->getSiteCache();
        $config = ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
        if ($config[ 'community_comments_status' ]) {
            foreach ($list[ 'data' ] as $k => &$v) {
                $child_list = $this->model->where([
                    [ 'site_id', '=', $this->site_id ],
                    [ 'content_id', '=', $where[ 'content_id' ] ],
                    [ 'status', 'in', [ CommentDict::AUDIT_NO, CommentDict::AUDIT_ADOPT ] ],
                    [ 'parent_comment_id', '=', $v[ 'comment_id' ] ],
                    [ 'level', '=', 1 ]
                ])->with([ 'member', 'replyMember' ])->field($field)->order($order)->limit(1)->select()->toArray();
                foreach ($child_list as $k1 => &$v1) {
                    if (!empty($this->member_id)) {
                        $is_like = ( new CommentLikeService() )->getIsLike($v1[ 'comment_id' ]);
                        $v1[ 'is_like' ] = $is_like;
                    } else {
                        $v1[ 'is_like' ] = false;
                    }
                    $v1[ 'create_time' ] = get_last_time(strtotime($v1[ 'create_time' ]));
                    if ($v1[ 'member_id' ] == 0) {//后台评论，展示系统设置的名称和头像
                        $v1[ 'member' ] = [
                            'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                            'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                        ];
                    }
                }
                $v[ 'child_list' ] = $child_list;
                if (!empty($child_list)) {
                    $v[ 'first_comment_id' ] = $child_list[ 0 ][ 'comment_id' ];
                } else {
                    $v[ 'first_comment_id' ] = '';
                }
                if (!empty($this->member_id)) {
                    $is_like = ( new CommentLikeService() )->getIsLike($v[ 'comment_id' ]);
                    $v[ 'is_like' ] = $is_like;
                } else {
                    $v[ 'is_like' ] = false;
                }
                $v[ 'create_time' ] = get_last_time(strtotime($v[ 'create_time' ]));
                if ($v[ 'member_id' ] == 0) {//后台评论，展示系统设置的名称和头像
                    $v[ 'member' ] = [
                        'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                        'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                    ];
                }
                if ($v[ 'reply_member_id' ] == 0 && $v[ 'level' ] == 2) {//二级回复后台评论，展示系统设置的名称和头像
                    $v[ 'replyMember' ] = [
                        'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                        'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                    ];
                }
            }
        } else {
            $list[ 'data' ] = [];
        }
        return $list;
    }

    /**
     * 添加社区评论
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $data[ 'member_id' ] = $this->member_id;

        $comment_id = ( new CoreCommentService() )->add($data);

        if (empty($comment_id)) {
            return [];
        }

        $field = 'comment_id,member_id,reply_member_id,parent_comment_id,comment_content,comment_image,create_time,like_num,reply_num,level';

        $comment_where = [
            [ 'site_id', '=', $this->site_id ],
            [ 'comment_id', '=', $comment_id ]
        ];

        $info = $this->model->where($comment_where)->with([ 'member', 'replyMember' ])->field($field)->findOrEmpty()->toArray();

        $site_info = ( new SiteService() )->getSiteCache();

        $info[ 'first_comment_id' ] = '';
        $info[ 'is_like' ] = ( new CommentLikeService() )->getIsLike($comment_id);
        $info[ 'create_time' ] = get_last_time(strtotime($info[ 'create_time' ]));
        if ($info[ 'member_id' ] == 0) {//后台评论，展示系统设置的名称和头像
            $info[ 'member' ] = [
                'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
            ];
        }
        if ($info[ 'reply_member_id' ] == 0 && $info[ 'level' ] == 2) {//二级回复后台评论，展示系统设置的名称和头像
            $info[ 'replyMember' ] = [
                'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
            ];
        }
        return $info;
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

}
