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

namespace addon\hsx_phone_query\app\service\api\hsx_phone_query;

use addon\hsx_phone_query\app\model\HsxPhoneQueryCategory;

use core\base\BaseAdminService;


/**
 * 分类服务层
 * Class HsxPhoneQueryCategoryService
 * @package addon\hsx_phone_query\app\service\admin\hsx_phone_query_category
 */
class HsxPhoneQueryCategoryService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new HsxPhoneQueryCategory();
    }

    /**
     * 获取分类列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
{
    $field = 'id,type_id,name,price';
    $order = 'sort desc';

    $list = $this->model->where([ ['site_id', '=', $this->site_id] ])
        ->withSearch(['id', 'type_id', 'name', 'price'], $where)
        ->field($field)
        ->order($order)
        ->select()
        ->toArray();

    // Initialize arrays for different types
    $type1Array = [];
    $type2Array = [];
    $othersArray = [];

    // Iterate over the list and assign names and categorize them
    foreach ($list as &$item) {
        switch ($item['type_id']) {
            case 1:
                $type1Array[] = $item;
                break;
            case 2:
               
                $type2Array[] = $item;
                break;
            default:
               
                if ($item['type_id'] == 9) {
                    $othersArray[] = $item;
                } else {
                    // Other types, if necessary, can be handled here
                }
                break;
        }
    }

    // Combine the arrays back if needed, or return them as a structured array
    $result = [
    [ 
        'id'=>1,
        'name'=>'苹果查询',
        'child'=>$type1Array
    ],
    [   'id'=>2, 'name'=>'安卓查询','child'=>$type2Array],
    [   'id'=>3, 'name'=>'其他查询','child'=> $othersArray],
    ];

    return $result;
}

    
}
