<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_yht\app\job;

use core\base\BaseJob;
use think\facade\Log;
use addon\tk_yht\Addon;
/**
 * 修复更新后文件修改失效问题
 */
class AddonUpgrade extends BaseJob
{
    public function doJob()
    {
        (new Addon())->upgrade();
        return true;
    }
}
