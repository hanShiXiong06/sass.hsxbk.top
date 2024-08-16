<?php
// +----------------------------------------------------------------------
// | cps联盟
// +----------------------------------------------------------------------
// | 官方网址：https://xuanloo.com
// +----------------------------------------------------------------------
// | 河南省炫洛网络科技有限公司
// +----------------------------------------------------------------------
// | Author: 小洛
// +----------------------------------------------------------------------

use app\api\middleware\ApiChannel;
use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use think\facade\Route;

/**
* 路由（注意最好group路由名称与插件名称一致，防止路由冲突）
*/
Route::group("cps", function () {
    Route::post('index', 'addon\cps\app\api\controller\Index@index');
})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class)//false表示不验证登录
    ->middleware(ApiLog::class);