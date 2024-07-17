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
 * 部门用户模型
 * Class SysDept
 * @package addon\data_scope\app\model\data_scope
 */
class SysDeptUser extends BaseModel
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
    protected $name = 'data_scope_user_dept';

}
