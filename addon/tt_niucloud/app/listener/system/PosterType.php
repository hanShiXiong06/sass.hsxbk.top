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

namespace addon\tt_niucloud\app\listener\system;

use app\service\core\addon\CoreAddonService;
use app\service\core\site\CoreSiteService;

/**
 * 底部导航
 */
class PosterType
{
    /**
     * @param array $params
     * @return array|void
     */
    public function handle($params = [])
    {

        return [
            [
                'addon' => 'tt_niucloud',
                'decs' => '推广平台，分享后进入个人中心',
                'name' => 'Trusty组件库海报',
                'type' => 'ttn_fenxiao'
            ]
        ];
    }
}
