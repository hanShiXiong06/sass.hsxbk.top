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

use addon\shop_giftcard\app\dict\card\CardDict;
use addon\shop_giftcard\app\dict\card\GiveDict;
use addon\shop_giftcard\app\dict\giftcard\GiftcardDict;
use addon\shop_giftcard\app\dict\giftcard\GiftcardLogDict;
use addon\shop_giftcard\app\model\card\Card;
use addon\shop_giftcard\app\model\card\CardGive;
use addon\shop_giftcard\app\model\records\MemberRecords;
use addon\shop_giftcard\app\service\core\giftcard\CoreGiftcardLogService;
use addon\shop_giftcard\app\service\core\records\CoreMemberRecordsService;
use app\model\member\Member;
use core\base\BaseApiService;
use core\exception\ApiException;


/**
 * 礼品卡赠予服务层
 * Class CardGiveService
 * @package addon\shop_giftcard\app\service\api\card
 */
class CardGiveService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new CardGive();
    }

    /**
     * 获取赠送信息
     * @param int $give_id
     * @return array
     */
    public function getInfo($give_id)
    {
        $field = 'give_id,card_id,member_id,member_card_id,to_member_id,blessing,status';
        $info = $this->model->field($field)->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'give_id', "=", $give_id ]
        ])->append([ 'status_name' ])->with([ 'member' ])->findOrEmpty()->toArray();

        if (empty($info)) throw new ApiException('CARD_GIVE_INFO_NOT_EXIST');

        $card_model = new Card();
        $card_info = $card_model->field('card_id, giftcard_id, card_cover,validity_time')->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'card_id', "=", $info[ 'card_id' ] ]
        ])->with([ 'giftcard' ])->findOrEmpty()->toArray();

        $info[ 'card_info' ] = $card_info;

        $info[ 'to_have' ] = 'other'; // 卡的拥有者，my：我，other：其他
        if ($info[ 'to_member_id' ] == $this->member_id) {
            $info[ 'to_have' ] = 'my';
        }

        return $info;
    }

    /**
     * 添加礼品卡赠予
     * @param array $params
     * @return mixed
     */
    public function give(array $params)
    {
        $field = 'card_id,giftcard_id,source,card_no,card_key,card_cover,balance,card_make_id,status,member_id,validity_time,total_num,use_num,create_time,use_time,activate_time,invalid_time';
        $card_model = new Card();
        $card_info = $card_model->field($field)->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'member_id', '=', $this->member_id ],
            [ 'card_id', "=", $params[ 'card_id' ] ]
        ])->with([ 'giftcard' ])->findOrEmpty()->toArray();

        if (empty($card_info)) {
            throw new ApiException('CARD_NOT_FOUND');
        }

        if (empty($card_info[ 'giftcard' ])) {
            throw new ApiException('CARD_NOT_FOUND');
        }

        if ($card_info[ 'status' ] != CardDict::TO_USE) {
            throw new ApiException('CARD_USED_CANNOT_GIVE');
        }

        if ($card_info[ 'giftcard' ][ 'status' ] == GiftcardDict::OFF) {
            throw new ApiException('GIFTCARD_HAS_DOWN');
        }

        if ($card_info[ 'giftcard' ][ 'is_give' ] == 0) {
            throw new ApiException('CARD_NOT_ALLOW_GIVE');
        }

        $member_records = new MemberRecords();
        $member_record_info = $member_records->field('member_card_id,to_member_id,is_give')->where([
            [ 'site_id', "=", $this->site_id ],
            [ 'member_id', '=', $this->member_id ],
            [ 'card_id', '=', $card_info[ 'card_id' ] ],
            [ 'is_give', '=', 0 ]
        ])->findOrEmpty()->toArray();

        if (empty($member_record_info)) {
            throw new ApiException('CARD_NOT_FOUND');
        }

        if ($member_record_info[ 'to_member_id' ] && $member_record_info[ 'is_give' ] == 1) {
            throw new ApiException('CARD_HAS_BEEN_RECEIVED');
        }

        $card_give_info = $this->model->field('give_id')->where([
            [ 'site_id', "=", $this->site_id ],
            [ 'card_id', '=', $card_info[ 'card_id' ] ],
            [ 'member_id', '=', $this->member_id ],
            [ 'member_card_id', '=', $member_record_info[ 'member_card_id' ] ]
        ])->findOrEmpty()->toArray();

        if (!empty($card_give_info)) {
            // 更新礼品卡赠予记录信息
            $this->model->where([
                [ 'site_id', '=', $this->site_id ],
                [ 'give_id', '=', $card_give_info[ 'give_id' ] ],
            ])->update([
                'blessing' => $params[ 'blessing' ],
            ]);
            $give_id = $card_give_info[ 'give_id' ];
        } else {
            $data = [
                'site_id' => $this->site_id,
                'card_id' => $card_info[ 'card_id' ],
                'member_id' => $this->member_id,
                'member_card_id' => $member_record_info[ 'member_card_id' ],
                'blessing' => $params[ 'blessing' ],
                'status' => GiveDict::WAIT_GIVE,
            ];

            $res = $this->model->create($data);
            $give_id = $res->give_id;
        }

        $card_info[ 'give_id' ] = $give_id;

        return $card_info;
    }

    /**
     * 领取礼品卡
     * @param $params
     */
    public function receive($params)
    {
        $field = 'give_id,card_id,member_id,member_card_id,status';

        $card_give_info = $this->model->field($field)->where([
            [ 'site_id', "=", $this->site_id ],
            [ 'give_id', '=', $params[ 'give_id' ] ],
        ])->findOrEmpty()->toArray();

        if (empty($card_give_info)) {
            throw new ApiException('CARD_NOT_FOUND');
        }

        if ($card_give_info[ 'status' ] == GiveDict::NO_GIVE) {
            throw new ApiException('CARD_NOT_ALLOW_RECEIVE');
        }

        if ($card_give_info[ 'status' ] == GiveDict::RECEIVED) {
            throw new ApiException('CARD_HAS_BEEN_RECEIVED');
        }

        if ($card_give_info[ 'member_id' ] == $this->member_id) {
            throw new ApiException('CARD_OWN_CANNOT_RECEIVE');
        }

        $card_model = new Card();
        $card_field = 'card_id,giftcard_id,status';
        $card_info = $card_model->field($card_field)->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'card_id', "=", $card_give_info[ 'card_id' ] ]
        ])->with([ 'giftcard' ])->findOrEmpty()->toArray();

        if (empty($card_info)) {
            throw new ApiException('CARD_NOT_FOUND');
        }

        if (empty($card_info[ 'giftcard' ])) {
            throw new ApiException('CARD_NOT_FOUND');
        }

        if ($card_info[ 'status' ] != CardDict::TO_USE) {
            throw new ApiException('CARD_HAS_BEEN_USED_CANNOT_RECEIVE');
        }

        if ($card_info[ 'giftcard' ][ 'status' ] == GiftcardDict::OFF) {
            throw new ApiException('GIFTCARD_HAS_DOWN');
        }

        if ($card_info[ 'giftcard' ][ 'is_give' ] == 0) {
            throw new ApiException('CARD_NOT_ALLOW_GIVE');
        }

        // 更新礼品卡赠予记录信息
        $this->model->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'give_id', '=', $card_give_info[ 'give_id' ] ],
            [ 'member_card_id', '=', $card_give_info[ 'member_card_id' ] ]
        ])->update([
            'to_member_id' => $this->member_id,
            'status' => GiveDict::RECEIVED,
            'get_time' => time()
        ]);

        // 变更 新拥有卡的会员
        $card_model = new Card();
        $card_model->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'card_id', '=', $card_give_info[ 'card_id' ] ]
        ])->update([
            'member_id' => $this->member_id,
            'source' => CardDict::GIVE
        ]);

        // 变更 原拥有卡的会员领取记录
        $member_records_service = new CoreMemberRecordsService();
        $member_records_service->edit([
            [ 'site_id', '=', $this->site_id ],
            [ 'member_card_id', '=', $card_give_info[ 'member_card_id' ] ]
        ], [
            'to_member_id' => $this->member_id,
            'is_give' => 1,
            'give_time' => time()
        ]);

        // 变更 新拥有卡的会员领取记录
        $member_records_service->add([
            'site_id' => $this->site_id,
            'card_id' => $card_give_info[ 'card_id' ],
            'from_member_id' => $card_give_info[ 'member_id' ],
            'member_id' => $this->member_id,
            'source' => CardDict::GIVE
        ]);

        $nickname = ( new Member() )->where([ 'member_id' => $card_give_info[ 'member_id' ] ])->value('nickname') ?? '';
        //增加日志
        $log_data = [
            'giftcard_id' => $card_info[ 'giftcard_id' ],
            'card_id' => $card_info[ 'card_id' ],
            'member_id' => $this->member_id,
            'site_id' => $this->site_id,
            'type' => GiftcardLogDict::CARD_GIVE_ACTION,
            'remark' => '领取了' . $nickname . '赠送的礼品卡'
        ];
        ( new CoreGiftcardLogService() )->add($log_data, 'member');
    }

}
