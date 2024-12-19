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

namespace addon\hsx_phone_query\app\model;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * 配置信息模型
 * Class HsxPhoneQueryConfig
 * @package addon\hsx_phone_query\app\model\hsx_phone_query
 */
class HsxPhoneQueryInfo extends BaseModel
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
    protected $name = 'hsx_phone_query_info';
    /**
     * 搜索器:配置信息主键
     * @param $value
     * @param $data
     */
    public function searchIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("id", $value);
        }
    }
    // 通过 查询sn 和 imei 搜索器
    public function searchSN($query, $value, $data){
        if ($value) {
            $query->where("sn", $value);
        }
    }
    // type 类型搜索器
    public function searchTypeAttr($query, $value, $data){
        if ($value) {
            $query->where("type", $value);
        }
    }
// 关联分类
public function category()
{
    return $this->hasOne(HsxPhoneQueryCategory::class, 'id', 'type_id');
}
    
public function getTypeNameAttr($value, $data)
{
    // 通过关联获取 category 并返回 name
    $category = $this->category()->find();
    return $category ? $category->name : '未知分类';
}
    

    

    
}
