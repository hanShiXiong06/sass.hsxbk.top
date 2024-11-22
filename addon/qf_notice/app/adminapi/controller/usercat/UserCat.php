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

namespace addon\qf_notice\app\adminapi\controller\usercat;

use core\base\BaseAdminController;
use addon\qf_notice\app\service\admin\usercat\UserCatService;


/**
 * 用户分类控制器
 * Class UserCat
 * @package addon\qf_notice\app\adminapi\controller\usercat
 */
class UserCat extends BaseAdminController
{
   /**
    * 获取用户分类列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["name",""]
        ]);
        return success((new UserCatService())->getPage($data));
    }

    /**
     * 用户分类详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new UserCatService())->getInfo($id));
    }

    /**
     * 添加用户分类
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["name",""],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\usercat\UserCat.add');
        $id = (new UserCatService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 用户分类编辑
     * @param $id  用户分类id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["name",""],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\usercat\UserCat.edit');
        (new UserCatService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 用户分类删除
     * @param $id  用户分类id
     * @return \think\Response
     */
    public function del(int $id){
        (new UserCatService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
