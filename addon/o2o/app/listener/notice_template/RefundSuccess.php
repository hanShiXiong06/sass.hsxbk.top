<?php

namespace addon\o2o\app\listener\notice_template;

use addon\o2o\app\model\OrderRefund;
use app\listener\notice_template\BaseNoticeTemplate;

class RefundSuccess extends BaseNoticeTemplate
{

    private $key = 'o2o_refund_success';

    public function handle(array $params)
    {
        if ($this->key == $params['key']) {
            $refund = (new OrderRefund())->where([['refund_id', '=', $params['data']['refund_id']]])->with(['main_order' => function ($query) {
                $query->field('order_id,order_name,order_no');
            }])->findOrEmpty();

            if (!$refund->isEmpty()) {
                return $this->toReturn(
                    [
                        '__wechat_page' => getWapDemain($refund['site_id']) . '/addon/pages/o2o/order/detail?order_id=' . $refund['main_order']['order_id'],//模板消息链接
                        '__weapp_page' => 'addon/pages/o2o/order/detail?order_id=' . $refund['main_order']['order_id'],//小程序链接
                        'goods_name' => $refund['main_order']['order_name'],
                        'order_no' => $refund['main_order']['order_no'],
                        'money' => $refund['money']
                    ],
                    [
                        'member_id' => $refund['member_id'],
                    ]
                );
            }
        }
    }
}