<?php

namespace addon\o2o;

use app\service\admin\diy\DiyService;

/**
 * 插件安装之后单独的插件方法
 * Class O2o
 * @package addon\o2o
 */
class Addon
{
    /**
     * 插件安装执行
     */
    public function install()
    {
        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {
        return true;
    }

    /**
     * 插件升级执行
     */
    public function upgrade()
    {
        return true;
    }

}