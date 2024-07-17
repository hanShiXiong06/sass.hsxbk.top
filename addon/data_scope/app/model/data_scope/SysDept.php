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

namespace addon\data_scope\app\model\data_scope;

use core\base\BaseModel;

/**
 * 部门模型
 * Class SysDept
 * @package addon\data_scope\app\model\data_scope
 */
class SysDept extends BaseModel
{

    

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'dept_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'data_scope_sys_dept';

    /**
     * 搜索器:部门部门名称
     * @param $value
     * @param $data
     */
    public function searchDeptNameAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("dept_name", $value);
        }
    }
    
    /**
     * 搜索器:部门部门状态（1正常 0停用）
     * @param $value
     * @param $data
     */
    public function searchStatusAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("status", $value);
        }
    }

}
