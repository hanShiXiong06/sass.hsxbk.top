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

namespace addon\tt_niucloud\app\api\controller\member;

use core\base\BaseApiController;
use think\Response;
use addon\tt_niucloud\app\service\api\member\MemberService;

class Member extends BaseApiController
{

    public function getTeamMember()
    {
    	return success((new MemberService())->getTeamMember());
    }

    public function getPoster()
    {
        $data = $this->request->params([
            [ 'id', 0 ], // 海报id
            [ 'type', '' ], // 海报类型
            [ 'param', [] ], // 数据参数
        ]);
        
        return success('SUCCESS', (new MemberService())->getPoster($data));
    }
}
