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
        Route::get('status_count', 'addon\phone_shop_price\app\api\controller\recycle_order\RecycleOrder@getStatusCount');
        Route::put('edit/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@edit');
        Route::delete('delete/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@del');
        
        // 订单状态
        Route::get('status', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@getStatus');
        
        // 设备相关操作
        Route::get('device/list', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@lists');
        Route::get('device/detail/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@info');
        Route::post('device/add', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@add');
        Route::put('device/edit/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@edit');
        Route::delete('device/delete/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@del');
        Route::put('device/status', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@updateStatus');
     
        Route::put('device/price', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@updatePrice');
        Route::put('device/return', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrderDevice@updateReturn');
        
        // 会员相关
        Route::get('member/list', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@getMemberAll');
    });

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('recycle_price', function() {
    // 请求 回收分类列表
    Route::get('recycle_category/tree', 'addon\phone_shop_price\app\api\controller\recycle_price\RecyclePrice@recycle_category_tree');
    // 获取 回收的机型
    Route::get('recycle_model/list',   'addon\phone_shop_price\app\api\controller\recycle_price\RecyclePrice@recycle_model');
    // 获取 回收型号机框question
    Route::get('question/list', 'addon\phone_shop_price\app\api\controller\recycle_price\RecyclePrice@question_list');
    // 获取 回收价格
    Route::post('calculate/price', 'addon\phone_shop_price\app\api\controller\recycle_price\RecyclePrice@calculate_price');
    
    // 收款方式管理
    Route::get('payment/list', 'addon\phone_shop_price\app\api\controller\payment\Payment@lists');
    Route::post('payment/add', 'addon\phone_shop_price\app\api\controller\payment\Payment@add');
    Route::put('payment/update/:id', 'addon\phone_shop_price\app\api\controller\payment\Payment@edit');
    Route::delete('payment/delete/:id', 'addon\phone_shop_price\app\api\controller\payment\Payment@del');
    Route::put('payment/set_default/:id', 'addon\phone_shop_price\app\api\controller\payment\Payment@setDefault');
    
    //--------回收价格订单模块 end--------
        //二手机回收报价订单列表
        Route::get('recycle_order/list', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@lists');
        //二手机回收报价订单详情
        Route::get('recycle_order/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@info');
        //添加二手机回收报价订单
        Route::post('recycle_order', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@add');
        //编辑二手机回收报价订单
        Route::put('recycle_order/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@edit');
        //删除二手机回收报价订单
        Route::delete('recycle_order/:id', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@del');
        Route::get('order/status', 'addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@getStatus');
        
        Route::get('member_all','addon\phone_shop_price\app\api\controller\recycle_order\PhoneShopRecycleOrder@getMemberAll');

    
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //表示验证登录
    ->middleware(ApiLog::class);

