<?php
#######################################################################
# File Name: CoreSignInService.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/25 22:17
#######################################################################
namespace addon\dailySignIn\app\service\core;
use app\model\sys\SysConfig;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\base\BaseCoreService;
use addon\dailySignIn\app\model\SignInLogs;
use think\Model;

class CoreSignInService extends BaseAdminService{
    public function __construct(){
        parent::__construct();
        $this->model = new SignInLogs();
    }
    public function getConfig(): array{
        $response = (new CoreConfigService())->getConfig($this->site_id,SignInLogs::SYS_CONFIG_KEY);
        if (empty($response[ 'value' ])) {
            $response[ 'value' ] = [
                'cycle' => 7,
                'isSupplement'=>0,
                'adUnitId'=>'',
                'data' => [
                    [
                        "point" => 0,
                        "growth" => 0,
                        "day" => 1
                    ]
                ]
            ];
            $response['status'] = 0;
        }

        return $response;
    }
}