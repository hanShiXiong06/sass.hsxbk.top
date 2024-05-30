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

namespace addon\o2o\app\service\api\goods;

use addon\o2o\app\dict\GoodsDict;
use addon\o2o\app\model\Goods;
use addon\o2o\app\model\GoodsSku;
use app\model\member\Member;
use core\base\BaseApiService;

/**
 * 商品服务层(项目)
 * Class GoodsService
 * @package addon\o2o\app\service\api\goods
 */
class GoodsService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 获取商品列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {

        $field = 'goods_id,site_id,goods_name,goods_cover,goods_image,goods_category,(sale_num + virtually_sale) as sale_num,status,sort,create_time,update_time,price,buy_type';

        // 参数过滤
        if (!empty($where[ 'order' ]) && in_array($where[ 'order' ], [ 'sale_num', 'price' ])) {
            $order = $where[ 'order' ] . ' '.$where['sort'];
        } else {
            $order = 'sort desc,create_time desc';
        }
        $condition = [['site_id', '=', $this->site_id], ['status', '=', 1], ['is_delete', '=', 0]];
        if($where['goods_category']){
            $goods_category = (new GoodsCategoryService())->getChildId($where['goods_category']);
            array_push($goods_category, $where['goods_category']);
            $condition[] = ['goods_category', 'in', $goods_category];
        }

        $search_model = $this->model->where($condition)->withSearch(["goods_name","create_time",'goods_ids'], $where)->field($field)->with(['category', 'goods_sku'])->order($order)->append(['cover_thumb_small','buy_type_name']);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取商品信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'goods_id,site_id,goods_name,goods_cover,goods_image,goods_category,(sale_num + virtually_sale) as sale_num,status,sort,create_time,update_time,price,buy_info,goods_content,price_list';

        $info = $this->model->field($field)->where([['goods_id', '=', $id], ['site_id', '=', $this->site_id], ['is_delete', '=', 0]])->with('category')->findOrEmpty()->append(['cover_thumb_small','image_thumb_small', 'sale_num'])->toArray();
        return $info;
    }

    /**
     * 获取商品详情
     * @param array $data
     * @return array
     */
    public function getDetail(array $data)
    {
        $sku_id = $data[ 'sku_id' ];
        $goods_id = $data[ 'goods_id' ];

        $goods_sku_model = new GoodsSku();

        if (empty($sku_id) && !empty($goods_id)) {
            $default_sku_info = $goods_sku_model->where([ [ 'goods_id', '=', $goods_id ], [ 'site_id', '=', $this->site_id ] ], 'sku_id')
                ->field('sku_id')->findOrEmpty()->toArray();
            if (!empty($default_sku_info)) {
                $sku_id = $default_sku_info[ 'sku_id' ];
            }
        }

        $field = 'sku_id, sku_name, sku_image, sku_no, goods_id, site_id, price, sku_unit,min_buy, is_default';

        $info = $goods_sku_model->where([ [ 'sku_id', '=', $sku_id ], [ 'site_id', '=', $this->site_id ] ])
            ->field($field)
            ->with([
                'goods',
                'skuList' => function($query) {
                    $query->field('sku_id, sku_name, sku_image, sku_no, goods_id, site_id, price, sku_unit,min_buy, is_default');
                },

            ])
            ->append([ 'sku_image_thumb_small', 'sku_image_thumb_mid', 'sku_image_thumb_big', 'goods.buy_type_name', 'goods.goods_image_thumb_mid' ])
            ->findOrEmpty()->toArray();

        return $info;
    }

    /**
     * 获取商品列表(service)
     * @param array $where
     * @return array
     */
    public function getList(array $data)
    {

        $field = 'goods_id,site_id,goods_name,goods_cover,goods_image,goods_category,(sale_num + virtually_sale) as sale_num,status,sort,create_time,update_time,price';
        $order = 'create_time desc';

        $list = $this->model->where([['site_id', '=', $this->site_id], ['status', '=', 1], ['is_delete', '=', 0]])->field($field)->with('category')->order($order)->append(['cover_thumb_small'])->select()->toArray();
        return $list;
    }

    /**
     * 获取商品列表供组件调用
     * @param array $where
     * @return array
     */
    public function getGoodsComponents(array $where = [])
    {
        $field = 'goods_id,site_id,goods_name,goods_category,goods_cover,status,sale_num + goods.virtually_sale as sale_num, price,buy_type,price_list';

        $sku_where = [
            [ 'goodsSku.is_default', '=', 1 ],
            [ 'goodsSku.site_id', '=', $this->site_id ],
            [ 'status', '=', 1 ]
        ];

        if (!empty($where[ 'goods_ids' ])) {
            $sku_where[] = [ 'goods.goods_id', 'in', $where[ 'goods_ids' ] ];
        }

        // 参数过滤
        if (!empty($where[ 'order' ]) && in_array($where[ 'order' ], [ 'sale_num', 'price' ])) {
            $order = $where[ 'order' ] . ' desc';
        } else {
            $order = 'sort desc,create_time desc';
        }

        $list = $this->model
            ->withSearch([ "goods_category"], $where)
            ->field($field)
            ->withJoin([ 'goodsSku' ])
            ->where($sku_where)->order($order)->append([ 'cover_thumb_small', 'cover_thumb_mid', 'buy_type_name'])
            ->limit($where[ 'num' ])
            ->select()->toArray();
        return $list;
    }

}