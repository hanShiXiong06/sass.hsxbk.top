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
 * 升级助手
 */
Route::group('tk_upgrade', function () {

     /***************************************************** 升级助手接口 ****************************************************/
    Route::post('addonupload', 'addon\tk_upgrade\app\adminapi\controller\Addon@addonUpload');
    Route::get('checkauthinfo', 'addon\tk_upgrade\app\adminapi\controller\Addon@checkAuthInfo');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);