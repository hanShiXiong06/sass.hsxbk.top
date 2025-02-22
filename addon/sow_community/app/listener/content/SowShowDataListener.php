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

namespace addon\sow_community\app\listener\content;

use addon\sow_community\app\service\api\content\ContentService;

/**
 * 种草秀内容数据监听
 * Class SowShowDataListener
 * @package addon\sow_community\app\listener\content
 */
class SowShowDataListener
{
    /**
     * 接收参数 关联id、查询条数
     * @param $params ['relate_id', 'limit']
     */
    public function handle($params)
    {
        return ( new ContentService() )->getSowShowComponents($params);
    }
}