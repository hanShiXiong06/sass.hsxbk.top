<?php

namespace addon\tk_cps\app\adminapi\controller\page;

use core\base\BaseAdminController;
use addon\tk_cps\app\service\core\CpsService;
class Page extends BaseAdminController
{
    //页面域名
    public function wapDomain()
    {
       return success('操作成功',(new CpsService())->wapDomain());
    }

    //页面二维码
    public function pageCode($type)
    {
        return success('操作成功',(new CpsService())->pageCode($type));
    }
}