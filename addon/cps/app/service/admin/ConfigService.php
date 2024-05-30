<?php
 
namespace addon\cps\app\service\admin;

use addon\cps\app\service\admin\SiteService;
use addon\cps\app\service\admin\OrderService;
use core\base\BaseAdminService;
use core\exception\AdminException;
 
/**
 * 配置服务层
 * Class ConfigService
 * @package app\service\core\sys
 */
class ConfigService extends BaseAdminService
{

 
    public function __construct()
    {
        parent::__construct(); 
    }

  
    /**
     * 获取网站信息
     * @return mixed
     */
    public function getConfig()
    { 
        (new OrderService())->shouquan();
 		if(!(new SiteService())->getInfo($this->site_id)){ 
			(new SiteService())->add(['site_id'=>$this->site_id]);
		}
        return (new SiteService())->getInfo($this->site_id);

    }
    /**
     * 设置网站信息
     * @return bool
     */
    public function setConfig($data)
    {

        (new OrderService())->shouquan();
        return (new SiteService())->edit($this->site_id, $data);

    }
	
// 	/**
//      * 获取网站信息
//      * @return mixed
//      */
//     public function getSetting()
//     {
//  		if(!(new SiteService())->getInfo($this->site_id)){ 
// 			(new SiteService())->add(['site_id'=>$this->site_id]);
// 		}
//         return (new SiteService())->getInfo($this->site_id);

//     }
//     /**
//      * 设置网站信息
//      * @return bool
//      */
//     public function setSetting($data)
//     {

//         return (new SiteService())->edit($this->site_id, $data);

//     }
	
	
   
}