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

namespace addon\sow_community\app\service\api\member;

use addon\sow_community\app\model\CommunityMember;
use addon\sow_community\app\service\api\content\ContentService;
use addon\sow_community\app\service\api\follow\FollowService;
use app\service\api\site\SiteService;
use core\base\BaseApiService;
use core\exception\ApiException;

/**
 * 我的主页服务层
 * Class MemberService
 * @package addon\sow_community\app\service\api\member;
 */
class MemberService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new CommunityMember();
    }

    /**
     * 获取推荐用户列表
     * @return array
     */
    public function getRecommendLists()
    {
        $search_model = $this->model->field('member_id,content_num,fans_num')->where([
            [ 'site_id', '=', $this->site_id ],
            [ 'member_id', '<>', $this->member_id ]
        ])->with([ 'member' ])->order('fans_num desc,content_num desc');
        $list = $this->pageQuery($search_model);
        if (!empty($list[ 'data' ])) {
            $follow_service = new FollowService();
            $content_service = new ContentService();
            $site_info = ( new SiteService() )->getSiteCache();
            foreach ($list[ 'data' ] as $k => &$v) {
                $is_follow = $follow_service->getIsFollow($v[ 'member_id' ]);
                $v[ 'is_follow' ] = $is_follow;
                $v[ 'content_list' ] = $content_service->getListByMemberId($v[ 'member_id' ]);
                if ($v[ 'member_id' ] > 0) {
                    if (empty($v[ 'nickname' ]) || $is_follow) unset($list[ 'data' ][ $k ]);
                } else {
                    $v[ 'nickname' ] = empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ];
                    $v[ 'headimg' ] = empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ];
                    if ($is_follow) unset($list[ 'data' ][ $k ]);
                }
            }
            $list[ 'data' ] = array_values($list[ 'data' ]);
        }
        return $list;
    }

    /**
     * 获取用户信息
     * @return array
     */
    public function info($data)
    {
        $member_id = $data[ 'member_id' ] == '' ? $this->member_id : $data[ 'member_id' ];
        $info = $this->model->field('member_id,follow_num,fans_num,like_num,collect_num,intro')
            ->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $member_id ] ])
            ->with([ 'member' ])
            ->findOrEmpty()->toArray();
        if (empty($info)) throw new ApiException('MEMBER_NOT_EXIST');
        if ($member_id == 0) {
            //member_id为0时，展示系统设置的名称和头像
            $site_info = ( new SiteService() )->getSiteCache();
            $info[ 'nickname' ] = empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ];
            $info[ 'headimg' ] = empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ];
            $info[ 'member_no' ] = 0;
        }
        if ($member_id != $this->member_id) {
            $info[ 'is_follow' ] = ( new FollowService() )->getIsFollow($member_id);
            $info[ 'is_self' ] = false;
        } else {
            $info[ 'is_self' ] = true;
        }
        return $info;
    }

}
