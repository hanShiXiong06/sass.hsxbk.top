<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\tk_cps\app\job\order;

use core\base\BaseJob;
use addon\tk_cps\app\service\core\OrderService;
use think\facade\Log;

class MyxqOtherOrder extends BaseJob
{
    public function doJob($site_id,$config,$type)
    {
        try {
            Log::write("蚂蚁星球推广订单同步开始".date("Y-m-d H:i:s"));
            (new OrderService())->myxqOtherOrder($site_id,$config,$type);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
