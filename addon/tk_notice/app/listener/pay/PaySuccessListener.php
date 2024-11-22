<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tk_notice\app\listener\pay;

use think\facade\Db;
use think\facade\Log;

/**
 * 支付异步回调事件
 */
class PaySuccessListener
{
    public function handle(array $pay_info)
    {
        $trade_type = $pay_info['trade_type'] ?? '';
        if ($trade_type == 'shop') {
            $orderInfo = Db::name('shop_order')->where(['order_id' =>$pay_info['trade_id']])->findOrEmpty();
            if (!empty($orderInfo)) {
                event('TkNoticeSend', ['site_id' => $orderInfo['site_id'], 'text' => '新的商城订单支付成功', 'key' => 'shop']);
            }
        }

    }
}