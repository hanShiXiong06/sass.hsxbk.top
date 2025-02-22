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

namespace addon\phone_shop_price\app\adminapi\controller\phone_shop_recycle_order;

use core\base\BaseAdminController;
use addon\phone_shop_price\app\service\admin\phone_shop_recycle_order\PhoneShopRecycleOrderService;


/**
 * 回收订单控制器
 * Class PhoneShopRecycleOrder
 * @package addon\phone_shop_price\app\adminapi\controller\phone_shop_recycle_order
 */
class PhoneShopRecycleOrder extends BaseAdminController
{
   /**
    * 获取回收订单列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["count",""],
             ["express_id",""],
             ["send_username",""],
             ["telphone",""],
             ["pay_type",""],
             ["account",""],
             ["status",""],
             ["create_at",["",""]],
             ["over_at",""],
             ["comment",""],
             ["close_express_id",""]
        ]);
        return success((new PhoneShopRecycleOrderService())->getPage($data));
    }

    /**
     * 回收订单详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new PhoneShopRecycleOrderService())->getInfo($id));
    }

    /**
     * 添加回收订单
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["count",0],
             ["express_id",0],
             ["send_username",""],
             ["telphone",""],
             ["pay_type",""],
             ["account",""],
             ["status",""],
             ["close_express_id",0]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\phone_shop_recycle_order\PhoneShopRecycleOrder.add');
        $id = (new PhoneShopRecycleOrderService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 回收订单编辑
     * @param $id  回收订单id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["count",0],
             ["express_id",0],
             ["send_username",""],
             ["telphone",""],
             ["pay_type",""],
             ["account",""],
             ["status",""],
             ["close_express_id",0]
        ]);
        $this->validate($data, 'addon\phone_shop_price\app\validate\phone_shop_recycle_order\PhoneShopRecycleOrder.edit');
        (new PhoneShopRecycleOrderService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 回收订单删除
     * @param $id  回收订单id
     * @return \think\Response
     */
    public function del(int $id){
        (new PhoneShopRecycleOrderService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
    public function getMemberAll(){
         return success(( new PhoneShopRecycleOrderService())->getMemberAll());
    }

}
