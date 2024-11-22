<?php

namespace addon\tk_yht;

use addon\tk_yht\app\service\core\CloudService;

/**
 * 插件安装之后单独的插件方法
 */
class Addon
{
    /**
     * 插件安装执行
     */
    public function install()
    {
        if (is_dir(root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop')) {
            //增加一号通物流查询驱动
            $fromdelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_yht' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';
            $todelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'delivery_search' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';
            copy($fromdelivery, $todelivery);
            //优化物流查询驱动选择
            $fromOrder = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_yht' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'CoreOrderService.php';
            $toOrder = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'order' . DIRECTORY_SEPARATOR . 'CoreOrderService.php';
            copy($fromOrder, $toOrder);
        }
        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {
        return true;
    }

    /**
     * 插件升级执行
     */
    public function upgrade()
    {

        if (is_dir(root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop')) {
            //增加一号通物流查询驱动
            $fromdelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_yht' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';
            $todelivery = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'delivery_search' . DIRECTORY_SEPARATOR . 'YhtDeliverySearch.php';
            copy($fromdelivery, $todelivery);
            //优化物流查询驱动选择
            $fromOrder = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_yht' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'delivery' . DIRECTORY_SEPARATOR . 'CoreOrderService.php';
            $toOrder = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'shop' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'service' . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'order' . DIRECTORY_SEPARATOR . 'CoreOrderService.php';
            copy($fromOrder, $toOrder);
        }
        return true;
    }

}
