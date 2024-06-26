<?php
#######################################################################
# File Name: SignInValidate.php
# Desc:
# Author: hd
# mail: joker_di@163.com
# Created Time: 2024/5/24 18:34
#######################################################################
namespace addon\dailySignIn\app\validate\signIn;

use core\base\BaseValidate;

class SignInValidate extends BaseValidate{

    protected $rule = [
        'status' => 'require|boolean',
        'cycle' => 'require|integer',
        'point' => 'require|integer',
        'growth' => 'require|integer',
        'isSupplement'=>'integer',
        'adUnitId'=>'string',
        'data' => 'array'
    ];
    protected $message = [
        'status.require' => ['is_use.require', ['is_use']],
        'cycle.require'  => ['cycle.require',  ['cycle']],
        'point.require'  => ['point.require',  ['point']],
        'growth.require' => ['growth.require', ['growth']],
        'data.require'   => ['data.require',   ['data']],
        'isSupplement'   => ['isSupplement.require',['isSupplement']],
        'adUnitId'       => ['adUnitId.require',['adUnitId']]
    ];

    protected $scene = [
        "add" => [ 'status','cycle','point','growth','data','adUnitId','adUnitId'],
        "edit" => [],
    ];
}