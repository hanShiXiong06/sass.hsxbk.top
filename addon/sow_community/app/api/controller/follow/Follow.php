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

namespace addon\sow_community\app\api\controller\follow;

use addon\sow_community\app\service\api\follow\FollowService;
use core\base\BaseApiController;


/**
 * 关注控制器
 * Class Follow
 * @package addon\sow_community\app\api\controller\follow
 */
class Follow extends BaseApiController
{
    /**
     * 关注用户分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $where = $this->request->params([
            [ "keyword", "" ],
            [ "member_id", "" ]
        ]);
        return success(( new FollowService() )->getPage($where));
    }

    /**
     * 粉丝用户分页列表
     * @return \think\Response
     */
    public function fansPages()
    {
        $where = $this->request->params([
            [ "keyword", "" ],
            [ "member_id", "" ]
        ]);
        return success(( new FollowService() )->getFansPage($where));
    }

    /**
     * 关注/取消关注用户
     * @return \think\Response
     */
    public function follow()
    {
        $data = $this->request->params([
            [ "follow_member_id", '' ],
            [ "is_follow", 0 ],
        ]);
        ( new FollowService() )->follow($data);
        return success();
    }

}
