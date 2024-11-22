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

namespace addon\shop\app\service\api\goods;

use addon\shop\app\dict\goods\RankDict;
use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\goods\GoodsSku;
use addon\shop\app\model\goods\Rank;
use addon\shop\app\model\goods\Stat;
use addon\shop\app\service\core\goods\CoreGoodsRankConfigService;
use core\base\BaseApiService;
use app\model\member\Member;
use function Yansongda\Artful\ignite;


/**
 * 商品评价服务层
 * Class EvaluateService
 * @package addon\shop\app\service\admin\goods
 */
class RankService extends BaseApiService
{
    protected $goodsStatModel;
    protected $goodsModel;

    public function __construct()
    {
        parent::__construct();
        $this->model = new Rank();
        $this->goodsStatModel = new Stat();
        $this->goodsModel = new Goods();
    }

    // todo 查询商品榜单列表（分页）

    // todo 查询某个榜单下的商品列表，要根据当前榜单的排序规则查询，最好返回每个商品的排名
    /*
     * todo
        根据 rank_id 查询榜单信息
        查询 榜单下的商品列表，根据商品的来源方式（指定商品【支持手动拖拽排序】，指定分类，指定品牌，指定标签），进行查询
        排行周期，筛选一段时间范围内的商品，统计出商品的销量、收藏、评价、浏览量等，然后根据排序规则展示
     */

    /**
     * 获取商品排行榜配置
     * @return array
     */
    public function getGoodsRankConfig()
    {
        return ( new CoreGoodsRankConfigService() )->getGoodsRankConfig($this->site_id);
    }

    /**
     * 获取商品榜单列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'rank_id,site_id,name,show_goods_num,rank_type,goods_source,rule_type,goods_json,category_ids,brand_ids,label_ids,sort,create_time';
        $order = 'sort desc';
        $search_model = $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ "name" ], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);

        if ($list['data']) {
            foreach ($list['data'] as &$item) {
                $item['goods_list'] = $this->getGoodsList($item,3);
            }
        }
        return $list;
    }

    /**
     * 获取商品榜单列表
     * @param array $data
     * @return array
     */
    public function getGoodsPage($data)
    {
        $rank_id = $data[ 'rank_id' ];
        $rank_info = $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->find($rank_id);
        $list = [];
        if($rank_info){
            $list = $this->getGoodsList($rank_info,0);
        }
        return $list;
    }

    /**
     * 获取商品榜单组件列表
     * @param array $data
     * @return array
     */
    public function getRankComponents($data)
    {
        $rank_ids = $data[ 'rank_ids' ];
        $where[] = [
            ['site_id', '=', $this->site_id],
        ];
        if (!empty($rank_ids)){
            $rank_ids = explode(',',$data[ 'rank_ids' ]);
            $where[] = [
                ['rank_id', 'in', $rank_ids]
            ];
        }
        $num = $data[ 'num' ];
        $order = 'sort desc';
        $list = $this->model->where($where)->limit($num)->order($order)->select()->toArray();
        if ($list) {
            foreach ($list as &$item) {
                $item['goods_list'] = $this->getGoodsList($item,3);
            }
        }
        return $list;
    }

