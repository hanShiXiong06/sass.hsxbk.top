<?php

namespace addon\cps\app\listener;

use app\service\core\addon\CoreAddonService;
use app\service\core\site\CoreSiteService;

/**
 * 底部导航
 */
class BottomNavigationListener
{
    /**
     * @param array $params
     * @return array|void
     */
    public function handle($params = [])
    {
        $key = 'CPS';

        $site_addon = (new CoreSiteService())->getAddonKeysBySiteId(request()->siteId());
        if (!in_array($key, $site_addon)) return;

        if (!empty($params) && $params['key'] != $key) return;

        $core_addon_service = new CoreAddonService();
        $addon_info = $core_addon_service->getAddonConfig($key);

        return [
            'key' => $key,
            'info' => $addon_info,
            'value' => [
                "backgroundColor" => "#ffffff",
                "textColor" => "#333333",
                "textHoverColor" => "#9606A3",
                "type" => 1,
                "list" => [
                    [
                        "text" => "首页",
                        "link" => [
                            "parent" => "CPS_COMMONLINK",
                            "name" => "CPS_DIY",
                            "title" => "CPS首页",
                            "url" => "/addon/cps/pages/diy",
                            "action" => "decorate"
                        ],
                        "iconPath" => "addon/cps/diy/bottom/miaosha.png",
                        "iconSelectPath" => "addon/cps/diy/bottom/miaosha.png"
                    ],
                    [
                        "text" => "电影",
                        "link" => [
                            "parent" => "CPS_COMMONLINK",
                            "name" => "CPS_MOVIE",
                            "title" => "热门电影",
                            "url" => "/addon/cps/pages/index?type=0&act_id=76&style=embedded",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/cps/diy/bottom/dianyin.png",
                        "iconPath" => "addon/cps/diy/bottom/dianyin.png"
                    ],
                    [
                        "text" => "团购",
                        "link" => [
                            "parent" => "CPS_COMMONLINK",
                            "name" => "CPS_MEISHI_TG_MXBT",
                            "title" => "美团团购",
                            "url" => "/addon/cps/pages/index?type=0&act_id=74&style=embedded",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/cps/diy/bottom/meituantuangou.png",
                        "iconPath" => "addon/cps/diy/bottom/meituantuangou.png"
                    ],
                    [
                        "text" => "门票",
                        "link" => [
                            "parent" => "CPS_COMMONLINK",
                            "name" => "CPS_MENPIAO",
                            "title" => "景区门票",
                            "url" => "/addon/cps/pages/index?type=0&act_id=105&style=embedded",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/cps/diy/bottom/menpiao.png",
                        "iconPath" => "addon/cps/diy/bottom/menpiao.png"
                    ]
                ]
            ]];


    }
}
