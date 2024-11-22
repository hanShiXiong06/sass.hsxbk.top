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

namespace addon\shop\app\service\core\goods;

use app\service\core\sys\CoreConfigService;
use core\base\BaseCoreService;


/**
 * 商品排行榜配置
 * Class CoreGoodsRankConfigService
 * @package addon\shop\app\service\core\goods
 */
class CoreGoodsRankConfigService extends BaseCoreService
{
    //系统配置文件
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();
    }

    /**
     * 设置商品排行榜配置
     * @param array $params
     * @return array
     */
    public function setGoodsRankConfig($params)
    {
        $value = [
            "rank_name" => $params[ 'rank_name' ], // 排行榜名称
            "rank_images" => $params[ 'rank_images' ], // 广告图
            'rank_remark' => $params[ 'rank_remark' ], // 备注
        ];

        $this->core_config_service->setConfig($params['site_id'], 'GOODS_RANK_CONFIG', $value);
        return true;
    }

    /**
     * 获取商品排行榜配置
     * @return array
     */
    public function getGoodsRankConfig(int $site_id)
    {
        $res = ( new CoreConfigService() )->getConfig($site_id, 'GOODS_RANK_CONFIG');
        if (empty($res[ 'value' ])) {
            $data = [
                "rank_name" => '', // 排行榜名称
                "rank_images" => '', // 广告图
                'rank_remark' => '', // 备注
            ];
        } else {
            $data = [
                'rank_name' => $res['value']['rank_name'],
                'rank_images' => $res['value']['rank_images'],
                'rank_remark' => $res['value']['rank_remark']
            ];
        }
        return $data;
    }

}
