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

use addon\sow_community\app\model\Topic;
use core\base\BaseApiService;


/**
 * 社区话题服务层
 * Class TopicService
 * @package addon\sow_community\app\service\api\content
 */
class TopicService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Topic();
    }

    /**
     * 获取社区话题列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getList(array $where = [])
    {
        $field = 'topic_id,topic_name';
        $order = 'sort desc,create_time desc';
        $topic_where = [
            [ 'site_id', '=', $this->site_id ],
            [ 'status', '=', 1 ]
        ];
        $list = $this->model->where($topic_where)->withSearch([ "topic_id", "topic_name" ], $where)->field($field)->order($order)->select()->toArray();
        $recommend_list = $this->model->where($topic_where)->where([ [ 'is_recommend', '=', 1 ] ])->withSearch([ "topic_id", "topic_name" ], $where)->field($field)->order($order)->select()->toArray();
        return [
            'list' => $list,
            'recommend_list' => $recommend_list
        ];
    }

}
