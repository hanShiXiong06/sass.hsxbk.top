<?php

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;
use think\facade\Route;

/**
 * 路由（注意最好group路由名称与插件名称一致，防止路由冲突）
 */
Route::group("tk_devtool", function () {
    //获取数据表列表
    Route::get('gettables', 'addon\tk_devtool\app\adminapi\controller\Database@getDatabaseTables');
    //数据表更改
    Route::post('updatetable', 'addon\tk_devtool\app\adminapi\controller\Database@updateTable');
    //删除数据表
    Route::post('deletetable', 'addon\tk_devtool\app\adminapi\controller\Database@deleteTable');
    //数据表详情
    Route::post('gettableinfo', 'addon\tk_devtool\app\adminapi\controller\Database@getTableInfo');
    //备份数据库
    Route::get('backupdatabase', 'addon\tk_devtool\app\adminapi\controller\Database@backupDatabase');
    //导出表
    Route::post('exporttable', 'addon\tk_devtool\app\adminapi\controller\Database@exportTable');
    //生成复制文本
    Route::post('exporttabletext', 'addon\tk_devtool\app\adminapi\controller\Database@exportTableText');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
