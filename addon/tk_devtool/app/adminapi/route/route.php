<?php
require __DIR__ . '/database.php';
use think\facade\Route;
use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;


/**
* 路由（注意最好group路由名称与插件名称一致，防止路由冲突）
*/
Route::group("tk_devtool", function () {
    Route::get('ceshi', 'addon\tk_devtool\app\adminapi\controller\Addon@ceshi');
    Route::post('addonupload', 'addon\tk_devtool\app\adminapi\controller\Addon@addonUpload');
    Route::get('build/:key', 'addon\tk_devtool\app\adminapi\controller\Addon@build');
    Route::post('execute', 'addon\tk_devtool\app\adminapi\controller\Index@execute');
    Route::post('moveFile', 'addon\tk_devtool\app\adminapi\controller\Index@moveFile');
    Route::post('depend', 'addon\tk_devtool\app\adminapi\controller\Index@depend');
    Route::post('asyncadmin', 'addon\tk_devtool\app\adminapi\controller\Index@asyncAdmin');
    Route::get('asyncbuild', 'addon\tk_devtool\app\adminapi\controller\Index@asyncBuild');
    Route::get('checkbuild', 'addon\tk_devtool\app\adminapi\controller\Index@checkBuild');

    //git相关路由
    Route::get('getconfig', 'addon\tk_devtool\app\adminapi\controller\Index@getConfig');
    Route::get('getos', 'addon\tk_devtool\app\adminapi\controller\Index@getOs');
    Route::post('setconfig', 'addon\tk_devtool\app\adminapi\controller\Index@setConfig');
    Route::post('setgit', 'addon\tk_devtool\app\adminapi\controller\Index@setGit');
    Route::post('gitforce', 'addon\tk_devtool\app\adminapi\controller\Index@gitForce');
    Route::post('gitupdate', 'addon\tk_devtool\app\adminapi\controller\Index@gitUpdate');
    Route::post('updatesql', 'addon\tk_devtool\app\adminapi\controller\Index@updateSql');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
