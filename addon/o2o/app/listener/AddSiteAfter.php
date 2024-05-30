<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\o2o\app\listener;

/**
 * 站点添加之后
 */
class AddSiteAfter
{
    public function handle($params = [])
    {
        if (in_array('o2o', $params[ 'main_app' ]) && count($params[ 'main_app' ]) == 1) {
            $site_id = $params[ 'site_id' ];
            request()->siteId($site_id);
            return true;
        }
    }
}
