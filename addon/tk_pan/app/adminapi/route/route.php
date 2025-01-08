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
 * 123盘插件
 */
Route::group('tk_pan', function () {
     /***************************************************** 123盘云存储 ****************************************************/
    //获取存储列表
    Route::get('storage', 'addon\tk_pan\app\adminapi\controller\Storage@storageList');
    //存储详情
    Route::get('storage/:storage_type', 'addon\tk_pan\app\adminapi\controller\Storage@storageConfig');
    //存储修改
    Route::put('storage/:storage_type', 'addon\tk_pan\app\adminapi\controller\Storage@editStorage');
    //增加驱动
    Route::get('adddriver', 'addon\tk_pan\app\adminapi\controller\Storage@addDriver');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);