<?php

namespace addon\tk_yht\app\service\admin;

use addon\tk_yht\app\dict\sms\SmsDict;
use app\service\core\notice\CoreNoticeSmsLogService;
use app\service\core\sys\CoreConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use core\exception\NoticeException;
use core\sms\SmsLoader;
use think\facade\Cache;
use think\Response;

/**
 * 短信配置服务层
 */
class SmsService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 获取短信配置列表(平台设置)
     */
    public function getList()
    {
        $sms_type_list = SmsDict::getType();
        $info = (new CoreConfigService())->getConfig($this->site_id, 'SMS');
        if(empty($info))
        {
            $config_type = ['default' => ''];//初始化
        }else
            $config_type = $info['value'];

        $list = [];
        foreach($sms_type_list as $k => $v)
        {
            $data = [];
            $data['sms_type'] = $k;
            $data['is_use'] = $k == $config_type['default'] ? 1 : 0;
            $data['name'] = $v['name'];
            foreach ($v['params'] as $k_param => $v_param)
            {
                $data['params'][$k_param] = [
                    'name' => $v_param,
                    'value' => $config_type[$k][$k_param] ?? ''
                ];
            }
            $list[] = $data;
        }
        return $list;
    }

    /**
     * 获取短信配置
     * @param string $sms_type
     * @return array
     */
    public function getConfig(string $sms_type)
    {
        $sms_type_list = SmsDict::getType();
        if(!array_key_exists($sms_type, $sms_type_list)) throw new AdminException('SMS_TYPE_NOT_EXIST');
        $info = (new CoreConfigService())->getConfig($this->site_id, 'SMS');
        if(empty($info))
        {
            $config_type = ['default' => ''];//初始化
        }else
            $config_type = $info['value'];

        $data = [
            'sms_type' => $sms_type,
            'is_use' => $sms_type == $config_type['default'] ? 1 : 0,
            'name'   => $sms_type_list[$sms_type]['name'],
        ];
        foreach ($sms_type_list[$sms_type]['params'] as $k_param => $v_param)
        {
            $data['params'][$k_param] = [
                'name' => $v_param,
                'value' => $config_type[$sms_type][$k_param] ?? ''
            ];
        }
        return $data;

    }

    /**
     * 短信配置
     * @param string $sms_type
     * @param array $data
     * @return bool
     */
    public function setConfig(string $sms_type, array $data)
    {
        $sms_type_list = SmsDict::getType();
        $info = (new CoreConfigService())->getConfig($this->site_id, 'SMS');
        if(empty($info))
        {
            $config['default'] = '';

        }else{
            $config = $info['value'];
        }
        //初始化数据
        if($data['is_use'])
        {
            $config['default'] = $sms_type;
        }else{
            $config['default'] = '';
        }
        foreach ($sms_type_list[$sms_type]['params'] as $k_param => $v_param)
        {
            $config[$sms_type][$k_param] = $data[$k_param] ?? '';
        }
        Cache::set('ydt_access_token_'.$config[$sms_type]['access_key'],'');
        return (new CoreConfigService())->setConfig($this->site_id, 'SMS', $config);
    }


}
