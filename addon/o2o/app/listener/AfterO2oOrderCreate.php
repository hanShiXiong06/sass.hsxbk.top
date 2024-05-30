<?php
declare (strict_types = 1);

namespace addon\o2o\app\listener;

use addon\o2o\app\dict\order\OrderDict;
use addon\o2o\app\dict\order\OrderLogDict;
use addon\o2o\app\job\OrderClose;
use addon\o2o\app\job\OrderPayRemind;
use addon\o2o\app\service\core\CoreGoodsSaleNumService;
use addon\o2o\app\service\core\CoreOrderConfigService;
use addon\o2o\app\service\core\CoreOrderLogService;
use core\exception\CommonException;
use think\facade\Db;
use think\facade\Log;

class AfterO2oOrderCreate
{

    public function handle($data)
    {
        $basic = $data['basic'] ?? [];
        $order_data = $data['order_data'] ?? [];
        $order_goods_data = $data['order_goods_data'] ?? [];
        $site_id = $order_data['site_id'];

        //累增销量
        $core_goods_sale_num_service = new CoreGoodsSaleNumService();
        foreach($order_goods_data as $v){

            //商品累计销量
            $core_goods_sale_num_service->inc([
                'num' => $v['num'],
                'goods_id' => $v['goods_id'],
                'sku_id' => $v['item_id']
            ]);
        }


        //发布日志
        $main_type = $data['main_type'] ?? 'member';
        $main_id = $data['main_id'] ?? $order_data['member_id'];
        (new CoreOrderLogService())->addLog($site_id, $order_data['order_id'], OrderLogDict::ORDER_CREATE,$main_type, $main_id, OrderDict::getStatus(OrderDict::WAIT_PAY));

        //消息发送

        //创建定时关闭任务
        $core_order_config_service = new CoreOrderConfigService();
        $order_config = $core_order_config_service->getConfig($site_id)['order_close'] ?? [];
        if($order_config && $order_config['is_close'] == 1){
            if($order_config['close_length'] > 0){
                OrderClose::dispatch(['order_id' => $order_data['order_id'] ], secs: $order_config['close_length'] * 60);
            }
        }

        // 订单催付通知
        OrderPayRemind::dispatch(['site_id' => $site_id, 'order_id' => $order_data['order_id'] ], secs:1800);
    }
}
