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

namespace addon\phone_shop\app\model\phone_shop;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

use app\model\site\Site;

/**
 * 二手机商户信息模型
 * Class PhoneShopSite
 * @package addon\phone_shop\app\model\phone_shop
 */
class PhoneShopSite extends BaseModel
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
    protected $name = 'phone_shop_site';

    

    

    /**
     * 搜索器:二手机商户信息站点id
     * @param $value
     * @param $data
     */
    public function searchIdAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("id", $value);
        }
    }
    
    /**
     * 搜索器:二手机商户信息商户名
     * @param $value
     * @param $data
     */
    public function searchNameAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("name", $value);
        }
    }
    
    /**
     * 搜索器:二手机商户信息商户身份
     * @param $value
     * @param $data
     */
    public function searchClientAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("client", $value);
        }
    }
    
    

    

    
    public function site(){
       return $this->hasOne(Site::class, 'site_id', 'id')->joinType('left')->withField('site_name,site_id')->bind(['id_name'=>'site_name']);
    }

}
