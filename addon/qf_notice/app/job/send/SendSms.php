<?php

namespace addon\qf_notice\app\job\send;

use addon\qf_notice\app\service\core\send\Sms;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 发送短信
 */
class SendSms extends BaseJob
{
    /**
     * 消费
     * @param $data
     * @return true
     */
    public function doJob($site_id, $data)
    {
        try
        {
            (new Sms())->send($site_id,$data);
            return true;
        } catch (\Exception $e) {
            Log::write('---sms 消息发送 ---错误' . date('Y-m-d H:i:s'));
            Log::write($e);
            return true;
        }
    }


}
