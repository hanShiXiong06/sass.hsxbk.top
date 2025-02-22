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

namespace addon\sow_community\app\api\controller\comment;

use addon\sow_community\app\service\api\comment\CommentLikeService;
use addon\sow_community\app\service\api\comment\CommentService;
use core\base\BaseApiController;


/**
 * 社区评论控制器
 * Class Comment
 * @package addon\sow_community\app\api\controller\comment
 */
class Comment extends BaseApiController
{

    /**
     * 获取社区评论分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "content_id", 0 ],
            [ "parent_comment_id", 0 ],
            [ "first_comment_id", 0 ],//第一条评论id
        ]);
        return success(( new CommentService() )->getPage($data));
    }

    /**
     * 添加社区评论
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            [ "content_id", 0 ],
            [ "reply_member_id", 0 ],
            [ "parent_comment_id", 0 ],
            [ "comment_content", '' ],
            [ "comment_image", '' ],
            [ "level", 0 ]
        ]);
        $this->validate($data, 'addon\sow_community\app\validate\comment\Comment.add');
        return success('COMMENT_SUCCESS', ( new CommentService() )->add($data));
    }

    /**
     * 删除社区评论
     * @param $id - 社区评论id
     * @return \think\Response
     */
    public function del(int $id)
    {
        ( new CommentService() )->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 社区评论点赞
     * @param $id
     * @return \think\Response
     */
    public function like($id)
    {
        $data = $this->request->params([
            [ "status", 1 ],
        ]);
        return success(data: ( new CommentLikeService() )->like($id, $data[ 'status' ]));
    }

}
