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

namespace addon\data_scope\app\service\admin\data_scope;

use addon\data_scope\app\model\data_scope\RoleDept;

use core\base\BaseAdminService;


/**
 * 角色和部门关联服务层
 * Class ScopeService
 * @package addon\data_scope\app\service\admin\data_scope
 */
class ScopeService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new RoleDept();
    }

    /**
     * 获取角色的权限信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'role_id,data_scope,check_strictly,dept_ids';
        $info = $this->model->field($field)->where([['role_id', "=", $id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 保存角色的权限信息
     * @param array $data
     * @return mixed
     */
    public function save(array $data)
    {
        $info = $this->getInfo($data['role_id']);
        $data['dept_ids'] = is_array($data['dept_ids']) ? implode(',', $data['dept_ids']) : $data['dept_ids'];

        if (empty($info)){
            $res = $this->model->create($data);
        }else{
            $res = $this->model->update($data);
        }
        return $res->role_id;
    }

    /**
     * 获取规则列表
     * @param $role_ids
     * @return RoleDept[]|array|\think\Collection
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getScopeList($role_ids)
    {
        return $this->model->field('role_id,data_scope,dept_ids')->whereIn('role_id', $role_ids)->select()->toArray();
    }

}
