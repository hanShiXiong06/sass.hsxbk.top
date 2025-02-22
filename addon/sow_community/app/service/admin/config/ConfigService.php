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

namespace addon\sow_community\app\service\admin\config;

use addon\sow_community\app\service\core\config\CoreCommunityConfigService;
use core\base\BaseAdminService;


/**
 * 社区话题配置服务层
 * Class ConfigService
 * @package  addon\sow_community\app\service\admin\config;
 */
class ConfigService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 设置社区配置
     * @param array $params
     * @return bool
     */
    public function setCommunityConfig(array $params = [])
    {
        $params[ 'site_id' ] = $this->site_id;
        return ( new CoreCommunityConfigService() )->setCommunityConfig($params);
    }

    /**
     * 获取社区配置
     * @return array
     */
    public function getCommunityConfig()
    {
        return ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
    }

}
