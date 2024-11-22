<?php

namespace addon\tk_cps\app\service\admin\v2;

use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\platform\PlatformLoader;
use core\base\BaseApiService;

class CpsService extends BaseApiService
{
    protected $fromPath;
    protected $toPath;

    public function __construct()
    {
        parent::__construct();
        $this->commonService = new CommonService();
    }

    /**
     * @Notes:同步活动
     * @Interface asyncAct
     * @throws \think\Exception
     * @author: TK
     * @Time: 2024/10/7   下午3:08
     */
    public function asyncAct()
    {
        $this->commonService->setSiteKey();
        $driers = $this->commonService->getSiteDriver($this->site_id);
        foreach ($driers as $k => $v) {
            (new PlatformLoader($v['driver'], $v['params']))->getActiveAll([]);
        }
    }

    public function getActInfo($act_id, $type)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, $type);
        $actInfo = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getActiveInfo([
            'act_id' => $act_id,
            'uid' => $driverInfo['params']['site_key']
        ]);
        return $actInfo;
    }
}