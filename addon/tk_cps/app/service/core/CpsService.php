<?php

namespace addon\tk_cps\app\service\core;

use addon\tk_cps\app\dict\config\ConfigDict;
use core\base\BaseApiService;

class CpsService extends BaseApiService
{
    protected $fromPath;
    protected $toPath;

    public function __construct()
    {
        parent::__construct();
        $this->fromPath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'niucloud' . DIRECTORY_SEPARATOR . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR . 'uni-app-plugins.json';
        $this->toPath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'pages.json';
        $this->commonService = new CommonService();
    }
    //页面链接
    public function wapDomain()
    {
        $wap_domain = !empty(env("system.wap_domain")) ? preg_replace('#/$#', '', env("system.wap_domain")) : request()->domain();
        return $wap_domain.'/wap/'.$this->site_id;
    }
    //获取页面二维码
    public function pageCode($type)
    {
        $code='';
       return $code;
    }
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
    //修改聚推客pubid
    public function editPubId($value)
    {
        //修改链接里面pub_id  26
        $pub_id = (new ConfigService())->getPubID() ?? '161325';
        $value = str_replace('pub_id=26', 'pub_id=' . $pub_id, $value);
        //修改跟单参数  sid=cps
        $sid=$this->site_id??md5(time());
        $value = str_replace('sid=cps', 'sid=' . $sid, $value);
        return $value;
    }
    //安装pages.json插件
    public function installPlugins()
    {
        $pluginsContent = @file_get_contents($this->fromPath);
        $content = @file_get_contents($this->toPath);
        // 使用 strpos() 函数查找字符串
        if (strpos($content, '"plugins"') !== false) {
            $pattern = '/"plugins":(.*?)"globalStyle":/s';
            preg_match($pattern, $content, $matches);
            $pluginsJson = $matches[1];
            $modifiedContent = str_replace($pluginsJson, $pluginsContent . ',', $content);
            file_put_contents($this->toPath, $modifiedContent);
        } else {
            $modifiedContent = str_replace('"globalStyle"', '"plugins":' . $pluginsContent . ',' . '"globalStyle"', $content);
            file_put_contents($this->toPath, $modifiedContent);
        }
        return true;
    }

    //卸载pages.json插件  plugins
    public function uninstallPlugins()
    {
        $content = @file_get_contents($this->toPath);
        // 使用 strpos() 函数查找字符串
        if (strpos($content, '"plugins"') !== false) {
            $pattern = '/"plugins":(.*?)"globalStyle":/s';
            preg_match($pattern, $content, $matches);
            $pluginsJson = $matches[1];
            $modifiedContent = str_replace($pluginsJson, '', $content);
            $modifiedContent = str_replace('"plugins":', '', $modifiedContent);
            file_put_contents($this->toPath, $modifiedContent);
        }
        return true;
    }
}