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

namespace addon\phone_shop\app\model\goods;

use core\base\BaseModel;
use think\model\relation\HasOne;


/**
 * 商品收藏记录
 * Class GoodsCollect
 * @package addon\phone_shop\app\model\goods
 */
class GoodsCollect extends BaseModel
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
    protected $name = 'phone_shop_goods_collect';

    /**
     * 商品信息
     * @return HasOne
     */
    public function goods()
    {
        return $this->hasOne(Goods::class, 'goods_id', 'goods_id')->joinType('left')->withField('goods_id, goods_name,goods_cover')->append([ 'goods_cover_thumb_small' ])->bind([ 'goods_name', 'goods_cover_thumb_small' ]);
    }

}
