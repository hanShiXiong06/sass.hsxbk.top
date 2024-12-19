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

namespace addon\hlwoauth\app\model\hlwoauth;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;
use think\facade\Route;
/**
 * 域名授权模型
 * Class Domain
 * @package addon\hlwoauth\app\model\hlwoauth
 */
class Domain extends BaseModel
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
    protected $name = 'hlwoauth_domain';

    

    

    /**
     * 搜索器:域名授权名称
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
     * 搜索器:域名授权名称
     * @param $value
     * @param $data
     */
    public function searchScopeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("scope", "=", $value);
        }
    }
    
    /**
     * 搜索器:域名授权次数
     * @param $value
     * @param $data
     */
    public function searchNumberAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("number", $value);
        }
    }
    
    /**
     * 搜索器:域名授权状态
     * @param $value
     * @param $data
     */
    public function searchStatusAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("status", $value);
        }
    }
    
    /**
     * 搜索器:域名授权创建时间
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

    public function getAuthUrlAttr($value, $data){
        return (string)Route::buildUrl("/addon/hlwoauth/{$data['site_id']}/{$data['id']}",[])->suffix(false)->domain(true);
    }
    

    

    
}
