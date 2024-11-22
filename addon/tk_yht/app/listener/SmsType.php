<?php
/**
 * 作者: TK  微信：addon888
 * 日期: 2024/7/7
 * 时间: 下午2:32
 */
declare (strict_types = 1);

namespace addon\tk_yht\app\listener;
class SmsType
{
    public const YHT = 'yht';
    public function handle($data = [])
    {
        return [
            self::YHT => [
                'name' => '一号通短信',
                //配置参数
                'params' => [
                    'access_key' => 'APP_ID',
                    'secret_key' => 'SECRET_KEY'
                ],
                'component' => '/src/addon/tk_yht/views/sms-yht.vue',
            ],
        ];

    }
}