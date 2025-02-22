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

use addon\sow_community\app\dict\ContentDict;
use addon\sow_community\app\service\core\treasure\CoreTreasureService;
use app\dict\sys\FileDict;
use app\model\member\Member;
use core\base\BaseModel;
use think\db\Query;
use think\model\relation\HasOne;

/**
 * 社区内容模型
 * Class Content
 * @package addon\sow_community\app\model
 */
class Content extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'content_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_content';

    // 设置json类型字段
    protected $json = [ 'topic_ids', 'treasure_ids' ];

    // 设置JSON数据返回数组
    protected $jsonAssoc = true;

    /**
     * 关联会员
     * @return hasOne
     */
    public function member()
    {
        return $this->hasOne(Member::class, 'member_id', 'member_id')
            ->joinType('left')
            ->withField('member_id,nickname,headimg');
    }

    /**
     * 关联分类
     * @return hasOne
     */
    public function category()
    {
        return $this->hasOne(Category::class, 'category_id', 'category_id')->field('category_id,category_name')->bind([ 'category_name' ]);
    }

    /**
     * 搜索器:社区内容id
     * @param $value
     * @param $data
     */
    public function searchContentIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("content_id", $value);
        }
    }

    /**
     * 搜索器:社区内容标题
     * @param $value
     * @param $data
     */
    public function searchContentTitleAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("content_title", 'like', '%' . $value . '%');
        }
    }

    /**
     * 搜索器:话题id
     * @param $value
     * @param $data
     */
    public function searchTopicIdAttr(Query $query, $value, $data)
    {
        if ($value) {
            if (is_array($value)) {
                $temp_where = array_map(function($item) { return '%"' . $item . '"%'; }, $value);
            } else {
                $temp_where = [ '%"' . $value . '"%' ];
            }
            $query->where('topic_ids', 'like', $temp_where, 'or');
        }
    }

    /**
     * 搜索器:宝贝id
     * @param $value
     * @param $data
     */
    public function searchTreasureIdAttr(Query $query, $value, $data)
    {
        if ($value) {
            if (is_array($value)) {
                $temp_where = array_map(function($item) { return '%"' . $item . '"%'; }, $value);
            } else {
                $temp_where = [ '%"' . $value . '"%' ];
            }
            $query->where('treasure_ids', 'like', $temp_where, 'or');
        }
    }

    /**
     * 搜索器:分类id
     * @param $value
     * @param $data
     */
    public function searchCategoryIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("category_id", $value);
        }
    }

    /**
     * 搜索器:内容类型
     * @param $value
     * @param $data
     */
    public function searchContentTypeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("content_type", $value);
        }
    }

    /**
     * 搜索器:社区话题分类状态
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
     * 内容类型字段转化
     * @param $value
     * @param $data
     * @return mixed
     */
    public function getContentTypeNameAttr($value, $data)
    {
        if (!empty($data[ 'content_type' ])) {
            return ContentDict::getTypeList($data[ 'content_type' ]) ?? '';
        }
        return '';
    }

    /**
     * 状态字段转化
     * @param $value
     * @param $data
     * @return mixed
     */
    public function getStatusNameAttr($value, $data)
    {
        if ($data[ 'status' ] != '') {
            return ContentDict::getStatusList($data[ 'status' ]) ?? '';
        }
        return '';
    }

    /**
     * 话题id字段转化
     * @param $value
     * @param $data
     * @return array|void
     */
    public function getTopicListAttr($value, $data)
    {
        if (isset($data[ 'topic_ids' ]) && !empty($data[ 'topic_ids' ])) {
            $community_topic_model = new Topic();
            return $community_topic_model->where([
                [ 'topic_id', 'in', $data[ 'topic_ids' ] ]
            ])->field('topic_id, topic_name')->order('sort desc,topic_id desc')->select()->toArray();
        }
    }

    /**
     * 宝贝id字段转化
     * @param $value
     * @param $data
     * @return array|void
     */
    public function getTreasureListAttr($value, $data)
    {
        if (isset($data[ 'treasure_ids' ]) && !empty($data[ 'treasure_ids' ])) {
            $treasure_model = new Treasure();
            $treasure_list = $treasure_model->where([
                [ 'treasure_id', 'in', $data[ 'treasure_ids' ] ],
                [ 'is_join', '=', 1 ]
            ])->withoutField('site_id,create_time,is_join')->order('create_time desc')->append([ 'relate_type_name' ])->select()->toArray();
            if (!empty($treasure_list)) {
                $treasure_group_list = array_reduce($treasure_list, function ($carry, $item) {
                    $carry[$item['relate_type']][] = $item;
                    return $carry;
                }, []);
                $relate_ids_diff = [];
                foreach ($treasure_group_list as $k => $v) {
                    $data[ 'relate_ids' ] = array_column($v, 'relate_id');
                    $data[ 'relate_type' ] = $k;
                    $list = ( new CoreTreasureService() )->getTreasureDataList($data, false);
                    // 如果返回的关联数据中不包含已选择的数据，则将旧数据设为不参与
                    $relate_ids = array_column($list, 'relate_id');
                    $relate_ids_diff = array_merge($relate_ids_diff, array_diff($data[ 'relate_ids' ], $relate_ids));
                }
                $treasure_model->where([ [ 'relate_id', 'in', $relate_ids_diff ], [ 'relate_type', '=', $data[ 'relate_type' ] ], [ 'site_id', '=', $data[ 'site_id' ] ] ])->update([ 'is_join' => 0 ]);
                foreach ($treasure_list as $k => $v) {
                    if (in_array($v[ 'relate_id' ], $relate_ids_diff)) {
                        unset($treasure_list[ $k ]);
                    }
                }
                $treasure_list = array_values($treasure_list);
            }
            return $treasure_list;
        }
    }

    /**
     * 获取内容封面缩略图（中）
     */
    public function getContentCoverThumbMidAttr($value, $data)
    {
        if (isset($data[ 'content_cover' ]) && $data[ 'content_cover' ] != '') {
            return get_thumb_images($data[ 'site_id' ], $data[ 'content_cover' ], FileDict::MID);
        }
        return [];
    }

    /**
     * 获取内容封面缩略图（小）
     */
    public function getContentCoverThumbSmallAttr($value, $data)
    {
        if (isset($data[ 'content_cover' ]) && $data[ 'content_cover' ] != '') {
            return get_thumb_images($data[ 'site_id' ], $data[ 'content_cover' ], FileDict::SMALL);
        }
        return [];
    }

    /**
     * 获取内容图片缩略图（中）
     */
    public function getContentImageThumbMidAttr($value, $data)
    {
        if (isset($data[ 'content_image' ]) && $data[ 'content_image' ] != '') {
            $content_image = explode(',', $data[ 'content_image' ]);
            $img_arr = [];
            foreach ($content_image as $k => $v) {
                $img = get_thumb_images($data[ 'site_id' ], $v, FileDict::MID);
                if (!empty($img)) {
                    $img_arr[] = $img;
                }
            }
            return $img_arr;
        }
        return [];
    }

    /**
     * 获取内容图片缩略图（小）
     */
    public function getContentImageThumbSmallAttr($value, $data)
    {
        if (isset($data[ 'content_image' ]) && $data[ 'content_image' ] != '') {
            $content_image = explode(',', $data[ 'content_image' ]);
            $img_arr = [];
            foreach ($content_image as $k => $v) {
                $img = get_thumb_images($data[ 'site_id' ], $v, FileDict::SMALL);
                if (!empty($img)) {
                    $img_arr[] = $img;
                }
            }
            return $img_arr;
        }
        return [];
    }

}
