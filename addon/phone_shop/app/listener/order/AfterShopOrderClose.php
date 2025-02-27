<?php
declare (strict_types=1);

namespace addon\phone_shop\app\listener\order;

use addon\phone_shop\app\dict\order\OrderDict;
use addon\phone_shop\app\model\goods\GoodsSku;
use addon\phone_shop\app\model\order\OrderDiscounts;
use addon\phone_shop\app\model\order\OrderGoods;
use addon\phone_shop\app\service\core\coupon\CoreCouponMemberService;
use addon\phone_shop\app\service\core\goods\CoreGoodsSaleNumService;
use addon\phone_shop\app\service\core\goods\CoreGoodsStockService;
use addon\phone_shop\app\service\core\order\CoreInvoiceService;
use addon\phone_shop\app\service\core\order\CoreOrderLogService;
use think\facade\Log;

/**
 * 订单关闭后操作
 */
class AfterShopOrderClose
{

    public function handle($data)
    {
        Log::write('订单AfterShopOrderClose' . json_encode($data));
        try {
            $order_data = $data['order_data'];

            //退还优惠项
            $order_discount_where = array(
                ['order_id', '=', $order_data['order_id']]
            );
            $order_discount = (new OrderDiscounts())->where($order_discount_where)->select();
            if (!$order_discount->isEmpty()) {
                foreach ($order_discount as $v) {
                    $item_discount_type = $v['discount_type'];
                    switch ($item_discount_type) {
                        case 'coupon'://优惠券
                            (new CoreCouponMemberService())->recover($v['discount_type_id']);
                            break;
//                    case 'point':
//
//                        break;
                    }
                }
            }
            $order_goods_where = array(
                ['order_id', '=', $order_data['order_id']]
            );
            $order_goods_data = (new OrderGoods())->where($order_goods_where)->select()->toArray();
            //返还商品库存
            $core_goods_stock_service = new CoreGoodsStockService();
            foreach ($order_goods_data as $v) {
                $core_goods_stock_service->inc([
                    'num' => $v['num'],
                    'goods_id' => $v['goods_id'],
                    'sku_id' => $v['sku_id']
                ]);
                 // 获取 当前的商品的 skuId 
                $skuId = $v['sku_id'];
                 // 将商品重新上架
                $sku = GoodsSku::find($skuId);
                Log::write('-------------------------sku_stock-----------------------------------------------------------------');
                 
                Log::write($sku->stock .'-------$num'. $v['num'] .'--------'.$sku->goods);
                Log::write('------------------------------------------------------------------------------------------');
                if ($sku && $sku->stock <= 0 || $sku->stock <= $v['num']  ) {
                    // 这里假设 GoodsSku 模型有一个关联到 Goods 模型的关联方法 `goods()`
                    $goods = $sku->goods;
                    if ($goods && $goods->status != '1') {
                        $goods->status = '1'; // 假设状态字段为 'status'，下架状态为 'unlisted'
                        $goods->save();
                    }
                }
            }
            // 将商品重新上架
            // $sku = GoodsSku::find($skuId);
            // Log::write('------------------------------------------------------------------------------------------');
            //  Log::write($sku);
            //  Log::write('------------------------------------------------------------------------------------------');
            // if ($sku && $sku->stock <= 0 || $sku->stock <= $num  ) {
            //     // 这里假设 GoodsSku 模型有一个关联到 Goods 模型的关联方法 `goods()`
            //     $goods = $sku->goods;
            //     if ($goods && $goods->status != '1') {
            //         $goods->status = '1'; // 假设状态字段为 'status'，下架状态为 'unlisted'
            //         $goods->save();
            //     }
            // }

            //商品累计销量
            //累减销量
            $core_goods_sale_num_service = new CoreGoodsSaleNumService();
            foreach ($order_goods_data as $v) {
                //商品累计销量
                $core_goods_sale_num_service->dec([
                    'num' => $v['num'],
                    'goods_id' => $v['goods_id'],
                    'sku_id' => $v['sku_id']
                ]);
            }

            //发票改变状态........
            (new CoreInvoiceService())->close($order_data['invoice_id']);
            //发布日志
            $main_type = $data['main_type'];
            $main_id = $data['main_id'] ?? 0;
            (new CoreOrderLogService())->add([
                'order_id' => $order_data['order_id'],
                'status' => OrderDict::CLOSE,
                'main_type' => $main_type,//todo  可以是传入的
                'main_id' => $main_id,
                'type' => OrderDict::ORDER_CLOSE_ACTION,
                'content' => ''
            ]);
            //todo 消息发送
        } catch ( \Exception $e ) {
            Log::write('订单AfterShopOrderClose失败' . $e->getMessage() . $e->getFile() . $e->getLine());
        }
    }
}
