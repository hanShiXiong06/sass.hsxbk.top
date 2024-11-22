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

namespace addon\tk_cps\app\model\act;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * CPS活动链接模型
 * Class Act
 * @package addon\tk_cps\app\model\act
 */
class Act extends BaseModel
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
    protected $name = 'cps_act';

    

    

    /**
     * 搜索器:CPS活动链接活动id
     * @param $value
     * @param $data
     */
    public function searchIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("id", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接活动id
     * @param $value
     * @param $data
     */
    public function searchActIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("act_id", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接活动名称
     * @param $value
     * @param $data
     */
    public function searchActNameAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("act_name", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:CPS活动链接活动类型
     * @param $value
     * @param $data
     */
    public function searchTypeAttr($query, $value, $data)
    {
       if ($value!='') {
            $query->where("type", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接描述
     * @param $value
     * @param $data
     */
    public function searchDescAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("desc", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接图像
     * @param $value
     * @param $data
     */
    public function searchImgAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("img", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接图标
     * @param $value
     * @param $data
     */
    public function searchIconAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("icon", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接海报
     * @param $value
     * @param $data
     */
    public function searchPosterAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("poster", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接比例
     * @param $value
     * @param $data
     */
    public function searchCommissionRateAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("commission_rate", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接活动介绍
     * @param $value
     * @param $data
     */
    public function searchIntroduceAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("introduce", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接归属说明
     * @param $value
     * @param $data
     */
    public function searchAttributionExplainAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("attribution_explain", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接结算时间
     * @param $value
     * @param $data
     */
    public function searchSettlementTimeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("settlement_time", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接开始时间
     * @param $value
     * @param $data
     */
    public function searchStartDateAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("start_date", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接结算时间
     * @param $value
     * @param $data
     */
    public function searchEndDateAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("end_date", $value);
        }
    }
    
    /**
     * 搜索器:CPS活动链接创建时间
     * @param $value
     * @param $data
     */
    public function searchCreateTimeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("create_time", $value);
        }
    }
    
    

    

    
}
