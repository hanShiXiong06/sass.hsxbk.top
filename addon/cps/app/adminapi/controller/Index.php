<?php
// +----------------------------------------------------------------------
// | cps联盟
// +----------------------------------------------------------------------
// | 官方网址：https://xuanloo.com
// +----------------------------------------------------------------------
// | 河南省炫洛网络科技有限公司
// +----------------------------------------------------------------------
// | Author: 小洛
// +----------------------------------------------------------------------

namespace addon\cps\app\adminapi\controller;


use core\base\BaseAdminController;
use addon\cps\app\service\admin\ConfigService;

class Index extends BaseAdminController
{
   /**
    * 获取配置
    */
   public function getConfig()
   { 
      return success((new ConfigService())->getConfig());
   } 
   /**
     * 设置
     */
    public function setConfig()
    {
        $data = $this->request->params([
            ["my_uid",""],
            ["my_apikey",""],
            ["my_secret",""],
            ["jutuike_pub_id",""],
            ["jutuike_apikey",""]
        ]);
        // $this->validate($data, 'app\validate\site\Site.edit');
        (new ConfigService())->setConfig($data); 
        return success();
    }
   /**
    * 获取配置
    */
   public function getSetting()
   { 
      return success((new ConfigService())->getSetting());
   } 
   /**
     * 设置
     */
    public function setSetting()
    {
        $data = $this->request->params([
            ["auth_code",""]
        ]);
         (new ConfigService())->setSetting($data); 
        return success();
    }


}
