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
// USER_CODE_END -- phone_shop_price_recycle_category
