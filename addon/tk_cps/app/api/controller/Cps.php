<?php
namespace addon\tk_cps\app\api\controller;
use core\base\BaseController;
use addon\tk_cps\app\service\core\CpsWapApiService;
class Cps extends BaseController
{
    /**
     * @Notes:活动信息
     * @Interface cpsInfo
     * @return \think\Response
     * @author: TK
     * @Time: 2024/10/7   下午10:20
     */
    public function cpsInfo(){
        $data = $this->request->params([
            ['type', '0'],
            ['act_id', '1'],
        ]);
        return success('获取成功',(new CpsWapApiService())->getCpsInfo($data['type'],$data['act_id']));
    }

    /**
     * @Notes:活动列表
     * @Interface actList
     * @return \think\Response
     * @author: TK
     * @Time: 2024/10/7   下午10:20
     */
    public function actList()
    {
        $data = $this->request->params([
            ["act_name",""],
            ["type",'']
        ]);
        return success('获取成功',(new CpsWapApiService())->getPage($data));
    }
}