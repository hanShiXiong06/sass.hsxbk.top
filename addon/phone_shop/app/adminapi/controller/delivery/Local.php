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

namespace addon\phone_shop\app\adminapi\controller\delivery;

use addon\phone_shop\app\service\admin\delivery\LocalService;
use core\base\BaseAdminController;


/**
 * 同城配送
 * Class Store
 * @package addon\phone_shop\app\adminapi\controller\delivery
 */
class Local extends BaseAdminController
{
    public function getLocal() {
        return success(data:(new LocalService())->getLocal());
    }

    public function setLocal() {
        $data = $this->request->params([
            ['center', []],
            ['fee_type', ''],
            ['base_dist', 0],
            ['base_price', 0],
            ['grad_dist', 0],
            ['grad_price', 0],
            ['weight_start', 0],
            ['weight_unit', 0],
            ['weight_price', 0],
            ['delivery_type', ''],
            ['area', []],
        ]);
        return success(data:(new LocalService())->setLocal($data));
    }
}
