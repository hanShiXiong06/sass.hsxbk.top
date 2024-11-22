<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job\v2;
use addon\tk_cps\app\service\core\platform\PlatformLoader;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 定时任务同步订单状态
 */
class AsyncOrder extends BaseJob
{
    public function doJob($driver,$config,$type)
    {
        try {
            Log::write("===CPS活动订单同步开始===".date("Y-m-d H:i:s"));
            (new PlatformLoader($driver, $config))->asyncOrder(['type'=>$type]);
            return true;
        } catch (\Exception $e) {
            Log::write("===CPS活动订单同步失败===".date("Y-m-d H:i:s"));
            Log::write($e->getMessage());
            return false;
        }
    }
}
