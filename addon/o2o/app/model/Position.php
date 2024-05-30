<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\o2o\app\model;

use addon\o2o\app\dict\TechnicianDict;
use app\dict\sys\FileDict;
use app\model\member\Member;
use core\base\BaseModel;
use think\db\Query;
use think\model\concern\SoftDelete;
use think\model\relation\HasOne;

/**
 * 岗位模型
 * Class Technician
 * @package app\model\o2o_technician
 */
class Position extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'o2o_position';


    public function searchNameAttr($query, $value, $data)
    {
        if (!empty($value)) {
            $query->where([ [ 'name', 'like', '%'.$value.'%' ] ]);
        }
    }
}
