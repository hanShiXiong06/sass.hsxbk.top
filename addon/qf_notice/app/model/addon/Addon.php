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

namespace addon\qf_notice\app\model\addon;

use addon\qf_notice\app\model\category\Category;
use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * 群发应用模型
 * Class Addon
 * @package addon\qf_notice\app\model\addon
 */
class Addon extends BaseModel
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
    protected $name = 'qfnotice_addon';

    /**
     * 搜索器:群发应用名称
     * @param $value
     * @param $data
     */
    public function searchNameAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("name", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:群发应用图像
     * @param $value
     * @param $data
     */
    public function searchImageAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("image", $value);
        }
    }
    
    /**
     * 搜索器:群发应用类型
     * @param $value
     * @param $data
     */
    public function searchTypeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("type", $value);
        }
    }
    
    /**
     * 搜索器:群发应用创建时间
     * @param $value
     * @param $data
     */
    public function searchCreateTimeAttr($query, $value, $data)
    {
        $start = empty($value[0]) ? 0 : strtotime($value[0]);
        $end = empty($value[1]) ? 0 : strtotime($value[1]);
        if ($start > 0 && $end > 0) {
             $query->where([["create_time", "between", [$start, $end]]]);
        } else if ($start > 0 && $end == 0) {
            $query->where([["create_time", ">=", $start]]);
        } else if ($start == 0 && $end > 0) {
            $query->where([["create_time", "<=", $end]]);
        }
    }
    /**
     * 搜索器:群发应用应用分类
     * @param $value
     * @param $data
     */
    public function searchCategoryIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("category_id", $value);
        }
    }
    /**
     * @Notes:获取应用分类列表
     * @Interface category
     * @return HasOne
     * @author: TK
     * @Time: 2024/11/14   下午4:05
     */
    public function category(){
        return $this->hasOne(Category::class, 'id', 'category_id')->joinType('left')->withField('name,id')->bind(['category_id_name'=>'name']);
    }
    

    
}
