<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job\v2;

use addon\tk_cps\app\model\site\Site;
use addon\tk_cps\app\service\core\CommonService;
use core\base\BaseJob;

/**
 * 定时任务同步订单状态
 */
class ActOrder extends BaseJob
{
    public function doJob()
    {
        try {
            $page = 1;
            while (true) {
                $currentPageSites = (new Site())->paginate([
                    'list_rows' => 10,
                    'page' => $page,
                ]);
                if (empty($currentPageSites)) {
                    break;
                }
                foreach ($currentPageSites as $k => $v) {
                    $drivers=(new CommonService())->getSiteDriver($v['site_id']);
                    foreach ($drivers as $k1=>$v1){
                        AsyncOrder::dispatch(['driver'=>$v1['driver'],'config'=>$v1['params'],'type'=>0]);
                    }
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
