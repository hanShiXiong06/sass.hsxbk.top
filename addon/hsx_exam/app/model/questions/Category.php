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

namespace addon\hsx_exam\app\model\questions;

use core\base\BaseModel;

/**
 * 商品分类模型
 * Class Category
 * @package addon\hsx_exam\app\model\goods
 */
class Category extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'category_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'hsx_exam_category';

    /**
     * 搜索器:商品分类分类名称
     * @param $value
     * @param $data
     */
    public function searchCategoryNameAttr($query, $value, $data)
    {
        if ($value != '') {
            $query->where("category_name", "like", "%" . $value . "%");
        }
    }

    /**
     * 搜索器:商品分类id
     * @param $value
     * @param $data
     */
    public function searchCategoryIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("category_id", "=",  $value );
        }
    }

    /**
     * 搜索器:pid
     * @param $value
     * @param $data
     */
    public function searchPidAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("pid", "=",  $value );
        }
    }

}
