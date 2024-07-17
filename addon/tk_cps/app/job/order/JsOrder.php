<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\tk_cps\app\job\order;
use addon\tk_cps\app\job\send\SendCpsAward;
use addon\tk_cps\app\model\actorder\Actorder;
use core\base\BaseJob;
use think\facade\Log;

class JsOrder extends BaseJob
{
    /**
     * @Notes:CPS活动激励结算
     * @Interface doJob
     * @param $site_id
     * @param $config
     * @param $type
     * @return bool
     * @author: TK
     * @Time: 2024/6/29   上午9:35
     */
    public function doJob()
    {
        try {
            Log::write("CPS活动激励结算".date("Y-m-d H:i:s"));
            $res = (new Actorder())->where(['pt_js' => 1, 'jl_js' => 0])->select();
            foreach ($res as $k => $v) {
                SendCpsAward::dispatch(['data' => $v]);
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
