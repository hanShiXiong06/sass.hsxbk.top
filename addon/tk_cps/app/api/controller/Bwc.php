<?php

namespace addon\tk_cps\app\api\controller;

use addon\tk_cps\app\service\api\BwcOrderService;
use addon\tk_cps\app\service\core\BwcService;

use core\base\BaseApiController;
use Exception;
use addon\tk_cps\app\dict\order\BwcOrderDict;

class Bwc extends BaseApiController
{
    public function ceshi()
    {
//       $res= (new BwcService())->execute('/cps/list',['limit'=>100,'offset'=>40]);
//        return success($res);
       //        $data = $this->request->params([
//            ['pid', '1'],
//        ]);
//        return success((new BwcService())->checkFenxiao($data));
    }

    /**
     * @Notes:分销关系绑定
     * @Interface checkFenxiao
     * @return \think\Response
     * @author: TK
     * @Time: 2024/5/24   上午12:16
     */
    public function checkFenxiao()
    {
        $data = $this->request->params([
            ['pid', ''],
        ]);
        return success((new BwcService())->checkFenxiao($data));
    }
    /**
     * @Notes:订单状态
     * @Interface getOrderStatus
     * @return \think\Response
     * @author: TK
     * @Time: 2024/5/15   上午12:23
     */
    public function getOrderStatus()
    {
        return success('获取成功', BwcOrderDict::getOrderStatus());
    }

    /**
     * 霸王餐订单详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new BwcOrderService())->getInfo($id));
    }

    /**
     * 获取霸王餐订单列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            ["member_id",""],
            ["orderSn",""],
            ["order_no",""],
            ["userOrderSn",""],
            ["paidAmount",""],
            ["shopOriginId",""],
            ["orderTelephone",""],
            ["name",""],
            ["logo",""],
            ["address",""],
            ["platformName",""],
            ["platformLogo",""],
            ["source",""],
            ["planId",""],
            ["planTypeCh",""],
            ["planTypeDescCh",""],
            ["commissionType",""],
            ["sid",""],
            ["minAmount",""],
            ["maxAmount",""],
            ["commission",""],
            ["commissionRatio",""],
            ["ecommission",""],
            ["ecommissionRatio",""],
            ["state",""],
            ["createTime",""],
            ["finishedTime",""],
            ["xgzSettleStatus",""],
            ["xgzSettleTime",""],
            ["create_time",""],
            ["close_time",""],
            ["reason",""],
            ["fanxian",""],
            ["is_fanxian",""]
        ]);
        return success((new BwcOrderService())->getPage($data));
    }

    /**
     * @Notes:确认订单，三方联盟单预留接口
     * @Interface confirmOrder
     * @return \think\Response
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/15   上午12:22
     */
    public function confirmOrder()
    {
        $data = $this->request->params([
            ['orderSn', ''],
        ]);
        return success((new BwcService())->confirmOrder($data));
    }

    /**
     * @Notes:取消订单
     * @Interface cancelEvent
     * @return \think\Response
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/15   上午12:22
     */
    public function cancelEvent()
    {
        $data = $this->request->params([
            ['orderSn', ''],
            ['telephone', '']
        ]);
        return success('操作成功', (new BwcService())->cancelEvent($data));
    }

    /**
     * @Notes:活动报名
     * @Interface signUp
     * @return \think\Response
     * @throws Exception
     * @author: TK
     * @Time: 2024/5/15   上午12:22
     */
    public function signUp()
    {
        $data = $this->request->params([
            ['mapLat', '29.594103'],
            ['mapLon', '106.513882'],
            ['notifyUrl',''],
            ['planId','1-Tr8xYZ%2Ff%2F1flhxulQJVLOQ%3D%3D_840160000467513344'],
            ['telephone', ''],
            ['data', ''] ,//详情的data数组
        ]);
        $data['mapLat']=number_format($data['mapLat'], 3);
        $data['mapLon']=number_format($data['mapLon'], 3);
        $data['planId'] = str_replace('+', '%2B', $data['planId']);
        $data['planId'] = str_replace('=', '%3D', $data['planId']);
        $data['planId'] = str_replace('/', '%2F', $data['planId']);
        return success('报名成功', (new BwcService())->signUp($data));
    }

    /**
     * @Notes:活动详情
     * @Interface actInfo
     * @return \think\Response
     * @author: TK
     * @Time: 2024/5/12   上午8:35
     */
    public function actInfo()
    {
        $data = $this->request->params([
            ['planId', '1-YvHZkXcJbTdZJXfg17xmiw%253D%253D_3852215062070729949'],
            ['mapLat', '24.981646'],
            ['mapLon', '102.854004'],
            ['telephone', '13545454545']
        ]);
        $data['mapLat']=number_format($data['mapLat'], 3);
        $data['mapLon']=number_format($data['mapLon'], 3);
        $data['planId'] = str_replace('+', '%2B', $data['planId']);
        $data['planId'] = str_replace('=', '%3D', $data['planId']);
        $data['planId'] = str_replace('/', '%2F', $data['planId']);
        return success((new BwcService())->actInfo($data));
    }

    /**
     * @Notes:霸王餐活动列表
     * @Interface actList
     * @return \think\Response
     * @author: TK
     * @Time: 2024/5/12   上午8:32
     */
    public function actList()
    {
        $data = $this->request->params([
            ['ableJoin', '1'],
            ['keyword', ''],
            ['mapLat', '24.981646'],
            ['mapLon', '102.854004'],
            ['onlyOrder', ''],
            ['page', '1'],
            ['planSource', '4'],
            ['sort', 'asc'],
        ]);
        $data['mapLat']=number_format($data['mapLat'], 3);
        $data['mapLon']=number_format($data['mapLon'], 3);
        return success((new BwcService())->actList($data));
    }

    /**
     * @Notes 10.17后获取商家接口
     * @return \think\Response
     * @author: TK
     * @Time: 2024/10/29   上午8:26
     */
    public function newActList()
    {
        $data = $this->request->params([
            ['ableJoin', '1'],
            ['keyword', ''],
            ['mapLat', '24.981646'],
            ['mapLon', '102.854004'],
            ['onlyOrder', ''],
            ['pageId', ''],
            ['planSource', '4'],
            ['sort', 'asc'],
        ]);
        $data['mapLat']=number_format($data['mapLat'], 3);
        $data['mapLon']=number_format($data['mapLon'], 3);
        $data['clientIp']=$this->request->ip();
        return success((new BwcService())->newActList($data));
    }
}