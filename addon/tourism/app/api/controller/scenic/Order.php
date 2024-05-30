<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tourism\app\api\controller\scenic;

use addon\tourism\app\service\api\scenic\OrderService;
use core\base\BaseApiController;


/**
 * 门票订单控制器
 * Class GoodsController
 * @package app\adminapi\controller\goods
 */
class Order extends BaseApiController
{
   /**
    * 订单确认
    * @return \think\Response
    */
    public function confirm(){
        $data = $this->request->params([
            ['ticket_id', 0],
            ['reserve_time', ''],
            ['num', 1]
        ]);
        $this->validate($data, 'addon\tourism\app\validate\scenic\Order.confirm');
        return success('SUCCESS', (new OrderService())->confirm($data));
    }

    /**
     * 订单计算
     * @return void
     */
    public function calculate() {
        $data = $this->request->params([
            ['ticket_id', 0],
            ['reserve_time', ''],
            ['num', 1]
        ]);
        $this->validate($data, 'addon\tourism\app\validate\scenic\Order.calculate');
        return success('SUCCESS',  (new OrderService())->calculate($data));
    }

    /**
     * 订单创建
     * @return void
     */
    public function create() {
        $data = $this->request->params([
            ['ticket_id', 0],
            ['reserve_time', ''],
            ['num', 1],
            ['buyer_info', '[]'],
            ['mobile', '']
        ]);
        $data['buyer_info'] = json_decode($data['buyer_info'], true);
        $this->validate($data, 'addon\tourism\app\validate\scenic\Order.create');
        return success('SUCCESS', (new OrderService())->create($data));
    }

    /**
     * 取消订单
     * @param int $order_id
     * @return \think\Response
     */
    public function cancel(int $order_id) {
        return success('SUCCESS', (new OrderService())->cancel($order_id));
    }
}
