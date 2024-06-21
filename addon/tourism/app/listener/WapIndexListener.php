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

namespace addon\tourism\app\listener;

use app\service\core\site\CoreSiteService;

/**
 * 手机端首页加载事件
 */
class WapIndexListener
{
    public function handle()
    {
        $site_addon = (new CoreSiteService())->getAddonKeysBySiteId(request()->siteId());
        if (!in_array('tourism', $site_addon)) return;

        return [
            [
                'key' => 'tourism',
                "title" => get_lang("dict_wap_index.tourism"),
                'desc' => get_lang("dict_wap_index.tourism_desc"),
                "url" => "/addon/tourism/pages/index",
                'icon'=>'addon/tourism/icon.png'
            ],
        ];
    }
}
