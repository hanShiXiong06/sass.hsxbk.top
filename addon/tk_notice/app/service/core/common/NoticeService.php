<?php

namespace addon\tk_notice\app\service\core\common;
use think\facade\Cache;

class NoticeService
{

    public function __construct()
    {

    }

    public function sendMsg($site_id, $text, $key='')
    {
        $config = (new CommonService())->getConfig($site_id);
        if ($config['is_webhook'] == 1) {
            (new WebhookService())->sendMsg($config, $text, $site_id.'_'.$key.'_tk_webhook');
        }
        if ($config['is_email'] == 1) {
            (new EmailService())->sendMsg($config, $text,$config['email_to'], $site_id.'_'.$key.'_tk_email');
        }
        if ($config['is_mobile'] == 1) {
            if ($config['mobile_min'] == '') {
                $config['mobile_min'] = 0;
            }
            $key=$site_id.'_'.$key.'_tk_mobile';
            if (!Cache::get($key)) {
                //进行短信发送预留  固定的模板
                (new \app\service\core\notice\NoticeService())->send($site_id, 'tk_notice_notice', ['body' => $text, 'mobile' => $config['mobile']]);
                Cache::set($key, 60 * $config['mobile_min'] ?? '');
            }
        }
    }
}