<?php

namespace addon\tk_cps\app\adminapi\controller\order;


use core\base\BaseAdminController;
use addon\tk_cps\app\service\admin\order\OrderService;
use addon\tk_cps\app\dict\order\MyxqOrderDict;
use think\facade\Log;

class MyxqOrder extends BaseAdminController
{

    //充值订单列表
    public function myxqRechargeOrder()
    {
        $data=$this->request->params([
            ['page',1],
            ['limit',10],
            ['orderid',''],
            ['rechargeno',''],//充值手机号
            ['status',''],
            ['time',['','']]
        ]);
        $data['starttime']=$data['time'][0]!=''?strtotime($data['time'][0]):'';
        $data['endtime']=$data['time'][1]!=''?strtotime($data['time'][1]):'';
        unset($data['time']);
        return success((new OrderService())->myxqRechargeOrder($data));
    }
    //充值订单状态
    public function getRechargeOrderStatus()
    {
        return success(MyxqOrderDict::getRerechargeOrderStatus());
    }
    //电影订单
    public function myxqMovieOrder()
    {
        $data=$this->request->params([
            ['page',1],
            ['limit',10],
            ['orderid',''],
            ['status',''],
            ['time',['','']]
        ]);
        $data['starttime']=$data['time'][0]!=''?strtotime($data['time'][0]):'';
        $data['endtime']=$data['time'][1]!=''?strtotime($data['time'][1]):'';
        unset($data['time']);
        return success((new OrderService())->myxqMovieOrder($data));
    }
    //电影订单状态
    public function getMovieOrderStatus()
    {
        return success(MyxqOrderDict::getMovieOrderStatus());
    }
    //点餐订单
    public function myxqDcOrder()
    {
        $data=$this->request->params([
            ['page',1],
            ['limit',10],
            ['orderid',''],
            ['status',''],
            ['time',['','']]
        ]);
        $data['starttime']=$data['time'][0]!=''?strtotime($data['time'][0]):'';
        $data['endtime']=$data['time'][1]!=''?strtotime($data['time'][1]):'';
        unset($data['time']);
        return success((new OrderService())->myxqDcOrder($data));
    }
    //点餐订单状态
    public function getDcOrderStatus()
    {
        return success(MyxqOrderDict::getDcOrderStatus());
    }
    //点餐订单详情
    public function myxqDcOrderDetail()
    {
        $data=$this->request->params([
            ['orderid',''],
        ]);
        return success((new OrderService())->myxqDcOrderDetail($data));
    }
    //周边订单
    public function myxqNearOrder()
    {
        $data=$this->request->params([
            ['page',1],
            ['limit',10],
            ['orderid',''],
            ['status',''],
            ['time',['','']]
        ]);
        $data['starttime']=$data['time'][0]!=''?strtotime($data['time'][0]):'';
        $data['endtime']=$data['time'][1]!=''?strtotime($data['time'][1]):'';
        unset($data['time']);
        return success((new OrderService())->myxqNearOrder($data));
    }
    //周边订单状态
    public function getNearOrderStatus()
    {
        return success(MyxqOrderDict::getNearOrderStatus());
    }
    //自营订单
    public function myxqShopOrder()
    {
        $data=$this->request->params([
            ['page',1],
            ['limit',10],
            ['orderid',''],
            ['status',''],
            ['time',['','']]
        ]);
        $data['starttime']=$data['time'][0]!=''?strtotime($data['time'][0]):'';
        $data['endtime']=$data['time'][1]!=''?strtotime($data['time'][1]):'';
        unset($data['time']);
        return success((new OrderService())->myxqShopOrder($data));
    }
    //自营订单状态
    public function getShopOrderStatus()
    {
        return success(MyxqOrderDict::getShopOrderStatus());
    }
    //其他订单
    public function myxqOtherOrder()
    {
        $data=$this->request->params([
            ['page',1],
            ['limit',10],
            ['orderid',''],
            ['time',['','']]
        ]);
        $data['starttime']=$data['time'][0]!=''?strtotime($data['time'][0]):'';
        $data['endtime']=$data['time'][1]!=''?strtotime($data['time'][1]):'';
        unset($data['time']);
        return success((new OrderService())->myxqOtherOrder($data));
    }
    //其他订单平台列表
    public function getOtherOrderPf()
    {
        return success(MyxqOrderDict::getOthersPf());
    }
}
