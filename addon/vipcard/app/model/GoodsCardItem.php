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

namespace addon\vipcard\app\model;

use core\base\BaseModel;


/**
 * 卡项商品关联表模型
 * Class GoodsCardItem
 * @package addon\vipcard\app\model
 */
class GoodsCardItem extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'vipcard_goods_card_item';

    /**
     * 搜索器:卡项商品关联表
     * @param $value
     * @param $data
     */
    public function searchIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("id", $value);
        }
    }
    
    /**
     * 搜索器:卡项商品关联表站点id
     * @param $value
     * @param $data
     */
    public function searchSiteIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("site_id", $value);
        }
    }
    
    /**
     * 搜索器:卡项商品关联表商品id
     * @param $value
     * @param $data
     */
    public function searchGoodsIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("goods_id", $value);
        }
    }
    
    /**
     * 搜索器:卡项商品关联表次卡可用次数
     * @param $value
     * @param $data
     */
    public function searchNumAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("num", $value);
        }
    }

}
