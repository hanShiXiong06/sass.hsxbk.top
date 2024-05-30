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

namespace addon\tourism\app\service\api\scenic;

use addon\tourism\app\model\Goods;
use addon\tourism\app\service\api\calendar\GoodsDayService;
use core\base\BaseApiService;

/**
 * 门票
 * Class TourismGoodsService
 * @package app\service\admin\tourism_goods
 */
class TicketService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 获取景点门票列表
     * @param int $scenic_id
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    public function getListByScenicId(int $scenic_id)
    {
        $field = 'site_id,goods_id,goods_name,goods_type,hotel_id,goods_cover,goods_image,goods_content,goods_attribute,status,sort,price,sale_price,cost_price,create_time,stock,sell_type, buy_info';
        $order = 'create_time desc';
        return $this->model->where([['site_id', '=', $this->site_id],['scenic_id', '=', $scenic_id], ['goods_type', '=', "scenic"]])->field($field)->order($order)->select()->toArray();
    }

    /**
     * 获取门票信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'site_id,goods_name,goods_type,hotel_id,goods_cover,goods_image,goods_content,goods_attribute,status,sort,price,sale_price,cost_price,create_time,stock,sell_type';
        $info = $this->model->field($field)->where([['goods_id', '=', $id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
        return $info;
    }
    /**
     * 获取门票当前价格
     * @param $day
     * @param int $goods_id
     * @return \addon\tourism\app\model\GoodsDay|array|mixed|\think\Model
     */
    public function getTicketPrice($day, int $goods_id)
    {
        $price = (new GoodsDayService())->getGoodsDayPrice($day, $goods_id);
        if(empty((float)$price))
        {
            $field = 'price';
            $info = $this->model->field($field)->where([['goods_id', '=', $goods_id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
            if(empty($info))
            {
                $price = 0;
            }else{
                $price = $info['price'];
            }
        }
        return $price;

    }

}
