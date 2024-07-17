<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\spdr\app\listener\goods;


/**
 * 订单导出数据类型查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class ShopGoodsExportDataTypeListener
{

    public function handle()
    {
        return [
            'spdr_export_goods' => [
                'name' => '商品导出',
                'column' => [
                    'goods_id' => [
                        'name' => '商品ID',
                    ],
                    'goods_name' => [
                        'name' => '商品名称'
                    ],
                    'sub_title' => [
                        'name' => '副标题'
                    ],
                    'keyword'=>[
                        'name'=>'关键字'
                    ],
                    'market_price'=>[
                        'name'=>'原价'
                    ],
                    'cost_price'=>[
                        'name'=>'成本价'
                    ],
                    'goods_desc' => [
                        'name' => '商品详情'
                    ],
                    'goods_cover' => [
                        'name' => '商品缩略图'
                    ],
                    'goods_image' => [
                        'name' => '商品轮播图'
                    ],
                    'video' => [
                        'name' => '商品视频'
                    ],
                    'unit' => [
                        'name' => '单位'
                    ],

                    'price'=>[
                        'name'=>'售价'
                    ],
                    'spec_type'=>[
                        'name'=>'是否使用规格'
                    ],
                    'sku_spec'=>[
                        'name'=>'规格组'
                    ],
                    'sku_list'=>[
                        'name'=>'规格详情'
                    ],
                    'stock' => [
                        'name' => '商品库存'
                    ],
                    'virtual_sale_num'=>[
                        'name'=>'虚拟销量'
                    ],
                    'goods_type' => [
                        'name' => '商品类型'
                    ],
                    'delivery_type'=>[
                        'name'=>'配送类型'
                    ] ,
                ]
            ]
        ];
    }
}