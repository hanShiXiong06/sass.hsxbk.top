<?php
declare(strict_types=1);

namespace addon\phone_shop_price\app\validate\phone_shop_recycle_order;

use think\Validate;

/**
 * 回收订单设备验证器
 */
class PhoneShopRecycleOrderDevice extends Validate
{
    /**
     * 验证规则
     */
    protected $rule = [
        'order_id' => 'require|number',
        'imei' => 'require|length:15,17',
        'model' => 'require|max:100',
        'initial_price' => 'require|float|egt:0',
        'final_price' => 'require|float|egt:0',
        'status' => 'require|in:1,2,3,4,5',
        'check_result' => 'requireIf:status,4|max:500',
        'price_remark' => 'max:500',
        'remark' => 'max:500'
    ];

    /**
     * 错误信息
     */
    protected $message = [
        'order_id.require' => '订单ID不能为空',
        'order_id.number' => '订单ID必须为数字',
        'imei.require' => 'IMEI号不能为空',
        'imei.length' => 'IMEI号长度必须在15-17位之间',
        'model.require' => '设备型号不能为空',
        'model.max' => '设备型号不能超过100个字符',
        'initial_price.require' => '初始价格不能为空',
        'initial_price.float' => '初始价格必须为数字',
        'initial_price.egt' => '初始价格必须大于等于0',
        'final_price.require' => '最终价格不能为空',
        'final_price.float' => '最终价格必须为数字',
        'final_price.egt' => '最终价格必须大于等于0',
        'status.require' => '状态不能为空',
        'status.in' => '状态值不正确',
        'check_result.requireIf' => '验证不通过时必须填写原因',
        'check_result.max' => '验证结果不能超过500个字符',
        'price_remark.max' => '价格备注不能超过500个字符',
        'remark.max' => '备注不能超过500个字符'
    ];

    /**
     * 验证场景
     */
    protected $scene = [
        'add' => ['order_id', 'imei', 'model', 'initial_price', 'remark'],
        'edit' => ['imei', 'model', 'initial_price', 'remark'],
        'edit_status' => ['status', 'check_result'],
        'edit_price' => ['final_price', 'price_remark']
    ];
} 