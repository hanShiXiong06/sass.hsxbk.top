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
namespace addon\shop\app\listener;

use app\service\admin\diy\DiyService;
use app\service\core\poster\CorePosterService;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        if (in_array('shop', $params[ 'main_app' ]) && count($params[ 'main_app' ]) == 1) {
            $site_id = $params[ 'site_id' ];
            request()->siteId($site_id);

            // 创建默认商品海报
            $poster = new CorePosterService();
            $template = $poster->getTemplateList('shop', 'shop_goods')[ 0 ];
            $poster->add($site_id, 'shop', [
                'name' => $template[ 'name' ],
                'type' => $template[ 'type' ],
                'value' => $template[ 'data' ],
                'status' => 1,
                'is_default' => 1
            ]);

            // 创建默认积分商品海报
            $poster = new CorePosterService();
            $template = $poster->getTemplateList('shop', 'shop_point_goods')[ 0 ];
            $poster->add($site_id, 'shop', [
                'name' => $template[ 'name' ],
                'type' => $template[ 'type' ],
                'value' => $template[ 'data' ],
                'status' => 1,
                'is_default' => 1
            ]);

            // 创建 积分商城 微页面
            $addon_flag = 'DIY_SHOP_POINT_INDEX';

            $diy_service = new DiyService();
            $addon_index_template = $diy_service->getFirstPageData($addon_flag, 'shop');

            $diy_service->add([
                'page_title' => $addon_index_template[ 'title' ],
                "title" => $addon_index_template[ 'title' ],
                "name" => $addon_flag,
                "type" => $addon_flag,
                "template" => $addon_index_template[ 'template' ],
                "mode" => $addon_index_template[ 'mode' ],
                "value" => json_encode($addon_index_template[ 'data' ]),
                "is_default" => 1,
                "is_change" => 0
            ]);
            return true;
        }
    }
}
