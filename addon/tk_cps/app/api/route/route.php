<?php
/**
 * TK
 */

use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use app\api\middleware\ApiChannel;
use think\facade\Route;


/**
 * tk_cps
 */
Route::group('tk_cps', function () {
    Route::post('bwcnotice', 'addon\tk_cps\app\api\controller\Notice@bwcNotice');
});
Route::group('tk_cps', function () {
   // Route::get('ceshi', 'addon\tk_cps\app\api\controller\Bwc@ceshi');
    /***************************************************** 霸王餐活动****************************************************/
    //活动列表
    Route::get('bwc/actlist', 'addon\tk_cps\app\api\controller\Bwc@actList');
    //活动详情
    Route::get('bwc/actinfo', 'addon\tk_cps\app\api\controller\Bwc@actInfo');

    //订单列表 订单内部状态 1已取消 2已过期 3已报名 4已下单 5审核中 6审核通过 7 审核失败 8 已返现
//    Route::get('bwc/orderlist', 'addon\tk_cps\app\api\controller\Bwc@getOrderList');

    /***************************************************** CPS联盟 ****************************************************/
    Route::get('actlist', 'addon\tk_cps\app\api\controller\Cps@actList');
    Route::get('cpsinfo', 'addon\tk_cps\app\api\controller\Cps@cpsInfo');
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);

Route::group('tk_cps', function () {

    Route::get('bwc/list', 'addon\tk_cps\app\api\controller\Bwc@lists');
    Route::get('bwc/orderstatus', 'addon\tk_cps\app\api\controller\Bwc@getOrderStatus');
    Route::get('bwc/orderinfo/:id', 'addon\tk_cps\app\api\controller\Bwc@info');
    //活动报名
    Route::post('bwc/signup', 'addon\tk_cps\app\api\controller\Bwc@signUp');
    //取消报名
    Route::post('bwc/cancelevent', 'addon\tk_cps\app\api\controller\Bwc@cancelEvent');
    //分销关系检查
    Route::post('bwc/checkfenxiao', 'addon\tk_cps\app\api\controller\Bwc@checkFenxiao');
    //分销绑定
    Route::post('checkfenxiao', 'addon\tk_cps\app\api\controller\Fenxiao@checkFenxiao');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

