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

namespace addon\sow_community\app\service\api\content;

use addon\sow_community\app\dict\ContentDict;
use addon\sow_community\app\dict\FollowDict;
use addon\sow_community\app\model\Content;
use addon\sow_community\app\model\Follow;
use addon\sow_community\app\model\Topic;
use addon\sow_community\app\model\Treasure;
use addon\sow_community\app\service\api\follow\FollowService;
use addon\sow_community\app\service\core\config\CoreCommunityConfigService;
use addon\sow_community\app\service\core\content\CoreContentService;
use addon\sow_community\app\service\core\topic\CoreTopicService;
use app\service\api\site\SiteService;
use core\base\BaseApiService;
use think\facade\Db;


/**
 * 社区内容服务层
 * Class ContentService
 * @package addon\sow_community\app\service\api\content
 */
class ContentService extends BaseApiService
{

    public function __construct()
    {
        parent::__construct();
        $this->model = new Content();
    }

    /**
     * 获取社区内容分页列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'content_id,site_id,member_id,category_id,topic_ids,content_type,content_title,content_image,content_video,content_cover,content,treasure_ids,status,refuse_reason,create_time,like_num,comment_num,share_num,collect_num,view_num';

        $content_where = [
            [ 'site_id', "=", $this->site_id ],
            [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ]
        ];

        if (!empty($this->member_id)) {
            if ($where[ 'is_follow' ] == 1) {
                $follow_member_ids = ( new Follow() )->where([ [ 'site_id', '=', $this->site_id ], [ 'member_id', '=', $this->member_id ], [ 'is_follow', '=', FollowDict::FOLLOW ] ])->order('create_time desc')->column('follow_member_id');
                $content_where[] = [ 'member_id', 'in', $follow_member_ids ];
            } else {
                if ($where[ 'member_id' ] != '') {
                    if ($where[ 'member_id' ] == $this->member_id) {
                        $content_where = [
                            [ 'site_id', "=", $this->site_id ],
                            [ 'status', '<>', ContentDict::FORCE_DOWN ]
                        ];
                    }
                    $content_where[] = [ 'member_id', '=', $where[ 'member_id' ] ];
                }
            }
        }

        if (!empty($where[ 'start_id' ])) {
            $content_where[] = [ 'content_id', '<>', $where[ 'start_id' ] ];
        }

        if (!empty($where[ 'topic_name' ])) {
            $topic_id = ( new Topic() )->where([
                    [ 'topic_name', 'like', '%' . $where[ 'topic_name' ] . '%' ],
                    [ 'status', '=', 1 ],
                    [ 'site_id', '=', $this->site_id ]
                ])->value('topic_id') ?? -1;
            $where[ 'topic_id' ] = $topic_id;
        }

        if (!empty($where[ 'type' ]) && $where[ 'type' ] == 'hot') {
            $order = 'like_num desc,comment_num desc,share_num desc,view_num desc,create_time desc';
        } else {
            $order = 'create_time desc';
        }

        $search_model = $this->model->where($content_where)->withSearch([ "category_id", "topic_id", "content_title", "content_type" ], $where)->field($field)
            ->with([ 'member', 'category' ])
            ->order($order)
            ->append([ 'status_name', 'topic_list', 'treasure_list', 'content_cover_thumb_mid' ]);

        if (!empty($where[ 'start_id' ])) {
            $page = $this->getPageParam();
            $start = $this->getDetail($where[ 'start_id' ]);
            $list = $search_model->paginate([
                'list_rows' => empty($start) ? $page[ 'limit' ] : $page[ 'limit' ] - 1,
                'page' => $page[ 'page' ],
            ])->toArray();
        } else {
            $list = $this->pageQuery($search_model);
        }

        if (!empty($start)) {
            array_unshift($list[ 'data' ], $start);
            $list[ 'total' ] += 1;
        }

        if (!empty($list[ 'data' ])) {
            $config = ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
            $site_info = ( new SiteService() )->getSiteCache();
            foreach ($list[ 'data' ] as $k => &$v) {
                if (!empty($this->member_id)) {
                    $is_like = ( new ContentLikeService() )->getIsLike($v[ 'content_id' ]);
                    $is_follow = ( new FollowService() )->getIsFollow($v[ 'member_id' ]);
                    $v[ 'is_like' ] = $is_like;
                    $v[ 'is_follow' ] = $is_follow;
                    $v[ 'is_self' ] = $v[ 'member_id' ] == $this->member_id;
                } else {
                    $v[ 'is_like' ] = false;
                    $v[ 'is_follow' ] = false;
                    $v[ 'is_self' ] = false;
                }
                if ($v[ 'member_id' ] == 0) {
                    $v[ 'member' ] = [
                        'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                        'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                    ];
                }
                $v[ 'image_num' ] = !empty($v[ 'content_image' ]) ? count(explode(',', $v[ 'content_image' ])) : 0;
                $v[ 'create_time' ] = get_last_time(strtotime($v[ 'create_time' ]));
                $v[ 'community_comments_status' ] = $config[ 'community_comments_status' ];
                $v[ 'comment_moderation_status' ] = $config[ 'comment_moderation_status' ];
                $v[ 'content_cover' ] = $v[ 'content_cover_thumb_mid' ] ? : $v[ 'content_cover' ];
                $v[ 'content_cover_width' ] = 0;
                $v[ 'content_cover_height' ] = 0;
            }
        }

        return $list;
    }

    /**
     * 通过会员id获取社区内容列表
     * @param int $member_id
     * @param int $limit
     * @return array
     */
    public function getListByMemberId($member_id, $limit = 0)
    {
        $field = 'content_id,site_id,content_type,content_cover';
        $order = 'create_time desc';
        $content_where = [
            [ 'member_id', "=", $member_id ],
            [ 'site_id', "=", $this->site_id ],
            [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ]
        ];
        return $this->model->where($content_where)->field($field)->order($order)->limit($limit)->append([ 'content_cover_thumb_mid' ])->select()->toArray();
    }

