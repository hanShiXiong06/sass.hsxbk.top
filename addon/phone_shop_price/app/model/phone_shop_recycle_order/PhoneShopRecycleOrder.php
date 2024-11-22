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

namespace addon\phone_shop_price\app\model\phone_shop_recycle_order;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

use app\model\member\Member;

/**
 * 回收订单模型
 * Class PhoneShopRecycleOrder
 * @package addon\phone_shop_price\app\model\phone_shop_recycle_order
 */
class PhoneShopRecycleOrder extends BaseModel
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
    protected $name = 'phone_shop_recycle_order';

    /**
    * 定义软删除标记字段.
    * @var string
    */
    protected $deleteTime = 'close_express_id';

    /**
    * 定义软删除字段的默认值.
    * @var int
    */
    protected $defaultSoftDelete = 0;

    /**
     * 搜索器:回收订单id
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
     * 搜索器:回收订单数量
     * @param $value
     * @param $data
     */
    public function searchCountAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("count", $value);
        }
    }
    
    /**
     * 搜索器:回收订单快递单号
     * @param $value
     * @param $data
     */
    public function searchExpressIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("express_id", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:回收订单寄件人
     * @param $value
     * @param $data
     */
    public function searchSendUsernameAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("send_username", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:回收订单手机号
     * @param $value
     * @param $data
     */
    public function searchTelphoneAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("telphone", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:回收订单收款方式
     * @param $value
     * @param $data
     */
    public function searchPayTypeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("pay_type", $value);
        }
    }
    
    /**
     * 搜索器:回收订单收款账号
     * @param $value
     * @param $data
     */
    public function searchAccountAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("account", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:回收订单订单状态
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
     * 搜索器:回收订单创建时间
     * @param $value
     * @param $data
     */
    public function searchCreateAtAttr($query, $value, $data)
    {
        $start = empty($value[0]) ? 0 : strtotime($value[0]);
        $end = empty($value[1]) ? 0 : strtotime($value[1]);
        if ($start > 0 && $end > 0) {
             $query->where([["create_at", "between", [$start, $end]]]);
        } else if ($start > 0 && $end == 0) {
            $query->where([["create_at", ">=", $start]]);
        } else if ($start == 0 && $end > 0) {
            $query->where([["create_at", "<=", $end]]);
        }
    }
    
    /**
     * 搜索器:回收订单订单结束时间
     * @param $value
     * @param $data
     */
    public function searchOverAtAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("over_at", $value);
        }
    }
    
    /**
     * 搜索器:回收订单用户备注
     * @param $value
     * @param $data
     */
    public function searchCommentAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("comment", "like", "%".$value."%");
        }
    }
    
    /**
     * 搜索器:回收订单退货单号
     * @param $value
     * @param $data
     */
    public function searchCloseExpressIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("close_express_id", $value);
        }
    }
    
    

    

    
    public function member(){
       return $this->hasOne(Member::class, 'member_no', 'member_id')->joinType('left')->withField('mobile,member_no')->bind(['member_id_name'=>'mobile']);
    }

    // 处理时间 create_at  变 年月日 时分秒

    public function searchCreateTimeAttr($query, $value, $data)
    {
        $start_time = empty($value[ 0 ]) ? 0 : strtotime($value[ 0 ]);
        $end_time = empty($value[ 1 ]) ? 0 : strtotime($value[ 1 ]);
        if ($start_time > 0 && $end_time > 0) {
            $query->whereBetweenTime('create_at', $start_time, $end_time);
        } else if ($start_time > 0 && $end_time == 0) {
            $query->where([ [ 'create_at', '>=', $start_time ] ]);
        } else if ($start_time == 0 && $end_time > 0) {
            $query->where([ [ 'create_at', '<=', $end_time ] ]);
        }
    }

    // public function searchPayTimeAttr($query, $value, $data)
    // {
    //     $start_time = empty($value[ 0 ]) ? 0 : strtotime($value[ 0 ]);
    //     $end_time = empty($value[ 1 ]) ? 0 : strtotime($value[ 1 ]);
    //     if ($start_time > 0 && $end_time > 0) {
    //         $query->whereBetweenTime('create_at', $start_time, $end_time);
    //     } else if ($start_time > 0 && $end_time == 0) {
    //         $query->where([ [ 'create_at', '>=', $start_time ] ]);
    //     } else if ($start_time == 0 && $end_time > 0) {
    //         $query->where([ [ 'create_at', '<=', $end_time ] ]);
    //     }
    // }

}
