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

namespace addon\sow_community\app\listener;

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
        $key = 'sow_community';

        $site_addon = ( new CoreSiteService() )->getAddonKeysBySiteId(request()->siteId());
        if (!in_array($key, $site_addon)) return;

        if (!empty($params) && !empty($params[ 'key' ]) && $params[ 'key' ] != $key) return;

        $core_addon_service = new CoreAddonService();
        $addon_info = $core_addon_service->getAddonConfig($key);

        return [
            'key' => $key,
            'info' => $addon_info,
            'value' => [
                'backgroundColor' => '#ffffff',
                'textColor' => '#333333',
                'textHoverColor' => '#FF4500',
                'type' => '1',
                'list' => [
                    [
                        "text" => "种草首页",
                        "link" => [
                            "parent" => "SOW_COMMUNITY_LINK",
                            "name" => "SOW_COMMUNITY_INDEX",
                            "title" => get_lang('dict_diy.sow_community_link_index'),
                            'url' => '/addon/sow_community/pages/index',
                        ],
                        "iconPath" => "addon/sow_community/diy/tabbar/sow_community.png",
                        "iconSelectPath" => "addon/sow_community/diy/tabbar/sow_community_selected.png"
                    ],
                    [
                        "text" => "我的",
                        "link" => [
                            "parent" => "MEMBER_LINK",
                            "name" => "MEMBER_CENTER",
                            'title' => get_lang('dict_diy.page_member_index'),
                            'url' => '/app/pages/member/index',
                        ],
                        "iconPath" => "addon/sow_community/diy/tabbar/sow_community_my.png",
                        "iconSelectPath" => "addon/sow_community/diy/tabbar/sow_community_my_selected.png"
                    ]
                ]
            ]
        ];
    }
}
