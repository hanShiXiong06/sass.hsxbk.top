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

namespace addon\hsx_phone_query\app\adminapi\controller\hello_world;

use core\base\BaseAdminController;
use think\Response;

class Index extends BaseAdminController
{
    /**
     * Hello World
     * @return Response
     */
    public function index()
    {
        return success('SUCCESS', 'Hello World');
    }


}
