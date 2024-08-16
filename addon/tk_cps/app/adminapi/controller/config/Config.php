<?php

namespace addon\tk_cps\app\adminapi\controller\config;

use addon\tk_cps\app\service\core\UniappService;
use app\service\admin\weapp\WeappVersionService;
use core\base\BaseAdminController;
use addon\tk_cps\app\service\core\ConfigService;
use addon\tk_cps\app\service\admin\VersionService;
class Config extends BaseAdminController
{
    public function addPlugin()
    {
       return success('操作成功',(new VersionService())->addPlugin());
    }
    /**
     * @Notes:上传小程序
     * @Interface version
     * @return \think\Response
     * @author: TK
     * @Time: 2024/8/1   上午7:56
     */
    public function version()
    {
        $data = $this->request->params([
            ['desc', '']
        ]);
        (new UniappService())->addFile();
        return success('操作成功，请在渠道--微信小程序--版本查看上传进度和预览',(new VersionService())->add($data));
    }
    public function addFile()
    {
        return success('操作成功',(new UniappService())->addFile());
    }
    public function delFile()
    {
        return success('操作成功',(new UniappService())->delFile());
    }
    /**
     * 下载uniapp
     * @return \think\Response
     * @throws \think\Exception
     */
    public function downCode()
    {
        $data=(new UniappService())->copyUniapp();
        return success('操作成功', $data);
    }
    public function setConfig(){
        $str=md5(time().rand(1,1000));
        $data = $this->request->params([
            ['pub_id', ''],
            ['api_key', ''],
            ['mapi_key', ''],
            ['secret',''],
            ['auth_code',''],
            ['site_key',substr($str , 3 , 6)]
        ]);
        (new ConfigService())->setConfig($data);
        return success('操作成功');
    }
    /**
     * 接口数据
     */
    public function getConfig()
    {
        return success("操作成功",(new ConfigService())->getConfig());
    }
    public function getBwcConfig()
    {
        return success("操作成功",(new ConfigService())->getBwcConfig());
    }
    public function setBwcConfig(){
        $data = $this->request->params([
            ['appkey', ''],
            ['appsecret', ''],
            ['fanxianratio',1],
            ['js_type',1]
        ]);
        (new ConfigService())->setBwcConfig($data);
        return success('操作成功');
    }

}
