<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\fast_pay\app\api\controller\order;

use addon\fast_pay\app\service\api\order\OrderService;
use core\base\BaseApiController;


/**
 * 订单api
 */
class Order extends BaseApiController
{
    public function create(){
        $data = $this->request->params([
            ["price",""],
            ["remark",""],
        ]);
        return success('创建成功',(new OrderService())->create($data));
    }
    public function lists(){
        $data = $this->request->params([
            ["member_id",""],
            ["order_from",""],
            ["order_id",""],
            ["out_trade_no",""],
            ["pay_time",["",""]],
            ["is_enable_refund",""],
            ["close_time",""],
            ["ip",""],
            ["update_time",""],
            ["delete_time",""]
        ]);
        return success((new OrderService())->getPage($data));
    }
}
