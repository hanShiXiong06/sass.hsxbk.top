<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/7/7
 * 时间: 下午2:32
 */
declare (strict_types = 1);

namespace addon\tk_cps\app\listener\platform;
class PlatformListener
{
    public function handle($data = [])
    {
        $dir=project_path().'niucloud/addon/tk_cps/app/dict/platform';
        if (!is_dir($dir)) {
            return [];
        }
        $files = scandir($dir);
        $data=[];
        foreach ($files as $file) {
            if ($file == '.' || $file == '..') {
                continue;
            }
            $path = $dir . '/' . $file;
             if (is_file($path) && pathinfo($file, PATHINFO_EXTENSION) == 'php' ) {
                     $path='\\addon\\tk_cps\\app\\dict\\platform\\'.$file;
                     $path=str_replace('.php', '', $path);
                    if (class_exists($path)) {
                        $data[]= (new $path())->getType();
                    }
            }
        }
        return  $data;
    }
}