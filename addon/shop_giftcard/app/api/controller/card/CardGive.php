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

namespace addon\shop_giftcard\app\api\controller\card;

use addon\shop_giftcard\app\service\api\card\CardGiveService;
use core\base\BaseApiController;


/**
 * 礼品卡赠予控制器
 * Class CardGive
 * @package addon\shop_giftcard\app\api\controller\card
 */
class CardGive extends BaseApiController
{

    /**
     * 获取赠送信息
     * @param $id
     * @return \think\Response
     */
    public function info($id)
    {
        return success(( new CardGiveService() )->getInfo($id));
    }

    /**
     * 礼品卡赠予（添加记录）
     * @return \think\Response
     */
    public function give()
    {
        $data = $this->request->params([
            [ 'card_id', 0 ],
            [ "member_card_id", 0 ],
            [ "blessing", "" ],
        ]);
        return success(( new CardGiveService() )->give($data));
    }

    /**
     * 领取礼品卡
     * @return \think\Response
     */
    public function receive()
    {
        $data = $this->request->params([
            [ "give_id", 0 ],
        ]);
        ( new CardGiveService() )->receive($data);
        return success('SUCCESS');
    }

}
