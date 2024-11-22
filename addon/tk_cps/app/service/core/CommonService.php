<?php

namespace addon\tk_cps\app\service\core;

use addon\tk_cps\app\dict\config\ConfigDict;
use addon\tk_cps\app\dict\config\PlatformDict;
use addon\tk_cps\app\model\site\Site;
use app\model\dict\Dict;
use app\service\core\sys\CoreConfigService;
use app\service\core\sys\CoreSysConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;
use think\Exception;
use think\facade\Cache;

/**
 * 公共服务层
 * Class CommonService
 * @package addon\tk_cps\service\core\common
 */
class CommonService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Notes:获取站点的驱动  type 为驱动类
     * @Interface getSiteDriver
     * @param $site_id
     * @param $type
     * @return array
     * @throws Exception
     * @author: TK
     * @Time: 2024/10/7   下午3:47
     */
    public function getSiteDriver($site_id, $type = '')
    {
        $info = (new CoreConfigService())->getConfig($site_id, PlatformDict::getType());
        if (empty($info)) {
            throw new Exception('请先设置平台参数');
        } else {
            $config_type = $info['value'];
        }
        $site_key = $this->getSiteKey($site_id);
        $extend = [];
        foreach ($config_type as $k => $v) {
            if ($v['is_use'] == 1) {
                $v['site_key'] = $site_key;
                $v['type'] = $k;
                $driverInfo = $this->getDriverByType($k);
                if ($driverInfo) {
                    $extend[] = [
                        'driver' => $driverInfo['driver'],
                        'type' => $k,
                        'name' => $driverInfo['name'],
                        'desc' => $driverInfo['desc'],
                        'component' => $driverInfo['component'],
                        'params' => $v
                    ];
                    if ($type != '' && $type == $k) {
                        $driverInfo['params'] = $v;
                        return $driverInfo;
                    }
                }
            }
        }
        if (empty($extend)) {
            throw new Exception('暂未启用平台');
        }
        return $extend;
    }

    /**
     * @Notes:根据类型获取驱动信息
     * @Interface getDriverByType
     * @param $type
     * @return mixed|null
     * @author: TK
     * @Time: 2024/10/7   下午2:56
     */
    public function getDriverByType($type)
    {
        $platform_type_list = event('CpsPlatformType')[0];
        $flattened_list = array_merge(...$platform_type_list);
        foreach ($flattened_list as $k => $item) {
            if ($item['type'] == $type) {
                $item['driver'] = $k;
                return $item;
            }
        }
        return null;
    }

    /**
     * @Notes:初始站点site_key
     * @Interface setSiteKey
     * @author: TK
     * @Time: 2024/9/20   上午8:47
     */
    public function setSiteKey()
    {
        $siteModel = new Site();
        $siteInfo = $siteModel->where(['site_id' => $this->site_id])->findOrEmpty();
        if ($siteInfo->isEmpty()) {
            $info = (new CoreConfigService())->getConfig($this->site_id, ConfigDict::getType());
            if (empty($info)) {
                $info['value']['site_key'] = '';
            }
            if ($info['value']['site_key'] == '') {
                $site_key = substr(md5(time() . rand(1, 1000)), 3, 6);
            }
            if ($info['value']['site_key'] != '') {
                $site_key = $info['value']['site_key'];
            }
            $siteModel->create(['site_id' => $this->site_id, 'site_key' => $site_key]);
            (new CoreConfigService())->setConfig($this->site_id, ConfigDict::getType(), ['site_key' => $site_key]);
            Cache::set('site_key_' . $this->site_id, $site_key);
        }
    }

    public function getSiteKey($site_id)
    {
        $site_key = Cache::get('site_key_' . $site_id);
        if ($site_key) {
            return $site_key;
        } else {
            $siteModel = new Site();
            $siteInfo = $siteModel->where(['site_id' => $site_id])->findOrEmpty();
            if ($siteInfo->isEmpty()) {
                throw new CommonException('站点KEY不存在');
            }
            $site_key = $siteInfo['site_key'];
            Cache::set('site_key_' . $site_id, $site_key);
            return $site_key;
        }
    }

    /**
     * @Notes:获取url
     * @Interface getUrl
     * @return string
     * @author: TK
     * @Time: 2024/9/20   上午8:47
     */
    public function getUrl($site_id)
    {
        $wap_url = (new CoreSysConfigService())->getSceneDomain($site_id)['wap_url'];
        return $wap_url;
    }

    /**
     * @Notes:获取字典名称
     * @Interface getDictName
     * @param $key
     * @param $value
     * @return mixed|string|void
     * @author: TK
     * @Time: 2024/9/20   上午8:47
     */
    public function getDictName($key, $value)
    {
        $field = 'id,name,key,dictionary,memo,create_time,update_time';
        $this->model = new Dict();
        $info = $this->model->field($field)->where([['key', '=', $key]])->findOrEmpty()->toArray();

        if ($info['dictionary'] == null) {
            return '';
        }
        foreach ($info['dictionary'] as $k => $v) {
            if ($v['value'] == $value) {
                return $v['name'];
            }
        }
    }

    /**
     * @Notes:将JSON文件转换为数组
     * @Interface jsonFileToArray
     * @param string $json_file_path
     * @return mixed|string[]
     * @author: TK
     * @Time: 2024/9/20   上午8:48
     */
    public function jsonFileToArray(string $json_file_path)
    {
        if (file_exists($json_file_path)) {
            $content_json = @file_get_contents($json_file_path);
            return json_decode($content_json, true);
        } else
            return ["msg" => "文件不存在"];
    }

    /**
     * @Notes:将数组写入json文件
     * @Interface writeArrayToJsonFile
     * @param array $content
     * @param string $file_path
     * @return true
     * @author: TK
     * @Time: 2024/9/20   上午8:48
     */
    public function writeArrayToJsonFile(array $content, string $file_path)
    {
        $content_json = json_encode($content, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $result = @file_put_contents($file_path, $content_json);
        if (!$result) {
            throw new CommonException($file_path . '文件不存在或者权限不足');
        }
        return true;
    }

    /**
     * @Notes:GET 方法封装
     * @Interface http_get
     * @param $url
     * @param $data
     * @param $headers
     * @return mixed
     * @author: TK
     * @Time: 2024/9/20   上午8:49
     */
    public function http_get($url, $data = null, $headers = false)
    {
        if (!empty($data)) {
            $url = $url . '?' . http_build_query($data);
        }
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $output = curl_exec($curl);
        curl_close($curl);
        return json_decode($output, true);
    }

    /**
     * @Notes:POST 方法封装
     * @Interface http_post
     * @param $url
     * @param $data
     * @param $headers
     * @return mixed
     * @throws Exception
     * @author: TK
     * @Time: 2024/9/20   上午8:49
     */
    public function http_post($url, $data = null, $headers = false)
    {
        $curl = curl_init();
        //设置header头
        if ($headers !== false) curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_URL, $url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);

        if (!empty($data)) {
            curl_setopt($curl, CURLOPT_POST, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        }
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        $result = curl_exec($curl);
        $err = curl_error($curl);
        curl_close($curl);
        if ($err) {
            throw new Exception($err);
        } else {
            return json_decode($result, true);
        }
    }
}