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

namespace addon\shop\app\service\admin\marketing;

use addon\shop\app\dict\active\ActiveDict;
use addon\shop\app\dict\active\ManjianDict;
use addon\shop\app\model\active\Active;
use addon\shop\app\model\active\ActiveGoods;
use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\manjian\Manjian;
use addon\shop\app\model\manjian\ManjianGoods;
use addon\shop\app\model\order\Order;
use addon\shop\app\service\core\marketing\CoreActiveService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use think\db\Query;
use think\facade\Db;

/**
 * 满减送服务层
 * Class ManjianService
 * @package addon\shop\app\service\admin\marketing
 */
class ManjianService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Manjian();
    }

    /**
     * 获取满减送列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        //活动名称、活动类型、活动详情、活动状态、支付订单数、参与会员数、支付金额 、活动时间
        $field = 'manjian_id,manjian_name,condition_type,rule_json,status,total_order_num,total_member_num,total_order_money,start_time,end_time';
        $order = 'create_time desc';
        $search_model = $this->model
            ->where([ [ 'site_id', '=', $this->site_id ]])
            ->withSearch([ "manjian_name","status","end_time"], $where)
            ->append(['status_name'])
            ->field($field)
            ->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 关闭满减送
     * @param $manjian_id
     */
    public function closeManjian($manjian_id)
    {
        $manjian_info = $this->model->where([ [ 'site_id', '=', $this->site_id ] ,[ 'manjian_id', '=', $manjian_id ]])->field('status,end_time')->findOrEmpty()->toArray();
        if (!empty($manjian_info)) {
            if ($manjian_info[ 'end_time' ] >= time() && $manjian_info[ 'status' ] == ManjianDict::ACTIVE) {
                $this->model->where([ ['site_id', '=', $this->site_id ], ['manjian_id', '=', $manjian_id], ['status', '=', ManjianDict::ACTIVE] ])->update([ 'status' => ManjianDict::CLOSE ]);
                (new ManjianGoods())->where([ ['site_id', '=', $this->site_id], ['manjian_id', '=', $manjian_id]])->update([ 'status' => ManjianDict::CLOSE ]);
            } else {
                throw new AdminException('MANJIANSONG_CLOSED');
            }
        } else {
            throw new AdminException('MANJIANSONG_NOT_FOUND');
        }
    }

    /**
     * 删除满减送活动
     * @param $manjian_id
     */
    public function del($manjian_id)
    {
        $manjian_info = $this->model->where([ [ 'site_id', '=', $this->site_id ] ,[ 'manjian_id', '=', $manjian_id ]])->field('status,end_time')->findOrEmpty()->toArray();
        if (!empty($manjian_info)) {
            if ($manjian_info['status'] == ActiveDict::ACTIVE) throw new AdminException('ACTIVE_NOT_DELETE');
            $this->model->where([ [ 'manjian_id', '=', $manjian_id ], ['site_id', '=', $this->site_id] ])->delete();
            (new ManjianGoods())->where([ [ 'manjian_id', '=', $manjian_id ],['site_id', '=',  $this->site_id] ])->delete();
        } else {
            throw new AdminException('MANJIANSONG_NOT_FOUND');
        }
    }

    /**
     * 满减送活动详情
     * @param $manjian_id
     */
    public function info($manjian_id)
    {
        //条件类型、活动名称、活动开始时间、活动结束时间、活动状态、活动创建时间、参与订单数、参与会员数、支付金额、活动详情(例：满100.00元减5.00元、包邮、送1积分...)
        $info = $this->model
            ->field('manjian_id,manjian_name,goods_type,start_time,end_time,status,create_time,total_order_num,total_member_num,total_order_money,rule_json')
            ->where([ [ 'manjian_id', '=', $manjian_id ], [ 'site_id', '=', $this->site_id ] ])
            ->append(['status_name','goods_type_name'])
            ->findOrEmpty()
            ->toArray();
//        $active_goods = (new ActiveGoods() )->where([ [ 'site_id', '=', $this->site_id ], [ 'active_id', '=', $manjian_id ] ])->select()->toArray();
//        $info[ 'active_goods' ] = $active_goods;
        return $info;
    }

    /**
     * 会员
     * @param int $manjian_id
     * @param $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function member(int $manjian_id, $where)
    {
        $manjian_info = $this->model->field('goods_type,goods_ids')->where([ [ 'manjian_id', '=', $manjian_id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty()->toArray();;
        if (empty($manjian_info)) {
            throw new AdminException('MANJIANSONG_NOT_FOUND');
        }
        switch ($manjian_info['goods_type']){
            case ManjianDict::ALL_GOODS:
                $active_goods_ids = (new Goods())->where([[ 'site_id', '=', $this->site_id ] ])->column('goods_id');
                break;
            case ManjianDict::SELECTED_GOODS:
                $active_goods_ids = $manjian_info['goods_ids'];
                break;
            case ManjianDict::SELECTED_GOODS_NOT:
                $active_goods_ids = (new Goods())->where([[ 'site_id', '=', $this->site_id ] , [ 'goods_id', 'not in', $manjian_info['goods_ids'] ]])->column('goods_id');
                break;
        }

        $order = 'create_time desc';
        $search_model = ( new Order() )
            ->where([ [ 'site_id', '=', $this->site_id ], [ 'pay_time', '>', 0 ],['relate_id','=',$manjian_id],['activity_type','=',ActiveDict::MANJIANSONG]])
            ->with([ 'member' => function($query)  use ($where){
                $query->field('username,member_id, nickname, mobile, headimg')->where([ [ 'username', 'like', '%' . $where[ 'keyword' ] . '%' ] ]);
            }, 'orderGoods' ])
            ->order($order)
            ->field('member_id,COUNT(member_id) as member_count, group_concat(create_time) as create_time_data,group_concat(order_id) as order_ids')
            ->group('member_id');
        $list = $this->pageQuery($search_model, function($item, $key){
            $create_time_data = explode(',', $item[ 'create_time_data' ]);

            $item[ 'create_time' ] = date('Y-m-d H:i:s', end($create_time_data));

        });

        if (!empty($list[ 'data' ])) {
            $member_ids = array_column($list[ 'data' ], 'member_id');
            $data_list = ( new Order() )
                ->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', 'in', $member_ids ], [ 'pay_time', '>', 0 ] ])
                ->with([ 'orderGoods' ])
                ->select()->toArray();
            foreach ($list[ 'data' ] as $key => $item) {
                $item[ 'active_order_money' ] = 0;
                foreach ($data_list as $k => $v) {
                    if ($item[ 'member_id' ] == $v[ 'member_id' ]) {
                        foreach ($v[ 'orderGoods' ] as $order_goods) {
                            if (in_array($order_goods[ 'goods_id' ], $active_goods_ids)) {
                                $item[ 'active_order_money' ] += $order_goods[ 'order_goods_money' ];
                            }
                        }
                    }
                }
                $list[ 'data' ][ $key ] = $item;
            }
        }

        return $list;
    }

    /**
     * 详情商品
     * @param int $manjian_id
     * @param $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function goods(int $manjian_id, $where)
    {
        $manjian_goods_model = new ManjianGoods();
        $search_model = $manjian_goods_model
            ->where([ [ 'manjian_goods.site_id', '=', $this->site_id ], [ 'manjian_goods.manjian_id', '=', $manjian_id ] ])
            ->field('goods_id,total_order_money,total_order_num,total_member_num')
            ->withJoin([ 'goods' => function($query) use ($where) {
                $query->where([ [ 'goods_name', 'like', '%' . $where[ 'keyword' ] . '%' ] ]);
            }])->with([ 'goodsSku' ])->append([ 'goods.goods_cover_thumb_small' ]);
        return $this->pageQuery($search_model);
    }

    /**
     * 添加满减送
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'start_time' ] = strtotime($data[ 'start_time' ]);
        $data[ 'end_time' ] = strtotime($data[ 'end_time' ]);
        if(!empty($data['end_time']) && $data['end_time'] < time()) throw new AdminException('END_TIME_NOT_LESS_CURRENT_TIME');

        $goods_list = json_decode($data[ 'goods_data' ], true);

        $goods_ids = [];
        if ($data[ 'goods_type' ] != ManjianDict::ALL_GOODS){
            $goods_ids = $data['goods_ids'];
        }
        //验证商品是否参加活动
        //有正在进行的全部商品活动
        $all_goods_count = $this->model
            ->where([
                [ 'site_id', '=', $this->site_id ] ,
                [ 'goods_type', 'in',[ManjianDict::ALL_GOODS,ManjianDict::SELECTED_GOODS_NOT]] ,
                [ 'status', 'in', [ ManjianDict::NOT_ACTIVE, ManjianDict::ACTIVE ]] ,
            ])->where(function($query)use($data){
                $query->whereOr([
                    [ 'start_time|end_time', 'between',[ $data[ 'start_time' ], $data[ 'end_time' ]]],
                    [ [ 'start_time', '<=', $data[ 'start_time' ] ], [ 'end_time', '>=', $data[ 'end_time' ] ] ],
                    [ [ 'start_time', '>=', $data[ 'start_time' ] ], [ 'end_time', '<=', $data[ 'end_time' ] ] ]
                ]);
            })->count();
        if ($all_goods_count > 0) throw new AdminException('MANJIANSONG_GOODS_NOT_REPEAR');

        $manjian_goods_model = new ManjianGoods();
        $select_goods_id = $manjian_goods_model
            ->where([[ 'manjian_goods.site_id', '=', $this->site_id ]])
            ->withJoin([
                'manjian' => function(Query $query)use($data){
                    $query->where([ [ 'manjian.site_id', '=', $this->site_id ],[ 'manjian.status', 'in', [ ManjianDict::NOT_ACTIVE, ManjianDict::ACTIVE ]],[ 'manjian.goods_type', '=',ManjianDict::SELECTED_GOODS]])->where(function($query) use ($data) {
                        $query->whereOr([[ 'manjian.start_time|manjian.end_time', 'between', [ $data[ 'start_time' ], $data[ 'end_time' ] ] ],
                            [ [ 'manjian.start_time', '<=', $data[ 'start_time' ] ], [ 'manjian.end_time', '>=', $data[ 'end_time' ] ] ],
                            [ [ 'manjian.start_time', '>=', $data[ 'start_time' ] ], [ 'manjian.end_time', '<=', $data[ 'end_time' ] ] ]]);
                    });
                },
            ], 'inner')
            ->column('goods_id');

        switch ($data['goods_type']) {
            case ManjianDict::ALL_GOODS:
            case ManjianDict::SELECTED_GOODS_NOT:
                throw new AdminException('MANJIANSONG_GOODS_NOT_REPEAR');
                break;
            case ManjianDict::SELECTED_GOODS:
                $goods_id_intersect = array_intersect($goods_ids, $select_goods_id);
                if (!empty($goods_id_intersect)){
                    throw new AdminException('MANJIANSONG_GOODS_NOT_REPEAR');
                }
                break;
        }

        Db::startTrans();
        try {
            // 满减送活动数据
            $manjian_value['site_id'] = $this->site_id;
            $manjian_value['manjian_name'] = $data['manjian_name'];
            $manjian_value['condition_type'] = $data['condition_type'];
            $manjian_value['goods_type'] = $data['goods_type'];
            $manjian_value['join_member_type'] = $data['join_member_type'];
            $manjian_value['rule_type'] = $data['rule_type'] ?? '';
            $manjian_value['rule_json'] = $data['rule_json'];
            $manjian_value['goods_ids'] = array_map(function($item) { return (string) $item; }, $data[ 'goods_ids' ]);
            $manjian_value['level_ids'] = array_map(function($item) { return (string) $item; }, $data[ 'level_ids' ]);
            $manjian_value['label_ids'] = array_map(function($item) { return (string) $item; }, $data[ 'label_ids' ]);
            $manjian_value['status'] = ManjianDict::NOT_ACTIVE;
            $manjian_value['start_time'] = $data['start_time'];
            $manjian_value['end_time'] = $data['end_time'];
            $manjian_value['remark'] = $data['remark'];

            if (!empty($data['start_time']) && $data['start_time'] <= time()){
                $manjian_value['status'] = ManjianDict::ACTIVE;
            }elseif (!empty($data['end_time']) && $data['end_time'] <= time()){
                $manjian_value['status'] = ManjianDict::END;
            }
            $res = $this->model->create($manjian_value);

            $manjian_goods = [];
            if ($data[ 'goods_type' ] != ManjianDict::ALL_GOODS) {
                foreach ($goods_list as $k => $v) {
                    $manjian_goods[] = [
                        'manjian_id' => $res->manjian_id,
                        'site_id' => $this->site_id,
                        'goods_id' => $v['goods_id'],
                        'goods_type' => $data[ 'goods_type' ],
                        'status' => $manjian_value['status'],
                    ];
                }
            }
            (new Manjiangoods())->saveAll($manjian_goods);

            Db::commit();
            return $res->manjian_id;
        } catch (\Exception $e) {
            throw new AdminException($e->getMessage());
        }
    }

    /**
     * 获取满减送编辑数据
     * @return \think\Response
     */
    public function getInit($params = [])
    {
        $res = $active_goods = [];
        if (!empty($params[ 'manjian_id' ])) {
            //获取满减基本信息
            $manjisn_info = $this->model
                ->where([[ 'manjian_id', '=', $params[ 'manjian_id' ] ], [ 'site_id', '=', $this->site_id ]])
                ->findOrEmpty()->toArray();
            $res['manjian_info'] = $manjisn_info;

            //获取满减商品信息
            if (!empty($manjisn_info['goods_type']) && $manjisn_info['goods_type'] != ManjianDict::ALL_GOODS){
                $active_goods = ( new ManjianGoods() )
                    ->where([ [ 'manjian_goods.site_id', '=', $this->site_id ], [ 'manjian_id', '=', $params[ 'manjian_id' ] ] ])
                    ->withJoin([
                        'goods'
                    ])->with([ 'goodsSku' ])->append([ 'goods.goods_cover_thumb_small' ])
                    ->select()
                    ->toArray();
            }
            $res['manjian_goods'] = $active_goods;
        }
        return $res;
    }

    /**
     * 编辑满减送
     * @param array $data
     * @return mixed
     */
    public function edit(int $manjian_id,array $data)
    {
        $data[ 'start_time' ] = strtotime($data[ 'start_time' ]);
        $data[ 'end_time' ] = strtotime($data[ 'end_time' ]);
        if(!empty($data['end_time']) && $data['end_time'] < time()) throw new AdminException('END_TIME_NOT_LESS_CURRENT_TIME');

        $goods_list = json_decode($data[ 'goods_data' ], true);
        $goods_ids = array_column($goods_list, 'goods_id');

        //有正在进行的全部商品活动
        $all_goods_count = $this->model
            ->where([
                [ 'site_id', '=', $this->site_id ] ,
                [ 'manjian_id', '<>', $manjian_id ],
                [ 'goods_type', 'in',[ManjianDict::ALL_GOODS,ManjianDict::SELECTED_GOODS_NOT]] ,
                [ 'status', 'in', [ ManjianDict::NOT_ACTIVE, ManjianDict::ACTIVE ]] ,
            ])->where(function($query)use($data){
                $query->whereOr([
                    [ 'start_time|end_time', 'between',[ $data[ 'start_time' ], $data[ 'end_time' ]]],
                    [ [ 'start_time', '<=', $data[ 'start_time' ] ], [ 'end_time', '>=', $data[ 'end_time' ] ] ],
                    [ [ 'start_time', '>=', $data[ 'start_time' ] ], [ 'end_time', '<=', $data[ 'end_time' ] ] ]
                ]);
            })->count();
        if ($all_goods_count > 0) throw new AdminException('ACTIVE_MANJIANSONG_GOODS_NOT_REPEAR');

        $manjian_goods_model = new ManjianGoods();
        $select_goods_id = $manjian_goods_model
            ->where([[ 'manjian_goods.site_id', '=', $this->site_id ]])
            ->withJoin([
                'manjian' => function(Query $query)use($data,$manjian_id){
                    $query->where([ [ 'manjian.site_id', '=', $this->site_id ],[ 'manjian.manjian_id', '<>', $manjian_id ],[ 'manjian.status', 'in', [ ManjianDict::NOT_ACTIVE, ManjianDict::ACTIVE ]],[ 'manjian.goods_type', '=',ManjianDict::SELECTED_GOODS]])->where(function($query) use ($data) {
                        $query->whereOr([[ 'manjian.start_time|manjian.end_time', 'between', [ $data[ 'start_time' ], $data[ 'end_time' ] ] ],
                            [ [ 'manjian.start_time', '<=', $data[ 'start_time' ] ], [ 'manjian.end_time', '>=', $data[ 'end_time' ] ] ],
                            [ [ 'manjian.start_time', '>=', $data[ 'start_time' ] ], [ 'manjian.end_time', '<=', $data[ 'end_time' ] ] ]]);
                    });
                },
            ], 'inner')
            ->column('goods_id');

        switch ($data['goods_type']) {
            case ManjianDict::ALL_GOODS:
            case ManjianDict::SELECTED_GOODS_NOT:
                throw new AdminException('MANJIANSONG_GOODS_NOT_REPEAR');
                break;
            case ManjianDict::SELECTED_GOODS:
                $goods_id_intersect = array_intersect($goods_ids, $select_goods_id);
                if (!empty($goods_id_intersect)){
                    throw new AdminException('MANJIANSONG_GOODS_NOT_REPEAR');
                }
                break;
        }

        Db::startTrans();
        try {
            // 满减送活动数据
            $manjian_value['site_id'] = $this->site_id;
            $manjian_value['manjian_name'] = $data['manjian_name'];
            $manjian_value['condition_type'] = $data['condition_type'];
            $manjian_value['goods_type'] = $data['goods_type'];
            $manjian_value['join_member_type'] = $data['join_member_type'];
            $manjian_value['rule_type'] = $data['rule_type'] ?? '';
            $manjian_value['rule_json'] = $data['rule_json'];
            $manjian_value['goods_ids'] = array_map(function($item) { return (string) $item; }, $data[ 'goods_ids' ]);
            $manjian_value['level_ids'] = array_map(function($item) { return (string) $item; }, $data[ 'level_ids' ]);
            $manjian_value['label_ids'] = array_map(function($item) { return (string) $item; }, $data[ 'label_ids' ]);
            $manjian_value['status'] = ManjianDict::NOT_ACTIVE;
            $manjian_value['start_time'] = $data['start_time'];
            $manjian_value['end_time'] = $data['end_time'];
            $manjian_value['remark'] = $data['remark'];

            if (!empty($data['start_time']) && $data['start_time'] <= time()){
                $manjian_value['status'] = ManjianDict::ACTIVE;
            }elseif (!empty($data['end_time']) && $data['end_time'] <= time()){
                $manjian_value['status'] = ManjianDict::END;
            }
            $this->model->where([ ['manjian_id', '=', $manjian_id] ])->update($manjian_value);

            $manjian_goods = [];
            if ($data[ 'goods_type' ] != ManjianDict::ALL_GOODS) {
                foreach ($goods_list as $k => $v) {
                    $manjian_goods[] = [
                        'manjian_id' => $manjian_id,
                        'site_id' => $this->site_id,
                        'goods_id' => $v['goods_id'],
                        'goods_type' => $data[ 'goods_type' ],
                        'status' => $manjian_value['status'],
                    ];
                }
            }
            (new Manjiangoods())->where([ ['manjian_id', '=', $manjian_id], ['site_id', '=', $this->site_id] ])->delete();
            (new Manjiangoods())->saveAll($manjian_goods);
            Db::commit();
            return $manjian_id;
        } catch (\Exception $e) {
            throw new AdminException($e->getMessage());
        }
    }
}
