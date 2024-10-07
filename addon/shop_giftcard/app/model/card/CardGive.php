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

namespace addon\shop_giftcard\app\model\card;

use addon\shop_giftcard\app\dict\card\GiveDict;
use app\model\member\Member;
use core\base\BaseModel;

/**
 * 礼品卡赠予模型
 * Class CardGive
 * @package addon\shop_giftcard\app\model\card
 */
class CardGive extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'give_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'shop_giftcard_give';

    /**
     * 状态字段转化
     * @param $value
     * @param $data
     * @return mixed
     */
    public function getStatusNameAttr($value, $data)
    {
        if (!empty($data[ 'status' ])) {
            return GiveDict::getStatusList($data[ 'status' ]) ?? '';
        }
        return '';
    }

    /**
     * 搜索器:礼品卡赠予赠予id
     * @param $value
     * @param $data
     */
    public function searchGiveIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("give_id", $value);
        }
    }

    /**
     * 搜索器:礼品卡赠予卡id
     * @param $value
     * @param $data
     */
    public function searchCardIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("card_id", $value);
        }
    }

    /**
     * 搜索器:礼品卡赠予会员id
     * @param $value
     * @param $data
     */
    public function searchMemberIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("member_id", $value);
        }
    }

    /**
     * 搜索器:礼品卡赠予赠予的卡id
     * @param $value
     * @param $data
     */
    public function searchMemberCardIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("member_card_id", $value);
        }
    }

    /**
     * 搜索器:礼品卡赠予要给予的会员id
     * @param $value
     * @param $data
     */
    public function searchToMemberIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("to_member_id", $value);
        }
    }

    /**
     * 搜索器:礼品卡赠予状态
     * @param $value
     * @param $data
     */
    public function searchStatusAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("status", $value);
        }
    }

    /**
     * 搜索器:礼品卡赠予领取时间
     * @param $value
     * @param $data
     */
    public function searchGetTimeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("get_time", $value);
        }
    }

    /**
     * 关联会员
     * @return \think\model\relation\hasOne
     */
    public function member()
    {
        return $this->hasOne(Member::class, 'member_id', 'member_id')
            ->joinType('left')
            ->withField('member_id, nickname,headimg');
    }

}
