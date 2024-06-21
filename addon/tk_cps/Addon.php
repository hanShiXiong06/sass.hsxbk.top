<?php

namespace addon\tk_cps;

use addon\tk_cps\app\service\core\CloudService;
use app\service\core\addon\WapTrait;
/**
 * 插件安装之后单独的插件方法
 */
class Addon
{
    use WapTrait;
    /**
     * 插件安装执行
     */
    public function install()
    {
        (new CloudService())->auth();
        //备份文件
        $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR .'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'backcommon.ts';
        copy($backfrom, $backto);
        //增加半屏小程序支持
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'common.ts';
        $to = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        copy($from, $to);
        //修复小程序不显示问题
        $fromCps = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'cps.ts';
        $toCps = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR.'api'. DIRECTORY_SEPARATOR . 'cps.ts';
        copy($fromCps, $toCps);
        //增加插件文件包
        $basedir = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'sub';
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app/src';
        if (file_exists($basedir)) {
            dir_copy($basedir, $rootpath);
        }
        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {
        //恢复备份
        $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR .'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'backcommon.ts';
        if (file_exists($backto)) {
            copy($backto, $backfrom);
            //删除文件备份
            unlink($backto);
        }
        //删除插件文件包
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app/src';
        if (is_dir( $rootpath.'/cpsdc')) {
            $this->deleteFolder($rootpath.'/cpsdc');
        }
        if (is_dir( $rootpath.'/cpsmeishi')) {
            $this->deleteFolder($rootpath.'/cpsmeishi');
        }
        if (is_dir( $rootpath.'/cpsmenpiao')) {
            $this->deleteFolder($rootpath.'/cpsmenpiao');
        }
        if (is_dir( $rootpath.'/cpsmovie')) {
            $this->deleteFolder($rootpath.'/cpsmovie');
        }
        if (is_dir( $rootpath.'/cpshotel')) {
            $this->deleteFolder($rootpath.'/cpshotel');
        }
        //1.2.7版本卸载插件文件包
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app';
        if (is_dir( $rootpath.'/cpsdc')) {
            $this->deleteFolder($rootpath.'/cpsdc');
        }
        if (is_dir( $rootpath.'/cpsmeishi')) {
            $this->deleteFolder($rootpath.'/cpsmeishi');
        }
        if (is_dir( $rootpath.'/cpsmenpiao')) {
            $this->deleteFolder($rootpath.'/cpsmenpiao');
        }
        if (is_dir( $rootpath.'/cpsmovie')) {
            $this->deleteFolder($rootpath.'/cpsmovie');
        }
        if (is_dir( $rootpath.'/cpshotel')) {
            $this->deleteFolder($rootpath.'/cpshotel');
        }
        return true;
    }

    /**
     * 插件升级执行
     */
    public function upgrade()
    {
        $search_string = 'style=embedded';
        $to = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $file_content = file_get_contents($to);
        if (!strpos($file_content, $search_string)) {
            //没有半屏
            $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR .'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
            $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'backcommon.ts';
            copy($backfrom, $backto);
            //升级CPS半屏
            $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'common.ts';
            copy($from, $to);
            //修复小程序不显示问题
            $fromCps = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'cps.ts';
            $toCps = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR.'api'. DIRECTORY_SEPARATOR . 'cps.ts';
            copy($fromCps, $toCps);
        }
        return true;
    }
    public function deleteFolder($folderPath)
    {
        if (!is_dir($folderPath)) {
            return;
        }

        $files = array_diff(scandir($folderPath), array('.', '..'));

        foreach ($files as $file) {
            $filePath = $folderPath . '/' . $file;

            if (is_dir($filePath)) {
                $this->deleteFolder($filePath);
            } else {
                unlink($filePath);
            }
        }

        rmdir($folderPath);
    }

}
