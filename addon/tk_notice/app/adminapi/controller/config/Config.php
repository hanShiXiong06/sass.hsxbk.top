<?php

namespace addon\tk_notice\app\adminapi\controller\config;
use core\base\BaseAdminController;
use addon\tk_notice\app\service\core\config\ConfigService;


class Config extends BaseAdminController
{
    public function ceshi()
    {
//        event('TkNoticeSend',['site_id'=>'100000','text'=>'测试消息通知','key'=>'']);
//        return success('操作成功');
    }
    /**
     * @Notes:获取配置
     * @Interface getConfig
     * @return \think\Response
     * @author: TK
     * @Time: 2024/6/25   上午12:00
     */
    public function getConfig()
    {
        return success("操作成功",(new ConfigService())->getConfig());
    }

    /**
     * @Notes:保存配置
     * @Interface setConfig
     * @return \think\Response
     * @author: TK
     * @Time: 2024/6/25   上午12:00
     */
    public function setConfig(){
        $data = $this->request->params([
            ["is_webhook",0],
            ["webhook_type",0],
            ["qwurl",''],
            ["fsurl",''],
            ["ddurl",''],
            ["min",''],
            ["is_email",''],
            ["email_host",'smtp.qq.com'],
            ["email_password",''],
            ["email_from",''],
            ["email_to",''],
            ["email_min",''],
            ["email_title",''],
            ["is_mobile",0],
            ["mobile",''],
            ["mobile_min",0]
        ]);
        (new ConfigService())->setConfig($data);
        return success('操作成功');
    }

}
