<?php

namespace addon\tk_yht\app\upgrade\v128;


class Upgrade
{

    public function handle()
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
        //删除旧版驱动
        $to = root_path() . 'core' . DIRECTORY_SEPARATOR . 'sms' . DIRECTORY_SEPARATOR . 'Yht.php';
        if (file_exists($to)) {
            unlink($to);
        }
    }
}