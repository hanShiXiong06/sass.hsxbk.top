<?php
use think\facade\Route;
Route::rule('/addon/hlwoauth/:site_id/:id', 'addon\hlwoauth\app\api\controller\domain\Index@index');