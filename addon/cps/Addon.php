<?php

namespace addon\cps;
use app\service\core\addon\WapTrait;
/**
 * 插件安装之后单独的插件方法
 * Class HelloWorld
 * @package addon\cps
 */
class Addon
{
      use WapTrait;
    /**
     * 插件安装执行
     */
    public function install()
    {
       //增加半屏小程序支持
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'cps' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $to = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        copy($from, $to);
        
         //修复小程序不显示问题
        $fromCps = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'cps' . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'api' . DIRECTORY_SEPARATOR . 'cps.ts';
        $toCps = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR.'api'. DIRECTORY_SEPARATOR . 'cps.ts';
        copy($fromCps, $toCps);
        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {
         $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR .'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'cps' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'backcommon.ts';
        if (file_exists($backto)) {
            copy($backto, $backfrom);
            //删除文件备份
            unlink($backto);
        }
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