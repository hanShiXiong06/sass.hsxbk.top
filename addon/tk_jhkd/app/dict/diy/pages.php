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
    ],
    'DIY_TK_JHKD_MEMBER_INDEX' => [
        'tk_jhkd_member_first' => [ // 页面标识
            "title" => "聚合快递个人中心", // 页面名称
            'cover' => '', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" =>"个人中心",
                    "pageStartBgColor" =>"#F8F8F8",
                    "pageEndBgColor" =>"",
                    "pageGradientAngle" =>"to bottom",
                    "bgUrl" =>"",
                    "bgHeightScale" =>0,
                    "imgWidth" =>"",
                    "imgHeight" =>"",
                    "bottomTabBarSwitch" =>true,
                    "template" => [
                        "textColor" =>"#303133",
                        "pageStartBgColor" =>"",
                        "pageEndBgColor" =>"",
                        "pageGradientAngle" =>"to bottom",
                        "componentBgUrl" =>"",
                        "componentBgAlpha" =>2,
                        "componentStartBgColor" =>"",
                        "componentEndBgColor" =>"",
                        "componentGradientAngle" =>"to bottom",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>12
                        ]
                    ],
                    "topStatusBar" => [
                        "isShow" =>true,
                        "bgColor" =>"#ffffff",
                        "isTransparent" =>false,
                        "style" =>"style-1",
                        "styleName" =>"风格1",
                        "textColor" =>"#333333",
                        "textAlign" =>"center",
                        "inputPlaceholder" =>"请输入搜索关键词",
                        "imgUrl" =>"",
                        "link" => [
                            "name" =>""
                        ]
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
                        "path" =>"edit-member-info",
                        "id" =>"67qv49qgxp00",
                        "componentName" =>"MemberInfo",
                        "componentTitle" =>"会员信息",
                        "uses" =>0,
                        "ignore" =>[
                            "componentBgUrl"
                        ],
                        "pageStartBgColor" =>"",
                        "pageEndBgColor" =>"",
                        "pageGradientAngle" =>"to bottom",
                        "componentBgUrl" =>"",
                        "componentBgAlpha" =>2,
                        "componentStartBgColor" =>"",
                        "componentEndBgColor" =>"",
                        "componentGradientAngle" =>"to bottom",
                        "topRounded" =>9,
                        "bottomRounded" =>9,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>12,
                            "bottom" =>6,
                            "both" =>16
                        ],
                        "style" =>"style-1",
                        "styleName" =>"风格1",
                        "textColor" =>"#000000",
                        "bgUrl" =>"",
                        "bgColorStart" =>"",
                        "bgColorEnd" =>"",
                        "pageStyle" =>"padding-top:24rpx;padding-bottom:12rpx;padding-right:32rpx;padding-left:32rpx;"
                    ],
                    [
                        "path" =>"edit-member-level",
                        "uses" =>1,
                        "id" =>"1w83pipkfpi8",
                        "componentName" =>"MemberLevel",
                        "componentTitle" =>"会员等级",
                        "ignore" =>[
                            "componentBgColor",
                            "componentBgUrl"
                        ],
                        "style" =>"style-3",
                        "styleName" =>"风格3",
                        "textColor" =>"#303133",
                        "pageStartBgColor" =>"",
                        "pageEndBgColor" =>"",
                        "pageGradientAngle" =>"to bottom",
                        "componentBgUrl" =>"",
                        "componentBgAlpha" =>2,
                        "componentStartBgColor" =>"",
                        "componentEndBgColor" =>"",
                        "componentGradientAngle" =>"to bottom",
                        "topRounded" =>0,
                        "bottomRounded" =>0,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>0,
                            "both" =>12
                        ],
                        "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:24rpx;padding-left:24rpx;"
                    ],
                    [
                        "path" =>"edit-graphic-nav",
                        "id" =>"62b7d7hl4ok",
                        "componentName" =>"GraphicNav",
                        "componentTitle" =>"图文导航",
                        "uses" =>0,
                        "layout" =>"horizontal",
                        "mode" =>"graphic",
                        "showStyle" =>"fixed",
                        "rowCount" =>4,
                        "pageCount" =>2,
                        "carousel" => [
                            "type" =>"circle",
                            "color" =>"#FFFFFF"
                        ],
                        "imageSize" =>25,
                        "aroundRadius" =>25,
                        "font" => [
                            "size" =>12,
                            "weight" =>"bold",
                            "color" =>"#303133"
                        ],
                        "pageStartBgColor" =>"",
                        "pageEndBgColor" =>"",
                        "pageGradientAngle" =>"to bottom",
                        "componentBgUrl" =>"",
                        "componentBgAlpha" =>2,
                        "componentStartBgColor" =>"rgba(255, 255, 255, 1)",
                        "componentEndBgColor" =>"",
                        "componentGradientAngle" =>"to bottom",
                        "topRounded" =>0,
                        "bottomRounded" =>9,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>0,
                            "bottom" =>6,
                            "both" =>16
                        ],
                        "ignore" =>[],
                        "list" =>[
                            [
                                "title" =>"个人资料",
                                "link" => [
                                    "parent" =>"MEMBER_LINK",
                                    "name" =>"MEMBER_PERSONAL",
                                    "title" =>"个人资料",
                                    "url" =>"/app/pages/member/personal"
                                ],
                                "imageUrl" =>"static/resource/images/diy/horz_m_personal.png",
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ],
                                "id" =>"xvlauaflc6o",
                                "imgWidth" =>100,
                                "imgHeight" =>100
                            ],
                            [
                                "title" =>"我的佣金",
                                "link" => [
                                    "parent" =>"MEMBER_LINK",
                                    "name" =>"MEMBER_COMMISSION",
                                    "title" =>"我的佣金",
                                    "url" =>"/app/pages/member/commission",
                                    "action" =>""
                                ],
                                "imageUrl" =>"static/resource/images/diy/horz_m_balance.png",
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ],
                                "id" =>"63bjscck5n40",
                                "imgWidth" =>100,
                                "imgHeight" =>100
                            ],
                            [
                                "title" =>"分销收入",
                                "link" => [
                                    "parent" =>"DIY_LINK",
                                    "name" =>"DIY_LINK",
                                    "title" =>"分销收入",
                                    "url" =>"/app/pages/member/detailed_account?type=commission",
                                    "action" =>""
                                ],
                                "imageUrl" =>"static/resource/images/diy/horz_m_point.png",
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ],
                                "id" =>"4qiczw54t8g0",
                                "imgWidth" =>100,
                                "imgHeight" =>100
                            ],
                            [
                                "title" =>"联系客服",
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_DIY",
                                    "title" =>"CPS首页",
                                    "url" =>"/addon/tk_cps/pages/diy",
                                    "action" =>"decorate"
                                ],
                                "imageUrl" =>"static/resource/images/diy/horz_m_service.png",
                                "label" => [
                                    "control" =>false,
                                    "text" =>"热门",
                                    "textColor" =>"#FFFFFF",
                                    "bgColorStart" =>"#F83287",
                                    "bgColorEnd" =>"#FE3423"
                                ],
                                "id" =>"2eqwfkdphpgk",
                                "imgWidth" =>100,
                                "imgHeight" =>100
                            ]
                        ],
                        "pageStyle" =>"padding-top:2rpx;padding-bottom:12rpx;padding-right:32rpx;padding-left:32rpx;"
                    ]
                ]
            ]
        ],
    ],
];