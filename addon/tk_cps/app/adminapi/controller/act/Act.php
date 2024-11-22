<?php
namespace addon\tk_cps\app\adminapi\controller\act;

use addon\tk_cps\app\service\core\CloudService as CommonAuth;
use core\base\BaseAdminController;
use addon\tk_cps\app\service\admin\act\ActService;
use addon\tk_cps\app\service\admin\CpsService;
use addon\tk_cps\app\service\admin\v2\CpsService as V2CpsService;
use core\exception\CommonException;
use think\Exception;
use think\facade\Cache;

/**
 * CPS活动链接控制器
 * Class Act
 * @package addon\tk_cps\app\adminapi\controller\act
 */
class Act extends BaseAdminController
{
    public function getDrivers()
    {
        return success('获取成功',(new ActService())->getDrivers());
    }
   /**
    * 获取CPS活动链接列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["act_id",""],
             ["act_name",""],
             ["type",""],
             ["desc",""],
             ["img",""],
             ["icon",""],
             ["poster",""],
             ["commission_rate",""],
             ["introduce",""],
             ["attribution_explain",""],
             ["settlement_time",""],
             ["start_date",""],
             ["end_date",""],
             ["create_time",""]
        ]);
        return success((new ActService())->getPage($data));
    }

    /**
     * CPS活动链接详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new ActService())->getInfo($id));
    }
    public function saveImg(int $id){
        return success('操作成功',(new ActService())->saveImg($id));
    }
    /**
     * 推广信息
     * @param int $id
     * @return \think\Response
     */
    public function shareInfo(int $id){
        return success((new ActService())->shareInfo($id));
    }
    public function getAllItem()
    {
        return success('操作成功',(new CpsService())->getAllItem());
    }
    public function asyncAct()
    {
        if(Cache::get('asyncact')=='doing') throw new Exception('正在更新实时活动');
        Cache::set('asyncact','doing',10);
        (new V2CpsService())->asyncAct();
        return success('操作成功');
    }
}
