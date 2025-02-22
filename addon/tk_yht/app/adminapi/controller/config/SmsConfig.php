<?php

namespace addon\tk_yht\app\adminapi\controller\config;

use addon\tk_yht\app\dict\sms\SmsDict;
use addon\tk_yht\app\service\admin\SmsService;
use core\base\BaseAdminController;
use core\exception\AdminException;
use think\Response;

class SmsConfig extends BaseAdminController
{
    /**
     * 短信配置列表
     */
    public function smsList()
    {
        $res = (new SmsService())->getList();
        return success($res);
    }

    /**
     * 短信配置详情
     * @param $sms_type
     * @return Response
     */
    public function smsConfig($sms_type)
    {
        $res = (new SmsService())->getConfig($sms_type);
        return success($res);
    }

    /**
     * 短信配置修改
     * @return Response
     */
    public function editSms($sms_type)
    {
        //参数获取
        $sms_type_list = SmsDict::getType();
        if (!array_key_exists($sms_type, $sms_type_list)) throw new AdminException('SMS_TYPE_NOT_EXIST');
        //数据验证
        $data = [
            ['is_use', 0]
        ];
        foreach ($sms_type_list[$sms_type]['params'] as $k_param => $v_param) {
            $data[] = [$k_param, ''];
        }

        $request_data = $this->request->params($data);
        (new SmsService())->setConfig($sms_type, $request_data);
        return success();
    }

}
