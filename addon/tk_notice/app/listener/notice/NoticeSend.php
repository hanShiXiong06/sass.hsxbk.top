<?php
declare (strict_types=1);

namespace addon\tk_notice\app\listener\notice;

use addon\tk_notice\app\job\notice\Notice;
use app\listener\notice_template\BaseNoticeTemplate;

/**
 * 通知事件封装
 */
class NoticeSend extends BaseNoticeTemplate
{
    public function handle(array $params)
    {
          Notice::dispatch(['site_id'=>$params['site_id'],'text'=>$params['text'],'key'=>$params['key']]);
          return true;
    }
}
