<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job\v2;
use addon\tk_cps\app\model\site\Site;
use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\platform\PlatformLoader;
use core\base\BaseJob;

/**
 * 全量同步订单
 */
class ActOrderDay extends BaseJob
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
                      //  AsyncOrder::dispatch(['driver'=>$v1['driver'],'config'=>$v1['params'],'type'=>1]);
                        //框架0.5.4上适配
                        (new PlatformLoader($v1['driver'], $v1['params']))->asyncOrder(['type'=>1]);
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
