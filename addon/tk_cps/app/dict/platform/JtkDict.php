<?php

namespace addon\tk_cps\app\dict\platform;

class JtkDict
{
    /**
     * @Notes:聚推客开放平台对接字典
     * @Interface getType
     * @return array[]
     * @author: TK
     * @Time: 2024/9/20   上午12:57
     */
    public function getType()
    {
        $data = [
            'jtk' => [
                "is_use"=>'启用',
                "type" => '0',
                "name" => "聚推客",
                "desc" => "聚推客开放平台对接",
                //配置参数
                'params' => [
                    "is_use"=>'启用',//必须
                    'pub_id' => '聚推客pub_id',//对接参数
                    'api_key' => '聚推客apikey',//对接参数
                    'site_id'=>'站点ID'//必须
                ],
                'component' => '/src/addon/tk_cps/views/platform/components/jtk.vue',//前端配置信息定义文件
                'order_component' => '',//前端订单信息
            ]
            ];
        return $data;
    }
}