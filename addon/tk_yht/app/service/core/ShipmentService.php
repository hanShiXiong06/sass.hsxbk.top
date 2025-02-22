<?php

namespace addon\tk_yht\app\service\core;

use app\service\core\sys\CoreConfigService;
use core\exception\CommonException;
use core\exception\NoticeException;
use Exception;
use think\facade\Cache;
use addon\tk_yht\app\dict\common\CommonDict;

/**
 * 商家快递寄件相关接口
 */
class ShipmentService extends YhtService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 获取快递公司
     * @throws Exception
     */
    public function kuaidiComs()
    {
        try {
            $res = $this->http_get('v2/shipment/get_kuaidi_coms', [], $this->access_token);
            if ($res['status'] == 200) {
                return $res;
            }else{
                throw new Exception($res['msg']);
            }
        } catch ( Exception $e ) {
            throw new Exception($e->getMessage());
        }
    }

    /**
     *获取价格
     */
    public function getPrice($kuaidicom, $data)
    {
        try {
            $token = $this->access_token;
            $data['kuaidicom'] = $kuaidicom;
            $res = $this->http_post('v2/shipment/price', $data, $token);
            if ($res['status'] == 200) {
                return $res;
            }
        } catch (Exception $e) {
            throw new NoticeException($e->getMessage());
        }
    }

    /**
     *快递下单
     */
    public function createOrder($data)
    {
        try {
            $token = $this->access_token;
            $res = $this->http_post('v2/shipment/create_order', $data, $token);
            if ($res['status'] == 200) {
                return $res;
            }
        } catch (Exception $e) {
            throw new NoticeException($e->getMessage());
        }
    }
    /**
     *取消订单
     */
    public function cancelOrder($data)
    {
        try {
            $token = $this->access_token;
            $res = $this->http_post('v2/shipment/cancel_order', $data, $token);
            if ($res['status'] == 200) {
                return $res;
            }
        } catch (Exception $e) {
            throw new NoticeException($e->getMessage());
        }
    }

}