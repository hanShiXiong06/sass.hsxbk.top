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

namespace addon\phone_shop_price\app\api\controller\recycle_category;

use core\base\BaseAdminController;
use addon\phone_shop_price\app\service\api\recycle_category\RecycleCategoryService;


/**
 * 二手机分类控制器
 * Class RecycleCategory
 * @package addon\phone_shop_price\app\adminapi\controller\recycle_category
 */
class RecycleCategory extends BaseAdminController
{
   
     /**
     * 获取商品分类树结构
     * @return \think\Response
     */
    public function tree()
    {
        return success(( new RecycleCategoryService() )->getTree());
    }

    
}
