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

// use addon\hsx_exam\app\model\questions\Category;
use app\dict\sys\FileDict;
use core\base\BaseModel;
use think\db\Query;
use think\model\concern\SoftDelete;

/**
 * 商品模型
 * Class Goods
 * @package addon\shop\app\model\goods
 */
class Questions extends BaseModel
{

    use SoftDelete;

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'hsx_exam_questions';


    // 设置JSON数据返回数组
    protected $jsonAssoc = true;

    /**
     * 获取商品分类
     */

    // 处理 options on
    public function getOptionsAttr($value, $data)
    {
        if (!is_array($value)) {
            $value = json_decode($value, true);
        }
        if (!empty($value)) {
            return array_map(function($item) {
                return  $item;
            }, $value);
        }
    }




    /**
     * 搜索器:商品商品id
     * @param $value
     * @param $data
     */
    public function searchQuestionsIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("id", $value);
        }
    }

    /**
     * 搜索器:商品商品名称
     * @param $value
     * @param $data
     */
    public function searchQuestionsDescAttr($query, $value, $data)
    {
        if ($value != '') {
            $query->where("questions_desc", "like", "%" . $this->handelSpecialCharacter($value) . "%");
        }
    }
    /**
     * 跨表查分类名字
     * */ 
    public function searchQuestionsCategoryName()
    {
        return $this->hasOne( Category::class, 'category_id', 'category_id')->joinType('left')->withField('category_id, category_name')->bind([ 'category_name' => 'category_name' ]);
    }


 

}
