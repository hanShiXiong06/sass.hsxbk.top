<?php
declare (strict_types=1);

namespace addon\tk_notice\app\listener\notice_template;

use app\listener\notice_template\BaseNoticeTemplate;

/**
 * 订单支付通知
 */
class CommonNotice extends BaseNoticeTemplate
{
    private $key = 'tk_notice_notice';

    public function handle(array $params)
    {
        if ($this->key == $params['key']) {
            return $this->toReturn(
                [
                    'body' => $params['data']['body'],
                ],
                [
                    'mobile' => $params['data']['mobile'],
                ]
            );

        }
    }
}
