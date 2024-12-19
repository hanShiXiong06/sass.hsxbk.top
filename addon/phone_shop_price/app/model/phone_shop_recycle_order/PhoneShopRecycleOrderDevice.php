<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\model\phone_shop_recycle_order;

use core\base\BaseModel;

/**
 * 回收订单设备模型层
 * Class PhoneShopRecycleOrderDevice
 * @package addon\phone_shop_price\app\model\phone_shop_recycle_order
 */
class PhoneShopRecycleOrderDevice extends BaseModel
{
    /**
     * 数据表主键
     */
    protected $pk = 'id';

    /**
     * 模型名称
     */
    protected $name = 'phone_shop_recycle_order_device';

    /**
     * 搜索器
     */
    protected $searchFields = [
        'imei' => '%like%',
        'model' => '%like%',
        'status' => '=',
        'create_at' => 'between'
    ];

    /**
     * 订单关联
     */
    public function order()
    {
        return $this->belongsTo('addon\phone_shop_price\app\model\phone_shop_recycle_order\PhoneShopRecycleOrder', 'order_id', 'id');
    }

    /**
     * IMEI搜索器
     * @param $query
     * @param $value
     */
    public function searchImeiAttr($query, $value)
    {
        if ($value) {
            $query->where([['imei', 'like', "%{$value}%"]]);
        }
    }

    /**
     * 型号搜索器
     * @param $query
     * @param $value
     */
    public function searchModelAttr($query, $value)
    {
        if ($value) {
            $query->where([['model', 'like', "%{$value}%"]]);
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