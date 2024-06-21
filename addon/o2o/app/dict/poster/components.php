<?php

return [
    'o2o_goods' => [
        'title' => get_lang('dict_diy_poster.o2o_goods_component_type_basic'),
        'support' => [ 'o2o_goods' ], // 支持的插件
        'list' => [
            'GoodsImage' => [
                'title' => "服务项目图片",
                'type' => 'image',
                'icon' => "iconfont iconshangpintupian",
                'path' => "o2o-goods-image", // 属性编辑
                'uses' => 1,
                'sort' => 10006,
                'relate' => 'goods_img', // 关联字段，空为不处理
                'value' => '',
                'template' => [
                    "width" => 200, // 宽度
                    'height' => 200, // 高度
                    'minWidth' => 30, // 最小宽度
                    'minHeight' => 30, // 最小高度
                ],
            ],
            'GoodsName' => [
                'title' => "服务项目名称",
                'type' => 'text',
                'icon' => "iconfont icona-Group13",
                'path' => "o2o-goods-name",
                'uses' => 1,
                'sort' => 10007,
                'relate' => 'goods_name', // 关联字段，空为不处理
                'value' => ''
            ],
            'GoodsPrice' => [
                'title' => "销售价",
                'type' => 'text',
                'icon' => "iconfont iconshoujia",
                'path' => "o2o-goods-price",
                'uses' => 1,
                'sort' => 10008,
                'relate' => 'goods_price', // 关联字段，空为不处理
                'value' => '',
                'template' => [
                    "fontFamily" => 'static/font/price.ttf', // 字体
                ],
            ]

        ]
    ],

];