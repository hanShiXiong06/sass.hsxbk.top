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

namespace addon\tk_cps\app\adminapi\controller\bwcorder;

use addon\tk_cps\app\dict\order\BwcOrderDict;
use core\base\BaseAdminController;
use addon\tk_cps\app\service\admin\bwcorder\BwcOrderService;


/**
 * 霸王餐订单控制器
 * Class BwcOrder
 * @package addon\tk_cps\app\adminapi\controller\bwcorder
 */
class BwcOrder extends BaseAdminController
{
    public function asyncDayOrder()
    {
        return success('操作成功',(new BwcOrderService())->asyncDayOrder(60*24));
    }
    /**
     * @Notes:订单状态
     * @Interface getOrderStatus
     * @return \think\Response
     * @author: TK
     * @Time: 2024/5/15   下午5:40
     */
    public function getOrderStatus()
    {
        return success('获取成功', BwcOrderDict::getOrderStatus());
    }

    /**
    * 获取霸王餐订单列表
    * @return \think\Response
    */
    public function lists(){
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
     * 霸王餐订单详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new BwcOrderService())->getInfo($id));
    }

    /**
     * 添加霸王餐订单
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["member_id",0],
             ["orderSn",""],
             ["order_no",""],
             ["userOrderSn",""],
             ["paidAmount",""],
             ["shopOriginId",""],
             ["orderTelephone",""],
             ["name",""],
             ["logo",""],
             ["address",""],
             ["platform",""],
             ["platformName",""],
             ["platformLogo",""],
             ["source",0],
             ["actionUrl",""],
             ["planId",""],
             ["planTypeCh",""],
             ["planTypeDescCh",""],
             ["plan",""],
             ["commissionType",""],
             ["sid",""],
             ["minAmount",""],
             ["maxAmount",""],
             ["commission",""],
             ["commissionRatio",""],
             ["ecommission",""],
             ["ecommissionRatio",""],
             ["state",""],
             ["createTime",0],
             ["finishedTime",0],
             ["xgzSettleStatus",""],
             ["xgzSettleTime",""],
             ["close_time",0],
             ["reason",""],
             ["fanxian",""],
             ["is_fanxian",""]
        ]);
        $this->validate($data, 'addon\tk_cps\app\validate\bwcorder\BwcOrder.add');
        $id = (new BwcOrderService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 霸王餐订单编辑
     * @param $id  霸王餐订单id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["member_id",0],
             ["orderSn",""],
             ["order_no",""],
             ["userOrderSn",""],
             ["paidAmount",""],
             ["shopOriginId",""],
             ["orderTelephone",""],
             ["name",""],
             ["logo",""],
             ["address",""],
             ["platform",""],
             ["platformName",""],
             ["platformLogo",""],
             ["source",0],
             ["actionUrl",""],
             ["planId",""],
             ["planTypeCh",""],
             ["planTypeDescCh",""],
             ["plan",""],
             ["commissionType",""],
             ["sid",""],
             ["minAmount",""],
             ["maxAmount",""],
             ["commission",""],
             ["commissionRatio",""],
             ["ecommission",""],
             ["ecommissionRatio",""],
             ["state",""],
             ["createTime",0],
             ["finishedTime",0],
             ["xgzSettleStatus",""],
             ["xgzSettleTime",""],
             ["close_time",0],
             ["reason",""],
             ["fanxian",""],
             ["is_fanxian",""]
        ]);
        $this->validate($data, 'addon\tk_cps\app\validate\bwcorder\BwcOrder.edit');
        (new BwcOrderService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 霸王餐订单删除
     * @param $id  霸王餐订单id
     * @return \think\Response
     */
    public function del(int $id){
        (new BwcOrderService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
