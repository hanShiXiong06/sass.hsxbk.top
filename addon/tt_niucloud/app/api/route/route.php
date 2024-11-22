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
 * 官方拓展
 */
Route::group('tt_niucloud', function() {
    /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\tt_niucloud\app\api\controller\hello_world\Index@index');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, false) //false表示不验证登录
    ->middleware(ApiLog::class);



Route::group('tt_niucloud', function() {
	Route::get('member/parentMember', 'addon\tt_niucloud\app\api\controller\member\Infos@getParentMember');
	Route::get('member/teamMember', 'addon\tt_niucloud\app\api\controller\member\Member@getTeamMember');
	Route::get('member/poster', 'addon\tt_niucloud\app\api\controller\member\Member@getPoster');
    Route::get('member/wxInfo', 'addon\tt_niucloud\app\api\controller\member\Infos@getWxInfo');
    Route::put('member/wxInfo', 'addon\tt_niucloud\app\api\controller\member\Infos@editWxInfo');
	
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true) //表示验证登录
    ->middleware(ApiLog::class);

