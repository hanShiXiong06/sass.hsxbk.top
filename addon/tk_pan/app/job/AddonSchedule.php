<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_pan\app\job;

use core\base\BaseJob;
use think\facade\Log;

/**
 * 插件计划任务
 */
class AddonSchedule extends BaseJob
{
    public function doJob()
    {
        return true;
    }
}
