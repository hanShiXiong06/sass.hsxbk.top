<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\model\phone_shop_recycle_order;

use core\base\BaseModel;

/**
 * 回收订单模型层
 * Class PhoneShopRecycleOrder
 * @package addon\phone_shop_price\app\model\phone_shop_recycle_order
 */
class PhoneShopRecycleOrder extends BaseModel
{
    /**
     * 数据表主键
     */
    protected $pk = 'id';

    /**
     * 模型名称
     */
    protected $name = 'phone_shop_recycle_order';

    /**
     * 搜索器
     */
    protected $searchFields = [
        'order_no' => '%like%',
        'send_username' => '%like%',
        'telphone' => '%like%',
        'status' => '=',
        'create_at' => 'between'
    ];

    /**
     * 设备关联
     */
    public function devices()
    {
        return $this->hasMany('addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrderDevice', 'order_id', 'id');
    }

    /**
     * 订单号搜索器
     * @param $query
     * @param $value
     */
    public function searchOrderNoAttr($query, $value)
    {
        if ($value) {
            $query->where([['order_no', 'like', "%{$value}%"]]);
        }
    }

    /**
     * 寄件人搜索器
     * @param $query
     * @param $value
     */
    public function searchSendUsernameAttr($query, $value)
    {
        if ($value) {
            $query->where([['send_username', 'like', "%{$value}%"]]);
        }
    }

    /**
     * 电话搜索器
     * @param $query
     * @param $value
     */
    public function searchTelphoneAttr($query, $value)
    {
        if ($value) {
            $query->where([['telphone', 'like', "%{$value}%"]]);
        }
    }

    /**
     * 状态搜索器
     * @param $query
     * @param $value
     */
    public function searchStatusAttr($query, $value)
    {
        if ($value !== '') {
            $query->where([['status', '=', $value]]);
        }
    }

    /**
     * 创建时间搜索器
     * @param $query
     * @param $value
     */
    public function searchCreateAtAttr($query, $value)
    {
        if ($value) {
            if (is_array($value)) {
                $query->where([['create_at', 'between', $value]]);
            } else {
                $query->where([['create_at', '=', $value]]);
            }
        }
    }
} 