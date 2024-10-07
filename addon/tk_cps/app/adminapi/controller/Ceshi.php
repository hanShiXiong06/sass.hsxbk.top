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
use addon\tk_cps\app\service\core\BwcService;
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
       //(new BwcService())->cronOrder(100000);

    }
}
