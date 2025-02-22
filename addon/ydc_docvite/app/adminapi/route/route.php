<?php
/*
 *
 * // +----------------------------------------------------------------------
 * // | 易东云文档发布应用
 * // +----------------------------------------------------------------------
 * // | 官方网址：https://web.ydc.show
 * // +----------------------------------------------------------------------
 * // | 易东云团队 版权所有 开源版本可自由商用
 * // +----------------------------------------------------------------------
 * // | Author: YiDong Cloud Team
 * // +----------------------------------------------------------------------
 */

use think\facade\Route;

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;

/**
 * 易东云文档发布
 */
Route::group(
    'ydc_docvite',
    function() {
        
        /***************************************************** 配置-config ****************************************************/
        Route::get('config/index', 'addon\ydc_docvite\app\adminapi\controller\Config@index');// 列表.
        Route::post('config/edit', 'addon\ydc_docvite\app\adminapi\controller\Config@edit');// 编辑.
        
        /***************************************************** 仓库-vault ****************************************************/
        Route::get('vault/index', 'addon\ydc_docvite\app\adminapi\controller\Vault@index');// 仓库列表.
        Route::post('vault/selectTree', 'addon\ydc_docvite\app\adminapi\controller\Vault@selectTree');// 仓库和目录选择树.
        Route::get('vault/select', 'addon\ydc_docvite\app\adminapi\controller\Vault@select');// 仓库选择.
        Route::post('vault/add', 'addon\ydc_docvite\app\adminapi\controller\Vault@add');// 添加仓库.
        Route::post('vault/edit', 'addon\ydc_docvite\app\adminapi\controller\Vault@edit');// 编辑仓库.
        Route::post('vault/del', 'addon\ydc_docvite\app\adminapi\controller\Vault@del');// 删除仓库.
        Route::post('vault/publish', 'addon\ydc_docvite\app\adminapi\controller\Vault@publish');// 仓库文档发布.
        Route::post('vault/clearPublish', 'addon\ydc_docvite\app\adminapi\controller\Vault@clearPublish');// 仓库文档清空发布.
        Route::get('vault/pullPublishStatus', 'addon\ydc_docvite\app\adminapi\controller\Vault@pullPublishStatus');// 仓库文档发布状态查询.
        
        /***************************************************** 目录-path ****************************************************/
        Route::get('path/index', 'addon\ydc_docvite\app\adminapi\controller\Path@index');// 目录列表.
        Route::post('path/selectTree', 'addon\ydc_docvite\app\adminapi\controller\Path@selectTree');// 目录选择树.
        Route::post('path/add', 'addon\ydc_docvite\app\adminapi\controller\Path@add');// 添加目录.
        Route::post('path/edit', 'addon\ydc_docvite\app\adminapi\controller\Path@edit');// 编辑目录.
        Route::post('path/del', 'addon\ydc_docvite\app\adminapi\controller\Path@del');// 删除目录.
        // Route::get('path/publish', 'addon\ydc_docvite\app\adminapi\controller\Path@publish');// 目录文档发布.
        
        /***************************************************** 文档-markdown ****************************************************/
        Route::get('markdown/index', 'addon\ydc_docvite\app\adminapi\controller\Markdown@index');// 文档列表.
        Route::post('markdown/add', 'addon\ydc_docvite\app\adminapi\controller\Markdown@add');// 新建.
        Route::post('markdown/edit', 'addon\ydc_docvite\app\adminapi\controller\Markdown@edit');// 编辑文档.
        Route::post('markdown/del', 'addon\ydc_docvite\app\adminapi\controller\Markdown@del');// 删除文档.
        Route::get('markdown/detail', 'addon\ydc_docvite\app\adminapi\controller\Markdown@detail');// 文档详情.
        Route::get('markdown/publish', 'addon\ydc_docvite\app\adminapi\controller\Markdown@publish');// 单个文档发布.
        
    }
)
     ->middleware(
         [
             AdminCheckToken::class,
             AdminCheckRole::class,
             AdminLog::class,
         ]
     );