<?php

namespace addon\tk_cps\app\service\core;

use addon\tk_ai\app\service\core\textalk\websocket\lib\Exception;
use addon\tk_cps\app\model\site\Site;
use core\base\BaseAdminService;
use app\service\core\sys\CoreConfigService;
use addon\tk_cps\app\dict\config\ConfigDict;
use think\facade\Cache;
use addon\tk_cps\app\model\actitem\ActItem;

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
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
        if (empty($info)) {
            $info['value']['pub_id'] = '';
            $info['value']['api_key'] = '';
            $info['value']['mapi_key'] = '';
            $info['value']['secret'] = '';
            $info['value']['auth_code'] = '';
        }
        if (!isset($info['value']['site_key']) || $info['value']['site_key'] == '') {
            $info['value']['site_key'] = substr(md5(time() . rand(1, 1000)), 3, 6);
        }
        return $info['value'];
    }

    /**
     * @Notes:获取霸王餐配置
     * @Interface getBwcConfig
     * @return mixed
     * @author: TK
     * @Time: 2024/5/15   下午7:12
     */
    public function getBwcConfig()
    {
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getBwcType());
        if (empty($info)) {
            $info['value']['appkey'] = '';
            $info['value']['appsecret'] = '';
            $info['value']['fanxianratio'] = '';
            $info['value']['js_type'] = 1;
        }
        return $info['value'];
    }

    /**
     * @Notes:设置霸王餐配置
     * @Interface setBwcConfig
     * @param $value
     * @return true
     * @author: TK
     * @Time: 2024/5/15   下午7:12
     */
    public function setBwcConfig($value)
    {
        (new CoreConfigService())->setConfig($this->site_id, ConfigDict::getBwcType(), $value);
        $siteModel = new Site();
        $siteInfo = $siteModel->where(['site_id' => $this->site_id])->findOrEmpty();
        if ($siteInfo->isEmpty()) {
            $siteModel->create(['site_id' => $this->site_id]);
        }
        return true;
    }

    /**
     * 设置配置信息
     * @param $site_id
     * @param string $config_key
     * @return string|null
     */
    public function setConfig($value)
    {
        $key = $this->site_id . '_pub_id';
        $key1 = $this->site_id . '_api_key';
        $key2 = $this->site_id . '_secret';
        $key3 = $this->site_id . '_site_key';
        Cache::delete($key);
        Cache::delete($key1);
        Cache::delete($key2);
        Cache::delete($key3);

        $siteModel = new Site();
        $siteInfo = $siteModel->where(['site_id' => $this->site_id])->findOrEmpty();
        if ($siteInfo->isEmpty()) {
            $siteModel->create(['site_id' => $this->site_id, 'site_key' => $value['site_key']]);
        } else {
            $siteModel->where(['site_id' => $this->site_id])->update(['site_id' => $this->site_id, 'site_key' => $value['site_key']]);
        }
        (new CoreConfigService())->setConfig($this->site_id, ConfigDict::getType(), $value);
        (new ActItem())->where(['site_id' => $this->site_id])->delete();
        return true;
    }

    /**
     * @return mixed
     */
    public function getPubID($site_id = '')
    {
        if ($site_id != '') {
            $this->site_id = $site_id;
        }
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
        if (!isset($info['value']) || $info['value'] == []) throw new Exception('请先配置配置信息');
        return $info['value']['pub_id'];
    }

    public function getMapiKey($site_id = '')
    {
        if ($site_id != '') {
            $this->site_id = $site_id;
        }
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
        if (!isset($info['value']) || $info['value'] == []) throw new Exception('请先配置配置信息');
        return $info['value']['mapi_key'];
    }

    public function getSecret($site_id = '')
    {
        if ($site_id != '') {
            $this->site_id = $site_id;
        }
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
        if (!isset($info['value']) || $info['value'] == []) throw new Exception('请先配置配置信息');
        return $info['value']['secret'];
    }

    public function getApiKey($site_id = '')
    {
        if ($site_id != '') {
            $this->site_id = $site_id;
        }
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
        if (!isset($info['value']) || $info['value'] == []) throw new Exception('请先配置配置信息');
        return $info['value']['api_key'];
    }

    public function getSiteKey($site_id = '')
    {
        if ($site_id != '') {
            $this->site_id = $site_id;
        }
        $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
        if (!isset($info['value']) || $info['value'] == []) throw new Exception('请先配置配置信息');
        return $info['value']['site_key'];
    }
}