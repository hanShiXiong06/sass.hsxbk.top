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

use addon\shop\app\model\goods\Browse;
use addon\shop\app\model\goods\Goods;
use addon\shop\app\service\core\goods\CoreGoodsStatService;
use core\base\BaseApiService;
use core\exception\CommonException;

/**
 *  商品足迹服务层
 */
class GoodsBrowseService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Browse();
    }

    /**
     * 足迹100条
     */
    public function getMemberGoodsBrowse()
    {
        $field = 'member_id,browse_time,goods_id';
        $limit = 100;
        $list = $this->model->field($field)->where([ ['site_id', '=', $this->site_id], [ 'member_id', '=', $this->member_id ] ])
            ->withJoin([ 'goods' => [ 'site_id', 'goods_id', 'goods_name', 'goods_cover', 'sale_num', 'virtual_sale_num', 'status','delete_time'] ], 'inner')
            ->with(['goodsSku'])
            ->order('browse_time desc')->limit($limit)->select()->toArray();

        $date_list = [];
        foreach ($list as $v){
            $date = explode(' ', $v['browse_time'])[0];
            if(empty($date_list[$date])) $date_list[$date] = [];
            $date_list[$date][] = $v;
        }

        foreach ($date_list as $k => $v){
            $date = date('m月d日', strtotime($k));
            $date_list[$date] = $v;
            unset($date_list[$k]);
        }
        return [
            'count' => count($list),
            'list' => $date_list
        ];
    }

    /**
     * 添加足迹
     */
    public function addGoodsBrowse($data)
    {
        $goods_info = (new Goods())->where([ ['site_id', '=', $this->site_id],['goods_id', '=', $data['goods_id']],['delete_time', '=',0] ])->field('site_id, goods_id,goods_name,goods_cover')->findOrEmpty()->toArray();
        if(empty($goods_info)) throw new CommonException('SHOP_GOODS_NOT_EXIST');//商品不存在

        $data = array_merge($data,$goods_info);
        $data[ 'site_id' ] = $this->site_id;
        $data[ 'member_id' ] = $this->member_id;
        $data[ 'browse_time' ] = time();
        $info = $this->model->where([
            [ 'site_id', '=', $data[ 'site_id' ] ],
            [ 'member_id', '=', $data[ 'member_id' ] ],
            [ 'goods_id', '=', $data[ 'goods_id' ] ],
        ])->findOrEmpty();

        if($info->isEmpty()){
            $this->model->create($data);
            CoreGoodsStatService::addStat(['site_id' => $this->site_id, 'goods_id' => $data[ 'goods_id' ], 'goods_visit_member_count' => 1]);
        }else{
            $info->save([
                'browse_time' => $data['browse_time']
            ]);
        }
        return true;
    }

    /**
     * 删除足迹
     */
    public function deleteGoodsBrowse($data)
    {
        $this->model->where([ ['site_id', '=', $this->site_id], ['goods_id','in', $data['goods_ids']], ['member_id', '=', $this->member_id] ])->delete();
        return true;
    }

}
