<?php
namespace addon\tk_cps\app\api\controller;
use addon\tk_cps\app\service\core\CpsWapService;
use core\base\BaseController;
use addon\tk_cps\app\service\core\CpsWapApiService;
use addon\tk_cps\app\service\core\CpsService;
class Cps extends BaseController
{
    /**
     *CPS链接转化
     */
    public function cpsInfo(){
        $data = $this->request->params([
            ['type', '0'],
            ['act_id', '1'],
        ]);
        return success('获取成功',(new CpsWapApiService())->getCpsInfo($data['type'],$data['act_id']));
    }
    public function actList()
    {
        $data = $this->request->params([
            ["act_name",""],
            ["type",1]
        ]);
        return success('获取成功',(new CpsWapService())->getPage($data));
    }
}