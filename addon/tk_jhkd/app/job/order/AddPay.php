<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\tk_jhkd\app\job\order;

use addon\tk_jhkd\app\dict\order\JhkdOrderAddDict;
use addon\tk_jhkd\app\job\notice\Webhook;
use addon\tk_jhkd\app\service\core\CommonService;
use addon\tk_jhkd\app\service\core\OrderLogService;
use app\service\core\notice\NoticeService;
use core\base\BaseJob;
use addon\tk_jhkd\app\model\order\Order;
use addon\tk_jhkd\app\model\order\OrderAdd;
/**
 * 订单催收
 */
class AddPay extends BaseJob
{
    /**
     * 消费
     * @return true
     */
    public function doJob()
    {
        try {
            $orderModel= new OrderAdd();
            $list = $orderModel->where([
                ['order_status', '=', JhkdOrderAddDict::WAIT_PAY],
//                ['create_time', '<=', time()-60]
            ])->select();
            if(!$list->isEmpty()){
                foreach($list as $v){
                    $data['order_id'] = $v['order_id'];
                    $data['site_id'] = $v['site_id'];
                    (new NoticeService())->send($data['site_id'], 'tk_jhkd_order_add', ['order_id' => $data['order_id']]);
                    $config=(new CommonService())->getConfig($data['site_id']);
                    $text = '补差价订单号：'.$data['order_id'].',待补差价金额：'.$v['order_money'].'元，请及时催顾客付款';
                    Webhook::dispatch(['config' => $config, 'text' => $text]);
                }
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
