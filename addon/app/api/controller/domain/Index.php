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

namespace addon\hlwoauth\app\api\controller\domain;

use addon\hlwoauth\app\service\core\DomainService;
use core\base\BaseApiController;
use think\Response;

class Index extends BaseApiController
{
    /**
     * Hello World
     * @return Response
     */
    public function index()
    {
        $data = $this->request->params([
            ['site_id', 0],
            ["id", 0],
            ["code", ""],
            ["scope", "snsapi_base"],
            ["redirect_uri", ""],
            ["state", ""],
        ]);

        try {
            $domainService = new DomainService();
            $domainService->wxAuth($data);
        } catch (\Exception $e) {
            return fail($e->getMessage());
        }
        return success('SUCCESS', $data);
    }
}
