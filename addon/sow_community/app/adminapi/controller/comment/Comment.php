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

namespace addon\sow_community\app\adminapi\controller\comment;

use addon\sow_community\app\dict\CommentDict;
use addon\sow_community\app\service\admin\comment\CommentService;
use core\base\BaseAdminController;

/**
 * 社区评论控制器
 * Class Comment
 * @package addon\sow_community\app\adminapi\controller\comment
 */
class Comment extends BaseAdminController
{

    /**
     * 获取社区评论分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "content_id", '' ],
            [ "content_title", '' ],
            [ "keyword", '' ],
            [ "comment_content", '' ],
            [ 'status', '' ],
            [ 'create_time', [] ],
        ]);
        return success(( new CommentService() )->getPage($data));
    }

    /**
     * 社区评论详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success(( new CommentService() )->getInfo($id));
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
        $id = ( new CommentService() )->add($data);
        return success('ADD_SUCCESS', [ 'id' => $id ]);
    }

    /**
     * 社区评论删除
     * @param $id - 社区评论id
     * @return \think\Response
     */
    public function del(int $id)
    {
        ( new CommentService() )->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 社区评论审核
     * @return \think\Response
     */
    public function audit(int $id)
    {
        $data = $this->request->params([
            [ 'status', '' ]
        ]);
        ( new CommentService() )->audit($id, $data);
        return success('SUCCESS');
    }

    /**
     * 社区评论状态列表
     * @return \think\Response
     */
    public function statusList()
    {
        return success(data: CommentDict::getStatusList());
    }
}
