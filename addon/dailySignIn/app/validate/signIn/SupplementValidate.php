<?php
#######################################################################
# File Name: SupplementValidate.php
# Desc:
# Author: hd
# Created Time: 2024/6/20 15:18
#######################################################################
namespace addon\dailySignIn\app\validate\signIn;
use core\base\BaseValidate;

class SupplementValidate extends BaseValidate{
    protected $rule = [
        'day' => 'require|integer',
    ];
    protected $message = [
        'day.require' => ['day.require', ['day']]
    ];
    protected $scene = [
        "add" => [ 'day'],
        "edit" => [],
    ];
}