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

use addon\sow_community\app\service\core\treasure\CoreTreasureService;
use core\base\BaseModel;

/**
 * 社区宝贝库模型
 * Class Treasure
 * @package addon\sow_community\app\model
 */
class Treasure extends BaseModel
{

    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'treasure_id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'sow_community_treasure';

    /**
     * 搜索器:关键词
     * @param $value
     * @param $data
     */
    public function searchKeywordAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("treasure_name|treasure_sub_name", 'like', '%' . $value . '%');
        }
    }

    /**
     * 搜索器:关联业务类型
     * @param $value
     * @param $data
     */
    public function searchRelateTypeAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("relate_type", $value);
        }
    }

    /**
     * 关联业务类型字段转化
     * @param $value
     * @param $data
     * @return mixed
     */
    public function getRelateTypeNameAttr($value, $data)
    {
        if ($data[ 'relate_type' ]) {
            return ( new CoreTreasureService() )->getTreasureTypeList()[ $data[ 'relate_type' ] ] ?? '';
        }
        return '';
    }

}
