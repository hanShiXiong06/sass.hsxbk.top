<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\vipcard\app\service\api\goods;

use addon\vipcard\app\dict\GoodsDict;
use addon\vipcard\app\model\Goods;
use core\base\BaseApiService;

/**
 * 商品服务层(项目)
 * Class GoodsService
 * @package addon\vipcard\app\service\api\goods
 */
class GoodsService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 获取商品列表(service)
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {

        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,goods_image,category_id,sale_num,verify_validity_type,verify_validity,status,sort,create_time,update_time,price,virtually_sale';
        $order = 'create_time desc';

        $search_model = $this->model->where([['site_id', '=', $this->site_id], ['goods_type', '=', GoodsDict::getGoodsType("service")["type"]], ['status', '=', 1]])->withSearch(["goods_name","create_time","category_id"], $where)->field($field)->with('category')->order($order)->append(['cover_thumb_small', 'cover_thumb_mid']);
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
        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,goods_image,category_id,sale_num,verify_validity_type,verify_validity,status,sort,create_time,update_time,price,buy_info,goods_content,is_reserve,is_reserve_pay,virtually_sale,reserve_record';

        $info = $this->model->field($field)->where([['goods_id', '=', $id], ['site_id', '=', $this->site_id]])->with('category')->findOrEmpty()->append(['cover_thumb_small', 'cover_thumb_mid', 'image_thumb_small', 'sale_num'])->toArray();
        return $info;
    }

    /**
     * 获取商品列表(service)
     * @param array $where
     * @return array
     */
    public function getList(array $data)
    {

        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,goods_image,category_id,sale_num,verify_validity_type,verify_validity,status,sort,create_time,update_time,price,virtually_sale';
        $order = 'create_time desc';

        $list = $this->model->where([['site_id', '=', $this->site_id], ['goods_type', '=', GoodsDict::getGoodsType("service")["type"]], ['status', '=', 1]])->field($field)->with('category')->order($order)->append(['cover_thumb_small', 'cover_thumb_mid'])->select()->toArray();
        return $list;
    }
}