<?php

return [
    'DIY_SHOP_INDEX' => [
        'shop_index_style1' => [ // 页面标识
            "title" => "商城首页1", // 页面名称
            'cover' => 'addon/shop/diy/template/shop_index_one_cover.png', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" => "首页",
                    'pageStartBgColor' => 'rgba(246, 246, 246, 1)',
                    'pageEndBgColor' => '',
                    'pageGradientAngle' => 'to bottom',
                    "bgUrl" => "",
                    'bgHeightScale' => 0,
                    "imgWidth" => "",
                    "imgHeight" => "",
                    
                    "topStatusBar" => [
                        'isShow' => false,
                        'bgColor' => "#ffffff",
                        'rollBgColor' => "#ffffff",
                        'style' => 'style-1',
                        'styleName' => '风格1',
                        'textColor' => "#333333",
                        'rollTextColor' => "#333333",
                        'textAlign' => 'center',
                        'inputPlaceholder' => '请输入搜索关键词',
                        'imgUrl' => '',
                        'link' => [
                            'name' => ""
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
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                        "id" => "5wyf9s0k8jw0",
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
                        'bgGradient' => true,
                        "search" => [
                            "logo" => "addon/shop/diy/index/style2/logo.png",
                            "text" => "请输入搜索关键词",
                            "link" => [
                                'name' => 'SHOP_GOODS_SEARCH',
                                "parent" => "SHOP_LINK",
                                'title' => '商品搜索',
                                'url' => '/addon/shop/pages/goods/search',
                                'action' => '',
                            ],
                            'hotWord' => [
                                "interval" => 3,
                                'list' => [
                                    [
                                        'text' => '新品推荐'
                                    ],
                                    [
                                        'text' => '爆款'
                                    ]
                                ]
                            ]
                        ],
                        "tab" => [
                            "control" => true,
                            "noColor" => "rgba(255, 255, 255, 1)",
                            "selectColor" => "rgba(255, 255, 255, 1)",
                            "fixedNoColor" => "rgba(255, 255, 255, 1)",
                            "fixedSelectColor" => "rgba(255, 255, 255, 1)",
                            "list" => [
                                [
                                    "text" => "精选",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => "",
                                    "id" => "4tbvliuezhq0"
                                ],
                                [
                                    "text" => "猜你喜欢",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => "",
                                    "id" => "1rpxkuehd03k"
                                ],
                                [
                                    "text" => "蔬菜",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => "",
                                    "id" => "6d0zybcxzvc0"
                                ],
                                [
                                    "text" => "水果",
                                    "source" => "diy_page",
                                    "diy_id" => 0,
                                    "diy_title" => "",
                                    "id" => "17r58ld9i8xs"
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
                            "indicatorColor" => "rgba(0, 0, 0, 0.3)",
                            "indicatorActiveColor" => "#FF0E0E",
                            'indicatorStyle' => 'style-1',
                            'indicatorAlign' => 'center',
                            'swiperStyle' => 'style-1',
                            "imageHeight" => 158,
                            "topRounded" => 10,
                            "bottomRounded" => 10,
                            "list" => [
                                [
                                    "imageUrl" => "addon/shop/diy/index/style2/banner1.png",
                                    "imgWidth" => 630,
                                    "imgHeight" => 290,
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "id" => "2ywogh006ai0",
                                    "width" => 345,
                                    "height" => 158.8095238095238
                                ],
                                [
                                    "id" => "3p7wiewe0o00",
                                    "imageUrl" => "addon/shop/diy/index/style2/banner2.png",
                                    "imgWidth" => 630,
                                    "imgHeight" => 290,
                                    "link" => [
                                        "name" => ""
                                    ]
                                ]
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "",
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
                            "both" => 0
                        ]
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "6lvx8ztvquc0",
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_sign_in.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "1evjnc3zeb5s",
                                "imgWidth" => 135,
                                "imgHeight" => 135
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_fenxiao.png",
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_fenxiao_zone.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "4aixr8qu5ek0",
                                "imgWidth" => 135,
                                "imgHeight" => 135
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_coupon.png",
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_news_info.png",
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_discount.png",
                                "imgWidth" => 135,
                                "imgHeight" => 135,
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_point_index.png",
                                "imgWidth" => 135,
                                "imgHeight" => 135,
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
                                "title" => "我的积分",
                                "imageUrl" => "addon/shop/diy/index/style2/nav_my_point.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "MEMBER_POINT",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "我的积分",
                                    "url" => "/app/pages/member/point",
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
                                "title" => "我的余额",
                                "imageUrl" => "addon/shop/diy/index/style2/nav_my_balance.png",
                                "imgWidth" => 180,
                                "imgHeight" => 180,
                                "link" => [
                                    "name" => "MEMBER_BALANCE",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "我的余额",
                                    "url" => "/app/pages/member/balance",
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
                                "imageUrl" => "addon/shop/diy/index/style2/nav_my_address.png",
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
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => -1,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-notice",
                        "uses" => 0,
                        "id" => "4m9g2ylz1di0",
                        "componentName" => "Notice",
                        "componentTitle" => "公告",
                        "ignore" => [],
                        "noticeType" => "img",
                        "imgType" => "system",
                        "systemUrl" => "style_2",
                        "imageUrl" => "",
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
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-goods-coupon",
                        "uses" => 0,
                        "id" => "52ldidxgpcg0",
                        "componentName" => "GoodsCoupon",
                        "componentTitle" => "优惠券",
                        "ignore" => [
                            "componentBgColor",
                            "componentBgUrl"
                        ],
                        "style" => "style-1",
                        "styleName" => "风格一",
                        "source" => "all",
                        "num" => 6,
                        "couponIds" => [],
                        "btnText" => "立即领取",
                        "couponTitle" => "先领券 再购物",
                        "couponSubTitle" => "领券下单 享购物优惠",
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-active-cube",
                        "uses" => 0,
                        "id" => "717m86hlcho0",
                        "componentName" => "ActiveCube",
                        "componentTitle" => "活动魔方",
                        "ignore" => [],
                        "titleStyle" => [
                            "title" => "风格1",
                            "value" => "style-1"
                        ],
                        "text" => "超值爆款",
                        "textLink" => [
                            "name" => ""
                        ],
                        "titleColor" => "#F91700",
                        "subTitle" => [
                            "text" => "为您精选爆款",
                            "textColor" => "#FFFFFF",
                            "startColor" => "#FB792F",
                            "endColor" => "#F91700",
                            "link" => [
                                "name" => ""
                            ],
                        ],
                        "blockStyle" => [
                            "title" => "风格4",
                            "value" => "style-4",
                            'fontWeight' => 'bold'
                        ],
                        "list" => [
                            [
                                "title" => [
                                    "text" => "今日推荐",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "诚意推荐",
                                    "textColor" => "rgba(237, 110, 0, 1)",
                                    "startColor" => "rgba(243, 218, 197, 1)",
                                    "endColor" => "rgba(255, 228, 217, 1)"
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#FEA715",
                                    "endColor" => "#FE1E00",
                                ],
                                "listFrame" => [
                                    "startColor" => "rgba(255, 173, 77, 1)",
                                    "endColor" => "rgba(249, 61, 2, 1)"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods1.png",
                                "id" => "bvn98cr8j1s"
                            ],
                            [
                                "title" => [
                                    "text" => "优惠好物",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "领券优惠",
                                    "textColor" => "rgba(46, 89, 233, 1)",
                                    "startColor" => "rgba(205, 217, 248, 1)",
                                    "endColor" => "rgba(205, 217, 248, 1)"
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#FFBF50",
                                    "endColor" => "#FF9E03"
                                ],
                                "listFrame" => [
                                    "startColor" => "rgba(124, 167, 244, 1)",
                                    "endColor" => "rgba(43, 86, 233, 1)"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods2.png",
                                "id" => "6u24tqbyc780"
                            ],
                            [
                                "title" => [
                                    "text" => "热销推荐",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "热销商品",
                                    "textColor" => "rgba(246, 47, 85, 1)",
                                    "startColor" => "rgba(252, 216, 219, 1)",
                                    "endColor" => "rgba(252, 216, 219, 1)"
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#A2E792",
                                    "endColor" => "#49CD2D"
                                ],
                                "listFrame" => [
                                    "startColor" => "rgba(255, 127, 72, 1)",
                                    "endColor" => "rgba(238, 51, 91, 1)"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods3.png",
                                "id" => "6dn1yt1j0as0"
                            ],
                            [
                                "title" => [
                                    "text" => "书桌好物",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "好物推荐",
                                    "textColor" => "rgba(19, 155, 60, 1)",
                                    "startColor" => "rgba(211, 241, 218, 1)",
                                    "endColor" => "rgba(211, 241, 218, 1)"
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#4AC1FF",
                                    "endColor" => "#1D7CFF",
                                ],
                                "listFrame" => [
                                    "startColor" => "rgba(144, 212, 140, 1)",
                                    "endColor" => "rgba(41, 159, 79, 1)"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods4.png",
                                "id" => "4q9zphidqtm0"
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "#ffffff",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "#FFFAF5",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-active-cube",
                        "uses" => 0,
                        "id" => "3keeqqrkpxk0",
                        "componentName" => "ActiveCube",
                        "componentTitle" => "活动魔方",
                        "ignore" => [],
                        "titleStyle" => [
                            "title" => "风格4",
                            "value" => "style-4"
                        ],
                        "text" => "数码产品",
                        "textLink" => [
                            "name" => ""
                        ],
                        "titleColor" => "rgba(255, 255, 255, 1)",
                        "subTitle" => [
                            "text" => "去逛逛",
                            "textColor" => "#303133",
                            "startColor" => "rgba(255, 255, 255, 1)",
                            "endColor" => "rgba(255, 255, 255, 1)",
                            "link" => [
                                "name" => ""
                            ],
                        ],
                        "blockStyle" => [
                            "title" => "风格3",
                            "value" => "style-3",
                            'fontWeight' => 'normal'
                        ],
                        "list" => [
                            [
                                "title" => [
                                    "text" => "蓝牙耳机",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "诚意推荐",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#FEA715",
                                    "endColor" => "#FE1E00"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FEA715",
                                    "endColor" => "#FE1E00"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods5.png",
                                "id" => "5am2l07pkr00"
                            ],
                            [
                                "title" => [
                                    "text" => "医用雾化",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "领券更优惠",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#FFBF50",
                                    "endColor" => "#FF9E03"
                                ],
                                "listFrame" => [
                                    "startColor" => "#FFBF50",
                                    "endColor" => "#FF9E03"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods6.png",
                                "id" => "2v4zusih9u80"
                            ],
                            [
                                "title" => [
                                    "text" => "智能手表",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "本周热销商品",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#A2E792",
                                    "endColor" => "#49CD2D"
                                ],
                                "listFrame" => [
                                    "startColor" => "#A2E792",
                                    "endColor" => "#49CD2D"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods7.png",
                                "id" => "va5dyomnq68"
                            ],
                            [
                                "title" => [
                                    "text" => "甜心咖啡",
                                    "textColor" => "#303133"
                                ],
                                "subTitle" => [
                                    "text" => "办公好物推荐",
                                    "textColor" => "#999999",
                                    "startColor" => "",
                                    "endColor" => ""
                                ],
                                "moreTitle" => [
                                    "text" => "去看看",
                                    "startColor" => "#4AC1FF",
                                    "endColor" => "#1D7CFF"
                                ],
                                "listFrame" => [
                                    "startColor" => "#4AC1FF",
                                    "endColor" => "#1D7CFF"
                                ],
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods8.png",
                                "id" => "4h16lw3ntsw0"
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "static/resource/images/diy/active_cube/active_cube_bg.png",
                        "componentBgAlpha" => 7,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "#FFFAF5",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "6nc7hkh3g100",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 169, 97, 1)",
                        "componentEndBgColor" => "rgba(250, 61, 61, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 12,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "height" => 10
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "position" => "",
                        "id" => "7f1nc9pkntw0",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "style" => "style-2",
                        "styleName" => "风格2",
                        "text" => "新人尝鲜价",
                        "link" => [
                            "name" => ""
                        ],
                        "textColor" => "#FFFFFF",
                        "fontSize" => 15,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "数量有限 抢完为止",
                            "color" => "#FFFFFF",
                            "fontSize" => 12,
                            "control" => true,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "查看更多",
                            "control" => true,
                            "isShow" => false,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 169, 97, 1)",
                        "componentEndBgColor" => "rgba(250, 61, 61, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "1o6ptkjsnabk",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 169, 97, 1)",
                        "componentEndBgColor" => "rgba(250, 61, 61, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "height" => 10
                    ],
                    [
                        "path" => "edit-goods-list",
                        "uses" => 0,
                        "id" => "17uao387qdds",
                        "componentName" => "GoodsList",
                        "componentTitle" => "商品列表",
                        "ignore" => [],
                        "style" => "style-3",
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goods_ids" => [],
                        "sortWay" => "default",
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
                            "color" => "#999999",
                            "control" => true
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 169, 97, 1)",
                        "componentEndBgColor" => "rgba(250, 61, 61, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 0,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 10,
                        "bottomElementRounded" => 10,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 9,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "4z9jltfk8jc0",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(253, 41, 52, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "height" => 10
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "position" => "",
                        "id" => "65qaokgbzg80",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "style" => "style-2",
                        "styleName" => "风格2",
                        "text" => "今日疯抢",
                        "link" => [
                            "name" => ""
                        ],
                        "textColor" => "#FFFFFF",
                        "fontSize" => 15,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "数量有限 抢完为止",
                            "color" => "#FFFFFF",
                            "fontSize" => 12,
                            "control" => true,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "查看更多",
                            "control" => true,
                            "isShow" => false,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(253, 41, 52, 1)",
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
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-goods-list",
                        "uses" => 0,
                        "id" => "2u96wyrm79u0",
                        "componentName" => "GoodsList",
                        "componentTitle" => "商品列表",
                        "ignore" => [],
                        "style" => "style-1",
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goods_ids" => [],
                        "sortWay" => "default",
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
                            "color" => "#999999",
                            "control" => true
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(253, 41, 52, 1)",
                        "componentEndBgColor" => "rgba(255, 236, 236, 1)",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 10,
                        "bottomElementRounded" => 10,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "position" => "",
                        "id" => "5izyn9jcz3k0",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "text" => "精选推荐",
                        "link" => [
                            "name" => ""
                        ],
                        "textColor" => "#303133",
                        "fontSize" => 15,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "副标题",
                            "color" => "#999999",
                            "fontSize" => 14,
                            "control" => false,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "查看更多",
                            "control" => false,
                            "isShow" => true,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 20,
                            "bottom" => 15,
                            "both" => 0
                        ]
                    ],
                    [
                        "path" => "edit-goods-list",
                        "uses" => 0,
                        "id" => "4y7mw7j2uko0",
                        "componentName" => "GoodsList",
                        "componentTitle" => "商品列表",
                        "ignore" => [],
                        "style" => "style-2",
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goods_ids" => [],
                        "sortWay" => "default",
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
                            "color" => "#999999",
                            "control" => true
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 12,
                        "bottomElementRounded" => 12,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-many-goods-list",
                        "uses" => 0,
                        "id" => "65lv65b38ig0",
                        "componentName" => "ManyGoodsList",
                        "componentTitle" => "多商品组",
                        "ignore" => ['componentBgUrl'],
                        "style" => "style-2",
                        "num" => 6,
                        "sortWay" => "default",
                        "headStyle" => "style-2",
                        "aroundRadius" => 25,
                        "source" => "custom",
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
                            "color" => "#999999",
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
                                "id" => "2iljdx2ajqg0"
                            ],
                            [
                                "id" => "3a1x4kgbre40",
                                "title" => "衣鞋包饰",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => []
                            ],
                            [
                                "id" => "12ozjal2rfe8",
                                "title" => "居家百货",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => []
                            ],
                            [
                                "id" => "71kwrfxeoxw0",
                                "title" => "热卖好物",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => []
                            ],
                            [
                                "id" => "5tktk8897ag0",
                                "title" => "优品精选",
                                "desc" => "分类描述",
                                "source" => "all",
                                "goods_category" => "",
                                "goods_category_name" => "请选择",
                                "goods_ids" => []
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 12,
                        "bottomElementRounded" => 12,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 10,
                            "both" => 10
                        ]
                    ]
                ]
            ]
        ],
        'shop_index' => [ // 页面标识
            "title" => "商城首页2", // 页面名称
            'cover' => 'addon/shop/diy/template/shop_index_two_cover.png', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" => "首页",
                    'pageStartBgColor' => 'rgba(255, 255, 255, 1)',
                    'pageEndBgColor' => '',
                    'pageGradientAngle' => 'to bottom',
                    "bgUrl" => "addon/shop/diy/index/bg.png",
                    'bgHeightScale' => 0,
                    "imgWidth" => 750,
                    "imgHeight" => 1485,
                    "bottomTabBarSwitch" => true,
                    "template" => [
                        'textColor' => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                            "both" => 10
                        ]
                    ],
                    'topStatusBar' => [
                        'isShow' => true,
                        'bgColor' => "#ffffff",
                        'rollBgColor' => "#ffffff",
                        'style' => 'style-1',
                        'styleName' => '风格1',
                        'textColor' => "#333333",
                        'rollTextColor' => "#333333",
                        'textAlign' => 'center',
                        'inputPlaceholder' => '请输入搜索关键词',
                        'imgUrl' => '',
                        'link' => [
                            'name' => ""
                        ]
                    ],
                    'popWindow' => [
                        'imgUrl' => "",
                        'imgWidth' => '',
                        'imgHeight' => '',
                        'count' => -1,
                        'show' => 0,
                        'link' => [
                            'name' => ""
                        ],
                    ]
                ],
                "value" => [
                    [
                        "path" => "edit-shop-search",
                        "uses" => 1,
                        "id" => "245qvzv4w8gw",
                        "componentName" => "ShopSearch",
                        "componentTitle" => "搜索",
                        "ignore" => [],
                        "searchStyle" => "style-1",
                        "searchLink" => [
                            "name" => ""
                        ],
                        "text" => "请输入搜索关键词",
                        "iconType" => "img",
                        "icon" => "",
                        "imageUrl" => "",
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 20,
                            "bottom" => 15,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-image-ads",
                        "uses" => 0,
                        "id" => "6jdfnu4e36g0",
                        "componentName" => "ImageAds",
                        "componentTitle" => "图片广告",
                        "ignore" => [],
                        "imageHeight" => 160,
                        "list" => [
                            [
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/index/banner.png",
                                "imgWidth" => 702,
                                "imgHeight" => 320,
                                "id" => "7ao3t56ug4o0",
                                "width" => 375,
                                "height" => 170.94
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                            "bottom" => 10,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-notice",
                        "uses" => 0,
                        "id" => "1xpv3z7vvtds",
                        "componentName" => "Notice",
                        "componentTitle" => "公告",
                        "ignore" => [],
                        "noticeType" => "img",
                        "imgType" => "system",
                        "systemUrl" => "style_1",
                        "imageUrl" => "",
                        "showType" => "popup",
                        "scrollWay" => "upDown",
                        "fontSize" => 14,
                        "fontWeight" => "normal",
                        "noticeTitle" => "公告",
                        "list" => [
                            [
                                "id" => "1rz6s4buaxc0",
                                "link" => [
                                    "name" => ""
                                ],
                                "text" => "最新公告：欢迎来到小店参观！"
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 9,
                        "bottomRounded" => 9,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 10,
                            "both" => 10
                        ],
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "5tnh9iiuxv40",
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
                        "imageSize" => 26,
                        "aroundRadius" => 0,
                        "font" => [
                            "size" => 14,
                            "weight" => "normal",
                            "color" => "#303133"
                        ],
                        "list" => [
                            [
                                "title" => "首页",
                                "link" => [
                                    "parent" => "SYSTEM_LINK",
                                    "title" => "首页",
                                    "url" => "/app/pages/index/index",
                                    "name" => "INDEX"
                                ],
                                "imageUrl" => "addon/shop/diy/index/nav_notice.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "5b46sybkhkg0",
                                "imgWidth" => 50,
                                "imgHeight" => 50
                            ],
                            [
                                "title" => "商品",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "商品列表",
                                    "url" => "/addon/shop/pages/goods/list",
                                    "name" => "SHOP_GOODS_LIST"
                                ],
                                "imageUrl" => "addon/shop/diy/index/nav_supermarket.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "4dha169dzqe0",
                                "imgWidth" => 50,
                                "imgHeight" => 50
                            ],
                            [
                                "title" => "分类",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "商品分类",
                                    "url" => "/addon/shop/pages/goods/category",
                                    "name" => "SHOP_GOODS_CATEGORY"
                                ],
                                "imageUrl" => "addon/shop/diy/index/nav_article.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "7eh2hqz0w900",
                                "imgWidth" => 50,
                                "imgHeight" => 50
                            ],
                            [
                                "id" => "7fu7atbr9bk0",
                                "title" => "领券",
                                "imageUrl" => "addon/shop/diy/index/nav_coupon.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "优惠券列表",
                                    "url" => "/addon/shop/pages/coupon/list",
                                    "name" => "SHOP_COUPON_LIST"
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
                                "title" => "拼团",
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/index/nav_pintuan.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "5q9ogqz2vjc0",
                                "imgWidth" => 50,
                                "imgHeight" => 50
                            ],
                            [
                                "id" => "2cc20cawafr4",
                                "title" => "秒杀",
                                "imageUrl" => "addon/shop/diy/index/nav_seckill.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
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
                                "id" => "532sx2po4do0",
                                "title" => "签到",
                                "imageUrl" => "addon/shop/diy/index/nav_signin.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
                                "link" => [
                                    "name" => "MEMBER_MY_SIGN_IN",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "我的签到",
                                    "url" => "/app/pages/member/sign_in",
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
                                "id" => "13itkrdjqteo",
                                "title" => "邀请好友",
                                "imageUrl" => "addon/shop/diy/index/nav_invite_friends.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
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
                                "id" => "6sisp3zd0w80",
                                "title" => "公告",
                                "imageUrl" => "addon/shop/diy/index/nav_sys_message.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
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
                                "id" => "6qoc0ssgvhc0",
                                "title" => "积分",
                                "imageUrl" => "addon/shop/diy/index/nav_point.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
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
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 0.87)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 9,
                        "bottomRounded" => 9,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 12,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-hot-area",
                        "uses" => 0,
                        "id" => "53fen2lf6l80",
                        "componentName" => "HotArea",
                        "componentTitle" => "热区",
                        "ignore" => [],
                        "imageUrl" => "addon/shop/diy/index/hot_area.png",
                        "imgWidth" => 698,
                        "imgHeight" => 466,
                        "heatMapData" => [],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                            "bottom" => 12,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "id" => "5lojzvbvg6o0",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "text" => "商品推荐",
                        "link" => [
                            "name" => ""
                        ],
                        "textColor" => "#303133",
                        "fontSize" => 16,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "副标题",
                            "color" => "#999999",
                            "fontSize" => 14,
                            "control" => false,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "查看更多",
                            "control" => false,
                            "isShow" => true,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                            "bottom" => 12,
                            "both" => 0
                        ]
                    ],
                    [
                        "path" => "edit-goods-list",
                        "uses" => 0,
                        "id" => "50pj7dmvbvo0",
                        "componentName" => "GoodsList",
                        "componentTitle" => "商品列表",
                        "ignore" => [],
                        'style' => 'style-1',
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goods_ids" => [],
                        "sortWay" => "default", // 排序方式，default：综合，sale_num：销量，price：价格
                        "goodsNameStyle" => [
                            "color" => "#303133",
                            "control" => true,
                            "fontWeight" => 'bold'
                        ],
                        "priceStyle" => [
                            "mainColor" => "#FF4142",
                            "mainControl" => true,
                            "lineColor" => "#999CA7",
                            "lineControl" => true
                        ],
                        "saleStyle" => [
                            "color" => "#999999",
                            "control" => true
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                            "both" => 10
                        ]
                    ]
                ]
            ]
        ]
    ],
    'DIY_SHOP_MEMBER_INDEX' => [
        'shop_member_index_style1' => [
            "title" => "商城个人中心1", // 页面名称
            'cover' => 'addon/shop/diy/template/member_index_cover.png', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '个人中心', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            'data' => [
                "global" => [
                    "title" => "个人中心",
                    "bgUrl" => "",
                    "imgWidth" => "",
                    "imgHeight" => "",
                    "bottomTabBarSwitch" => true,
                    "template" => [
                        "textColor" => "#303133",
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
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
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom"
                    ],
                    "topStatusBar" => [
                        'isShow' => true,
                        'bgColor' => "#ffffff",
                        'rollBgColor' => "#ffffff",
                        'style' => 'style-1',
                        'styleName' => '风格1',
                        'textColor' => "#333333",
                        'rollTextColor' => "#333333",
                        'textAlign' => 'center',
                        'inputPlaceholder' => '请输入搜索关键词',
                        'imgUrl' => '',
                        'link' => [
                            'name' => ""
                        ]
                    ],
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
                    "pageStartBgColor" => "rgba(246, 246, 246, 1)",
                    "pageEndBgColor" => "",
                    "pageGradientAngle" => "to bottom",
                    "bgHeightScale" => 0
                ],
                "value" => [
                    [
                        "path" => "edit-shop-member-info",
                        "id" => "3pt9pn9bvn20",
                        "componentName" => "ShopMemberInfo",
                        "componentTitle" => "会员信息",
                        "uses" => 1,
                        "ignore" => [
                            "componentBgUrl"
                        ],
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
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
                        "textColor" => "#333333",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom",
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "bgUrl" => ""
                    ],
                    [
                        "path" => "edit-member-level",
                        "uses" => 1,
                        "id" => "533e6ynytmo0",
                        "componentName" => "MemberLevel",
                        "componentTitle" => "会员等级",
                        "ignore" => [
                            "componentBgColor",
                            "componentBgUrl"
                        ],
                        "style" => "style-3",
                        "styleName" => "风格3",
                        "textColor" => "#303133",
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => -45,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom"
                    ],
                    [
                        "path" => "edit-shop-order-info",
                        "uses" => 1,
                        "id" => "2jmnqqhc8ri0",
                        "componentName" => "ShopOrderInfo",
                        "componentTitle" => "订单中心",
                        "ignore" => [],
                        "textColor" => "#303133",
                        "fontSize" => 15,
                        "fontWeight" => "normal",
                        "text" => "订单中心",
                        "more" => [
                            "text" => "全部订单",
                            "color" => "#999999",
                        ],
                        "item" => [
                            "fontSize" => 12,
                            "fontWeight" => "normal",
                            "color" => "#303133"
                        ],
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom"
                    ],
                    [
                        "path" => "edit-image-ads",
                        "uses" => 0,
                        "id" => "3odoachos9s0",
                        "componentName" => "ImageAds",
                        "componentTitle" => "图片广告",
                        "ignore" => [],
                        "textColor" => "#303133",
                        "componentStartBgColor" => "",
                        "componentEndBgColor" => "",
                        "topRounded" => 12,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "list" => [
                            [
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/member/style1/banner.png",
                                "id" => "3nrdo9chhp",
                                "imgWidth" => 690,
                                "imgHeight" => 180,
                                "width" => 345,
                                "height" => 90
                            ]
                        ],
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom",
                        "imageHeight" => 100
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "6cil3ipiis40",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => ['pageBgColor','componentBgUrl'],
                        "height" => 10,
                        "textColor" => "#303133",
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "topRounded" => 12,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom"
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "id" => "68gnubbygqg0",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "textColor" => "#303133",
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "fontSize" => 15,
                        "fontWeight" => "normal",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom",
                        "position" => "",
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "text" => "其他功能",
                        "link" => [
                            "name" => ""
                        ],
                        "textAlign" => "left",
                        "subTitle" => [
                            "text" => "副标题",
                            "color" => "#999999",
                            "fontSize" => 14,
                            "control" => false,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "查看更多",
                            "control" => false,
                            "isShow" => true,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ]
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "5jx57rrjl940",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => ['pageBgColor','componentBgUrl'],
                        "height" => 8,
                        "textColor" => "#303133",
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom"
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "5myxk1opz0c0",
                        "componentName" => "GraphicNav",
                        "componentTitle" => "图文导航",
                        "ignore" => [],
                        "textColor" => "#303133",
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 12,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 10,
                            "both" => 10
                        ],
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentGradientAngle" => "to bottom",
                        "layout" => "horizontal",
                        "mode" => "graphic",
                        "showStyle" => "fixed",
                        "rowCount" => 4,
                        "pageCount" => 2,
                        "carousel" => [
                            "type" => "circle",
                            "color" => "#FFFFFF"
                        ],
                        "imageSize" => 20,
                        "aroundRadius" => 0,
                        "font" => [
                            "size" => 12,
                            "weight" => "normal",
                            "color" => "#303133"
                        ],
                        "list" => [
                            [
                                "id" => "49kxbgr5lwue",
                                "title" => "签到",
                                "imageUrl" => "addon/shop/diy/member/style1/nav_sign_in.png",
                                "imgWidth" => 92,
                                "imgHeight" => 92,
                                "link" => [
                                    "name" => "MEMBER_MY_SIGN_IN",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "我的签到",
                                    "url" => "/app/pages/member/sign_in",
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
                                "title" => "我的余额",
                                "link" => [
                                    "parent" => "MEMBER_LINK",
                                    "name" => "MEMBER_BALANCE",
                                    "title" => "我的余额",
                                    "url" => "/app/pages/member/balance",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/member/style1/nav_balance.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "2aqy33banse8",
                                "imgWidth" => 92,
                                "imgHeight" => 92
                            ],
                            [
                                "title" => "地址管理",
                                "link" => [
                                    "parent" => "MEMBER_LINK",
                                    "name" => "MEMBER_ADDRESS",
                                    "title" => "收货地址",
                                    "url" => "/app/pages/member/address",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/member/style1/nav_address.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "hdk4145zk40",
                                "imgWidth" => 92,
                                "imgHeight" => 92
                            ],
                            [
                                "title" => "优惠券",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "name" => "SHOP_MY_COUPON",
                                    "title" => "我的优惠券",
                                    "url" => "/addon/shop/pages/member/my_coupon",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/member/style1/nav_coupon.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "34t5xg9ik0i0",
                                "imgWidth" => 92,
                                "imgHeight" => 92
                            ],
                            [
                                "id" => "7dpefp0s9ew0",
                                "title" => "分销中心",
                                "imageUrl" => "addon/shop/diy/member/style1/nav_promote.png",
                                "imgWidth" => 92,
                                "imgHeight" => 92,
                                "link" => [
                                    "name" => "SHOP_FENXIAO_INDEX",
                                    "parent" => "SHOP_FENXIAO_LINK",
                                    "title" => "分销中心",
                                    "url" => "/addon/shop_fenxiao/pages/index",
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
                                "title" => "积分兑换",
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/member/style1/nav_point_change.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "692put4jerg0",
                                "imgWidth" => 92,
                                "imgHeight" => 92
                            ],
                            [
                                "id" => "78kxbgr4lipw",
                                "title" => "核销台",
                                "imageUrl" => "addon/shop/diy/member/style1/nav_verify_index.png",
                                "imgWidth" => 92,
                                "imgHeight" => 92,
                                "link" => [
                                    "name" => "MEMBER_VERIFY_INDEX",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "核销台",
                                    'url' => '/app/pages/verify/index',
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
                                "id" => "4o2q7yss59m0",
                                "title" => "我的等级",
                                "imageUrl" => "addon/shop/diy/member/style1/nav_my_level.png",
                                "imgWidth" => 92,
                                "imgHeight" => 92,
                                "link" => [
                                    "name" => "MEMBER_MY_LEVEL",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "会员等级",
                                    "url" => "/app/pages/member/level",
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
                                "id" => "78fnsh8cx5k0",
                                "title" => "我的收藏",
                                "imageUrl" => "addon/shop/diy/member/style1/nav_collect.png",
                                "imgWidth" => 92,
                                "imgHeight" => 92,
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
                                "id" => "27kxbgr5ljbw",
                                "title" => "联系客服",
                                "imageUrl" => "addon/shop/diy/member/style1/nav_service.png",
                                "imgWidth" => 92,
                                "imgHeight" => 92,
                                "link" => [
                                    "name" => "MEMBER_CONTACT",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "客服",
                                    "url" => "/app/pages/member/contact",
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
                        ]
                    ]
                ]
            ]
        ],
        'shop_member_index' => [
            "title" => "商城个人中心2", // 页面名称
            'cover' => 'addon/shop/diy/template/member_index_cover.png', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '个人中心', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            'data' => [
                "global" => [
                    "title" => "个人中心",
                    'pageStartBgColor' => 'rgba(246, 247, 252, 1)',
                    'pageEndBgColor' => '',
                    'pageGradientAngle' => 'to bottom',
                    "bgUrl" => "",
                    'bgHeightScale' => 0,
                    "imgWidth" => "",
                    "imgHeight" => "",
                    "bottomTabBarSwitch" => true,
                    "template" => [
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                            "both" => 10
                        ]
                    ],
                    "topStatusBar" => [
                        'isShow' => true,
                        'bgColor' => "#ffffff",
                        'rollBgColor' => "#ffffff",
                        'style' => 'style-1',
                        'styleName' => '风格1',
                        'textColor' => "#333333",
                        'rollTextColor' => "#333333",
                        'textAlign' => 'center',
                        'inputPlaceholder' => '请输入搜索关键词',
                        'imgUrl' => '',
                        'link' => [
                            'name' => ""
                        ]
                    ],
                    "popWindow" => [
                        "imgUrl" => "",
                        "imgWidth" => "",
                        "imgHeight" => "",
                        "count" => -1,
                        "show" => 0,
                        "link" => [
                            "name" => ""
                        ]
                    ]
                ],
                "value" => [
                    [
                        "path" => "edit-member-info",
                        "id" => "40w5ay4dep00",
                        "componentName" => "MemberInfo",
                        "componentTitle" => "会员信息",
                        "uses" => 1,
                        "ignore" => [],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
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
                        "textColor" => "#303133",
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "bgUrl" => "",
                        "bgColorStart" => "",
                        "bgColorEnd" => ""
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "2da0xqyo8zms",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
                        ],
                        "height" => 10,
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 9,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "position" => "",
                        "id" => "1puhgfus8www",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "style" => "style-2",
                        "styleName" => "风格2",
                        "text" => "我的订单",
                        "link" => [
                            "name" => "SHOP_ORDER_LIST",
                            "parent" => "SHOP_LINK",
                            "title" => "订单列表",
                            "url" => "/addon/shop/pages/order/list",
                            "action" => ""
                        ],
                        "textColor" => "#303133",
                        "fontSize" => 16,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "",
                            "color" => "#999999",
                            "fontSize" => 14,
                            "control" => true,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "全部",
                            "control" => true,
                            "isShow" => true,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
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
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "42bjn10l0ak0",
                        "componentName" => "GraphicNav",
                        "componentTitle" => "图文导航",
                        "ignore" => [],
                        "list" => [
                            [
                                "link" => [
                                    "parent" => "DIY_LINK",
                                    "title" => "待付款",
                                    "url" => "/addon/shop/pages/order/list?status=1",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_wait_pay_order.png",
                                "imgWidth" => 40,
                                "imgHeight" => 40,
                                "id" => "ogkw2mqwvow",
                                "title" => "待付款",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ]
                            ],
                            [
                                "title" => "待发货",
                                "link" => [
                                    "parent" => "DIY_LINK",
                                    "title" => "待发货",
                                    "url" => "/addon/shop/pages/order/list?status=2",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_wait_delivery_order.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "37hnqfvx5va0",
                                "imgWidth" => 40,
                                "imgHeight" => 40
                            ],
                            [
                                "title" => "待收货",
                                "link" => [
                                    "parent" => "DIY_LINK",
                                    "title" => "待收货",
                                    "url" => "/addon/shop/pages/order/list?status=3",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_wait_take_order.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "63n62guoiug0",
                                "imgWidth" => 40,
                                "imgHeight" => 40
                            ],
                            [
                                "title" => "待评价",
                                "link" => [
                                    "parent" => "DIY_LINK",
                                    "title" => "待评价",
                                    "url" => "/addon/shop/pages/order/list?status=5",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_wait_evaluate_order.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "4wblhzd14uw0",
                                "imgWidth" => 40,
                                "imgHeight" => 40
                            ],
                            [
                                "id" => "fl2bqfimnuo",
                                "title" => "售后退款",
                                "imageUrl" => "addon/shop/diy/member/nav_refund_order.png",
                                "imgWidth" => 40,
                                "imgHeight" => 40,
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "退款列表",
                                    "url" => "/addon/shop/pages/refund/list",
                                    "name" => "SHOP_REFUND_LIST"
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
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 9,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 12,
                            "both" => 10
                        ],
                        "layout" => "horizontal",
                        "mode" => "graphic",
                        "showStyle" => "fixed",
                        "rowCount" => 5,
                        "pageCount" => 2,
                        "carousel" => [
                            "type" => "circle",
                            "color" => "#FFFFFF"
                        ],
                        "imageSize" => 20,
                        "aroundRadius" => 0,
                        "font" => [
                            "size" => 14,
                            "weight" => "normal",
                            "color" => "rgba(32, 15, 51, 1)"
                        ]
                    ],
                    [
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "id" => "5fo173bx5840",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
                        ],
                        "height" => 10,
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 9,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-text",
                        "uses" => 0,
                        "position" => "",
                        "id" => "629cgb1ygcw0",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "ignore" => [],
                        "style" => "style-1",
                        "styleName" => "风格1",
                        "text" => "常用工具",
                        "link" => [
                            "name" => ""
                        ],
                        "textColor" => "#303133",
                        "fontSize" => 16,
                        "fontWeight" => "normal",
                        "textAlign" => "left",
                        "subTitle" => [
                            "text" => "",
                            "color" => "#999999",
                            "fontSize" => 14,
                            "control" => false,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "查看更多",
                            "control" => false,
                            "isShow" => false,
                            "link" => [
                                "name" => ""
                            ],
                            "color" => "#999999"
                        ],
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
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
                            "both" => 10
                        ]
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "1swylyl5fvb4",
                        "componentName" => "GraphicNav",
                        "componentTitle" => "图文导航",
                        "ignore" => [],
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
                                "imageUrl" => "addon/shop/diy/member/nav_signin.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "imgWidth" => 58,
                                "imgHeight" => 58
                            ],
                            [
                                "title" => "个人资料",
                                "link" => [
                                    "parent" => "MEMBER_LINK",
                                    "title" => "个人资料",
                                    "url" => "/app/pages/member/personal",
                                    "name" => "MEMBER_PERSONAL"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_info.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "imgWidth" => 58,
                                "imgHeight" => 58
                            ],
                            [
                                "title" => "收货地址",
                                "link" => [
                                    "parent" => "MEMBER_LINK",
                                    "title" => "收货地址",
                                    "url" => "/app/pages/member/address",
                                    "name" => "MEMBER_ADDRESS"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_address.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "imgWidth" => 58,
                                "imgHeight" => 58
                            ],
                            [
                                "title" => "优惠券",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "我的优惠券",
                                    "url" => "/addon/shop/pages/member/my_coupon",
                                    "name" => "SHOP_MY_COUPON"
                                ],
                                "imageUrl" => "addon/shop/diy/member/nav_coupon.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "imgWidth" => 58,
                                "imgHeight" => 58
                            ],
                            [
                                "id" => "su0vf82y200",
                                "title" => "我的拼单",
                                "imageUrl" => "addon/shop/diy/member/nav_my_pintuan.png",
                                "imgWidth" => 58,
                                "imgHeight" => 58,
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
                                "id" => "2b0att2b3pq8",
                                "title" => "我的礼物",
                                "imageUrl" => "addon/shop/diy/member/nav_gift.png",
                                "imgWidth" => 58,
                                "imgHeight" => 58,
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
                                "id" => "z8x7ci5wik0",
                                "title" => "我的足迹",
                                "imageUrl" => "addon/shop/diy/member/nav_footmark.png",
                                "imgWidth" => 58,
                                "imgHeight" => 58,
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
                                "id" => "1sejr0g3h4zk",
                                "title" => "积分兑换",
                                "imageUrl" => "addon/shop/diy/member/nav_point_change.png",
                                "imgWidth" => 58,
                                "imgHeight" => 58,
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
                            ]
                        ],
                        "textColor" => "#303133",
                        'pageStartBgColor' => '',
                        'pageEndBgColor' => '',
                        'pageGradientAngle' => 'to bottom',
                        'componentBgUrl' => '',
                        'componentBgAlpha' => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 9,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "layout" => "horizontal",
                        "mode" => "graphic",
                        "showStyle" => "fixed",
                        "rowCount" => 4,
                        "pageCount" => 2,
                        "carousel" => [
                            "type" => "circle",
                            "color" => "#FFFFFF"
                        ],
                        "imageSize" => 29,
                        "aroundRadius" => 0,
                        "font" => [
                            "size" => 14,
                            "weight" => "normal",
                            "color" => "#303133"
                        ]
                    ]
                ]
            ]
        ]
    ],
    'DIY_SHOP_POINT_INDEX' => [
        'shop_point_index_style1' => [
            "title" => "积分商城",
            'cover' => 'addon/shop/diy/template/shop_point_index_style1_cover.jpg', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            'data' => [
                "global" => [
                    "bgUrl" => "",
                    "imgWidth" => "",
                    "imgHeight" => "",
                    "title" => "积分商城",
                    "pageStartBgColor" => "#F6F6F6",
                    "pageEndBgColor" => "",
                    "pageGradientAngle" => "to bottom",
                    "bgHeightScale" => 0,
                    "topStatusBar" => [
                        'isShow' => false,
                        'bgColor' => "#ffffff",
                        'rollBgColor' => "#ffffff",
                        'style' => 'style-1',
                        'styleName' => '风格1',
                        'textColor' => "#333333",
                        'rollTextColor' => "#333333",
                        'textAlign' => 'center',
                        'inputPlaceholder' => '请输入搜索关键词',
                        'imgUrl' => '',
                        'link' => [
                            'name' => ""
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
                        "id" => "d0ib6565eaw",
                        "componentName" => "ShopExchangeInfo",
                        "componentTitle" => "积分兑换",
                        "path" => "edit-shop-exchange-info",
                        "uses" => 0,
                        "ignore" => [],
                        "bgUrl" => "addon/shop/diy/point/point_index_bg.jpg",
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
                    ],
                    [
                        "id" => "5lml3wp5tow0",
                        "componentName" => "GraphicNav",
                        "componentTitle" => "图文导航",
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "ignore" => [],
                        "layout" => "horizontal",
                        "mode" => "graphic",
                        "showStyle" => "fixed",
                        "rowCount" => 3,
                        "pageCount" => 2,
                        "carousel" => [
                            "type" => "circle",
                            "color" => "#FFFFFF"
                        ],
                        "imageSize" => 40,
                        "aroundRadius" => 0,
                        "font" => [
                            "size" => 13,
                            "weight" => "normal",
                            "color" => "#303133"
                        ],
                        "list" => [
                            [
                                "title" => "我的积分",
                                "link" => [
                                    "parent" => "MEMBER_LINK",
                                    "name" => "MEMBER_POINT",
                                    "title" => "我的积分",
                                    "url" => "/app/pages/member/point",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/point/nav_point.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "4fll6n7lge40",
                                "imgWidth" => 140,
                                "imgHeight" => 140
                            ],
                            [
                                "title" => "我的兑换",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "name" => "SHOP_POINT_ORDER_LIST",
                                    "title" => "积分兑换记录",
                                    "url" => "/addon/shop/pages/point/order_list",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/point/nav_my_exchange.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "4blja5zsv0m0",
                                "imgWidth" => 140,
                                "imgHeight" => 132
                            ],
                            [
                                "title" => "每日签到",
                                "link" => [
                                    "name" => "MEMBER_MY_SIGN_IN",
                                    "parent" => "MEMBER_LINK",
                                    "title" => "我的签到",
                                    "url" => "/app/pages/member/sign_in",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/shop/diy/point/nav_sign_in.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "6v4fptrqano0",
                                "imgWidth" => 134,
                                "imgHeight" => 132
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageStartBgColor" => "",
                        "pageEndBgColor" => "rgba(255, 255, 255, 1)",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "rgba(255, 255, 255, 1)",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 17,
                        "bottomRounded" => 17,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => -40,
                            "bottom" => 0,
                            "both" => 10
                        ]
                    ],
                    [
                        "id" => "6c7y9m3c99o0",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "height" => 15,
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
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
                            "bottom" => 0,
                            "both" => 10
                        ]
                    ],
                    [
                        "id" => "3h6ppt6s1jw0",
                        "componentName" => "Text",
                        "componentTitle" => "标题",
                        "path" => "edit-text",
                        "uses" => 0,
                        "fontSize" => 15,
                        "position" => "",
                        "ignore" => [],
                        "style" => "style-2",
                        "styleName" => "风格2",
                        "text" => "热门推荐",
                        "link" => [
                            "name" => ""
                        ],
                        "textColor" => "#303133",
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "",
                            "color" => "#999999",
                            "fontSize" => 13,
                            "control" => true,
                            "fontWeight" => "normal"
                        ],
                        "more" => [
                            "text" => "更多",
                            "control" => true,
                            "isShow" => true,
                            "link" => [
                                "parent" => "SHOP_LINK",
                                "name" => "SHOP_POINT_LIST",
                                "title" => "积分商品列表",
                                "url" => "/addon/shop/pages/point/list",
                                "action" => ""
                            ],
                            "color" => "#999999"
                        ],
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
                    ],
                    [
                        "id" => "2jeafwoghdk0",
                        "componentName" => "HorzBlank",
                        "componentTitle" => "辅助空白",
                        "path" => "edit-horz-blank",
                        "uses" => 0,
                        "height" => 10,
                        "ignore" => [
                            "pageBgColor",
                            "componentBgUrl"
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
                        ]
                    ],
                    [
                        "id" => "76wf7oom00o0",
                        "componentName" => "ShopExchangeGoods",
                        "componentTitle" => "积分商品",
                        "path" => "edit-shop-exchange-goods",
                        "uses" => 0,
                        "ignore" => [],
                        "style" => "style-2",
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_category_name" => "请选择",
                        "goods_ids" => [],
                        "sortWay" => "total_order_num",
                        "goodsNameStyle" => [
                            "color" => "#333",
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
                            "color" => "#999999",
                            "control" => true
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
                        "topElementRounded" => 12,
                        "bottomElementRounded" => 12,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 10
                        ]
                    ]
                ]
            ]
        ]
    ]
];
