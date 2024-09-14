<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/7/7
 * 时间: 下午2:32
 */
declare (strict_types = 1);

namespace addon\manage_oss\app\listener\storage;
class StorageType
{
        public const MANAGE_OSSS = 'manage_oss';
    public function handle($data = [])
    {
        return [
            self:: MANAGE_OSSS => [
                'name' => '跟随平台存储',
                //配置参数
                'params' => [
                    'site_id' => '站点ID',
                    'domain'=>'https://baidu.com'
                ],
                'component' => '/src/addon/manage_oss/views/set/index.vue',
            ],
        ];

    }
}