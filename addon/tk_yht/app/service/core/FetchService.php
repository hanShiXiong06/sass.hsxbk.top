<?php

namespace addon\tk_yht\app\service\core;

use app\service\core\sys\CoreAttachmentService;
use app\service\core\upload\CoreFileService;
use core\exception\UploadFileException;
use Exception;
use think\facade\Log;
use core\upload\Local;
/**
 * 上传服务层
 * Class CoreFetchService
 * @package app\service\core\file
 */
class FetchService extends CoreFileService
{

    public function __construct($is_attachment = false)
    {
        parent::__construct($is_attachment);
    }

    /**
     * 图片上传
     * @param string $url
     * @param int $site_id
     * @param string $file_dir
     * @return array
     * @throws Exception
     */
    public function image(string $url, int $site_id, string $file_dir)
    {
        if(empty($url)) throw new UploadFileException('OSS_FILE_URL_NOT_EXIST');
        $urlStatus=$this->checkImageLink($url);
        if($urlStatus==false){
            return [
                'url' => $url
            ];
        }
        $this->upload_driver = $this->driver($site_id);
        $pathInfo = pathinfo($url);
        $headers = get_headers($url, true);
        $size = $headers['Content-Length'];
        $ext = isset($pathInfo['extension']) ? $pathInfo['extension'] : 'jpg';
        $link = str_replace(".".$ext, "", $url);
        $file_path = $this->upload_driver->createFileName($link, $ext);

        $dir = $this->root_path .'/'.  $file_dir.'/'.$file_path;
        //本地驱动拦截
        if(self::$storage_type=='local'||self::$storage_type=='') {
            $result = $this->fetch($url, $dir);
        } else {
            $result = $this->upload_driver->fetch($url, $dir);
        }
        //读取上传附件的信息用于后续得校验和数据写入
        if($result){
            if (self::$storage_type=='ott'){
                $url=$this->upload_driver->getUrl().$file_path;
            }else{
                $url=$this->upload_driver->getUrl($dir);
            }
            $core_attachment_service = new CoreAttachmentService();
            //将数据写入附件表中
            $data = array(
                'name' => $file_path,
                'dir' => $this->root_path .'/'.  $file_dir,
                'att_type' => 'image',
                'real_name' => $file_path,//附件原名可能过长
                'att_size' => $size,
                'storage_type' => self::$storage_type,
                'path' => $dir,
                'url' => $url,
                'cate_id' => '',
            );
            $att_id = $core_attachment_service->add($site_id, $data);
            return [
                'url' => $url
            ];
        }
        else{
            throw new UploadFileException($result);
        }

    }
    public function fetch(string $url, ?string $key)
    {
        try {
            if (file_exists($key)) {
                return true; // 文件已存在，无需重复保存
            }
            $directory = dirname($key);
            if (!is_dir($directory)) {
                mkdir($directory, 0775, true);
            }
            $content = @file_get_contents($url);
            if (!empty($content)) {
                file_put_contents($key, $content);
                return true;
            } else {
                throw new UploadFileException(203006);
            }
        } catch (Exception $e) {
            throw new UploadFileException($e->getMessage());
        }
    }
    public function checkImageLink($url)
    {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url); // 要检查的图片链接
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // 将响应数据作为字符串返回，而非直接输出
        curl_setopt($ch, CURLOPT_HEADER, false); // 不需要返回HTTP头信息
        curl_setopt($ch, CURLOPT_NOBODY, false); // 需要下载整个文件（包括正文），以便检查图片的有效性
        curl_setopt($ch, CURLOPT_FAILONERROR, true); // 如果HTTP响应码大于等于400，认为请求失败
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // 如果图片链接使用HTTPS，暂时禁用SSL证书验证（生产环境中应设置为true并妥善配置）
        $response = curl_exec($ch);
        $httpStatus = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        if ($httpStatus >= 400) {
            curl_close($ch);
            return false;
        }
        $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
        if (!str_starts_with($contentType, 'image/')) {
            curl_close($ch);
            return false;
        }
        curl_close($ch);
        return true;
    }
}