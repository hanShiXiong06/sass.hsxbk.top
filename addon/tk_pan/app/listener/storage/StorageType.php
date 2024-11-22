<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/7/7
 * 时间: 下午2:32
 */
declare (strict_types = 1);

namespace addon\tk_pan\app\listener\storage;
class StorageType
{
    public const OTT = 'ott';
    public function handle($data = [])
    {
        return [
            self::OTT => [
                'name' => '123盘存储',
                //配置参数
                'params' => [
                    'bucket' => '存储空间',
                    'clientID' => 'clientID',
                    'clientSecret' => 'clientSecret',
                    'dir' => 'dir',
                    'domain' => '空间域名'
                ],
                'component' => '/src/addon/tk_pan/views/config/index.vue',
            ],
        ];

    }
}