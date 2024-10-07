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

namespace addon\tt_niucloud\app\service\api\member;

use app\model\member\Member;
use core\base\BaseApiService;
use core\exception\ApiException;

/**
 * 会员服务层
 * Class MemberService
 * @package app\service\api\member
 */
class MemberService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Member();
    }

    public function getTeamMember()
    {
        $field = 'nickname, headimg,create_time';
        $search_model = $this->model->where([
            ['pid', '=', $this->member_id],
            ['site_id', '=', $this->site_id],
        ])
        ->field($field)
        ->order('member_id desc');

        return $this->pageQuery($search_model);
    }

    public function getPoster($data = [])
    {
        $data[ 'channel' ] = $this->channel;
        $data['param'][ 'member_id' ] = $this->member_id;
        $img = poster($this->site_id, $data['id'], $data['type'], $data['param'], $this->channel);

        return [
            'img' => request()->domain() . '/' . $img
        ];
    }
}
