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



Route::group('phone_shop_price', function() {

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

