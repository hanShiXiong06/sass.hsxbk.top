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
 * 二手机报价
 */
Route::group('phone_shop_price', function() {
    /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\phone_shop_price\app\api\controller\hello_world\Index@index');
     //二手机分类列表
     Route::get('recycle_category_tree', 'addon\phone_shop_price\app\api\controller\recycle_category\RecycleCategory@tree');
     // phone_shop_price/recycle_address_list 获取商家的回收地址
     Route::get('address_list','addon\phone_shop_price\app\api\controller\recycle_category\RecycleCategory@address_list');

    // 回收订单相关接口
    Route::group('recycle_order', function() {
        // 订单基础操作
        Route::get('lists', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@lists');
        Route::get('detail/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@info');
        Route::post('add', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@add');
        Route::get('status_list', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@getStatusList');
        // 获取设备状态列表
        // status_count
        Route::get('status_count', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@getStatusCount');
        Route::get('device_status/list', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@getDeviceStatus');
        
        Route::put('edit/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@edit');
        Route::delete('delete/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@del');
        // 更新订单状态
        Route::put('update_status/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@updateStatus');
        // device_confirm 单台确认
        Route::put('device_confirm/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@deviceConfirm');
        // device_cancle
        Route::put('device_cancel/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@deviceCancel');
        
    });

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('recycle_price', function() {
    // 收款方式管
    Route::get('payment/list', 'addon\phone_shop_price\app\api\controller\payment\Payment@lists');
    Route::post('payment/add', 'addon\phone_shop_price\app\api\controller\payment\Payment@add');
    Route::put('payment/update/:id', 'addon\phone_shop_price\app\api\controller\payment\Payment@edit');
    Route::delete('payment/delete/:id', 'addon\phone_shop_price\app\api\controller\payment\Payment@del');
    Route::put('payment/set_default/:id', 'addon\phone_shop_price\app\api\controller\payment\Payment@setDefault');
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