    /**
     * 根据榜单设置条件查询对应的商品信息
     */
    protected function getGoodsList($rank_info, $limit = 0)
    {
        //根据排行周期 获取时间区间
        $date_end = strtotime(date('Y-m-d 23:59:59'));
        switch ($rank_info['rank_type']) {
            case RankDict::DAY:
                $day = 1;
                break;
            case RankDict::WEEK:
                $day = 7;
                break;
            case RankDict::MONTH:
                $day = 30;
                break;
            case RankDict::QUARTER:
                $day = 90;
                break;
        }
        $date_start = $date_end - 86400 * $day +1;
        $goods_list = [];
        $field = 'goods.site_id,goods.goods_id,goods_name,goods_type,goods_cover,unit,goods.sale_num + goods.virtual_sale_num as sale_num,member_discount,virtual_receive_type,label_ids,brand_id,sum(stat.sale_num) as stat_sale_num,sum(stat.collect_num) as stat_collect_num,sum(stat.evaluate_num) as stat_evaluate_num,sum(stat.access_num) as stat_access_num';
        $order = 'stat_'.$rank_info['rule_type'].'_num desc';
        // 来源类型 goods=指定商品，category=指定分类，brand=指定品牌, label=指定标签
        if ($rank_info['goods_source'] == RankDict::GOODS) {
            // 根据配置的排行周期查询对应的商品
            $goods_json = $rank_info['goods_json'];
            $goods_ids = $this->getGoodsIds($rank_info);
            $config_goods_ids = array_column($goods_json, 'goods_id');
            $diff_goods_ids = array_intersect($config_goods_ids, $goods_ids);
            $list = $this->goodsModel
                ->field('site_id,goods_id,goods_name,goods_type,goods_cover,unit,sale_num + virtual_sale_num as sale_num,member_discount,virtual_receive_type,label_ids,brand_id')
                ->where([['site_id', '=', $this->site_id], ['goods_id', 'in', $diff_goods_ids]])
                ->limit($limit)
                ->append([ 'goods_cover_thumb_small', 'goods_cover_thumb_mid', 'goods_label_name', 'goods_brand' ])
                ->select()
                ->toArray();

            $sort_goods_josn = array_column($goods_json, null, 'goods_id');
            $diy_sort_arr = [];
            foreach ($goods_list as &$item) {
                $item['div_sort'] = $sort_goods_josn[$item['goods_id']]['sort'] ?? 0;
                $diy_sort_arr[] = $sort_goods_josn[$item['goods_id']]['sort'] ?? 0;
            }
            array_multisort($diy_sort_arr,SORT_DESC, $goods_list);
            if ($limit == 0){
                $goods_list = [
                    'total'=>count($list),
                    'per_page'=>15,
                    'current_page'=>1,
                    'last_page'=>1,
                    'data'=>$list,
                ];
            }else{
                $goods_list = $list;
            }

        }elseif ($rank_info['goods_source'] == RankDict::CATEGORY){
            $category_ids = $rank_info['category_ids'];
            $query = $this->goodsModel
                ->alias('goods')
                ->field($field)
                ->where([['goods.site_id', '=', $this->site_id]])
                ->whereBetweenTime('date_time',$date_start,$date_end)
                ->withSearch(['goods_category'],[ 'goods_category' => $category_ids ])
                ->join('shop_goods_stat stat','goods.goods_id = stat.goods_id','left')
                ->group('goods.goods_id')
                ->limit($limit)
                ->order($order)
                ->append([ 'goods_cover_thumb_small', 'goods_cover_thumb_mid', 'goods_label_name', 'goods_brand' ]);
                if ($limit == 0){
                    $goods_list = $this->pageQuery($query);
                }else{
                    $goods_list = $query->select()->toArray();
                }
        }elseif ($rank_info['goods_source'] == RankDict::BRAND){
            $brand_ids = $rank_info['brand_ids'];
            $query = $this->goodsModel
                ->alias('goods')
                ->field($field)
                ->where([['goods.site_id', '=', $this->site_id]])
                ->whereBetweenTime('date_time',$date_start,$date_end)
                ->whereIn('goods.brand_id',$brand_ids)
                ->join('shop_goods_stat stat','goods.goods_id = stat.goods_id','left')
                ->group('goods.goods_id')
                ->limit($limit)
                ->order($order)
                ->append([ 'goods_cover_thumb_small', 'goods_cover_thumb_mid', 'goods_label_name', 'goods_brand' ]);
                if ($limit == 0){
                    $goods_list = $this->pageQuery($query);
                }else{
                    $goods_list = $query->select()->toArray();
                }
        }elseif ($rank_info['goods_source'] == RankDict::LABEL){
            $label_ids = $rank_info['label_ids'];
            $query = $this->goodsModel
                ->alias('goods')
                ->field($field)
                ->where([['goods.site_id', '=', $this->site_id]])
                ->whereBetweenTime('date_time',$date_start,$date_end)
                ->withSearch(['label_ids'],[ 'label_ids' => $label_ids ])
                ->join('shop_goods_stat stat','goods.goods_id = stat.goods_id','left')
                ->group('goods.goods_id')
                ->limit($limit)
                ->order($order)
                ->append([ 'goods_cover_thumb_small', 'goods_cover_thumb_mid', 'goods_label_name', 'goods_brand' ]);
                 if ($limit == 0){
                     $goods_list = $this->pageQuery($query);
                 }else{
                     $goods_list = $query->select()->toArray();
                 }
        }
        $goods_service = new GoodsService();
        //获取商品SKU、会员价格信息
        $member_info = [];
        if (isset($goods_list['data'])){
            if (!empty($goods_list['data'])){
                if (!empty($this->member_id)) {
                    $member_info = $this->getMemberInfo();
                }
                foreach ($goods_list['data'] as $key=>&$item) {
                    $item['rank_num'] = $key+1;
                    $item['goodsSku'] = $this->getGoodsSku($item);
                    if (!empty($this->member_id) && !empty($item[ 'goodsSku' ])) {
                        $item[ 'goodsSku' ]['member_price'] = $goods_service->getMemberPrice($member_info, $item[ 'member_discount' ], $item[ 'goodsSku' ][ 'member_price' ], $item[ 'goodsSku' ][ 'price' ]);
                    }
                }
            }
        }else{
            if (!empty($goods_list)) {
                if (!empty($this->member_id)) {
                    $member_info = $this->getMemberInfo();
                }
                foreach ($goods_list as $key=>&$item) {
                    $item['rank_num'] = $key+1;
                    $item['goodsSku'] = $this->getGoodsSku($item);
                    if (!empty($this->member_id) && !empty($item[ 'goodsSku' ])) {
                        $item[ 'goodsSku' ]['member_price'] = $goods_service->getMemberPrice($member_info, $item[ 'member_discount' ], $item[ 'goodsSku' ][ 'member_price' ], $item[ 'goodsSku' ][ 'price' ]);
                    }
                }
            }
        }
        return $goods_list;
    }

