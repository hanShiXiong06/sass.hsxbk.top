<?php
namespace addon\tk_cps\app\service\core;
use app\model\dict\Dict;
use core\base\BaseAdminService;
use core\exception\CommonException;

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
    //获取url
    public function getUrl(){
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $domain = $_SERVER['HTTP_HOST'];
        if ($isSecure) {
            $url = 'https://' . $domain;
        } else {
            $url = 'http://' . $domain;
        }
        return $url;
    }
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
     * 读取json文件转化成数组返回
     * @param $json_file_path //json文件目录
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
     * 读取json文件转化成数组返回
     * @param $json_file_path //json文件目录
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
}