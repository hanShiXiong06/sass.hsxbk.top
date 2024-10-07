<?php

// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------

namespace addon\goods_export\app\listener\goods;

use addon\phone_shop\app\model\goods\Goods;
use addon\phone_shop\app\model\goods\GoodsSku;
use addon\phone_shop\app\model\goods\GoodsSpec;
use core\base\BaseService;
use think\db\Query;
use think\facade\Log;

/**
 * 商品导出-niucloud-shop
 */
class ShopGoodsExportDataListener extends BaseService
{
    public function handle($param)
    {
        $data = [];
        $where = $param['where'];
        $this->model = new Goods();
        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,stock,sale_num,status,sort,create_time,member_discount,sub_title,goods_image,unit,goods_desc,delivery_type,virtual_sale_num';
        $order = 'sort asc, create_time desc';
        $sku_where = [
            ['goodsSku.is_default', '=', 1],
        ];

        if (!empty($where['start_price']) && !empty($where['end_price'])) {
            $money = [$where['start_price'], $where['end_price']];
            sort($money);
            $sku_where[] = ['goodsSku.price', 'between', $money];
        } else if (!empty($where['start_price'])) {
            $sku_where[] = ['goodsSku.price', '>=', $where['start_price']];
        } else if (!empty($where['end_price'])) {
            $sku_where[] = ['goodsSku.price', '<=', $where['end_price']];
        }
        if (!empty($where['order'])) {
            $order = $where['order'] . ' ' . $where['sort'];
        }

        $search_model = $this->model->where([['goods.site_id', '=', $param['site_id']]])->withSearch(["goods_name", "goods_type", "brand_id", "goods_category", "label_ids", 'service_ids', "sale_num", "status"], $where)
            ->field($field)
            ->withJoin([
                'goodsSku' => ['sku_id', 'goods_id', 'price', 'member_price', 'market_price', 'cost_price']
            ])->where($sku_where)->order($order)->append(['goods_type_name', 'goods_edit_path', 'goods_cover_thumb_small']);
//        if ($param['page']['page'] > 0 && $param['page']['limit'] > 0) {
            $data = $search_model->page(1, 5000)->select()->toArray();
//        } else {
//            $data = $search_model->select()->toArray();
//        }

        foreach ($data as $k => $v) {
            $urlsArray = explode(',',$v['goods_image']);
            foreach ($urlsArray as$key => $url) {
                $urlsArray[$key] = ['pic_url' => $url];
            }
            $data[$k]['goods_image'] = json_encode($urlsArray);
            $data[$k]['spec_type'] = '0';
            $data[$k]['delivery_type'] = json_encode($v['delivery_type']);
            $data[$k]['price'] = $v['goodsSku']['price'];
            $data[$k]['market_price'] = $v['goodsSku']['market_price'];
            $data[$k]['cost_price'] = $v['goodsSku']['cost_price'];
            $data[$k]['keyword'] = '';
            $data[$k]['video'] = '';
            $data[$k]['sku_spec'] = '';
            $data[$k]['sku_list'] = '';
        }
        return $data;
    }
}