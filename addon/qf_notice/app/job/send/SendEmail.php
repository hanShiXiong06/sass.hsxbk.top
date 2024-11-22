<?php

namespace addon\qf_notice\app\job\send;

use addon\qf_notice\app\service\core\common\EmailService;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 发送邮件
 */
class SendEmail extends BaseJob
{
    /**
     * 消费
     * @param $data
     * @return true
     */
    public function doJob($config, $content, $email)
    {
        try {
            (new EmailService())->sendMsg($config, $content, $email);
            return true;
        } catch (\Exception $e) {
            Log::write('---邮件发送 ---错误' . date('Y-m-d H:i:s'));
            Log::write($e);
            return true;
        }
    }

}
