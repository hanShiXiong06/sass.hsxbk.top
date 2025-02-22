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

namespace addon\phone_shop_price\app\validate\recycle_order_device;
use core\base\BaseValidate;
/**
 * 回收订单设备验证器
 * Class RecycleOrderDevice
 * @package addon\phone_shop_price\app\validate\recycle_order_device
 */
class RecycleOrderDevice extends BaseValidate
{

       protected $rule = [
            'order_id' => 'require',
            'imei' => 'require',
            'model' => 'require',
            'status' => 'require',
            'check_status' => 'require'
        ];

       protected $message = [
            'order_id.require' => ['common_validate.require', ['order_id']],
            'imei.require' => ['common_validate.require', ['imei']],
            'model.require' => ['common_validate.require', ['model']],
            'status.require' => ['common_validate.require', ['status']],
            'check_status.require' => ['common_validate.require', ['check_status']]
        ];

       protected $scene = [
            "add" => ['order_id', 'imei', 'model', 'status', 'check_status', 'check_result', 'initial_price', 'final_price', 'price_remark', 'create_at', 'update_at', 'check_at'],
            "edit" => ['order_id', 'imei', 'model', 'status', 'check_status', 'check_result', 'initial_price', 'final_price', 'price_remark', 'create_at', 'update_at', 'check_at']
        ];

}
