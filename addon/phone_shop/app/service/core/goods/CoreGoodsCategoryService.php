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

namespace addon\phone_shop\app\service\core\goods;

use addon\phone_shop\app\model\goods\Category;
use core\base\BaseCoreService;


/**
 * 商品分类
 * Class CoreGoodsCategoryService
 * @package addon\phone_shop\app\service\core\goods
 */
class CoreGoodsCategoryService extends BaseCoreService
{
    //系统配置文件

    public function __construct()
    {
        parent::__construct();
        $this->model = new Category();
    }

    /**
     * 设置商品分类配置
     * @param array $params
     * @return array
     */
    public function setGoodsCategoryConfig(array $params = [])
    {
        $goods_config_service = new CoreGoodsConfigService();
        $res = $goods_config_service->setGoodsCategoryConfig($params);
        return $res;
    }

    /**
     * 获取商品分类配置
     * @return array
     */
    public function getGoodsCategoryConfig(int $site_id)
    {
        $goods_config_service = new CoreGoodsConfigService();
        $res = $goods_config_service->getGoodsCategoryConfig($site_id);
        return $res;
    }

    /**
     * 查询商品分类树结构
     * @param string $condition
     * @param string $field
     * @param string $order
     * @return array
     */
    public function getTree($condition = [], $field = 'category_id,site_id, category_name,image,level,pid,category_full_name,is_show,sort', $order = 'sort desc, create_time desc')
{
    // 获取分类列表
    $list = $this->model->where($condition)->field($field)->order($order)->select()->toArray();
    
    // 计算每个分类下的商品数量
    foreach ($list as &$category) {
        // 处理多对多关系的 category_id
        $category['goods_count'] = $this->model->calcCount($category['category_id']);
    }
    
    // 转换为树形结构
    $list = list_to_tree($list, 'category_id', 'pid', 'child_list');
    
    return $list;
}


}
