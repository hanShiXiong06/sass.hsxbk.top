<?php

return [
    'tk_cps_act' => [
        'title' => 'CPS活动推广',
        'support' => [ 'tk_cps_act' ], // 支持的插件
        'list' => [
            'ActImage' => [
                'title' => "活动图片",
                'type' => 'image',
                'icon' => "iconfont iconshangpintupian",
                'path' => "act-image", // 属性编辑
                'uses' => 1,
                'sort' => 10006,
                'relate' => 'act_img', // 关联字段，空为不处理
                'value' => '',
                'template' => [
                    "width" => 720, // 宽度
                    'height' => 1280, // 高度
                    'minWidth' => 60, // 最小宽度
                    'minHeight' => 60, // 最小高度
                ],
            ],
            'ActName' => [
                'title' => "活动名称",
                'type' => 'text',
                'icon' => "iconfont icona-Group13",
                'path' => "act-name",
                'uses' => 1,
                'sort' => 10007,
                'relate' => 'act_name', // 关联字段，空为不处理
                'value' => '',
                'template' => [
                    "width" => 164, // 宽度
                    'height' => 55, // 高度
                ]

            ],

        ]
    ],

];