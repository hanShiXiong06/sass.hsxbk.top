<?php

return [
    'DIY_TK_CPS_DIY' => [
        'tk_cps_diy_first' => [ // 页面标识
            "title" => "CPS首页(模板一)", // 页面名称
            'cover' => '', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" =>"CPS特惠",
                    "pageBgColor" =>"#F8F8F8",
                    "bgUrl" =>"addon/tk_cps/diy/img/bg.png",
                    "imgWidth" =>750,
                    "imgHeight" =>1485,
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
                        "path" =>"edit-carousel-search",
                        "uses" =>1,
                        "position" =>"top_fixed",
                        "id" =>"3mg5q5m6pka0",
                        "componentName" =>"CarouselSearch",
                        "componentTitle" =>"轮播搜索",
                        "ignore" =>[
                            "componentBgColor",
                            "componentBgUrl",
                            "marginTop",
                            "marginBottom",
                            "topRounded",
                            "bottomRounded",
                            "pageBgColor",
                            "marginBoth"
                        ],
                        "positionWay" =>"static",
                        "fixedBgColor" =>"",
                        "bgGradient" =>false,
                        "search" => [
                            "logo" =>"",
                            "text" =>"请输入搜索关键词",
                            "link" => [
                                "parent" =>"TK_CPS_COMMONLINK",
                                "name" =>"TK_CPS_ACT_LIST",
                                "title" =>"活动列表",
                                "url" =>"/addon/tk_cps/pages/act",
                                "action" =>""
                            ],
                            "hotWord" => [
                                "interval" =>3,
                                "list" =>[
                                    [
                                        "id" =>"1f7gk30rjzb4",
                                        "text" =>"美团"
                                    ],
                                    [
                                        "id" =>"764nlt1jlx00",
                                        "text" =>"饿了么"
                                    ],
                                    [
                                        "id" =>"yvfl1rk9r5c",
                                        "text" =>"滴滴"
                                    ],
                                    [
                                        "id" =>"2nz0qb0xeoi0",
                                        "text" =>"加油"
                                    ],
                                    [
                                        "id" =>"72crwwk98dc0",
                                        "text" =>"充值"
                                    ]
                                ]
                            ]
                        ],
                        "tab" => [
                            "control" =>false,
                            "noColor" =>"",
                            "selectColor" =>"",
                            "fixedNoColor" =>"",
                            "fixedSelectColor" =>"",
                            "list" =>[
                                [
                                    "text" =>"外卖美食",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>"",
                                    "id" =>"1vj3coj3i0bk"
                                ],
                                [
                                    "id" =>"5pf95n5a7900",
                                    "text" =>"在线点餐",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"2u9hjt5r32w0",
                                    "text" =>"团购到店",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"3jpskez10x20",
                                    "text" =>"酒店预订",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"1txalzramfi8",
                                    "text" =>"滴滴打车",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ]
                            ]
                        ],
                        "swiper" => [
                            "control" =>true,
                            "interval" =>5,
                            "indicatorColor" =>"rgba(0, 0, 0, 0.3)",
                            "indicatorActiveColor" =>"rgba(242, 213, 248, 0.8)",
                            "indicatorStyle" =>"style-1",
                            "indicatorAlign" =>"center",
                            "swiperStyle" =>"style-2",
                            "imageHeight" =>142,
                            "topRounded" =>10,
                            "bottomRounded" =>10,
                            "list" =>[
                                [
                                    "imageUrl" =>"addon/tk_cps/diy/img/feizhu.png",
                                    "imgWidth" =>1000,
                                    "imgHeight" =>400,
                                    "link" => [
                                        "parent" =>"TK_CPS_COMMONLINK",
                                        "name" =>"TK_CPS_FEIZHU",
                                        "title" =>"飞猪",
                                        "url" =>"/addon/tk_cps/pages/index?type=0&act_id=120&style=embedded",
                                        "action" =>""
                                    ],
                                    "id" =>"2oqe5pe7sjk0",
                                    "width" =>355,
                                    "height" =>142
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
                        ]
                    ],
                    [
                        "path" =>"edit-graphic-nav",
                        "uses" =>0,
                        "id" =>"zrmp9f7qrds",
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
                        "rowCount" =>5,
                        "pageCount" =>2,
                        "carousel" => [
                            "type" =>"circle",
                            "color" =>"#FFFFFF"
                        ],
                        "imageSize" =>36,
                        "aroundRadius" =>19,
                        "font" => [
                            "size" =>14,
                            "weight" =>"normal",
                            "color" =>"#303133"
                        ],
                        "list" =>[
                            [
                                "id" =>"73r398jtz1g0",
                                "title" =>"美团外卖",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituan.png",
                                "imgWidth" =>51,
                                "imgHeight" =>51,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_SHOP",
                                    "title" =>"美团外卖",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=7&style=embedded",
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
                                "id" =>"2jr6sn7r8ea0",
                                "title" =>"麦当劳",
                                "imageUrl" =>"addon/tk_cps/diy/logo/mdl.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_MDL",
                                    "title" =>"麦当劳",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=26&style=embedded",
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
                                "id" =>"46awqdn9u420",
                                "title" =>"肯德基",
                                "imageUrl" =>"addon/tk_cps/diy/logo/kfc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_KDJ",
                                    "title" =>"肯德基",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=38&style=embedded",
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
                                "id" =>"2cmvxiapyb0g",
                                "title" =>"星巴克",
                                "imageUrl" =>"addon/tk_cps/diy/logo/xbk.png",
                                "imgWidth" =>102,
                                "imgHeight" =>102,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_XBK",
                                    "title" =>"星巴克",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=34&style=embedded",
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
                                "id" =>"5r62od2wqqc0",
                                "title" =>"奈雪",
                                "imageUrl" =>"addon/tk_cps/diy/logo/lxdc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_NXDC",
                                    "title" =>"奈雪的茶",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=77&style=embedded",
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
                                "id" =>"4ldxrxvv3940",
                                "title" =>"饿了么",
                                "imageUrl" =>"addon/tk_cps/diy/logo/elm.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ELE_SALES_NEW",
                                    "title" =>"饿了么零售",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=159&style=embedded",
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
                                "id" =>"v0ljtl0tbk0",
                                "title" =>"必胜客",
                                "imageUrl" =>"addon/tk_cps/diy/logo/bsk.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_BXK",
                                    "title" =>"必胜客",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=64&style=embedded",
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
                                "id" =>"7jhr11kh5gw0",
                                "title" =>"团购到店",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituantuangou.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_TG_MXBT",
                                    "title" =>"美团团购",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=74&style=embedded",
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
                                "id" =>"3uitowsoejc0",
                                "title" =>"热门电影",
                                "imageUrl" =>"addon/tk_cps/diy/logo/dianyin.png",
                                "imgWidth" =>128,
                                "imgHeight" =>131,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MOVIE",
                                    "title" =>"热门电影",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=76&style=embedded",
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
                                "id" =>"1t00hzl8xwn4",
                                "title" =>"景区门票",
                                "imageUrl" =>"addon/tk_cps/diy/logo/menpiao.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MENPIAO",
                                    "title" =>"景区门票",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=105&style=embedded",
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
                        "pageBgColor" =>null,
                        "componentBgColor" =>"rgba(251, 243, 252, 1)",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>"",
                        "componentStartBgColor" =>"rgba(255, 255, 255, 0.91)"
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"7k62kjwjpso0",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>111,
                        "list" =>[
                            [
                                "id" =>"5e984mi3t080",
                                "imageUrl" =>"addon/tk_cps/diy/img/llk.png",
                                "imgWidth" =>938,
                                "imgHeight" =>280,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_CARD_LIULIANGKA",
                                    "title" =>"超值流量卡",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=188&style=embedded",
                                    "action" =>""
                                ],
                                "width" =>375,
                                "height" =>111.94029850746267
                            ],
                            [
                                "id" =>"5in2aeu9ogs0",
                                "imageUrl" =>"addon/tk_cps/diy/img/thkd.jpg",
                                "imgWidth" =>937,
                                "imgHeight" =>280,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_KUAIDI",
                                    "title" =>"特惠快递",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=74&style=embedded",
                                    "action" =>""
                                ]
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>8,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:16rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"6g5xq7i3m080",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>211,
                        "list" =>[
                            [
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEITUAN_QUANBAO",
                                    "title" =>"美团券包",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=117&style=embedded",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_cps/diy/img/mtqb.jpg",
                                "imgWidth" =>690,
                                "imgHeight" =>390,
                                "id" =>"7bklkd90vck0",
                                "width" =>375,
                                "height" =>211.9565217391304
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"53aheqr4jxo0",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>168,
                        "list" =>[
                            [
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_DIDIJIAYOU",
                                    "title" =>"滴滴加油",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=43&style=embedded",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_cps/diy/img/didi_jiayoupng.png",
                                "imgWidth" =>552,
                                "imgHeight" =>248,
                                "width" =>375,
                                "height" =>168.47826086956522,
                                "id" =>"3ddjxwe57qg0"
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"tm3484uzl9s",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>120,
                        "list" =>[
                            [
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=56&style=embedded",
                                    "title" =>"花小猪",
                                    "name" =>"TK_CPS_DACHE_HUAXIAOZHU",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_cps/diy/img/hxz.jpg",
                                "imgWidth" =>687,
                                "imgHeight" =>220,
                                "width" =>375,
                                "height" =>120.08733624454149,
                                "id" =>"4qj1tio78f80"
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ]
                ]
            ]
        ],
        'tk_cps_diy_bwc' => [ // 页面标识
            "title" => "CPS霸王餐(模板一)", // 页面名称
            'cover' => '', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" =>"CPS霸王餐",
                    "pageBgColor" =>"#F8F8F8",
                    "bgUrl" =>"addon/tk_cps/diy/img/bg.png",
                    "imgWidth" =>750,
                    "imgHeight" =>1485,
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
                        "path" =>"edit-carousel-search",
                        "uses" =>1,
                        "position" =>"top_fixed",
                        "id" =>"3mg5q5m6pka0",
                        "componentName" =>"CarouselSearch",
                        "componentTitle" =>"轮播搜索",
                        "ignore" =>[
                            "componentBgColor",
                            "componentBgUrl",
                            "marginTop",
                            "marginBottom",
                            "topRounded",
                            "bottomRounded",
                            "pageBgColor",
                            "marginBoth"
                        ],
                        "positionWay" =>"fixed",
                        "fixedBgColor" =>"",
                        "bgGradient" =>false,
                        "search" => [
                            "logo" =>"",
                            "text" =>"请输入搜索关键词",
                            "link" => [
                                "parent" =>"TK_CPS_COMMONLINK",
                                "name" =>"TK_CPS_ACT_LIST",
                                "title" =>"活动列表",
                                "url" =>"/addon/tk_cps/pages/act",
                                "action" =>""
                            ],
                            "hotWord" => [
                                "interval" =>3,
                                "list" =>[
                                    [
                                        "id" =>"1f7gk30rjzb4",
                                        "text" =>"美团"
                                    ],
                                    [
                                        "id" =>"764nlt1jlx00",
                                        "text" =>"饿了么"
                                    ],
                                    [
                                        "id" =>"yvfl1rk9r5c",
                                        "text" =>"滴滴"
                                    ],
                                    [
                                        "id" =>"2nz0qb0xeoi0",
                                        "text" =>"加油"
                                    ],
                                    [
                                        "id" =>"72crwwk98dc0",
                                        "text" =>"充值"
                                    ]
                                ]
                            ]
                        ],
                        "tab" => [
                            "control" =>false,
                            "noColor" =>"",
                            "selectColor" =>"",
                            "fixedNoColor" =>"",
                            "fixedSelectColor" =>"",
                            "list" =>[
                                [
                                    "text" =>"外卖美食",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>"",
                                    "id" =>"1vj3coj3i0bk"
                                ],
                                [
                                    "id" =>"5pf95n5a7900",
                                    "text" =>"在线点餐",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"2u9hjt5r32w0",
                                    "text" =>"团购到店",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"3jpskez10x20",
                                    "text" =>"酒店预订",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"1txalzramfi8",
                                    "text" =>"滴滴打车",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ]
                            ]
                        ],
                        "swiper" => [
                            "control" =>true,
                            "interval" =>5,
                            "indicatorColor" =>"rgba(0, 0, 0, 0.3)",
                            "indicatorActiveColor" =>"rgba(242, 213, 248, 0.8)",
                            "indicatorStyle" =>"style-1",
                            "indicatorAlign" =>"center",
                            "swiperStyle" =>"style-2",
                            "imageHeight" =>142,
                            "topRounded" =>10,
                            "bottomRounded" =>10,
                            "list" =>[
                                [
                                    "imageUrl" =>"addon/tk_cps/diy/img/feizhu.png",
                                    "imgWidth" =>1000,
                                    "imgHeight" =>400,
                                    "link" => [
                                        "name" =>""
                                    ],
                                    "id" =>"2oqe5pe7sjk0",
                                    "width" =>355,
                                    "height" =>142
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
                        ]
                    ],
                    [
                        "path" =>"edit-graphic-nav",
                        "uses" =>0,
                        "id" =>"zrmp9f7qrds",
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
                        "showStyle" =>"singleSlide",
                        "rowCount" =>5,
                        "pageCount" =>1,
                        "carousel" => [
                            "type" =>"circle",
                            "color" =>"#FFFFFF"
                        ],
                        "imageSize" =>36,
                        "aroundRadius" =>19,
                        "font" => [
                            "size" =>14,
                            "weight" =>"normal",
                            "color" =>"#303133"
                        ],
                        "list" =>[
                            [
                                "id" =>"73r398jtz1g0",
                                "title" =>"美团红包",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituan.png",
                                "imgWidth" =>51,
                                "imgHeight" =>51,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_HOME",
                                    "title" =>"美团红包",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=89&style=embedded",
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
                                "id" =>"2jr6sn7r8ea0",
                                "title" =>"麦当劳",
                                "imageUrl" =>"addon/tk_cps/diy/logo/mdl.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_MDL",
                                    "title" =>"麦当劳",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=26&style=embedded",
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
                                "id" =>"46awqdn9u420",
                                "title" =>"肯德基",
                                "imageUrl" =>"addon/tk_cps/diy/logo/kfc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_KDJ",
                                    "title" =>"肯德基",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=38&style=embedded",
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
                                "id" =>"2cmvxiapyb0g",
                                "title" =>"星巴克",
                                "imageUrl" =>"addon/tk_cps/diy/logo/xbk.png",
                                "imgWidth" =>102,
                                "imgHeight" =>102,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_XBK",
                                    "title" =>"星巴克",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=34&style=embedded",
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
                                "id" =>"5r62od2wqqc0",
                                "title" =>"奈雪",
                                "imageUrl" =>"addon/tk_cps/diy/logo/lxdc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_NXDC",
                                    "title" =>"奈雪的茶",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=77&style=embedded",
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
                                "id" =>"4ldxrxvv3940",
                                "title" =>"饿了么",
                                "imageUrl" =>"addon/tk_cps/diy/logo/elm.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ELE_SALES_NEW",
                                    "title" =>"饿了么零售",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=159&style=embedded",
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
                                "id" =>"v0ljtl0tbk0",
                                "title" =>"必胜客",
                                "imageUrl" =>"addon/tk_cps/diy/logo/bsk.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_BXK",
                                    "title" =>"必胜客",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=64&style=embedded",
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
                                "id" =>"7jhr11kh5gw0",
                                "title" =>"团购到店",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituantuangou.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_TG_MXBT",
                                    "title" =>"美团团购",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=74&style=embedded",
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
                                "id" =>"3uitowsoejc0",
                                "title" =>"热门电影",
                                "imageUrl" =>"addon/tk_cps/diy/logo/dianyin.png",
                                "imgWidth" =>128,
                                "imgHeight" =>131,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MOVIE",
                                    "title" =>"热门电影",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=76&style=embedded",
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
                                "id" =>"1t00hzl8xwn4",
                                "title" =>"景区门票",
                                "imageUrl" =>"addon/tk_cps/diy/logo/menpiao.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MENPIAO",
                                    "title" =>"景区门票",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=105&style=embedded",
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
                        "pageBgColor" =>null,
                        "componentBgColor" =>"rgba(251, 243, 252, 1)",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-bwc",
                        "uses" =>1,
                        "id" =>"4tqxxtgu1es0",
                        "componentName" =>"Bwc",
                        "componentTitle" =>"霸王餐",
                        "ignore" =>[],
                        "songbackground" =>"#2979ff",
                        "btbackground" =>"#2979ff",
                        "btfontcolor" =>"#ffffff",
                        "btname" =>"去下单",
                        "qsfontcolor" =>"#030307",
                        "slfontcolor" =>"#a9a9a9",
                        "padding" =>"12",
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
                        "componentBgUrl" =>"",
                        "maincolor" =>"rgba(37, 141, 252, 1)",
                        "jdcolor" =>"rgba(129, 190, 255, 1)",
                        "pageGradientAngle" =>"to bottom",
                        "pageEndBgColor" =>"rgba(247, 225, 245, 1)",
                        "pageStartBgColor" =>"rgba(198, 247, 198, 0.19)",
                        "showtitle" =>"1",
                        "titlesize" =>34,
                        "localcolor" =>"rgba(34, 98, 217, 0.62)",
                        "titlecolor" =>"rgba(37, 141, 252, 1)",
                        "localsize" =>28,
                        "yqbgcolor" =>"rgba(233, 234, 255, 1)",
                        "yqbordercolor" =>"rgba(101, 139, 254, 1)",
                        "yqfontcolor" =>"rgba(48, 101, 215, 1)"
                    ]
                ]
            ]
        ],
    ],
    'DIY_TK_CPS_MEMBER_INDEX' => [
        'tk_cps_member_first' => [ // 页面标识
            "title" => "CPS个人中心", // 页面名称
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
    'DIY_INDEX' => [
        'tk_cps_diy_first_index' => [ // 页面标识
            "title" => "CPS首页(模板一)", // 页面名称
            'cover' => '', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" =>"CPS特惠",
                    "pageBgColor" =>"#F8F8F8",
                    "bgUrl" =>"addon/tk_cps/diy/img/bg.png",
                    "imgWidth" =>750,
                    "imgHeight" =>1485,
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
                        "path" =>"edit-carousel-search",
                        "uses" =>1,
                        "position" =>"top_fixed",
                        "id" =>"3mg5q5m6pka0",
                        "componentName" =>"CarouselSearch",
                        "componentTitle" =>"轮播搜索",
                        "ignore" =>[
                            "componentBgColor",
                            "componentBgUrl",
                            "marginTop",
                            "marginBottom",
                            "topRounded",
                            "bottomRounded",
                            "pageBgColor",
                            "marginBoth"
                        ],
                        "positionWay" =>"static",
                        "fixedBgColor" =>"",
                        "bgGradient" =>false,
                        "search" => [
                            "logo" =>"",
                            "text" =>"请输入搜索关键词",
                            "link" => [
                                "parent" =>"TK_CPS_COMMONLINK",
                                "name" =>"TK_CPS_ACT_LIST",
                                "title" =>"活动列表",
                                "url" =>"/addon/tk_cps/pages/act",
                                "action" =>""
                            ],
                            "hotWord" => [
                                "interval" =>3,
                                "list" =>[
                                    [
                                        "id" =>"1f7gk30rjzb4",
                                        "text" =>"美团"
                                    ],
                                    [
                                        "id" =>"764nlt1jlx00",
                                        "text" =>"饿了么"
                                    ],
                                    [
                                        "id" =>"yvfl1rk9r5c",
                                        "text" =>"滴滴"
                                    ],
                                    [
                                        "id" =>"2nz0qb0xeoi0",
                                        "text" =>"加油"
                                    ],
                                    [
                                        "id" =>"72crwwk98dc0",
                                        "text" =>"充值"
                                    ]
                                ]
                            ]
                        ],
                        "tab" => [
                            "control" =>false,
                            "noColor" =>"",
                            "selectColor" =>"",
                            "fixedNoColor" =>"",
                            "fixedSelectColor" =>"",
                            "list" =>[
                                [
                                    "text" =>"外卖美食",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>"",
                                    "id" =>"1vj3coj3i0bk"
                                ],
                                [
                                    "id" =>"5pf95n5a7900",
                                    "text" =>"在线点餐",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"2u9hjt5r32w0",
                                    "text" =>"团购到店",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"3jpskez10x20",
                                    "text" =>"酒店预订",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"1txalzramfi8",
                                    "text" =>"滴滴打车",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ]
                            ]
                        ],
                        "swiper" => [
                            "control" =>true,
                            "interval" =>5,
                            "indicatorColor" =>"rgba(0, 0, 0, 0.3)",
                            "indicatorActiveColor" =>"rgba(242, 213, 248, 0.8)",
                            "indicatorStyle" =>"style-1",
                            "indicatorAlign" =>"center",
                            "swiperStyle" =>"style-2",
                            "imageHeight" =>142,
                            "topRounded" =>10,
                            "bottomRounded" =>10,
                            "list" =>[
                                [
                                    "imageUrl" =>"addon/tk_cps/diy/img/feizhu.png",
                                    "imgWidth" =>1000,
                                    "imgHeight" =>400,
                                    "link" => [
                                        "parent" =>"TK_CPS_COMMONLINK",
                                        "name" =>"TK_CPS_FEIZHU",
                                        "title" =>"飞猪",
                                        "url" =>"/addon/tk_cps/pages/index?type=0&act_id=120&style=embedded",
                                        "action" =>""
                                    ],
                                    "id" =>"2oqe5pe7sjk0",
                                    "width" =>355,
                                    "height" =>142
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
                        ]
                    ],
                    [
                        "path" =>"edit-graphic-nav",
                        "uses" =>0,
                        "id" =>"zrmp9f7qrds",
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
                        "rowCount" =>5,
                        "pageCount" =>2,
                        "carousel" => [
                            "type" =>"circle",
                            "color" =>"#FFFFFF"
                        ],
                        "imageSize" =>36,
                        "aroundRadius" =>19,
                        "font" => [
                            "size" =>14,
                            "weight" =>"normal",
                            "color" =>"#303133"
                        ],
                        "list" =>[
                            [
                                "id" =>"73r398jtz1g0",
                                "title" =>"美团外卖",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituan.png",
                                "imgWidth" =>51,
                                "imgHeight" =>51,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_SHOP",
                                    "title" =>"美团外卖",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=7&style=embedded",
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
                                "id" =>"2jr6sn7r8ea0",
                                "title" =>"麦当劳",
                                "imageUrl" =>"addon/tk_cps/diy/logo/mdl.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_MDL",
                                    "title" =>"麦当劳",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=26&style=embedded",
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
                                "id" =>"46awqdn9u420",
                                "title" =>"肯德基",
                                "imageUrl" =>"addon/tk_cps/diy/logo/kfc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_KDJ",
                                    "title" =>"肯德基",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=38&style=embedded",
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
                                "id" =>"2cmvxiapyb0g",
                                "title" =>"星巴克",
                                "imageUrl" =>"addon/tk_cps/diy/logo/xbk.png",
                                "imgWidth" =>102,
                                "imgHeight" =>102,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_XBK",
                                    "title" =>"星巴克",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=34&style=embedded",
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
                                "id" =>"5r62od2wqqc0",
                                "title" =>"奈雪",
                                "imageUrl" =>"addon/tk_cps/diy/logo/lxdc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_NXDC",
                                    "title" =>"奈雪的茶",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=77&style=embedded",
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
                                "id" =>"4ldxrxvv3940",
                                "title" =>"饿了么",
                                "imageUrl" =>"addon/tk_cps/diy/logo/elm.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ELE_SALES_NEW",
                                    "title" =>"饿了么零售",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=159&style=embedded",
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
                                "id" =>"v0ljtl0tbk0",
                                "title" =>"必胜客",
                                "imageUrl" =>"addon/tk_cps/diy/logo/bsk.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_BXK",
                                    "title" =>"必胜客",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=64&style=embedded",
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
                                "id" =>"7jhr11kh5gw0",
                                "title" =>"团购到店",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituantuangou.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_TG_MXBT",
                                    "title" =>"美团团购",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=74&style=embedded",
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
                                "id" =>"3uitowsoejc0",
                                "title" =>"热门电影",
                                "imageUrl" =>"addon/tk_cps/diy/logo/dianyin.png",
                                "imgWidth" =>128,
                                "imgHeight" =>131,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MOVIE",
                                    "title" =>"热门电影",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=76&style=embedded",
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
                                "id" =>"1t00hzl8xwn4",
                                "title" =>"景区门票",
                                "imageUrl" =>"addon/tk_cps/diy/logo/menpiao.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MENPIAO",
                                    "title" =>"景区门票",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=105&style=embedded",
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
                        "pageBgColor" =>null,
                        "componentBgColor" =>"rgba(251, 243, 252, 1)",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>"",
                        "componentStartBgColor" =>"rgba(255, 255, 255, 0.91)"
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"7k62kjwjpso0",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>111,
                        "list" =>[
                            [
                                "id" =>"5e984mi3t080",
                                "imageUrl" =>"addon/tk_cps/diy/img/llk.png",
                                "imgWidth" =>938,
                                "imgHeight" =>280,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_CARD_LIULIANGKA",
                                    "title" =>"超值流量卡",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=188&style=embedded",
                                    "action" =>""
                                ],
                                "width" =>375,
                                "height" =>111.94029850746267
                            ],
                            [
                                "id" =>"5in2aeu9ogs0",
                                "imageUrl" =>"addon/tk_cps/diy/img/thkd.jpg",
                                "imgWidth" =>937,
                                "imgHeight" =>280,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_KUAIDI",
                                    "title" =>"特惠快递",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=74&style=embedded",
                                    "action" =>""
                                ]
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>8,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:16rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"6g5xq7i3m080",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>211,
                        "list" =>[
                            [
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEITUAN_QUANBAO",
                                    "title" =>"美团券包",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=117&style=embedded",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_cps/diy/img/mtqb.jpg",
                                "imgWidth" =>690,
                                "imgHeight" =>390,
                                "id" =>"7bklkd90vck0",
                                "width" =>375,
                                "height" =>211.9565217391304
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"53aheqr4jxo0",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>168,
                        "list" =>[
                            [
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_DIDIJIAYOU",
                                    "title" =>"滴滴加油",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=43&style=embedded",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_cps/diy/img/didi_jiayoupng.png",
                                "imgWidth" =>552,
                                "imgHeight" =>248,
                                "width" =>375,
                                "height" =>168.47826086956522,
                                "id" =>"3ddjxwe57qg0"
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-image-ads",
                        "uses" =>0,
                        "id" =>"tm3484uzl9s",
                        "componentName" =>"ImageAds",
                        "componentTitle" =>"图片广告",
                        "ignore" =>[],
                        "imageHeight" =>120,
                        "list" =>[
                            [
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=56&style=embedded",
                                    "title" =>"花小猪",
                                    "name" =>"TK_CPS_DACHE_HUAXIAOZHU",
                                    "action" =>""
                                ],
                                "imageUrl" =>"addon/tk_cps/diy/img/hxz.jpg",
                                "imgWidth" =>687,
                                "imgHeight" =>220,
                                "width" =>375,
                                "height" =>120.08733624454149,
                                "id" =>"4qj1tio78f80"
                            ]
                        ],
                        "textColor" =>"#303133",
                        "pageBgColor" =>"",
                        "componentBgColor" =>"",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ]
                ]
            ]
        ],
        'tk_cps_diy_bwc_index' => [ // 页面标识
            "title" => "CPS霸王餐(模板一)", // 页面名称
            'cover' => '', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" =>"CPS霸王餐",
                    "pageBgColor" =>"#F8F8F8",
                    "bgUrl" =>"addon/tk_cps/diy/img/bg.png",
                    "imgWidth" =>750,
                    "imgHeight" =>1485,
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
                        "path" =>"edit-carousel-search",
                        "uses" =>1,
                        "position" =>"top_fixed",
                        "id" =>"3mg5q5m6pka0",
                        "componentName" =>"CarouselSearch",
                        "componentTitle" =>"轮播搜索",
                        "ignore" =>[
                            "componentBgColor",
                            "componentBgUrl",
                            "marginTop",
                            "marginBottom",
                            "topRounded",
                            "bottomRounded",
                            "pageBgColor",
                            "marginBoth"
                        ],
                        "positionWay" =>"fixed",
                        "fixedBgColor" =>"",
                        "bgGradient" =>false,
                        "search" => [
                            "logo" =>"",
                            "text" =>"请输入搜索关键词",
                            "link" => [
                                "parent" =>"TK_CPS_COMMONLINK",
                                "name" =>"TK_CPS_ACT_LIST",
                                "title" =>"活动列表",
                                "url" =>"/addon/tk_cps/pages/act",
                                "action" =>""
                            ],
                            "hotWord" => [
                                "interval" =>3,
                                "list" =>[
                                    [
                                        "id" =>"1f7gk30rjzb4",
                                        "text" =>"美团"
                                    ],
                                    [
                                        "id" =>"764nlt1jlx00",
                                        "text" =>"饿了么"
                                    ],
                                    [
                                        "id" =>"yvfl1rk9r5c",
                                        "text" =>"滴滴"
                                    ],
                                    [
                                        "id" =>"2nz0qb0xeoi0",
                                        "text" =>"加油"
                                    ],
                                    [
                                        "id" =>"72crwwk98dc0",
                                        "text" =>"充值"
                                    ]
                                ]
                            ]
                        ],
                        "tab" => [
                            "control" =>false,
                            "noColor" =>"",
                            "selectColor" =>"",
                            "fixedNoColor" =>"",
                            "fixedSelectColor" =>"",
                            "list" =>[
                                [
                                    "text" =>"外卖美食",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>"",
                                    "id" =>"1vj3coj3i0bk"
                                ],
                                [
                                    "id" =>"5pf95n5a7900",
                                    "text" =>"在线点餐",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"2u9hjt5r32w0",
                                    "text" =>"团购到店",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"3jpskez10x20",
                                    "text" =>"酒店预订",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ],
                                [
                                    "id" =>"1txalzramfi8",
                                    "text" =>"滴滴打车",
                                    "source" =>"diy_page",
                                    "diy_id" =>"",
                                    "diy_title" =>""
                                ]
                            ]
                        ],
                        "swiper" => [
                            "control" =>true,
                            "interval" =>5,
                            "indicatorColor" =>"rgba(0, 0, 0, 0.3)",
                            "indicatorActiveColor" =>"rgba(242, 213, 248, 0.8)",
                            "indicatorStyle" =>"style-1",
                            "indicatorAlign" =>"center",
                            "swiperStyle" =>"style-2",
                            "imageHeight" =>142,
                            "topRounded" =>10,
                            "bottomRounded" =>10,
                            "list" =>[
                                [
                                    "imageUrl" =>"addon/tk_cps/diy/img/feizhu.png",
                                    "imgWidth" =>1000,
                                    "imgHeight" =>400,
                                    "link" => [
                                        "name" =>""
                                    ],
                                    "id" =>"2oqe5pe7sjk0",
                                    "width" =>355,
                                    "height" =>142
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
                        ]
                    ],
                    [
                        "path" =>"edit-graphic-nav",
                        "uses" =>0,
                        "id" =>"zrmp9f7qrds",
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
                        "showStyle" =>"singleSlide",
                        "rowCount" =>5,
                        "pageCount" =>1,
                        "carousel" => [
                            "type" =>"circle",
                            "color" =>"#FFFFFF"
                        ],
                        "imageSize" =>36,
                        "aroundRadius" =>19,
                        "font" => [
                            "size" =>14,
                            "weight" =>"normal",
                            "color" =>"#303133"
                        ],
                        "list" =>[
                            [
                                "id" =>"73r398jtz1g0",
                                "title" =>"美团红包",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituan.png",
                                "imgWidth" =>51,
                                "imgHeight" =>51,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_HOME",
                                    "title" =>"美团红包",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=89&style=embedded",
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
                                "id" =>"2jr6sn7r8ea0",
                                "title" =>"麦当劳",
                                "imageUrl" =>"addon/tk_cps/diy/logo/mdl.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_MDL",
                                    "title" =>"麦当劳",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=26&style=embedded",
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
                                "id" =>"46awqdn9u420",
                                "title" =>"肯德基",
                                "imageUrl" =>"addon/tk_cps/diy/logo/kfc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_KDJ",
                                    "title" =>"肯德基",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=38&style=embedded",
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
                                "id" =>"2cmvxiapyb0g",
                                "title" =>"星巴克",
                                "imageUrl" =>"addon/tk_cps/diy/logo/xbk.png",
                                "imgWidth" =>102,
                                "imgHeight" =>102,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_XBK",
                                    "title" =>"星巴克",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=34&style=embedded",
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
                                "id" =>"5r62od2wqqc0",
                                "title" =>"奈雪",
                                "imageUrl" =>"addon/tk_cps/diy/logo/lxdc.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_NXDC",
                                    "title" =>"奈雪的茶",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=77&style=embedded",
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
                                "id" =>"4ldxrxvv3940",
                                "title" =>"饿了么",
                                "imageUrl" =>"addon/tk_cps/diy/logo/elm.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ELE_SALES_NEW",
                                    "title" =>"饿了么零售",
                                    "url" =>"/addon/tk_cps/pages/index?type=1&act_id=159&style=embedded",
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
                                "id" =>"v0ljtl0tbk0",
                                "title" =>"必胜客",
                                "imageUrl" =>"addon/tk_cps/diy/logo/bsk.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_ZXDC_BXK",
                                    "title" =>"必胜客",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=64&style=embedded",
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
                                "id" =>"7jhr11kh5gw0",
                                "title" =>"团购到店",
                                "imageUrl" =>"addon/tk_cps/diy/logo/meituantuangou.png",
                                "imgWidth" =>96,
                                "imgHeight" =>96,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MEISHI_TG_MXBT",
                                    "title" =>"美团团购",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=74&style=embedded",
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
                                "id" =>"3uitowsoejc0",
                                "title" =>"热门电影",
                                "imageUrl" =>"addon/tk_cps/diy/logo/dianyin.png",
                                "imgWidth" =>128,
                                "imgHeight" =>131,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MOVIE",
                                    "title" =>"热门电影",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=76&style=embedded",
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
                                "id" =>"1t00hzl8xwn4",
                                "title" =>"景区门票",
                                "imageUrl" =>"addon/tk_cps/diy/logo/menpiao.png",
                                "imgWidth" =>128,
                                "imgHeight" =>128,
                                "link" => [
                                    "parent" =>"TK_CPS_COMMONLINK",
                                    "name" =>"TK_CPS_MENPIAO",
                                    "title" =>"景区门票",
                                    "url" =>"/addon/tk_cps/pages/index?type=0&act_id=105&style=embedded",
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
                        "pageBgColor" =>null,
                        "componentBgColor" =>"rgba(251, 243, 252, 1)",
                        "topRounded" =>10,
                        "bottomRounded" =>10,
                        "elementBgColor" =>"",
                        "topElementRounded" =>0,
                        "bottomElementRounded" =>0,
                        "margin" => [
                            "top" =>10,
                            "bottom" =>0,
                            "both" =>10
                        ],
                        "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;",
                        "componentBgUrl" =>""
                    ],
                    [
                        "path" =>"edit-bwc",
                        "uses" =>1,
                        "id" =>"4tqxxtgu1es0",
                        "componentName" =>"Bwc",
                        "componentTitle" =>"霸王餐",
                        "ignore" =>[],
                        "songbackground" =>"#2979ff",
                        "btbackground" =>"#2979ff",
                        "btfontcolor" =>"#ffffff",
                        "btname" =>"去下单",
                        "qsfontcolor" =>"#030307",
                        "slfontcolor" =>"#a9a9a9",
                        "padding" =>"12",
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
                        "componentBgUrl" =>"",
                        "maincolor" =>"rgba(37, 141, 252, 1)",
                        "jdcolor" =>"rgba(129, 190, 255, 1)",
                        "pageGradientAngle" =>"to bottom",
                        "pageEndBgColor" =>"rgba(247, 225, 245, 1)",
                        "pageStartBgColor" =>"rgba(198, 247, 198, 0.19)",
                        "showtitle" =>"1",
                        "titlesize" =>34,
                        "localcolor" =>"rgba(34, 98, 217, 0.62)",
                        "titlecolor" =>"rgba(37, 141, 252, 1)",
                        "localsize" =>28,
                        "yqbgcolor" =>"rgba(233, 234, 255, 1)",
                        "yqbordercolor" =>"rgba(101, 139, 254, 1)",
                        "yqfontcolor" =>"rgba(48, 101, 215, 1)"
                    ]
                ]
            ]
        ],
    ],
];