<?php

return [
    'DIY_FORM_GOODS_DETAIL' => [
        'shop_index_style2' => [ // 页面标识
            "title" => "商城首页1", // 页面名称
            'cover' => '', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" => "首页",
                    "pageStartBgColor" => "rgba(246, 246, 246, 1)",
                    "pageEndBgColor" => "",
                    "pageGradientAngle" => "to bottom",
                    "bgUrl" => "",
                    "bgHeightScale" => 100,
                    "imgWidth" => "",
                    "imgHeight" => "",
                    "topStatusBar" => [
                        "isShow" => false,
                        "bgColor" => "#ffffff",
                        "rollBgColor" => "#ffffff",
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "textColor" => "#333333",
                        "rollTextColor" => "#333333",
                        "textAlign" => "center",
                        "inputPlaceholder" => "请输入搜索关键词",
                        "imgUrl" => "",
                        "link" => [
                            "name" => ""
                        ]
                    ],
                    "bottomTabBarSwitch" => true,
                    "popWindow" => [
                        "imgUrl" => "",
                        "imgWidth" => "",
                        "imgHeight" => "",
                        "count" => -1,
                        "show" => 0,
                        "link" => [
                            "name" => ""
                        ]
                    ],
                    "template" => [
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 0
                        ]
                    ]
                ],
                "value" => [
                    [
                        "path" => "edit-carousel-search",
                        "uses" => 1,
                        "position" => "top_fixed",
                        "id" => "6r6qw5679oo0",
                        "componentName" => "CarouselSearch",
                        "componentTitle" => "轮播搜索",
                        "ignore" => [
                            "componentBgColor",
                            "componentBgUrl",
                            "marginTop",
                            "marginBottom",
                            "topRounded",
                            "bottomRounded",
                            "pageBgColor",
                            "marginBoth"
                        ],
                        "positionWay" => "fixed",
                        "fixedBgColor" => "",
                        "bgGradient" => false,
                        "search" => [
                            "logo" => "addon/shop/diy/index/style3/logo.png",
                            "text" => "请输入搜索关键词",
                            "link" => [
                                'name' => 'SHOP_GOODS_SEARCH',
                                "parent" => "SHOP_LINK",
                                'title' => '商品搜索',
                                'url' => '/addon/shop/pages/goods/search',
                                'action' => '',
                            ],
                            'style' => 'style-2',
                            'styleName' => '风格2',
                            "subTitle" => [
                                "text" => "本地好价·优选生活",
                                "textColor" => "#000000",
                                "startColor" => "rgba(255,255,255,0.7)",
                                "endColor" => "",
                            ],
                            'positionColor' => '#ffffff',
                            "hotWord" => [
                                "interval" => 3,
                                "list" => [
                                    [
                                        'text' => '新品推荐',
                                        'id' => '1l3juvqvimw0'
                                    ],
                                    [
                                        'text' => '爆款',
                                        'id' => '2vejp61n1xk0'
                                    ]
                                ]
                            ],
                            'color' => '#999999',
                            'btnColor' => '#ffffff',
                            'bgColor' => '#ffffff',
                            'btnBgColor' => '#ff3434'
                        ],
                        "tab" => [
                            "control" => false,
                            "noColor" => "rgba(255, 255, 255, 0.7)",
                            "selectColor" => "rgba(255, 255, 255, 1)",
                            "fixedNoColor" => "rgba(255, 255, 255, 0.7)",
                            "fixedSelectColor" => "rgba(255, 255, 255, 1)",
                            "list" => [
                                [
                                    "text" => "精选",
                                    "source" => "diy_page",
                                    "diy_id" => "",
                                    "diy_title" => "",
                                    "id" => "1wx7m1wykqbk"
                                ],
                                [
                                    "text" => "猜你喜欢",
                                    "source" => "diy_page",
                                    "diy_id" => "",
                                    "diy_title" => "",
                                    "id" => "1gfh1oc6fsjk"
                                ],
                                [
                                    "text" => "蔬菜",
                                    "source" => "diy_page",
                                    "diy_id" => "",
                                    "diy_title" => "",
                                    "id" => "25v390lfsd34"
                                ],
                                [
                                    "text" => "水果",
                                    "source" => "diy_page",
                                    "diy_id" => "",
                                    "diy_title" => "",
                                    "id" => "2zb1znvn5jc0"
                                ],
                                [
                                    "id" => "5acf7ab4f040",
                                    "text" => "海鲜",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => ""
                                ],
                                [
                                    "id" => "37a9vwqt1r20",
                                    "text" => "熟食",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => ""
                                ],
                                [
                                    "id" => "1en9w5jstvs0",
                                    "text" => "米面",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => ""
                                ],
                                [
                                    "id" => "3ae14irgqoa0",
                                    "text" => "粮油",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => " "
                                ]
                            ]
                        ],
                        "swiper" => [
                            "control" => true,
                            "interval" => 5,
                            "indicatorColor" => "rgba(255, 255, 255, 1)",
                            "indicatorActiveColor" => "#FF0E0E",
                            "indicatorStyle" => "style-3",
                            "indicatorAlign" => "center",
                            "swiperStyle" => "style-3",
                            "imageHeight" => 274,
                            "topRounded" => 0,
                            "bottomRounded" => 0,
                            "list" => [
                                [
                                    "imageUrl" => "addon/shop/diy/index/style3/banner1.jpg",
                                    "imgWidth" => 750,
                                    "imgHeight" => 580,
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "id" => "397htiaqung0",
                                    "width" => 355,
                                    "height" => 274.53
                                ],
                                [
                                    "imageUrl" => "addon/shop/diy/index/style3/banner2.jpg",
                                    "imgWidth" => 750,
                                    "imgHeight" => 580,
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "id" => "6mrj3vwiamw0",
                                    "width" => 355,
                                    "height" => 274.53
                                ]
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 0
                        ],
                        "pageStyle" => "padding-top:2rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "4wk9nzocm3c",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
                        ],
                        "height" => 22,
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(246, 246, 246, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 17,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => -21,
                            "bottom" => 0,
                            "both" => 0
                        ],
                        "pageStyle" => "padding-top:2rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "6h28ebyqqnk0",
                        "componentName" => "GraphicNav",
                        "componentTitle" => "图文导航",
                        "ignore" => [],
                        "layout" => "horizontal",
                        "mode" => "graphic",
                        "showStyle" => "fixed",
                        "rowCount" => 5,
                        "pageCount" => 2,
                        "carousel" => [
                            "type" => "circle",
                            "color" => "#FFFFFF"
                        ],
                        "imageSize" => 40,
                        "aroundRadius" => 25,
                        "font" => [
                            "size" => 12,
                            "weight" => "normal",
                            "color" => "#303133"
                        ],
                        "list" => [
                            [
                                "title" => "签到",
                                "link" => [
                                    "name" => "MEMBER_MY_SIGN_IN",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "我的签到",
                                    "url" => "/app/pages/member/sign_in",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/index/style3/nav_sign_in.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "1evjnc3zeb5s",
                                "imgWidth" => 180,
                                "imgHeight" => 180
                            ],
                            [
                                "title" => "分销管理",
                                "link" => [
                                    "name" => "SHOP_FENXIAO_INDEX",
                                    "parent" => "SHOP_FENXIAO_LINK",
                                    "title" => "分销中心",
                                    "url" => "/addon/shop_fenxiao/pages/index",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/index/style3/nav_fenxiao.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "2ktzer8wrnc0",
                                "imgWidth" => 180,
                                "imgHeight" => 180
                            ],
                            [
                                "title" => "分销专区",
                                "link" => [
                                    "name" => "SHOP_FENXIAO_ZONE",
                                    "parent" => "SHOP_FENXIAO_LINK",
                                    "title" => "分销专区",
                                    "url" => "/addon/shop_fenxiao/pages/zone",
                                    "action" => "decorate"
                                ],
                                "imageUrl" => "addon/shop/diy/index/style3/nav_fenxiao_zone.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "4aixr8qu5ek0",
                                "imgWidth" => 180,
                                "imgHeight" => 180
                            ],
                            [
                                "title" => "领券中心",
                                "link" => [
                                    "name" => "SHOP_COUPON_LIST",
                                    "parent" => "SHOP_LINK",
                                    "title" => "优惠券列表",
                                    "url" => "/addon/shop/pages/coupon/list",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/index/style3/nav_coupon.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "3bmtyrslxxy0",
                                "imgWidth" => 180,
                                "imgHeight" => 180
                            ],
                            [
                                "id" => "6iux9g1aojo0",
                                "title" => "新闻资讯",
                                "imageUrl" => "addon/shop/diy/index/style3/nav_news_info.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => ""
                                ],
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ],
                            [
                                "id" => "7jggy5euv3w0",
                                "title" => "限时折扣",
                                "imageUrl" => "addon/shop/diy/index/style3/nav_discount.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "SHOP_DISCOUNT_LIST",
                                    "parent" => "SHOP_LINK",
                                    "title" => "限时折扣列表",
                                    'url' => '/addon/shop/pages/discount/list',
                                    "action" => ""
                                ],
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ],
                            [
                                "id" => "7bqpc6bjha80",
                                "title" => "积分商城",
                                "imageUrl" => "addon/shop/diy/index/style3/nav_point_index.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "SHOP_POINT_INDEX",
                                    "parent" => "SHOP_LINK",
                                    "title" => "积分商城",
                                    'url' => '/addon/shop/pages/point/index',
                                    "action" => ""
                                ],
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ],
                            [
                                "id" => "tgo5qmjawnk",
                                "title" => "礼品卡",
                                "imageUrl" => "addon/shop/diy/index/style3/nav_giftcard.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "SHOP_GIFTCARD_INDEX",
                                    "parent" => "SHOP_GIFTCARD_LINK",
                                    "title" => "礼品卡",
                                    "url" => "/addon/shop_giftcard/pages/index",
                                    "action" => ""
                                ],
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ],
                            [
                                "id" => "1fprven2cqrk",
                                "title" => "新人专享",
                                "imageUrl" => "addon/shop/diy/index/style3/nav_my_newcomer.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "SHOP_NEWCOMER_LIST",
                                    "parent" => "SHOP_LINK",
                                    "title" => "新人专享",
                                    "url" => "/addon/shop/pages/newcomer/list",
                                    "action" => ""
                                ],
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ],
                            [
                                "id" => "2wggehpnako0",
                                "title" => "地址管理",
                                "imageUrl" => "addon/shop/diy/index/style3/nav_my_address.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "MEMBER_ADDRESS",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "收货地址",
                                    "url" => "/app/pages/member/address",
                                    "action" => ""
                                ],
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ]
                        ],
                        // 轮播图设置
                        'swiper' => [
                            'indicatorColor' => 'rgba(0, 0, 0, 0.3)', // 未选中颜色
                            "indicatorActiveColor" => '#FF0E0E',
                            'indicatorStyle' => 'style-1',
                            'indicatorAlign' => 'center',
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => -10,
                            "bottom" => 10,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:2rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
                    ],
                    [
                        "path" => "edit-notice",
                        "uses" => 0,
                        "id" => "5ux60nfdm680",
                        "componentName" => "Notice",
                        "componentTitle" => "公告",
                        "ignore" => [],
                        "noticeType" => "img",
                        "imgType" => "diy",
                        "systemUrl" => "style_1",
                        "imageUrl" => "addon/shop/diy/index/style3/notice.png",
                        "showType" => "popup",
                        "scrollWay" => "upDown",
                        "fontSize" => 12,
                        "fontWeight" => "normal",
                        "noticeTitle" => "公告",
                        "list" => [
                            [
                                "text" => "最新公告：欢迎来到小店参观！",
                                "link" => [
                                    "name" => ""
                                ],
                                "id" => "1rz6s4buaxc0"
                            ],
                            [
                                "id" => "2wksdax75fc0",
                                "text" => "最新公告：欢迎来到小店参观！",
                                "link" => [
                                    "name" => ""
                                ]
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-goods-coupon",
                        "uses" => 0,
                        "id" => "5zq2inzbmu00",
                        "componentName" => "GoodsCoupon",
                        "componentTitle" => "优惠券",
                        "ignore" => [
                            "componentBgColor",
                            "componentBgUrl"
                        ],
                        "style" => "style-3",
                        "styleName" => "风格3",
                        "source" => "all",
                        "num" => 6,
                        "couponIds" => [],
                        "btnText" => "立即领取",
                        "couponTitle" => "每日省钱",
                        "couponSubTitle" => "先领券 再购物",
                        "titleColor" => "#ffffff",
                        "subTitleColor" => "#ffffff",
                        "couponItem" => [
                            "bgColor" => "#ffffff",
                            "textColor" => "#333333",
                            "subTextColor" => "#666666",
                            "moneyColor" => "#333333",
                            "aroundRadius" => 12
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => null,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-shop-goods-recommend",
                        "uses" => 0,
                        "id" => "2ezdal8ps1og",
                        "componentName" => "ShopGoodsRecommend",
                        "componentTitle" => "商品推荐",
                        "ignore" => [],
                        "priceStyle" => [
                            "mainColor" => "#333333"
                        ],
                        'source' => 'all',
                        "goods_ids" => [],
                        "list" => [
                            [
                                "title" => [
                                    "text" => "今日推荐",
                                    "textColor" => "#303133"
                                ],
                                "moreTitle" => [
                                    "text" => "精选",
                                    "textColor" => "#FFFFFF",
                                    "startColor" => "#FF7234",
                                    "endColor" => "#FF213F"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FFE5E5",
                                    "endColor" => "#FFF5F0"
                                ],
                                "button" => [
                                    "text" => "首单",
                                    "textColor" => "#FFFFFF",
                                    "color" => "#FF1128"
                                ],
                                "id" => "6t9kv928d680"
                            ],
                            [
                                "title" => [
                                    "text" => "品质好物",
                                    "textColor" => "#303133"
                                ],
                                "moreTitle" => [
                                    "text" => "精选",
                                    "textColor" => "#FFFFFF",
                                    "startColor" => "#F2C719",
                                    "endColor" => "#FBBA08"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FFEFBA",
                                    "endColor" => "#FFF5D7"
                                ],
                                "button" => [
                                    "text" => "首单",
                                    "textColor" => "#FFFFFF",
                                    "color" => "#FF1128"
                                ],
                                "id" => "4u1rv0e4qpo0"
                            ],
                            [
                                "title" => [
                                    "text" => "热销爆款",
                                    "textColor" => "#303133"
                                ],
                                "moreTitle" => [
                                    "text" => "精选",
                                    "textColor" => "#FFFFFF",
                                    "startColor" => "#FFA629",
                                    "endColor" => "#FF8E1E"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FFE4D9",
                                    "endColor" => "#FFFBF9"
                                ],
                                "button" => [
                                    "text" => "首单",
                                    "textColor" => "#FFFFFF",
                                    "color" => "#FF1128"
                                ],
                                "id" => "4v1bhzhxay60"
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 10,
                        "bottomElementRounded" => 10,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-active-cube",
                        "uses" => 0,
                        "id" => "3vmpaydr2a60",
                        "componentName" => "ActiveCube",
                        "componentTitle" => "活动魔方",
                        "ignore" => [],
                        "titleStyle" => [
                            "title" => "风格5",
                            "value" => "style-5"
                        ],
                        "text" => "超值爆款",
                        "textLink" => [
                            "name" => ""
                        ],
                        "titleColor" => "#F91700",
                        "subTitle" => [
                            "text" => "为您精选爆款",
                            "textColor" => "rgba(153, 153, 153, 1)",
                            "startColor" => "rgba(255, 255, 255, 1)",
                            "endColor" => "rgba(255, 255, 255, 1)",
                            "link" => [
                                "name" => ""
                            ]
                        ],
                        "blockStyle" => [
                            "title" => "风格2",
                            "value" => "style-2",
                            "fontWeight" => "bold",
                            "btnText" => "italics"
                        ],
                        "list" => [
                            [
                                "title" => [
                                    "text" => "品质好物",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "品质好物推荐",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "GO！",
                                    "startColor" => "#FFC051",
                                    "endColor" => "#FF9C00"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FFF1DB",
                                    "endColor" => "#FFFBF4"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods1.png",
                                "id" => "77tls7gaho80"
                            ],
                            [
                                "title" => [
                                    "text" => "热销推荐",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "本周热销商品",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "GO！",
                                    "startColor" => "#A4E894",
                                    "endColor" => "#45CC2A"
                                ],
                                "listFrame" => [
                                    "startColor" => "#E6F6E2",
                                    "endColor" => "#F5FDF3"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods2.png",
                                "id" => "m4scwuc67do"
                            ],
                            [
                                "title" => [
                                    "text" => "优惠好物",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "领券后更优惠",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "GO！",
                                    "startColor" => "#4BC2FF",
                                    "endColor" => "#1F7DFF"
                                ],
                                "listFrame" => [
                                    "startColor" => "#E2F6FF",
                                    "endColor" => "#F2FAFF"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods3.png",
                                "id" => "33nbfp8czea0"
                            ],
                            [
                                "title" => [
                                    "text" => "今日推荐",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "诚意推荐",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "GO！",
                                    "startColor" => "#FB792F",
                                    "endColor" => "#F91700"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FFEAEA",
                                    "endColor" => "#FFFCFB"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods4.png",
                                "id" => "49scoy4bgsg0"
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "#FFFAF5",
                        "topElementRounded" => 10,
                        "bottomElementRounded" => 10,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "textImg" => "static/resource/images/diy/active_cube/active_cube_text1.png",
                        "contentBtnTextStyle" => "italics",
                        "pageStyle" => "padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-picture-show",
                        "uses" => 0,
                        "id" => "2o99dw6mytk0",
                        "componentName" => "PictureShow",
                        "componentTitle" => "图片展播",
                        "ignore" => [],
                        "moduleOne" => [
                            "head" => [
                                "textImg" => "static/resource/images/diy/picture_show/picture_show_head_text1.png",
                                "subText" => "每日上新",
                                "subTextColor" => "#666666"
                            ],
                            "list" => [
                                [
                                    "btnTitle" => [
                                        "text" => "仅限今日",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_01.png"
                                ],
                                [
                                    "btnTitle" => [
                                        "text" => "超值上新",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_02.png"
                                ]
                            ],
                            "listFrame" => [
                                "startColor" => "#FFDDDD",
                                "endColor" => "#FFEBED"
                            ]
                        ],
                        "moduleTwo" => [
                            "head" => [
                                "textImg" => "static/resource/images/diy/picture_show/picture_show_head_text2.png",
                                "subText" => "好物低至1折1",
                                "subTextColor" => "#666666"
                            ],
                            "list" => [
                                [
                                    "btnTitle" => [
                                        "text" => "大牌直降",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_03.png"
                                ],
                                [
                                    "btnTitle" => [
                                        "text" => "天天底价",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_04.png"
                                ]
                            ],
                            "listFrame" => [
                                "startColor" => "#E6E1FE",
                                "endColor" => "#F0EEFC"
                            ]
                        ],
                        "moduleRounded" => [
                            "topRounded" => 10,
                            "bottomRounded" => 10
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => null,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-picture-show",
                        "uses" => 0,
                        "id" => "3wz1r5bww3q0",
                        "componentName" => "PictureShow",
                        "componentTitle" => "图片展播",
                        "ignore" => [],
                        "moduleOne" => [
                            "head" => [
                                "textImg" => "static/resource/images/diy/picture_show/picture_show_head_text3.png",
                                "subText" => "最高补1200元",
                                "subTextColor" => "#666666"
                            ],
                            "list" => [
                                [
                                    "btnTitle" => [
                                        "text" => "全网低价",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_05.png"
                                ],
                                [
                                    "btnTitle" => [
                                        "text" => "大牌特惠",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_06.png"
                                ]
                            ],
                            "listFrame" => [
                                "startColor" => "rgba(212, 239, 255, 1)",
                                "endColor" => "rgba(235, 244, 250, 1)"
                            ]
                        ],
                        "moduleTwo" => [
                            "head" => [
                                "textImg" => "static/resource/images/diy/picture_show/picture_show_head_text4.png",
                                "subText" => "每日上新",
                                "subTextColor" => "#666666"
                            ],
                            "list" => [
                                [
                                    "btnTitle" => [
                                        "text" => "人气爆款",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_07.png"
                                ],
                                [
                                    "btnTitle" => [
                                        "text" => "官方正品",
                                        "color" => "#ffffff",
                                        "startColor" => "#F5443E",
                                        "endColor" => "#F5443E"
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/picture_show/picture_08.png"
                                ]
                            ],
                            "listFrame" => [
                                "startColor" => "rgba(255, 241, 212, 1)",
                                "endColor" => "rgba(249, 242, 229, 1)"
                            ]
                        ],
                        "moduleRounded" => [
                            "topRounded" => 10,
                            "bottomRounded" => 10
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => null,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-shop-newcomer",
                        "uses" => 1,
                        "id" => "2hjc1q7f7q80",
                        "componentName" => "ShopNewcomer",
                        "componentTitle" => "新人专享",
                        "ignore" => [],
                        "style" => [
                            "title" => "风格1",
                            "value" => "style-1"
                        ],
                        "textImg" => "addon/shop/diy/newcomer/style_title_01.png",
                        "subTitle" => [
                            "text" => "查看更多",
                            "textColor" => "#FFFFFF",
                            "startColor" => "#FB792F",
                            "endColor" => "#F91700",
                            "link" => [
                                "name" => ""
                            ]
                        ],
                        "countDown" => [
                            "numberColor" => "rgba(255, 0, 0, 1)",
                            "numberBg" => [
                                "startColor" => "rgba(255, 255, 255, 1)",
                                "endColor" => ""
                            ],
                            "otherColor" => "rgba(255, 255, 255, 1)"
                        ],
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goods_ids" => [],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "#ff6D1A",
                        "componentEndBgColor" => "rgba(255, 70, 56, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 10,
                        "bottomElementRounded" => 10,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ],
                    [
                        "path" => "edit-single-recommend",
                        "uses" => 0,
                        "id" => "2mxsu6pbqpu0",
                        "componentName" => "SingleRecommend",
                        "componentTitle" => "精选推荐",
                        "ignore" => [],
                        "titleStyle" => [
                            "title" => "风格1",
                            "value" => "style-1"
                        ],
                        "textImg" => "addon/shop/diy/index/style3/single_recommend_text1.png",
                        "textLink" => [
                            "name" => ""
                        ],
                        "titleColor" => "rgba(153, 153, 153, 1)",
                        "subTitle" => [
                            "text" => "更多",
                            "textColor" => "rgba(153, 153, 153, 1)",
                            "link" => [
                                "name" => ""
                            ]
                        ],
                        "source" => "all",
                        "goods_ids" => [],
                        "imageHeight" => "250",
                        "list" => [
                            [
                                "id" => "18o4pyaufktc",
                                "imageUrl" => "addon/shop/diy/index/style3/single_recommend_banner1.jpg",
                                "imgWidth" => 345,
                                "imgHeight" => 495,
                                "link" => [
                                    "name" => ""
                                ],
                                "width" => 355,
                                "height" => 509.3478260869565
                            ],
                            [
                                "id" => "18o8pyaufktc",
                                "imageUrl" => "addon/shop/diy/index/style3/single_recommend_banner2.jpg",
                                "imgWidth" => 345,
                                "imgHeight" => 495,
                                "link" => [
                                    "name" => ""
                                ],
                                "width" => 355,
                                "height" => 509.3478260869565
                            ]
                        ],
                        "goodsNameStyle" => [
                            "color" => "#303133",
                            "control" => true,
                            "fontWeight" => "normal"
                        ],
                        "priceStyle" => [
                            "mainColor" => "#FF4142",
                            "mainControl" => true,
                            "lineColor" => "#999CA7",
                            "lineControl" => true
                        ],
                        "saleStyle" => [
                            "color" => "rgba(255, 0, 0, 1)",
                            "control" => true
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => null,
                        "componentEndBgColor" => null,
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "rgba(255, 255, 255, 1)",
                        "topElementRounded" => 12,
                        "bottomElementRounded" => 12,
                        "margin" => [
                            "top" => 15,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStyle" => "padding-top:20rpx;padding-bottom:20rpx;padding-right:20rpx;padding-left:20rpx;",
                        "topCarouselRounded" => 12,
                        "bottomCarouselRounded" => 12,
                        "indicatorColor" => "rgba(255, 255, 255, 0.6)",
                        "indicatorActiveColor" => "rgba(255, 255, 255, 1)"
                    ],
                    [
                        "path" => "edit-image-ads",
                        "uses" => 0,
                        "id" => "1kfmhruhijgg",
                        "componentName" => "ImageAds",
                        "componentTitle" => "图片广告",
                        "ignore" => [

                        ],
                        "imageHeight" => 89,
                        "isSameScreen" => false,
                        "list" => [
                            [
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/index/style3/discount_img.png",
                                "imgWidth" => 710,
                                "imgHeight" => 170,
                                "id" => "6eo9vdo9xtc0",
                                "width" => 375,
                                "height" => 89.78873239436619
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 10,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-many-goods-list",
                        "uses" => 0,
                        "id" => "37adfqtqe080",
                        "componentName" => "ManyGoodsList",
                        "componentTitle" => "多商品组",
                        "ignore" => [
                            "componentBgUrl"
                        ],
                        "style" => "style-2",
                        "num" => 6,
                        "sortWay" => "default",
                        "headStyle" => "style-4",
                        "aroundRadius" => 25,
                        "source" => "custom",
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goodsNameStyle" => [
                            "color" => "#303133",
                            "control" => true,
                            "fontWeight" => "normal",
                            "isShow" => true
                        ],
                        "priceStyle" => [
                            "color" => "#FF4142",
                            "control" => true,
                            "isShow" => true
                        ],
                        "saleStyle" => [
                            "color" => "#999999",
                            "control" => true,
                            "isShow" => true
                        ],
                        "labelStyle" => [
                            "control" => true,
                            "isShow" => true
                        ],
                        "btnStyle" => [
                            "fontWeight" => false,
                            "padding" => 0,
                            "aroundRadius" => 25,
                            "cartEvent" => "detail",
                            "text" => "购买",
                            "textColor" => "#FFFFFF",
                            "startBgColor" => "#FF4142",
                            "endBgColor" => "#FF4142",
                            "style" => "nc-icon-gouwuche1",
                            "control" => true
                        ],
                        "list" => [
                            [
                                "title" => "推荐",
                                "desc" => "猜你喜欢",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => [],
                                "imageUrl" => "",
                                "id" => "67pl1ysjhr40"
                            ],
                            [
                                "id" => "6z59zcmk4jk0",
                                "title" => "衣鞋包饰",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => [],
                                "imageUrl" => ""
                            ],
                            [
                                "id" => "1cfbll6wnmw0",
                                "title" => "居家百货",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => [],
                                "imageUrl" => ""
                            ],
                            [
                                "id" => "49p79g5l5qs0",
                                "title" => "食品营养",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => [],
                                "imageUrl" => ""
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "rgba(255, 255, 255, 1)",
                        "pageEndBgColor" => "rgba(255, 255, 255, 0.4)",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => null,
                        "componentEndBgColor" => null,
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 12,
                        "bottomElementRounded" => 12,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStyle" => "background:linear-gradient(to bottom,rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.4));padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
                    ]
                ]
            ]
        ],
    ],
];
