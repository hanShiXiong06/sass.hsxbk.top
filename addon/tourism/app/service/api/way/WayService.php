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

namespace addon\tourism\app\service\api\way;

use addon\tourism\app\model\Goods;
use addon\tourism\app\model\GoodsDay;
use addon\tourism\app\model\Way;
use addon\tourism\app\service\api\calendar\GoodsDayService;
use app\dict\sys\FileDict;
use Carbon\Carbon;
use core\base\BaseApiService;
use core\exception\CommonException;

/**
 * 线路服务层
 * Class WayService
 * @package addon\tourism\app\service\api\way
 */
class WayService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Way();
    }

    /**
     * 获取线路列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'way_id,site_id,group_buy_type,way_theme,travel_type,way_traffic,way_name,start_city,end_city,way_status,create_time';
        $order = $where['order'];
        $search_model = $this->model->where([['site_id', '=', $this->site_id],['way_status', '=', 1]])->withSearch(["way_name", "start_city", "end_city", "status", "create_time", "search_name"], $where)->field($field)->with(['goods' => function($query) {
        $query->field('goods_id, site_id, goods_name, goods_type, way_id, goods_cover, goods_image, goods_content, sort, status, sale_num, price, buy_info');
        }])->order($order)->append(['group_buy_type_name', 'way_theme_name','travel_type_name', 'way_traffic_name']);
        $list = $this->pageQuery($search_model);

        $time = date("Y-m-d", time());
        foreach ($list['data'] as $key => $val){
            $price = (new GoodsDayService())->getGoodsDayPrice($time, $val['goods']['goods_id']) ?? $val['goods']['price'];
            if($price == 0)
            {
                $list['data'][$key]['price'] = $val['goods']['price'];
            }else{
                $list['data'][$key]['price'] = $price;
            }

            $list['data'][$key]['goods']['cover_thumb_mid'] = get_thumb_images($val['site_id'], $val['goods']['goods_cover'], FileDict::MID);
        }

        return $list;
    }

    /**
     * 获取线路信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'way_id,site_id,group_buy_type,way_theme,travel_type,way_traffic,way_name,start_city,end_city,way_status,create_time,way_character,fee_desc';

        $info = $this->model->field($field)->where([['way_id', '=', $id], ['site_id', '=', $this->site_id]])->field($field)->with(['goods' => function($query) {
                $query->field('goods_id, site_id, goods_name, goods_type, way_id, goods_cover, goods_image, goods_content, sort, status, sale_num, price, stock, buy_info');
            }])->append(['group_buy_type_name', 'way_theme_name','travel_type_name', 'way_traffic_name'])->findOrEmpty()->toArray();

        $info['goods']['image_thumb_big'] = [];
        $goods_image = explode(",", $info['goods']['goods_image']);
        foreach ($goods_image as $val){
            $info['goods']['image_thumb_big'][] = get_thumb_images($info['site_id'], $val, FileDict::BIG);
        }
        $info['goods']['cover_thumb_big'] = get_thumb_images($info['site_id'], $info['goods']['goods_cover'], FileDict::BIG);
        $time = date("Y-m-d", time());
        $price = (new GoodsDayService())->getGoodsDayPrice($time, $info['goods']['goods_id']) ?? $info['goods']['price'];
        if($price == 0)
        {
            $info['price'] = $info['goods']['price'];
        }else{
            $info['price'] = $price;
        }

        return $info;
    }

    /**
     * 获取推荐路线
     * @return array|mixed
     */
    public function getRecommend(array $data = [])
    {
        $field = 'way_id,site_id,group_buy_type,way_theme,travel_type,way_traffic,way_name,start_city,end_city,way_status,create_time';
        $order = 'create_time desc';
        $condition = [
            ['site_id', '=', $this->site_id],
            ['way_status', '=', 1],
        ];
        if(!empty($data['goods_ids'])){
            $condition[] = ['way_id', 'in', $data['goods_ids']];
        }
        $list = $this->model->where($condition)->field($field)->with(['goods' => function($query) {
            $query->field('goods_id, site_id, goods_name, goods_type, way_id, goods_cover, goods_image, goods_content, sort, status, sale_num, price');
        }])->order($order)->limit($data['limit'])->append(['group_buy_type_name', 'way_theme_name','travel_type_name', 'way_traffic_name'])->select()->toArray();

        $time = date("Y-m-d", time());
        foreach ($list as $key => $val){
            $price = (new GoodsDayService())->getGoodsDayPrice($time, $val['goods']['goods_id']) ?? $val['goods']['price'];
            if($price == 0)
            {
                $list[$key]['price'] = $val['goods']['price'];
            }else{
                $list[$key]['price'] = $price;
            }
            $list[$key]['goods']['cover_thumb_big'] = get_thumb_images($val['site_id'], $val['goods']['goods_cover'], FileDict::BIG);
            $list[$key]['goods']['cover_thumb_mid'] = get_thumb_images($val['site_id'], $val['goods']['goods_cover'], FileDict::MID);
        }
        return $list;
    }

    /**
     * 获取价格日历
     * @param int $way_id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getGoodsDay(int $way_id){
        $goods = (new Goods())->field("goods_id,price")->where([ ['site_id', '=', $this->site_id], ['way_id', '=', $way_id ] ])->findOrEmpty();
        if ($goods->isEmpty()) throw new CommonException('GOODS_NOT_EXIST');

        $start_time = Carbon::today()->getTimestamp();
        $end_time = $start_time + (86400 * 31);

        $goods_day_list = (new GoodsDay())->where([
            [ 'goods_id', '=', $goods['goods_id'] ],
            [ 'time', '>=', $start_time ],
            [ 'time', '<=', $end_time ],
            [ 'is_set', '>', 0]
        ])->field('price,time')->select()->toArray();

        $list = [];
        if (!empty($goods_day_list)) {
            foreach ($goods_day_list as $item) {
                $key = date('Y-m-d', $item['time']);
                $list[$key] = $item;
            }
        }

        $data = [];
        for ($i = 0; $i <= 31; $i++) {
            $date = date('Y-m-d', $start_time + (86400 * $i));
            $data[$date] = isset($list[$date]) ? $list[$date]['price'] : $goods['price'];
        }
        return $data;
    }
}
