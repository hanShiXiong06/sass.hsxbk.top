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
 * 多域名授权
 */
Route::group('hlwoauth', function() {
    /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\hlwoauth\app\api\controller\hello_world\Index@index');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('hlwoauth', function() {

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

