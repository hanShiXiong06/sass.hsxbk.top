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

namespace addon\tk_cps\app\model\actorder;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * CPS活动订单模型
 * Class Actorder
 * @package addon\tk_cps\app\model\actorder
 */
class Actorder extends BaseModel
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
    protected $name = 'cps_act_order';

    

    

    /**
     * 搜索器:CPS活动订单跟单参数
     * @param $value
     * @param $data
     */
    public function searchSidAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("sid", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:CPS活动订单订单号
     * @param $value
     * @param $data
     */
    public function searchOrderIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("order_id", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:CPS活动订单激励结算
     * @param $value
     * @param $data
     */
    public function searchJlJsAttr($query, $value, $data)
    {
       if ($value!='') {
            $query->where("jl_js", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动订单平台结算
     * @param $value
     * @param $data
     */
    public function searchPtJsAttr($query, $value, $data)
    {
       if ($value!='') {
            $query->where("pt_js", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动订单创建时间
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
    
    

    

    
}
