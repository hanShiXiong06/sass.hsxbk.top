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
use addon\phone_shop\app\model\shop_address\ShopAddress;
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
        $this->Address =  new ShopAddress();
        
    
    
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
    // address_list 获取商家的收货地址
    public function address_list(){
     
        $field = 'id,contact_name,mobile,province_id,city_id,district_id,address,full_address,lat,lng,is_delivery_address,is_refund_address,is_default_delivery,is_default_refund';
        $order = '';

        $search_model = $this->Address->where([ ['site_id', '=', $this->site_id] ])->withSearch([ "mobile", "full_address" ], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    
    }

}
