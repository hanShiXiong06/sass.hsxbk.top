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

namespace addon\tk_jhkd\app\service\core;
use app\model\dict\Dict;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\CommonException;

/**
 * 聚合快递公共服务层
 * Class CommonService
 * @package addon\tk_jhkd\service\core\common
 */
class CommonService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
    }
    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, 'TK_JHKD_CONFIG');
        if (empty($info)) {
            $info['value']['is_webhook'] = '0';
        }
        return $info['value'];
    }
    /**
     * 移动文件
     * 初始admin打包移动文件，uni-app-cli框架构建
     */
    public function moveFile()
    {
        $basedir = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_jhkd' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR;
        $from_admin_dir = $basedir . "admin";
        // 放入的文件
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR;
        $to_admin_dir = $rootpath . "admin";
        // 移动admin迁移文件
        if (file_exists($from_admin_dir)) {
            dir_copy($from_admin_dir, $to_admin_dir);
        }
        return true;
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

}