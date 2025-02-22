<?php
/*
 *
 * // +----------------------------------------------------------------------
 * // | 易东云文档发布应用
 * // +----------------------------------------------------------------------
 * // | 官方网址：https://web.ydc.show
 * // +----------------------------------------------------------------------
 * // | 易东云团队 版权所有 开源版本可自由商用
 * // +----------------------------------------------------------------------
 * // | Author: YiDong Cloud Team
 * // +----------------------------------------------------------------------
 */

use think\facade\Route;

use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use app\api\middleware\ApiChannel;

/**
 * 易东云文档发布
 */
Route::group('ydc_docvite', function() {
})
     ->middleware(ApiChannel::class)
     ->middleware(ApiCheckToken::class, FALSE) //false表示不验证登录
     ->middleware(ApiLog::class);

Route::group('ydc_docvite', function() {

})
     ->middleware(ApiChannel::class)
     ->middleware(ApiCheckToken::class, TRUE) //表示验证登录
     ->middleware(ApiLog::class);

