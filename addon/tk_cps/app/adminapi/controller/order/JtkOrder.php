<?php

namespace addon\tk_cps\app\adminapi\controller\order;


use core\base\BaseAdminController;
use addon\tk_cps\app\service\admin\order\OrderService;
use addon\tk_cps\app\dict\order\JtkOrderDict;
use think\facade\Log;

class JtkOrder extends BaseAdminController
{

    //订单列表
    public function getOrderList()
    {
        $data=$this->request->params([
            ['page',1],
            ['pagesize',10],
            ['brand_id',''],
            ['order_sn',''],
            ['status',''],
            ['time',['','']]
        ]);
        $data['start_time']=$data['time'][0]!=''?$data['time'][0]:'';
        $data['end_time']=$data['time'][1]!=''?$data['time'][1]:'';
        unset($data['time']);
        return success((new OrderService())->jtkOrderList($data));
    }
    //订单品牌
    public function getOrderBrand()
    {
        return success(JtkOrderDict::getOrderBrand());
    }
    //订单状态
    public function getOrderStatus()
    {
        return success(JtkOrderDict::getOrderStatus());
    }
}
