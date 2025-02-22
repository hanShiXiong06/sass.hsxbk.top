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
 * tk_yht
 */
Route::group('tk_yht', function () {
    /***************************************************** 短信配置 ****************************************************/
    //短信配置列表
    Route::get('sms', 'addon\tk_yht\app\adminapi\controller\config\SmsConfig@smsList');
    //短信配置详情
    Route::get('sms/:sms_type', 'addon\tk_yht\app\adminapi\controller\config\SmsConfig@smsConfig');
    //短信配置修改
    Route::put('sms/:sms_type', 'addon\tk_yht\app\adminapi\controller\config\SmsConfig@editSms');
    //增加/更新驱动
    Route::get('addfile', 'addon\tk_yht\app\adminapi\controller\config\CommonConfig@addFile');
    //通用配置详情
    Route::get('getcommonconfig', 'addon\tk_yht\app\adminapi\controller\config\CommonConfig@getConfig');
    //保存通用配置
    Route::post('setcommonconfig', 'addon\tk_yht\app\adminapi\controller\config\CommonConfig@setConfig');
    //采集产品
    Route::post('copygoods', 'addon\tk_yht\app\adminapi\controller\copy\Copy@copyGoods');
    //物流查询接口 设置
    Route::post('delivery/setconfig', 'addon\tk_yht\app\adminapi\controller\config\SearchConfig@setConfig');
    //物流跟踪接口 查询
    Route::get('delivery/getconfig', 'addon\tk_yht\app\adminapi\controller\config\SearchConfig@getConfig');
    //验证shop文件
    Route::get('checkshop', 'addon\tk_yht\app\adminapi\controller\config\CheckShop@checkShop');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);