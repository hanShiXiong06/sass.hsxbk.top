<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_pan\app\service\admin;

use addon\tk_pan\Addon;
use app\dict\sys\FileDict;
use addon\tk_pan\app\dict\storage\StorageDict;
use app\model\sys\SysUserRole;
use app\service\core\upload\CoreStorageService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use Exception;
use think\facade\Cache;
use core\upload\Ott;
use think\Response;

/**
 * 用户服务层
 * Class BaseService
 * @package app\service
 */
class StorageConfigService extends BaseAdminService
{

    public function __construct()
    {
        parent::__construct();
    }
    public function addDriver()
    {
        $roleInfo=(new SysUserRole())->where(['uid'=>$this->uid,'site_id'=>0])->findOrEmpty();
        if($roleInfo->isEmpty()) throw new Exception('仅站点管理员可操作');
        (new Addon())->install();
        return true;
    }
    /**
     * 获取云存储列表
     * @return array
     */
    public function getStorageList()
    {
        return (new CoreStorageService())->getStorageList($this->site_id);
    }

    /**
     * 获取存储配置
     * @param string $storage_type
     * @return array
     */
    public function getStorageConfig(string $storage_type)
    {
        $storage_type_list = StorageDict::getType();
        if(!array_key_exists($storage_type, $storage_type_list)) throw new AdminException('OSS_TYPE_NOT_EXIST');
        $info = (new CoreConfigService())->getConfig($this->site_id, 'STORAGE');
        if(empty($info))
        {
            $config_type = ['default' => StorageDict::LOCAL];//初始化
        }else
            $config_type = $info['value'];

        $data = [
            'storage_type' => $storage_type,
            'is_use' => $storage_type == $config_type['default'] ? StorageDict::ON : StorageDict::OFF,
            'name'   => $storage_type_list[$storage_type]['name'],
        ];
        foreach ($storage_type_list[$storage_type]['params'] as $k_param => $v_param)
        {
            $data['params'][$k_param] = [
                'name' => $v_param,
                'value' => $config_type[$storage_type][$k_param] ?? ''
            ];
        }
        return $data;

    }

    /**
     * 云存储配置
     * @param string $storage_type
     * @param array $data
     * @return bool
     */
    public function setStorageConfig(string $storage_type, array $data)
    {
        $storage_type_list = StorageDict::getType();
        if(!array_key_exists($storage_type, $storage_type_list)) throw new AdminException('OSS_TYPE_NOT_EXIST');
//        if($storage_type != FileDict::LOCAL){
//            $domain = $data['domain'];
//            if (!str_contains($domain, 'http://') && !str_contains($domain, 'https://')){
//                throw new AdminException('STORAGE_NOT_HAS_HTTP_OR_HTTPS');
//            }
//        }
        $info = (new CoreConfigService())->getConfig($this->site_id, 'STORAGE');
        if(empty($info))
        {
            $config['default'] = '';

        }else{
            $config = $info['value'];
        }
        //初始化数据
        if($data['is_use'])
        {
            $config['default'] = $storage_type;
        }else{
            $config['default'] = '';
        }
        foreach ($storage_type_list[$storage_type]['params'] as $k_param => $v_param)
        {
            $config[$storage_type][$k_param] = $data[$k_param] ?? '';
        }

        return (new CoreConfigService())->setConfig($this->site_id, 'STORAGE', $config);
    }



}
