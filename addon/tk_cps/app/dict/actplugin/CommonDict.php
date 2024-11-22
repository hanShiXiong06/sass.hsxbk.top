<?php

namespace addon\tk_cps\app\dict\actplugin;

class CommonDict
{
    /**
     * @Notes:聚推客开放平台对接字典
     * @Interface getType
     * @return array[]
     * @author: TK
     * @Time: 2024/9/20   上午12:57
     */
    public function getAct()
    {
        $data = [
            'jtk' => [
                "is_use"=>'启用',
                "type" => '0',
                "name" => "聚推客",
                "desc" => "聚推客开放平台对接",
                //配置参数
                'params' => [
                    "is_use"=>'启用',
                    'pub_id' => '聚推客pub_id',
                    'api_key' => '聚推客apikey',
                    'site_id'=>'站点ID'
                ],
                'component' => '/src/addon/tk_cps/views/platform/components/jtk.vue',
            ]
            ];
        return $data;
    }
}