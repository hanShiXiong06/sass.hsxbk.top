<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/11/13
 * 时间: 下午3:17
 */

// +----------------------------------------------------------------------

namespace addon\qf_notice\app\model\user;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

use addon\qf_notice\app\model\usercat\UserCat;

/**
 * 用户列模型
 * Class User
 * @package addon\qf_notice\app\model\user
 */
class User extends BaseModel
{


    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'qfnotice_user';


    /**
     * 搜索器:用户列分类ID
     * @param $value
     * @param $data
     */
    public function searchCatIdAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("cat_id", $value);
        }
    }

    /**
     * 搜索器:用户列电话
     * @param $value
     * @param $data
     */
    public function searchMobileAttr($query, $value, $data)
    {
        if ($value) {
            $query->where("mobile", "like", "%" . $value . "%");
        }
    }

    /**
     * 搜索器:用户列创建实际
     * @param $value
     * @param $data
     */
    public function searchCreateTimeAttr($query, $value, $data)
    {
        $start = empty($value[0]) ? 0 : strtotime($value[0]);
        $end = empty($value[1]) ? 0 : strtotime($value[1]);
        if ($start > 0 && $end > 0) {
            $query->where([["create_time", "between", [$start, $end]]]);
        } else if ($start > 0 && $end == 0) {
            $query->where([["create_time", ">=", $start]]);
        } else if ($start == 0 && $end > 0) {
            $query->where([["create_time", "<=", $end]]);
        }
    }


    public function userCat()
    {
        return $this->hasOne(UserCat::class, 'id', 'cat_id')->joinType('left')->withField('name,id')->bind(['cat_id_name' => 'name']);
    }

}