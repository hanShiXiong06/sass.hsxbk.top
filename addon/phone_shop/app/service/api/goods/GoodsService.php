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

namespace addon\phone_shop\app\service\api\goods;

use addon\phone_shop\app\model\coupon\CouponGoods;
use addon\phone_shop\app\model\goods\Brand;
use addon\phone_shop\app\model\goods\Goods;
use addon\phone_shop\app\model\goods\GoodsCollect;
use addon\phone_shop\app\model\goods\Label;
use addon\phone_shop\app\model\goods\Service;
use addon\phone_shop\app\model\goods\GoodsSku;
use addon\phone_shop\app\service\api\marketing\DiscountService;
use app\model\member\Member;
use addon\phone_shop\app\model\site\Site;
use core\base\BaseApiService;

/**
 *  商品服务层
 */
class GoodsService extends BaseApiService
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
        $field = 'site_id,goods_id,goods_name,sub_title,goods_category,goods_type,goods_cover,unit,status,sale_num + goods.virtual_sale_num as sale_num,member_discount,is_discount,create_time,virtual_receive_type';

       
        if( $where['status'] == 'all' ){
            // $sku_where 删除 status
            $sku_where = [
                [ 'goodsSku.is_default', '=', 1 ],
                [ 'goods.site_id', '=', $this->site_id ],
            ];
        }else{
            $sku_where = [
                [ 'goodsSku.is_default', '=', 1 ],
                [ 'goods.site_id', '=', $this->site_id ],
                [ 'status', '=', 1 ]
            ];
        }

        // 添加时间范围过滤
        if (!empty($where['create_time']) && is_array($where['create_time'])) {
            $start_time = intval($where['create_time'][0]);
            $end_time = intval($where['create_time'][1]);
            trace('时间范围过滤：' . json_encode([
                '开始时间' => date('Y-m-d H:i:s', $start_time),
                '结束时间' => date('Y-m-d H:i:s', $end_time)
            ], JSON_UNESCAPED_UNICODE), 'debug');
            $sku_where[] = ['goods.create_time', 'between', [$start_time, $end_time]];
        }

        if (!empty($where[ 'keyword' ])) {
            // 如果 keyword中 开头是 # 则说明要通过sku_no 进行查询否则模糊查询
            if (strpos($where[ 'keyword' ], '#') === 0) {
                $sku_where[] = [ 'goodsSku.sku_no', 'like', '%' . substr($where[ 'keyword' ], 1) . '%' ];
            } else {
                $sku_where[] = [ 'goods_name|sub_title', 'like', '%' . $where[ 'keyword' ]. '%' ];
            }
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

        // 查询优惠券包括的id
        if (!empty($where[ 'coupon_id' ])) {
            $coupon_goods_model = new CouponGoods();
            $coupon_list = $coupon_goods_model->where([
                [ 'coupon_id', '=', $where[ 'coupon_id' ] ]
            ])->field('goods_id,category_id')->select()->toArray();
            if (!empty($coupon_list)) {
                $goods_ids = array_values(array_filter(array_column($coupon_list, 'goods_id')));
                $category_ids = array_values(array_filter(array_column($coupon_list, 'category_id')));
                if (!empty($goods_ids)) {
                    $sku_where[] = [ 'goods.goods_id', 'in', $goods_ids ];
                } elseif (!empty($category_ids)) {
                    $like_arr = [];
                    foreach ($category_ids as $k => $v) {
                        $like_arr[] = "%" . $v . "%";
                    }
                    $sku_where[] = [ 'goods_category', "like", $like_arr, 'or' ];
                }
            }
        }

        // 参数过滤
        if (!empty($where[ 'order' ]) && in_array($where[ 'order' ], [ 'sale_num', 'price' ])) {
            $order = 'goods_category desc '.$where[ 'order' ] . ' ' . $where[ 'sort' ];
        } else {
            $order = 'sort desc,create_time desc';
        }

        $search_model = $this->model
            ->withSearch([ "brand_id", "goods_category", "label_ids", 'service_ids' ], $where)
            ->field($field)
            ->withJoin([ 'goodsSku' ])
            ->where($sku_where)->order($order)->append([ 'goods_type_name', 'goods_cover_thumb_small', 'goods_cover_thumb_mid' ]);

        // 输出SQL语句和查询条件
        $debug_info = [
            'SQL' => $search_model->buildSql(),
            '查询条件' => $sku_where,
            '时间范围' => $where['create_time_range'] ?? null
        ];
        trace('商品查询调试信息：' . json_encode($debug_info, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), 'debug');
        
        $list = $this->pageQuery($search_model);
        if (!empty($this->member_id)) {
            $member_info = $this->getMemberInfo();
            foreach ($list[ 'data' ] as $k => &$v) {
                if (!empty($v[ 'goodsSku' ])) {
                    $v[ 'goodsSku' ][ 'member_price' ] = $this->getMemberPrice($member_info, $v[ 'member_discount' ], $v[ 'goodsSku' ][ 'member_price' ], $v[ 'goodsSku' ][ 'price' ]);
                }
            }
        }
        return $list;
    }

    /**
     * 获取商品详情
     * @param array $data
     * @return array
     */
    public function getDetail(array $data)
    {
        $sku_id = $data[ 'sku_id' ];
        $goods_id = $data[ 'goods_id' ];

        $goods_sku_model = new GoodsSku();

        if (empty($sku_id) && !empty($goods_id)) {
            // 查询默认规格项
            $default_sku_info = $goods_sku_model->where([ [ 'goods_id', '=', $goods_id ], [ 'site_id', 'in', "{$this->site_id},100005" ], [ 'is_default', '=', 1 ] ], 'sku_id')
                ->field('sku_id')->findOrEmpty()->toArray();
            if (!empty($default_sku_info)) {
                $sku_id = $default_sku_info[ 'sku_id' ];
            }
        }

        $field = 'sku_id, sku_name, sku_image, sku_no, goods_id, site_id, sku_spec_format, price, market_price, sale_price, stock, weight, volume, sale_num, is_default,member_price';

        $info = $goods_sku_model->where([ [ 'sku_id', '=', $sku_id ], [ 'site_id', 'in', "{$this->site_id},100005" ] ])
            ->field($field)
            ->with([
                'goods' => function($query) {
                    $query->withField('goods_id, site_id, goods_name, goods_type, sub_title, goods_cover, goods_category, goods_image,goods_desc,brand_id,label_ids,service_ids, unit, stock, sale_num + virtual_sale_num as sale_num, status,delivery_type,attr_id,attr_format,member_discount,is_discount,poster_id,virtual_receive_type')
                        ->append([ 'goods_type_name', 'goods_cover_thumb_small', 'goods_cover_thumb_mid', 'goods_cover_thumb_big', 'delivery_type_list', 'goods_image_thumb_small', 'goods_image_thumb_mid', 'goods_image_thumb_big' ]);
                },
                // 商品规格列表
                'skuList' => function($query) {
                    $query->field('sku_id, site_id, sku_name, sku_image, sku_no, goods_id, sku_spec_format, price, market_price, sale_price, stock, weight, volume, is_default,member_price');
                },
                // 商品规格项/规格值列表
                'goodsSpec' => function($query) {
                    $query->field('spec_id, goods_id, spec_name, spec_values');
                },
            ])
            ->append([ 'sku_image_thumb_small', 'sku_image_thumb_mid', 'sku_image_thumb_big' ])
            ->findOrEmpty()->toArray();

        if (!empty($info) && !empty($info[ 'goods' ])) {
            if (!empty($info[ 'goods' ][ 'service_ids' ])) {
                // 商品服务
                $goods_service_model = new Service();
                $info[ 'service' ] = $goods_service_model->where([
                    [ 'site_id', 'in', "{$this->site_id},100005" ],
                    [ 'service_id', 'in', $info[ 'goods' ][ 'service_ids' ] ]
                ])->field('service_id, service_name, image, desc')
                    ->select()->toArray();
            }
            if (!empty($info[ 'goods' ][ 'label_ids' ])) {
                // 商品标签
                $goods_label_model = new Label();
                $info[ 'label_info' ] = $goods_label_model->where([
                    [ 'site_id', 'in', "{$this->site_id},100005" ],
                    [ 'label_id', 'in', $info[ 'goods' ][ 'label_ids' ] ]
                ])->field('label_id, label_name, memo')
                    ->order('sort desc,create_time desc')->select()->toArray();
            }
            if (!empty($info[ 'goods' ][ 'brand_id' ])) {
                // 商品牌
                $goods_brand_model = new Brand();
                $info[ 'brand_info' ] = $goods_brand_model->where([
                    [ 'site_id', 'in', "{$this->site_id},100005" ],
                    [ 'brand_id', '=', $info[ 'goods' ][ 'brand_id' ] ]
                ])->field('brand_id, brand_name, logo, desc')
                    ->order('sort desc,create_time desc')
                    ->findOrEmpty()->toArray();
            }

            // 参与限时折扣，查询活动信息
            if ($info[ 'goods' ][ 'is_discount' ] == 1) {
                $discount_service = new DiscountService();
                $info[ 'discount_info' ] = $discount_service->getInfoByGoods($info[ 'goods_id' ]);
                if (!empty($info[ 'discount_info' ])) {
                    $info[ 'discount_info' ][ 'active' ][ 'start_time' ] = strtotime($info[ 'discount_info' ][ 'active' ][ 'start_time' ]);
                    $info[ 'discount_info' ][ 'active' ][ 'end_time' ] = strtotime($info[ 'discount_info' ][ 'active' ][ 'end_time' ]);
                }
            }

            if (!empty($this->member_id)) {
                $goods_collect_model = new GoodsCollect();
                $collect_info = $goods_collect_model->where([ [ 'site_id', 'in', "{$this->site_id},100005" ], [ 'member_id', '=', $this->member_id ], [ 'goods_id', '=', $info[ 'goods_id' ] ] ])->findOrEmpty()->toArray();
                if (!empty($collect_info)) {
                    $info[ 'goods' ][ 'is_collect' ] = 1;
                } else {
                    $info[ 'goods' ][ 'is_collect' ] = 0;
                }

                // 查询会员价
                $member_info = $this->getMemberInfo();
                $info[ 'member_price' ] = $this->getMemberPrice($member_info, $info[ 'goods' ][ 'member_discount' ], $info[ 'member_price' ], $info[ 'price' ]);

                $this->getMemberPriceByList($member_info, $info[ 'goods' ][ 'member_discount' ], $info[ 'skuList' ]);

            } else {
                $info[ 'goods' ][ 'is_collect' ] = 0;
                $info[ 'member_price' ] = $info[ 'price' ];
                foreach ($info[ 'skuList' ] as &$v) {
                    $v[ 'member_price' ] = $info[ 'price' ];
                }
            }
        }
        return $info;
    }

    /**
     * 获取商品规格信息，切换规格
     * @param int $sku_id
     * @return array
     */
    public function getSku(int $sku_id)
    {

        $field = 'site_id,sku_id, sku_name, sku_image, sku_no, goods_id, sku_spec_format, price, market_price, sale_price, stock, weight, volume, sale_num, is_default,member_price';

        $goods_sku_model = new GoodsSku();

        $info = $goods_sku_model->where([ [ 'site_id', 'in', "{$this->site_id},100005" ], [ 'sku_id', '=', $sku_id ] ])
            ->field($field)
            ->with([
                // 商品主表
                'goods' => function($query) {
                    $query->withField('goods_id, goods_name, goods_type, sub_title, goods_cover, unit, stock, sale_num + virtual_sale_num as sale_num, status,member_discount,is_discount')
                        ->append([ 'goods_type_name', 'goods_cover_thumb_small', 'goods_cover_thumb_mid', 'goods_cover_thumb_big' ]);
                },
                // 商品规格列表
                'skuList' => function($query) {
                    $query->field('site_id, sku_id, sku_name, sku_image, sku_no, goods_id, sku_spec_format, price, market_price, sale_price, stock, weight, volume, is_default,member_price');
                },
                // 商品规格项/规格值列表
                'goodsSpec' => function($query) {
                    $query->field('spec_id, goods_id, spec_name, spec_values');
                },
            ])
            ->append([ 'sku_image_thumb_small', 'sku_image_thumb_mid', 'sku_image_thumb_big' ])
            ->findOrEmpty()->toArray();
        if (!empty($this->member_id)) {
            $member_info = $this->getMemberInfo();

            $info[ 'member_price' ] = $this->getMemberPrice($member_info, $info[ 'goods' ][ 'member_discount' ], $info[ 'member_price' ], $info[ 'price' ]);

            $this->getMemberPriceByList($member_info, $info[ 'goods' ][ 'member_discount' ], $info[ 'skuList' ]);

        }

        return $info;
    }

    /**
     * 获取商品列表供组件调用
     * @param array $where
     * @return array
     */
    public function getGoodsComponents(array $where = [])
    {
        $field = 'goods_id,site_id,goods_name,sub_title,goods_category,goods_type,goods_cover,unit,status,sale_num + goods.virtual_sale_num as sale_num,member_discount,is_discount';

        $sku_where = [
            [ 'goodsSku.is_default', '=', 1 ],
            [ 'goodsSku.site_id', '=', $this->site_id ],
            [ 'status', '=', 1 ]
        ];

        if (!empty($where[ 'goods_ids' ])) {
            $sku_where[] = [ 'goods.goods_id', 'in', $where[ 'goods_ids' ] ];
        }

        // 参数过滤
        if (!empty($where[ 'order' ]) && in_array($where[ 'order' ], [ 'sale_num', 'price' ])) {
            $order = $where[ 'order' ] . ' desc';
        } else {
            $order = 'sort desc,create_time desc';
        }

        $list = $this->model
            ->withSearch([ "goods_category", "label_ids", 'service_ids' ], $where)
            ->field($field)
            ->withJoin([ 'goodsSku' ])
            ->where($sku_where)->order($order)->append([ 'goods_type_name', 'goods_cover_thumb_small', 'goods_cover_thumb_mid' ])
            ->limit($where[ 'num' ])
            ->select()->toArray();
        if (!empty($this->member_id)) {
            $member_info = $this->getMemberInfo();
            foreach ($list as $k => &$v) {
                if (!empty($v[ 'goodsSku' ])) {
                    $v[ 'goodsSku' ][ 'member_price' ] = $this->getMemberPrice($member_info, $v[ 'member_discount' ], $v[ 'goodsSku' ][ 'member_price' ], $v[ 'goodsSku' ][ 'price' ]);
                }
            }
        }
        return $list;
    }

    public function getMemberInfo()
    {
        $member_model = new Member();
        $member_field = 'member_level';
        $member_info = $member_model->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'member_id', '=', $this->member_id ]
        ])->field($member_field)
            ->with([
                // 会员等级
                'memberLevelData' => function($query) {
                    $query->field('level_id, site_id, level_name, status, level_benefits, level_gifts');
                },
            ])
            ->findOrEmpty()->toArray();
        return $member_info;
    }

    /**
     * 查询商品的员价
     * @param $member_info
     * @param string $member_discount 会员等级折扣，不参与：空，会员折扣：discount，指定会员价：fixed_price
     * @param string $member_price 会员价，json格式，指定会员价，数据结构为：{"level_12":"92.00","level_13":"72.00","level_14":"66.00","level_15":"45.00"}
     * @param $price
     * @return int|string
     */
    public function getMemberPrice($member_info, $member_discount, $member_price, $price)
    {
        if (empty($member_discount)) {
            return $price;
        }

        // 未找到会员，排除
        if (empty($member_info)) {
            return $price;
        }

        // 没有会员等级，排除
        if (!empty($member_info) && empty($member_info[ 'member_level' ])) {
            return $price;
        }

        if ($member_discount == 'discount') {
            // 按照会员等级折扣计算

            // 默认按会员享受折扣计算
            if (!empty($member_info[ 'memberLevelData' ][ 'level_benefits' ])
                && !empty($member_info[ 'memberLevelData' ][ 'level_benefits' ][ 'discount' ])
                && !empty($member_info[ 'memberLevelData' ][ 'level_benefits' ][ 'discount' ][ 'is_use' ])) {

                $price = number_format($price * $member_info[ 'memberLevelData' ][ 'level_benefits' ][ 'discount' ][ 'discount' ] / 10, 2, '.', '');
            }

        } elseif ($member_discount == 'fixed_price') {
            // 指定会员价
            if (!empty($member_price)) {
                $member_price = json_decode($member_price, true);
                if (!empty($member_price[ 'level_' . $member_info[ 'member_level' ] ])) {
                    $member_level_price = $member_price[ 'level_' . $member_info[ 'member_level' ] ];
                    $price = number_format($member_level_price, 2, '.', '');
                }
            }
        }

        return $price;

    }

    /**
     * 查询商品的会员价
     * @param $member_infowx20120555b35b6174
     * @param string $member_discount 会员等级折扣，不参与：空，会员折扣：discount，指定会员价：fixed_price
     * @param $sku_list
     * @return int
     */
    public function getMemberPriceByList($member_info, $member_discount, &$sku_list)
    {

        // 是否按照原价回
        $is_default = false;

        if (empty($member_discount)) {
            $is_default = true;
        }

        // 未找到会员，排除
        if (empty($member_info)) {
            $is_default = true;
        }

        // 没有会���等级，排除
        if (!empty($member_info) && empty($member_info[ 'member_level' ])) {
            $is_default = true;
        }

        foreach ($sku_list as $k => &$v) {

            // $v[ 'member_price' ] = $v[ 'price' ];
            if ($is_default) {
                $v[ 'member_price' ] = $v[ 'price' ];
            } else {
                if ($member_discount == 'discount') {
                    // 按照会员等级折扣计算

                    // 默认按会员享受折扣计算
                    if (!empty($member_info[ 'memberLevelData' ][ 'level_benefits' ])
                        && !empty($member_info[ 'memberLevelData' ][ 'level_benefits' ][ 'discount' ])
                        && !empty($member_info[ 'memberLevelData' ][ 'level_benefits' ][ 'discount' ][ 'is_use' ])) {
                        $v[ 'member_price' ] = number_format($v[ 'price' ] * $member_info[ 'memberLevelData' ][ 'level_benefits' ][ 'discount' ][ 'discount' ] / 10, 2, '.', '');
                    }

                } elseif ($member_discount == 'fixed_price') {
                    // 指定会员价
                    if (!empty($v[ 'member_price' ])) {
                        $member_price = json_decode($v[ 'member_price' ], true); // 会员价，json格式，指定会员价
                        // var_dump($member_price);
                        if (!empty($member_price[ 'level_' . $member_info[ 'member_level' ] ])) {
                            $member_level_price = $member_price[ 'level_' . $member_info[ 'member_level' ] ];
                            $v[ 'member_price' ] = number_format($member_level_price, 2, '.', '');
                        } else {
                            $v[ 'member_price' ] = $v[ 'price' ];
                        }
                    }
                }
            }
        }

        return $sku_list;

    }

    /**
     * operationGoods
     * 操作商品的上架
     * 参数是 goods_id
     * @param $goods_id
     * @return array
    */
    public function operationGoods($data)
    {
        $goods_id = $data[ 'goods_id' ];
       
        if (empty($goods_id)) {
            return error('', '请选择商品');
        }
        // 查询 goods_id 的状态 
        $field = 'status' ;
        $goods_info = $this->model->where('goods_id','=',$goods_id)->field($field)->find()->toArray();
        $this->model->where(  'goods_id' , "=" , $goods_id)-> update( [ 'status' => !$goods_info['status']]);
        return true;
    }

}
