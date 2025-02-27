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

namespace addon\phone_shop_price\app\adminapi\controller\recycle_order_device;

use core\base\BaseAdminController;
use addon\phone_shop_price\app\service\admin\recycle_order\RecycleOrderDeviceService;
use addon\phone_shop_price\app\dict\RecycleOrderDict;
   //  addon\phone_shop_price\app\service\admin\recycle_order\RecycleOrderDeviceService;


/**
 * 回收订单设备控制器
 * Class RecycleOrderDevice
 * @package addon\phone_shop_price\app\adminapi\controller\recycle_order_device
 */
class RecycleOrderDevice extends BaseAdminController
{
   /**
    * 获取回收订单设备列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["order_id",""],
             ["imei",""],
             ["model",""],
             ["status",""],
             ["check_status",""],
             ["check_result",""],
             ["initial_price",""],
             ["final_price",""],
             ["price_remark",""],
             ["create_at",""],
             ["update_at",""],
             ["check_at",""]
        ]);
        return success((new RecycleOrderDeviceService())->getPage($data));
    }

    /**
     * 回收订单设备详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new RecycleOrderDeviceService())->getInfo($id));
    }

    /**
     * 添加回收订单设备
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["order_id",0],
             ["imei",""],
             ["model",""],
             ["status",0],
             ["check_status",0],
             ["check_result",""],
             ["initial_price",0.00],
             ["final_price",0.00],
             ["price_remark",""],
             ["create_at",0],
             ["update_at",0],
             ["check_at",0]
        ]);
       //  $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order_device\RecycleOrderDevice.add');
        $id = (new RecycleOrderDeviceService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 回收订单设备编辑
     * @param $id  回收订单设备id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["order_id",0],
             ["imei",""],
             ["model",""],
             ["status",0],
             ["check_status",0],
             ["check_result",""],
             ['check_images',''],
             ["initial_price",0.00],
             ["final_price",0.00],
             ["price_remark",""],
             ["create_at",0],
             ["update_at",0],
             ["check_at",0],
             ["check_status",""]
        ]);
      
       //  $this->validate($data, 'addon\phone_shop_price\app\validate\recycle_order_device\RecycleOrderDevice.edit');
       
        return success( (new RecycleOrderDeviceService())->edit($id, $data));
    }

    /**
     * 回收订单设备删除
     * @param $id  回收订单设备id
     * @return \think\Response
     */
    public function del(int $id){
        (new RecycleOrderDeviceService())->del($id);
        return success('DELETE_SUCCESS');
    }

    // getStatus 获取订单状态列表
    public function getDeviceStatus(){
        // 将RecycleOrderDict::DEVICE_STATUS,RecycleOrderDict::DEVICE_STATUS_TEXT 组合
        // ['key'=> 'CHECKING', 'value'=> '质检中', 'id'=> 3 ]
       // 返回文字
        return success(RecycleOrderDict::DEVICE_STATUS_TEXT);
    }
    
}

