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
 * 考试系统
 */
Route::group('hsx_exam', function() {
    /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\hsx_exam\app\api\controller\hello_world\Index@index');

    /***************************************************** hello world ****************************************************/
    Route::get('questions', 'addon\hsx_exam\app\api\controller\questions\Questions@getList');

    Route::get('questions/:id', 'addon\hsx_exam\app\api\controller\questions\Questions@getInfo');

    Route::get('questions/category', 'addon\hsx_exam\app\api\controller\questions\Questions@category');
    
    Route::get('questions/type', 'addon\hsx_exam\app\api\controller\questions\Questions@type');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('hsx_exam', function() {

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

