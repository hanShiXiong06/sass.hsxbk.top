<?php
namespace addon\tk_cps\app\service\core\platform;

use core\loader\Loader;

class PlatformLoader extends Loader
{
    /**
     * 空间名
     * @var string
     */
    protected $namespace = '\\addon\\tk_cps\\app\\service\\core\\platform\\';

    protected $config_name = 'platform';

    /**
     * 默认驱动
     * @return mixed
     */
    protected function getDefault()
    {
        return 'jtk';
    }
}