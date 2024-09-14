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

namespace addon\phone_shop\app\service\api\goods;

use addon\phone_shop\app\model\goods\Category;
use addon\phone_shop\app\service\core\goods\CoreGoodsCategoryService;
use core\base\BaseApiService;

/**
 *  商品分类服务层
 */
class GoodsCategoryService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Category();
    }

    /**
     * 查询商品分类树结构
     * @param string $field
     * @param string $order
     * @return array
     */
    public function getTree()
    {
        return ( new CoreGoodsCategoryService() )->getTree([ [ 'is_show', '=', 1 ],  [ 'site_id', 'in', "{$this->site_id},100005" ]  ], 'category_id,category_name,image,level,pid,category_full_name');
    }

    /**
     * 获取商品分类配置
     * @return array
     */
    public function getGoodsCategoryConfig()
    {
        return ( new CoreGoodsCategoryService() )->getGoodsCategoryConfig($this->site_id);
    }

    /**
     * 获取商品分类列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getList(array $where = [], $field = 'category_id,category_name,image,level,pid,category_full_name')
    {
        $order = 'sort desc,create_time desc';
        return $this->model->where([ [ 'site_id', 'in', "{$this->site_id},100005" ] , [ 'is_show', '=', 1 ] ])->withSearch([ "category_name", 'level', 'category_id', 'pid' ], $where)->field($field)->order($order)->select()->toArray();
    }

    /* 获取分类详情 */
    function getInfo(int $id){
        $field = 'category_id,site_id,category_name,image,level,pid,category_full_name,is_show,sort';
        


        $info = $this->model->field($field)->where([ [ 'category_id', '=', $id ], [ 'site_id', 'in', "{$this->site_id},100005" ]  ])->findOrEmpty()->toArray();
        // 如果id不属于当前站点 则提示 无权限
        // if( $info['site_id'] !== $this->site_id) {
        //     throw new AdminException('SHOP_GOODS_CATEGORY_NOT_POWER');
        // } 

        if (!empty($info)) {
            $info[ 'child_count' ] = 0;
            if ($info[ 'level' ] == 1) {
                $info[ 'child_count' ] = $this->model->where([ [ 'pid', '=', $info[ 'category_id' ] ] ])->count();
            }
        }
        return $info;
    }
}
