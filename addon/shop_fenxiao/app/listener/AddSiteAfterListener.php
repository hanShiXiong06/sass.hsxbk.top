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
namespace addon\shop_fenxiao\app\listener;


use addon\shop_fenxiao\app\model\fenxiao\FenxiaoLevel;
use app\service\admin\diy\DiyService;
use app\service\core\poster\CorePosterService;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        if (in_array('shop_fenxiao', $params[ 'site_addons' ])) {

            $site_id = $params[ 'site_id' ];
            request()->siteId($site_id);

            //站点创建之后增加分销默认等级
            $data = [
                'level_num' => 0,
                'site_id' => $site_id,
                'level_name' => '默认等级',
                'one_rate' => 0,
                'two_rate' => 0,
                'team_rate' => 0,
                'team_flat_rate' => 0,
                'is_default' => 1,
                'create_time' => time(),
                'update_time' => time(),
                'status' => 1
            ];
            ( new FenxiaoLevel() )->create($data);

            $poster = new CorePosterService();

            // 创建默认分销海报
            $fenxiao_template = $poster->getTemplateList('shop_fenxiao', 'fenxiao')[ 0 ];
            $poster->add($site_id, 'shop_fenxiao', [
                'name' => $fenxiao_template[ 'name' ],
                'type' => $fenxiao_template[ 'type' ],
                'value' => $fenxiao_template[ 'data' ],
                'status' => 1,
                'is_default' => 1
            ]);

            // 创建默认分销商品海报
            $fenxiao_goods_template = $poster->getTemplateList('shop_fenxiao', 'fenxiao_goods')[ 0 ];
            $poster->add($site_id, 'shop_fenxiao', [
                'name' => $fenxiao_goods_template[ 'name' ],
                'type' => $fenxiao_goods_template[ 'type' ],
                'value' => $fenxiao_goods_template[ 'data' ],
                'status' => 1,
                'is_default' => 1
            ]);

            // 创建 分销专区 微页面
            $addon_flag = 'DIY_SHOP_FENXIAO_ZONE';

            $diy_service = new DiyService();
            $addon_index_template = $diy_service->getFirstPageData($addon_flag, 'shop_fenxiao');

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
