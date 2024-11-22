<?php

namespace addon\tk_pan;


use addon\tk_pan\app\service\core\CloudService;

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
        //移动文件到公共驱动
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'Ott.php';
        $to = root_path() . 'core' . DIRECTORY_SEPARATOR . 'upload' . DIRECTORY_SEPARATOR . 'Ott.php';
        copy($from, $to);
//        $fromdict = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'StorageDict.php';
//        $todict = root_path() . 'app' . DIRECTORY_SEPARATOR . 'dict' . DIRECTORY_SEPARATOR . 'sys' . DIRECTORY_SEPARATOR . 'StorageDict.php';
//        copy($fromdict, $todict);
        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {
        $to = root_path() . 'core' . DIRECTORY_SEPARATOR . 'upload' . DIRECTORY_SEPARATOR . 'Ott.php';
        if (file_exists($to)) {
            unlink($to);
        }
        $fromdict = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'StorageDict.php';
        if (file_exists($fromdict)) {
            unlink($fromdict);
        }
        return true;
    }

    /**
     * 插件升级执行
     */
    public function upgrade()
    {
        //移动文件到公共驱动
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'Ott.php';
        $to = root_path() . 'core' . DIRECTORY_SEPARATOR . 'upload' . DIRECTORY_SEPARATOR . 'Ott.php';
        copy($from, $to);
        $fromdict = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'StorageDict.php';
        $todict = root_path() . 'app' . DIRECTORY_SEPARATOR . 'dict' . DIRECTORY_SEPARATOR . 'sys' . DIRECTORY_SEPARATOR . 'StorageDict.php';
        copy($fromdict, $todict);
        return true;
    }

}
