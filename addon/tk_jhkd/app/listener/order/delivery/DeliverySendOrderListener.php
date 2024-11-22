<?php


namespace addon\tk_jhkd\app\listener\order\delivery;

use addon\tk_jhkd\app\service\core\delivery\DeliveryLoader;
use app\service\core\sys\CoreConfigService;
use Exception;
/**
 * 提交订单事件
 */
class DeliverySendOrderListener
{
    public function handle($data)
    {
        return (new DeliveryLoader($this->getConfig($data['site_id'])['delivery_type'], $this->getConfig($data['site_id'])))->sendOrder($data['data']);
    }
    public function getConfig($site_id)
    {
        $info = (new CoreConfigService())->getConfig($site_id, 'JHKD_DELIVERY')['value'] ?? [];
        if (empty($info)) throw new Exception('DELIVERY_NOT_OPEN');
        $delivery_type = $info['default'] ?? '';
        $config = array(
            'delivery_type' => $delivery_type,
        );
        $res= array_merge($config, $info[$delivery_type] ?? []);
         if(!$res) throw new Exception('DELIVERY_NOT_OPEN');
        return $res;
    }
}