    /**
     * 查询内容详情
     * @param $content_id
     * @return mixed
     */
    public function getDetail($content_id)
    {
        $field = 'content_id,site_id,member_id,category_id,topic_ids,content_type,content_title,content_image,content_video,content_cover,content,treasure_ids,status,refuse_reason,create_time,like_num,comment_num,share_num,collect_num,view_num';

        $content_where = [
            [ 'content_id', "=", $content_id ],
            [ 'site_id', "=", $this->site_id ],
            [ 'status', '<>', ContentDict::FORCE_DOWN ]
        ];

        $info = $this->model->where($content_where)->field($field)->with([ 'member', 'category' ])->append([ 'status_name', 'topic_list', 'treasure_list', 'content_cover_thumb_mid', 'content_image_thumb_mid' ])->findOrEmpty()->toArray();
        if (!empty($info)) {
            $site_info = ( new SiteService() )->getSiteCache();
            if (!empty($this->member_id)) {
                $info[ 'is_like' ] = ( new ContentLikeService() )->getIsLike($info[ 'content_id' ]);
                $info[ 'is_follow' ] = ( new FollowService() )->getIsFollow($info[ 'member_id' ]);
                $info[ 'is_self' ] = $info[ 'member_id' ] == $this->member_id;
            } else {
                $info[ 'is_like' ] = false;
                $info[ 'is_follow' ] = false;
                $info[ 'is_self' ] = false;
            }
            if ($info[ 'member_id' ] == 0) {
                $info[ 'member' ] = [
                    'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                    'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                ];
            }
            $info[ 'image_num' ] = !empty($info[ 'content_image' ]) ? count(explode(',', $info[ 'content_image' ])) : 0;
            $info[ 'create_time' ] = get_last_time(strtotime($info[ 'create_time' ]));
            $config = ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
            $info[ 'community_comments_status' ] = $config[ 'community_comments_status' ];
            $info[ 'comment_moderation_status' ] = $config[ 'comment_moderation_status' ];
            if (!in_array($info[ 'status' ], [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ])) {
                if (!empty($this->member_id)) {
                    if ($info[ 'member_id' ] != $this->member_id) {
                        $info = [];
                    }
                } else {
                    $info = [];
                }
            }
        }
        return $info;
    }

    /**
     * 添加社区内容
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $data[ 'member_id' ] = $this->member_id;
        return ( new CoreContentService() )->add($data);
    }

    /**
     * 社区内容编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit($id, array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $config = ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
        if ($config[ 'content_review_status' ] == 1) {
            $data[ 'status' ] = ContentDict::WAIT_AUDIT;
        } else {
            $data[ 'status' ] = ContentDict::AUDIT_NO;
        }
        return ( new CoreContentService() )->edit($id, $data);
    }

    /**
     * 删除社区内容
     * @param int $id
     * @return bool
     */
    public function del($id)
    {
        $data[ 'site_id' ] = $this->site_id;
        return ( new CoreContentService() )->del([ $id ], $data);
    }

