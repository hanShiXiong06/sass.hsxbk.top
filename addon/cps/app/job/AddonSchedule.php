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

namespace addon\cps\app\job;

use core\base\BaseJob;
use think\facade\Log;

/**
 * 插件计划任务
 */
class AddonSchedule extends BaseJob
{
    public function doJob()
    {
        Log::write('插件计划任务,执行时间:'.date('Y-m-d h:i:s'));
        return true;
    }
}
