<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\o2o\app\adminapi\controller\goods;

use core\base\BaseAdminController;
use addon\o2o\app\service\admin\goods\GoodsService;


/**
 * 服务项目控制器
 * Class Goods
 * @package addon\o2o\app\adminapi\controller\goods
 */
class Goods extends BaseAdminController
{
   /**
    * 获取服务项目列表
    * @return \think\Response
    */
    public function lists()
    {
        $data = $this->request->params([
            ["goods_name", "" ],
            [ "goods_category", "" ],
            [ "start_sale_num", "" ],
            [ "end_sale_num", "" ],
            [ "start_price", "" ],
            [ "end_price", "" ],
            [ "status", "" ],
            [ 'order', '' ],
            [ 'sort', '' ],
            [ 'create_time', [] ],
        ]);
        return success((new GoodsService())->getPage($data));
    }

    /**
     * 服务项目详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success((new GoodsService())->getInfo($id));
    }

    /**
     * 获取商品添加/编辑数据
     * @return \think\Response
     */
    public function init()
    {
        $data = $this->request->params([
            [ "goods_id", 0 ],
        ]);
        return success(( new GoodsService() )->getInit($data));
    }

    /**
     * 添加服务项目
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            [ "goods_name", "" ],
            [ "goods_image", "" ],
            [ "goods_cover", "" ],
            [ "goods_category", '' ],
            [ "status", 0 ],
            [ "sort", 0 ],
            [ "buy_type", '' ],
            [ "after_sales", 0 ],
            [ 'spec_type', '' ],// 规格类型，single：单规格，multi：多规格
            [ "price", 0 ],
            [ "market_price", 0 ],
            [ "sku_no", '' ],
            [ "sku_unit", "" ],
            [ "virtually_sale", 0 ],
            [ "sku_unit", '' ],
            [ "price_list", '' ],
            [ "goods_sku_data", '' ],
            [ "buy_info", '' ],
            [ "min_buy", 1 ],
            [ "goods_content", '' ],

        ]);
        $this->validate($data, 'addon\o2o\app\validate\Goods.add');
        $id = (new GoodsService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 服务项目编辑
     * @param $id  服务项目id
     * @return \think\Response
     */
    public function edit($id)
    {
        $data = $this->request->params([
            [ "goods_name", "" ],
            [ "goods_image", "" ],
            [ "goods_cover", "" ],
            [ "goods_category", '' ],
            [ "status", 0 ],
            [ "sort", 0 ],
            [ "buy_type", '' ],
            [ "after_sales", 0 ],
            [ 'spec_type', '' ],// 规格类型，single：单规格，multi：多规格
            [ "price", 0 ],
            [ "market_price", 0 ],
            [ "sku_no", '' ],
            [ "virtually_sale", 0 ],
            [ "sku_unit", '' ],
            [ "price_list", '' ],
            [ "goods_sku_data", '' ],
            [ "buy_info", '' ],
            [ "min_buy", 1 ],
            [ "goods_content", '' ],
        ]);

        $this->validate($data, 'addon\o2o\app\validate\Goods.edit');
        (new GoodsService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 服务项目删除
     * @param $id  服务项目id
     * @return \think\Response
     */
    public function del(int $id)
    {
        (new GoodsService())->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 获取列表不分页
     */
    public function getLists()
    {
        $data = $this->request->params([
            ["goods_name",""],
            ["create_time",""],
            ["category_id", ""]
        ]);
        return success((new GoodsService())->getLists($data));
    }

    /**
     * 服务上下架
     */
    public function editStatus($id)
    {
        $data = $this->request->params([
            ["status", 0],
        ]);
        (new GoodsService())->editStatus($id, $data);
        return success('SUCCESS');
    }

    /**
     * 更新排序
     * @param int $id
     * @return \think\Response
     */
    public function editSort(int $id)
    {
        $data = $this->request->params([
            ["sort",0],
        ]);
        (new GoodsService())->editSort($id, $data);
        return success('SUCCESS');
    }
}
