<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job;

use core\base\BaseJob;
use addon\tk_cps\app\service\core\BwcService;
/**
 * 霸王餐状态更新定时进行同步
 */
class BwcOrderAsync extends BaseJob
{
    public function doJob()
    {
        try {
            (new BwcService())->cronOrder();
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
