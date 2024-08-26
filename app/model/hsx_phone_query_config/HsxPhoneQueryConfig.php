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

namespace app\model\hsx_phone_query_config;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

/**
 * HsxPhoneQueryConfig模型
 * Class HsxPhoneQueryConfig
 * @package app\model\hsx_phone_query_config
 */
class HsxPhoneQueryConfig extends BaseModel
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
    protected $name = 'hsx_phone_query_config';

    

    

    /**
     * 搜索器:
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
     * 搜索器:由系统分配的AppID，在个人中心中查看
     * @param $value
     * @param $data
     */
    public function searchAppidAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("appid", $value);
        }
    }
    
    /**
     * 搜索器:由系统分配的密钥，在个人中心中查看
     * @param $value
     * @param $data
     */
    public function searchSecretAttr($query, $value, $data)
    {
       if ($value) {
            $query->where("Secret", $value);
        }
    }
    
    

    

    
}
