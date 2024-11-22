<?php

namespace addon\tk_pan\app\upgrade\v007;

class Upgrade
{

    public function handle()
    {
        //移动文件到公共驱动
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'Ott.php';
        $to = root_path() . 'core' . DIRECTORY_SEPARATOR . 'upload' . DIRECTORY_SEPARATOR . 'Ott.php';
        copy($from, $to);
        $fromdict = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_pan' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'StorageDict.php';
        if (file_exists($fromdict)) {
            unlink($fromdict);
        }
        return true;
    }
}