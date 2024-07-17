<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\tk_cps\app\job\send;
use core\base\BaseJob;
use addon\tk_cps\app\service\core\send\SendService;

class SendCpsAward extends BaseJob
{
    public function doJob($data)
    {
        try {
            (new SendService())->sendEvent($data);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
