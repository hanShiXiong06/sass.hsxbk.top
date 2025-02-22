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

namespace addon\phone_shop\app\service\core\goods;

use app\service\core\sys\CoreConfigService;
use core\base\BaseCoreService;


/**
 * 商品配置
 * Class CoreGoodsConfigService
 * @package addon\phone_shop\app\service\core\goods
 */
class CoreGoodsConfigService extends BaseCoreService
{
    //系统配置文件
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();
    }

    /**
     * 设置商品分类配置
     * @param array $params
     * @return array
     */
    public function setGoodsCategoryConfig($params)
    {

        $value = [
            "level" => $params[ 'level' ], // 展示分类等级
            "template" => $params[ 'template' ], // 分类模版名称
            'page_title' => $params[ 'page_title' ], // 页面标题
            "search" => $params[ 'search' ],// 顶部搜索框
            'goods' => $params[ 'goods' ], // 商品样式，single-cols：单列，double-cols
            "sort" => $params[ 'sort' ], // 商品排序，default：综合，sales：热销、price：价格
            'cart' => $params[ 'cart' ]
        ];

        $this->core_config_service->setConfig($params['site_id'], 'GOODS_CATEGORY_CONFIG', $value);
        return true;
    }

    /**
     * 获取商品分类配置
     * @return array
     */
    public function getGoodsCategoryConfig(int $site_id)
    {
        $res = ( new CoreConfigService() )->getConfig($site_id, 'GOODS_CATEGORY_CONFIG');
        if (empty($res[ 'value' ])) {
            $data = [
                "level" => 2, // 展示分类等级
                "template" => "style-1", // 分类模版名称
                'page_title' => '商品分类', // 页面标题
                // 顶部搜索框
                "search" => [
                    'control' => 1, // 开关，1：开启，0：关闭
                    'title' => '请搜索您想要的商品', //  搜索栏文字
                ],
                // 商品样式
                'goods' => [
                    'style' => 'single-cols' // single-cols：单列，double-cols：双列
                ],
                "sort" => "default", // 商品排序，default：综合，sales：热销、price：价格
                'cart' => [
                    'control' => 1, // 开关，1：开启，0：关闭
                    'event' => 'detail', // 购物车事件，detail：跳转商品详情，cart：加入购物车
                    'style' => 'style-1', // 样式风格
                    'text' => '购买' //文字
                ]
            ];
        } else {
            $data = [
                "level" => (int)$res[ 'value' ][ 'level' ], // 展示分类等级
                "template" => $res[ 'value' ][ 'template' ], // 分类模版名称
                'page_title' => $res[ 'value' ][ 'page_title' ], // 页面标题
                "search" => $res[ 'value' ][ 'search' ],// 顶部搜索框
                'goods' => $res[ 'value' ][ 'goods' ],
                "sort" => $res[ 'value' ][ 'sort' ], // 商品排序，default：综合，sales：热销、price：价格
                'cart' => $res[ 'value' ][ 'cart' ]
            ];

        }
        return $data;
    }

}
