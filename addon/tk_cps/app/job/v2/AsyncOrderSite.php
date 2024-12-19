<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job\v2;

use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\platform\PlatformLoader;
use core\base\BaseJob;

/**
 * 定时任务同步订单状态
 */
class AsyncOrderSite extends BaseJob
{
    public function doJob($site_id)
    {
        try {
            $drivers = (new CommonService())->getSiteDriver($site_id);
            foreach ($drivers as $k1 => $v1) {
                //框架0.5.4新增方法
                (new PlatformLoader($v1['driver'], $v1['params']))->asyncOrder(['type'=>1]);
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
