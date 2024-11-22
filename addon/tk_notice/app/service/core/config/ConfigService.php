<?php

namespace addon\tk_notice\app\service\core\config;

use core\base\BaseAdminService;
use app\service\core\sys\CoreConfigService;
use addon\tk_notice\app\dict\config\ConfigDict;

/**
 * 配置信息服务层
 */
class ConfigService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();

    }

    /**
     * 获取配置信息
     */
    public function getConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getConfigType());
        if (empty($info)) {
            $info['value']['is_email'] = '';
        }
        return $info['value'];
    }

    /**
     * 设置配置信息
     * @param $site_id
     * @param string $config_key
     * @return string|null
     */
    public function setConfig($value)
    {

        (new CoreConfigService())->setConfig($this->site_id, ConfigDict::getConfigType(), $value);

        return true;
    }

}