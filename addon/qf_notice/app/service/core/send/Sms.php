<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\qf_notice\app\service\core\send;

use addon\qf_notice\app\dict\config\ConfigDict;
use addon\qf_notice\app\model\qflog\Qflog;
use app\dict\sys\SmsDict;
use app\service\core\notice\CoreNoticeSmsLogService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseCoreService;
use core\exception\NoticeException;
use core\sms\SmsLoader;
use think\Exception;

/**
 * 短信配置服务层
 * Class SmsService
 * @package app\service\admin\message
 */
class Sms extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
    }
    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, ConfigDict::getType());
        if (empty($info)) {
            throw new Exception('请先配置基础信息');
        }
        return $info['value'];
    }
    public function send($site_id,$data)
    {
        $base_config= $this->getConfig($site_id);
        if(isset($base_config['is_sms_content'])&&$base_config['is_sms_content']==1){
            $is_sms_content=1;
        }else{
            $is_sms_content=0;
        }
        $mobile=$data['mobile'];
        $params=$data['temp_data'];
        $template_id=$data['template_id'];
        $content=$data['sms_content'];
        $params['sms_content']=$content;
        //查询配置
        $config = $this->getDefaultSmsConfig($site_id);
        $sms_type = $config['sms_type'];
        if(empty($sms_type)) throw new NoticeException('SMS_TYPE_NOT_OPEN');
        $sms_driver  = new SmsLoader($sms_type, $config);
        $params = $this->makeUp($params, $content, $sms_type);
        if($is_sms_content==0){
            unset($params['sms_content']);
        }
        $result = $sms_driver->send($mobile, $template_id, $params);
        if (!$result) {
            //失败修改短信记录
            $error = $sms_driver->getError();
            throw new NoticeException($error);
        }
        (new Qflog())->create([
            'site_id' => $site_id,
            'addon_name'=>$data['addon_name'],
            'type' => 'sms',
            'wx_openid' => $mobile,
            'log' => json_encode($result),
            'create_time'=>time()
        ]);
        return true;
    }


    public function makeUp($params, $content, $sms_type){
        if($sms_type != SmsDict::TENCENTSMS) return $params;
        if(empty($params)) return [];
        $temp_array = [];
        foreach($params as $k => $v){
            $index = strpos($content, '{' . $k . '}');
            if($index !== false){
                $temp_array[$index] = $v;
            }
        }
        if(!empty($temp_array)){
            return array_values($temp_array);
        }
        return [];
    }
    /**
     * 主要用于短信发送(todo 慎用!!!!!)
     * @param int $site_id
     * @return array
     */
    public function getDefaultSmsConfig(int $site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, 'SMS')['value'] ?? [];
        if (empty($info))
            throw new NoticeException('NOTICE_SMS_NOT_OPEN');

        $sms_type = $info['default'] ?? '';
        $config = array(
            'sms_type' => $sms_type,
        );
        return array_merge($config, $info[$sms_type] ?? []);
    }

}