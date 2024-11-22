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

namespace addon\phone_shop_price\app\model;

use core\base\BaseModel;
use think\model\concern\SoftDelete;
use think\model\relation\HasMany;
use think\model\relation\HasOne;

// 二手机回收_c端 分类查询
class RecyclePrice  extends BaseModel{
    // 主键为组合主键 id, level ,parent_id
    
    protected $pk =  ' id,level,parent_id ';

    protected $name = 'hsx_price_product_hierarchy';

    


}