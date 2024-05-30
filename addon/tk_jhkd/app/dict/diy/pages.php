<?php

return [
    'DIY_TK_JHKD_INDEX' => [
        'tk_jhkd_index_one' => [ // 页面标识
            "title" => "快递首页", // 页面名称
            'cover' => 'addon/tk_jhkd/diy/cover/cover.png', // 页面封面图
            'preview' => 'addon/tk_jhkd/diy/cover/cover.png', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" =>"低价寄快递",
                    "pageBgColor" =>"#F8F8F8",
                    "bgUrl" =>"",
                    "imgWidth" =>"",
                    "imgHeight" =>"",
                    "bottomTabBarSwitch" =>true,
                    "template" => [
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>0
                        ]
                    ],
                    "topStatusBar" => [
                        "bgColor" =>"#ffffff",
                        "isTransparent" =>false,
                        "isShow" =>true,
                        "style" =>"style-1",
                        "textColor" =>"#333333",
                        "textAlign" =>"center"
                    ],
                    "popWindow" => [
                        "imgUrl" =>"",
                        "imgWidth" =>"",
                        "imgHeight" =>"",
                        "count" =>-1,
                        "show" =>0,
                        "link" => [
                            "name" =>""
                        ]
                    ]
                ],
                "value" =>[
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"7km7wgz9ui80",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>187,
                        "list" =>[
                            [
                                "link" => [
                                    "name" =>""
                                ],
                                "imageUrl" =>"addon/tk_jhkd/diy/index/banner.png",
                                "imgWidth" =>720,
                                "imgHeight" =>360,
                                "id" =>"7jezrytkabg0",
                                "width" =>375,
                                "height" =>187.5
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>0
                        ],
                        "pageStyle" =>"padding-top:0rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" =>"edit-notice",
                        "uses" =>0,
                        "id" =>"52z9b9fzox80",
                        "componentName" =>"Notice",
                        "componentTitle" =>"公告",
                        "ignore" =>[],
                        "list" => [
                            "link" => [
                                "parent" =>"TK_JHKD_LINK",
                                "name" =>"TK_JHKD_HELP",
                                "title" =>"帮助中心",
                                "url" =>"/addon/tk_jhkd/pages/help",
                                "action" =>""
                            ],
                            "text" =>"请打包好物品，不足一公斤按照一公斤收取"
                        ],
                        "iconType" =>"custom",
                        "systemIcon" =>"style_01",
                        "showType" =>"link",
                        "imageUrl" =>"addon/tk_jhkd/diy/index/notice.png",
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>0
                        ],
                        "fontSize" =>12,
                        "pageStyle" =>"padding-top:0rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" =>"edit-graphic-nav",
                        "uses" =>0,
                        "id" =>"11iquu92mxcg",
                        "componentName" =>"GraphicNav",
                        "componentTitle" =>"图文导航",
                        "ignore" =>[],
                        "layout" =>"horizontal",
                        "navTitle" =>"",
                        "subNavTitle" =>"",
                        "subNavTitleLink" => [
                            "name" =>""
                        ],
                        "subNavColor" =>"#999999",
                        "mode" =>"graphic",
                        "showStyle" =>"fixed",
                        "rowCount" =>4,
                        "pageCount" =>2,
                        "carousel" => [
                            "type" =>"circle",
                            "color" =>"#FFFFFF"
                        ],
                        "imageSize" =>40,
                        "aroundRadius" =>25,
                        "font" => [
                            "size" =>14,
                            "weight" =>"normal",
                            "color" =>"#303133"
                        ],
                        "list" =>[
                            [
                                "title" =>"寄快递",
                                "link" => [
                                    "parent" =>"TK_JHKD_LINK",
                                    "name" =>"TK_JHKD_ORDERKD",
                                    "title" =>"寄快递",
                                    "url" =>"/addon/tk_jhkd/pages/ordersubmit?type=kd",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_jhkd/diy/index/kuaidi.png",
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ],
                                "id" =>"6k02y3zk9vo0",
                                "imgWidth" =>276,
                                "imgHeight" =>200
                            ],
                            [
                                "id" =>"2720qf5lnf40",
                                "title" =>"寄重货",
                                "imageUrl" =>"addon/tk_jhkd/diy/index/kuaiyun.png",
                                "imgWidth" =>200,
                                "imgHeight" =>200,
                                "link" => [
                                    "parent" =>"TK_JHKD_LINK",
                                    "name" =>"TK_JHKD_ORDERKY",
                                    "title" =>"寄重货",
                                    "url" =>"/addon/tk_jhkd/pages/ordersubmit?type=ky",
                                    "action" =>""
                                ],
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ]
                            ],
                            [
                                "id" =>"5o9su1q1qs80",
                                "title" =>"违禁品",
                                "imageUrl" =>"addon/tk_jhkd/diy/index/weijinpin.png",
                                "imgWidth" =>200,
                                "imgHeight" =>200,
                                "link" => [
                                    "parent" =>"TK_JHKD_LINK",
                                    "name" =>"TK_JHKD_YESGOODS",
                                    "title" =>"违禁查询",
                                    "url" =>"/addon/tk_jhkd/pages/agreement?type=jhkdyesgoods",
                                    "action" =>""
                                ],
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ]
                            ],
                            [
                                "id" =>"4i1iloxfmfi0",
                                "title" =>"补差价",
                                "imageUrl" =>"addon/tk_jhkd/diy/index/buchajia.png",
                                "imgWidth" =>200,
                                "imgHeight" =>200,
                                "link" => [
                                    "parent" =>"TK_JHKD_LINK",
                                    "name" =>"TK_JHKD_ORDERADDLIST",
                                    "title" =>"补差价",
                                    "url" =>"/addon/tk_jhkd/pages/orderaddlist",
                                    "action" =>""
                                ],
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ]
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>0
                        ],
                        "pageStyle" =>"padding-top:0rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" =>"edit-jhkdbrand",
                        "uses" =>0,
                        "id" =>"4rjz2zx1prc0",
                        "componentName" =>"Brand",
                        "componentTitle" =>"快递列表",
                        "ignore" =>[],
                        "iconsize" =>24,
                        "radiussize" =>7,
                        "padding" =>"12",
                        "mrsize" =>6,
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>0
                        ],
                        "pageStyle" =>"padding-top:0rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" =>"edit-jhkd",
                        "uses" =>1,
                        "id" =>"17uvxove3bj4",
                        "componentName" =>"Jhkd",
                        "componentTitle" =>"下单组件",
                        "ignore" =>[],
                        "songbackground" =>"#2979ff",
                        "btbackground" =>"#2979ff",
                        "btfontcolor" =>"#ffffff",
                        "btname" =>"去下单",
                        "qsfontcolor" =>"#030307",
                        "slfontcolor" =>"#a9a9a9",
                        "padding" =>12,
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"rgba(255, 255, 255, 1)",
                        "topRounded" =>16,
                        "bottomRounded" =>16,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>13
                        ],
                        "pageStyle" =>"padding-top:0rpx;padding-bottom:0rpx;padding-right:26rpx;padding-left:26rpx;"
                    ],
                    [
                        "path" =>"edit-text",
                        "uses" =>0,
                        "id" =>"71tyvgjwt4o0",
                        "componentName" =>"Text",
                        "componentTitle" =>"标题",
                        "ignore" =>[],
                        "style" =>"style-2",
                        "styleName" =>"风格2",
                        "text" =>"新手指导",
                        "link" => [
                            "parent" =>"TK_JHKD_LINK",
                            "name" =>"TK_JHKD_HELP",
                            "title" =>"帮助中心",
                            "url" =>"/addon/tk_jhkd/pages/help",
                            "action" =>""
                        ],
                        "textColor" =>"#303133",
                        "fontSize" =>16,
                        "fontWeight" =>"normal",
                        "textAlign" =>"center",
                        "subTitle" => [
                            "text" =>"常见问题导航",
                            "color" =>"#999999",
                            "fontSize" =>14,
                            "control" =>true,
                            "fontWeight" =>"normal"
                        ],
                        "more" => [
                            "text" =>"查看更多",
                            "control" =>true,
                            "isShow" =>true,
                            "link" => [
                                "name" =>""
                            ],
                            "color" =>"#999999"
                        ],
                        "pageBgColor" =>"",
                        "componentBgColor" =>null,
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>0
                        ],
                        "pageStyle" =>"padding-top:0rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ]
                ]
            ]
        ],
    ]
];