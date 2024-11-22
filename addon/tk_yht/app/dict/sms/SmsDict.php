<?php

namespace addon\tk_yht\app\dict\sms;

/**
 * 短信枚举类
 * Class SmsDict
 * @package app\dict\sys
 */
class SmsDict
{
    //一号通
    public const YHTSMS = 'yht';
    public const SENDING = 'sending';
    public const SUCCESS = 'success';
    public const FAIL = 'fail';
    public const LOGIN = 'login';
    public const REGISTER = 'register';
    public const BIND_MOBILE = 'bind_mobile';
    public const FIND_PASS = 'find_pass';
    public const SCENE_TYPE = [
        self::LOGIN,
        self::REGISTER,
        self::BIND_MOBILE,
        self::FIND_PASS
    ];

    public static function getType()
    {
        return [
            self::YHTSMS => [
                'name' => '一号通短信',
                //配置参数
                'params' => [
                    'access_key' => 'APP_ID',
                    'secret_key' => 'SECRET_KEY'
                ]
            ],

        ];
    }

    //支持的短信场景

    public static function getStatusType()
    {
        return [
            self::SENDING => 'dict_sms.status_sending',
            self::SUCCESS => 'dict_sms.status_success',
            self::FAIL => 'dict_sms.status_fail',
        ];
    }

}