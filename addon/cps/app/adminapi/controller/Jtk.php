<?php
// +----------------------------------------------------------------------
// | cps联盟
// +----------------------------------------------------------------------
// | 官方网址：https://xuanloo.com
// +----------------------------------------------------------------------
// | 河南省炫洛网络科技有限公司
// +----------------------------------------------------------------------
// | Author: 小洛
// +----------------------------------------------------------------------


namespace addon\cps\app\adminapi\controller;


use core\base\BaseAdminController;
use addon\cps\app\service\admin\OrderService;

class Jtk extends BaseAdminController
{
   /**
    * 账单列表
    * @return Response
    */
   public function lists()
   {
       $data = $this->request->params([
           ['order_sn', ''],
           ['act_id', ''], 
           ['create_time', ''],
       ]);
	   if($data['create_time']){
		   $data['start_time'] = $data['create_time'][0];
		   $data['end_time'] = $data['create_time'][1];
	   }
	   unset($data['create_time']);
       return success((new OrderService())->jtk_order($data));
   }
   
  public function Type()
  {
      return success(OrderService::getType());
  }
  
  
   /**
    * 蚂蚁星球列表
    * @return Response
    */
   public function mylists()
   {
       $data = $this->request->params([
           ['order_sn', ''],
           ['search_type', ''], 
           ['create_time', ''],
       ]);
	   if($data['create_time']){
		   $data['starttime'] = $data['create_time'][0];
		   $data['endtime'] = $data['create_time'][1];
	   } 
	   if($data['search_type']==1){
	        $data['orderid'] = $data['order_sn'];
	   }else if($data['search_type']==2){
	       $data['rechargeno'] = $data['order_sn'];
	   }  
	   unset($data['create_time']);
	   unset($data['order_sn']);
	   unset($data['search_type']);
	   $list = (new OrderService())->rerechargeorder(1,$data);
	   foreach ($list['data'] as &$item) {
		   $item['createdtime'] = date("Y-m-d H:i:s",$item['createdtime']);
		   if($item['closetime']){
				$item['closetime'] = date("Y-m-d H:i:s",$item['closetime']);
		   }
		   if($item['updatedtime']){
				$item['updatedtime'] = date("Y-m-d H:i:s",$item['updatedtime']);
		   }
		   if($item['completetime']){
				$item['completetime'] = date("Y-m-d H:i:s",$item['completetime']);
		   }
	   }
	   unset($item);
       return success($list);
   }
   


}
