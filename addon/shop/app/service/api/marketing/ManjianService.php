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

namespace addon\shop\app\service\api\marketing;

use addon\shop\app\dict\active\ManjianDict;
use addon\shop\app\model\coupon\Coupon;
use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\manjian\Manjian;
use app\model\member\Member;
use core\base\BaseApiService;

/**
 * 满减送服务层
 * Class DiscountService
 * @package addon\shop\app\service\api\marketing
 */
class ManjianService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Manjian();
    }

    /**
     * 获取满减信息
     * @param $site_id
     * @param $member_id
     * @param $goods_id
     * @return array
     */
    public function getManjianInfo($site_id, $member_id, $goods_id)
    {
        $condition = [
            [ 'site_id', '=', $site_id ],
            [ 'status', '=', ManjianDict::ACTIVE ],
            [ 'end_time', '>', time() ],
            [ 'goods_type', '=', ManjianDict::ALL_GOODS ]
        ];
        $field = 'manjian_id,site_id,manjian_name,condition_type,goods_type,join_member_type,level_ids,label_ids,goods_ids,status,start_time,end_time,rule_type,rule_json';
        $order = 'create_time desc';
        $first_info =  $this->getInfo($field,$condition,$order);
        if (empty($first_info)){
            $condition = [
                [ 'site_id', '=', $site_id ],
                [ 'status', '=', ManjianDict::ACTIVE ],
                [ 'end_time', '>', time() ],
                [ 'goods_type', '=', ManjianDict::SELECTED_GOODS_NOT],
                [ 'goods_ids', 'like', [ '%"' . $goods_id . '"%']]
            ];
            $first_info =  $this->getInfo($field,$condition,$order);
            if (empty($first_info)){
                $condition = [
                    [ 'site_id', '=', $site_id ],
                    [ 'status', '=', ManjianDict::ACTIVE ],
                    [ 'end_time', '>', time() ],
                    [ 'goods_type', '=', ManjianDict::SELECTED_GOODS],
                    [ 'goods_ids', 'like', [ '%"' . $goods_id . '"%']]
                ];
                $first_info =  $this->getInfo($field,$condition,$order);
            }else{
                return [];
            }
        }
        if(empty($first_info)){
            return [];
        }

        //当前会员是否可参加活动
        switch ($first_info['join_member_type']){
            case ManjianDict::ALL_MEMBER:
                return $first_info;
                break;
            case ManjianDict::SELECTED_MEMBER_LEVEL:
                $member_level = ( new Member() )->where([[ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $member_id ] ])->value('member_level');
                if (!in_array($member_level,$first_info['level_ids'])){
                    return [];
                }
                break;
            case ManjianDict::SELECTED_MEMBER_LABEL:
                $member_label = ( new Member() )->where([[ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $member_id ] ])->value('member_label')??[];
                $label_ids_intersect = array_intersect($member_label,$first_info['label_ids']);
                if (empty($label_ids_intersect)){
                    return [];
                }
                break;
        }

        if (!empty($first_info)) {
            $rule = $first_info[ 'rule_json' ];
            foreach ($rule as $key => $item) {
                if (isset($item[ 'coupon' ]) && !empty($item[ 'coupon' ])) {
                    $coupon = (new Coupon())->field('title,price,min_condition_money')->where([[ 'site_id', '=', $this->site_id ],[ 'id', 'in', $item[ 'coupon' ]]])->select()->toArray();
                    $rule[ $key ][ 'coupon_num' ] = empty($item[ 'coupon_num' ]) ? [ 1 ] : explode(',', $item[ 'coupon_num' ]);
                    $rule[ $key ][ 'coupon_data' ] = $coupon;
                }
                if (isset($item[ 'goods' ]) && !empty($item[ 'goods' ])) {
                    $coupon = (new Goods())->field('goods_name')->where([[ 'site_id', '=', $this->site_id ],[ 'goods_id', 'in', $item[ 'goods' ]]])->select()->toArray();
                    $rule[ $key ][ 'goods_num' ] = empty($item[ 'goods_num' ]) ? [ 1 ] : explode(',', $item[ 'goods_num' ]);
                    $rule[ $key ][ 'goods_data' ] = $coupon;
                }
            }
            $first_info[ 'rule_json' ] = $rule;
        }

        return $first_info;

    }

    /**
     * 获取满减表信息
     * @param $field
     * @param $condition
     * @param $order
     * @return array
     */
    protected function getInfo($field,$condition,$order)
    {
        $info = $this->model->field($field)->where($condition)->order($order)->findOrEmpty()->toArray();
        return $info;
    }

}
