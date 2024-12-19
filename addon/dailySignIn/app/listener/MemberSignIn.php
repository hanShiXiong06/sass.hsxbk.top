<?php
#######################################################################
# File Name: MemberSignIn.php
# Desc:
# Author: hd
# mail: coinlogix@163.com
# Created Time: 2024/5/26 16:57
#######################################################################
namespace addon\dailysignin\app\listener;

use addon\dailySignIn\app\model\SignInLogs;
use addon\dailySignIn\app\service\api\SignInMemberService;
use addon\dailySignIn\app\service\core\CoreSignInService;
use app\service\api\member\MemberService;

/**
 * 会员签到奖励
 */
class MemberSignIn{

    protected int $_point = 0;
    protected int $_growth = 0;

    public function handle(array $params){
        $sysConfig = (new CoreSignInService())->getConfig();
        if($sysConfig['status'] == SignInLogs::SIGN_IN_OPEN){
            $memberInfo = (new SignInMemberService())->getMemberInfo([
                'member_id'=>$params['member_id']
            ]);
            $awardSettings = $sysConfig[ 'value' ][ 'data' ];
            if(!empty($awardSettings)){
                // 每日签到奖励
                $this->_point = !empty($awardSettings[0][ 'point' ]) ? $awardSettings[0][ 'point' ] : 0;
                $this->_growth = !empty($awardSettings[0][ 'growth' ]) ? $awardSettings[0][ 'growth' ] : 0;
                $signInDay = !empty($params['signInDay'])?$params['signInDay']:$memberInfo[ 'consecutive_days' ];
                if(count($awardSettings) >1 ){
                    for ($i = 1; $i < count($awardSettings); $i++) {
                        $even_award = $awardSettings[ $i ]; // 连签奖励
                        if ($signInDay == $even_award[ 'day' ]) {
                            if (!empty($even_award[ 'point' ])) {
                                $this->_point += $even_award[ 'point' ];
                            }
                            if (!empty($even_award[ 'growth' ])) {
                                $this->_growth += $even_award[ 'growth' ];
                            }
                            break;
                        }
                    }
                }
                if ($this->_point > 0) {
                    (new SignInMemberService())->addMemberAccount([
                        'memberId'=>$memberInfo->member_id,
                        'site_id'=>$params['site_id']??0,
                        'accountType'=>'point',
                        'accountData'=>$this->_point,
                        'fromType'=>'dailySignIn',
                        'relateTag'=>0,
                        'remark'=>'签到奖励' . $this->_point . '积分'
                    ],$params['site_id']);

                }
                if($this->_growth > 0 ){
                    (new SignInMemberService())->addMemberAccount([
                        'memberId'=>$memberInfo->member_id,
                        'site_id'=>$params['site_id']??0,
                        'accountType'=>'growth',
                        'accountData'=>$this->_growth,
                        'fromType'=>'dailySignIn',
                        'relateTag'=>0,
                        'remark'=>'签到奖励' . $this->_growth . '经验'
                    ],$params['site_id']);
                }
                // 是否已签满一个周期
                if ($memberInfo[ 'consecutive_days' ] == $sysConfig[ 'value' ][ 'cycle' ]) {
                    (new MemberService())->editByFind($memberInfo,[ 'sign_days_series' => 0 ]);
                }
            }
        }
        return [ 'point' => $this->_point, 'growth' => $this->_growth ];
    }
}