<?php
 
namespace addon\cps\app\model;

use core\base\BaseModel;
use think\db\Query;

/**
 * 联盟配置模型
 * Class Site
 * @package app\model\site
 */
class Site extends BaseModel
{

    protected $type = [
        'expire_time'  =>  'timestamp',
    ];
    /**
     * 数据表主键
     * @var string
     */
    protected $pk = 'id';

    /**
     * 模型名称
     * @var string
     */
    protected $name = 'cps';
 
    

}
