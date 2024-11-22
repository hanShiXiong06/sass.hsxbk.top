<?php
#######################################################################
# File Name: SignInService.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/25 16:10
#######################################################################
namespace addon\dailySignIn\app\service\admin;
use addon\dailySignIn\app\model\SignInLogs;
use addon\dailySignIn\app\service\core\CoreSignInService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;

class SignInService extends BaseAdminService{


    public function __construct(){
        parent::__construct();
        $this->model = new SignInLogs();

    }

    /**
     * 会员签到奖励配置
     */
    public function create($request){
        $response = 0;
        if(!empty($request['data'])){
            $day = 0;
            foreach ($request['data'] as $key=>$item){
                if($item['day'] == 0){
                    throw new AdminException('连续签到天数不能设置为0');
                }
                if($key !=0){
                    if ($item[ 'day' ] <= $day) {
                        throw new AdminException('连续签到天数不能相同或者小于上一个签到天数');
                    }
                }
                $day = $item[ 'day' ];
            }
            $response =  (new CoreConfigService())->setConfig($this->site_id,SignInLogs::SYS_CONFIG_KEY,[
                'cycle'         =>$request['cycle'],
                'isSupplement'  =>$request['isSupplement'],
                'adUnitId'      =>$request['isSupplement']?$request['adUnitId']:'',
                'data'          =>$request['data']
            ]);
            (new CoreConfigService())->modifyStatus($this->site_id,SignInLogs::SIGN_IN_OPEN,SignInLogs::SYS_CONFIG_KEY);
        }else{
            (new CoreConfigService())->modifyStatus($this->site_id,SignInLogs::SIGN_IN_CLOSE,SignInLogs::SYS_CONFIG_KEY);
        }
        return is_object($response)?$response->id:$response;
    }
}