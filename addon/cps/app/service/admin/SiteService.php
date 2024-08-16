<?php
 
namespace addon\cps\app\service\admin;

use app\dict\sys\AppTypeDict;
use addon\cps\app\model\Site; 
use core\base\BaseAdminService;
use core\exception\AdminException;
use Exception;
use think\facade\Cache;
use think\facade\Db;

/**
 * 站点服务层
 * Class Site
 * @package app\service\admin\site
 */
class SiteService extends BaseAdminService
{
    public static $cache_tag_name = 'site_cps';

    public function __construct()
    {
        parent::__construct();
        $this->model = new Site();
    } 
    
   
    /**
     * 站点信息
     * @param int $site_id
     * @return array
     */
    public function getInfo(int $site_id)
    {
        return $this->model->where([ [ 'site_id', '=', $site_id ] ])->findOrEmpty()->toArray();

    }

    /**
     * 添加站点(平台端添加站点，同时添加用户以及密码)
     * @param array $data
     * ['site_name' => '', 'username' => '', 'head_img' => '', 'real_name' => '', 'password' => '']
     *
     */
    public function add(array $data)
    {
        Db::startTrans();
        try {
            $site = $this->model->create($data);
            Db::commit();
            return $site;
        } catch (Exception $e) {
            Db::rollback();
            throw new Exception($e->getMessage());
        }
    }

    /**
     * 修改站点
     * @param int $site_id
     * @param array $data
     * @return bool
     */
    public function edit(int $site_id, array $data)
    {
        $this->model->update($data, [ [ 'site_id', '=', $site_id ] ]);
        Cache::tag(self::$cache_tag_name . $site_id)->clear();
        return true;
    }
 


     

}