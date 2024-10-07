<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job;

use addon\tk_cps\app\dict\config\ConfigDict;
use addon\tk_cps\app\job\order\JtkOrder;
use addon\tk_cps\app\job\order\MyxqDcOrder;
use addon\tk_cps\app\job\order\MyxqMovieOrder;
use addon\tk_cps\app\job\order\MyxqNearOrder;
use addon\tk_cps\app\job\order\MyxqOtherOrder;
use addon\tk_cps\app\job\order\MyxqRechaegeOrder;
use addon\tk_cps\app\model\site\Site;
use addon\tk_cps\app\service\core\BwcService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseJob;
use think\facade\Cache;
use think\facade\Log;

/**
 * 定时任务同步订单状态
 */
class BwcOrder extends BaseJob
{
    public function doJob($site_id,$mini=60*24-3)
    {
        Log::write("霸王单同步任务执行".date("Y-m-d H:i:s"));
        try {
            //进行频率限制
            if(!Cache::get('tk_cps_bwc_'.$site_id)){
                (new BwcService())->cronOrder($site_id,$mini);
                Cache::set('tk_cps_bwc_'.$site_id, '已经执行过进行缓存', 60*60*24-180);
            }
            return true;
        } catch (\Exception $e) {
            Log::write("霸王单同步任务失败".date("Y-m-d H:i:s"));
            Log::write($e->getMessage());
            return false;
        }
    }

}
