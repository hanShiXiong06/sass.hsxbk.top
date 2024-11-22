<?php

namespace addon\qf_notice\app\dict\type;


/**
 * 定义发送消息渠道
 */
class TypeDict
{

    const WECHAT = 'wechat';

    const SMS = 'sms';
    const EMAIL='email';

    public static function getAddonType($type='')
    {
        $data= [
            self::WECHAT =>[
                'name' => '微信公众号',
                'status' => self::WECHAT,

            ],
            self::SMS => [
                'name' => '短信',
                'status' => self::SMS,
            ],
            self::EMAIL=>[
                'name'=>'邮件',
                'status'=>self::EMAIL
            ]

        ];
        if($type!=''){
            return $data[$type];
        }else{
            return $data;
        }
    }

}
