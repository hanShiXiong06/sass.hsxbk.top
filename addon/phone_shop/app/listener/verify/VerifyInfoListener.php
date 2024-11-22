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

namespace addon\phone_shop\app\listener\verify;


use addon\phone_shop\app\model\order\OrderGoods;

/**
 * 核销详情
 */
class VerifyInfoListener
{
    /**
     * @param array $params
     * @return array|void
     */
    public function handle($params = [])
    {
        $info = [];
        if($params['type'] == 'shopVirtualGoods')
        {
            $site_id = $params['site_id'];
            $order_goods_id = $params['relate_tag'];
            $order_goods_info = (new OrderGoods())->where([['order_goods_id', '=', $order_goods_id], ['site_id','=', $site_id], ['is_verify', '=', 1]])->findOrEmpty()->toArray();
            if($order_goods_info){
                $info = [
                    [
                        'name' => '核销次数/总次数',
                        'value' => $order_goods_info['verify_count'].'/'.$order_goods_info['num']
                    ]
                ];
            }
        }
        return $info;
    }
}
