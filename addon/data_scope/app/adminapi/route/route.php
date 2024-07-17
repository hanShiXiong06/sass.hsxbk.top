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
 * 组织结构数据权限
 */
Route::group('data_scope', function () {

    //部门列表
    Route::get('sysdept', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@lists');
    //部门详情
    Route::get('sysdept/:id', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@info');
    //添加部门
    Route::post('sysdept', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@add');
    //编辑部门
    Route::put('sysdept/:id', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@edit');
    //删除部门
    Route::delete('sysdept/:id', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@del');

    Route::get('sysdept/bind/:id', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@getBindUser');
    Route::post('sysdept/bind', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@bindUser');
    Route::get('sysdept/sync_role', 'addon\data_scope\app\adminapi\controller\data_scope\SysDept@syncRole');


    Route::get('sys_dept_all','addon\data_scope\app\adminapi\controller\data_scope\SysDept@getSysDeptAll');

    //保存规则信息
    Route::post('scope/info', 'addon\data_scope\app\adminapi\controller\data_scope\RoleDept@saveScopeInfo');
    //获取规则信息
    Route::get('scope/info/:id', 'addon\data_scope\app\adminapi\controller\data_scope\RoleDept@getScopeInfo');

    //获取规则类型
    Route::get('scope/rule', 'addon\data_scope\app\adminapi\controller\data_scope\RoleDept@getRuleList');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);

// USER_CODE_BEGIN -- data_scope_sys_dept

// USER_CODE_END -- data_scope_sys_dept
