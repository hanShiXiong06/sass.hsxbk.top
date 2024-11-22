<?php

// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use app\api\middleware\ApiChannel;
use think\facade\Route;


/**
 * 付费会员
 */
Route::group('tk_vip', function() {
    /***************************************************** vip 未登录接口 ****************************************************/


})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('tk_vip', function() {
    /***************************************************** vip 登录接口 ****************************************************/
    //获取开启等级权益的会员等级
    Route::get('member/level', 'addon\tk_vip\app\api\controller\member\Level@lists');
    //创建订单
    Route::post('order/create', 'addon\tk_vip\app\api\controller\order\Order@add');
    //获取会员等级信息
    Route::get('vip/levelinfo', 'addon\tk_vip\app\api\controller\member\Level@getInfo');
    //购买订单记录
    Route::get('order/lists', 'addon\tk_vip\app\api\controller\order\Order@lists');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);
