<?php

namespace addon\tk_cps\app\adminapi\controller;


use addon\tk_cps\app\dict\order\JtkOrderDict;
use addon\tk_cps\app\job\order\JtkOrder;
use addon\tk_cps\app\job\order\MyxqDcOrder;
use addon\tk_cps\app\job\order\MyxqMovieOrder;
use addon\tk_cps\app\job\order\MyxqNearOrder;
use addon\tk_cps\app\job\order\MyxqOtherOrder;
use addon\tk_cps\app\job\order\MyxqRechaegeOrder;
use addon\tk_cps\app\job\send\SendCpsAward;
use addon\tk_cps\app\model\site\Site;
use addon\tk_cps\app\service\core\OrderService;
use addon\tk_cps\app\model\actorder\Actorder;
use app\model\member\Member;
use app\service\core\member\CoreMemberService;
use core\base\BaseAdminController;

class Ceshi extends BaseAdminController
{

    //订单列表
    public function ceshi()
    {
//        $page = 1;
//        while (true) {
//            $currentPageSites = (new Site())->paginate([
//                'list_rows' => 10,
//                'page' => $page,
//            ]);
//            if (empty($currentPageSites)) {
//                // 如果当前页没有数据，则停止查询
//                break;
//            }
//            foreach ($currentPageSites as $k => $v) {
//                $config = $this->getConfig($v['site_id']);
//                JtkOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
//                MyxqDcOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
//                MyxqMovieOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
//                MyxqOtherOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
//                MyxqNearOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
//                MyxqRechaegeOrder::dispatch(['site_id' => $v['site_id'], 'config' => $config, 'type' => 0]);
//            }
//            if (count($currentPageSites) < 10) {
//                break;
//            }
//            $page++;
//        }

    }
}
