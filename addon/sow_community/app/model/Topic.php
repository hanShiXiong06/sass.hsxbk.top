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

namespace addon\sow_community\app\model;

use core\base\BaseModel;

/**
 * 社区话题模型
 * Class Topic
 * @package addon\sow_community\app\model
 */
class Topic extends BaseModel
{


    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'topic_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_topic';


    /**
     * 搜索器:社区话题id
     * @param $value
     * @param $data
     */
    public function searchTopicIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("topic_id", $value);
        }
    }

    /**
     * 搜索器:社区话题名称
     * @param $value
     * @param $data
     */
    public function searchTopicNameAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("topic_name", 'like', '%' . $value . '%');
        }
    }

    /**
     * 搜索器:社区话题状态
     * @param $value
     * @param $data
     */
    public function searchStatusAttr($query, $value, $data)
    {
        if ($value !== '') {
            $query->where("status", $value);
        }
    }

    /**
     * 搜索器:社区话题是否推荐
     * @param $value
     * @param $data
     */
    public function searchIsRecommendAttr($query, $value, $data)
    {
        if ($value !== '') {
            $query->where("is_recommend", $value);
        }
    }

}
