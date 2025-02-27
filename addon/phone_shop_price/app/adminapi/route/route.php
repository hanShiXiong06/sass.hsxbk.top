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
   
    AdminLog::class
]);
// USER_CODE_END -- phone_shop_price_recycle_category

// USER_CODE_BEGIN -- phone_shop_price_recycle_order
Route::group('phone_shop_price', function () {
    // 回收订单管理
    Route::get('recycle_order/list', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@lists');
    Route::delete('recycle_order/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@deleteOrder');
    Route::put('recycle_order/device/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order_device\RecycleOrderDevice@edit');
    // recycle_order/device post
    Route::post('recycle_order/device', 'addon\phone_shop_price\app\adminapi\controller\recycle_order_device\RecycleOrderDevice@add');
    Route::delete('recycle_order/device/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order_device\RecycleOrderDevice@del');
    // 获取订单状态列表
    Route::get('recycle_order/status', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@getStatus');
    // 获取设备状态列表
    Route::get('recycle_order/device/status', 'addon\phone_shop_price\app\adminapi\controller\recycle_order_device\RecycleOrderDevice@getDeviceStatus');
    // 订单更新状态
    Route::put('recycle_order/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_order\RecycleOrder@edit');

    })->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- phone_shop_price_recycle_order

// USER_CODE_BEGIN -- phone_shop_price_recycle_banner
Route::group('phone_shop_price', function () {
    // Banner管理
    Route::get('recycle_banner', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleBanner@lists');
    Route::get('recycle_banner/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleBanner@info');
    Route::post('recycle_banner', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleBanner@add');
    Route::put('recycle_banner/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleBanner@edit');
    Route::delete('recycle_banner/:id', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleBanner@del');
    Route::put('recycle_banner/change_sort/:id/:sort', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleBanner@changeSort');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- phone_shop_price_recycle_banner

// USER_CODE_BEGIN -- phone_shop_price_recycle_category_config
Route::group('phone_shop_price', function () {
    // 回收分类配置
    Route::get('recycle_category_config', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategoryConfig@getConfig');
    Route::put('recycle_category_config', 'addon\phone_shop_price\app\adminapi\controller\recycle_category\RecycleCategoryConfig@setConfig');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- phone_shop_price_recycle_category_config

