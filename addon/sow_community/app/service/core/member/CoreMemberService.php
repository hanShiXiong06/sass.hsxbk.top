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

namespace addon\sow_community\app\service\core\member;

use addon\sow_community\app\model\CommunityMember;
use core\base\BaseCoreService;
use think\facade\Db;

/**
 * 社区用户信息服务层
 * Class CoreMemberService
 * @package  addon\sow_community\app\service\core\member;
 */
class CoreMemberService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new CommunityMember();
    }

    /**
     * 会员注册成功事件处理
     * @param $member
     */
    public function memberRegister($site_id, $member)
    {
        //添加社区用户信息表
        $data = [
            'site_id' => $site_id,
            'member_id' => $member[ 'member_id' ]
        ];
        $this->model->create($data);
        return true;
    }

    /**
     * 更新社区用户信息统计数据
     * @param int $member_id
     * @param int $site_id
     * @param string $field
     * @param int $num
     * @return bool
     */
    public function editStatNum($member_id, $site_id, $field, $num)
    {
        $member = $this->model->where([ [ 'member_id', '=', $member_id ], [ 'site_id', '=', $site_id ] ])->findOrEmpty();
        if (!$member->isEmpty()) {
            $update_data = [];
            if ($num != 0) {
                if ($num > 0) {
                    $item_sql = ' + ' . abs($num);
                } else if ($num < 0) {
                    $item_sql = ' - ' . abs($num);
                }
                $update_data[ $field ] = Db::raw('CASE WHEN ' . $field . $item_sql . '>= 0 THEN ' . $field . $item_sql . ' ELSE 0 END');
            }
            if ($update_data) {
                $member->save($update_data);
            }
        }
        return true;
    }

}
