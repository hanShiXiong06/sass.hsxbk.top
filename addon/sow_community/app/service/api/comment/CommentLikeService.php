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

use addon\sow_community\app\model\Comment;
use addon\sow_community\app\model\CommentLike;
use addon\sow_community\app\service\core\comment\CoreCommentService;
use core\base\BaseApiService;
use core\exception\ApiException;
use think\facade\Db;


/**
 * 社区评论点赞服务层
 * Class CommentLikeService
 * @package addon\sow_community\app\service\api\comment
 */
class CommentLikeService extends BaseApiService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new CommentLike();
    }

    /**
     * 获取会员是否点赞评论
     * @param int $comment_id
     * @return bool
     */
    public function getIsLike($comment_id)
    {
        $count = $this->model->where([ [ 'comment_id', "=", $comment_id ], [ 'member_id', "=", $this->member_id ], [ 'site_id', "=", $this->site_id ] ])->count();
        return $count > 0;
    }

    /**
     * 社区评论点赞
     * @param int $comment_id
     * @param int $status
     * @return bool
     */
    public function like($comment_id, $status)
    {
        $count = ( new Comment() )->where([ [ 'comment_id', "=", $comment_id ], [ 'site_id', "=", $this->site_id ] ])->count();
        if ($count == 0) throw new ApiException("COMMENT_NOT_EXIST");
        $is_like = $this->getIsLike($comment_id);
        Db::startTrans();
        try {
            if ($status == 1) {
                if ($is_like) {
                    $res = true;
                } else {
                    $res = $this->model->save([
                        'comment_id' => $comment_id,
                        'member_id' => $this->member_id,
                        'site_id' => $this->site_id
                    ]);
                    ( new CoreCommentService() )->editStatNum($comment_id, $this->site_id, 'like_num', 1);
                }
            } else {
                if ($is_like) {
                    $res = $this->model->where([
                        [ 'comment_id', "=", $comment_id ],
                        [ 'member_id', "=", $this->member_id ],
                        [ 'site_id', "=", $this->site_id ]
                    ])->delete();
                    ( new CoreCommentService() )->editStatNum($comment_id, $this->site_id, 'like_num', -1);
                } else {
                    $res = true;
                }
            }
            Db::commit();
            return $res;
        } catch (\Exception $e) {
            Db::rollback();
            throw new ApiException($e->getMessage());
        }
    }

}
