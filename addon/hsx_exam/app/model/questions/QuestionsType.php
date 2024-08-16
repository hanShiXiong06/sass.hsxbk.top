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
class QuestionsType extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'questions_type';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'hsx_exam_questions_type';



    /**
     * 搜索器:商品分类id
     * @param $value
     * @param $data
     */
    public function searchCategoryIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("questions_type", "=",  $value );
        }
    }



}
