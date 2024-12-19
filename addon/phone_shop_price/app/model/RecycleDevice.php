<?php
namespace addon\phone_shop_price\app\model;

use core\base\BaseModel;

/**
 * 回收设备模型
 */
class RecycleDevice extends BaseModel
{
    protected $table = 'phone_shop_recycle_device';
    
    protected $pk = 'id';
    
    protected $createTime = 'create_time';
    protected $updateTime = 'update_time';
    
    /**
     * 状态获取器
     */
    public function getStatusTextAttr($value, $data)
    {
        $status = [0 => '禁用', 1 => '启用'];
        return $status[$data['status']] ?? '';
    }
} 