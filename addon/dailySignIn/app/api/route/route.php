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
 * 每日签到
 */
Route::group('dailySignIn', function() {
    Route::get('hello_world', 'addon\dailySignIn\app\api\controller\signIn\SignIn@isSignInOpen');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('dailySignIn', function() {
    Route::get('getSignInList', 'addon\dailySignIn\app\api\controller\signIn\SignInMember@getSignInList');
    Route::get('isSignInOpen', 'addon\dailySignIn\app\api\controller\signIn\SignInMember@isSignInOpen');
    Route::get('rewardRules', 'addon\dailySignIn\app\api\controller\signIn\SignInMember@rewardRules');
    Route::get('checkSignInStatus', 'addon\dailySignIn\app\api\controller\signIn\SignInMember@checkSignInStatus');
    Route::post('signIn', 'addon\dailySignIn\app\api\controller\signIn\SignInMember@signIn');
    Route::get('sum','addon\dailySignIn\app\api\controller\signIn\SignInMember@sum');
    Route::post('supplement','addon\dailySignIn\app\api\controller\signIn\SignInMember@supplement');
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

