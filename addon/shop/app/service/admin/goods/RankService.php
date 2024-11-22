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

namespace addon\shop\app\service\admin\goods;

use addon\shop\app\dict\goods\RankDict;
use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\goods\Rank;
use addon\shop\app\service\core\goods\CoreGoodsRankConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;


/**
 * 商品排行榜服务层
 * Class RankService
 * @package addon\shop\app\service\admin\goods
 */
class RankService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Rank();
    }

    /**
     * 获取商品排行榜列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'rank_id,site_id,name,show_goods_num,rank_type,goods_source,rule_type,sort,create_time';
        $order = 'sort desc,create_time desc';
        $search_model = $this->model
            ->where([ [ 'site_id', '=', $this->site_id ] ])
            ->withSearch([ "name",'rank_type'], $where)
            ->field($field)
            ->order($order)->append([ 'rank_type_name', 'goods_source_name', 'rule_type_name' ]);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取商品排行榜列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getList(array $where = [], $field = 'rank_id,site_id,name,show_goods_num,rank_type,goods_source,rule_type,goods_json,category_ids,brand_ids,label_ids,sort,create_time')
    {
        $order = 'create_time desc';
        return $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ "name", 'level' ], $where)->field($field)->order($order)->select()->toArray();
    }

    /**
     * 添加商品榜单
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {

        $data[ 'create_time' ] = time();
        $data[ 'site_id' ] = $this->site_id;
        $rankInfo = $this->model->where([['site_id', '=', $this->site_id], ['name', '=', $data['name']]])->findOrEmpty()->toArray();
        if($rankInfo) {
            throw new AdminException('商品榜单已存在，请检查');
        }

        if(!empty($data['goods_source']) && $data['goods_source'] == RankDict::GOODS){
            $data['show_goods_num'] = count($data['goods_json']);
        }
        $data = $this->checkRankData($data); // 将其他类型的字段值重置


        $res = $this->model->create($data);
        return $res->rank_id;

    }

    protected function checkRankData($data)
    {
        // 重置字段，防止修改后字段值错误
        if ($data['goods_source'] == RankDict::GOODS) {
            $data['category_ids'] = [];
            $data['brand_ids'] = [];
            $data['label_ids'] = [];
        }
        if ($data['goods_source'] == RankDict::CATEGORY) {
            $data['goods_json'] = [];
            $data['brand_ids'] = [];
            $data['label_ids'] = [];
        }
        if ($data['goods_source'] == RankDict::BRAND) {
            $data['category_ids'] = [];
            $data['goods_json'] = [];
            $data['label_ids'] = [];
        }
        if ($data['goods_source'] == RankDict::LABEL) {
            $data['category_ids'] = [];
            $data['brand_ids'] = [];
            $data['goods_json'] = [];
        }
        return $data;
    }


    /**
     * 修改商品榜单
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function edit(int $id, array $data)
    {
        $info = $this->model->where([ [ 'rank_id', '=', $id ], ['site_id', '=', $this->site_id] ])->find();
        if (empty($info)) {
            throw new AdminException('商品榜单不存在，请检查');
        }
        $data[ 'update_time' ] = time();
        $rankInfo = $this->model->where([ [ 'site_id', '=', $this->site_id], [ 'name', '=', $data['name']] ])->findOrEmpty()->toArray();
        if($rankInfo && $rankInfo['rank_id'] != $id ) {
            throw new AdminException('商品榜单已存在，请检查');
        }
        if(!empty($data['goods_source']) && $data['goods_source'] == RankDict::GOODS){
            $data['show_goods_num'] = count($data['goods_json']);
        }
        $data = $this->checkRankData($data); // 将其他类型的字段值重置

        $info->save($data);
        return true;
    }

    /**
     * 商品排行榜详情
     * @param int $id
     * @return
     */
    public function getInfo(int $id)
    {
        $info = $this->model->where([ [ 'rank_id', '=', $id ], ['site_id', '=', $this->site_id] ])->findOrEmpty()->toArray();
        if (empty($info)) {
            throw new AdminException('商品榜单不存在，请检查');
        }
        $goods_list = [];
        if (!empty($info['goods_source']) && $info['goods_source'] == RankDict::GOODS){
            $goods_id = array_column( $info['goods_json'],'goods_id','sort');
            $goods_id_sort_array = array_flip($goods_id);
            $goods_list = (new Goods)->where([ [ 'goods.site_id', '=', $this->site_id ], ['goods.goods_id','in',$goods_id]])
             ->field('goods_id,goods_name,goods_type')
             ->withJoin([
                 'goodsSku' => [ 'sku_id', 'sku_name', 'sku_image', 'goods_id', 'price','stock' ]
             ])->append([ 'goods_type_name'])->select()->toArray();

            foreach ($goods_list as &$item){
                $item['sort'] = 0;
                if (isset($goods_id_sort_array[$item['goods_id']])){
                    $item['sort'] = $goods_id_sort_array[$item['goods_id']];
                }
            }
        }
        $info['goods_list'] = $goods_list;
        return $info;
    }

    /**
     * 商品排行榜选项列表
     */
    public function getOptionData()
    {
        $list['rank_type'] = RankDict::getRankType();
        $list['goods_source'] = RankDict::getGoodsSource();
        $list['rule_type'] = RankDict::getRuleType();

        return $list;
    }

    /**
     * 删除商品排行榜
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $info = $this->model->where([ [ 'rank_id', '=', $id ], ['site_id', '=', $this->site_id] ])->find();
        if (empty($info)) {
            throw new AdminException('商品榜单不存在，请检查');
        }
        $res = $info->delete();
        return $res;
    }

    /**
     * 设置商品排行榜配置
     * @param array $params
     * @return array
     */
    public function setGoodsRankConfig(array $params = [])
    {
        $params[ 'site_id' ] = $this->site_id;
        return ( new CoreGoodsRankConfigService() )->setGoodsRankConfig($params);
    }

    /**
     * 获取商品排行榜配置
     * @return array
     */
    public function getGoodsRankConfig()
    {
        return ( new CoreGoodsRankConfigService() )->getGoodsRankConfig($this->site_id);
    }

    /**
     * 修改榜单排序号
     * @return bool
     */
    public function editSort($data)
    {
        if(empty($data['rank_id'])){
            throw new AdminException('SHOP_RANK_NOT_EXIST');
        }
        $this->model->where([ [ 'rank_id', '=', $data['rank_id'] ], ['site_id', '=', $this->site_id] ])->update(['sort' => $data['sort']]);
        return true;
    }

    /**
     * 批量删除
     * @return bool
     */
    public function batchDelete($data)
    {
        if(empty($data['rank_id'])){
            throw new AdminException('SHOP_RANK_NOT_EXIST');
        }
        $this->model->where([[ 'rank_id', 'in', $data['rank_id'] ], ['site_id', '=', $this->site_id] ])->delete();
        return true;
    }

    /**
     * 获取排行榜分页列表
     * @param array $where
     * @return array
     */
    public function getSelectPage(array $where = [])
    {
        $field = 'rank_id,site_id,name,show_goods_num,rank_type,goods_source,rule_type,sort,create_time';
        $order = 'sort desc,create_time desc';
        $search_model = $this->model
            ->where([ [ 'site_id', '=', $this->site_id ] ])
            ->withSearch([ "name",'rank_type'], $where)
            ->field($field)
            ->order($order)->append([ 'rank_type_name', 'goods_source_name', 'rule_type_name' ]);
        $list = $this->pageQuery($search_model);
        return $list;
    }


}
