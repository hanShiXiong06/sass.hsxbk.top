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

namespace addon\phone_shop\app\api\controller\goods;


use addon\phone_shop\app\service\api\goods\GoodsCollectService;
use core\base\BaseApiController;

/**
 * 商品收藏
 * Class GoodsCollect
 * @package addon\phone_shop\app\api\controller\goods
 */
class GoodsCollect extends BaseApiController
{
    /**
     * 获取商品收藏列表
     * @return \think\Response
     */
    public function getMemberGoodsCollectList()
    {
        return success(( new GoodsCollectService() )->getMemberGoodsCollectList());
    }

    /**
     * 商品增加收藏
     */
    public function addGoodsCollect()
    {
        $data = $this->request->params([
            [ 'goods_id', 0 ],
        ]);
        return success(( new GoodsCollectService() )->addGoodsCollect($data));
    }

    /**
     * 商品取消收藏
     */
    public function cancelGoodsCollect()
    {
        $data = $this->request->params([
            [ 'goods_id', 0 ],
        ]);
        return success(( new GoodsCollectService() )->cancelGoodsCollect($data));
    }

}
