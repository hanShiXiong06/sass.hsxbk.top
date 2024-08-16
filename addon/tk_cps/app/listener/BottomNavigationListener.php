<?php

namespace addon\tk_cps\app\listener;

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
        $key = 'tk_cps';

        $site_addon = (new CoreSiteService())->getAddonKeysBySiteId(request()->siteId());
        if (!in_array($key, $site_addon)) return;

        if (!empty($params)&&!empty($params['key']) && $params['key'] != $key) return;

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
                            "parent" => "TK_CPS_COMMONLINK",
                            "name" => "TK_CPS_DIY",
                            "title" => "CPS首页",
                            "url" => "/addon/tk_cps/pages/diy",
                            "action" => "decorate"
                        ],
                        "iconPath" => "addon/tk_cps/diy/bottom/miaosha.png",
                        "iconSelectPath" => "addon/tk_cps/diy/bottom/miaosha.png"
                    ],
                    [
                        "text" => "电影",
                        "link" => [
                            "parent" => "TK_CPS_COMMONLINK",
                            "name" => "TK_CPS_MOVIE",
                            "title" => "热门电影",
                            "url" => "/addon/tk_cps/pages/index?type=0&act_id=76&style=embedded",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/tk_cps/diy/bottom/dianyin.png",
                        "iconPath" => "addon/tk_cps/diy/bottom/dianyin.png"
                    ],
                    [
                        "text" => "团购",
                        "link" => [
                            "parent" => "TK_CPS_COMMONLINK",
                            "name" => "TK_CPS_MEISHI_TG_MXBT",
                            "title" => "美团团购",
                            "url" => "/addon/tk_cps/pages/index?type=0&act_id=74&style=embedded",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/tk_cps/diy/bottom/meituantuangou.png",
                        "iconPath" => "addon/tk_cps/diy/bottom/meituantuangou.png"
                    ],
                    [
                        "text" => "我的",
                        "link" => [
                            "parent" => "TK_CPS_COMMONLINK",
                            "name" => "TK_CPS_MENPIAO",
                            "title" => "景区门票",
                            "url" => "/addon/tk_cps/pages/member",
                            "action" => ""
                        ],
                        "iconSelectPath" => "addon/tk_cps/diy/bottom/menpiao.png",
                        "iconPath" => "addon/tk_cps/diy/bottom/menpiao.png"
                    ]
                ]
            ]];


    }
}
