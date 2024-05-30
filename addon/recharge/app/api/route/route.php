<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

use app\api\middleware\ApiChannel;
use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use think\facade\Route;


/**
 * 会员个人信息管理
 */
Route::group('recharge', function() {

    /***************************************************** 充值订单相关 *************************************************/

    //充值订单创建
    Route::post('recharge', 'addon\recharge\app\api\controller\Recharge@create');

    // 充值订单列表
    Route::get('recharge', 'addon\recharge\app\api\controller\Recharge@lists');

    // 充值订单详情
    Route::get('recharge/:order_id', 'addon\recharge\app\api\controller\Recharge@detail');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true)
    ->middleware(ApiLog::class);
