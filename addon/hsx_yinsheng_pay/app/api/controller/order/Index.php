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

namespace addon\hsx_yinsheng_pay\app\api\controller\order;

use addon\seafox_pay\app\service\api\MaidanOrderService;
use core\base\BaseApiController;
use think\Response;

class Index extends BaseApiController
{

    public function Info()
    {
        $data = $this->request->params([
            [ 'merchant_id', '' ],
        ]);
        $res = ( new MaidanOrderService() )->getinfo($data);
        return success($res);
    }


    /**
     * 订单创建
     * @return Response
     */
    public function create()
    {
        $data = $this->request->params([
            [ 'merchant_id', '' ],
            [ 'money', 0 ]
        ]);
        $res = ( new MaidanOrderService() )->pay($data);
        return success($res);
    }

    public function lists()
    {
        $data = $this->request->params([
            [ 'order_status', '' ]
        ]);
        $res = ( new MaidanOrderService() )->getPage($data);
        return success($res);
    }

    /**
     * 查询订单详情
     * @param int $order_id
     * @return Response
     */
    public function detail(int $order_id)
    {
        $res = ( new MaidanOrderService() )->getDetail($order_id);
        return success($res);
    }
}
