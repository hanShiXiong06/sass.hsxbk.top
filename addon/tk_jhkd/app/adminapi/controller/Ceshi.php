<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tk_jhkd\app\adminapi\controller;


use addon\tk_jhkd\app\job\order\SendOrder;
use addon\tk_jhkd\app\service\core\WeappDeliveryService;
use addon\tk_jhkd\app\upgrade\v200\Upgrade;
use core\base\BaseAdminController;
use addon\tk_jhkd\app\service\core\ConfigService;
use think\Exception;

class Ceshi extends BaseAdminController
{
    /**
     * 测试接口数据
     */
    public function ceshi()
    {

    }
}
