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

use addon\data_scope\app\model\data_scope\SysDept;
use addon\data_scope\app\model\data_scope\SysDeptUser;
use core\base\BaseAdminService;


/**
 * 部门服务层
 * Class SysDeptService
 * @package addon\data_scope\app\service\admin\data_scope
 */
class SysDeptService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new SysDept();
    }

    /**
     * 获取部门列表
     * @param array $where
     * @return array
     */
    public function getSysDeptAll(array $where = []){
        $field = 'dept_id,p_dept_id,site_id,dept_name,sort,status,create_time,update_time';
        $order = 'sort asc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["dept_name","status"], $where)->field($field)->order($order);;

        return $this->menuToTree($search_model->select()->toArray());
    }


    /**
     * 把返回的数据集转换成Tree(专属于)
     * @param $list 要转换的数据集
     * @param string $pk
     * @param string $pid
     * @param string $child
     * @param int $root
     * @return array
     */
    public function menuToTree($data, $pid = 0, $field = 'dept_id', $childField = 'p_dept_id', $childName = 'children')
    {
        $arr = array();

        foreach ($data as $key => $value) {
            $arr[$value[$field]] = $value;
        }
        $tree = [];
        foreach ($arr as $k => $v) {
            if (isset($arr[$v[$childField]])) {
                $arr[$v[$childField]][$childName][] = &$arr[$v[$field]];
            } else {
                $tree[] = &$arr[$v[$field]];
            }
        }
        return $tree;
    }

    /**
     * 获取部门信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'dept_id,p_dept_id,site_id,dept_name,sort,status,create_time,update_time';

        $info = $this->model->field($field)->where([['dept_id', "=", $id]])->findOrEmpty()->toArray();;
        return $info;
    }

    /**
     * 添加部门
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $res = $this->model->create($data);
        return $res->dept_id;

    }

    /**
     * 部门编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {

        $this->model->where([['dept_id', '=', $id],['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除部门
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['dept_id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }

    /**
     * 获取关联的用户
     * @param int $id
     * @return array
     */
    public function getBindUser(int $id)
    {
        $info = SysDeptUser::where('dept_id',$id)->column('uid');
        return $info;
    }

    /**
     * 绑定用户
     * @param array $data
     * @return int
     */
    public function bindUser(array $data)
    {
        // 先删除之前的
        SysDeptUser::where('dept_id',$data['dept_id'])->delete();
        // 添加新得
        $insert = [];
        foreach ($data['uid'] as $uid){
            if (empty($uid)) continue;
            $insert[] = [
                'dept_id' => $data['dept_id'],
                'uid' => $uid
            ];
        }
        return SysDeptUser::insertAll($insert);
    }

}
