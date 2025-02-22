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

namespace addon\manage_oss\app\model\manageoss;

use app\model\site\Site;
use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * 存储管理模型
 * Class ManageOss
 * @package addon\manage_oss\app\model\manageoss
 */
class ManageOss extends BaseModel
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
    protected $name = 'manage_oss';

    public function site()
    {
        return $this->hasOne(Site::class, 'site_id', 'site_id')->joinType('left')->withField('site_name,site_id')->bind(['site_id_name' => 'site_name']);
    }
}
