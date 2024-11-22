<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\tk_notice\app\job\notice;

use addon\tk_notice\app\service\core\common\NoticeService;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 通知封装
 */
class Notice extends BaseJob
{
    /**
     * @Notes:封装消息通知
     * @Interface doJob
     * @param $site_id
     * @param $text
     * @return bool
     * @author: TK
     * @Time: 2024/6/25   上午9:09
     */
    public function doJob($site_id,$text,$key)
    {
        try {
            Log::write('---TK-消息通知封装执行--'.date('Y-m-d H:i:s', time()));
            (new NoticeService())->sendMsg($site_id,$text,$key);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
