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
 * 自定义页面控制器
 */
Route::group('diy', function() {

    /***************************************************** 自定义页面管理 ****************************************************/

    // 自定义页面分页列表
    Route::get('diy', 'diy.Diy/lists');

    // 自定义页面分页列表，轮播搜索组件用
    Route::get('carousel_search', 'diy.Diy/getPageByCarouselSearch');

    // 添加自定义页面
    Route::post('diy', 'diy.Diy/add');

    // 编辑自定义页面
    Route::put('diy/:id', 'diy.Diy/edit');

    // 自定义页面详情
    Route::get('diy/:id', 'diy.Diy/info');

    // 删除自定义页面
    Route::delete('diy/:id', 'diy.Diy/del');

    Route::get('list', 'diy.Diy/getList');

    // 页面装修列表
    Route::get('decorate', 'diy.Diy/getDecoratePage');

    // 切换模板
    Route::put('change', 'diy.Diy/changeTemplate');

    // 页面初始化数据
    Route::get('init', 'diy.Diy/getPageInit');

    // 获取自定义链接列表
    Route::get('link', 'diy.Diy/getLink');

    // 设为使用
    Route::put('use/:id', 'diy.Diy/setUse');

    // 获取页面模板
    Route::get('template', 'diy.Diy/getTemplate');

    // 获取模板页面列表
    Route::get('template/pages', 'diy.Diy/getTemplatePages');

    // 自定义路由列表
    Route::get('route', 'diy.DiyRoute/lists');

    // 获取路由列表（存在的应用插件列表）
    Route::get('route/apps', 'diy.DiyRoute/getApps');

    // 获取自定义路由分享内容
    Route::get('route/info', 'diy.DiyRoute/getInfoByName');

    // 编辑自定义路由分享内容
    Route::put('route/share', 'diy.DiyRoute/modifyShare');

    // 编辑自定义页面分享内容
    Route::put('diy/share', 'diy.Diy/modifyShare');

    // 获取模板页面（存在的应用插件列表）
    Route::get('apps', 'diy.Diy/getApps');

    // 复制模版
    Route::post('copy', 'diy.Diy/copy');

    /***************************************************** 配置相关 *****************************************************/

    // 底部导航列表
    Route::get('bottom', 'diy.Config/getBottomList');

    // 底部导航配置
    Route::get('bottom/config', 'diy.Config/getBottomConfig');

    // 设置底部导航
    Route::post('bottom', 'diy.Config/setBottomConfig');


})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
