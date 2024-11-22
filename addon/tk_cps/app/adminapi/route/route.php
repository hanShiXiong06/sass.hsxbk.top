<?php
use think\facade\Route;

use app\adminapi\middleware\AdminCheckRole;
use app\adminapi\middleware\AdminCheckToken;
use app\adminapi\middleware\AdminLog;

/**
 * tk_cps
 */
Route::group('tk_cps', function () {
     /***************************************************** CPS联盟 ****************************************************/
    //Route::get('ceshi', 'addon\tk_cps\app\adminapi\controller\Ceshi@ceshi');
    //获取驱动列表
    Route::get('driver/list', 'addon\tk_cps\app\adminapi\controller\act\Act@getDrivers');
    //配置列表
    Route::get('platform/list', 'addon\tk_cps\app\adminapi\controller\config\Platform@platformList');
    //配置详情
    Route::get('platform/config/:type', 'addon\tk_cps\app\adminapi\controller\config\Platform@platformConfig');
    //配置修改
    Route::put('platform/config/:type', 'addon\tk_cps\app\adminapi\controller\config\Platform@editPlatform');
    //插件添加
    Route::get('addplugin', 'addon\tk_cps\app\adminapi\controller\config\Config@addPlugin');
    //小程序插件上传
    Route::post('upload', 'addon\tk_cps\app\adminapi\controller\config\Config@version');
    //装载uniapp
    Route::get('addfile', 'addon\tk_cps\app\adminapi\controller\config\Config@addFile');
    //还原uniapp
    Route::get('delfile', 'addon\tk_cps\app\adminapi\controller\config\Config@delFile');
    //下载代码
    Route::get('downcode', 'addon\tk_cps\app\adminapi\controller\config\Config@downCode');
    //配置获取
    Route::get('getconfig', 'addon\tk_cps\app\adminapi\controller\config\Config@getConfig');
    Route::post('setconfig', 'addon\tk_cps\app\adminapi\controller\config\Config@setConfig');
    //聚推客订单
    Route::get('getjtkorderlist', 'addon\tk_cps\app\adminapi\controller\order\JtkOrder@getOrderList');
    //聚推客订单品牌
    Route::get('getjtkorderbrand', 'addon\tk_cps\app\adminapi\controller\order\JtkOrder@getOrderBrand');
    //聚推客订单状态
    Route::get('getjtkorderstatus', 'addon\tk_cps\app\adminapi\controller\order\JtkOrder@getOrderStatus');
    //蚂蚁充值订单
    Route::get('myxqrechargeorder', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqRechargeOrder');
    //蚂蚁充值订单状态
    Route::get('getrechargeorderstatus', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@getRechargeOrderStatus');
    //蚂蚁电影订单
    Route::get('myxqmovieorder', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqMovieOrder');
    //蚂蚁电影订单状态
    Route::get('getmovieorderstatus', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@getMovieOrderStatus');
    //蚂蚁点餐订单
    Route::get('myxqdcorder', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqDcOrder');
    //蚂蚁点餐订单状态
    Route::get('getdcorderstatus', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@getDcOrderStatus');
    //蚂蚁点餐订单详情
    Route::get('myxqdcorderdetail', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqDcOrderDetail');
    //蚂蚁周边订单
    Route::get('myxqnearorder', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqNearOrder');
    //蚂蚁周边订单状态
    Route::get('getnearorderstatus', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@getNearOrderStatus');
    //蚂蚁自营订单
    Route::get('myxqshoporder', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqShopOrder');
    //蚂蚁自营订单状态
    Route::get('getshoporderstatus', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@getShopOrderStatus');
    //蚂蚁其他订单
    Route::get('myxqotherorder', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@myxqOtherOrder');
    //蚂蚁其他订单平台
    Route::get('getotherorderpf', 'addon\tk_cps\app\adminapi\controller\order\MyxqOrder@getOtherOrderPf');
    //获取页面域名
    Route::get('getwapdomain', 'addon\tk_cps\app\adminapi\controller\page\Page@wapDomain');
    //获取二维码
    Route::get('getpagecode/:type', 'addon\tk_cps\app\adminapi\controller\page\Page@pageCode');
    //获取霸王餐订单状态
    Route::get('bwc/getorderstatus', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@getOrderStatus');
    Route::get('getbwcconfig', 'addon\tk_cps\app\adminapi\controller\config\Config@getBwcConfig');
    Route::post('setbwcconfig', 'addon\tk_cps\app\adminapi\controller\config\Config@setBwcConfig');
   //手动同步活动订单
    Route::get('actorder/asyncorder','addon\tk_cps\app\adminapi\controller\actorder\Actorder@asyncOrder');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);

// USER_CODE_BEGIN -- cps_act

Route::group('tk_cps', function () {

    //CPS活动链接列表
    Route::get('act', 'addon\tk_cps\app\adminapi\controller\act\Act@lists');
    //CPS活动链接详情
    Route::get('act/:id', 'addon\tk_cps\app\adminapi\controller\act\Act@info');
    //保存素材
    Route::get('saveimg/:id', 'addon\tk_cps\app\adminapi\controller\act\Act@saveImg');
    //同步活动
    Route::get('asyncact', 'addon\tk_cps\app\adminapi\controller\act\Act@asyncAct');
    //同步系统推荐信息
    Route::get('getallitem', 'addon\tk_cps\app\adminapi\controller\act\Act@getAllItem');
    //CPS推广信息
    Route::get('shareinfo/:id', 'addon\tk_cps\app\adminapi\controller\act\Act@shareInfo');
    //添加CPS活动链接
    Route::post('act', 'addon\tk_cps\app\adminapi\controller\act\Act@add');
    //编辑CPS活动链接
    Route::put('act/:id', 'addon\tk_cps\app\adminapi\controller\act\Act@edit');
    //删除CPS活动链接
    Route::delete('act/:id', 'addon\tk_cps\app\adminapi\controller\act\Act@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- cps_act

// USER_CODE_BEGIN -- cps_act_item

Route::group('tk_cps', function () {

    //活动详情列表
    Route::get('actitem', 'addon\tk_cps\app\adminapi\controller\actitem\ActItem@lists');
    //活动详情详情
    Route::get('actitem/:id', 'addon\tk_cps\app\adminapi\controller\actitem\ActItem@info');
    //添加活动详情
    Route::post('actitem', 'addon\tk_cps\app\adminapi\controller\actitem\ActItem@add');
    //编辑活动详情
    Route::put('actitem/:id', 'addon\tk_cps\app\adminapi\controller\actitem\ActItem@edit');
    //删除活动详情
    Route::delete('actitem/:id', 'addon\tk_cps\app\adminapi\controller\actitem\ActItem@del');
    Route::post('delactitemselect', 'addon\tk_cps\app\adminapi\controller\actitem\ActItem@delselect');
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- cps_act_item

// USER_CODE_BEGIN -- cpsbwc_order

Route::group('tk_cps', function () {

    //霸王餐订单列表
    Route::get('bwcorder', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@lists');
    //霸王餐订单详情
    Route::get('bwcorder/:id', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@info');
    //添加霸王餐订单
    Route::post('bwcorder', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@add');
    //编辑霸王餐订单
    Route::put('bwcorder/:id', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@edit');
    //删除霸王餐订单
    Route::delete('bwcorder/:id', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- cpsbwc_order

// USER_CODE_BEGIN -- cpsbwc_order

Route::group('tk_cps', function () {

    //霸王餐订单列表
    Route::get('bwcorder', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@lists');
    //霸王餐订单详情
    Route::get('bwcorder/:id', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@info');
    //添加霸王餐订单
    Route::post('bwcorder', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@add');
    //编辑霸王餐订单
    Route::put('bwcorder/:id', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@edit');
    //删除霸王餐订单
    Route::delete('bwcorder/:id', 'addon\tk_cps\app\adminapi\controller\bwcorder\BwcOrder@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- cpsbwc_order

// USER_CODE_BEGIN -- cps_act_order

Route::group('tk_cps', function () {

    //CPS活动订单列表
    Route::get('actorder', 'addon\tk_cps\app\adminapi\controller\actorder\Actorder@lists');
    //CPS活动订单详情
    Route::get('actorder/:id', 'addon\tk_cps\app\adminapi\controller\actorder\Actorder@info');
    //添加CPS活动订单
    Route::post('actorder', 'addon\tk_cps\app\adminapi\controller\actorder\Actorder@add');
    //编辑CPS活动订单
    Route::put('actorder/:id', 'addon\tk_cps\app\adminapi\controller\actorder\Actorder@edit');
    //删除CPS活动订单
    Route::delete('actorder/:id', 'addon\tk_cps\app\adminapi\controller\actorder\Actorder@del');
    
})->middleware([
    AdminCheckToken::class,
    AdminCheckRole::class,
    AdminLog::class
]);
// USER_CODE_END -- cps_act_order
