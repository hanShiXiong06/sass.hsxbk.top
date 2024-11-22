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
 * 消息通知
 */
Route::group('tk_notice', function () {

     /***************************************************** 消息通知路由层 ****************************************************/
//    Route::get('ceshi', 'addon\tk_notice\app\adminapi\controller\config\Config@ceshi');

    //获取配置
    Route::get('config/getconfig', 'addon\tk_notice\app\adminapi\controller\config\Config@getConfig');
    //设置配置
    Route::post('config/setconfig', 'addon\tk_notice\app\adminapi\controller\config\Config@setConfig');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);