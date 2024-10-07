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

namespace addon\shop_giftcard\app\dict\card;

/**
 * 礼品卡赠予
 * Class GiveDict
 * @package addon\shop_giftcard\app\dict\card
 */
class GiveDict
{

    // 状态
    // 未赠予
    const NO_GIVE = 'no_give';

    // 待领取
    const WAIT_GIVE = 'wait_give';

    // 已领取
    const RECEIVED = 'received';

    /**
     * 卡状态
     * @param $status
     * @return array
     */
    public static function getStatusList($status)
    {
        $list = [
            self::NO_GIVE => get_lang('dict_shop_giftcard_card_give.no_give'),
            self::WAIT_GIVE => get_lang('dict_shop_giftcard_card_give.wait_give'),
            self::RECEIVED => get_lang('dict_shop_giftcard_card_give.received')
        ];
        if (empty($status)) return $list;
        return $list[ $status ];
    }

}
