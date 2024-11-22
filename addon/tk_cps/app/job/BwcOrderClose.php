<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job;

use core\base\BaseJob;
use addon\tk_cps\app\model\bwcorder\BwcOrder;
use addon\tk_cps\app\service\core\BwcService;
/**
 * 霸王餐订单关闭
 */
class BwcOrderClose extends BaseJob
{
    public function doJob()
    {
        try {
            $orderModel= new BwcOrder();
            $list = $orderModel->where([
                ['state', '=', 3],
                ['create_time', '<=', time()-60*60]
            ])->select();
            if(!$list->isEmpty()){
                foreach($list as $v){
                    $data['id'] = $v['id'];
                    $data['site_id'] = $v['site_id'];
                    $orderModel->where($data)->update(
                        [
                            'state'=>2,
                            'close_time'=>time(),
                            'reason'=>'订单超时关闭'
                        ]);
                    //取消联盟报名 不做取消失败处理
                    (new BwcService())->execute('bwc/union/cancelevent', [
                        'orderSn'=>$data['orderSn'],
                        'telephone'=>$data['orderTelephone']
                    ]);
                }
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
