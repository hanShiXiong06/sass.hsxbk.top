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

namespace addon\phone_shop_price\app\service\api\recycle_category;

use addon\phone_shop_price\app\model\recycle_category\RecycleCategory;
use addon\phone_shop_price\app\service\core\RecycleCategory\CoreRecycleCategoryService;

use core\base\BaseAdminService;


/**
 * 二手机分类服务层
 * Class RecycleCategoryService
 * @package addon\phone_shop_price\app\service\admin\recycle_category
 */
class RecycleCategoryService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new RecycleCategory();
    }


    /**
     * 查询商品分类树结构
     * @param string $field
     * @param string $order
     * @return array
     */
    public function getTree()
    {
        return ( new CoreRecycleCategoryService() )->getTree([ [ 'site_id', 'in', "{$this->site_id}" ]  ]);
    }

}
