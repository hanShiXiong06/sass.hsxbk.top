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

namespace addon\cps\app\api\controller;


use core\base\BaseApiController;
use addon\cps\app\service\admin\ConfigService;
use addon\cps\app\service\admin\OrderService;

class Index extends BaseApiController
{
    /**
     * 接口数据
     * type 模块类型
     * channel 终端
     */
    public function index()
    {
        $data = $this->request->params([
            [ 'type', '' ],
            [ 'channel', '' ],
        ]);
        $type = $data['type'];
        $channel = $data['channel'];
        unset($data);
 		if(!$type){
			return fail('参数不对');
		}
		$config = (new ConfigService())->getConfig();
// 		$data = []; 
		if($type =='jtkMovie'){
		    $data = (new OrderService())->get_pages_url($type,$channel,76,'plugin-private://wx89752980e795bfde/pages/index/index');
 		}else if($type =='jtknx'){
		    $data = (new OrderService())->get_pages_url($type,$channel,32,"plugin://jtkDc/nxindex?pub_id?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
		    
 		}else if($type =='czjh'){
 		    $info['path_url'] = "pages/recharge/index?cid=1&apikey=" . $config['my_apikey'] ."&uid=".$config['my_uid'] . "&index=/pages/index/index";
			$info['appId'] = 'wx5f482af87ff127ca';
			$data = (new OrderService())->get_pages_url($type,$channel,189,$info,'mayi');
		
 		}else if($type =='hfdf'){
			$info['path_url'] = "pages/recharge/recharge?apikey=" . $config['my_apikey'] ."&uid=" .$config['my_uid'] . "&index=/app/pages/index/index" . "&style=embedded";
 		    $info['appId'] = "wx5f482af87ff127ca";
			$data = (new OrderService())->get_pages_url($type,$channel,14,$info,'mayi');
			
 		}else if($type =='llk'){
			$info['path_url'] = "pages/index/index?apikey=" . $config['my_apikey'] ."&uid=".$config['my_uid'] . "&index=/pages/index/index";
			$info['appId'] = 'wxa90429c57325c4c5';
			$data = (new OrderService())->get_pages_url($type,$channel,188,$info,'mayi');
			
 		}else if($type =='mydc'){
			$info['path_url'] = "plugin://mayi-ordering/welcome?type=bsk&apikey=" . $config['my_apikey'] ."&uid=".$config['my_uid'] . "&index=/pages/index/index";
			$info['appId'] = 'wx5f482af87ff127ca';
		    $data = (new OrderService())->get_pages_url($type,$channel,43,$info,'mayi');
		
 		}else if($type =='myyp'){
			$info['path_url'] = "plugin://mayi-movie/index?movieuid=666&movieapikey=" . $config['my_apikey'] ."&uid=".$config['my_uid'] . "&index=/pages/index/index";
			$info['appId'] = 'wx5f482af87ff127ca';
			$data = (new OrderService())->get_pages_url($type,$channel,83,$info,'mayi');
		
 		}else if($type =='mytg'){
			$info['path_url'] = "plugin-private://wx8b412290993bf26a/pages/index/index?apikey=" . $config['my_apikey'] ."&uid=".$config['my_uid'] . "&index=/pages/index/index";
			$info['appId'] = 'wx5f482af87ff127ca';
			$data = (new OrderService())->get_pages_url($type,$channel,187,$info,'mayi');
			
 		}else if($type =='jtkjqmp'){
		    $data = (new OrderService())->get_pages_url($type,$channel,105,"plugin://menpiao-plugin/home?pub_id=" . $config['jutuike_pub_id'] ."&sid=mtpoi");
		    
 		}else if($type =='bdshPlugin'){
		    $data = (new OrderService())->get_pages_url($type,$channel,130,"plugin://bdshPlugin/index?pub_id?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
 		}else if($type =='jtkDc'){ ; 
 		    
 		    $data = (new OrderService())->get_pages_url($type,$channel,70,"plugin://jtkDc/index?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
		//结束
 		}else if($type =='jtkkfc'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,16,"plugin://jtkDc/qzkfcindex?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456"); 
        //结束
 		}else if($type =='rxkf'){
			$data = (new OrderService())->get_pages_url($type,$channel,33,"plugin://jtkDc/rxindex?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
		//结束
 		}else if($type =='kdkf'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,136,"plugin://jtkDc/kudiindex?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
 		    
 		}else if($type =='bsk'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,64,"plugin://jtkDc/bskindex?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
      
 		}else if($type =='jtkmdl'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,26,"plugin://jtkDc/mcDonaldindex?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
	   
 		}else if($type =='jtkxbk'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,34,"plugin://jtkDc/xbkindex?pub_id=" . $config['jutuike_pub_id'] ."&sid=123456");
		
 		}else if($type =='mtwm'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,117,"plugin://meishi/shop?pub_id=" . $config['jutuike_pub_id'] ."&type=meituan&sid=plugin");
		
 		}else if($type =='jtkjd'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,147,"plugin://meishi/shop?pub_id=" . $config['jutuike_pub_id'] ."&type=hotel&sid=plugin");
			
 		}else if($type =='elm'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,80,"plugin://meishi/shop?pub_id=" . $config['jutuike_pub_id'] ."&type=ele&sid=plugin");
			
 		}else if($type =='dccx'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,42,"plugin://meishi/shop?pub_id=" . $config['jutuike_pub_id'] ."&type=didi&sid=plugin");
			
 		}else if($type =='dysc'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,56,"plugin://meishi/tiktok?pub_id=" . $config['jutuike_pub_id'] ."&sid=plugin");
			
 		}else if($type =='dytg'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,152,"plugin://meishi/douyin?pub_id=" . $config['jutuike_pub_id'] ."&sid=plugin");
 			
 		}else if($type =='mxbc'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,134,"plugin://meishi/delivery?pub_id=" . $config['jutuike_pub_id'] ."&catId=226&keyword=蜜雪冰城");
			
 		}else if($type =='dsjh'){
		    $data = (new OrderService())->get_pages_url($type,$channel,13,"plugin://meishi/dianshang?pub_id=" . $config['jutuike_pub_id'] ."&source=jd,taobao,douyin,pdd,vip");
		
 		}else if($type =='jd'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,114,"plugin://meishi/dianshang?pub_id=" . $config['jutuike_pub_id'] ."&source=jd");
			
 		}else if($type =='tb'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,39,$data['url'] = "plugin://meishi/dianshang?pub_id=" . $config['jutuike_pub_id'] ."&source=taobao");
		
 		}else if($type =='pdd'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,12,$data['url'] = "plugin://meishi/dianshang?pub_id=" . $config['jutuike_pub_id'] ."&source=pdd");
			
 		}else if($type =='wph'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,124,$data['url'] = "plugin://meishi/dianshang?pub_id=" . $config['jutuike_pub_id'] ."&source=vip");
			
 		}else if($type =='mtdd'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,9,$data['url'] = "plugin://meishi/home?pub_id=" . $config['jutuike_pub_id'] ."&sid=plugin");
 		    
 		}else if($type =='mtqb'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,150,$data['url'] = "plugin://meishi/coupon?pub_id=" . $config['jutuike_pub_id'] ."&sid=plugin");    
 		    
 		}else if($type =='fzhcp'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,91);
 		    
 		}else if($type =='dddj'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,67);    
 		   
 		}else if($type =='fzfjp'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,113);
 		   
 		}else if($type =='fzcps'){
 		    $data = (new OrderService())->get_pages_url($type,$channel,120);

		}else if($type =='jtktjkd'){
  		    $data = (new OrderService())->get_pages_url($type,$channel,52,);
  		  
		}else if($type =='ddjy'){
  		    $data = (new OrderService())->get_pages_url($type,$channel,67,);
  		  
		}else if($type =='mtbwc'){
  		    $data = (new OrderService())->get_pages_url($type,$channel,138,);
  		    
		}else if($type =='cngg'){
  		    $data = (new OrderService())->get_pages_url($type,$channel,154,);  
  		  
 	 	}else if($type =='mayixq_dome'){
 	 	     $data = (new OrderService())->get_pages_url($type,$channel,14,null,'mayi');//mayi
 		} 
 		
		if($type=='config'){
			return success($config);
		}else{
		    /**
		     * url 这个是链接，h5就用h5返回的长链接，短链接，小程序就用小程序的，注意要判断
		     * title 这个是h5的title标题
		     * we_app_info 这个是小程序的信息
		     */
			return success($data);
		}
    }
	
	 
	

}
