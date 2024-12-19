<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

use think\facade\Route;
use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;

// USER_CODE_BEGIN -- phone_shop_price_recycle_category
Route::group('phone_shop_price', function () {
    //二手机分类列表
    Route::get('recycle_category', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@lists');
    //二手机分类详情
    Route::get('recycle_category/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@info');
    //添加二手机分类
    Route::post('recycle_category', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@add');
    //编辑二手机分类
    Route::put('recycle_category/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@edit');
    //删除二手机分类
    Route::delete('recycle_category/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@del');
    //二手机分类列表
    Route::get('recycle_category_tree', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@tree');
    //编辑商品分类
    Route::post('recycle_category/category/update', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategory@updateCategory');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- phone_shop_price_recycle_category

// USER_CODE_BEGIN -- phone_shop_price_recycle_order
Route::group('phone_shop_price', function () {
    // 回收订单管理
    Route::get('recycle_order/list', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@lists');
    Route::delete('recycle_order/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@deleteOrder');
    
    Route::post('recycle_order/device/status', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@updateDeviceStatus');
    Route::put('recycle_order/device/price', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@updateDeviceFinalPrice');
    Route::put('recycle_order/device/return', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@updateDeviceReturn');
    Route::get('recycle_order/device/detail', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@getDeviceDetail');
    // recycle_order/2

    // 设备管理接口
    Route::post('recycle_device', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@addDevice');
    Route::delete('recycle_device/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@deleteDevice');
    Route::get('recycle_device/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@deviceInfo');
    Route::put('recycle_device/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@editDevice');
    
    // 基础 CRUD 接口
    Route::get('recycle_order/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@info');
    Route::put('recycle_order/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@edit');

    //  订单子项的接口
    // phone_shop_price/recycle_device/4/status
    Route::put('recycle_device/:id/status', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@updateDeviceStatus');
    Route::put('recycle_device/:id/final_price', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@updateDeviceFinalPrice');
    Route::put('recycle_device/:id/return', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@updateDeviceReturn');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- phone_shop_price_recycle_order
