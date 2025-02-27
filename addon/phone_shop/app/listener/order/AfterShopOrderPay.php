<?php
declare ( strict_types = 1 );

namespace addon\phone_shop\app\listener\order;

use addon\phone_shop\app\dict\goods\GoodsDict;
use addon\phone_shop\app\dict\order\OrderDeliveryDict;
use addon\phone_shop\app\dict\order\OrderDict;
use addon\phone_shop\app\dict\order\OrderLogDict;
use addon\phone_shop\app\model\goods\Goods;
use addon\phone_shop\app\model\order\OrderGoods;
use addon\phone_shop\app\service\admin\marketing\DiscountService;
use addon\phone_shop\app\service\core\CoreStatService;
use addon\phone_shop\app\service\core\order\CoreInvoiceService;
use addon\phone_shop\app\service\core\order\CoreOrderDeliveryService;
use addon\phone_shop\app\service\core\order\CoreOrderLogService;
use app\service\core\notice\NoticeService;
use app\service\core\printer\CorePrinterService;
use think\facade\Log;

class AfterShopOrderPay
{
    public function handle($data)
    {
        Log::write('订单AfterShopOrderPay' . json_encode($data));
        try {
            $order_data = $data[ 'order_data' ];
            //活动或会员购买赠送.....
            //发票改变状态........
            ( new CoreInvoiceService() )->open($order_data[ 'invoice_id' ]);
            //商城专用统计
            CoreStatService::addStat([ 'site_id' => $order_data[ 'site_id' ], 'sale_money' => $order_data[ 'order_money' ] ]);
            //日志
            $main_type = $data[ 'main_type' ] ?? OrderLogDict::MEMBER;
            $main_id = $data[ 'main_id' ] ?? $order_data[ 'member_id' ];
            ( new CoreOrderLogService() )->add([
                'order_id' => $order_data[ 'order_id' ],
                'status' => OrderDict::WAIT_DELIVERY,
                'main_type' => $main_type,
                'main_id' => $main_id,
                'type' => OrderDict::ORDER_PAY_ACTION,
                'content' => ''
            ]);
            //虚拟商品自动发货
            $order_goods_list = ( new OrderGoods() )->where([ 'order_id' => $data[ 'order_id' ] ])->select();
            if (!empty($order_goods_list)) {
                $goods_column = ( new Goods() )->where([ [ 'goods_id', 'in', array_column($order_goods_list->toArray(), 'goods_id') ] ])->column('*', 'goods_id');
                $virtual_order_goods_ids = [];
                foreach ($order_goods_list as $v) {
                    //根据商品配置判断下一步配送操作
                    $temp_goods_type = $v[ 'goods_type' ];
                    //读取虚拟商品配置
                    if ($temp_goods_type == GoodsDict::VIRTUAL) {
                        $temp_goods = $goods_column[ $v[ 'goods_id' ] ] ?? [];
                        if (empty($temp_goods)) continue;
                        //是否自动发货
                        if ($temp_goods[ 'virtual_auto_delivery' ] == 1) {
                            //调用订单项发货
                            $virtual_order_goods_ids[] = $v[ 'order_goods_id' ];
                        }
                    }
                }
                if ($virtual_order_goods_ids) {
                    $delivery_data = [];
                    $delivery_data[ 'main_type' ] = OrderLogDict::SYSTEM;
                    $delivery_data[ 'main_id' ] = 0;
                    $delivery_data[ 'order_id' ] = $order_data[ 'order_id' ];
                    $delivery_data[ 'delivery_type' ] = OrderDeliveryDict::VIRTUAL;
                    $delivery_data[ 'site_id' ] = $order_data[ 'site_id' ];
                    $delivery_data[ 'order_goods_ids' ] = $virtual_order_goods_ids;
                    ( new CoreOrderDeliveryService() )->delivery($delivery_data);
                }

            }

            //消息发送
            ( new NoticeService() )->send($order_data[ 'site_id' ], 'phone_shop_order_pay', [ 'order_id' => $order_data[ 'order_id' ] ]);

            ( new DiscountService() )->orderPayAfter($order_data);

            // 小票打印，订单付款之后
            return ( new CorePrinterService() )->printTicket([
                'site_id' => $order_data[ 'site_id' ],
                "type" => "shopGoodsOrder",
                "trigger" => "pay_after",
                'business' => [
                    'order_id' => $order_data[ 'order_id' ]
                ]
            ]);

        } catch (\Exception $e) {
            Log::write('订单AfterShopOrderPay失败' . $e->getMessage() . $e->getFile() . $e->getLine());
        }
    }
}
