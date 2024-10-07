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
use addon\hsx_yinsheng_pay\app\service\core\CoreOrderService;

/**
 * 支付异步回调事件
 */
class PaySuccess
{

    // todo 
    public function handle(array $params)
    {

        $out_trade_no = $params['out_trade_no'] ?? '';
        $trade_type = $params['trade_type'] ?? '';
        $site_id = $params['site_id'] ?? '';
        $trade_id = $params['trade_id'] ?? '';
   
        if ($trade_type == 'yinshengpay') {

            (new CoreOrderService())->pay($params);

        }
        return true;
    }


}