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
    //--------回收价格订单模块 end--------
        //二手机回收报价订单列表
        Route::get('phone_shop_recycle_order/list', 'addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@lists');
        //二手机回收报价订单详情
        Route::get('phone_shop_recycle_order/:id', 'addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@info');
        //添加二手机回收报价订单
        Route::post('phone_shop_recycle_order', 'addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@add');
        //编辑二手机回收报价订单
        Route::put('phone_shop_recycle_order/:id', 'addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@edit');
        //删除二手机回收报价订单
        Route::delete('phone_shop_recycle_order/:id', 'addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@del');
        Route::get('order/status', 'addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@getStatus');
        
        Route::get('member_all','addon\phone_shop_price\app\api\controller\phone_shop_recycle_order\PhoneShopRecycleOrder@getMemberAll');

    
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //表示验证登录
    ->middleware(ApiLog::class);

