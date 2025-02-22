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

use addon\sow_community\app\model\CommunityMember;
use app\model\member\Member;

/**
 * 站点创建之后
 */
class AddSiteAfterListener
{
    public function handle($params = [])
    {
        if (in_array('sow_community', $params[ 'main_app' ])) {
            $site_id = $params[ 'site_id' ];
            request()->siteId($site_id);

            // 同步社区用户信息
            $community_member_model = new CommunityMember();
            $member_ids = ( new Member() )->where([ [ 'site_id', '=', $site_id ] ])->column('member_id');
            $member_ids = array_merge($member_ids, [ 0 ]); // 0表示系统用户
            if (!empty($member_ids)) {
                $community_member_ids = $community_member_model->where([ [ 'site_id', '=', $site_id ] ])->column('member_id');
                $new_member_ids = array_diff($member_ids, $community_member_ids);
                $new_member_data = [];
                foreach ($new_member_ids as $value) {
                    $new_member_data[] = [
                        'site_id' => $site_id,
                        'member_id' => $value,
                        'create_time' => time()
                    ];
                }
                $community_member_model->insertAll($new_member_data);
            }
            return true;
        }
    }
}
