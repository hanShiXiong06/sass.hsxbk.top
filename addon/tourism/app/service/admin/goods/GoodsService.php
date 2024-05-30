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

namespace addon\tourism\app\service\admin\goods;

use addon\tourism\app\model\Goods;
use addon\tourism\app\model\GoodsDay;
use core\base\BaseAdminService;

/**
 * 房型
 * Class TourismGoodsService
 * @package app\service\admin\tourism_goods
 */
class GoodsService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 选择商品
     * @param $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getListOfSelect($where = []){
        $where[] = ['site_id', '=', $this->site_id];
        $field = 'goods_id, site_id, goods_name, goods_type, goods_cover, goods_image, status, price, stock, create_time, way_id, hotel_id, scenic_id';
        $order = 'create_time desc';

        $search_model = $this->model->where([['site_id', '=', $this->site_id]])
            ->withSearch(['create_time','goods_type', 'goods_name'], $where)->field($field)->order($order)
            ->append(['status_name','cover_thumb_mid', 'cover_thumb_small', 'goods_type_name']);
        $list = $this->pageQuery($search_model);
        return $list;
    }
}