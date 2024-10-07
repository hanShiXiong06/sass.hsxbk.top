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

namespace addon\hsx_yinsheng_pay\app\listener;

/**
 * 支付关闭回调事件
 */
class PayClose
{

    // todo 
    public function handle(array $params)
    {
        $out_trade_no = $params['out_trade_no'] ?? '';
        $trade_type = $params['trade_type'] ?? '';
        $site_id = $params['site_id'] ?? '';
        $trade_id = $params['trade_id'] ?? '';
        return true;
    }

}