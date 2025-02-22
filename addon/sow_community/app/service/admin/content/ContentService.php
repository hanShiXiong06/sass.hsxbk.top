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

namespace addon\sow_community\app\service\admin\content;

use addon\sow_community\app\dict\ContentDict;
use addon\sow_community\app\model\Content;
use addon\sow_community\app\service\core\content\CoreContentService;
use addon\sow_community\app\service\core\member\CoreMemberService;
use addon\sow_community\app\service\core\topic\CoreTopicService;
use app\service\admin\sys\ConfigService;
use core\base\BaseAdminService;
use think\facade\Db;

/**
 * 社区内容服务层
 * Class ContentService
 * @package  addon\sow_community\app\service\admin\content;
 */
class ContentService extends BaseAdminService
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
        $field = 'content_id,site_id,member_id,content_title,content_type,content_cover,status,is_recommend,create_time,like_num,comment_num,share_num,collect_num,view_num';
        $order = 'create_time desc';
        $search_model = $this->model->where([ [ 'site_id', "=", $this->site_id ] ])->withSearch([ 'content_id', 'topic_id', 'content_type', 'content_title', 'status' ], $where)->field($field)
            ->with([ 'member' ])
            ->append([ 'content_type_name', 'status_name', 'content_cover_thumb_small' ])
            ->order($order);
        $list = $this->pageQuery($search_model);
        if (!empty($list[ 'data' ])) {
            $site_info = ( new ConfigService() )->getWebSite();
            foreach ($list[ 'data' ] as $k => &$v) {
                $v[ 'content_cover' ] = $v[ 'content_cover_thumb_small' ] ? : $v[ 'content_cover' ];
                if ($v[ 'member_id' ] == 0) {//后台发布，展示系统设置的名称和头像
                    $v[ 'member' ] = [
                        'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                        'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
                    ];
                }
            }
        }
        return $list;
    }

    /**
     * 获取社区内容信息
     * @param int $id
     * @return array
     */
    public function getInfo($id)
    {
        $field = 'content_id,site_id,member_id,category_id,topic_ids,content_title,content_type,content_cover,content_image,content_video,content,treasure_ids,is_recommend,status,create_time,like_num,comment_num,share_num,collect_num,view_num';
        $info = $this->model->field($field)->where([ [ 'content_id', "=", $id ] ])->with([ 'member' ])->append([ 'content_type_name', 'status_name', 'topic_list', 'treasure_list' ])->findOrEmpty()->toArray();
        if ($info[ 'member_id' ] == 0) { // 后台发布，展示系统设置的名称和头像
            $site_info = ( new ConfigService() )->getWebSite();
            $info[ 'member' ] = [
                'nickname' => empty($site_info[ 'front_end_name' ]) ? $site_info[ 'site_name' ] : $site_info[ 'front_end_name' ],
                'headimg' => empty($site_info[ 'front_end_icon' ]) ? $site_info[ 'front_end_logo' ] : $site_info[ 'front_end_icon' ]
            ];
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
        return ( new CoreContentService() )->add($data, true);
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
        return ( new CoreContentService() )->edit($id, $data);
    }

    /**
     * 删除社区内容
     * @param array $ids
     * @return bool
     */
    public function del($ids)
    {
        $data[ 'site_id' ] = $this->site_id;
        return ( new CoreContentService() )->del($ids, $data);
    }

    /**
     * 社区内容审核
     * @param $id
     * @param $data
     * @return mixed
     */
    public function audit($id, $data)
    {
        $model = $this->model->where([ [ 'content_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->findOrEmpty();
        Db::startTrans();
        try {
            if ($data[ 'status' ] == ContentDict::AUDIT_ADOPT) {
                ( new CoreMemberService() )->editStatNum($model[ 'member_id' ], $this->site_id, 'content_num', 1); // 更新用户内容数
                if (!empty($model[ 'topic_ids' ])) {
                    $core_topic_service = new CoreTopicService();
                    foreach ($model[ 'topic_ids' ] as $topic_id) {
                        $member_topic_count = $this->model->where([
                            [ 'member_id', '=', $model[ 'member_id' ] ],
                            [ 'site_id', '=', $this->site_id ]
                        ])->withSearch([ "topic_id" ], [ 'topic_id' => $topic_id ])->count();
                        if ($member_topic_count == 0) {
                            $core_topic_service->editStatNum($topic_id, $this->site_id, 'member_num', 1); // 更新话题相关作者数
                        }
                        $core_topic_service->editStatNum($topic_id, $this->site_id, 'content_num', 1); // 更新话题相关内容数
                    }
                }
            }
            $model->save([ 'status' => $data[ 'status' ], 'refuse_reason' => $data[ 'refuse_reason' ] ]);
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

    /**
     * 社区内容强制下架
     * @param array $ids
     * @return bool
     */
    public function statusOff($ids)
    {
        $model = $this->model->where([ [ 'content_id', 'in', $ids ], [ 'site_id', '=', $this->site_id ] ])->select();
        Db::startTrans();
        try {
            foreach ($model as $content) {
                if (in_array($content[ 'status' ], [ ContentDict::AUDIT_NO, ContentDict::AUDIT_ADOPT ])) {
                    ( new CoreMemberService() )->editStatNum($content[ 'member_id' ], $this->site_id, 'content_num', -1);//更新用户内容数
                    ( new CoreMemberService() )->editStatNum($content[ 'member_id' ], $this->site_id, 'like_num', -$content[ 'like_num' ]);//更新用户点赞数
                }
                $content->save([ 'status' => ContentDict::FORCE_DOWN ]);
            }
            Db::commit();
            return true;
        } catch (\Exception $e) {
            Db::rollback();
            return false;
        }
    }

}
