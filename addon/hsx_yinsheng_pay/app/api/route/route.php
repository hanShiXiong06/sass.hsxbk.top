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

use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use app\api\middleware\ApiChannel;
use think\facade\Route;


/**
 * 银盛支付
 */
Route::group('hsx_yinsheng_pay', function() {
    /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\hsx_yinsheng_pay\app\api\controller\hello_world\Index@index');
    Route::get('pay', 'addon\hsx_yinsheng_pay\app\api\controller\pay\Index@pay');
        /***************************************************** 买单相关 *************************************************/
        Route::get('order/info', 'addon\hsx_yinsheng_pay\app\api\controller\order\Index@Info');

        //买单订单创建
        Route::post('order', 'addon\hsx_yinsheng_pay\app\api\controller\order\Index@create');
    
        // 买单订单列表
        Route::get('order', 'addon\hsx_yinsheng_pay\app\api\controller\order\Index@lists');
    
        // 买单订单详情
        Route::get('order/:order_id', 'addon\hsx_yinsheng_pay\app\api\controller\order\Index@detail');
    

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);
    
    Route::group('pay', function() {
        /***************************************************** hello world ****************************************************/
        Route::get('/notify/100005/weapp/yinshengpay/pay','addon\hsx_yinsheng_pay\app\api\controller\pay\Index@notify');
        // Route::get('pay', 'addon\hsx_yinsheng_pay\app\api\controller\pay\Index@pay');
       
    
    })->middleware(ApiChannel::class)
        ->middleware(ApiCheckToken::class, false) //false表示不验证登录
        ->middleware(ApiLog::class);
    


// Route::group('hsx_yinsheng_pay', function() {

// })

