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

namespace addon\tk_cps\app\model\bwcorder;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * 霸王餐订单模型
 * Class BwcOrder
 * @package addon\tk_cps\app\model\bwcorder
 */
class BwcOrder extends BaseModel
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
    protected $name = 'cpsbwc_order';

    

    

    /**
     * 搜索器:霸王餐订单会员id
     * @param $value
     * @param $data
     */
    public function searchMemberIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("member_id", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单霸王餐订单号
     * @param $value
     * @param $data
     */
    public function searchOrderSnAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("orderSn", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:霸王餐订单商城订单号
     * @param $value
     * @param $data
     */
    public function searchOrderNoAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("order_no", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:霸王餐订单三方订单号
     * @param $value
     * @param $data
     */
    public function searchUserOrderSnAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("userOrderSn", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:霸王餐订单支付金额
     * @param $value
     * @param $data
     */
    public function searchPaidAmountAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("paidAmount", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单店铺id
     * @param $value
     * @param $data
     */
    public function searchShopOriginIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("shopOriginId", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单报名电话
     * @param $value
     * @param $data
     */
    public function searchOrderTelephoneAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("orderTelephone", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:霸王餐订单名称
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
     * 搜索器:霸王餐订单logo
     * @param $value
     * @param $data
     */
    public function searchLogoAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("logo", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单地址
     * @param $value
     * @param $data
     */
    public function searchAddressAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("address", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单平台名称
     * @param $value
     * @param $data
     */
    public function searchPlatformNameAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("platformName", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:霸王餐订单平台logo
     * @param $value
     * @param $data
     */
    public function searchPlatformLogoAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("platformLogo", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单来源
     * @param $value
     * @param $data
     */
    public function searchSourceAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("source", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单报名活动ID
     * @param $value
     * @param $data
     */
    public function searchPlanIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("planId", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单要求
     * @param $value
     * @param $data
     */
    public function searchPlanTypeChAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("planTypeCh", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单活动限制
     * @param $value
     * @param $data
     */
    public function searchPlanTypeDescChAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("planTypeDescCh", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单结算方式
     * @param $value
     * @param $data
     */
    public function searchCommissionTypeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("commissionType", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单跟单参数
     * @param $value
     * @param $data
     */
    public function searchSidAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("sid", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单门槛
     * @param $value
     * @param $data
     */
    public function searchMinAmountAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("minAmount", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单最大返现
     * @param $value
     * @param $data
     */
    public function searchMaxAmountAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("maxAmount", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单结算金额
     * @param $value
     * @param $data
     */
    public function searchCommissionAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("commission", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单佣金比例
     * @param $value
     * @param $data
     */
    public function searchCommissionRatioAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("commissionRatio", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单预估金额
     * @param $value
     * @param $data
     */
    public function searchEcommissionAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("ecommission", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单预估比率
     * @param $value
     * @param $data
     */
    public function searchEcommissionRatioAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("ecommissionRatio", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单状态
     * @param $value
     * @param $data
     */
    public function searchStateAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("state", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单创建时间
     * @param $value
     * @param $data
     */
//    public function searchCreateTimeAttr($query, $value, $data)
//    {
//       if ($value) {
//            $query->where("createTime", $value);
//        }
//    }
    
    /**
     * 搜索器:霸王餐订单完成时间
     * @param $value
     * @param $data
     */
    public function searchFinishedTimeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("finishedTime", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单结算状态
     * @param $value
     * @param $data
     */
    public function searchXgzSettleStatusAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("xgzSettleStatus", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单结算时间
     * @param $value
     * @param $data
     */
    public function searchXgzSettleTimeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("xgzSettleTime", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单创建时间
     * @param $value
     * @param $data
     */
    public function searchCreateTimeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("create_time", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单关闭时间
     * @param $value
     * @param $data
     */
    public function searchCloseTimeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("close_time", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单原因
     * @param $value
     * @param $data
     */
    public function searchReasonAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("reason", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单返现
     * @param $value
     * @param $data
     */
    public function searchFanxianAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("fanxian", $value);
        }
    }
    
    /**
     * 搜索器:霸王餐订单是否返现
     * @param $value
     * @param $data
     */
    public function searchIsFanxianAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("is_fanxian", $value);
        }
    }
    
    

    

    
}
