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

namespace addon\sow_community\app\dict;

class CommentDict
{

    // 评论状态
    const AUDIT_NO = 0;// 无需审核
    const WAIT_AUDIT = 1;// 待审核
    const AUDIT_ADOPT = 2;// 已通过
    const AUDIT_REFUSE = -1;// 已拒绝

    /**
     * 内容状态
     * @param $status
     * @return array|mixed|string
     */
    public static function getStatusList($status = '')
    {
        $list = [
            self::AUDIT_NO => get_lang('dict_sow_community_comment.audit_no'),
            self::WAIT_AUDIT => get_lang('dict_sow_community_comment.wait_audit'),
            self::AUDIT_ADOPT => get_lang('dict_sow_community_comment.audit_adopt'),
            self::AUDIT_REFUSE => get_lang('dict_sow_community_comment.audit_refuse'),
        ];
        if ($status == '') return $list;

        return $list[ $status ];
    }
}
