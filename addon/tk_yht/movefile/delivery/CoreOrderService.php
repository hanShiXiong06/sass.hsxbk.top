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

namespace addon\shop\app\service\core\order;

use addon\shop\app\model\order\Order;
use addon\shop\app\service\core\delivery\CoreConfigService;
use addon\shop\app\service\core\delivery\delivery_search\DeliverySearchLoader;
use core\base\BaseCoreService;

/**
 * 订单关闭服务层
 */
class CoreOrderService extends BaseCoreService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new Order();
    }

    /**
     * 查询订单
     * @param int $order_id
     * @return array
     */
    public function getInfo(int $order_id)
    {
        //查询订单
        $where = array(
            ['order_id', '=', $order_id]
        );
        return $this->model->where($where)->findOrEmpty()->toArray();
    }

    /**
     * 查询物流信息
     * @param $params
     * @return mixed
     */
    public function deliverySearch($params)
    {

        $config = (new CoreConfigService())->getDeliverySearchConfig($params['site_id']);

        if($config['interface_type']==1001){
            $class = new DeliverySearchLoader("YhtDeliverySearch", $config);
        }else{
            $class = new DeliverySearchLoader("KdniaoDeliverySearch", $config);
        }
        $data = [
            'express_no' => $params['company']['express_no']??'',
            'logistic_no' => $params['express_number'],
            'mobile' => $params['mobile'],
        ];
        if($config['interface_type']==1001){
            //增加顺丰单号的查询
            if (strpos($params['express_number'], 'SF') !== false) {
                $wh=substr($params['mobile'], -4);
                $data['logistic_no']=$params['express_number'].':'.$wh;
            }
        }
        $traces = $class->search($data);
        if (!empty($traces['list'])) {
            $traces['list'] = array_reverse($traces['list']);
            usort($traces['list'], function($a, $b) {
                $timeA = strtotime($a['datetime']);
                $timeB = strtotime($b['datetime']);
                return $timeA ==$timeB ? 0 : ($timeA <$timeB ? 1 : -1);
            });
        }
        $params['traces'] = $traces;
        return $params;
    }
}
