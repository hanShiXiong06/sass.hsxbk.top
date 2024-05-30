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

use think\facade\Route;

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;
/**
* 路由（注意最好group路由名称与插件名称一致，防止路由冲突）
*/
Route::group("cps", function () {
	//获取配置
	Route::get('config', 'addon\cps\app\adminapi\controller\Index@getConfig');
	//配置设置
	Route::put('config', 'addon\cps\app\adminapi\controller\Index@setConfig');
	
 	 
	
	//聚推客列表
	Route::get('jtk/order', 'addon\cps\app\adminapi\controller\Jtk@lists');
	//聚推客类型
	Route::get('jtk/type', 'addon\cps\app\adminapi\controller\Jtk@Type');
	
	//蚂蚁星球订单列表
	Route::get('myxq/order', 'addon\cps\app\adminapi\controller\Jtk@mylists');
	
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);