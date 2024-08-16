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

namespace addon\tk_cps\app\model\actitem;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * 活动详情模型
 * Class ActItem
 * @package addon\tk_cps\app\model\actitem
 */
class ActItem extends BaseModel
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
    protected $name = 'cps_act_item';

    

    

    /**
     * 搜索器:活动详情
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
     * 搜索器:活动详情活动id
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
     * 搜索器:活动详情活动名称
     * @param $value
     * @param $data
     */
    public function searchActNameAttr($query, $value, $data)
    {
        if ($value!='') {
            $query->where("act_name", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:活动详情活动类型
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
     * 搜索器:活动详情h5链接
     * @param $value
     * @param $data
     */
    public function searchH5Attr($query, $value, $data)
    {
       if ($value) {
            $query->where("h5", $value);
        }
    }
    
    /**
     * 搜索器:活动详情微信小程序信息
     * @param $value
     * @param $data
     */
    public function searchWeappAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("weapp", $value);
        }
    }
    
    /**
     * 搜索器:活动详情支付宝小程序信息
     * @param $value
     * @param $data
     */
    public function searchAliappAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("aliapp", $value);
        }
    }
    
    /**
     * 搜索器:活动详情推广信息
     * @param $value
     * @param $data
     */
    public function searchShareInfoAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("share_info", $value);
        }
    }
    
    /**
     * 搜索器:活动详情创建时间
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
