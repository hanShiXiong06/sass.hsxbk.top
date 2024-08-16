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
 * 考试系统
 */
Route::group('hsx_exam', function () {

     /***************************************************** hello world ****************************************************/
    Route::get('hello_world', 'addon\hsx_exam\app\adminapi\controller\hello_world\Index@index');




    //试题分页列表
    Route::get('questions', 'addon\hsx_exam\app\adminapi\controller\questions\Questions@pages');

    //详情
    Route::get('questions/:id', 'addon\hsx_exam\app\adminapi\controller\questions\Questions@info');

    //添加试题
    Route::post('questions', 'addon\hsx_exam\app\adminapi\controller\questions\Questions@add');

    // 试题商品
    Route::put('questions/:id', 'addon\hsx_exam\app\adminapi\controller\questions\Questions@edit');

    // 删除试题
    Route::delete('questions/:id', 'addon\hsx_exam\app\adminapi\controller\questions\Questions@del');




    //商品分类列表树结构
    Route::get('questions/tree', 'addon\hsx_exam\app\adminapi\controller\questions\Category@tree');

    Route::get('questions/category', 'addon\hsx_exam\app\adminapi\controller\questions\Category@lists');

    //商品分类详情
    Route::get('questions/category/:id', 'addon\hsx_exam\app\adminapi\controller\questions\Category@info');

    //添加商品分类
    Route::post('questions/category', 'addon\hsx_exam\app\adminapi\controller\questions\Category@add');

    //编辑商品分类
    Route::put('questions/category/:id', 'addon\hsx_exam\app\adminapi\controller\questions\Category@edit');

    //删除商品分类
    Route::delete('questions/category/:id', 'addon\hsx_exam\app\adminapi\controller\questions\Category@del');

    //编辑商品分类
    Route::post('questions/category/update', 'addon\hsx_exam\app\adminapi\controller\questions\Category@editCategory');


    //获取试题类型
    Route::get('questions/type', 'addon\hsx_exam\app\adminapi\controller\questions\QuestionType@pages');

    

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);