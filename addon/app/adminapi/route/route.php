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
 * 多域名授权
 */
Route::group('hlwoauth', function () {

     /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\hlwoauth\app\adminapi\controller\hello_world\Index@index');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_BEGIN -- hlwoauth_domain

Route::group('hlwoauth', function () {

    //域名授权列表
    Route::get('domain', 'addon\hlwoauth\app\adminapi\controller\hlwoauth\Domain@lists');
    //域名授权详情
    Route::get('domain/:id', 'addon\hlwoauth\app\adminapi\controller\hlwoauth\Domain@info');
    //添加域名授权
    Route::post('domain', 'addon\hlwoauth\app\adminapi\controller\hlwoauth\Domain@add');
    //编辑域名授权
    Route::put('domain/:id', 'addon\hlwoauth\app\adminapi\controller\hlwoauth\Domain@edit');
    //删除域名授权
    Route::delete('domain/:id', 'addon\hlwoauth\app\adminapi\controller\hlwoauth\Domain@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- hlwoauth_domain
