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

namespace addon\phone_shop_price\app\model\recycle_order;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * 回收订单设备模型
 * Class RecycleOrderDevice
 * @package addon\phone_shop_price\app\model\recycle_order_device
 */
class RecycleDevice extends BaseModel
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
    protected $name = 'phone_shop_recycle_order_device';

    

    

    /**
     * 搜索器:回收订单设备
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
     * 搜索器:回收订单设备订单ID
     * @param $value
     * @param $data
     */
    public function searchOrderIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("order_id", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备IMEI号码
     * @param $value
     * @param $data
     */
    public function searchImeiAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("imei", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备设备型号
     * @param $value
     * @param $data
     */
    public function searchModelAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("model", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备状态：1-正常，2-已退回
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
     * 搜索器:回收订单设备验机状态：0-未验机，1-验机中，2-验机完成
     * @param $value
     * @param $data
     */
    public function searchCheckStatusAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("check_status", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备验机详情
     * @param $value
     * @param $data
     */
    public function searchCheckResultAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("check_result", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备初始报价
     * @param $value
     * @param $data
     */
    public function searchInitialPriceAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("initial_price", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备最终报价
     * @param $value
     * @param $data
     */
    public function searchFinalPriceAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("final_price", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备报价备注
     * @param $value
     * @param $data
     */
    public function searchPriceRemarkAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("price_remark", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备创建时间
     * @param $value
     * @param $data
     */
    public function searchCreateAtAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("create_at", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备更新时间
     * @param $value
     * @param $data
     */
    public function searchUpdateAtAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("update_at", $value);
        }
    }
    
    /**
     * 搜索器:回收订单设备验机时间
     * @param $value
     * @param $data
     */
    public function searchCheckAtAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("check_at", $value);
        }
    }
    
    

    

    
}
