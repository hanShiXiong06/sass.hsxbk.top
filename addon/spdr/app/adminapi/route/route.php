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

/**
 * 商品导入导出
 */
Route::group('spdr', function () {

    /***************************************************** 商品导入导出 ****************************************************/
    Route::post('goods/export', 'addon\spdr\app\adminapi\controller\spdr\Goods@export');
    //验证shop文件
    Route::get('checkshop', 'addon\spdr\app\adminapi\controller\spdr\Goods@checkShop');
    Route::post('goods/import','addon\spdr\app\adminapi\controller\spdr\Goods@import');
    Route::post('goods/importadmin','addon\spdr\app\adminapi\controller\spdr\Goods@importadmin');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_BEGIN -- spdr_list

Route::group('spdr', function () {

    //商品导入列列表
    Route::get('spdrlist', 'addon\spdr\app\adminapi\controller\spdrlist\SpdrList@lists');
    //商品导入列详情
    Route::get('spdrlist/:id', 'addon\spdr\app\adminapi\controller\spdrlist\SpdrList@info');
    //添加商品导入列
    Route::post('spdrlist', 'addon\spdr\app\adminapi\controller\spdrlist\SpdrList@add');
    //编辑商品导入列
    Route::put('spdrlist/:id', 'addon\spdr\app\adminapi\controller\spdrlist\SpdrList@edit');
    //删除商品导入列
    Route::delete('spdrlist/:id', 'addon\spdr\app\adminapi\controller\spdrlist\SpdrList@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- spdr_list
