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
 * 回收订单主模型
 * Class RecycleOrder
 * @package addon\phone_shop_price\app\model\recycle_order
 */
class RecycleOrder extends BaseModel
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
    protected $name = 'phone_shop_recycle_order';

    

    

    /**
     * 搜索器:回收订单主
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
     * 搜索器:回收订单主订单号
     * @param $value
     * @param $data
     */
    public function searchOrderNoAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("order_no", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主用户ID
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
     * 搜索器:回收订单主设备数量
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
     * 搜索器:回收订单主快递单号
     * @param $value
     * @param $data
     */
    public function searchExpressIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("express_id", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主寄件人
     * @param $value
     * @param $data
     */
    public function searchSendUsernameAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("send_username", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主手机号
     * @param $value
     * @param $data
     */
    public function searchTelphoneAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("telphone", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主收款方式
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
     * 搜索器:回收订单主收款账号
     * @param $value
     * @param $data
     */
    public function searchAccountAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("account", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主发货方式：mail-邮寄，self-自送
     * @param $value
     * @param $data
     */
    public function searchDeliveryTypeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("delivery_type", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主退货方式：self-自取，mail-邮寄
     * @param $value
     * @param $data
     */
    public function searchReturnTypeAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("return_type", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主收款码图片
     * @param $value
     * @param $data
     */
    public function searchQrcodeImageAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("qrcode_image", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主退货地址
     * @param $value
     * @param $data
     */
    public function searchReturnAddressAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("return_address", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主订单状态:1待签收,2待质检,3质检中,4质检完成,5订单完成,6有退货,7全部退货
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
     * 搜索器:回收订单主创建时间
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
     * 搜索器:回收订单主更新时间
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
     * 搜索器:回收订单主订单结束时间
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
     * 搜索器:回收订单主备注
     * @param $value
     * @param $data
     */
    public function searchCommentAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("comment", $value);
        }
    }
    
    /**
     * 搜索器:回收订单主退货单号
     * @param $value
     * @param $data
     */
    public function searchCloseExpressIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("close_express_id", $value);
        }
    }
    
    

    

    
}
