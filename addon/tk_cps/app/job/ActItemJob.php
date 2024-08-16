<?php
namespace addon\tk_cps\app\job;
use core\base\BaseJob;
use addon\tk_cps\app\service\admin\act\ActService;
use think\facade\Log;

/**
 * 调用订单催付通知
 */
class ActItemJob extends BaseJob
{
    /**
     * 消费
     * @param $data
     * @return true
     */
    protected function doJob($site_id,$type,$act_id)
    {
        Log::write('$site_id'.$type.$act_id.'参数');
        try {
            (new ActService())->asyncCpsItemJob($site_id,$type,$act_id);
            return true;
        } catch (\Exception $e) {
            Log::write('同步活动错误');
            Log::write($e);
            return true;
        }
    }

}
