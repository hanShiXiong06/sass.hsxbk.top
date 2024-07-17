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

namespace addon\data_scope\app\model;

use addon\data_scope\app\dict\scope\RuleDict;
use addon\data_scope\app\model\data_scope\RoleDept;
use addon\data_scope\app\model\data_scope\SysDept;
use addon\data_scope\app\model\data_scope\SysDeptUser;
use addon\data_scope\app\service\admin\data_scope\ScopeService;
use app\service\admin\auth\AuthService;
use app\service\admin\user\UserRoleService;
use core\base\BaseModel;

/**
 * 数据权限基类
 * Class Scope
 * @package addon\data_scope\app\model\data_scope
 */
class BaseDataScope extends BaseModel
{

    /**
     * @var array 数据边界用户id
     */
    private $scopeUserIds = [];

    /**
     * 定义范围查询
     * @param $query
     * @param $alias 数据权限分类字段
     * @param $userInfo
     * @return void
     */
    public function scopeDataScope($query, $alias="create_by")
    {
        $uid = request()->uid();
        $siteId = request()->siteId();
        if (empty($uid)){
            return $query;
        }
        // 如果是超级管理员，查询全部
        if (AuthService::isSuperAdmin()){
            return $query;
        }
        // 获取用户的角色
        $user_role_service = new UserRoleService();
        $role_ids = $user_role_service->getUserRole($siteId, $uid)['role_ids'];
        // 获取权限的规则
        $scope_list = (new ScopeService())->getScopeList($role_ids);

        foreach ($scope_list as $scope) {
            $data_scope = $scope['data_scope'];
            $role_id = $scope['role_id'];
            switch ($data_scope) {
                // 全部数据  1
                case RuleDict::ALL_SCOPE:
                    return $query;
                // 自定义数据 2
                case RuleDict::CUSTOM_SCOPE:
                    // 获取角色授权的部门
                    $deptIds = RoleDept::where('role_id',$role_id)->value('dept_ids');
                    // 通过部门获取用户
                    $userIds = SysDeptUser::whereIn('dept_id',$deptIds)->column('uid');
                    $this->scopeUserIds = array_merge($this->scopeUserIds, $userIds);
                    break;

                // 所在部门数据 3
                case RuleDict::SELF_DEPT_SCOPE:
                    // 获取用户所属部门
                    $deptIds = SysDeptUser::where('uid',$uid)->column('dept_id');
                    // 通过部门获取用户
                    $userIds = SysDeptUser::whereIn('dept_id',$deptIds)->column('uid');
                    $this->scopeUserIds = array_merge($this->scopeUserIds, $userIds);
                    break;
                // 本部门及子部门数据权限 4
                case RuleDict::DEPT_BELOW_SCOPE:
                    // 获取当前站点的部门
                    $depts = SysDept::where('site_id',$siteId)->select()->toArray();
                    $deptIds = SysDeptUser::where('uid',$uid)->column('dept_id');
                    $subDeptIds = array_unique($this->getSubDepartments($depts, $deptIds));
                    $userIds = SysDeptUser::where('dept_id', 'in', $subDeptIds)->column('uid');
                    $this->scopeUserIds = array_merge($this->scopeUserIds, $userIds);
                    break;
                // 仅本人数据 5
                case RuleDict::SELF_SCOPE:
                    $this->scopeUserIds = array_merge($this->scopeUserIds, [$uid]);
                    break;
                default:
                    break;
            }
        }
        return $query->where($alias, 'in', array_unique($this->scopeUserIds));

    }

    // 递归函数，获取指定部门ID的子集集合
    private function getSubDepartments($departments, $parent_ids) {
        $result = array();
        foreach ($parent_ids as $parent_id) {
            $result = array_merge($result, $this->getSubDepartmentsHelper($departments, $parent_id));
        }
        return $result;
    }

    private function getSubDepartmentsHelper($departments, $parent_id) {
        $result = array();
        foreach ($departments as $dept) {
            if ($dept['parent_id'] == $parent_id) {
                $result[] = $dept;
                $result = array_merge($result, $this->getSubDepartmentsHelper($departments, $dept['id']));
            }
        }
        return $result;
    }

}
