<?php

namespace addon\tk_cps\app\upgrade\v200;

use addon\tk_cps\app\dict\config\ConfigDict;
use addon\tk_cps\app\dict\config\PlatformDict;
use addon\tk_cps\app\job\AddonUpgrade;
use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\site\Site;
use app\service\core\sys\CoreConfigService;
use core\exception\AdminException;

class Upgrade
{
    public function handle()
    {
        //已存在站点的驱动数据进行自动设置
        AddonUpgrade::dispatch([],secs:3);
        $this->setDriver();
        return true;
    }
    public function setDriver()
    {
        $page = 1;
        while (true) {
            $currentPageSites = (new Site())->paginate([
                'list_rows' => 10,
                'page' => $page,
            ]);
            if (empty($currentPageSites)) {
                break;
            }
            foreach ($currentPageSites as $k => $v) {
                $site_id = $v['site_id'];
                $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getType());
                if (!empty($info)) {
                    $value = $info['value'];
                    if(!empty($value)){
                        $this->setConfig(0, [
                            'is_use' => 1,
                            'pub_id' => $value['pub_id']??'',
                            'api_key' => $value['api_key']??'',
                            'site_id' => $site_id,
                            'type' => 0
                        ], $site_id);
                        $this->setConfig(1, [
                            'is_use' => 1,
                            'secret' => $value['secret']??'',
                            'api_key' => $value['mapi_key']??'',
                            'site_id' => $site_id,
                            'type' => 1
                        ], $site_id);
                    }
                }
            }
            if (count($currentPageSites) < 10) {
                break;
            }
            $page++;
        }
    }
    public function setConfig(string $type, array $data,$site_id)
    {
        $platform_type_list = event('CpsPlatformType')[0];
        $list1=[];
        foreach ($platform_type_list as $k => $v){
            foreach ($v as $k1=>$v1){
                $list1[$v1['type']][]=$v1;
            }
        }
        $platform_type_list=$list1;
        if(!array_key_exists($type, $platform_type_list)) throw new AdminException('PLATFORM_TYPE_NOT_EXIST');
        $info = (new CoreConfigService())->getConfig($site_id, PlatformDict::getType());
        if(empty($info))
        {
            $config = [];

        }else{
            $config = $info['value'];
        }
        foreach ($platform_type_list[$type][0]['params'] as $k_param => $v_param)
        {
            $config[$type][$k_param] = $data[$k_param] ?? '';
            if($config[$type]['is_use'] == 0 ){
                //删除活动
                (new Act())->where(['type' =>$type])->delete();
            }
        }
        return (new CoreConfigService())->setConfig($site_id, PlatformDict::getType(), $config);
    }
}

