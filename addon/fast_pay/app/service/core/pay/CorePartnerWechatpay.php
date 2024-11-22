<?php

namespace addon\fast_pay\app\service\core\pay;

use addon\fast_pay\app\service\core\partner\CorePayEventService;
use addon\fast_pay\app\service\core\partner\CorePayService;
use addon\fast_pay\app\service\core\partner\CoreRefundService;
use app\model\pay\Refund;
use core\base\BaseCoreService;
use Exception;
use think\facade\Log;
use app\model\pay\Pay;
class CorePartnerWechatpay extends BaseCoreService {

    /**
     * 支付
     * @param $params
     * @return void
     */
    public function pay($params) {
        $out_trade_no = $params[ 'out_trade_no' ];//交易流水号
        $site_id = $params[ 'site_id' ];
        $payInfo=(new Pay)->where(['out_trade_no'=>$out_trade_no,'site_id'=>$site_id])->findOrEmpty();
        if($payInfo->isEmpty()){
            throw new \Exception('支付单据不存在');
        }
        return ['url' => '/addon/fast_pay/pages/partner/index', 'param' => [
            'out_trade_no' => $out_trade_no,
            'trade_type' => $payInfo[ 'trade_type' ],
            'trade_id'=>$payInfo[ 'trade_id' ],
        ]];
    }

    /**
     * 关闭支付
     * @return true
     */
    public function close($params) {
        (new CorePayService())->close( $params['out_trade_no']);
        return  true;
    }

    /**
     * @Notes:
     * @Interface refund
     * @param $params  site_id  out_trade_no  money  total  refund_no  voucher *
     * @return true
     * @author: TK
     * @Time: 2024/8/7   下午11:53
     */
    public function refund($params)
    {
        return (new CoreRefundService())->refund($params['site_id'],$params['refund_no'], $params['voucher']);
    }

    /**
     * @Notes:交易单号查询退款
     * @Interface getRefund
     * @param $out_trade_no
     * @author: TK
     * @Time: 2024/8/7   下午11:54
     */
    public function getRefund($out_trade_no)
    {
        $refund_info=(new Refund())->where(['out_trade_no'=>$out_trade_no,])->findOrEmpty();
        if($refund_info->isEmpty()) throw new Exception('未找到退款单据');
        return (new CoreRefundService())->check($refund_info['site_id'],$refund_info);
    }
}
