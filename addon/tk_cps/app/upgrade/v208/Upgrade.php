<?php

namespace addon\tk_cps\app\upgrade\v208;

use addon\tk_cps\Addon;
use addon\tk_cps\app\job\AddonUpgrade;

class Upgrade
{
    public function handle()
    {
        (new Addon())->upgrade();
        AddonUpgrade::dispatch([], secs: 3);
        return true;
    }
}

