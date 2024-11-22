<?php

namespace addon\qf_notice\app\adminapi\controller\config;
use core\base\BaseAdminController;
use addon\qf_notice\app\service\core\ConfigService;


class Config extends BaseAdminController
{

    /**
     * @Notes:获取配置
     * @Interface getConfig
     * @return \think\Response
     * @author: TK
     * @Time: 2024/10/25   上午8:56
     */
    public function getConfig()
    {
        return success("操作成功",(new ConfigService())->getConfig());
    }

    /**
     * @Notes:设置配置
     * @Interface setConfig
     * @return \think\Response
     * @author: TK
     * @Time: 2024/10/25   上午8:57
     */
    public function setConfig(){
        $data = $this->request->params([
            ['email_host', 'smtp.qq.com'],
            ['email_password', ''],
            ['email_from', ''],
            ['is_sms_content', '0'],
        ]);
        (new ConfigService())->setConfig($data);
        return success('操作成功');
    }

}
