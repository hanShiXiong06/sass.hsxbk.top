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

namespace addon\phone_shop\app\service\admin\goods;

use addon\phone_shop\app\dict\active\ActiveDict;
use addon\phone_shop\app\dict\goods\GoodsDict;
use addon\phone_shop\app\dict\order\OrderDict;
use addon\phone_shop\app\model\active\ActiveGoods;
use addon\phone_shop\app\model\goods\Goods;
use addon\phone_shop\app\model\goods\GoodsSku;
use addon\phone_shop\app\model\goods\GoodsSpec;
use addon\phone_shop\app\model\order\OrderGoods;
use app\service\admin\addon\AddonService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use core\exception\CommonException;
use think\facade\Db;


/**
 * 商品服务层
 * Class GoodsService
 * @package addon\phone_shop\app\service\admin\goods
 */
class GoodsService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Goods();
    }

    /**
     * 获取商品添加/编辑数据
     * @param array $params
     * @return array
     */
    public function getInit(array $params = [])
    {

        $res = [];

        $addon_service = new AddonService();
        $res[ 'addon_shop_supplier' ] = $addon_service->getInfoByKey('shop_supplier');

        if (!empty($params[ 'goods_id' ])) {
            // 查询商品信息，用于编辑
            $field = 'goods_id,goods_name,sub_title,goods_type,goods_cover,goods_image,goods_desc,brand_id,goods_category,label_ids,service_ids,unit,stock,virtual_sale_num,status,sort,delivery_type,is_free_shipping,fee_type,delivery_money,delivery_template_id,supplier_id,attr_id,attr_format,member_discount,poster_id';
            $goods_info = $this->model->field($field)->where([ [ 'goods_id', '=', $params[ 'goods_id' ] ] ])->findOrEmpty()->toArray();
            if (!empty($goods_info)) {

                if (!empty($goods_info[ 'goods_category' ])) {
                    $category_service = new CategoryService();
                    foreach ($goods_info[ 'goods_category' ] as $k => $v) {
                        $category = $category_service->getInfo($v);
                        if (empty($category)) {
                            unset($goods_info[ 'goods_category' ][ $k ]);
                        }
                    }
                }

                // 商品品牌，处理数据类型
                if (empty($goods_info[ 'brand_id' ])) {
                    $goods_info[ 'brand_id' ] = '';
                }

                // 供应商，处理数据类型
                if (empty($goods_info[ 'supplier_id' ])) {
                    $goods_info[ 'supplier_id' ] = '';
                }

                // 标签组
                if (empty($goods_info[ 'label_ids' ])) {
                    $goods_info[ 'label_ids' ] = [];
                } else {
                    $goods_info[ 'label_ids' ] = array_map(function($item) { return (int) $item; }, $goods_info[ 'label_ids' ]);
                }

                // 商品服务
                if (empty($goods_info[ 'service_ids' ])) {
                    $goods_info[ 'service_ids' ] = [];
                } else {
                    $goods_info[ 'service_ids' ] = array_map(function($item) { return (int) $item; }, $goods_info[ 'service_ids' ]);
                }

                // 商品参数，处理数据类型
                if (empty($goods_info[ 'attr_id' ])) {
                    $goods_info[ 'attr_id' ] = '';
                }

                // 商品海报id，处理数据类型
                if (empty($goods_info[ 'poster_id' ])) {
                    $goods_info[ 'poster_id' ] = '';
                }

                //  配送方式
                if (empty($goods_info[ 'delivery_type' ])) {
                    $goods_info[ 'delivery_type' ] = [];
                }

                $goods_info[ 'status' ] = (string) $goods_info[ 'status' ];

                // 运费模板，处理数据类型
                if (empty($goods_info[ 'delivery_template_id' ])) {
                    $goods_info[ 'delivery_template_id' ] = '';
                }

                $goods_sku_model = new GoodsSku();

                $sku_field = 'sku_id,sku_name,sku_image,sku_no,goods_id,sku_spec_format,price,market_price,cost_price,stock,weight,volume,is_default';
                $sku_order = 'sku_id asc';
                $goods_info[ 'sku_list' ] = $goods_sku_model->withSearch([ "goods_id" ], [ 'goods_id' => $params[ 'goods_id' ] ])->field($sku_field)->order($sku_order)->select()->toArray();

                $temp_sku_data = array_filter(array_column($goods_info[ 'sku_list' ], 'sku_spec_format'));
                $goods_info[ 'spec_type' ] = 'single';
                if (!empty($temp_sku_data)) {
                    // 多规格
                    $goods_info[ 'spec_type' ] = 'multi';

                    $goods_spec_model = new GoodsSpec();
                    $spec_field = 'spec_id,goods_id,spec_name,spec_values';
                    $spec_order = 'spec_id asc';
                    $goods_info[ 'spec_list' ] = $goods_spec_model->withSearch([ "goods_id" ], [ 'goods_id' => $params[ 'goods_id' ] ])->field($spec_field)->order($spec_order)->select()->toArray();

                }

                // 查询商品参与营销活动的数量
                $goods_info[ 'active_goods_count' ] = $this->getActiveGoodsCount($goods_info[ 'goods_id' ]);

                $res[ 'goods_info' ] = $goods_info;
            }

        }
        // 商品同步的时候加的数
        if($this->site_id == 100005){
            if (!empty($res['goods_info']['sku_list']) && is_array($res['goods_info']['sku_list'])) {
                foreach ($res['goods_info']['sku_list'] as $i => &$v) {
                    $v['price'] = (float) $v['price'];
                    if ($v['price'] < 1000 && $v['price'] >= 0) {
                        $v['price'] = $v['price'] - 100;
                    } elseif ($v['price'] < 5000 && $v['price'] > 1000) {
                        $v['price'] = $v['price'] - 200;
                    } else {
                        $v['price'] = $v['price'] - 300;
                    }
                    // 保留两位小数
                    $v['price'] = number_format($v['price'], 2, '.', '');
                }
            }            
        }

        return $res;
    }

    /**
     * 获取商品列表
     * @param array $where
     * @return array
     */

    public function getPage(array $where = [])
    {

        $field = 'goods_id,sub_title,site_id,goods_name,goods_type,brand_id, source, goods_cover,stock,sale_num,status,sort,create_time,update_time,member_discount';
        $order = 'sort asc, create_time desc , update_time desc';
        if($where['status']=='' ){
            $sku_where = [
                [ 'goodsSku.is_default', '=', 1 ]
             ];
        }else{
             $sku_where = [
            [ 'goodsSku.is_default', '=', 1 ],[ 'status','=' ,$where['status']]
        ];
        }

        if (!empty($where[ 'start_price' ]) && !empty($where[ 'end_price' ])) {
            $money = [ $where[ 'start_price' ], $where[ 'end_price' ] ];
            sort($money);
            $sku_where[] = [ 'goodsSku.price', 'between', $money ];
        } else if (!empty($where[ 'start_price' ])) {
            $sku_where[] = [ 'goodsSku.price', '>=', $where[ 'start_price' ] ];
        } else if (!empty($where[ 'end_price' ])) {
            $sku_where[] = [ 'goodsSku.price', '<=', $where[ 'end_price' ] ];
        }
        if (!empty($where[ 'order' ])) {
            if($where[ 'order' ] == '_time'){
                $order = 'update_time ' . $where[ 'sort' ];;
            }else{
                $order = $where[ 'order' ] . ' ' . $where[ 'sort' ];
            }
        }
         // SKU编号查询
    if (!empty($where['sku_no'])) {
        $skuNoTrimmed = trim($where['sku_no']);
        if (strpos($skuNoTrimmed, ' ') !== false) {
            $skuNoArray = explode(' ', $skuNoTrimmed);
            $sku_where[] = function ($query) use ($skuNoArray) {
                $query->whereIn('goodsSku.sku_no', $skuNoArray);
            };
        } else {
            $sku_where[] = ['goodsSku.sku_no', '=', $skuNoTrimmed];
        }
    }

    // 构建查询模型
    $search_model = $this->model->where('goods.site_id', $this->site_id)
        ->when(!empty($where['sku_no']), function ($query) use ($where) {
            // 这里假设 $where['sku_no'] 包含的值是精确匹配，不是模糊匹配
            $skuNoTrimmed = trim($where['sku_no']);
            if (strpos($skuNoTrimmed, ' ') !== false) {
                $skuNoArray = explode(' ', $skuNoTrimmed);
                $query->whereIn('goodsSku.sku_no', $skuNoArray);
            } else {
                $query->where('goodsSku.sku_no', $skuNoTrimmed);
            }
        })->withSearch([ "goods_name", "goods_type", "brand_id", "goods_category", "label_ids", 'service_ids', "sale_num", "status"  ], $where)
        ->field($field)
        ->withJoin([
            'goodsSku' => ['sku_id', 'goods_id', 'price','sale_price', 'member_price', 'sku_no']
        ])
        ->where($sku_where)
        ->order($order)
        ->append(['goods_type_name', 'brand_name', 'goods_edit_path', 'goods_cover_thumb_small']);

    // 执行查询
    $list = $this->pageQuery($search_model);

    return $list;
    }



    /**
     * 获取商品信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'goods_id,site_id,goods_name,sub_title,goods_type,goods_cover,goods_image,goods_desc,brand_id,goods_category,label_ids,service_ids,unit,stock,sale_num,virtual_sale_num,status,sort,delivery_type,is_free_shipping,fee_type,delivery_money,delivery_template_id,supplier_id,create_time,update_time,member_discount,poster_id';
        $info = $this->model->field($field)->where([ [ 'goods_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加商品
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        try {
            Db::startTrans();
            $goods_sku_model = new GoodsSku();
            $goods_spec_model = new GoodsSpec();

            // 商品封面
            if (!empty($data[ 'goods_image' ])) $data[ 'goods_cover' ] = explode(',', $data[ 'goods_image' ])[ 0 ];
            // 获取当前商品的数量
            $count = $this->model->getGoodsCount();
          
            $goods_data = [
                'site_id' => $this->site_id,
                'goods_no'=>$this->model->getLastGoodsId()+10001,
                'goods_name' => $data[ 'goods_name' ],
                'sub_title' => $data[ 'sub_title' ],
                'goods_type' => $data[ 'goods_type' ],
                'goods_cover' => $data[ 'goods_cover' ],
                'goods_image' => $data[ 'goods_image' ],
                'goods_category' => array_map(function($item) { return (string) $item; }, $data[ 'goods_category' ]),
                'goods_desc' => $data[ 'goods_desc' ],
                'brand_id' => $data[ 'brand_id' ],
                'label_ids' => array_map(function($item) { return (string) $item; }, $data[ 'label_ids' ]),
                'service_ids' => array_map(function($item) { return (string) $item; }, $data[ 'service_ids' ]),
                'unit' => $data[ 'unit' ],
                'stock' => $data[ 'stock' ],
                'virtual_sale_num' => $data[ 'virtual_sale_num' ],
                'status' => $data[ 'status' ],
                'sort' => $data[ 'sort' ],
                'attr_id' => $data[ 'attr_id' ],
                'attr_format' => $data[ 'attr_format' ],
                'delivery_type' => $data[ 'delivery_type' ],
                'is_free_shipping' => $data[ 'is_free_shipping' ],
                'fee_type' => $data[ 'fee_type' ],
                'delivery_money' => $data[ 'delivery_money' ],
                'delivery_template_id' => $data[ 'delivery_template_id' ],
                'supplier_id' => $data[ 'supplier_id' ],
                'member_discount' => $data[ 'member_discount' ],
                'poster_id' => $data[ 'poster_id' ],
                'create_time' => time()
            ];
            // 如果站点的id == 100005 那么 member_discount = fixed_price
            if ($this->site_id == 100005) {
                $goods_data[ 'member_discount' ] = 'fixed_price';
            }
            $res = $this->model->create($goods_data);

            $sku_data = [];
            if ($data['spec_type'] == 'single') {
                // 单规格
                $sku_data = [
                    'site_id' => $this->site_id,
                    'sku_name' => '',
                    'sku_image' => $data['goods_cover'],
                    'sku_no' => $data['sku_no'],
                    'goods_id' => $res->goods_id,
                    'sku_spec_format' => '', // sku规格格式
                    'price' => $data['price'],
                    'market_price' => $data['market_price'],
                    'sale_price' => $data['price'],
                    'cost_price' => $data['cost_price'],
                    'stock' => $data['stock'],
                    'weight' => $data['weight'],
                    'volume' => $data['volume'],
                    'is_default' => 1
                ];
            
                if ($this->site_id == 100005) {
                    $sku_data['member_price'] = json_encode(['level_1' => $data['price']]);
                    if ($data['price'] < 1000) {
                        $sku_data['price'] = $data['price'] + 100;
                    } elseif ($data['price'] < 5000) {
                        $sku_data['price'] = $data['price'] + 200;
                    } else {
                        $sku_data['price'] = $data['price'] + 300;
                    }
                }
            
                $goods_sku_model->save($sku_data);
            } elseif ($data['spec_type'] == 'multi') {
                // 多规格数据
                $default_spec_count = 0;
                $sku_data = []; // 初始化数组
            
                foreach ($data['goods_sku_data'] as $k => $v) {
                    $sku_spec_format = [];
                    foreach ($v['sku_spec'] as $ck => $cv) {
                        $sku_spec_format[] = $cv['spec_value_name'];
                    }
            
                    $current_sku_data = [
                        'site_id' => $this->site_id,
                        'sku_name' => $v['spec_name'],
                        'sku_image' => !empty($v['sku_image']) ? $v['sku_image'] : $data['goods_cover'],
                        'sku_no' => $v['sku_no'],
                        'goods_id' => $res->goods_id,
                        'sku_spec_format' => implode(',', $sku_spec_format), // sku规格格式
                        'price' => $v['price'],
                        'market_price' => $v['market_price'],
                        'sale_price' => $v['price'],
                        'cost_price' => $v['cost_price'],
                        'stock' => $v['stock'],
                        'weight' => $v['weight'],
                        'volume' => $v['volume'],
                        'is_default' => $v['is_default']
                    ];
            
                    if ($this->site_id == 100005) {
                        $current_sku_data['member_price'] = json_encode(['level_1' => $v['price']]);
                        if ($v['price'] < 1000) {
                            $current_sku_data['price'] = $v['price'] + 100;
                        } elseif ($v['price'] < 5000) {
                            $current_sku_data['price'] = $v['price'] + 200;
                        } else {
                            $current_sku_data['price'] = $v['price'] + 300;
                        }
                    }
            
                    if ($v['is_default'] == 1) $default_spec_count++;
                    $sku_data[] = $current_sku_data;
                }
            
                if ($default_spec_count == 0) throw new AdminException('SHOP_GOODS_NOT_HAS_DEFAULT_SPEC');
            
                $goods_sku_model->insertAll($sku_data);
            
                // 商品规格值
                $spec_data = [];
                foreach ($data['goods_spec_format'] as $k => $v) {
                    $spec_values = [];
                    foreach ($v['values'] as $ck => $cv) {
                        $spec_values[] = $cv['spec_value_name'];
                    }
                    $spec_data[] = [
                        'goods_id' => $res->goods_id,
                        'spec_name' => $v['spec_name'],
                        'spec_values' => implode(',', $spec_values)
                    ];
                }
                $goods_spec_model->insertAll($spec_data);
            }
            

            Db::commit();

            event('AfterGoodsEdit', [
                'goods_id' => $res->goods_id,
                'goods_data' => $goods_data,
                'sku_data' => $sku_data
            ]);

            return $res->goods_id;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 商品编辑
     * @param int $goods_id
     * @param array $data
     * @return bool
     */
    public function edit(int $goods_id, array $data)
    {
        try {
            Db::startTrans();

            $goods_sku_model = new GoodsSku();
            $goods_spec_model = new GoodsSpec();
            $order_goods_model = new OrderGoods();

            // 查询商品参与营销活动的数量
            $active_goods_count = $this->getActiveGoodsCount($goods_id);
            if ($data[ 'status' ] == 0) {
                if ($active_goods_count > 0) {
                    throw new AdminException('SHOP_GOODS_PARTICIPATE_IN_ACTIVE_DISABLED_EDIT');
                }
            }

            // 商品封面
            if (!empty($data[ 'goods_image' ])) $data[ 'goods_cover' ] = explode(',', $data[ 'goods_image' ])[ 0 ];

            $goods_data = [
                'goods_name' => $data[ 'goods_name' ],
                'sub_title' => $data[ 'sub_title' ],
                'goods_type' => $data[ 'goods_type' ],
                'goods_cover' => $data[ 'goods_cover' ],
                'goods_image' => $data[ 'goods_image' ],
                'goods_category' => array_map(function($item) { return (string) $item; }, $data[ 'goods_category' ]),
                'goods_desc' => $data[ 'goods_desc' ],
                'brand_id' => $data[ 'brand_id' ],
                'label_ids' => array_map(function($item) { return (string) $item; }, $data[ 'label_ids' ]),
                'service_ids' => array_map(function($item) { return (string) $item; }, $data[ 'service_ids' ]),
                'unit' => $data[ 'unit' ],
                'stock' => $data[ 'stock' ],
                'virtual_sale_num' => $data[ 'virtual_sale_num' ],
                'status' => $data[ 'status' ],
                'sort' => $data[ 'sort' ],
                'attr_id' => $data[ 'attr_id' ],
                'attr_format' => $data[ 'attr_format' ],
                'delivery_type' => $data[ 'delivery_type' ],
                'is_free_shipping' => $data[ 'is_free_shipping' ],
                'fee_type' => $data[ 'fee_type' ],
                'delivery_money' => $data[ 'delivery_money' ],
                'delivery_template_id' => $data[ 'delivery_template_id' ],
                'supplier_id' => $data[ 'supplier_id' ],
                'member_discount' => $data[ 'member_discount' ],
                'poster_id' => $data[ 'poster_id' ],
                'update_time' => time()
            ];

            $this->model->where([ [ 'goods_id', '=', $goods_id ], [ 'site_id', '=', $this->site_id ] ])->update($goods_data);

            $sku_data = [];
            if ($data[ 'spec_type' ] == 'single') {
                // 单规格
                $sku_data = [
                    'site_id' => $this->site_id,
                    'sku_name' => '',
                    'sku_image' => $data[ 'goods_cover' ],
                    'sku_no' => $data[ 'sku_no' ],
                    'goods_id' => $goods_id,
                    'sku_spec_format' => '', // sku规格格式
                    'market_price' => $data[ 'market_price' ],
                    'cost_price' => $data[ 'cost_price' ],
                    'weight' => $data[ 'weight' ],
                    'volume' => $data[ 'volume' ],
                    'is_default' => 1
                ];
              
               

                // 未参与营销活动，则允许修改 原价、销售价、库存
                if ($active_goods_count == 0) {
                    $sku_data[ 'price' ] = $data[ 'price' ];
                    $sku_data[ 'sale_price' ] = $data[ 'price' ];
                    $sku_data[ 'stock' ] = $data[ 'stock' ];
                }
                if ($this->site_id == 100005) {
                    $sku_data['member_price'] = json_encode(['level_1' => $data['price']]);
                    if ($data['price'] < 1000) {
                        $sku_data['price'] = $data['price'] + 100;
                    } elseif ($data['price'] < 5000) {
                        $sku_data['price'] = $data['price'] + 200;
                    } else {
                        $sku_data['price'] = $data['price'] + 300;
                    }
                }
                $sku_count = $goods_sku_model->where([ [ 'goods_id', '=', $goods_id ] ])->count();
                if ($sku_count > 1) {

                    // 规格项发生变化，删除旧规格，添加新规格重新生成
                    $goods_sku_model->where([ [ 'goods_id', '=', $goods_id ] ])->delete();

                    // 防止存在遗留规格项，删除旧规格
                    $goods_spec_model->where([ [ 'goods_id', '=', $goods_id ] ])->delete();

                    // 新增规格
                    $goods_sku_model->create($sku_data);

                } else {

                    $goods_sku_model->where([ [ 'goods_id', '=', $goods_id ] ])->update($sku_data);

                    // 防止存在遗留规格项，删除旧规格
                    $goods_spec_model->where([ [ 'goods_id', '=', $goods_id ] ])->delete();
                }

            } elseif ($data[ 'spec_type' ] == 'multi') {

                // 多规格数据
                $first_sku_data = reset($data[ 'goods_sku_data' ]);

                // 商品正在参与营销活动，禁止修改规格
                if ($active_goods_count > 0 && empty($first_sku_data[ 'sku_id' ])) {
                    throw new AdminException('SHOP_GOODS_PARTICIPATE_IN_ACTIVE_DISABLED_EDIT');
                }

                // 检测规格项是否发生变化
                if (!empty($first_sku_data[ 'sku_id' ])) {
                    // 规格项没有变化，修改/新增规格数据

                    $sku_id_arr = [];
                    $default_spec_count = 0;
                    foreach ($data[ 'goods_sku_data' ] as $k => $v) {
                        $sku_spec_format = [];
                        foreach ($v[ 'sku_spec' ] as $ck => $cv) {
                            $sku_spec_format[] = $cv[ 'spec_value_name' ];
                        }
                        $sku_data = [
                            'site_id' => $this->site_id,
                            'sku_name' => $v[ 'spec_name' ],
                            'sku_image' => !empty($v[ 'sku_image' ]) ? $v[ 'sku_image' ] : $data[ 'goods_cover' ],
                            'sku_no' => $v[ 'sku_no' ],
                            'goods_id' => $goods_id,
                            'sku_spec_format' => implode(',', $sku_spec_format), // sku规格格式
                            'market_price' => $v[ 'market_price' ],
                            'cost_price' => $v[ 'cost_price' ],
                            'weight' => $v[ 'weight' ],
                            'volume' => $v[ 'volume' ],
                            'is_default' => $v[ 'is_default' ]
                        ];

                        // 未参与营销活动，则允许修改 原价、销售价
                        if ($active_goods_count == 0) {
                            $sku_data[ 'price' ] = $v[ 'price' ];
                            $sku_data[ 'sale_price' ] = $v[ 'price' ];
                            $sku_data[ 'stock' ] = $v[ 'stock' ];
                        }

                        if (!empty($v[ 'sku_id' ])) {
                            // 修改规格
                            $sku_id_arr[] = $v[ 'sku_id' ];
                            $goods_sku_model->where([ [ 'sku_id', '=', $v[ 'sku_id' ] ], [ 'goods_id', '=', $goods_id ] ])->update($sku_data);
                        } else {
                            // 新增规格
                            $sku_model = $goods_sku_model->create($sku_data);
                            $sku_id_arr[] = $sku_model->sku_id;
                        }
                        if ($v[ 'is_default' ] == 1) $default_spec_count++;
                    }

                    // 校验默认必须存在默认规格
                    if ($default_spec_count == 0) throw new AdminException('SHOP_GOODS_NOT_HAS_DEFAULT_SPEC');

                    $spec_id_list = $goods_spec_model->withSearch([ "goods_id" ], [ 'goods_id' => $goods_id ])->field('spec_id')->select()->toArray();
                    $spec_id_list = array_column($spec_id_list, 'spec_id');

                    // 商品规格值
                    foreach ($data[ 'goods_spec_format' ] as $k => $v) {
                        $spec_values = [];
                        foreach ($v[ 'values' ] as $ck => $cv) {
                            $spec_values[] = $cv[ 'spec_value_name' ];
                        }
                        $spec_data = [
                            'goods_id' => $goods_id,
                            'spec_name' => $v[ 'spec_name' ],
                            'spec_values' => implode(',', $spec_values)
                        ];
                        if (!empty($v[ 'spec_id' ])) {
                            // 修改规格值
                            $goods_spec_model->where([ [ 'goods_id', '=', $goods_id ], [ 'spec_id', '=', $v[ 'spec_id' ] ] ])->update($spec_data);
                            foreach ($spec_id_list as $ck => $cv) {
                                if ($v[ 'spec_id' ] == $cv) {
                                    unset($spec_id_list[ $ck ]);
                                }
                            }

                        } else {
                            // 添加规格值
                            $goods_spec_model->save($spec_data);
                        }
                    }

                    // 移除不存在的规格项
                    if (!empty($spec_id_list)) {
                        $goods_spec_model->where([ [ 'spec_id', 'in', implode(',', $spec_id_list) ] ])->delete();
                    }

                    // 移除不存在的商品SKU
                    $sku_id_list = $goods_sku_model->withSearch([ "goods_id" ], [ 'goods_id' => $goods_id ])->field('sku_id')->select()->toArray();
                    $sku_id_list = array_column($sku_id_list, 'sku_id');
                    foreach ($sku_id_list as $k => $v) {
                        foreach ($sku_id_arr as $ck => $cv) {
                            if ($v == $cv) {
                                unset($sku_id_list[ $k ]);
                            }
                        }
                    }
                    $sku_id_list = array_values($sku_id_list);

                    if (!empty($sku_id_list)) {

                        // 检测订单是否存在要删除的商品
                        $order_where = [
                            [ 'orderMain.status', 'in', [ OrderDict::NORMAL, OrderDict::WAIT_DELIVERY, OrderDict::WAIT_TAKE ] ], // 排除已完成、已关闭状态
                            [ 'goods_id', '=', $goods_id ],
                            [ 'sku_id', 'in', $sku_id_list ]
                        ];
                        $order_goods_count = $order_goods_model
                            ->withJoin([ 'orderMain' ])
                            ->where($order_where)->count();

                        if ($order_goods_count > 0) {
                            Db::rollback();
                            throw new CommonException('EXIST_ORDER_NOT_DELETE_GOODS');
                        }

                        $goods_sku_model->where([ [ 'sku_id', 'in', implode(',', $sku_id_list) ] ])->delete();
                    }

                } else {

                    // 检测订单是否存在要删除的商品
                    $order_where = [
                        [ 'orderMain.status', 'in', [ 1, 2, 3 ] ], // 排除已完成、已关闭状态
                        [ 'goods_id', '=', $goods_id ]
                    ];
                    $order_goods_count = $order_goods_model
                        ->withJoin([ 'orderMain' ])
                        ->where($order_where)->count();

                    if ($order_goods_count > 0) {
                        Db::rollback();
                        throw new CommonException('EXIST_ORDER_NOT_EDIT_GOODS');
                    }

                    // 规格项发生变化，删除旧规格，添加新规格重新生成
                    $goods_sku_model->where([ [ 'goods_id', '=', $goods_id ] ])->delete();
                    $goods_spec_model->where([ [ 'goods_id', '=', $goods_id ] ])->delete();

                    $default_spec_count = 0;
                    foreach ($data[ 'goods_sku_data' ] as $k => $v) {
                        $sku_spec_format = [];
                        foreach ($v[ 'sku_spec' ] as $ck => $cv) {
                            $sku_spec_format[] = $cv[ 'spec_value_name' ];
                        }
                        $sku_data[] = [
                            'site_id' => $this->site_id,
                            'sku_name' => $v[ 'spec_name' ],
                            'sku_image' => !empty($v[ 'sku_image' ]) ? $v[ 'sku_image' ] : $data[ 'goods_cover' ],
                            'sku_no' => $v[ 'sku_no' ],
                            'goods_id' => $goods_id,
                            'sku_spec_format' => implode(',', $sku_spec_format), // sku规格格式
                            'price' => $v[ 'price' ],
                            'sale_price' => $v[ 'price' ],
                            'market_price' => $v[ 'market_price' ],
                            'cost_price' => $v[ 'cost_price' ],
                            'stock' => $v[ 'stock' ],
                            'weight' => $v[ 'weight' ],
                            'volume' => $v[ 'volume' ],
                            'is_default' => $v[ 'is_default' ]
                        ];
                        if ($v[ 'is_default' ] == 1) $default_spec_count++;
                    }

                    // 校验默认必须存在默认规格
                    if ($default_spec_count == 0) throw new AdminException('SHOP_GOODS_NOT_HAS_DEFAULT_SPEC');

                    $goods_sku_model->saveAll($sku_data);

                    // 商品规格值
                    $spec_data = [];
                    foreach ($data[ 'goods_spec_format' ] as $k => $v) {
                        $spec_values = [];
                        foreach ($v[ 'values' ] as $ck => $cv) {
                            $spec_values[] = $cv[ 'spec_value_name' ];
                        }
                        $spec_data[] = [
                            'goods_id' => $goods_id,
                            'spec_name' => $v[ 'spec_name' ],
                            'spec_values' => implode(',', $spec_values)
                        ];
                    }
                    $goods_spec_model->saveAll($spec_data);

                }

            }

            Db::commit();

            event('AfterGoodsEdit', [
                'goods_id' => $goods_id,
                'goods_data' => $goods_data,
                'sku_data' => $sku_data
            ]);
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 删除商品
     * @param $goods_ids
     * @return bool
     */
    public function del($goods_ids)
    {
        // 查询商品参与营销活动的数量
        $active_goods_count = $this->getActiveGoodsCount($goods_ids);
        if ($active_goods_count > 0) {
            throw new AdminException('SHOP_GOODS_PARTICIPATE_IN_ACTIVE_DISABLED_EDIT');
        }

        // 删除之前下架商品
        $this->model->where([ [ 'goods_id', 'in', $goods_ids ], [ 'site_id', '=', $this->site_id ] ])->update([ 'status' => 0 ]);
        $res = $this->model::destroy(function($query) use ($goods_ids) {
            $query->where([ [ 'goods_id', 'in', $goods_ids ], [ 'site_id', '=', $this->site_id ] ]);
        });
        return $res;
    }

    /**
     * 恢复商品
     * @param $goods_ids
     * @return bool
     */
    public function recycle($goods_ids)
    {
        $res = $this->model->restore([ [ 'goods_id', 'in', $goods_ids ], [ 'site_id', '=', $this->site_id ] ]);
        return $res;
    }

    /**
     * 获取商品类型
     * @return array|mixed|string
     */
    public function getType()
    {
        return GoodsDict::getType();
    }

    /**
     * 修改商品排序号
     * @param array $data
     * @return Goods|bool
     */
    public function editSort($data)
    {
        return $this->model->where([ [ 'goods_id', '=', $data[ 'goods_id' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'sort' => $data[ 'sort' ] ]);
    }

    /**
     * 修改商品上下架状态
     * @param $data
     * @return Goods
     */
    public function editStatus($data)
    {
        if ($data[ 'status' ] == 0) {
            // 查询商品参与营销活动的数量
            $active_goods_count = $this->getActiveGoodsCount($data[ 'goods_ids' ]);
            if ($active_goods_count > 0) {
                throw new AdminException('SHOP_GOODS_PARTICIPATE_IN_ACTIVE_DISABLED_EDIT');
            }
        }
        // 如果 当前的site_id == 100005 才更新时间 否则 不更新时间
        if ($this->site_id == 100005) {
            return $this->model->where([ [ 'goods_id', 'in', $data[ 'goods_ids' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'status' => $data[ 'status' ] , 'update_time'=> time()    ]);
        }else{
            return $this->model->where([ [ 'goods_id', 'in', $data[ 'goods_ids' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'status' => $data[ 'status' ]     ]);
  
        }
          }

    /**
     * 复制商品
     * @param int $goods_id
     * @return mixed
     */
    public function copy(int $goods_id)
    {
        try {
            Db::startTrans();
            $goods_sku_model = new GoodsSku();
            $goods_spec_model = new GoodsSpec();

            // 查询商品信息
            $field = 'goods_name,site_id,sub_title,goods_type,goods_cover,goods_image,goods_desc,brand_id,goods_category,label_ids,service_ids,unit,stock,virtual_sale_num,status,sort,delivery_type,is_free_shipping,fee_type,delivery_money,delivery_template_id,supplier_id,attr_id,attr_format,virtual_auto_delivery,virtual_receive_type,virtual_verify_type,virtual_indate,poster_id';

            $goods_data = $this->model->field($field)->where([ [ 'goods_id', '=', $goods_id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty()->toArray();
            if (empty($goods_data)) {
                throw new AdminException('SHOP_GOODS_NOT_EXIST');
            }

            // 初始化数据
            $goods_data[ 'goods_name' ] .= '_副本';
            $goods_data[ 'sale_num' ] = 0;
            $goods_data[ 'create_time' ] = time();
            $goods_data[ 'sort' ] = 0;
            $goods_data[ 'status' ] = 0;

            // 获取商品最后一条的goods_id  通过 model中的  getLastGoodsId 方法完成
            $goods_data[ 'goods_no' ]  =  $this->model->getLastGoodsId()+10001;
          

            // 添加商品
            $res = $this->model->create($goods_data);

            // 查询商品规格信息
            $sku_field = 'sku_id,site_id,sku_name,sku_image,sku_no,goods_id,sku_spec_format,price,market_price,cost_price,stock,weight,volume,is_default';

            $sku_order = 'sku_id asc';
            $goods_sku_list = $goods_sku_model->withSearch([ "goods_id" ], [ 'goods_id' => $goods_id ])->field($sku_field)->order($sku_order)->select()->toArray();

            // 添加商品规格
            foreach ($goods_sku_list as $k => $v) {
                unset($goods_sku_list[ $k ][ 'sku_id' ]);
                $goods_sku_list[ $k ][ 'sale_num' ] = 0;
                $goods_sku_list[ $k ][ 'goods_id' ] = $res->goods_id;
            }
            $goods_sku_model->saveAll($goods_sku_list);

            // 查询规格值信息
            $spec_field = 'spec_id,goods_id,spec_name,spec_values';
            $spec_order = 'spec_id asc';
            $spec_list = $goods_spec_model->withSearch([ "goods_id" ], [ 'goods_id' => $goods_id ])->field($spec_field)->order($spec_order)->select()->toArray();

            // 添加规格项/值
            if (!empty($spec_list)) {
                foreach ($spec_list as $k => $v) {
                    unset($spec_list[ $k ][ 'spec_id' ]);
                    $spec_list[ $k ][ 'goods_id' ] = $res->goods_id;
                }
                $goods_spec_model->saveAll($spec_list);
            }

            Db::commit();
            return $res->goods_id;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 查询回收站商品分页列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getRecyclePage(array $where = [])
    {
        $field = 'goods_id,site_id,goods_name,goods_type,goods_cover,goods_category,unit,stock,sale_num,virtual_sale_num,status,create_time,update_time';
        $order = 'create_time desc';
        $sku_where = [
            [ 'goodsSku.is_default', '=', 1 ],
            [ 'goodsSku.site_id', '=', $this->site_id ]
        ];
        if (!empty($where[ 'order' ])) {
            $order = $where[ 'order' ] . ' ' . $where[ 'sort' ];
        }

        $search_model = $this->model->onlyTrashed()->withSearch([ "goods_id", "goods_name", "goods_type", "goods_category" ], $where)
            ->field($field)->withJoin([
                'goodsSku' => [ 'sku_id', 'sku_name', 'goods_id', 'price', 'stock' ],
            ])->where($sku_where)->order($order)->append([ 'goods_type_name', 'goods_edit_path', 'goods_cover_thumb_small' ]);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取商品选择分页列表
     * @param array $where
     * @return array
     */
    public function getSelectPage(array $where = [])
    {
        $field = 'site_id, goods_id, goods_name, goods_type, goods_cover,goods_image, stock,sub_title,goods_desc';

        $sku_where = [
            [ 'goodsSku.is_default', '=', 1 ],
            [ 'goods.site_id', '=', $this->site_id ],
            [ 'status', '=', 1 ]
        ];

        if (!empty($where[ 'keyword' ])) {
            $sku_where[] = [ 'goods_name|sub_title', 'like', '%' . $where[ 'keyword' ] . '%' ];
        }

        if (empty($where[ 'goods_ids' ])) {
            $sku_where[] = [ 'goods.stock', '>', 0 ];
        }
        if (!empty($where[ 'goods_ids' ])) {
            $sku_where[] = [ 'goods.goods_id', 'in', $where[ 'goods_ids' ] ];
        }

        $order = 'sort desc,create_time desc';

        $verify_goods_ids = [];

        // 检测商品id集合是否存在，移除不存在的商品id，纠正数据准确性
        if (!empty($where[ 'verify_goods_ids' ])) {
            $verify_goods_ids = $this->model->where([
                [ 'goods_id', 'in', $where[ 'verify_goods_ids' ] ]
            ])->field('goods_id')->select()->toArray();
        }

        $search_model = $this->model
            ->withSearch([ "goods_category", "goods_type" ], $where)
            ->field($field)
            ->withJoin([
                'goodsSku' => [ 'sku_id', 'sku_name', 'goods_id', 'price', 'stock', 'sku_spec_format' ],
            ])
            ->with([
                'skuList'
            ])
            ->where($sku_where)->order($order)->append([ 'goods_type_name', 'goods_cover_thumb_small', 'goods_cover_thumb_mid' ]);
        $list = $this->pageQuery($search_model);

        if (!empty($verify_goods_ids)) {
            $verify_goods_ids = array_column($verify_goods_ids, 'goods_id');
        }
        $list[ 'verify_goods_ids' ] = $verify_goods_ids;
        return $list;
    }

    /**
     * 获取商品选择分页列表
     * @param array $where
     * @return array
     */
    public function getSelectSku(array $where = [])
    {
        $field = 'site_id, goods_id, goods_name, goods_type, goods_cover, stock';

        $sku_where = [
            [ 'goodsSku.is_default', '=', 1 ],
            [ 'goods.site_id', '=', $this->site_id ],
            [ 'status', '=', 1 ],
            [ 'goods.stock', '>', 0 ]
        ];

        if (!empty($where[ 'keyword' ])) {
            $sku_where[] = [ 'goods_name|sub_title', 'like', '%' . $where[ 'keyword' ] . '%' ];
        }

        if (!empty($where[ 'goods_ids' ])) {
            $sku_where[] = [ 'goods.goods_id', 'in', $where[ 'goods_ids' ] ];
        }

        $order = 'sort desc,create_time desc';

        $list = $this->model
            ->withSearch([ "goods_category", "goods_type" ], $where)
            ->field($field)
            ->with([
                'skuList'
            ])
            ->withJoin([
                'goodsSku' => [ 'sku_id', 'sku_name', 'goods_id', 'price', 'stock', 'sku_spec_format' ],
            ])
            ->where($sku_where)->order($order)->append([ 'goods_type_name', 'goods_cover_thumb_small', 'goods_cover_thumb_mid' ])->select()->toArray();

        return $list;
    }

    /**
     * 查询商品SKU规格列表
     * @param $params
     * @return array
     */
    public function getSkuList($params)
    {
        $goods_sku_model = new GoodsSku();

        $field = 'sku_id, sku_name, sku_image,sku_no, goods_id, sku_spec_format, price, market_price, sale_price, cost_price, stock, weight, volume,member_price';
        $order = 'sku_id asc';
        $list = $goods_sku_model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ "goods_id" ], [ 'goods_id' => $params[ 'goods_id' ] ])->with([ 'goods' ])->field($field)->order($order)->select()->toArray();
        return $list;
    }

    /**
     * 商品数统计
     * @return int[]
     * @throws \think\db\exception\DbException
     */
    public function getGoodsCount()
    {
        $data = [
            "sale_goods_num" => 0, //销售
            "warehouse_goods_num" => 0, //仓库
        ];

        $data[ 'sale_goods_num' ] = $this->model->where([ [ 'status', '=', 1 ], [ 'site_id', '=', $this->site_id ] ])->count();
        $data[ 'warehouse_goods_num' ] = $this->model->where([ [ 'status', '=', 0 ], [ 'site_id', '=', $this->site_id ] ])->count();
        return $data;
    }

    /**
     * 编辑商品规格列表库存
     * @param $params
     * @return array|bool
     */
    public function editGoodsListStock($params)
    {
        try {
            Db::startTrans();

            $goods_info = $this->model->where([
                [ 'goods_id', '=', $params[ 'goods_id' ] ],
                [ 'site_id', '=', $this->site_id ]
            ])->field('goods_type')->findOrEmpty()->toArray();

            if (empty($goods_info)) {
                throw new CommonException('SHOP_GOODS_NOT_EXIST');
            }

            $sku_list = $params[ 'sku_list' ];
            if (!empty($sku_list)) {
                $goods_stock = 0; // 总库存
                $goods_sku_model = new GoodsSku();
                foreach ($sku_list as $k => $v) {
                    $goods_stock += (int) $v[ 'stock' ];

                    $update_data = [
                        'stock' => $v[ 'stock' ],
                    ];

                    $goods_sku_model->where([
                        [ 'goods_id', '=', $params[ 'goods_id' ] ],
                        [ 'sku_id', '=', $v[ 'sku_id' ] ]
                    ])->update($update_data);
                }
                $this->model->where([
                    [ 'goods_id', '=', $params[ 'goods_id' ] ]
                ])->update([
                    'stock' => $goods_stock,
                ]);
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 编辑商品规格列表价格
     * @param $params
     * @return array|bool
     */
    public function editGoodsListPrice($params)
    {
        try {
            Db::startTrans();

            $goods_info = $this->model->where([
                [ 'goods_id', '=', $params[ 'goods_id' ] ],
                [ 'site_id', '=', $this->site_id ]
            ])->field('goods_id,goods_type')->findOrEmpty()->toArray();

            if (empty($goods_info)) {
                throw new CommonException('SHOP_GOODS_NOT_EXIST');
            }

            // 查询商品参与营销活动的数量
            $active_goods_count = $this->getActiveGoodsCount($goods_info[ 'goods_id' ]);

            $sku_list = $params[ 'sku_list' ];
            if (!empty($sku_list)) {
                $goods_sku_model = new GoodsSku();
                foreach ($sku_list as $k => $v) {
                    $update_data = [
                        'cost_price' => $v[ 'cost_price' ],
                        'market_price' => $v[ 'market_price' ],
                    ];

                    if ($active_goods_count == 0) {
                        $update_data[ 'price' ] = $v[ 'price' ];
                        $update_data[ 'sale_price' ] = $v[ 'price' ];
                    }

                    $goods_sku_model->where([
                        [ 'goods_id', '=', $params[ 'goods_id' ] ],
                        [ 'sku_id', '=', $v[ 'sku_id' ] ]
                    ])->update($update_data);
                }
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 编辑商品规格列表会员价格
     * @param $params
     * @return array|bool
     */
    public function editGoodsListMemberPrice($params)
    {
        try {
            Db::startTrans();

            $goods_info = $this->model->where([
                [ 'goods_id', '=', $params[ 'goods_id' ] ],
                [ 'site_id', '=', $this->site_id ]
            ])->field('goods_type')->findOrEmpty()->toArray();

            if (empty($goods_info)) {
                throw new CommonException('SHOP_GOODS_NOT_EXIST');
            }

            // 修改商品的会员等级折扣
            $this->model->where([
                [ 'goods_id', '=', $params[ 'goods_id' ] ],
                [ 'site_id', '=', $this->site_id ]
            ])->update([
                'member_discount' => $params[ 'member_discount' ],
                'update_time' => time()
            ]);


            $sku_list = $params[ 'sku_list' ];
            if (!empty($sku_list)) {
                $goods_sku_model = new GoodsSku();
                foreach ($sku_list as $k => $v) {
                    // 如果 当前的站点是100005 则修改price的价格
                    if($this->site_id==100005){
                       $price =  $v['member_price']['level_1'];
                        // member_price 不变化 但是 price的价格 需要修改
                        // 判断price 是否 大于 0 并小于1000 则在会员价基础上 +100
                        // 判断price 是否 大于等于 1000 并小于5000 则在会员价基础上 +200
                        // 判断price 是否 大于等于 1000 并小于5000 则在会员价基础上 +300
                        if( $price > 0 && $price < 1000 ){
                           $price  = $price +100;
                        }elseif($price >=1000 && $price <5000){
                            $price = $price +200;
                        }elseif($price>=5000){
                            $price = $price+300;
                        }
                        $update_data = [
                            'member_price' => json_encode($v[ 'member_price' ]),
                            'price' => $price,
                            'sale_price' =>$v['member_price']['level_1'] 
                        ];
                       
                    }else{
                        $update_data = [
                            'member_price' => json_encode($v[ 'member_price' ]),
                        ];
                    }


                    $goods_sku_model->where([
                        [ 'goods_id', '=', $params[ 'goods_id' ] ],
                        [ 'sku_id', '=', $v[ 'sku_id' ] ]
                    ])->update($update_data);
                }
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage() . '，Line：' . $e->getLine() . '，File：' . $e->getFile());
        }
    }

    /**
     * 查询商品参与营销活动的数量
     * @param $goods_id
     * @return mixed
     */
    public function getActiveGoodsCount($goods_id)
    {
        $active_goods_model = new ActiveGoods();
        $field = 'active_goods_id,active_id';
        $active_condition = [
            [ 'site_id', '=', $this->site_id ],
            [ 'active_goods_status', '=', 'active' ],
            [ 'active_goods_type', 'in', [ ActiveDict::GOODS_SINGLE, ActiveDict::GOODS_INDEPENDENT ] ], // 单品活动、独立活动
        ];

        if (gettype($goods_id) == 'array') {
            $active_condition[] = [ 'goods_id', 'in', $goods_id ];
        } else {
            $active_condition[] = [ 'goods_id', '=', $goods_id ];
        }

        $active_goods_count = $active_goods_model->where($active_condition)->field($field)->with([
            'active' => function($query) {
                $query->withField('active_id,active_name, active_desc, start_time, end_time');
            }
        ])->count();
        return $active_goods_count;
    }

    // 一键同步 100005站点的商品 到当前站点
    public function syncGoodsList($siteId=null)
    {
        // 定义当前站点ID
        $siteId = $siteId ? $siteId : $this->site_id;
        //如果 当前站点ID为100005则直接返回
        if ($siteId == '100005') {
            return '不能同步自己的商品';
        }
        $sites = [ 100012];
        // 如果你$sites 中 没有有 当前的 $siteId  直接返回 无权限
        if (!in_array($siteId, $sites)) {
            return '没有权限';
        }
 

        // 查询站点100005的商品
        $list = $this->model->where('site_id', '=', '100005')->select()->toArray();
        
        $updateCount = 0;
        $syncCount = 0;
        
        if (!empty($list)) {
            foreach ($list as $goods) {
                // 去查询一下表中有没有当前站点ID的商品通过字段的 'goods_no' 来查询如果没有则插入如果有则更新
                $goods_no = $goods['goods_no'];
                $goods_info = $this->model->where([['goods_no', '=', $goods_no], ['site_id', '=', $siteId]])->find();
                
                
                if (empty($goods_info)) {
                    // 如果 这个商品的状态已经是 下架了直接 返回
                    if ($goods['status'] == 0) {
                        continue;
                    }
                    // 将站点ID设置为当前站点ID
                    $goods['site_id'] = $siteId;
                    $before_goods_id = $goods['goods_id'];
                    // 删除旧的商品ID字段
                    unset($goods['goods_id']);

                    // 将 $goods['category_id'] 里的值加 "" 例如 array_map(function($item) { return (string) $item; }, $data[ 'goods_category' ])
                    $goods['goods_category'] = array_map(function($item) { return (string) $item; }, $goods['goods_category']);
                    $goods['create_time'] = strtotime( $goods['create_time'] );
                    $goods['update_time'] = strtotime( $goods['update_time'] );
                    $goods['source']= '天泰通讯';
                    
                    // 保存商品数据，获取新生成的商品ID
                    $newGoods = $this->model->create($goods);
                    $newGoodsId = $newGoods['goods_id'];

                    
                    // 查询旧商品ID对应的SKU列表
                    $goodsSkuModel = new GoodsSku();
                    $skuList = $goodsSkuModel->where('goods_id', '=', $before_goods_id)->select()->toArray();
                    
                    // 遍历SKU列表，更新站点ID和商品ID
                    foreach ($skuList as &$sku) {
                        // 获取到 $sku['member_price'] 字段 为json 格式 转为数组
                        $sku['member_price'] = json_decode($sku['member_price'], true);
                        $sku['site_id'] = $siteId;
                        $sku['goods_id'] = $newGoodsId;
                        if( $sku['member_price']){
                            $sku['cost_price'] = $sku['member_price']['level_1'];
                        }else{
                            $sku['cost_price']=0;
                        }
                        unset($sku['sale_price']);
                        unset($sku['sku_id']);
                        unset($sku['member_price']);
                    }
                    // 批量插入更新后的SKU数据
                    $goodsSkuModel->insertAll($skuList);

                    // 查询一下 $before_goods_id 这个值在 new GoodsSpec 表里是否有这个商品ID 如果有这将这条数据 插入到 new GoodsSpec 表里 将 goods_id 替换为新的商品ID
                    $goodsSpecModel = new GoodsSpec();
                    $goodsSpec = $goodsSpecModel->where('goods_id', '=', $before_goods_id)->find();
                    //   $goodsSpec 为一条 数据 将goods_id 插入为新的商品ID 并把 spec_id 删除
                    if ($goodsSpec) {
                         $newGoodsSpec = $goodsSpec->toArray();
                         $newGoodsSpec['goods_id'] = $newGoodsId;
                         unset($newGoodsSpec['spec_id']);
                         $goodsSpecModel->insert($newGoodsSpec);
                    }

                    

                    
                    $syncCount++;
                } else {

                    //如果商品的状态不一样则进行更新 $goods['status'] 是参考的状态 $goods_info['status'] 是代理站点商品的状态
                    if($goods['status'] != $goods_info['status'] || $goods['stock'] !== $goods_info['stock'] ||  $goods['update_time'] !== $goods_info['update_time'] ){
                        // 进行更新只更新商品的状态及库存其他的保持不变
                        $update_goods['status'] = $goods['status'];
                        $update_goods['stock'] = $goods['stock'];
                        $update_goods['update_time'] = strtotime( $goods['update_time']);
                        $this->model->where('goods_no', '=', $goods_no)->update($update_goods);
                        
                        // 通过 goods_id 查询sku表后更新sku的库存
                        $goods_sku = new GoodsSku();
                        // 如果 100005的价格发生变化 那么 更新sku表
                        // $goods['goods_no'] 来查询 100005的sku表 中的 价格 
                        $goods_sku_info = $goods_sku->where('goods_id', '=', $goods['goods_id'])->find();
                        $goods_sku->where('goods_id', '=', $goods_info['goods_id'])->update(['stock' => $goods['stock'],'cost_price' => $goods_sku_info['sale_price' ] , 'price' => $goods_sku_info['price'] ]);
                        
                        $updateCount++;
                    }
                }
            }
        }
        
        return "更新成功: $updateCount 条， 同步成功: $syncCount 条";
    }
 




}
