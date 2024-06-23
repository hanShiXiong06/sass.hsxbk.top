<?php
declare (strict_types=1);

namespace addon\shop\app\listener\order;

use addon\shop\app\dict\order\OrderDict;
use addon\shop\app\dict\order\OrderLogDict;
use addon\shop\app\model\order\Order;
use addon\shop\app\model\order\OrderGoods;
use addon\shop\app\service\core\order\CoreOrderConfigService;
use addon\shop\app\service\core\order\CoreOrderFinishService;
use addon\shop\app\service\core\order\CoreOrderLogService;
use app\service\core\member\CoreMemberService;
use think\facade\Log;

class AfterShopOrderEditPrice
{

    public function handle($data)
    {
        Log::write('订单AfterShopOrderEditPrice' . json_encode($data));
        try {
            $order_data = $data['order_data'];
            //日志
            $main_type = $data['main_type'] ?? OrderLogDict::SYSTEM;
            $main_id = $data['main_id'] ?? 0;
            (new CoreOrderLogService())->add([
                'order_id' => $order_data['order_id'],
                'status' => OrderDict::WAIT_PAY,
                'main_type' => $main_type,
                'main_id' => $main_id,
                'type' => OrderDict::ORDER_EDIT_PRICE_ACTION,
                'content' => ''
            ]);

            //todo  发送消息提醒.....
        } catch ( \Exception $e ) {
            Log::write('订单AfterShopOrderEditPrice失败' . $e->getMessage() . $e->getFile() . $e->getLine());
        }
    }
}
