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

namespace addon\tk_jhkd\app\adminapi\controller\order;

use addon\tk_jhkd\app\service\api\OrderService as ApiOrderService;
use addon\tk_jhkd\app\service\core\TranceService;
use addon\tk_jhkd\app\service\core\YidaService;
use app\dict\common\ChannelDict;
use app\dict\pay\PayDict;
use core\base\BaseAdminController;
use addon\tk_jhkd\app\service\admin\order\OrderService;
use think\Response;


/**
 * 订单列控制器
 * Class Order
 * @package addon\tk_jhkd\app\adminapi\controller\order
 */
class Order extends BaseAdminController
{
    public function getLink()
    {
        return success((new OrderService())->getLink());
    }
   /**
    * 获取订单列列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["member_id",""],
             ["order_from",""],
             ["order_id",""],
             ["is_send",""],
             ["order_status",""],
             ["refund_status",""],
             ["remark",""],
             ["create_time",["",""]]
        ]);
        return success((new OrderService())->getPage($data));
    }

    /**
     * 订单列详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new OrderService())->getInfo($id));
    }

    /**
     * 添加订单列
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["member_id",0],
             ["order_from",""],
             ["order_id",""],
             ["order_money",0.00],
             ["order_discount_money",0.00],
             ["is_send",0],
             ["order_status",0],
             ["refund_status",0],
             ["out_trade_no",""],
             ["remark",""],
             ["pay_time",0],
             ["close_reason",""],
             ["is_enable_refund",""],
             ["close_time",0],
             ["ip",""],
             ["delete_time",0],
             ["send_log",""]
        ]);
        $this->validate($data, 'addon\tk_jhkd\app\validate\order\Order.add');
        $id = (new OrderService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 订单列编辑
     * @param $id  订单列id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["member_id",0],
             ["order_from",""],
             ["order_id",""],
             ["order_money",0.00],
             ["order_discount_money",0.00],
             ["is_send",0],
             ["order_status",0],
             ["refund_status",0],
             ["out_trade_no",""],
             ["remark",""],
             ["pay_time",0],
             ["close_reason",""],
             ["is_enable_refund",""],
             ["close_time",0],
             ["ip",""],
             ["delete_time",0],
             ["send_log",""]
        ]);
        $this->validate($data, 'addon\tk_jhkd\app\validate\order\Order.edit');
        (new OrderService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }
    public function cancelOrder()
    {
        $data = $this->request->params([
            ["id", ""],
            ["close_reason", "后台退款"]
        ]);
        return success('操作成功',  event('CancelOrder',$data));
    }
    /**
     * 发单
     * @param int $id
     * @return \think\Response
     */
    public function sendOrder($order_id){
        return success('操作成功',(new OrderService())->sendOrder($order_id));
    }
    /**
     * 订单列删除
     * @param $id  订单列id
     * @return \think\Response
     */
    public function del(int $id){
        (new OrderService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
    public function getMemberAll(){
         return success(( new OrderService())->getMemberAll());
    }
    /**
     * 获取支付方式
     * @return Response
     */
    public function getPayType()
    {
        return success(PayDict::getPayType());
    }

    /**
     * 获取订单来源
     */
    public function getOrderFrom()
    {
        return success(ChannelDict::getType());
    }
    /**
     * 物流信息查询
     */
    public function deliveryInfo($deliveryid){
        return success((new TranceService())->deliveryTrance(['delivery_id'=>$deliveryid]));
    }

}