    /**
     * 根据排行周期查询商品统计数据
     */
    protected function getGoodsIds($data)
    {
        $rank_type = $data['rank_type'];
        $date_end = strtotime(date('Y-m-d 23:59:59'));
        switch ($rank_type) {
            case RankDict::DAY:
                $day = 1;
                break;
            case RankDict::WEEK:
                $day = 7;
                break;
            case RankDict::MONTH:
                $day = 30;
                break;
            case RankDict::QUARTER:
                $day = 90;
                break;
        }
        $date_start = $date_end - 86400 * $day +1;
        $goods_ids = $this->goodsStatModel->where([['site_id', '=', $this->site_id]])->whereBetweenTime('date_time',$date_start,$date_end)->column('goods_id');
        return $goods_ids;
    }

    /**
     * 获取商品SKU
     */
    protected function getGoodsSku($data)
    {
        $goods_sku_info = (new GoodsSku())->field('sku_id,sku_name,sku_image,sku_no,goods_id,sku_spec_format,price,market_price,sale_price,stock,weight,volume,member_price')
            ->where([
                [ 'site_id', '=', $this->site_id ],
                [ 'goods_id', '=', $data['goods_id'] ]
            ])
            ->find();
        return $goods_sku_info;
    }

    /**
     * 获取会员信息
     */
    public function getMemberInfo()
    {
        $member_model = new Member();
        $member_field = 'member_level';
        $member_info = $member_model->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'member_id', '=', $this->member_id ]
        ])->field($member_field)
            ->with([
                // 会员等级
                'memberLevelData' => function($query) {
                    $query->field('level_id, site_id, level_name, status, level_benefits, level_gifts');
                },
            ])
            ->findOrEmpty()->toArray();
        return $member_info;
    }

}
