<?php

namespace addon\tk_yht\app\service\admin;

use addon\tk_yht\app\service\core\CloudService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use addon\tk_yht\app\dict\common\CommonDict;
use think\facade\Cache;

/**
 * 短信配置服务层
 */
class CommonConfigService extends BaseAdminService
{
    public function __construct()
    {
        (new CloudService())->auth();
        parent::__construct();
    }

    /**
     * 获取通用配置
     */
    public function getConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, CommonDict::getType());
        if (empty($info)) {
            $info['value'] = ['access_key' => 'AppId', 'secret_key' => 'Secretkey'];
        }
        return $info['value'];
    }

    /**
     * 通用配置
     */
    public function setConfig($data)
    {
        Cache::set('ydt_access_token_'.$data['access_key'],'');
        return (new CoreConfigService())->setConfig($this->site_id, CommonDict::getType(), $data);
    }

    public function getUrl()
    {
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $domain = $_SERVER['HTTP_HOST'];
        if ($isSecure) {
            $url = 'https://' . $domain;
        } else {
            $url = 'http://' . $domain;
        }
        return $url;
    }

}
