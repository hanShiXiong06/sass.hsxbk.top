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

namespace addon\recharge\app\service\admin;

use addon\recharge\app\model\Recharge;
use addon\recharge\app\model\RechargeOrder;
use addon\recharge\app\dict\RechargeOrderDict;
use addon\recharge\app\service\core\CoreRechargeConfigService;
use core\base\BaseAdminService;
use core\exception\AdminException;

/**
 * 充值套餐
 * Class RechargeService
 * @package app\service\admin
 */
class RechargeService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Recharge();
    }

    /**
     * 设置充值套餐榜配置
     * @param array $params
     * @return bool
     */
    public function setRechargeConfig(array $params = [])
    {
        $params[ 'site_id' ] = $this->site_id;
        return ( new CoreRechargeConfigService() )->setRechargeConfig($params);
    }

    /**
     * 获取充值套餐榜配置
     * @return array
     */
    public function getRechargeConfig()
    {
        return ( new CoreRechargeConfigService() )->getRechargeConfig($this->site_id);
    }

    /**
     * 获取充值套餐列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {

        $field = 'recharge_id,recharge_name,face_value,buy_price,point,growth,coupon_id,status,create_time,sort';
        $order = 'create_time desc';
        $search_model = $this->model
            ->where([ [ 'site_id', '=', $this->site_id ] ])
            ->withSearch([ 'recharge_name', 'create_time' ], $where)
            ->field($field)
            ->order($order);
        $list = $this->pageQuery($search_model);
        if (!empty($list[ 'data' ])) {
            $recharge_ids = array_column($list[ 'data' ], 'recharge_id');
            $sale_num = ( new RechargeOrder )
                ->where([ [ 'recharge_order.site_id', '=', $this->site_id ], [ 'order_status', '=', RechargeOrderDict::FINISH ] ])
                ->withJoin([ 'item' => function($query) use ($recharge_ids) {
                    $query->where([ [ 'item_id', 'in', $recharge_ids ] ])->field('item_id');
                } ])->group('item_id')->column('count(*)', 'item_id');
            foreach ($list[ 'data' ] as &$value) {
                if(!empty($sale_num)) {
                    $value[ 'sale_num' ] = isset($sale_num[ $value[ 'recharge_id' ] ]) ? $sale_num[ $value[ 'recharge_id' ] ] : 0;
                }
            }
        }
        return $list;
    }

    /**
     * 添加充值套餐
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $info = $this->model->where([['face_value','=',$data['face_value']]])->find();
        if(!empty($info)) throw new AdminException('RECHARGE_AMOUNT_NOT_REPEAT');
        $data[ 'create_time' ] = time();
        $data[ 'site_id' ] = $this->site_id;
        $res = $this->model->create($data);
        return $res->recharge_id;
    }

    /**
     * 修改充值套餐
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function edit(int $id, array $data)
    {
        $info = $this->model->where([ [ 'recharge_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->find();
        if (empty($info)) throw new AdminException('RECHARGE_NOT_EXIST');
        $face_value_info = $this->model->where([['face_value','=',$data['face_value']],['recharge_id','<>',$id]])->find();
        if(!empty($face_value_info)) throw new AdminException('RECHARGE_AMOUNT_NOT_REPEAT');
        $data[ 'update_time' ] = time();
        $info->save($data);
        return true;
    }

    /**
     * 获取套餐编辑数据
     * @param array $params
     * @return array
     */
    public function getInit($params = [])
    {
        $recharge_info = [];
        if (!empty($params[ 'recharge_id' ])) {
            //获取套餐信息
            $recharge_info = $this->model
                ->field('recharge_name,face_value,buy_price,point,growth,coupon_id,status,create_time,sort')
                ->where([ [ 'recharge_id', '=', $params[ 'recharge_id' ] ], [ 'site_id', '=', $this->site_id ] ])
                ->append([ 'status_name' ])
                ->findOrEmpty()->toArray();
        }

        return $recharge_info;

    }

    /**
     * 删除充值套餐
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $info = $this->model->where([ [ 'recharge_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->find();
        if (empty($info)) throw new AdminException('RECHARGE_NOT_EXIST');

        return $info->delete();
    }

    /**
     * 修改状态
     * @param $data
     * @return bool
     */
    public function modifyStatus($data)
    {
        $info = $this->model->where([ [ 'recharge_id', '=', $data[ 'recharge_id' ] ], [ 'site_id', '=', $this->site_id ] ])->find();
        if (empty($info)) throw new AdminException('RECHARGE_NOT_EXIST');
        return $this->model->where([
            [ 'recharge_id', '=', $data[ 'recharge_id' ] ],
            [ 'site_id', '=', $this->site_id ]
        ])->update([ 'status' => $data[ 'status' ] ]);
    }

    /**
     * 修改榜单排序号
     * @return bool
     */
    public function editSort($data)
    {
        if (empty($data[ 'recharge_id' ])) throw new AdminException('RECHARGE_NOT_EXIST');
        $this->model->where([ [ 'recharge_id', '=', $data[ 'recharge_id' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'sort' => $data[ 'sort' ] ]);
        return true;
    }

}
