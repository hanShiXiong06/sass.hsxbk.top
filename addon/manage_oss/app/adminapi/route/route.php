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
 * 存储管理--自定义站点存储权限
 */
Route::group('manage_oss', function () {

    /***************************************************** Manage Oss 接口管理系统 ****************************************************/
    //存储列表
    Route::get('storage', 'addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@storageList');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);

// USER_CODE_BEGIN -- manage_oss

Route::group('manage_oss', function () {

    //存储管理列表
    Route::get('manageoss', 'addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@lists');
    //存储管理详情
    Route::get('manageoss/:id', 'addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@info');
    //添加存储管理
    Route::post('manageoss', 'addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@add');
    //编辑存储管理
    Route::put('manageoss/:id', 'addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@edit');
    //删除存储管理
    Route::delete('manageoss/:id', 'addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@del');

    Route::get('site_all','addon\manage_oss\app\adminapi\controller\manageoss\ManageOss@getSiteAll');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- manage_oss