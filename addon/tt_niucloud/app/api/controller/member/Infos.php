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
use addon\tt_niucloud\app\service\api\member\InfosService;

class Infos extends BaseApiController
{

    public function getParentMember()
    {
        return success((new InfosService())->getParentMember());
    }

    public function getWxInfo()
    {
        return success((new InfosService())->getWxInfo());
    }

    public function editWxInfo()
    {
        $data = $this->request->params([
            [ 'wx_id', '' ],
            [ 'wx_qrcode', '' ],
            [ 'status', 1 ],
        ]);
        $this->validate($data, 'addon\tt_niucloud\app\validate\member\Infos.edit');
        return success('SUCCESS', (new InfosService())->editWxInfo($data));
    }
}
