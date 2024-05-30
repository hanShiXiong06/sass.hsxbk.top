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

namespace addon\tourism\app\service\api\hotel;

use addon\tourism\app\model\Goods;
use addon\tourism\app\model\GoodsDay;
use addon\tourism\app\service\api\calendar\GoodsDayService;
use Carbon\Carbon;
use core\base\BaseApiService;
use core\exception\CommonException;

/**
 * 房型
 * Class TourismGoodsService
 * @package app\service\admin\tourism_goods
 */
class RoomService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 获取酒店的房型列表
     * @param int $hotel_id
     */
    public function getListByHotelId(int $hotel_id, $order = "create_time desc", $date = '')
    {
        $field = 'site_id,hotel_id,goods_id,stock,goods_name,goods_type,hotel_id,goods_cover,goods_image,goods_content,goods_attribute,status,price,create_time,room_bed,room_area,room_stay,room_floor,buy_info';
        $list = $this->model->where([['site_id', '=', $this->site_id],['hotel_id', '=', $hotel_id],['goods_type', '=', "room"],['status', '=', 1]])->field($field)->order($order)->append(['attr_name', 'image_thumb_mid','image_thumb_big','cover_thumb_mid','cover_thumb_big'])->select()->toArray();
        $time = date("Y-m-d", $date ? strtotime($date) : time());
        foreach ($list as $k => $v)
        {
            $goods_day = (new GoodsDay())->where([ ['goods_id', '=', $v['goods_id'] ], ['time_date', '=', $time] ])->field('price,stock_all,sell_num,stock')->findOrEmpty();
            if (!$goods_day->isEmpty()) {
                $list[$k]['price'] = $goods_day['price'];
                $stock = $goods_day['stock_all'] - $goods_day['sell_num'];
                if($stock <= 0)
                {
                    $stock = 0;
                }
                $list[$k]['stock'] = $stock;
            }
        }
        return $list;
    }

    /**
     * 获取房型当前价格
     * @param $day
     * @param int $room_id
     * @return \addon\tourism\app\model\GoodsDay|array|mixed|\think\Model
     */
    public function getRoomPrice($day, int $room_id)
    {
        $price = (new GoodsDayService())->getGoodsDayPrice($day, $room_id);
        if(empty((float)$price))
        {
            $field = 'price';
            $info = $this->model->field($field)->where([['goods_id', '=', $room_id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
            $price = $info['price'];
        }
        return $price;

    }

    /**
     * 获取房型表信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'site_id,goods_name,stock,goods_type,hotel_id,goods_cover,goods_image,goods_content,goods_attribute,status,sort,price,create_time,room_bed,room_area,room_stay,room_floor';

        $info = $this->model->field($field)->where([['goods_id', '=', $id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 获取价格日历
     * @param int $hotel_id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getGoodsDay(int $hotel_id){
        $goods = (new Goods())->field("goods_id,price")->where([ ['site_id', '=', $this->site_id], ['hotel_id', '=', $hotel_id ], ['is_default', '=', 1] ])->findOrEmpty();
        if ($goods->isEmpty()) throw new CommonException('GOODS_NOT_EXIST');

        $start_time = Carbon::today()->getTimestamp();
        $end_time = $start_time + (86400 * 30);

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
        for ($i = 0; $i <= 30; $i++) {
            $date = date('Y-m-d', $start_time + (86400 * $i));
            $data[$date] = isset($list[$date]) ? $list[$date]['price'] : $goods['price'];
        }
        return $data;
    }
}
