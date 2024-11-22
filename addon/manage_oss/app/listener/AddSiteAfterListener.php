<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------
namespace addon\manage_oss\app\listener;
use app\service\core\poster\CorePosterService;
use addon\manage_oss\app\model\manageoss\ManageOss;
use app\model\addon\Addon;
use app\service\core\sys\CoreConfigService;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        $site_id = $params[ 'site_id' ];
        request()->siteId($site_id);
       $addonInfo=(new Addon())->where(['key'=>'manage_oss'])->findOrEmpty();
       if($addonInfo->isEmpty()){
           return true;
       }else{
           $manage_oss_info=(new ManageOss())->where(['site_id'=>$site_id])->findOrEmpty();
           if($manage_oss_info->isEmpty()){
               (new ManageOss())->create([
                   'site_id'=>$site_id,
                   'value'=>json_encode(["qiniu","aliyun","tencent"]),
                   'size'=>0,
                   'use_size'=>0
               ]);
               //设置一个默认值
               (new CoreConfigService())->setConfig($site_id,'STORAGE', [
                   "default" =>"qiniu",
                   "qiniu" => [
                       "bucket" =>"8888",
                       "access_key" =>"8888",
                       "secret_key" =>"8888",
                       "domain" =>"https://domain"
                   ]
               ]);
           }
       }
       return true;
    }
}
