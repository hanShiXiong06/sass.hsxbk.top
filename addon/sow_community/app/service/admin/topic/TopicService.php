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

namespace addon\sow_community\app\service\admin\topic;


use addon\sow_community\app\model\Content;
use addon\sow_community\app\model\Topic;
use core\base\BaseAdminService;
use core\exception\AdminException;


/**
 * 社区话题服务层
 * Class TopicService
 * @package  addon\sow_community\app\service\admin\topic;
 */
class TopicService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Topic();
    }

    /**
     * 获取社区话题分页列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getPage(array $where = [])
    {
        $field = 'topic_id,topic_name,is_recommend,status,sort,content_num,member_num,create_time';
        $order = 'create_time desc';
        if (!empty($where[ 'order' ])) {
            $order = $where[ 'order' ] . ' ' . $where[ 'sort' ];
        }

        $search_model = $this->model->where([ [ 'site_id', "=", $this->site_id ] ])->withSearch([ "category_id", "topic_name", "status", "is_recommend" ], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取社区话题列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getList(array $where = [], $field = 'topic_id,topic_name,is_recommend,status,sort,content_num,member_num,create_time')
    {
        $order = 'sort desc,create_time desc';
        return $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ "category_id", "topic_name", "status", "is_recommend" ], $where)->field($field)->order($order)->select()->toArray();
    }

    /**
     * 获取社区话题信息
     * @param int $id
     * @return array
     */
    public function getInfo($id)
    {
        $field = 'topic_id,topic_name,is_recommend,member_num,status,sort';
        $info = $this->model->field($field)->where([ [ 'topic_id', "=", $id ] ])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加社区话题
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $res = $this->model->create($data);
        return $res->topic_id;
    }

    /**
     * 社区话题编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit($id, array $data)
    {
        $this->model->where([ [ 'topic_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->update($data);
        return true;
    }

    /**
     * 删除社区话题
     * @param int $id
     * @return bool
     */
    public function del($id)
    {
        $count = ( new Content() )->where([ [ 'topic_ids', 'like', '%"' . $id . '"%' ], [ 'site_id', '=', $this->site_id ] ])->count();
        if ($count > 0) throw new AdminException('TOPIC_CAN_NOT_DEL');
        $model = $this->model->where([ [ 'topic_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->find();
        $res = $model->delete();
        return $res;
    }

    /**
     * 修改社区话题排序号
     * @param $data
     * @return mixed
     */
    public function modifySort($data)
    {
        return $this->model->where([ [ 'topic_id', '=', $data[ 'topic_id' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'sort' => $data[ 'sort' ] ]);
    }

    /**
     * 修改社区话题状态
     * @param $data
     * @return mixed
     */
    public function modifyStatus($data)
    {
        return $this->model->where([ [ 'topic_id', '=', $data[ 'topic_id' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'status' => $data[ 'status' ] ]);
    }

    /**
     * 修改社区话题推荐状态
     * @param $data
     * @return mixed
     */
    public function modifyRecommend($data)
    {
        return $this->model->where([ [ 'topic_id', '=', $data[ 'topic_id' ] ], [ 'site_id', '=', $this->site_id ] ])->update([ 'is_recommend' => $data[ 'is_recommend' ] ]);
    }

    /**
     * 获取话题内容
     * @param $data
     * @return mixed
     */
    public function getContent($data)
    {
        $topic_id = $data[ 'topic_id' ];
        $search_model = ( new Content() )->field('content_id,content_title,member_id')
            ->where([ [ 'topic_ids', 'like', '%"' . $topic_id . '"%' ], [ 'site_id', '=', $this->site_id ] ])
            ->field('content_id,member_id,content_title')
            ->order('create_time desc');
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 检测话题名称唯一性
     * @param array $data
     * @return bool
     */
    public function checkTopicNameUnique($data)
    {
        $where = [
            [ 'topic_name', "=", $data[ 'topic_name' ] ],
            [ 'site_id', "=", $this->site_id ]
        ];
        if (!empty($data[ 'topic_id' ])) {
            $where[] = [ 'topic_id', "<>", $data[ 'topic_id' ] ];
        }
        return $this->model->where($where)->count() > 0;
    }

}
