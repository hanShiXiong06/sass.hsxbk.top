<?php

namespace addon\tk_jhkd\app\service\api;

use addon\tk_jhkd\app\model\order\OrderAdd;
use app\model\member\Member;
use core\base\BaseApiService;


/**
 * 补差价订单
 * Class OrderAddService
 * @package addon\tk_jhkd\app\service\api\order
 */
class OrderAddService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new OrderAdd();
    }

    /**
     * 获取订单列列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,member_id,order_id,order_no,order_money,order_status,out_trade_no,pay_time,create_time,close_time,ip,update_time,delete_time';
        $order = 'create_time desc';
        $search_model = $this->model
            ->where([['site_id', "=", $this->site_id]])
            ->withSearch(["id","member_id","order_id","order_no","order_money","order_status","out_trade_no","pay_time","create_time","close_time","ip","update_time","delete_time"], $where)
            ->with(
                [
                    'orderInfo' => function ($query) {
                        $query->field('order_id,id');
                    }
                ]
            )
            ->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 删除订单列
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
}
