<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------
namespace addon\tk_cps\app\listener;
use app\service\core\poster\CorePosterService;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        if (in_array('tk_cps', $params[ 'main_app' ])) {
            $site_id = $params[ 'site_id' ];
            request()->siteId($site_id);
            $poster = new CorePosterService();
            // 创建默认霸王餐分销海报
            $bwc_template = $poster->getTemplateList('tk_cps', 'tk_cps_bwc')[ 0 ];
            $poster->add($site_id, 'tk_cps', [
                'name' => $bwc_template[ 'name' ],
                'type' => $bwc_template[ 'type' ],
                'value' => $bwc_template[ 'data' ],
                'status' => 1,
                'is_default' => 1
            ]);

            return true;
        }
    }
}
