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
 * 种草社区
 */
Route::group('sow_community', function() {
    // ************************************** 种草社区 **************************************
    // ************************************** 社区分类 **************************************

    // 社区分类分页列表
    Route::get('category', 'addon\sow_community\app\adminapi\controller\category\Category@pages');

    // 社区分类列表
    Route::get('category/list', 'addon\sow_community\app\adminapi\controller\category\Category@lists');

    // 社区分类详情
    Route::get('category/:id', 'addon\sow_community\app\adminapi\controller\category\Category@info');

    // 添加社区分类
    Route::post('category', 'addon\sow_community\app\adminapi\controller\category\Category@add');

    // 编辑社区分类
    Route::put('category/:id', 'addon\sow_community\app\adminapi\controller\category\Category@edit');

    // 删除社区分类
    Route::delete('category/:id', 'addon\sow_community\app\adminapi\controller\category\Category@del');

    // 修改 社区分类排序号
    Route::put('category/sort', 'addon\sow_community\app\adminapi\controller\category\Category@modifySort');

    // 修改 社区分类状态
    Route::put('category/status', 'addon\sow_community\app\adminapi\controller\category\Category@modifyStatus');

    // ************************************** 社区话题 **************************************

    // 社区话题分页列表
    Route::get('topic', 'addon\sow_community\app\adminapi\controller\topic\Topic@pages');

    // 社区话题列表
    Route::get('topic/list', 'addon\sow_community\app\adminapi\controller\topic\Topic@lists');

    // 社区话题详情
    Route::get('topic/:id', 'addon\sow_community\app\adminapi\controller\topic\Topic@info');

    // 添加社区话题
    Route::post('topic', 'addon\sow_community\app\adminapi\controller\topic\Topic@add');

    // 编辑社区话题
    Route::put('topic/:id', 'addon\sow_community\app\adminapi\controller\topic\Topic@edit');

    // 删除社区话题
    Route::delete('topic/:id', 'addon\sow_community\app\adminapi\controller\topic\Topic@del');

    // 修改 社区话题排序号
    Route::put('topic/sort', 'addon\sow_community\app\adminapi\controller\topic\Topic@modifySort');

    // 修改 社区话题状态
    Route::put('topic/status', 'addon\sow_community\app\adminapi\controller\topic\Topic@modifyStatus');

    // 修改 社区话题推荐状态
    Route::put('topic/recommend', 'addon\sow_community\app\adminapi\controller\topic\Topic@modifyRecommend');

    // 获取话题内容
    Route::get('topic/content', 'addon\sow_community\app\adminapi\controller\topic\Topic@getContent');

    // ************************************** 社区内容 **************************************

    // 社区内容分页列表
    Route::get('content', 'addon\sow_community\app\adminapi\controller\content\Content@pages');

    // 社区内容详情
    Route::get('content/:id', 'addon\sow_community\app\adminapi\controller\content\Content@info');

    // 社区内容添加
    Route::post('content', 'addon\sow_community\app\adminapi\controller\content\Content@add');

    // 社区内容编辑
    Route::put('content/:id', 'addon\sow_community\app\adminapi\controller\content\Content@edit');

    // 社区内容删除
    Route::put('content/delete', 'addon\sow_community\app\adminapi\controller\content\Content@del');

    // 社区内容审核
    Route::put('content/audit/:id', 'addon\sow_community\app\adminapi\controller\content\Content@audit');

    // 社区内容强制下架
    Route::put('content/off', 'addon\sow_community\app\adminapi\controller\content\Content@statusOff');

    // 社区内容状态列表
    Route::get('content/status', 'addon\sow_community\app\adminapi\controller\content\Content@statusList');

    // 社区宝贝库选择列表
    Route::get('content/treasure/select', 'addon\sow_community\app\adminapi\controller\content\Content@treasureSelectList');

    // ************************************** 社区评论 **************************************

    // 社区评论分页列表
    Route::get('comment', 'addon\sow_community\app\adminapi\controller\comment\Comment@pages');

    // 社区评论详情
    Route::get('comment/:id', 'addon\sow_community\app\adminapi\controller\comment\Comment@info');

    // 社区评论添加
    Route::post('comment', 'addon\sow_community\app\adminapi\controller\comment\Comment@add');

    // 社区评论删除
    Route::delete('comment/:id', 'addon\sow_community\app\adminapi\controller\comment\Comment@del');

    // 社区评论审核
    Route::put('comment/audit/:id', 'addon\sow_community\app\adminapi\controller\comment\Comment@audit');

    // 社区评论状态列表
    Route::get('comment/status', 'addon\sow_community\app\adminapi\controller\comment\Comment@statusList');

    // ************************************** 社区配置 **************************************

    //获取社区配置
    Route::get('config', 'addon\sow_community\app\adminapi\controller\config\Config@getCommunityConfig');

    //社区配置
    Route::post('config', 'addon\sow_community\app\adminapi\controller\config\Config@setCommunityConfig');

    // ************************************** 社区宝贝库 **************************************

    // 社区宝贝库分页列表
    Route::get('treasure', 'addon\sow_community\app\adminapi\controller\treasure\Treasure@pages');

    // 修改宝贝是否参与种草
    Route::put('treasure/join', 'addon\sow_community\app\adminapi\controller\treasure\Treasure@editJoin');

    // 宝贝类型列表
    Route::get('treasure/type', 'addon\sow_community\app\adminapi\controller\treasure\Treasure@typeList');

    // 社区宝贝库选择宝贝列表
    Route::get('treasure/select', 'addon\sow_community\app\adminapi\controller\treasure\Treasure@selectList');

    // ************************************** 社区敏感词 **************************************

    //获取社区敏感词
    Route::get('sensitive', 'addon\sow_community\app\adminapi\controller\sensitive\Sensitive@getSensitive');

    //社区敏感词配置
    Route::post('sensitive', 'addon\sow_community\app\adminapi\controller\sensitive\Sensitive@setSensitive');

})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
