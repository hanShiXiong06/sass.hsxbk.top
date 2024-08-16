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

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;
use think\facade\Route;


/**
 * 订单相关路由
 */
Route::group('recharge', function() {

    /***************************************************** 充值订单 *************************************************/
    //订单列表

    Route::get('order', 'addon\recharge\app\adminapi\controller\Order@lists');

    //订单详情
    Route::get('order/:order_id', 'addon\recharge\app\adminapi\controller\Order@detail');

    //订单状态
    Route::get('order/status', 'addon\recharge\app\adminapi\controller\Order@status');

    //订单统计
    Route::get('order/stat', 'addon\recharge\app\adminapi\controller\Order@stat');

    // 订单发起退款
    Route::put('refund/:order_id', 'addon\recharge\app\adminapi\controller\Order@refund');

    //退款订单列表
    Route::get('refund', 'addon\recharge\app\adminapi\controller\Order@refundLists');

    //退款订单详情
    Route::get('refund/:refund_id', 'addon\recharge\app\adminapi\controller\Order@refundDetail');

    //退款订单状态
    Route::get('refund/status', 'addon\recharge\app\adminapi\controller\Order@refundStatus');

    //退款订单统计
    Route::get('refund/stat', 'addon\recharge\app\adminapi\controller\Order@refundStat');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
