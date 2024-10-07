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

namespace addon\shop_giftcard\app\service\api\card;

use addon\shop\app\model\goods\Goods;
use addon\shop\app\model\goods\GoodsSku;
use addon\shop_giftcard\app\dict\card\CardDict;
use addon\shop_giftcard\app\dict\giftcard\GiftcardDict;
use addon\shop_giftcard\app\model\card\Card;
use addon\shop_giftcard\app\service\core\card\CoreCardService;
use core\base\BaseApiService;
use core\exception\ApiException;
use think\facade\Db;

/**
 * 礼品卡获取服务层
 * Class CardService
 * @package addon\shop_giftcard\app\service\api\card
 */
class CardService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Card();
    }

    /**
     * 获取卡列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'card_id,giftcard_id,source,card_no,card_cover,balance,status,validity_time,total_num,use_num,create_time,use_time,activate_time,invalid_time';
        $order = Db::raw('FIELD(status, "' . CardDict::TO_USE . '","' . CardDict::CAN_USE . '","' . CardDict::USED . '","' . CardDict::INVALID . '"), card_id desc,activate_time desc,create_time desc');

        $search_model = $this->model->where([
            [ 'site_id', "=", $this->site_id ],
            [ 'member_id', '=', $this->member_id ]
        ])->withSearch([ "giftcard_id", "order_id", "card_no", 'status' ], $where)->field($field)
            ->with([ 'giftcard' => function($query) {
                $query->withTrashed()->field('card_price,balance_json');
            } ])
            ->append([ 'source_name', 'status_name' ])
            ->order($order);
        $list = $this->pageQuery($search_model);
        foreach ($list[ 'data' ] as &$val) {
            if ($val[ 'giftcard' ][ 'card_right_type' ] == GiftcardDict::cardRightTypeBalance) {
                $balance_array = array_column($val[ 'giftcard' ][ 'balance_json' ], null, 'balance');
                $val[ 'giftcard' ][ 'card_price' ] = $balance_array[ $val[ 'balance' ] ][ 'price' ];
            }
        }
        return $list;
    }

    /**
     * 获取卡的状态列表
     * @return array|mixed
     */
    public function getStatusList()
    {
        return CardDict::getStatusListByWap();
    }

    /**
     * 获取卡信息
     * @param int $card_id
     * @return array
     */
    public function getInfo($card_id)
    {
        $field = 'card_id,giftcard_id,source,card_no,card_key,card_cover,balance,card_make_id,status,member_id,validity_time,total_num,use_num,create_time,use_time,activate_time,invalid_time';
        $card_info = $this->model->field($field)->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'card_id', "=", $card_id ]
        ])->append([ 'source_name', 'status_name' ])
            ->with([ 'giftcard' => function($query) {
                $query->withTrashed()->field('blessing_json');
            } ])->findOrEmpty()->toArray();
        if (!empty($card_info)) {
            return $card_info;
        } else {
            throw new ApiException('CARD_NOT_FOUND');
        }
    }

    /**
     * 获取卡详情
     * @param int $card_id
     * @return array
     */
    public function getDetail($card_id)
    {
        $field = 'card_id,giftcard_id,source,card_no,card_key,card_cover,balance,card_make_id,status,member_id,validity_time,total_num,use_num,create_time,use_time,activate_time,invalid_time';
        $card_info = $this->model->field($field)->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'card_id', "=", $card_id ]
        ])->append([ 'source_name', 'status_name' ])
            ->with([ 'giftcard' => function($query) {
                $query->withTrashed()->field('card_price,balance_json,card_desc,instruction');
            }, 'cardGoods' ])->findOrEmpty()->toArray();
        if (!empty($card_info)) {
            if ($card_info[ 'giftcard' ][ 'card_right_type' ] == GiftcardDict::cardRightTypeBalance) {
                $balance_array = array_column($card_info[ 'giftcard' ][ 'balance_json' ], null, 'balance');
                $card_info[ 'giftcard' ][ 'card_price' ] = $balance_array[ $card_info[ 'balance' ] ][ 'price' ];
            }
            if ($card_info[ 'giftcard' ][ 'card_right_type' ] == GiftcardDict::cardRightTypeGoods) {
                // 查询礼品卡关联的商品列表
                $goods_sku_model = new GoodsSku();
                $goods_model = new Goods();
                if (!empty($card_info[ 'cardGoods' ])) {
                    foreach ($card_info[ 'cardGoods' ] as &$val) {
                        $val[ 'stock' ] = $goods_sku_model->where([ [ 'sku_id', "=", $val[ 'sku_id' ] ] ])->value('stock');
                        $val[ 'status' ] = $goods_model->where([ [ 'goods_id', "=", $val[ 'goods_id' ] ] ])->value('status');
                    }
                }
            }
            return $card_info;
        } else {
            throw new ApiException('CARD_NOT_FOUND');
        }
    }

    /**
     * 激活实体礼品卡
     * @param $params
     * @return mixed
     */
    public function activateRealCard($params)
    {
        return ( new CoreCardService() )->activateRealCard([
            'site_id' => $this->site_id,
            'member_id' => $this->member_id,
            'card_no' => $params[ 'card_no' ],
            'card_key' => $params[ 'card_key' ]
        ]);
    }

    /**
     * 修改实体礼品卡的封面图片
     * @param $params
     * @return bool
     */
    public function modifyRealCardCover($params)
    {
        $data = [
            'card_cover' => $params[ 'card_cover' ]
        ];
        $this->model->where([ [ 'site_id', '=', $this->site_id ], [ 'card_id', "=", $params[ 'card_id' ] ] ])->update($data);
        return true;
    }

    /**
     * 更新礼品卡状态
     * @return bool
     */
    public function editStatus($id, array $data)
    {
        ( new CoreCardService() )->editStatus($this->site_id, $id, $data);
        return true;
    }

    /**
     * 更新礼品卡使用次数
     * @return bool
     */
    public function editUseNum($id, array $data)
    {
        ( new CoreCardService() )->editUseNum($this->site_id, $id, $data);
        return true;
    }

}
