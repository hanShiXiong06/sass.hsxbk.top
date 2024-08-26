<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\adminapi\controller\hsx_phone_query_config;

use core\base\BaseAdminController;
use app\service\admin\hsx_phone_query_config\HsxPhoneQueryConfigService;


/**
 * HsxPhoneQueryConfig控制器
 * Class HsxPhoneQueryConfig
 * @package app\adminapi\controller\hsx_phone_query_config
 */
class HsxPhoneQueryConfig extends BaseAdminController
{
   /**
    * 获取列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["appid",""],
             ["Secret",""]
        ]);
        return success((new HsxPhoneQueryConfigService())->getPage($data));
    }

    /**
     * 详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new HsxPhoneQueryConfigService())->getInfo($id));
    }

    /**
     * 添加
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["appid",""],
             ["Secret",""]
        ]);
        $this->validate($data, 'app\validate\hsx_phone_query_config\HsxPhoneQueryConfig.add');
        $id = (new HsxPhoneQueryConfigService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 编辑
     * @param $id  id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["appid",""],
             ["Secret",""]
        ]);
        $this->validate($data, 'app\validate\hsx_phone_query_config\HsxPhoneQueryConfig.edit');
        (new HsxPhoneQueryConfigService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 删除
     * @param $id  id
     * @return \think\Response
     */
    public function del(int $id){
        (new HsxPhoneQueryConfigService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
