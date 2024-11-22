<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\job\act;

use addon\tk_cps\app\dict\config\ConfigDict;
use addon\tk_cps\app\job\order\JtkOrder;
use addon\tk_cps\app\job\order\MyxqDcOrder;
use addon\tk_cps\app\job\order\MyxqMovieOrder;
use addon\tk_cps\app\job\order\MyxqNearOrder;
use addon\tk_cps\app\job\order\MyxqOtherOrder;
use addon\tk_cps\app\job\order\MyxqRechaegeOrder;
use addon\tk_cps\app\model\site\Site;
use app\service\core\sys\CoreConfigService;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 定时任务同步订单状态
 */
class ActOrder extends BaseJob
{
    public function doJob()
    {
        try {
            Log::write("CPS活动订单分钟计算同步开始".date("Y-m-d H:i:s"));
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
                    $config = $this->getConfig($v['site_id']);
                    JtkOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
                    MyxqDcOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
                    MyxqMovieOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
                    MyxqOtherOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
                    MyxqNearOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
                    MyxqRechaegeOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
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

    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getType());
        if (empty($info)) {
            $info['value']['api_key'] = '0';
            $info['value']['mapi_key'] = 'Aa321123';
            $info['value']['secret'] = '0';
        }
        return $info['value'];
    }
}
