<?php

namespace addon\tk_cps\app\upgrade\v129;
use app\service\core\addon\WapTrait;
class Upgrade {
    use WapTrait;
    public function handle() {

        $search_string = 'style=embedded';
        $to = dirname(root_path()) .DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $file_content = file_get_contents($to);
        if (!strpos($file_content, $search_string)) {
            //没有半屏
            $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR .'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
            $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'backcommon.ts';
            copy($backfrom, $backto);
        }
        //升级CPS半屏
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'common.ts';
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
        $packagePath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'package.json';
        $string = @file_get_contents( $packagePath);
        $pattern = '/"qs": "\^(\d+\.\d+\.\d+)"/';
        $replacement = '"qs": "6.7.0"';
        $string = preg_replace($pattern, $replacement, $string);
        @file_put_contents($packagePath, $string);
        //增加小程序地图申明
        $compile_path = project_path(). 'uni-app' . DIRECTORY_SEPARATOR;
        $this->mergeManifestJson($compile_path, [
            "mp-weixin" => [
                "permission" => [
                    "scope.userLocation" => [
                        "desc" =>"获取当前位置"
                    ]
                ]
            ]
        ]);
        //修复上版本升级目录错误
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

