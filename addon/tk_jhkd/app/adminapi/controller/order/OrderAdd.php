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

use core\base\BaseAdminController;
use addon\tk_jhkd\app\service\admin\order\OrderAddService;


/**
 * 订单列控制器
 * Class OrderAdd
 * @package addon\tk_jhkd\app\adminapi\controller\order
 */
class OrderAdd extends BaseAdminController
{
   /**
    * 获取订单列列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["member_id",""],
             ["order_id",""],
             ["order_status",""],
             ["create_time",["",""]]
        ]);
        return success((new OrderAddService())->getPage($data));
    }

    /**
     * 订单列详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new OrderAddService())->getInfo($id));
    }

    /**
     * 添加订单列
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["member_id",0],
             ["order_id",""],

        ]);
        $this->validate($data, 'addon\tk_jhkd\app\validate\order\OrderAdd.add');
        $id = (new OrderAddService())->add($data);
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
             ["order_id",""],

        ]);
        $this->validate($data, 'addon\tk_jhkd\app\validate\order\OrderAdd.edit');
        (new OrderAddService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 订单列删除
     * @param $id  订单列id
     * @return \think\Response
     */
    public function del(int $id){
        (new OrderAddService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
    public function getMemberAll(){
         return success(( new OrderAddService())->getMemberAll());
    }

}
