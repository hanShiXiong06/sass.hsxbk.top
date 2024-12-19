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

namespace addon\shop_fenxiao\app\service\admin\fenxiao;

use addon\shop_fenxiao\app\dict\fenxiao\FenxiaoGoodsDict;
use addon\shop_fenxiao\app\model\fenxiao\FenxiaoGoods;
use addon\shop_fenxiao\app\model\fenxiao\FenxiaoLevel;
use addon\shop_fenxiao\app\model\fenxiao\Goods;
use core\base\BaseAdminService;
use core\exception\AdminException;


/**
 * 分销商品服务层
 * Class FenxiaoGoodsService
 * @package addon\shop_fenxiao\app\service\admin
 */
class FenxiaoGoodsService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 获取商品列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,stock,sale_num,status,sort,create_time';
        $order = 'create_time desc';
        $sku_where = [
            ['goodsSku.is_default', '=', 1],
            ['goods.site_id', '=', $this->site_id],
            ['goods.is_gift', '=', FenxiaoGoodsDict::NOT_IS_GIFT],
            ['status', '=', 1]
        ];

        $search_model = $this->model->withSearch(["goods_name", "goods_type", "goods_category"], $where)
            ->field($field)
            ->withJoin([
                'goodsSku' => ['sku_id', 'goods_id', 'price'],
            ])
            ->where($sku_where)
            ->order($order)->append(['goods_type_name', 'goods_edit_path', 'goods_cover_thumb_small']);
        $list = $this->pageQuery($search_model);
        foreach ($list['data'] as &$value) {
            $info = (new FenxiaoGoods())->where([['site_id', '=', $this->site_id], ['goods_id', '=', $value['goods_id']]])->findOrEmpty()->toArray();

            if (empty($info)) {
                $value['is_set_fenxiao'] = 0;
                $value['fenxiao_type'] = 1;
            } else {
                $value['is_set_fenxiao'] = $info['is_fenxiao'];
                $value['fenxiao_type'] = $info['fenxiao_type'];
            }
        }

        return $list;
    }

    /**
     * 获取商品信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'goods_id,site_id,goods_name,sub_title,goods_type,goods_cover,goods_image,goods_desc,brand_id,goods_category,label_ids,service_ids,unit,stock,sale_num,virtual_sale_num,status,sort,delivery_type,is_free_shipping,fee_type,delivery_money,delivery_template_id,supplier_id,create_time,update_time';
        $info = $this->model->field($field)->where([['goods_id', '=', $id], ['site_id', '=', $this->site_id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 修改分销商品
     * @param int $goods_id
     * @param $data
     */
    public function editFenxiaoGoods(int $goods_id, $data)
    {
        $fenxiaoGoods = [
            'is_fenxiao' => $data['is_fenxiao'],
            'fenxiao_type' => $data['fenxiao_type'],
        ];
        if (!empty($data['skuList'])) {
            foreach ($data['skuList'] as $value) {
                $data['fenxiao_rule'][$value['sku_id']]['calculate_price'] = $value['calculate_price'];
            }
            if (is_array($data['fenxiao_rule']) && !empty($data['fenxiao_rule'])) {
                $fenxiaoGoods['fenxiao_rule'] = json_encode($data['fenxiao_rule']);
            } else {
                $fenxiaoGoods['fenxiao_rule'] = '';
            }
        } else {
            $fenxiaoGoods['fenxiao_rule'] = '';
        }

        $info = (new FenxiaoGoods())->where([['site_id', '=', $this->site_id], ['goods_id', '=', $goods_id]])->findOrEmpty()->toArray();
        if (empty($info)) {
            $fenxiaoGoods['site_id'] = $this->site_id;
            $fenxiaoGoods['goods_id'] = $goods_id;
            (new FenxiaoGoods())->create($fenxiaoGoods);
        } else {
            (new FenxiaoGoods())->where([['goods_id', '=', $goods_id], ['site_id', '=', $this->site_id]])->update($fenxiaoGoods);
        }

        return true;
    }

    /**
     * 批量设置是否参与分销
     * @param $goods_ids
     */
    public function modifyGoodsIsFenxiao($goods_ids, int $is_fenxiao)
    {
        $fenxiao_goods_list = (new FenxiaoGoods())->where([['site_id', '=', $this->site_id], ['goods_id', 'in', $goods_ids]])
            ->with([
                'skuList' => function ($query) {
                    $query->field('sku_id, goods_id, price,sku_name');
                },
            ])
            ->select()->toArray();

        if (!empty($fenxiao_goods_list)) {
            $fenxiao_goods_id_list = array_column($fenxiao_goods_list, 'goods_id');
        } else {
            $fenxiao_goods_id_list = [];

        }

        $fenxiao_goods_list = (new Goods())->where([['site_id', '=', $this->site_id], ['goods_id', 'in', $goods_ids]])
            ->with([
                'skuList' => function ($query) {
                    $query->field('sku_id, goods_id, price,sku_name,cost_price');
                },
            ])
            ->select()->toArray();
        //添加执行
        $goods_id_array = $goods_ids;

        //查询分销等级
        $fenxiaoLevelModel = new FenxiaoLevel();
        $levelList = $fenxiaoLevelModel->field('level_id,level_name,one_rate,two_rate')->where([['site_id', '=', $this->site_id]])->order('level_num asc')->select()->toArray();
        $skuList = [];
        $goods_rule = [];
        foreach ($fenxiao_goods_list as $key => $value) {
            $skuList[] = $value['skuList'];
        }
        $result = array_reduce($skuList, function ($result, $value) {
            return array_merge($result, array_values($value));
        }, array());
        foreach ($result as $key => &$value) {
            $value['calculate_price'] = '';
            $goods_rule[$value['sku_id']] = $value;
        }
        foreach ($goods_rule as &$value) {
            foreach ($levelList as $val) {
                $val['one_money'] = '0';
                $val['two_money'] = '0';
                $value[$val['level_id']] = $val;
            }
        }
        $result = array_reduce($goods_rule, function ($carry, $item) {
            if (!isset($carry[$item['goods_id']])) {
                $carry[$item['goods_id']] = [];
            }
            $carry[$item['goods_id']][$item['sku_id']] = $item;
            return $carry;
        }, []);

        foreach ($goods_id_array as $k => $v) {

            if (!in_array(intval($v), $fenxiao_goods_id_list)) {
                //添加
                (new FenxiaoGoods())->create(['goods_id' => $v, 'site_id' => $this->site_id, 'fenxiao_type' => 1, 'fenxiao_rule' => json_encode($result[$v])]);
            }
        }
        //整体执行
        (new FenxiaoGoods())->where([['site_id', '=', $this->site_id], ['goods_id', 'in', $goods_ids]])->update(['is_fenxiao' => $is_fenxiao]);
        return true;
    }

    public function getGoodsCommission($goods_id)
    {
        //获取商品信息
        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,stock,sale_num,status,sort,create_time';

        $goodsInfo = $this->model->where([['site_id', '=', $this->site_id], ['goods_id', '=', $goods_id]])
            ->field($field)
            ->with([
                'fenxiaoGoods' => function ($query) {
                    $query->withField('goods_id, fenxiao_type, fenxiao_rule,is_fenxiao');
                },
                'skuList' => function ($query) {
                    $query->field('sku_id, goods_id, price,sku_name,cost_price');
                },
            ])
            ->append(['goods_type_name', 'goods_edit_path', 'goods_cover_thumb_small'])->findOrEmpty();
        if (!$goodsInfo->isEmpty()) {
            $goodsInfo = $goodsInfo->toArray();
            if (empty($goodsInfo['fenxiaoGoods'])) {
                $goodsInfo['is_set_fenxiao'] = 0;
                $goodsInfo['fenxiao_type'] = 1;
            } else {

                $goodsInfo['is_set_fenxiao'] = $goodsInfo['fenxiaoGoods']['is_fenxiao'];
                $goodsInfo['fenxiao_type'] = $goodsInfo['fenxiaoGoods']['fenxiao_type'];
            }

            //查询分销等级
            $fenxiaoLevelModel = new FenxiaoLevel();
            $levelList = $fenxiaoLevelModel->field('level_id,level_name,one_rate,two_rate')->where([['site_id', '=', $this->site_id]])->order('level_num asc')->select()->toArray();
            if (!empty($goodsInfo['fenxiaoGoods'])) {
                foreach ($goodsInfo['fenxiaoGoods']['fenxiao_rule'] as &$value) {

                    foreach ($levelList as $val) {
                        if (!isset($value[$val['level_id']])) {
                            $value[$val['level_id']]['level_name'] = $val['level_name'];
                            $value[$val['level_id']]['level_id'] = $val['level_id'];
                            $value[$val['level_id']]['one_rate'] = $val['one_rate'];
                            $value[$val['level_id']]['two_rate'] = $val['two_rate'];
                            $value[$val['level_id']]['one_money'] = '0';
                            $value[$val['level_id']]['two_money'] = '0';
                        }
                    }
                }
                //追加分销计算金额
                foreach ($goodsInfo['skuList'] as &$value) {
                    $temp_fenxiao_goods_rule = $goodsInfo['fenxiaoGoods']['fenxiao_rule'][$value['sku_id']] ?? [];
                    $value['calculate_price'] = $temp_fenxiao_goods_rule['calculate_price'] ?? '';
                }

                $goodsInfo['fenxiaoGoods']['fenxiao_rule'] = json_encode($goodsInfo['fenxiaoGoods']['fenxiao_rule']);
            } else {

                $goodsInfo['fenxiaoGoods'] = [
                    'goods_id' => $goods_id,
                    'fenxiao_type' => 1,
                    'fenxiao_rule' => [],
                    'is_fenxiao' => 0
                ];
                foreach ($goodsInfo['skuList'] as &$value) {
                    $value['calculate_price'] = '';
                }
            }

            $data = [
                'goods_info' => $goodsInfo,
                'rule' => $levelList
            ];
            return $data;
        } else {
            throw new AdminException('SHOP_FENXIAO_NOT_FOUND_GOODS');
        }

    }
}
