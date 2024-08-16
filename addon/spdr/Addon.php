<?php

namespace addon\spdr;


/**
 * 插件安装之后单独的插件方法
 */
class Addon
{
    /**
     * 插件安装执行
     */
    public function install()
    {
        $fromNew = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'spdr' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR  . 'upload.php';
        $to = root_path() . 'config' .  DIRECTORY_SEPARATOR . 'upload.php';
        copy($fromNew, $to);
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
