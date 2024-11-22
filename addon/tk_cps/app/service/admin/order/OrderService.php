<?php

namespace addon\tk_cps\app\service\admin\order;

use addon\tk_cps\app\model\actitem\ActItem;

use addon\tk_cps\app\service\core\CloudService as CommonAuth;
use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\ConfigService;
use addon\tk_cps\app\service\core\platform\PlatformLoader;
use core\base\BaseAdminService;
use core\exception\CommonException;


/**
 * 订单服务层
 */
class OrderService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
//        $this->apiKey = (new ConfigService())->getApiKey();
//        $this->mapiKey = (new ConfigService())->getMapiKey();
//        $this->siteKey = (new ConfigService())->getSiteKey();
//        $this->secret = (new ConfigService())->getSecret();
        $this->commonService = new CommonService();

    }
    //聚推客--订单列表
    public function jtkOrderList($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 0);
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

    //蚂蚁星球--充值订单
    public function myxqRechargeOrder($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='recharge';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

    //蚂蚁星球--电影票订单
    public function myxqMovieOrder($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='movie';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

    //蚂蚁星球--点餐订单
    public function myxqDcOrder($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='dc';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

    //蚂蚁星球--点餐订单详情
    public function myxqDcOrderDetail($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='dc';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;

    }

    //蚂蚁星球--周边订单
    public function myxqNearOrder($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='near';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

    //蚂蚁星球--自营商品订单
    public function myxqShopOrder($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='shoop';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

    //蚂蚁星球--其他订单
    public function myxqOtherOrder($data)
    {
        $driverInfo = $this->commonService->getSiteDriver($this->site_id, 1);
        $data['order_type']='other';
        $list = (new PlatformLoader($driverInfo['driver'], $driverInfo['params']))->getOrderList($data);
        return $list;
    }

}
