<?php

namespace addon\tk_pan\app\upgrade\v009;

class Upgrade
{

    public function handle()
    {
        $fromdict = root_path() . 'core' . DIRECTORY_SEPARATOR . 'upload' . DIRECTORY_SEPARATOR . 'Ott.php';
        if (file_exists($fromdict)) {
            unlink($fromdict);
        }
        return true;
    }
}