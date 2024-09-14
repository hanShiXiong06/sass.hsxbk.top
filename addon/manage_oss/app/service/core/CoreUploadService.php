<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/8/21
 * 时间: 下午12:39
 */


namespace addon\manage_oss\app\service\core;

use app\service\core\upload\CoreStorageService;
use core\exception\UploadFileException;
use core\upload\BaseUpload;
use core\upload\UploadLoader;
use DateTime;
use DateTimeZone;
use Exception;
use think\facade\Cache;


/**
 * 123盘存储引擎
 */
class CoreUploadService  extends BaseUpload
{


    public function driver(int $site_id, string $storage_type = '')
    {
        if (!empty($storage_type)) {
            $core_storage_service = new CoreStorageService();
            $storage_config = $core_storage_service->getStorageByType($site_id, $storage_type);
        } else {
            $core_storage_service = new CoreStorageService();
            $storage_config = $core_storage_service->getDefaultStorage($site_id);
            if (empty($storage_config)) throw new UploadFileException('UPLOAD_STORAGE_TYPE_ALL_CLOSE');
            $storage_type = $storage_config['storage_type'];
        }
        $storage_config = $storage_config ?? [];
        $storage_config['storage_type'] = $storage_type;
        //查询启用的上传方式
        return new UploadLoader($storage_type, $storage_config ?? []);
    }

    /**
     * @throws Exception
     */
    public function upload(string $dir)
    {
        $this->driver(0)->upload($dir);
        return true;
    }

    /**
     * 抓取网络资源到空间
     * @param string $url
     * @param string|null $key
     * @return true
     * @throws Exception
     */
    public function fetch(string $url, ?string $key = null)
    {
        $this->driver(0)->fetch($url, $key);
        return true;
    }

    /**
     * base64资源上传
     * @param string $base64_data
     * @param string|null $key
     * @return true
     */
    public function base64(string $base64_data, ?string $key = null)
    {
        return $this->driver(0)->base64($base64_data, $key);
    }

    /**
     * 删除空间中的文件
     * @param string $file_name
     * @return true
     */
    public function delete(string $file_name)
    {
        return $this->driver(0)->delete($file_name);
    }

    public function thumb($file_path, $thumb_type)
    {
        return $this->driver(0)->thumb($file_path, $thumb_type);
    }


    /**
     * 图片水印
     * @param $file_path
     * @return mixed
     * @throws Exception
     */
    public function water($file_path)
    {
        return $this->driver(0)->water($file_path);
    }


}
