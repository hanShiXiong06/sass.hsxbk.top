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

namespace addon\sow_community\app\service\api\follow;


use addon\sow_community\app\dict\ContentDict;
use addon\sow_community\app\dict\FollowDict;
use addon\sow_community\app\model\Content;
use addon\sow_community\app\model\Follow;
use addon\sow_community\app\model\CommunityMember;
use addon\sow_community\app\service\core\member\CoreMemberService;
use app\service\api\site\SiteService;
use core\base\BaseApiService;
use core\exception\CommonException;
use think\db\Query;
use think\facade\Db;


/**
 * 关注服务层
 * Class FollowService
 * @package addon\sow_community\app\service\api\follow;
 */
class FollowService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Follow();
    }

    /**
     * 获取关注用户分页列表
     * @param $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $member_id = $where[ 'member_id' ] == '' ? $this->member_id : $where[ 'member_id' ];
        $search_model = $this->model->field('follow_member_id,is_follow')
            ->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $member_id ], [ 'is_follow', '=', FollowDict::FOLLOW ] ])
            ->with([ 'member' => function($query) use ($where) {
                $query->where([ [ 'nickname', 'like', "%" . $where[ 'keyword' ] . "%" ] ]);
            } ])->order('create_time desc');
        $list = $this->pageQuery($search_model);

        if (!empty($list[ 'data' ])) {
            $site_info = ( new SiteService() )->getSiteCache();
            foreach ($list[ 'data' ] as $k => &$v) {
                //获取最后发布内容时间
                $create_time = ( new Content() )->where([ [ 'member_id', '=', $v[ 'follow_member_id' ] ], [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ] ])->order('create_time desc')->value('create_time') ?? 0;
                $v[ 'content_create_time' ] = $create_time > 0 ? get_last_time($create_time) . ' 发布一条内容' : '';
                if ($v[ 'follow_member_id' ] > 0) {
                    if (empty($v[ 'nickname' ])) unset($list[ 'data' ][ $k ]);
                } else {
                    if (!empty($where[ 'keyword' ])) {
                        if (stripos($site_info[ 'front_end_name' ], $where[ 'keyword' ]) !== false) {
                            $v[ 'nickname' ] = empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ];
                            $v[ 'headimg' ] = empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ];
                        } else {
                            unset($list[ 'data' ][ $k ]);
                        }
                    } else {
                        $v[ 'nickname' ] = empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ];
                        $v[ 'headimg' ] = empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ];
                    }
                }
            }
            $list[ 'data' ] = array_values($list[ 'data' ]);
        }

        return $list;
    }

    /**
     * 获取粉丝用户分页列表
     * @return array
     */
    public function getFansPage(array $where = [])
    {
        $member_id = $where[ 'member_id' ] == '' ? $this->member_id : $where[ 'member_id' ];
        $search_model = $this->model->field('member_id,is_follow as is_fans')
            ->where([ [ 'follow.site_id', '=', $this->site_id ], [ 'follow_member_id', '=', $member_id ], [ 'is_follow', '=', FollowDict::FOLLOW ] ])
            ->withJoin([
                'fans' => function(Query $query) use ($where) {
                    $query->where([ [ 'nickname', 'like', "%" . $where[ 'keyword' ] . "%" ] ]);
                }
            ])->hidden([ 'fans' ])->order('follow.create_time desc');
        $list = $this->pageQuery($search_model);

        if (!empty($list[ 'data' ])) {
            foreach ($list[ 'data' ] as $k => &$v) {
                $is_follow = $this->getIsFollow($v[ 'member_id' ]);
                $v[ 'is_follow' ] = $is_follow;
                //获取最后发布内容时间
                $create_time = ( new Content() )->where([ [ 'member_id', '=', $v[ 'member_id' ] ], [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ] ])->order('create_time desc')->value('create_time') ?? 0;
                $v[ 'content_create_time' ] = $create_time > 0 ? get_last_time($create_time) . ' 发布一条内容' : '';
                if (empty($v[ 'nickname' ])) unset($list[ 'data' ][ $k ]);
            }
            $list[ 'data' ] = array_values($list[ 'data' ]);
        }

        return $list;
    }

    /**
     * 关注/取消关注用户
     * @param $data
     * @return bool
     */
    public function follow($data)
    {
        if ($data[ 'follow_member_id' ] == '') throw new CommonException('MEMBER_NOT_EXIST');
        if ($data[ 'follow_member_id' ] > 0) {
            $count = ( new CommunityMember() )->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $data[ 'follow_member_id' ] ] ])->count();
            if ($count == 0) throw new CommonException('MEMBER_NOT_EXIST');
        }
        if ($data[ 'follow_member_id' ] == $this->member_id) throw new CommonException('CANNOT_FOLLOW_SELF');
        $data[ 'site_id' ] = $this->site_id;
        $data[ 'member_id' ] = $this->member_id;
        $follow_member_info = $this->model->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $this->member_id ], [ 'follow_member_id', '=', $data[ 'follow_member_id' ] ] ])->find();
        Db::startTrans();
        try {
            if (empty($follow_member_info)) {
                $this->model->create($data);
            } else {
                $follow_member_info->save($data);
            }
            $num = $data[ 'is_follow' ] == 1 ? 1 : -1;
            $core_member_service = new CoreMemberService();
            $core_member_service->editStatNum($this->member_id, $this->site_id, 'follow_num', $num);//更新关注数
            $core_member_service->editStatNum($data[ 'follow_member_id' ], $this->site_id, 'fans_num', $num);//更新粉丝数
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 获取会员是否已关注
     * @param int $follow_member_id
     * @return bool
     */
    public function getIsFollow($follow_member_id)
    {
        $count = $this->model->where([ [ 'member_id', '=', $this->member_id ], [ 'follow_member_id', '=', $follow_member_id ], [ 'is_follow', '=', FollowDict::FOLLOW ], [ 'site_id', '=', $this->site_id ] ])->count();
        return $count > 0;
    }

}
