<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\tk_cps\app\service\core\send;

use addon\tk_cps\app\service\core\fenxiao\FenxiaoService;
use app\dict\member\MemberAccountTypeDict;
use app\model\member\Member;
use app\model\member\MemberLevel;
use app\service\core\member\CoreMemberAccountService;
use app\service\core\member\CoreMemberConfigService;
use app\service\core\member\CoreMemberService;
use core\base\BaseApiService;
use core\dict\DictLoader;
use think\facade\Log;
use addon\tk_cps\app\model\actorder\Actorder;
/**
 * 等级激励
 */
class SendService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Notes:
     * @Interface sendEvent
     * @param $orderInfo
     * @return bool
     * @author: TK
     * @Time: 2024/6/27   上午11:31
     */
    public function sendEvent($orderInfo)
    {
        try {
            $model = new Actorder();
            $order_info=$model->where(['site_id' => $orderInfo['site_id'], 'order_id' => $orderInfo['order_id']])->findOrEmpty();
            if($order_info->isEmpty()) return true;
            if($order_info['jl_js'] == 1) return true;
            $memberInfo= (new Member())->where(['site_id'=>$orderInfo['site_id'],'member_id'=>$orderInfo['member_id']])->findOrEmpty();
            if($memberInfo->isEmpty()){
                $order_info->jl_js=1;
                $order_info->save();
                return true;
            }else{
                //进行成长值发放
                $this->sendGrowth($orderInfo['site_id'], $orderInfo['member_id'], 'tk_cps_order', ['from_type' => 'tk_cps_order']);
                //积分发放
                $this->sendPoint($orderInfo['site_id'], $orderInfo['member_id'], 'tk_cps_order', ['from_type' => 'tk_cps_order']);
                //进行分销结算
                $orderInfo['order_money'] = $orderInfo['commission'] ?? 0;
                (new FenxiaoService())->fenxiaoEvent($orderInfo);
                $order_info->jl_js=1;
                $order_info->save();
                return true;
            }
        } catch (\Exception $e) {
            Log::write('-------CPS激励成事件错误-------' . date('Y-m-d H:i:s', time()));
            Log::write($e->getMessage());
            return false;
        }
    }

    /**
     * @Notes:会员等级激励
     * @Interface sendLevel
     * @param $site_id
     * @param $member_id
     * @return true
     * @author: TK
     * @Time: 2024/5/22   下午2:39
     */
    public function sendLevel($site_id, $member_id)
    {
        $member_info = (new CoreMemberService())->getInfoByMemberId($site_id, $member_id, 'nickname, point, member_level');
        $member_info['member_level'] = (new MemberLevel())->where([['level_id', '=', $member_info['member_level']]])->field('site_id,level_id,level_benefits')->findOrEmpty()->toArray();
        if ($member_info['member_level'] && !empty($member_info['member_level']['level_benefits'])) {
            $level_benefits = $member_info['member_level']['level_benefits'];
            foreach ($level_benefits as $k => $v) {
                if ($k == 'tk_cps_level' && $v['is_use'] == 1 && $v['expand'] > 0) {
                    (new CoreMemberAccountService())->addLog($site_id, $member_id, MemberAccountTypeDict::MONEY, $v['expand'], 'bwc_award', '霸王餐等级单单激励');
                }
            }
        }
        return true;
    }

    /**
     * @Notes:发放积分
     * @Interface sendPoint
     * @param int $site_id
     * @param int $member_id
     * @param string $key
     * @param array $param
     * @return true
     * @author: TK
     * @Time: 2024/5/21   下午5:40
     */
    public static function sendPoint(int $site_id, int $member_id, string $key, array $param = [])
    {
        $config = (new CoreMemberConfigService())->getPointRuleConfig($site_id)['grant'] ?? [];
        if (!isset($config[$key]) || !$config[$key]['is_use']) return true;

        $config = $config[$key];

        $dict = (new DictLoader("PointRule"))->load()['grant'] ?? [];
        if (!isset($dict[$key])) return true;
        $dict = $dict[$key];

        $point = $config['point'] ?? 0;
        if (isset($dict['calculate']) && !empty($dict['calculate'])) {
            $calculate = $dict['calculate'];
            if ($calculate instanceof \Closure) {
                $point = $calculate($config, $param);
            } else if (class_exists($calculate)) {
                $point = (new $calculate())->handle($config, $param);
            }
        }

        if ($point <= 0) return true;

        (new CoreMemberAccountService())->addLog($site_id, $member_id, MemberAccountTypeDict::POINT, $point, $param['from_type'] ?? '', $param['memo'] ?? $dict['desc'], $param['related_id'] ?? 0);
        return true;
    }

    /**
     * @Notes:发放会员成长值
     * @Interface sendGrowth
     * @param int $site_id
     * @param int $member_id
     * @param string $key
     * @param array $param
     * @return true
     * @author: TK
     * @Time: 2024/5/21   下午5:41
     */
    public static function sendGrowth(int $site_id, int $member_id, string $key, array $param = [])
    {
        $config = (new CoreMemberConfigService())->getGrowthRuleConfig($site_id);
        if (!isset($config[$key]) || !$config[$key]['is_use']) return true;

        $config = $config[$key];

        $dict = (new DictLoader("GrowthRule"))->load();
        if (!isset($dict[$key])) return true;
        $dict = $dict[$key];

        $growth = $config['growth'] ?? 0;
        if (isset($dict['calculate']) && !empty($dict['calculate'])) {
            $calculate = $dict['calculate'];
            if ($calculate instanceof \Closure) {
                $growth = $calculate($config, $param);
            } else if (class_exists($calculate)) {
                $growth = (new $calculate())->handle($config, $param);
            }
        }
        if ($growth <= 0) return true;
        (new CoreMemberAccountService())->addLog($site_id, $member_id, MemberAccountTypeDict::GROWTH, $growth, $param['from_type'] ?? '', $param['momo'] ?? $dict['desc'], $param['related_id'] ?? 0);
        return true;
    }

}
