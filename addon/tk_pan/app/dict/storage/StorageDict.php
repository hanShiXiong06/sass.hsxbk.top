<?php
// +----------------------------------------------------------------------
// | Author: addon888
// +----------------------------------------------------------------------

namespace addon\tk_pan\app\dict\storage;

/**
 * 云存储枚举类
 * Class StorageDict
 * @package app\dict\sys
 */
class StorageDict
{

    //本地存储
    public const LOCAL = 'local';
    //123盘
    public const OTT = 'ott';

    public const ON = '1';//开启
    public const OFF = '0';//关闭


    public static function getType()
    {
        return [

            self::OTT => [
                'name' => '123盘存储',
                //配置参数
                'params' => [
                    'clientID' => 'clientID',
                    'clientSecret' => 'clientSecret',
                    'dir' => '目录',
                    'domain' => '域名前缀'
                ]
            ],
        ];
    }

}