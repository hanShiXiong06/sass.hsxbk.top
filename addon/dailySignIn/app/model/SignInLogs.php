<?php
#######################################################################
# File Name: SignInLogs.php
# Desc:
# Author: hd
# mail: coinlogix@163.com
# Created Time: 2024/5/25 16:13
#######################################################################
namespace addon\dailySignIn\app\model;
use core\base\BaseModel;

/**
 * 签到模型
 * @package addon\daily\app\model
 */
class SignInLogs extends BaseModel{

    const SYS_CONFIG_KEY = 'MEMBER_SIGN_IN_REWARD_CONFIG';
    const SIGN_IN_OPEN = 1;
    const SIGN_IN_CLOSE = 0; //isSupplement
    const IS_SUPPLEMENT_OPEN = 1;
    const IS_SUPPLEMENT_CLOSE = 0;
    const POINT = 'point';
    const GROWTH = 'growth';
    const MAX_RECORD = 99999999;
    protected $pk = 'id';
    protected $name = 'member_sign_in_logs';
    protected $type = [

    ];


}