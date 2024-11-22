<?php
// +----------------------------------------------------------------------
// | Author: TK
// +----------------------------------------------------------------------
namespace addon\tk_notice\app\listener;

use app\service\core\poster\CorePosterService;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        $site_id = $params['site_id'];
        event('TkNoticeSend', ['site_id' => 0, 'text' => '您有新的站点新增/变更套餐，关联站点ID:' . $site_id.'，请及时处理', 'key' => 'add_edit_site']);
        return true;
    }
}
