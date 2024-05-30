<?php

namespace addon\tk_yht\app\adminapi\controller\config;

use addon\shop\app\service\admin\delivery\DeliverySearchConfigService;
use core\base\BaseAdminController;
use think\Exception;

class SearchConfig extends BaseAdminController
{
    public function setConfig()
    {
        $data = $this->request->params([
            ["interface_type", 1],
            ["kdniao_id", ""],
            ["kdniao_app_key", ""],
            ["kdniao_is_pay", 1],
            ["kd100_app_key", ""],
            ["kd100_customer", ""],
            ["yht_access_key", ""],
            ["yht_secret_key", ""],
        ]);
        (new DeliverySearchConfigService())->setConfig($data);
        $todelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' .DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' .DIRECTORY_SEPARATOR . 'delivery' .DIRECTORY_SEPARATOR . 'delivery_search' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';

        if (is_dir(root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop')) {
            if (!is_file($todelivery)) {
                //增加一号通物流查询驱动
                $fromdelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_yht' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';
                //优化物流查询驱动选择
                $fromOrder = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_yht' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'CoreOrderService.php';
                $todelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' .DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' .DIRECTORY_SEPARATOR . 'delivery' .DIRECTORY_SEPARATOR . 'delivery_search' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';
                $toOrder = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' .DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' .DIRECTORY_SEPARATOR . 'order' . DIRECTORY_SEPARATOR . 'CoreOrderService.php';
                copy($fromdelivery, $todelivery);
                copy($fromOrder, $toOrder);
            }
        }else{
            throw new Exception('niucloud-shop商城应用文件不存在');
        }
        return success('SUCCESS');
    }
    /**
     * 获取配置
     * @return \think\Response
     */
    public function getConfig()
    {
        if (!is_dir(root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop')) {
            throw new Exception('niucloud-shop商城应用文件不存在');
        }
        return success((new DeliverySearchConfigService())->getConfig());
    }
}
