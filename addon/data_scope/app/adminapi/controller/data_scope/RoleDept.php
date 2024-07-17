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

use addon\data_scope\app\dict\scope\RuleDict;
use core\base\BaseAdminController;
use addon\data_scope\app\service\admin\data_scope\ScopeService;


/**
 * 角色和部门关联控制器
 * Class Scope
 * @package addon\data_scope\app\adminapi\controller\data_scope
 */
class RoleDept extends BaseAdminController
{
    /**
     * 保存规则信息
     * @return \think\Response
     */
    public function saveScopeInfo(){
        $data = $this->request->params([
            ["role_id",""],
            ["data_scope",""],
            ["check_strictly",0],
            ["dept_ids",""],
        ]);
        $this->validate($data, 'addon\data_scope\app\validate\data_scope\Scope.save');
        $id = (new ScopeService())->save($data);
        return success('SET_SUCCESS', ['id' => $id]);
    }

    /**
     * 获取角色的权限信息
     * @param int $id
     * @return \think\Response
     */
    public function getScopeInfo(int $id)
    {
        return success((new ScopeService())->getInfo($id));
    }

    /**
     * 获取数据权限的规则类型
     * @return \think\Response
     */
    public function getRuleList()
    {
        return success(RuleDict::getData());
    }

}
