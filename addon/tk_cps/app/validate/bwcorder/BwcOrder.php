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

namespace addon\tk_cps\app\validate\bwcorder;
use core\base\BaseValidate;
/**
 * 霸王餐订单验证器
 * Class BwcOrder
 * @package addon\tk_cps\app\validate\bwcorder
 */
class BwcOrder extends BaseValidate
{

       protected $rule = [
            
        ];

       protected $message = [
            
        ];

       protected $scene = [
            "add" => ['member_id', 'orderSn', 'order_no', 'userOrderSn', 'paidAmount', 'shopOriginId', 'orderTelephone', 'name', 'logo', 'address', 'platform', 'platformName', 'platformLogo', 'source', 'actionUrl', 'planId', 'planTypeCh', 'planTypeDescCh', 'plan', 'commissionType', 'sid', 'minAmount', 'maxAmount', 'commission', 'commissionRatio', 'ecommission', 'ecommissionRatio', 'state', 'createTime', 'finishedTime', 'xgzSettleStatus', 'xgzSettleTime', 'close_time', 'reason', 'fanxian', 'is_fanxian'],
            "edit" => ['member_id', 'orderSn', 'order_no', 'userOrderSn', 'paidAmount', 'shopOriginId', 'orderTelephone', 'name', 'logo', 'address', 'platform', 'platformName', 'platformLogo', 'source', 'actionUrl', 'planId', 'planTypeCh', 'planTypeDescCh', 'plan', 'commissionType', 'sid', 'minAmount', 'maxAmount', 'commission', 'commissionRatio', 'ecommission', 'ecommissionRatio', 'state', 'createTime', 'finishedTime', 'xgzSettleStatus', 'xgzSettleTime', 'close_time', 'reason', 'fanxian', 'is_fanxian']
        ];

}
