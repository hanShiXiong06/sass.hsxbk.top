<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\login;

use addon\vipcard\app\service\core\CoreOrderRefundService;
use app\dict\member\MemberAccountTypeDict;
use app\service\admin\auth\ConfigService;
use app\service\admin\auth\LoginService;
use app\service\admin\member\MemberService;
use app\service\admin\upgrade\UpgradeService;
use app\service\core\addon\CoreAddonDevelopBuildService;
use app\service\core\addon\WapTrait;
use app\service\core\menu\CoreMenuService;
use app\service\core\upload\CoreFileService;
use core\base\BaseAdminController;
use think\facade\Db;
use think\Response;

class Login extends BaseAdminController
{
    use WapTrait;

    /**
     * 登录
     * @return Response
     */
    public function login($app_type)
    {

        $data = $this->request->params([
            ['username', ''],
            ['password', ''],
        ]);
        //参数验证
        //验证码验证
        $result = (new LoginService())->login($data['username'], $data['password'], $app_type);
        if (!$result) {
            //账号密码错误...., 重置验证码
            return fail('USER_ERROR');
        }
        return success($result);

    }

    /**
     * 登出
     * @return Response
     */
    public function logout()
    {
        (new LoginService)->logout();
        return success('LOGOUT');
    }


    /**
     * 获取登录设置
     * @return Response
     */
    public function getConfig()
    {
        return success((new ConfigService())->getConfig());
    }

    public function test(){
        $res = event("MemberAccount", ['account_type' => MemberAccountTypeDict::GROWTH, 'site_id' => 166,
            'member_id' => 10143]);
        dd($res);
    }

    public function geAddonPackagePath(string $addon)
    {
        return root_path() . 'addon' .DIRECTORY_SEPARATOR . $addon . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR;
    }
}
