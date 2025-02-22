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

namespace addon\sow_community\app\service\core\comment;

use addon\sow_community\app\dict\CommentDict;
use addon\sow_community\app\model\Comment;
use addon\sow_community\app\service\core\config\CoreCommunityConfigService;
use addon\sow_community\app\service\core\content\CoreContentService;
use core\base\BaseCoreService;
use core\exception\CommonException;
use think\facade\Db;

/**
 * 社区内容服务层
 * Class CoreCommentService
 * @package  addon\sow_community\app\service\core\comment;
 */
class CoreCommentService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Comment();
    }

    /**
     * 添加社区评论
     * @param array $data
     * @return mixed
     */
    public function add(array $data, $is_back_add = false)
    {
        $config = ( new CoreCommunityConfigService() )->getCommunityConfig($data[ 'site_id' ]);
        Db::startTrans();
        try {
            if ($is_back_add){
                // 后台评论
                $data['status'] = CommentDict::AUDIT_NO;
                if (!empty($data['parent_comment_id'])) {
                    $this->editStatNum($data['parent_comment_id'], $data['site_id'], 'reply_num', 1);//更新回复数
                }
                (new CoreContentService())->editStatNum($data['content_id'], $data['site_id'], 'comment_num', 1);//更新内容评论数
            } else {
                // 前端评论
                if ($config['comment_moderation_status'] == 1) {
                    $data['status'] = CommentDict::WAIT_AUDIT;
                } else {
                    $data['status'] = CommentDict::AUDIT_NO;
                    if (!empty($data['parent_comment_id'])) {
                        $this->editStatNum($data['parent_comment_id'], $data['site_id'], 'reply_num', 1);//更新回复数
                    }
                    (new CoreContentService())->editStatNum($data['content_id'], $data['site_id'], 'comment_num', 1);//更新内容评论数
                }
            }
            if (!empty($data['parent_comment_id'])) {
                $data['level'] = min(intval($data['level']) + 1, 2);
            }
            $res = $this->model->create($data);
            Db::commit();
            return $res->comment_id;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 删除社区评论
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function del($id, $data)
    {
        $comment = $this->model->where([ [ 'comment_id', '=', $id ], [ 'site_id', '=', $data[ 'site_id' ] ] ])->findOrEmpty();
        if ($comment->isEmpty()) throw new CommonException('COMMENT_NOT_EXIST');
        Db::startTrans();
        try {
            if ($comment['parent_comment_id'] > 0) {
                $this->editStatNum($comment['parent_comment_id'], $data['site_id'], 'reply_num', -1);//更新回复数
            }
            $num = $comment['reply_num'] > 0 ? -($comment['reply_num'] + 1) : -1;
            (new CoreContentService())->editStatNum($comment['content_id'], $data['site_id'], 'comment_num', $num);//更新内容评论数
            $comment->delete();
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

    /**
     * 根据内容id删除社区评论
     * @param int $content_id
     * @param array $data
     * @return bool
     */
    public function delByContentId($content_id, $data)
    {
        return $this->model->where([ [ 'content_id', '=', $content_id ], [ 'site_id', '=', $data[ 'site_id' ] ] ])->delete();
    }

    /**
     * 更新评论点赞数/回复数
     * @param int $comment_id
     * @param int $site_id
     * @param string $field
     * @param int $num
     * @return bool
     */
    public function editStatNum($comment_id, $site_id, $field, $num)
    {
        $comment = $this->model->where([ [ 'comment_id', '=', $comment_id ], [ 'site_id', '=', $site_id ] ])->findOrEmpty();
        if (!$comment->isEmpty()) {
            $update_data = [];
            if ($num != 0) {
                if ($num > 0) {
                    $item_sql = ' + ' . abs($num);
                } else if ($num < 0) {
                    $item_sql = ' - ' . abs($num);
                }
                $update_data[ $field ] = Db::raw('CASE WHEN ' . $field . $item_sql . '>= 0 THEN ' . $field . $item_sql . ' ELSE 0 END');
            }
            if ($update_data) {
                $comment->save($update_data);
            }
        }
        return true;
    }

}
