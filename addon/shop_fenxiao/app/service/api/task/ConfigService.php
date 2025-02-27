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
namespace addon\shop_fenxiao\app\service\api\task;

use addon\shop_fenxiao\app\service\core\task\CoreTaskConfigService;
use core\base\BaseApiService;

/**
 * 任务奖励配置
 */
class ConfigService extends BaseApiService
{

    /**
     * 获取设置
     * @return array
     */
    public function getConfig()
    {
        return (new CoreTaskConfigService())->getConfig($this->site_id);
    }
}