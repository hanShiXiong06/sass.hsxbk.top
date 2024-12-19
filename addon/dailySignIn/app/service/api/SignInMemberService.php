<?php
#######################################################################
# File Name: SignInMemberService.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/25 22:28
#######################################################################
namespace addon\dailySignIn\app\service\api;
use addon\dailySignIn\app\service\core\CoreSignInService;
use addon\dailySignIn\utils\Utils;
use app\model\member\Member;
use app\model\member\MemberAccountLog;
use app\service\api\member\MemberService;
use app\service\core\member\CoreMemberService;
use Carbon\Carbon;
use core\base\BaseApiService;
use addon\dailySignIn\app\model\SignInLogs;
use core\exception\AdminException;
use core\exception\ApiException;
use core\exception\CommonException;
use JetBrains\PhpStorm\ArrayShape;
use JetBrains\PhpStorm\NoReturn;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;
use think\facade\Db;
use think\Model;

class SignInMemberService extends BaseApiService{


    public function __construct(){
        parent::__construct();
        $this->model = new SignInLogs();
    }

    public function checkSignInStatus($member_id){
        $isSign = false;
        $isSignList = [];
        $memberInfo = $this->getMemberInfo([
            'member_id'=>$member_id
        ]);

        if(!empty($memberInfo->last_sign_in_time)){
            $isSign = !($memberInfo->last_sign_in_time < Carbon::now()->startOfDay());
        }
        $getRewardRules = $this->getRewardRules();
        if($getRewardRules['isSupplement'] != SignInLogs::IS_SUPPLEMENT_OPEN){
            //纠正连签天数
            if (Utils::getYesterdayStartTime() > $memberInfo->last_sign_in_time) {
                (new MemberService())->editByFind($memberInfo,['last_sign_in_time'=>Null,'first_sign_in_time'=>Null,'consecutive_days'=>0]);
            }
        }
        $diffBetweenTwoDays = Utils::getDaysDifference($memberInfo->first_sign_in_time,Utils::getCurrentTime());
        $getTimeIntervals = Utils::getTimeIntervals($memberInfo->first_sign_in_time,$diffBetweenTwoDays);
        foreach ($getTimeIntervals as $key=>$item){
            $response = $this->validate([
                ['sign_in_date', '>=', $item['startTime']],
                ['sign_in_date','<=',$item['endTime']],
                'member_id'=>$this->member_id,
                'site_id'=>$this->site_id??0
            ]);
            $isSignList[$key] = !$response->isEmpty();
        }
        return [
            'isSign'            =>$isSign,
            'isSignList'        =>$isSignList,
            'consecutiveDays'   =>$memberInfo->consecutive_days
        ];
    }
    public function signIn($condition = []){
        $isSignIn = 0;
        $memberInfo = $this->getMemberInfo([
            'member_id'=>$this->member_id,
        ]);
        if(!empty($memberInfo->last_sign_in_time)){
            $isSignIn = $memberInfo->last_sign_in_time < Utils::getCurrentTime()?0:1;
        }
        if($isSignIn == 1){
            throw new ApiException('服务异常...');
        }
        $checkIsExist = $this->validate([
            ['sign_in_date', '>=', Carbon::now()->startOfDay()],
            ['sign_in_date','<=',Carbon::now()->endOfDay()],
            'member_id'=>$this->member_id,
            'site_id'=>$this->site_id??0
        ]);
        if(!$checkIsExist->isEmpty()){
            throw new ApiException('请勿重复提交...');
        }
        Db::startTrans();
        try {
            $this->model->create([
                'member_id'         =>$this->member_id,
                'site_id'           =>$this->site_id??0,
                'sign_in_date'      =>Utils::getCurrentTime(),
                'remark'            =>'会员签到',
                'created_at'        =>Utils::getCurrentTime()
            ]);
            //连续签到
            $getRewardRules = $this->getRewardRules();
            if($getRewardRules['isSupplement'] == SignInLogs::IS_SUPPLEMENT_OPEN){
                $diffBetweenTwoDays = Utils::getDaysDifference(Utils::getYesterdayStartTime(),$memberInfo->last_sign_in_time);
                if($diffBetweenTwoDays <=7 && !empty($memberInfo['last_sign_in_time'])){
                    (new Member())->where([
                        'member_id'=>$condition['member_id']
                    ])->inc('consecutive_days',1)->update();
                    (new MemberService())->editByFind($memberInfo,['last_sign_in_time'=>Utils::getCurrentTime()]);
                }else{
                    (new MemberService())->editByFind($memberInfo,['consecutive_days'=>1,'last_sign_in_time'=>Utils::getCurrentTime(),'first_sign_in_time'=>Utils::getCurrentTime()]);
                }

            }else{
                if(Utils::getYesterdayStartTime() < $memberInfo->last_sign_in_time){
                    (new Member())->where([
                        'member_id'=>$condition['member_id']
                    ])->inc('consecutive_days',1)->update();
                    (new MemberService())->editByFind($memberInfo,['last_sign_in_time'=>Utils::getCurrentTime()]);
                }else{
                    (new MemberService())->editByFind($memberInfo,['consecutive_days'=>1,'last_sign_in_time'=>Utils::getCurrentTime(),'first_sign_in_time'=>Utils::getCurrentTime()]);
                }
            }
            //执行签到奖励
            $response = event("MemberSignIn", [
                'member_id' => $this->member_id,
                'site_id'=>$this->site_id
            ]);
            Db::commit();
        }catch (Exception $e){
            Db::rollback();
            throw new ApiException('服务异常...');
        }
        return $response;
    }
    public function supplement($condition){
        $memberInfo = $this->getMemberInfo($condition);
        $checkIsExist = $this->validate([
            ['sign_in_date', '>=', Carbon::parse($memberInfo['first_sign_in_time'])
                ->addDays($condition['day']-1)->startOfDay()
            ],
            ['sign_in_date','<=',Carbon::parse($memberInfo['first_sign_in_time'])
                ->addDays($condition['day']-1)->endOfDay()],
            'member_id'=>$this->member_id,
            'site_id'=>$this->site_id??0
        ]);
        if(!$checkIsExist->isEmpty()){
            throw new ApiException('请勿重复提交...');
        }
        $signInDate = Carbon::parse('-'.($condition['day']-1).'day')->toDateTimeString();
        if($signInDate > Utils::getCurrentTime()){
            throw new ApiException('数据非法...');
        }
        Db::startTrans();
        try {
            $this->model->create([
                'member_id'         =>$condition['member_id'],
                'site_id'           =>$this->site_id??0,
                'sign_in_date'      =>$signInDate,
                'remark'            =>'会员签到',
                'created_at'        =>Utils::getCurrentTime()
            ]);
            (new Member())->where([
                'member_id'=>$condition['member_id']
            ])->inc('consecutive_days',1)->update();
            //执行签到奖励
            $response = event("MemberSignIn", [
                'member_id' => $this->member_id,'signInDay'=>$condition['day']
            ]);
            Db::commit();
        }catch (Exception $e){
            Db::rollback();
            throw new ApiException('服务异常...');
        }
        return $response;
    }
    /**
     * @throws ModelNotFoundException
     * @throws DataNotFoundException
     * @throws DbException
     */
    #[NoReturn] public function getMemberSignInList($condition = []): array{
        $condition = [
            [ 'member_id', '=', $this->member_id ],
            [ 'site_id','=',$this->site_id??0],
            [ 'sign_in_date', '>=', Utils::getLastMonthSameDayStart(),'<=',Utils::getCurrentTime() ],
        ];
       return $this->model->where($condition)->order('id asc')->select()->toArray();
    }
    #[ArrayShape(['status' => "mixed"])] public function getSignInOpen(): array{
        $sysConfig = ((new CoreSignInService())->getConfig());
        return [
            'status'=>$sysConfig['status']
        ];
    }
    public function getRewardRules(){
        return ((new CoreSignInService())->getConfig())['value'];
    }
    public function getMemberInfo($condition){
        return  (new MemberService())->findMemberInfo(['member_id'=>$condition['member_id']]);
    }
    public function validate($condition){
        return $this->model->where($condition)->findOrEmpty();
    }
    public function addMemberAccount($entity,$siteId = 0){
        Db::startTrans();
        $msg = '';
        $pointGet = 0;
        try {
            if ($entity['accountType'] == SignInLogs::POINT) {
                $msg = '账户积分';
                $pointGet = $entity['accountData'];
            }
            if ($entity['accountType'] == SignInLogs::GROWTH) {
                $msg = '账户经验';
            }
            $memberAccount = (new MemberService())->getInfo();
            $accountNewData = intval(bcadd($memberAccount[ $entity['accountType'] ],$entity['accountData']));
            if($accountNewData > SignInLogs::MAX_RECORD){
                throw new ApiException($msg.'不可超出99999999');
            }
            $data = array (
                'member_id'    => $entity['memberId'],
                'account_type' => $entity['accountType'],
                'account_data' => $entity['accountData'],
                'site_id'      => $siteId,
                'account_sum'  => intval(bcadd($memberAccount[$entity['accountType']],$entity['accountData'])),
                'from_type'    => $entity['fromType'],
                'related_id'   => $memberAccount['member_id'],
                'create_time'  => Carbon::now()->timestamp,
                'memo'         => $entity['remark'],
            );
            $response = (new MemberAccountLog())->create($data);
            (new Member())->update([
                $entity['accountType'] => $accountNewData,
                'point_get'=> bcadd($memberAccount['point_get'], $pointGet)
            ], [
                'member_id' => $entity['memberId']
            ]);
            Db::commit();
            return $response;
        }catch (\Exception $e){
            Db::rollback();
            throw new ApiException($e->getMessage());
        }
    }
    public function sum($request){
        $accountType = $request[ 'accountType' ] ?? 'point';
        $fromType = $request[ 'fromType' ] ?? '';
        if (!in_array($accountType, [ 'point', 'growth' ])){
            throw new ApiException('请求参数有误...');
        }
        $condition = [
            [ 'member_id', '=', $this->member_id ],
            [ 'account_type', '=', $accountType ],
            [ 'from_type','=',$fromType],
            [ 'site_id','=',$this->site_id??0]
        ];
        return (new MemberAccountLog())->where($condition)->sum('account_data');
    }
    public function checkValidate($condition){
        return !$this->validate([
            ['sign_in_date', '>=', $condition['startTime']],
            ['sign_in_date','<=',$condition['endTime']],
            'member_id'=>$this->member_id
        ])->isEmpty();
    }
}