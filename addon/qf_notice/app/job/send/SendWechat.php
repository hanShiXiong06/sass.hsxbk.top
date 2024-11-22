<?php

namespace addon\qf_notice\app\job\send;

use addon\card\app\job\async\GoodsItemJob;
use addon\card\app\model\goods\Goods;
use addon\card\app\model\group\Group;
use addon\card\app\service\core\RequestService;
use addon\qf_notice\app\service\core\send\Wechat;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 同步商品
 */
class SendWechat extends BaseJob
{
    /**
     * 消费
     * @param $data
     * @return true
     */
    public function doJob($site_id,$data)
    {
        try
        {
            (new Wechat($site_id))->send($data);
            return true;
        } catch (\Exception $e) {
            Log::write('---wecchat消息发送 ---错误' . date('Y-m-d H:i:s'));
            Log::write($e);
            return true;
        }
    }

}
