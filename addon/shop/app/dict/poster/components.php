<?php

return [
    'shop_goods' => [
        'title' => get_lang('dict_diy_poster.shop_goods_component_type_basic'),
        'support' => [ 'fenxiao_goods' ], // 支持的插件
        'list' => [
            'GoodsImage' => [
                'title' => "商品图片",
                'type' => 'image',
                'icon' => "iconfont-iconshangpintupian",
                'path' => "goods-image", // 属性编辑
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
                'title' => "商品名称",
                'type' => 'text',
                'icon' => "iconfont-icona-Group13",
                'path' => "goods-name",
                'uses' => 1,
                'sort' => 10007,
                'relate' => 'goods_name', // 关联字段，空为不处理
                'value' => ''
            ],
            'GoodsPrice' => [
                'title' => "销售价",
                'type' => 'text',
                'icon' => "iconfont-iconshoujia",
                'path' => "goods-price",
                'uses' => 1,
                'sort' => 10008,
                'relate' => 'goods_price', // 关联字段，空为不处理
                'value' => '',
                'template' => [
                    "fontFamily" => 'static/font/price.ttf', // 字体
                ],
            ],
            'GoodsMarketPrice' => [
                'title' => "划线价",
                'type' => 'text',
                'icon' => "iconfont-iconhuajiaqian",
                'path' => "goods-market-price",
                'uses' => 1,
                'sort' => 10009,
                'relate' => 'goods_market_price', // 关联字段，空为不处理
                'value' => '',
                'template' => [
                    "fontFamily" => 'static/font/price.ttf', // 字体
                ],
            ]
        ]
    ],

];