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

use addon\tt_niucloud\app\model\member\Infos;
use app\model\member\Member;
use core\base\BaseApiService;
use core\exception\ApiException;

/**
 * 会员服务层
 * Class MemberService
 * @package app\service\api\member
 */
class InfosService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Infos();
    }

    /**
     * 获取会员信息
     * @return array
     */
    public function getParentMember()
    {
        $member = (new Member())->where([
            ['member_id', '=', $this->member_id],
            ['site_id', '=', $this->site_id],
        ])->field('pid')->findOrEmpty();

        if (!$member->pid)
            return false;

        $parentMember = $this->model->with(['member_bind'])->where([
            ['member_id', '=', $member->pid],
            ['site_id', '=', $this->site_id],
            ['status', '=', 1],
        ])->visible(['wx_id', 'wx_qrcode', 'nickname', 'headimg'])->findOrEmpty()->toArray();

        return $parentMember;
    }

    public function getWxInfo()
    {
        return $this->model->where([
            'member_id' => $this->member_id,
            'site_id' => $this->site_id,
        ])->field('id,wx_id,wx_qrcode,status')->findOrEmpty()->toArray();
    }

    public function editWxInfo(array $data)
    {
        $where = [
            'member_id' => $this->member_id,
            'site_id' => $this->site_id,
        ];
        $model = $this->model->where($where)->find();
        if (empty($model)) {
            $this->model->create($where + $data);
        } else {
            $model->save($data);
        }

        return true;
    }
}
