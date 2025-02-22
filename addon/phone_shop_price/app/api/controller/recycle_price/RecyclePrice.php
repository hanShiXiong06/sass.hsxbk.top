<?php
namespace addon\phone_shop_price\app\api\controller\recycle_price;

use app\api\controller\BaseAdminController;
use addon\phone_shop_price\app\service\api\recycle_price\RecycleCategoryService;

/**
 * 回收价格控制器
 */
class RecyclePrice extends BaseAdminController
{
    /**
     * 获取分类树
     */
    public function getTree()
    {
        return success((new RecycleCategoryService())->getTree());
    }
}