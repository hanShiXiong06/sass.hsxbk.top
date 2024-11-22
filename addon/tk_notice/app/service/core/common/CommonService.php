<?php

namespace addon\tk_notice\app\service\core\common;
use app\service\core\sys\CoreConfigService;
use addon\tk_notice\app\dict\config\ConfigDict;
/**
 * 提取一些公共的方法封装
 */
class CommonService
{

    /**
     * @Notes:获取配置信息
     * @Interface getConfig
     * @param $site_id
     * @return mixed
     * @author: TK
     * @Time: 2024/6/12   下午2:38
     */
    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getConfigType());
        if (empty($info)) {
            $info['value']['is_email'] = 0;
            $info['value']['is_mobile'] = 0;
            $info['value']['is_webhook'] = 0;
        }
        return $info['value'];
    }

}