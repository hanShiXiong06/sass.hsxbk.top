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

namespace addon\shop\app\service\api\marketing\pointexchange;


use addon\shop\app\model\exchange\Exchange;
use core\base\BaseApiService;
use app\model\member\Member;
use app\model\member\MemberAccountLog;
use app\dict\member\MemberAccountTypeDict;
use think\facade\Db;


/**
 * 积分商城服务层
 * Class StoreService
 * @package addon\shop\app\service\admin\delivery
 */
class ExchangeService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Exchange();
    }


    /**
     * 获取积分商城列表   ok
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'status,total_exchange_num,stock,id,site_id,type,names,title,image,status,product_detail,point,price,limit_num,content,sort,total_point_num,total_price_num,total_order_num,total_member_num,update_time,create_time';
        if (!empty($where['order']) && in_array($where['order'], ['total_order_num', 'total_exchange_num', 'price'])) {
            $order = $where['order'] . ' ' . $where['sort'];
        } else {
            $order = 'total_order_num desc,sort desc';
        }
        $search_model = $this->model->where([['site_id', '=', $this->site_id]])->withSearch(['names', 'status', 'create_time'], $where)->append(['type_name', 'status_name','goods_cover_thumb_big','goods_cover_thumb_small','goods_cover_thumb_mid'])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }


    /**
     * 获取积分商城详情
     * @param int $active_id
     * @return array
     */
    public function getDetail(int $id)
    {

        $field = 'total_exchange_num,id,site_id,type,names,title,image,status,product_detail,point,price,limit_num,content,sort,total_point_num,total_price_num,total_order_num,total_member_num,update_time,create_time';
        $info = $this->model->where([['id', '=', $id], ['site_id', '=', $this->site_id]])->append(['type_name'])->field($field)->findOrEmpty()->toArray();
        if (!empty($info)) {
            $goods_info = (new  \addon\shop\app\service\api\goods\GoodsService)->getDetail(['goods_id' => $info['product_detail'][0]['goods_id'], 'sku_id' => $info['product_detail'][0]['sku_id']]);
            $goods_info['goods']['goods_desc'] = $info['content'];
            $goods_info['sale_num'] = $info['total_exchange_num'];
            $goods_info['goods']['goods_name'] = $info['names'];
            $goods_info['goods']['goods_image'] = $info['image'];
            $goods_info['goods']['goods_image_thumb_big'] = explode(',', $info['image']);
            $goods_info['goods']['goods_cover_thumb_mid'] = $goods_info['goods']['goods_image_thumb_big'][0] ?? '';
            $goods_info['goods']['sub_title'] = $info['title'];
            $product_detail_array = $info['product_detail'];
            $product_detail_array = array_column($product_detail_array, null, 'sku_id');
            $reset_sku_id = reset($product_detail_array)['sku_id'];
            $goods_info['price'] = $product_detail_array[$reset_sku_id]['price'];
            $goods_info['market_price'] = $product_detail_array[$reset_sku_id]['price'];
            $goods_info['sale_price'] = $product_detail_array[$reset_sku_id]['price'];
            $goods_info['stock'] = $product_detail_array[$reset_sku_id]['stock'];
            $goods_info['point'] = $product_detail_array[$reset_sku_id]['point'];
            $goods_info['exchange_id'] = $id;
            foreach ($goods_info['skuList'] as &$item) {
                $item['limit_num'] = 0;
                $item['point'] = 0;
                $item['stock'] = 0;
                $item['is_default'] = $reset_sku_id == $item['sku_id'] ? 1 : 0;
                if (isset($product_detail_array[$item['sku_id']])) {
                    $item['price'] = $product_detail_array[$item['sku_id']]['price'];
                    $item['market_price'] = $product_detail_array[$item['sku_id']]['price'];
                    $item['sale_price'] = $product_detail_array[$item['sku_id']]['price'];
                    $item['stock'] = $product_detail_array[$item['sku_id']]['stock'];
                    $item['point'] = $product_detail_array[$item['sku_id']]['point'];
                    $item['limit_num'] = $product_detail_array[$item['sku_id']]['limit_num'];
                }
            }
        }
        return $goods_info ?? [];
    }


    /**
     * 获取积分商城详情
     * @param int $active_id
     * @return array
     */
    public function getInfo($where)
    {
        $field = 'stock,total_exchange_num,id,site_id,type,names,title,image,status,product_detail,point,price,limit_num,content,sort,total_point_num,total_price_num,total_order_num,total_member_num,update_time,create_time';
        $info = $this->model->where([['site_id', '=', $this->site_id]])->withSearch(['names', 'status', 'create_time', 'product_detail', 'sku_id', 'goods_id'], $where)->append(['type_name'])->field($field)->findOrEmpty()->toArray();
        return $info;
    }









    /**********************************************************组件调用***************************************************************************************/


    /**
     * 获取商品列表供组件调用
     * @param array $where
     * @return array
     */
    public function getGoodsComponents(array $where = [])
    {
        $field = 'status,total_exchange_num,stock,id,site_id,type,names,title,image,status,product_detail,point,price,limit_num,content,sort,total_point_num,total_price_num,total_order_num,total_member_num,update_time,create_time';
        $goods_where[] = ['stock', '>', 0];
        $goods_where[] = ['site_id', '=', $this->site_id];
        if (!empty($where['order']) && in_array($where['order'], ['total_order_num', 'total_exchange_num', 'price'])) {
            $order = $where['order'] . ' ' . $where['sort'];
        } else {
            $order = 'total_order_num desc,sort desc';
        }
        $list = $this->model->where($goods_where)->withSearch(['names', 'status', 'ids'], $where)->append(['type_name', 'status_name','goods_cover_thumb_big','goods_cover_thumb_small','goods_cover_thumb_mid'])->field($field)->order($order)->limit($where['num'])->select()->toArray();
        return $list;
    }

    /**
     * 获取组件调用 会员当前积分数+今日积分数
     * @param array $where
     * @return array
     */
    public function getPointInfo()
    {
        $point_data = (new Member())->where([['member_id', '=', $this->member_id], ['site_id', '=', $this->site_id]])->field('point')->findOrEmpty()->toArray();
        $condition = [
            ['site_id', '=', $this->site_id],
            ['account_type', '=', MemberAccountTypeDict::POINT],
            ['account_data', '>', 0],
            ['member_id', '=', $this->member_id],
        ];
        $today_point = (new MemberAccountLog())->where($condition)->whereBetweenTime('create_time', strtotime("today"), strtotime("today") + 86400)->sum('account_data');
        $point_data['today_point'] = $today_point;
        return $point_data;
    }


}
