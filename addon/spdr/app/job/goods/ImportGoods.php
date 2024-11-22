<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\spdr\app\job\goods;

use core\base\BaseJob;
use think\facade\Log;
use addon\spdr\app\service\admin\GoodsService;
/**
 * 导入商品
 */
class ImportGoods extends BaseJob
{
    /**
     * 消费
     * @return true
     */
    public function doJob($site_id,$info,$islocal)
    {
        try {
            Log::write('---触发了商品导入事件--'.date('Y-m-d H:i:s', time()));
            (new GoodsService())->asyncGoods($site_id,$info,$islocal);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
