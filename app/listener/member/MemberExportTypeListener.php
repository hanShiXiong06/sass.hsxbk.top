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

namespace app\listener\member;

/**
 * 会员导出数据类型查询
 * Class MemberExportTypeListener
 * @package app\listener\member
 */
class MemberExportTypeListener
{

    public function handle()
    {
        return [
            'member' => [
                'name' => '会员列表',
                'column' => [
                    'member_id' => [ 'name' => '会员id'],
                    'member_no' => [ 'name' => '会员编码'],
                    'username' => [ 'name' => '用户名'],
                    'mobile' => [ 'name' => '手机号'],
                    'nickname' => [ 'name' => '昵称'],
                    'point' => [ 'name' => '积分'],
                    'balance' => [ 'name' => '余额'],
                    'money' => [ 'name' => '余额(可提现)'],
                    'growth' => [ 'name' => '成长值'],
                    'commission' => [ 'name' => '当前佣金'],
                    'register_channel_name' => [ 'name' => '注册来源'],
                    'status_name' => [ 'name' => '用户状态'],
                    'create_time' => [ 'name' => '注册时间'],
                    'last_visit_time' => [ 'name' => '最后访问时间'],
                ],
            ]
        ];
    }
}