<?php

namespace addon\tk_pan\app\upgrade\v008;

class Upgrade
{

    public function handle()
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