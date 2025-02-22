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

namespace addon\sow_community\app\listener\member;

use addon\sow_community\app\service\core\member\CoreMemberService;

/**
 * 会员注册成功事件
 * Class MemberRegisterListener
 * @package addon\sow_community\app\listener\member
 */
class MemberRegisterListener
{
    /**
     * 接收添加会员的数组参数
     * @param $member  ['site_id', 'member_id']
     */
    public function handle($member)
    {
        (new CoreMemberService())->memberRegister($member['site_id'], $member);
        return;
    }
}