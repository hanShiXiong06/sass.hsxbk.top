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

namespace addon\sow_community\app\api\controller\member;

use addon\sow_community\app\service\api\member\MemberService;
use core\base\BaseApiController;


/**
 * 我的主页控制器
 * Class Member
 * @package addon\sow_community\app\api\controller\member
 */
class Member extends BaseApiController
{

    /**
     * 获取推荐用户列表
     * @return \think\Response
     */
    public function recommendLists()
    {
        return success(( new MemberService() )->getRecommendLists());
    }

    /**
     * 获取用户信息
     * @return \think\Response
     */
    public function info()
    {
        $data = $this->request->params([
            [ "member_id", "" ]
        ]);
        return success(( new MemberService() )->info($data));
    }

}
