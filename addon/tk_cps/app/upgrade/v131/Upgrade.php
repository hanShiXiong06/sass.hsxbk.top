<?php

namespace addon\tk_cps\app\upgrade\v131;
use addon\tk_cps\app\job\AddonUpgrade;

class Upgrade {
    public function handle() {
        AddonUpgrade::dispatch([],secs:3);
        return true;
    }

}

