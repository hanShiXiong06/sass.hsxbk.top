<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tourism\app\model;

use core\base\BaseModel;
use think\db\Query;
use think\model\concern\SoftDelete;

/**
 * 旅游订单模型
 * Class Scenic
 * @package addon\tourism\app\model
 */
class TourismOrderItem extends BaseModel
{
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'order_item_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'tourism_order_item';
}