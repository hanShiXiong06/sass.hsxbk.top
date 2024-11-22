<?php

namespace addon\tk_cps\app\dict\platform;

class MyxqDict
{
    /**
     * @Notes:蚂蚁星球开放平台对接字典
     * @Interface getType
     * @return array[]
     * @author: TK
     * @Time: 2024/9/20   上午12:58
     */
    public function getType()
    {
        $data = [
            'myxq' => [
                "is_use"=>'启用',
                "type" => '1',
                "name" => "蚂蚁星球",
                "desc" => "蚂蚁星球开放平台对接",
                //配置参数
                'params' => [
                    "is_use"=>'启用',
                    'api_key' => '蚂蚁星球api_key',
                    'secret' => '蚂蚁星球secret',
                    'site_id'=>'站点ID'
                ],
                'component' => '/src/addon/tk_cps/views/platform/components/myxq.vue',
                'order_component' => '',//前端订单信息
            ]
            ];
        return $data;
    }
}