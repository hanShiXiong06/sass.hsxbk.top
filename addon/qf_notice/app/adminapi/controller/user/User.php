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

namespace addon\qf_notice\app\adminapi\controller\user;

use core\base\BaseAdminController;
use addon\qf_notice\app\service\admin\user\UserService;


/**
 * 用户列控制器
 * Class User
 * @package addon\qf_notice\app\adminapi\controller\user
 */
class User extends BaseAdminController
{
   /**
    * 获取用户列列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["cat_id",""],
             ["mobile",""],
             ["create_time",["",""]]
        ]);
        return success((new UserService())->getPage($data));
    }

    /**
     * 用户列详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new UserService())->getInfo($id));
    }

    /**
     * 添加用户列
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["cat_id",0],
             ["nickname","默认昵称"],
             ["headimg",""],
             ["config_id",0],
             ["mobile",""],
             ["openid",""],
             ["unionid",""],
             ["email",""],
             ["num",0],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\user\User.add');
        $id = (new UserService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 用户列编辑
     * @param $id  用户列id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["cat_id",0],
             ["nickname","默认昵称"],
             ["headimg",""],
             ["config_id",0],
             ["mobile",""],
             ["openid",""],
             ["unionid",""],
             ["email",""],
             ["num",0],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\user\User.edit');
        (new UserService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 用户列删除
     * @param $id  用户列id
     * @return \think\Response
     */
    public function del(int $id){
        (new UserService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
    public function getUserCatAll(){
         return success(( new UserService())->getUserCatAll());
    }
    public function delselect()
    {
        $data = $this->request->post();
        (new  UserService())->delselect($data);
        return success('DELETE_SUCCESS');
    }
    public function clearUser()
    {
        return success('清除成功',(new UserService())->clearUser());
    }
}
