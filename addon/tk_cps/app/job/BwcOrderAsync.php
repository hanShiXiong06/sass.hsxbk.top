<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job;

use addon\tk_cps\app\model\site\Site;
use core\base\BaseJob;
use addon\tk_cps\app\service\core\BwcService;
use think\facade\Log;

/**
 * 霸王餐状态更新定时进行同步
 */
class BwcOrderAsync extends BaseJob
{
    public function doJob()
    {
        try {
            Log::write("霸王餐订单同步开始".date("Y-m-d H:i:s"));
            $page = 1;
            while (true) {
                $currentPageSites = (new Site())->paginate([
                    'list_rows' => 10,
                    'page' => $page,
                ]);
                if (empty($currentPageSites)) {
                    // 如果当前页没有数据，则停止查询
                    break;
                }
                foreach ($currentPageSites as $k => $v) {
                    BwcOrder::dispatch(['site_id' => $v['site_id'],'mini'=>30]);
                }
                if (count($currentPageSites) < 10) {
                    break;
                }
                $page++;
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
