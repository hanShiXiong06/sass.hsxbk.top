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

namespace addon\sow_community\app\service\core\content;

use addon\sow_community\app\dict\ContentDict;
use addon\sow_community\app\model\Content;
use addon\sow_community\app\service\core\comment\CoreCommentService;
use addon\sow_community\app\service\core\config\CoreCommunityConfigService;
use addon\sow_community\app\service\core\member\CoreMemberService;
use addon\sow_community\app\service\core\topic\CoreTopicService;
use core\base\BaseCoreService;
use core\exception\CommonException;
use think\facade\Db;

/**
 * 社区内容服务层
 * Class CoreTreasureService
 * @package  addon\sow_community\app\service\admin\content;
 */
class CoreContentService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Content();
    }

    /**
     * 添加社区内容
     * @param array $data
     * @return mixed
     */
    public function add(array $data, $is_back_add = false)
    {
        $config = ( new CoreCommunityConfigService() )->getCommunityConfig($data[ 'site_id' ]);
        if ($config[ 'content_review_status' ] == 1) {
            $data[ 'status' ] = ContentDict::WAIT_AUDIT;
        } else {
            $data[ 'status' ] = ContentDict::AUDIT_NO;
        }
        if ($is_back_add) $data[ 'status' ] = ContentDict::AUDIT_NO;

        if ($data[ 'content_type' ] == ContentDict::IMAGE) {
            if (!empty($data[ 'content_image' ])) $data[ 'content_cover' ] = explode(',', $data[ 'content_image' ])[ 0 ];
        }
        Db::startTrans();
        try {
            if ($data['status'] == ContentDict::AUDIT_NO) {
                (new CoreMemberService())->editStatNum($data['member_id'], $data['site_id'], 'content_num', 1);
                if (!empty($data['topic_ids'])) {
                    $core_topic_service = new CoreTopicService();
                    foreach ($data['topic_ids'] as $topic_id) {
                        $member_topic_count = $this->model->where([
                            ['member_id', '=', $data['member_id']],
                            ['site_id', '=', $data['site_id']]
                        ])->withSearch(["topic_id"], ['topic_id' => $topic_id])->count();
                        if ($member_topic_count == 0) {
                            $core_topic_service->editStatNum($topic_id, $data['site_id'], 'member_num', 1);//更新话题相关作者数
                        }
                        $core_topic_service->editStatNum($topic_id, $data['site_id'], 'content_num', 1);//更新话题相关内容数
                    }
                }
            }
            $data['topic_ids'] = array_map(function ($item) {
                return (string)$item;
            }, $data['topic_ids']);
            $data['treasure_ids'] = array_map(function ($item) {
                return (string)$item;
            }, $data['treasure_ids']);
            $res = $this->model->create($data);
            Db::commit();
            return $res->content_id;
        } catch (\Exception $e) {
            Db::rollback();
            throw new CommonException($e->getMessage());
        }
    }

    /**
     * 社区内容编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit($id, array $data)
    {
        if ($data[ 'content_type' ] == ContentDict::IMAGE) {
            if (!empty($data[ 'content_image' ])) $data[ 'content_cover' ] = explode(',', $data[ 'content_image' ])[ 0 ];
        }
        $data[ 'topic_ids' ] = array_map(function($item) { return (string) $item; }, $data[ 'topic_ids' ]);
        $data[ 'treasure_ids' ] = array_map(function($item) { return (string) $item; }, $data[ 'treasure_ids' ]);
        $this->model->where([ [ 'content_id', '=', $id ], [ 'site_id', '=', $data[ 'site_id' ] ] ])->update($data);
        return true;
    }

    /**
     * 删除社区内容
     * @param array $ids
     * @param array $data
     * @return bool
     */
    public function del($ids, $data)
    {
        $model = $this->model->where([ [ 'content_id', 'in', $ids ], [ 'site_id', '=', $data[ 'site_id' ] ] ])->select();
        Db::startTrans();
        try {
            $core_comment_service = new CoreCommentService();
            $core_member_service = new CoreMemberService();
            $core_topic_service = new CoreTopicService();
            foreach ($model as $content) {
                $core_comment_service->delByContentId($content[ 'content_id' ], $data);//删除社区内容下的评论
                if (in_array($content[ 'status' ], [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ])) {
                    $core_member_service->editStatNum($content[ 'member_id' ], $data[ 'site_id' ], 'content_num', -1);//更新用户内容数
                    $core_member_service->editStatNum($content[ 'member_id' ], $data[ 'site_id' ], 'like_num', -$content[ 'like_num' ]);//更新用户点赞数
                    if (!empty($content[ 'topic_ids' ])) {
                        foreach ($content[ 'topic_ids' ] as $topic_id) {
                            $member_topic_count = $this->model->where([
                                [ 'member_id', '=', $content[ 'member_id' ] ],
                                [ 'site_id', '=', $data[ 'site_id' ] ]
                            ])->withSearch([ "topic_id" ], [ 'topic_id' => $topic_id ])->count();
                            if ($member_topic_count == 1) {
                                $core_topic_service->editStatNum($topic_id, $data[ 'site_id' ], 'member_num', -1);//更新话题相关作者数
                            }
                            $core_topic_service->editStatNum($topic_id, $data[ 'site_id' ], 'content_num', -1);//更新话题相关内容数
                        }
                    }
                }
                $content->delete();
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

    /**
     * 更新社区内容统计数据
     * @param int $content_id
     * @param int $site_id
     * @param string $field
     * @param int $num
     * @return bool
     */
    public function editStatNum($content_id, $site_id, $field, $num)
    {
        $content = $this->model->where([ [ 'content_id', '=', $content_id ], [ 'site_id', '=', $site_id ] ])->findOrEmpty();
        if (!$content->isEmpty()) {
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
                $content->save($update_data);
            }
        }
        return true;
    }

}
