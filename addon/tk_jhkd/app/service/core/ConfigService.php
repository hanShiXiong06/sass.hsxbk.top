<?php

namespace addon\tk_jhkd\app\service\core;

use addon\tk_jhkd\app\service\core\CommonService;
use core\base\BaseAdminService;
use app\service\core\sys\CoreConfigService;

/**
 * 配置信息服务层
 * Class ConfigService
 * @package addon\tk_jhkd\service\core\config
 */
class ConfigService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();

    }

    /**
     * 获取配置信息
     * @param $site_id
     * @param string $config_key
     */
    public function getConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, 'TK_JHKD_CONFIG');
        if ($info) {
            $info['value']['noticeurl'] = (new CommonService())->getUrl() . '/api/tk_jhkd/yidanotice';
            //增加云洋回掉URL
            $info['value']['noticeurlyy'] = (new CommonService())->getUrl() . '/api/tk_jhkd/yunyangnotice';
            //辛达回掉
            $info['value']['noticeurlxd'] = (new CommonService())->getUrl() . '/api/tk_jhkd/xindanotice';
        }
        return $info;
    }

    /**
     * 设置配置信息
     * @param $site_id
     * @param string $config_key
     * @return string|null
     */
    public function setConfig($value)
    {
        return (new CoreConfigService())->setConfig($this->site_id, 'TK_JHKD_CONFIG', $value);
    }

    public function getSiteId()
    {
        return $this->site_id;
    }
}