<?php
namespace addon\tk_jhkd\app\api\controller;
use core\base\BaseController;
use addon\tk_jhkd\app\service\core\FenxiaoService;
use think\Response;
class Fenxiao extends BaseController
{
    /**
     * @Notes:分销关系检查绑定
     * @Interface checkFenxiao
     * @return Response
     * @author: TK
     * @Time: 2024/5/28   下午1:00
     */
    public function checkFenxiao()
    {
        $data = $this->request->params([
            ['pid', ''],
        ]);
        return success((new FenxiaoService())->checkFenxiao($data));
    }

}