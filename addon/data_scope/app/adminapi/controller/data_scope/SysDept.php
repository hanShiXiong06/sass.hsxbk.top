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

namespace addon\data_scope\app\adminapi\controller\data_scope;

use addon\data_scope\app\model\data_scope\RoleDept;
use app\service\admin\sys\RoleService;
use app\service\admin\user\UserRoleService;
use core\base\BaseAdminController;
use addon\data_scope\app\service\admin\data_scope\SysDeptService;


/**
 * 部门控制器
 * Class SysDept
 * @package addon\data_scope\app\adminapi\controller\data_scope
 */
class SysDept extends BaseAdminController
{
   /**
    * 获取部门列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["dept_name",""],
             ["status",""]
        ]);
        return success((new SysDeptService())->getSysDeptAll($data));
    }

    /**
     * 部门详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new SysDeptService())->getInfo($id));
    }

    /**
     * 添加部门
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["p_dept_id",0],
             ["dept_name",""],
             ["sort",0],
             ["status",0],

        ]);
        $this->validate($data, 'addon\data_scope\app\validate\data_scope\SysDept.add');
        $id = (new SysDeptService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 部门编辑
     * @param $id  部门id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["p_dept_id",0],
             ["dept_name",""],
             ["sort",0],
             ["status",0],

        ]);
        $this->validate($data, 'addon\data_scope\app\validate\data_scope\SysDept.edit');
        (new SysDeptService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 部门删除
     * @param $id  部门id
     * @return \think\Response
     */
    public function del(int $id){
        (new SysDeptService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
    public function getSysDeptAll(){
         return success(( new SysDeptService())->getSysDeptAll());
    }

    /**
     * 获取关联的用户
     * @return \think\Response
     */
    public function getBindUser(int $id)
    {
        return success((new SysDeptService())->getBindUser($id));
    }

    /**
     * 关联用户
     * @return \think\Response
     */
    public function bindUser()
    {
        $data = $this->request->params([
            ["dept_id",""],
            ["uid",""]
        ]);
        if (empty($data['dept_id'])){
            return fail('PARAM_ERROR');
        }
        $res = (new SysDeptService())->bindUser($data);
        if ($res) return success('SET_SUCCESS');
        return fail('SAVE_FAIL');
    }

    /**
     * 同步角色信息， 不对主框架进行嵌入，防止角色删除后，此插件附表数据残留
     * 此操作会匹配主框架角色信息，保证附表的信息与主框架的角色对应
     * @return \think\Response
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function syncRole()
    {
        // 获取站点下的所有角色
        $roles = (new RoleService())->getAll();
        $role_ids = array_column($roles, 'role_id');
        // 移除此插件的附表中已被删除的角色
        $res = RoleDept::whereNotIn('role_id', $role_ids)->delete();
        if ($res !== false) return success();
        return fail();
    }


}