    /**
     * 社区内容浏览
     * @param int $content_id
     * @return bool
     */
    public function browse($content_id)
    {
        $content = $this->model->field('topic_ids')->where([ [ 'content_id', '=', $content_id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty()->toArray();
        Db::startTrans();
        try {
            if (!empty($content) && !empty($content['topic_ids'])) {
                $core_topic_service = new CoreTopicService();
                foreach ($content['topic_ids'] as $topic_id) {
                    $core_topic_service->editStatNum($topic_id, $this->site_id, 'view_num', 1);
                }
            }
            (new CoreContentService())->editStatNum($content_id, $this->site_id, 'view_num', 1);
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

    /**
     * 社区内容分享
     * @param int $content_id
     * @return bool
     */
    public function share($content_id)
    {
        return ( new CoreContentService() )->editStatNum($content_id, $this->site_id, 'share_num', 1);
    }

    /**
     * 获取种草秀组件内容列表
     * @param array $params
     * @return array
     */
    public function getSowShowComponents($params)
    {
        $limit = $params[ 'limit' ] ?? 3;
        $data = [];
        $treasure_id = ( new Treasure() )->where([
            [ 'relate_id', '=', $params[ 'relate_id' ] ],
            [ 'relate_type', '=', $params[ 'relate_type' ] ],
            [ 'site_id', '=', $this->site_id ],
            [ 'is_join', '=', 1 ]
        ])->value('treasure_id');
        // 种草秀开启关闭设置查询
        $config = ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
        if (!empty($treasure_id) && $config[ 'community_is_use' ] == 1) {
            $field = 'content_id,content_type,content_cover';
            $order = 'create_time desc';

            $content_where = [
                [ 'site_id', "=", $this->site_id ],
                [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ]
            ];

            $where[ 'treasure_id' ] = $treasure_id;
            $count = $this->model->where($content_where)->withSearch([ "treasure_id" ], $where)->count();
            $list = $this->model->where($content_where)->withSearch([ "treasure_id" ], $where)->field($field)->order($order)->limit($limit)->select()->toArray();
            $data = [
                'count' => $count,
                'url' => '/addon/sow_community/pages/sow_show?treasure_id=' . $treasure_id,
                'list' => $list
            ];
        }
        return $data;
    }

    /**
     * 获取宝贝内容分页列表
     * @param int $treasure_id
     * @return array
     */
    public function getTreasureContentPage($treasure_id)
    {
        $data = [];
        $treasure_info = ( new Treasure() )->field('treasure_id,treasure_name,treasure_image')->where([
            [ 'treasure_id', '=', $treasure_id ],
            [ 'site_id', '=', $this->site_id ],
            [ 'is_join', '=', 1 ]
        ])->findOrEmpty()->toArray();
        // 种草秀开启关闭设置查询
        $config = ( new CoreCommunityConfigService() )->getCommunityConfig($this->site_id);
        if (!empty($treasure_info) && $config[ 'community_is_use' ] == 1) {
            $field = 'content_id,member_id,content_type,content_title,content_image,content_cover,like_num';
            $order = 'create_time desc';

            $content_where = [
                [ 'site_id', "=", $this->site_id ],
                [ 'status', 'in', [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ] ]
            ];

            $where[ 'treasure_id' ] = $treasure_info[ 'treasure_id' ];
            $count = $this->model->where($content_where)->withSearch([ "treasure_id" ], $where)->count();
            $treasure_info[ 'count' ] = $count;
            $search_model = $this->model->where($content_where)->withSearch([ "treasure_id" ], $where)->field($field)
                ->with([ 'member' ])
                ->order($order);

            $list = $this->pageQuery($search_model);

            if (!empty($list[ 'data' ])) {
                foreach ($list[ 'data' ] as $k => &$v) {
                    if (!empty($this->member_id)) {
                        $is_like = ( new ContentLikeService() )->getIsLike($v[ 'content_id' ]);
                        $v[ 'is_like' ] = $is_like;
                    } else {
                        $v[ 'is_like' ] = false;
                    }
                    $v[ 'image_num' ] = !empty($v[ 'content_image' ]) ? count(explode(',', $v[ 'content_image' ])) : 0;
                }
            }
            $data = [
                'treasure_info' => $treasure_info,
                'list' => $list
            ];
        }
        return $data;
    }

}
