<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\shop_giftcard\app\listener\card;

/**
 * 储值卡导出数据类型查询
 * Class BalanceCardExportTypeListener
 * @package addon\shop_giftcard\app\listener\card
 */
class BalanceCardExportTypeListener
{

    public function handle()
    {
        return [
            'shop_giftcard_balance_card' => [
                'name' => '储值礼品卡列表',
                'column' => [
                    'card_no' => [ 'name' => '卡号' ],
                    'card_key' => [ 'name' => '秘钥' ],
                    'balance' => [ 'name' => '面值' ]
                ],
            ]
        ];
    }
}