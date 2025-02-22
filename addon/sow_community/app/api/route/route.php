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

use app\api\middleware\ApiChannel;
use app\api\middleware\ApiCheckToken;
use app\api\middleware\ApiLog;
use think\facade\Route;


/**
 * 种草社区
 */
Route::group('sow_community', function() {

    // ************************************** 社区内容 **************************************

    // 社区内容分页列表
    Route::get('content', 'addon\sow_community\app\api\controller\content\Content@pages');

    // 社区内容详情
    Route::get('content/:id', 'addon\sow_community\app\api\controller\content\Content@detail');

    // 社区分类列表
    Route::get('category/list', 'addon\sow_community\app\api\controller\content\Category@lists');

    // 社区内容浏览
    Route::put('content/browse/:id', 'addon\sow_community\app\api\controller\content\Content@browse');

    // 社区内容分享
    Route::put('content/share/:id', 'addon\sow_community\app\api\controller\content\Content@share');

    // 社区宝贝内容分页列表
    Route::get('treasure/content', 'addon\sow_community\app\api\controller\content\Content@treasureContentPage');

    // ************************************** 社区评论 **************************************

    // 获取评论列表
    Route::get('comment', 'addon\sow_community\app\api\controller\comment\Comment@pages');

})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class)//false表示不验证登录
    ->middleware(ApiLog::class);


Route::group('sow_community', function() {

    // ************************************** 社区内容 **************************************

    //获取赞过的作品
    Route::get('content/like/list', 'addon\sow_community\app\api\controller\content\Content@likeLists');

    //获取收藏作品列表
    Route::get('content/collect/list', 'addon\sow_community\app\api\controller\content\Content@collectLists');

    // 社区内容添加
    Route::post('content', 'addon\sow_community\app\api\controller\content\Content@add');

    // 社区内容编辑
    Route::put('content/:id', 'addon\sow_community\app\api\controller\content\Content@edit');

    // 社区内容删除
    Route::delete('content/:id', 'addon\sow_community\app\api\controller\content\Content@del');

    // 社区话题列表
    Route::get('topic/list', 'addon\sow_community\app\api\controller\content\Topic@lists');

    // 社区宝贝库分页列表
    Route::get('treasure', 'addon\sow_community\app\api\controller\content\Treasure@pages');

    // 社区宝贝库类型列表
    Route::get('treasure/type', 'addon\sow_community\app\api\controller\content\Treasure@typeList');

    // 社区内容点赞
    Route::put('content/like/:id', 'addon\sow_community\app\api\controller\content\Content@like');

    // 社区内容收藏
    Route::put('content/collect/:id', 'addon\sow_community\app\api\controller\content\Content@collect');

    // ************************************** 关注/粉丝用户 **************************************

    //获取关注用户分页列表
    Route::get('follow/member', 'addon\sow_community\app\api\controller\follow\Follow@pages');

    //获取粉丝用户分页列表
    Route::get('follow/fans', 'addon\sow_community\app\api\controller\follow\Follow@fansPages');

    //关注/取消关注用户
    Route::post('follow', 'addon\sow_community\app\api\controller\follow\Follow@follow');

    // ************************************** 用户信息 **************************************

    //获取用户信息
    Route::get('member', 'addon\sow_community\app\api\controller\member\Member@info');

    //获取推荐用户列表
    Route::get('member/recommend', 'addon\sow_community\app\api\controller\member\Member@recommendLists');

    // ************************************** 社区评论 **************************************

    // 社区评论添加
    Route::post('comment', 'addon\sow_community\app\api\controller\comment\Comment@add');

    // 社区评论删除
    Route::delete('comment/:id', 'addon\sow_community\app\api\controller\comment\Comment@del');

    // 社区评论点赞
    Route::put('comment/like/:id', 'addon\sow_community\app\api\controller\comment\Comment@like');


})->middleware(ApiChannel::class)
    ->middleware(ApiCheckToken::class, true)//表示验证登录
    ->middleware(ApiLog::class);
