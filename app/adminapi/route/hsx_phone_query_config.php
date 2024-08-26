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
// USER_CODE_BEGIN -- hsx_phone_query_config

Route::group('hsx_phone_query_config', function () {

    //列表
    Route::get('hsx_phone_query_config', 'hsx_phone_query_config.HsxPhoneQueryConfig/lists');
    //详情
    Route::get('hsx_phone_query_config/:id', 'hsx_phone_query_config.HsxPhoneQueryConfig/info');
    //添加
    Route::post('hsx_phone_query_config', 'hsx_phone_query_config.HsxPhoneQueryConfig/add');
    //编辑
    Route::put('hsx_phone_query_config/:id', 'hsx_phone_query_config.HsxPhoneQueryConfig/edit');
    //删除
    Route::delete('hsx_phone_query_config/:id', 'hsx_phone_query_config.HsxPhoneQueryConfig/del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- hsx_phone_query_config
