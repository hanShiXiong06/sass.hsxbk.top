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
 * 营销群发
 */
Route::group('qf_notice', function () {

     /***************************************************** 群发消息接口 ****************************************************/
    Route::get('send/notice/:id', 'addon\qf_notice\app\adminapi\controller\addon\Addon@sendNotice');
    //获取配置
    Route::get('config/getconfig', 'addon\qf_notice\app\adminapi\controller\config\Config@getConfig');
    //设置配置
    Route::post('config/setconfig', 'addon\qf_notice\app\adminapi\controller\config\Config@setConfig');
    //导入用户
    Route::post('user/import', 'addon\qf_notice\app\adminapi\controller\import\Import@import');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_BEGIN -- qfnotice_addon

Route::group('qf_notice', function () {
    //获取应用发送渠道类型
    Route::get('addon/addontype','addon\qf_notice\app\adminapi\controller\addon\Addon@getAddonType');
    //群发应用列表
    Route::get('addon', 'addon\qf_notice\app\adminapi\controller\addon\Addon@lists');
    //群发应用详情
    Route::get('addon/:id', 'addon\qf_notice\app\adminapi\controller\addon\Addon@info');
    //添加群发应用
    Route::post('addon', 'addon\qf_notice\app\adminapi\controller\addon\Addon@add');
    //编辑群发应用
    Route::put('addon/:id', 'addon\qf_notice\app\adminapi\controller\addon\Addon@edit');
    //删除群发应用
    Route::delete('addon/:id', 'addon\qf_notice\app\adminapi\controller\addon\Addon@del');
    Route::get('member_level_all','addon\qf_notice\app\adminapi\controller\addon\Addon@getMemberLevelAll');
    Route::get('category_all','addon\qf_notice\app\adminapi\controller\addon\Addon@getCategoryAll');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- qfnotice_addon

// USER_CODE_BEGIN -- qfnotice_log

Route::group('qf_notice', function () {

    //发送日志列表
    Route::get('qflog', 'addon\qf_notice\app\adminapi\controller\qflog\Qflog@lists');
    //发送日志详情
    Route::get('qflog/:id', 'addon\qf_notice\app\adminapi\controller\qflog\Qflog@info');
    //添加发送日志
    Route::post('qflog', 'addon\qf_notice\app\adminapi\controller\qflog\Qflog@add');
    //编辑发送日志
    Route::put('qflog/:id', 'addon\qf_notice\app\adminapi\controller\qflog\Qflog@edit');
    //删除发送日志
    Route::delete('qflog/:id', 'addon\qf_notice\app\adminapi\controller\qflog\Qflog@del');
    Route::post('delqflogselect', 'addon\qf_notice\app\adminapi\controller\qflog\Qflog@delselect');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- qfnotice_log

// USER_CODE_BEGIN -- qfnotice_user_cat

Route::group('qf_notice', function () {

    //用户分类列表
    Route::get('usercat', 'addon\qf_notice\app\adminapi\controller\usercat\UserCat@lists');
    //用户分类详情
    Route::get('usercat/:id', 'addon\qf_notice\app\adminapi\controller\usercat\UserCat@info');
    //添加用户分类
    Route::post('usercat', 'addon\qf_notice\app\adminapi\controller\usercat\UserCat@add');
    //编辑用户分类
    Route::put('usercat/:id', 'addon\qf_notice\app\adminapi\controller\usercat\UserCat@edit');
    //删除用户分类
    Route::delete('usercat/:id', 'addon\qf_notice\app\adminapi\controller\usercat\UserCat@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- qfnotice_user_cat

// USER_CODE_BEGIN -- qfnotice_user

Route::group('qf_notice', function () {

    //用户列列表
    Route::get('user', 'addon\qf_notice\app\adminapi\controller\user\User@lists');
    //用户列详情
    Route::get('user/:id', 'addon\qf_notice\app\adminapi\controller\user\User@info');
    //添加用户列
    Route::post('user', 'addon\qf_notice\app\adminapi\controller\user\User@add');
    //编辑用户列
    Route::put('user/:id', 'addon\qf_notice\app\adminapi\controller\user\User@edit');
    //删除用户列
    Route::delete('user/:id', 'addon\qf_notice\app\adminapi\controller\user\User@del');
    Route::get('user_cat_all','addon\qf_notice\app\adminapi\controller\user\User@getUserCatAll');
    Route::post('deluserselect', 'addon\qf_notice\app\adminapi\controller\user\User@delselect');
    Route::post('clearuser', 'addon\qf_notice\app\adminapi\controller\user\User@clearUser');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- qfnotice_user

// USER_CODE_BEGIN -- qfnotice_category

Route::group('qf_notice', function () {

    //应用分类列表
    Route::get('category', 'addon\qf_notice\app\adminapi\controller\category\Category@lists');
    //应用分类详情
    Route::get('category/:id', 'addon\qf_notice\app\adminapi\controller\category\Category@info');
    //添加应用分类
    Route::post('category', 'addon\qf_notice\app\adminapi\controller\category\Category@add');
    //编辑应用分类
    Route::put('category/:id', 'addon\qf_notice\app\adminapi\controller\category\Category@edit');
    //删除应用分类
    Route::delete('category/:id', 'addon\qf_notice\app\adminapi\controller\category\Category@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- qfnotice_category
