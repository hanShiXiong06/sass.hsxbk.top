<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------
namespace addon\tk_vip\app\job;
use addon\tk_vip\app\model\vip\Vip;
use app\service\core\member\CoreMemberService;
use core\base\BaseJob;
use think\Exception;

/**
 * 检测会员等级是否过期
 */
class CheckLevel extends BaseJob
{
    /**
     * 消费
     * @return true
     */
    public function doJob()
    {
        try {
            $vipModel= new Vip();
            $list =$vipModel->where([
                ['over_time', '>=', time()-60*3],
                ['over_time', '<=', time()]
            ])->select();
            if(!$list->isEmpty()){
                foreach($list as $v){
                    $site_id = $v['site_id'];
                    $member_id= $v['member_id'];
                    if($v['over_time']>0){
                        //初始会员等级
                        (new CoreMemberService())->modify($site_id, $member_id, 'member_level', 0);
                    }
                }
            }
            return true;
        } catch (Exception $e) {
            return true;
        }
    }

}
