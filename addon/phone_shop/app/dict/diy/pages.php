<?php

return [
    'DIY_PHONE_SHOP_INDEX' => [
        'phone_shop_index_style1' => [ // 页面标识
            "title" => "二手商城首页", // 页面名称
            'cover' => 'addon/phone_shop/diy/template/shop_index_one_cover.png', // 页面封面图
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
                            "marginTop",
                            "marginBottom"
                        ],
                        "positionWay" => "fixed",
                        "fixedBgColor" => "",
                        'bgGradient' => true,
                        "search" => [
                            "logo" => "addon/phone_shop/diy/index/style2/logo.png",
                            "text" => "请输入搜索关键词",
                            "link" => [
                                'name' => 'SHOP_GOODS_SEARCH',
                                "parent" => "SHOP_LINK",
                                'title' => '商品搜索',
                                'url' => '/addon/phone_shop/pages/goods/search',
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
                            "imageHeight" => 164,
                            "topRounded" => 10,
                            "bottomRounded" => 10,
                            "list" => [
                                [
                                    "imageUrl" => "addon/phone_shop/diy/index/style2/banner1.png",
                                    "imgWidth" => 630,
                                    "imgHeight" => 300,
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "id" => "2ywogh006ai0",
                                    "width" => 345,
                                    "height" => 164.28571428571428
                                ],
                                [
                                    "id" => "3p7wiewe0o00",
                                    "imageUrl" => "addon/phone_shop/diy/index/style2/banner2.png",
                                    "imgWidth" => 630,
                                    "imgHeight" => 300,
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_sign_in.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_fenxiao.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_fenxiao_zone.png",
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
                                    "url" => "/addon/phone_shop/pages/coupon/list",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_coupon.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_news_info.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_discount.png",
                                "imgWidth" => 135,
                                "imgHeight" => 135,
                                "link" => [
                                    "name" => "SHOP_DISCOUNT_LIST",
                                    "parent" => "SHOP_LINK",
                                    "title" => "限时折扣列表",
                                    'url' => '/addon/phone_shop/pages/discount/list',
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_point_index.png",
                                "imgWidth" => 135,
                                "imgHeight" => 135,
                                "link" => [
                                    "name" => "SHOP_POINT_INDEX",
                                    "parent" => "SHOP_LINK",
                                    "title" => "积分商城",
                                    'url' => '/addon/phone_shop/pages/point/index',
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_my_point.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_my_balance.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/style2/nav_my_address.png",
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
                        "topRounded" => 6,
                        "bottomRounded" => 6,
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
                        "topRounded" => 6,
                        "bottomRounded" => 6,
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
                        "path" => "edit-phone-goods-coupon",
                        "uses" => 0,
                        "id" => "52ldidxgpcg0",
                        "componentName" => "PhoneGoodsCoupon",
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
                        "bottomRounded" => 0,
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
                        "topRounded" => 6,
                        "bottomRounded" => 6,
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
                        "topRounded" => 6,
                        "bottomRounded" => 6,
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
                        "componentStartBgColor" => "rgba(251, 148, 62, 1)",
                        "componentEndBgColor" => "rgba(252, 49, 49, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 6,
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
                        "fontSize" => 16,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "数量有限 抢完为止",
                            "color" => "#FFFFFF",
                            "fontSize" => 14,
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
                        "componentStartBgColor" => "rgba(251, 148, 62, 1)",
                        "componentEndBgColor" => "rgba(252, 49, 49, 1)",
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
                        "componentStartBgColor" => "rgba(251, 148, 62, 1)",
                        "componentEndBgColor" => "rgba(252, 49, 49, 1)",
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
                        "path" => "edit-phone-goods-list",
                        "uses" => 0,
                        "id" => "17uao387qdds",
                        "componentName" => "PhoneGoodsList",
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
                        "componentStartBgColor" => "rgba(251, 148, 62, 1)",
                        "componentEndBgColor" => "rgba(252, 49, 49, 1)",
                        "componentGradientAngle" => "to right",
                        "topRounded" => 0,
                        "bottomRounded" => 6,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 5,
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
                        "componentStartBgColor" => "rgba(252, 52, 49, 1)",
                        "componentEndBgColor" => "",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 6,
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
                        "fontSize" => 16,
                        "fontWeight" => "normal",
                        "textAlign" => "center",
                        "subTitle" => [
                            "text" => "数量有限 抢完为止",
                            "color" => "#FFFFFF",
                            "fontSize" => 14,
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
                        "componentStartBgColor" => "rgba(252, 52, 49, 1)",
                        "componentEndBgColor" => null,
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
                        "path" => "edit-phone-goods-list",
                        "uses" => 0,
                        "id" => "2u96wyrm79u0",
                        "componentName" => "PhoneGoodsList",
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
                        "componentStartBgColor" => "rgba(252, 52, 49, 1)",
                        "componentEndBgColor" => "rgba(251, 127, 59, 1)",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 0,
                        "bottomRounded" => 6,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
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
                        "fontSize" => 16,
                        "fontWeight" => "bold",
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
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 0
                        ]
                    ],
                    [
                        "path" => "edit-phone-goods-list",
                        "uses" => 0,
                        "id" => "4y7mw7j2uko0",
                        "componentName" => "PhoneGoodsList",
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
                        "topRounded" => 8,
                        "bottomRounded" => 8,
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
                        "path" => "edit-phone-many-goods-list",
                        "uses" => 0,
                        "id" => "65lv65b38ig0",
                        "componentName" => "PhoneManyGoodsList",
                        "componentTitle" => "多商品组",
                        "ignore" => [],
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
                        "topRounded" => 4,
                        "bottomRounded" => 4,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 10,
                            "bottom" => 10,
                            "both" => 10
                        ]
                    ]
                ]
            ]
        ],
        'phone_shop_index_style2' => [ // 页面标识
            "title" => "二手商城首页2", // 页面名称
            'cover' => 'addon/phone_shop/diy/template/shop_index_one_cover.png', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            "data" =>[
    "global" => [
        "title" =>"首页",
        "pageStartBgColor" =>"rgba(246, 246, 246, 1)",
        "pageEndBgColor" =>"",
        "pageGradientAngle" =>"to bottom",
        "bgUrl" =>"",
        "bgHeightScale" =>0,
        "imgWidth" =>"",
        "imgHeight" =>"",
        "topStatusBar" => [
            "isShow" =>false,
            "bgColor" =>"#ffffff",
            "style" =>"style-1",
            "styleName" =>"风格1",
            "textColor" =>"#333333",
            "textAlign" =>"left",
            "inputPlaceholder" =>"请输入搜索关键词",
            "imgUrl" =>"",
            "link" => [
                "parent" =>"SHOP_LINK",
                "name" =>"PHONE_SHOP_GOODS_SEARCH",
                "title" =>"商品搜索",
                "url" =>"/addon/phone_shop/pages/goods/search",
                "action" =>""
            ],
            "rollBgColor" =>"#ffffff",
            "rollTextColor" =>"#333333"
        ],
        "bottomTabBarSwitch" =>true,
        "popWindow" => [
            "imgUrl" =>"",
            "imgWidth" =>"",
            "imgHeight" =>"",
            "count" =>-1,
            "show" =>0,
            "link" => [
                "name" =>""
            ]
        ],
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
                "both" =>0
            ]
        ]
    ],
    "value" =>[
        [
            "path" =>"edit-carousel-search",
            "uses" =>1,
            "position" =>"top_fixed",
            "id" =>"5p19tddhbso0",
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
                "logo" =>"https://vip.123pan.cn/1832133965/tiantai/17301689687480b0f93206cfc6fb259e72a4703f82_ott.png",
                "text" =>"请输入搜索关键词",
                "link" => [
                    "parent" =>"PHONE_SHOP_LINK",
                    "name" =>"PHONE_SHOP_GOODS_LIST",
                    "title" =>"商品列表",
                    "url" =>"/addon/phone_shop/pages/goods/list",
                    "action" =>""
                ],
                "style" =>"style-1",
                "styleName" =>"风格一",
                "subTitle" => [
                    "text" =>"本地好价·优选生活",
                    "textColor" =>"#000000",
                    "startColor" =>"rgba(255,255,255,0.7)",
                    "endColor" =>""
                ],
                "positionColor" =>"#ffffff",
                "hotWord" => [
                    "interval" =>3,
                    "list" =>[]
                ],
                "color" =>"#999999",
                "btnColor" =>"#ffffff",
                "bgColor" =>"#ffffff",
                "btnBgColor" =>"#ff3434"
            ],
            "tab" => [
                "control" =>false,
                "noColor" =>"",
                "selectColor" =>"",
                "fixedNoColor" =>"",
                "fixedSelectColor" =>"",
                "list" =>[
                    [
                        "text" =>"分类名称",
                        "source" =>"diy_page",
                        "diy_id" =>"",
                        "diy_title" =>"",
                        "id" =>"2ju1lm7a98w0"
                    ],
                    [
                        "text" =>"分类名称",
                        "source" =>"diy_page",
                        "diy_id" =>"",
                        "diy_title" =>"",
                        "id" =>"388qjg8pqiw0"
                    ],
                    [
                        "text" =>"分类名称",
                        "source" =>"diy_page",
                        "diy_id" =>"",
                        "diy_title" =>"",
                        "id" =>"46b7dia5ua00"
                    ],
                    [
                        "text" =>"分类名称",
                        "source" =>"diy_page",
                        "diy_id" =>"",
                        "diy_title" =>"",
                        "id" =>"4psre4excty0"
                    ]
                ]
            ],
            "swiper" => [
                "control" =>true,
                "interval" =>5,
                "indicatorColor" =>"rgba(0, 0, 0, 0.3)",
                "indicatorActiveColor" =>"#FF0E0E",
                "indicatorStyle" =>"style-1",
                "indicatorAlign" =>"center",
                "swiperStyle" =>"style-1",
                "imageHeight" =>147,
                "topRounded" =>10,
                "bottomRounded" =>10,
                "list" =>[
                    [
                        "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/172700160816188b1d81b95069f643e50166ae526e_ott.png",
                        "imgWidth" =>1281,
                        "imgHeight" =>548,
                        "link" => [
                            "name" =>""
                        ],
                        "id" =>"4eyjq9qxmu80",
                        "width" =>345,
                        "height" =>147.5878220140515
                    ]
                ]
            ],
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
                "both" =>0
            ]
        ],
        [
            "path" =>"edit-float-btn",
            "uses" =>1,
            "position" =>"fixed",
            "id" =>"4kwida26odk0",
            "componentName" =>"FloatBtn",
            "componentTitle" =>"浮动按钮",
            "ignore" =>[
                "pageBgColor",
                "marginTop",
                "marginBottom",
                "marginBoth"
            ],
            "imageSize" =>45,
            "aroundRadius" =>3,
            "style" =>"style-1",
            "styleName" =>"风格一",
            "bottomPosition" =>"lowerRight",
            "list" =>[
                [
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/1723396516b1de0ae6c8b2d7dce85e680aff6c6239_ott.png",
                    "link" => [
                        "parent" =>"MEMBER_LINK",
                        "name" =>"MEMBER_CONTACT",
                        "title" =>"客服",
                        "url" =>"/app/pages/member/contact",
                        "action" =>""
                    ],
                    "id" =>"3mrz3fcom1e0"
                ]
            ],
            "offset" =>0,
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>0,
            "componentStartBgColor" =>null,
            "componentEndBgColor" =>null,
            "componentGradientAngle" =>"to bottom",
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
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
        ],
        [
            "path" =>"edit-horz-blank",
            "uses" =>0,
            "id" =>"qtgfr9pemuo",
            "componentName" =>"HorzBlank",
            "componentTitle" =>"辅助空白",
            "ignore" =>[
                "pageBgColor",
                "componentBgUrl"
            ],
            "height" =>10,
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(0, 0, 0, 1)",
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>10,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>10,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
        ],
        [
            "path" =>"edit-text",
            "uses" =>0,
            "position" =>"",
            "id" =>"4uw76brts8a0",
            "componentName" =>"Text",
            "componentTitle" =>"标题",
            "ignore" =>[],
            "style" =>"style-1",
            "styleName" =>"风格1",
            "text" =>"官方验机 一机一价 售后保障",
            "link" => [
                "name" =>""
            ],
            "textColor" =>"#FFFFFF",
            "fontSize" =>15,
            "fontWeight" =>"bold",
            "textAlign" =>"center",
            "subTitle" => [
                "text" =>"副标题",
                "color" =>"#999999",
                "fontSize" =>14,
                "control" =>false,
                "fontWeight" =>"normal"
            ],
            "more" => [
                "text" =>"更多",
                "control" =>false,
                "isShow" =>true,
                "link" => [
                    "name" =>""
                ],
                "color" =>"#999999"
            ],
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(0, 0, 0, 1)",
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>-1,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-horz-blank",
            "uses" =>0,
            "id" =>"1ms3um55m98g",
            "componentName" =>"HorzBlank",
            "componentTitle" =>"辅助空白",
            "ignore" =>[
                "pageBgColor",
                "componentBgUrl"
            ],
            "height" =>10,
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(0, 0, 0, 1)",
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>10,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>-1,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
        ],
        [
            "path" =>"edit-rubik-cube",
            "uses" =>0,
            "id" =>"411k9tiqqq80",
            "componentName" =>"RubikCube",
            "componentTitle" =>"魔方",
            "ignore" =>[],
            "mode" =>"row1-lt-of2-rt",
            "imageGap" =>10,
            "list" =>[
                [
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/1725200557fbe6b8ad1c9a14d6c237bb9eb1007c30_ott.jpg",
                    "imgWidth" =>449,
                    "imgHeight" =>665,
                    "link" => [
                        "parent" =>"PHONE_SHOP_PRICE_LINK",
                        "name" =>"PHONE_SHOP_PRICE_INDEX",
                        "title" =>"报价系统",
                        "url" =>"/addon/phone_shop_price/pages/index",
                        "action" =>""
                    ],
                    "pageItemStyle" =>"border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;"
                ],
                [
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/17252010876ecbe2fe19fb8a1b060fbe108b238f56_ott.jpg",
                    "imgWidth" =>449,
                    "imgHeight" =>331,
                    "link" => [
                        "parent" =>"HSX_PHONE_QUERY_LINK",
                        "name" =>"HSX_PHONE_QUERY_INDEX",
                        "title" =>"手机信息查询",
                        "url" =>"/addon/hsx_phone_query/pages/index",
                        "action" =>""
                    ],
                    "pageItemStyle" =>"border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;"
                ],
                [
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/17252014876d6c44f0736fbfc9cda715c5c54b81b2_ott.jpg",
                    "imgWidth" =>453,
                    "imgHeight" =>327,
                    "link" => [
                        "parent" =>"MEMBER_LINK",
                        "name" =>"MEMBER_CONTACT",
                        "title" =>"客服",
                        "url" =>"/app/pages/member/contact",
                        "action" =>""
                    ],
                    "pageItemStyle" =>"border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;border-top-left-radius:20rpx;border-top-right-radius:20rpx;border-bottom-left-radius:20rpx;border-bottom-right-radius:20rpx;"
                ]
            ],
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>null,
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>10,
            "bottomElementRounded" =>10,
            "margin" => [
                "top" =>10,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-horz-blank",
            "uses" =>0,
            "id" =>"hq5u7stzo54",
            "componentName" =>"HorzBlank",
            "componentTitle" =>"辅助空白",
            "ignore" =>[
                "pageBgColor",
                "componentBgUrl"
            ],
            "height" =>10,
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(248, 220, 74, 1)",
            "componentEndBgColor" =>"rgba(245, 221, 94, 1)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>10,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>5,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:10rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-text",
            "uses" =>0,
            "position" =>"",
            "id" =>"2cxirji9sgcg",
            "componentName" =>"Text",
            "componentTitle" =>"标题",
            "ignore" =>[],
            "style" =>"style-2",
            "styleName" =>"风格2",
            "text" =>"销售专区",
            "link" => [
                "parent" =>"DIY_LINK",
                "url" =>"/addon/phone_shop/pages/goods/category?category_id=60",
                "title" =>"商品分类",
                "name" =>"DIY_LINK",
                "action" =>""
            ],
            "textColor" =>"#272829",
            "fontSize" =>16,
            "fontWeight" =>"bold",
            "textAlign" =>"center",
            "subTitle" => [
                "text" =>"联系客服开通VIP价更低",
                "color" =>"#FF0000",
                "fontSize" =>14,
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "more" => [
                "text" =>"更多",
                "control" =>true,
                "isShow" =>true,
                "link" => [
                    "parent" =>"DIY_LINK",
                    "name" =>"DIY_LINK",
                    "title" =>"商品列表",
                    "url" =>"/addon/phone_shop/pages/goods/category?category_id=60",
                    "action" =>""
                ],
                "color" =>"#4E4949"
            ],
            "pageStartBgColor" =>"rgba(255, 255, 255, 0)",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(245, 221, 94, 1)",
            "componentEndBgColor" =>"rgba(244, 226, 135, 1)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"background-color:rgba(255, 255, 255, 0);padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-graphic-nav",
            "uses" =>0,
            "id" =>"7fjde5bztis0",
            "componentName" =>"GraphicNav",
            "componentTitle" =>"图文导航",
            "ignore" =>[],
            "layout" =>"horizontal",
            "mode" =>"graphic",
            "showStyle" =>"fixed",
            "rowCount" =>5,
            "pageCount" =>2,
            "carousel" => [
                "type" =>"circle",
                "color" =>"#FFFFFF"
            ],
            "imageSize" =>40,
            "aroundRadius" =>25,
            "font" => [
                "size" =>12,
                "weight" =>"normal",
                "color" =>"#303133"
            ],
            "list" =>[
                [
                    "title" =>"苹果手机",
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "name" =>"DIY_LINK",
                        "title" =>"苹果分类",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=60",
                        "action" =>""
                    ],
                    "imageUrl" =>"upload/attachment/image/100005/202404/08/17125877274d654b641e14041310e1c637cfb0f51d_local.png",
                    "label" => [
                        "control" =>false,
                        "text" =>"热门",
                        "textColor" =>"#FFFFFF",
                        "bgColorStart" =>"#F83287",
                        "bgColorEnd" =>"#FE3423"
                    ],
                    "id" =>"6j719grozdc0",
                    "imgWidth" =>256,
                    "imgHeight" =>256
                ],
                [
                    "title" =>"华为手机",
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=61",
                        "title" =>"华为分类",
                        "name" =>"DIY_LINK",
                        "action" =>""
                    ],
                    "imageUrl" =>"upload/attachment/image/100005/202404/08/171258772688385b7dfabe17b78a70d4d750367751_local.png",
                    "label" => [
                        "control" =>false,
                        "text" =>"热门",
                        "textColor" =>"#FFFFFF",
                        "bgColorStart" =>"#F83287",
                        "bgColorEnd" =>"#FE3423"
                    ],
                    "id" =>"4qa395za6qk0",
                    "imgWidth" =>166,
                    "imgHeight" =>166
                ],
                [
                    "title" =>"小米手机",
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=62",
                        "title" =>"小米分类",
                        "name" =>"DIY_LINK",
                        "action" =>""
                    ],
                    "imageUrl" =>"upload/attachment/image/100005/202404/08/17125877271880f54ab886d86de98e05d990de8350_local.png",
                    "label" => [
                        "control" =>false,
                        "text" =>"热门",
                        "textColor" =>"#FFFFFF",
                        "bgColorStart" =>"#F83287",
                        "bgColorEnd" =>"#FE3423"
                    ],
                    "id" =>"75lukh3svkk0",
                    "imgWidth" =>1024,
                    "imgHeight" =>1024
                ],
                [
                    "title" =>"三星手机",
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=124",
                        "title" =>"三星分类",
                        "name" =>"DIY_LINK",
                        "action" =>""
                    ],
                    "imageUrl" =>"upload/attachment/image/100005/202404/08/1712587727c363beee9ecccbc35d50a847a9d819ca_local.png",
                    "label" => [
                        "control" =>false,
                        "text" =>"热门",
                        "textColor" =>"#FFFFFF",
                        "bgColorStart" =>"#F83287",
                        "bgColorEnd" =>"#FE3423"
                    ],
                    "id" =>"4gbz5ymzrca0",
                    "imgWidth" =>500,
                    "imgHeight" =>500
                ],
                [
                    "id" =>"37c58jym6g20",
                    "title" =>"OPPO手机",
                    "imageUrl" =>"upload/attachment/image/100005/202404/08/1712588592937f746d99c606d3e99cb29a35f5efcb_local.png",
                    "imgWidth" =>292,
                    "imgHeight" =>292,
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=128",
                        "title" =>"oppo分类",
                        "name" =>"DIY_LINK",
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
                    "id" =>"c128kzvii6",
                    "title" =>"ViVO手机",
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/1716651374225028ec04f98ca7a9292c13ea5fb840_ott.png",
                    "imgWidth" =>700,
                    "imgHeight" =>700,
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=129",
                        "title" =>"vivo分类",
                        "name" =>"DIY_LINK",
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
                    "id" =>"1esouqhf2exs",
                    "title" =>"荣耀手机",
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/17166515497e15775d47da7a7f98f37db8acad31d0_ott.png",
                    "imgWidth" =>292,
                    "imgHeight" =>292,
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=127",
                        "title" =>"荣耀分类",
                        "name" =>"DIY_LINK",
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
                    "id" =>"78o86kakdkc0",
                    "title" =>"平板专区",
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/17166159557d71724e688f62ae6b65fb00a993bee6_ott.png",
                    "imgWidth" =>300,
                    "imgHeight" =>340,
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=27",
                        "title" =>"平板专区",
                        "name" =>"DIY_LINK",
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
                    "id" =>"3fh69zi6pte0",
                    "title" =>"特价商品",
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/1716615094578db0fa323b0a69bbc75a5e962657ec_ott.png",
                    "imgWidth" =>256,
                    "imgHeight" =>256,
                    "link" => [
                        "parent" =>"DIY_LINK",
                        "title" =>"特价商品",
                        "url" =>"/addon/phone_shop/pages/goods/category?category_id=44",
                        "name" =>"DIY_LINK",
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
                    "id" =>"45ml6yv4r5s0",
                    "title" =>"更多",
                    "imageUrl" =>"https://vip.123pan.cn/1832133965/tiantai/171600236498656511c36551e83cf6a7d3413e16bd_ott.png",
                    "imgWidth" =>256,
                    "imgHeight" =>256,
                    "link" => [
                        "parent" =>"SHOP_LINK",
                        "name" =>"PHONE_SHOP_GOODS_CATEGORY",
                        "title" =>"商品分类",
                        "url" =>"/addon/phone_shop/pages/goods/category",
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
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(244, 226, 135, 1)",
            "componentEndBgColor" =>"rgba(255, 255, 255, 1)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>10,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-horz-blank",
            "uses" =>0,
            "id" =>"1iu4dvbg7bvk",
            "componentName" =>"HorzBlank",
            "componentTitle" =>"辅助空白",
            "ignore" =>[
                "pageBgColor",
                "componentBgUrl"
            ],
            "height" =>10,
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(255, 255, 255, 1)",
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>10,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>5,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:10rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-text",
            "uses" =>0,
            "position" =>"",
            "id" =>"25q2gwmamnxc",
            "componentName" =>"Text",
            "componentTitle" =>"标题",
            "ignore" =>[],
            "style" =>"style-2",
            "styleName" =>"风格2",
            "text" =>"上新专区",
            "link" => [
                "name" =>""
            ],
            "textColor" =>"#303133",
            "fontSize" =>17,
            "fontWeight" =>"bold",
            "textAlign" =>"center",
            "subTitle" => [
                "text" =>"15天包换",
                "color" =>"#000000",
                "fontSize" =>14,
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "more" => [
                "text" =>"查看更多",
                "control" =>true,
                "isShow" =>true,
                "link" => [
                    "parent" =>"SHOP_LINK",
                    "name" =>"PHONE_SHOP_GOODS_CATEGORY",
                    "title" =>"商品分类",
                    "url" =>"/addon/phone_shop/pages/goods/category",
                    "action" =>""
                ],
                "color" =>"#666060"
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
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-phone-many-goods-list",
            "uses" =>0,
            "id" =>"4emfq8s5c7c0",
            "componentName" =>"PhoneManyGoodsList",
            "componentTitle" =>"多商品组",
            "ignore" =>[
                "componentBgUrl"
            ],
            "style" =>"style-2",
            "num" =>6,
            "sortWay" =>"default",
            "headStyle" =>"style-2",
            "aroundRadius" =>25,
            "source" =>"custom",
            "goods_category" =>"",
            "goods_category_name" =>"请选择",
            "goodsNameStyle" => [
                "color" =>"rgba(99, 91, 91, 1)",
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "priceStyle" => [
                "mainColor" =>"#FF4142",
                "mainControl" =>true,
                "lineColor" =>"#999CA7",
                "lineControl" =>true
            ],
            "saleStyle" => [
                "color" =>"rgba(255, 255, 255, 1)",
                "control" =>true
            ],
            "list" =>[
                [
                    "id" =>"4fkencea6460",
                    "title" =>"苹果",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>60,
                    "goods_category_name" =>"苹果",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ],
                [
                    "id" =>"2ri8hn1byzs0",
                    "title" =>"华为",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>61,
                    "goods_category_name" =>"华为",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ],
                [
                    "id" =>"6q4fzxjakuo0",
                    "title" =>"三星",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>124,
                    "goods_category_name" =>"三星",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ],
                [
                    "title" =>"OPPO",
                    "desc" =>"猜你喜欢",
                    "source" =>"category",
                    "goods_category" =>128,
                    "goods_category_name" =>"OPPO",
                    "goods_ids" =>[],
                    "imageUrl" =>"",
                    "id" =>"18u8hk05ub4w"
                ],
                [
                    "id" =>"87lt5bpsyc4",
                    "title" =>"vivo",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>129,
                    "goods_category_name" =>"VIVO",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ],
                [
                    "id" =>"45eiizgggnm0",
                    "title" =>"小米",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>62,
                    "goods_category_name" =>"小米",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ],
                [
                    "id" =>"3tbeh9q76100",
                    "title" =>"红米",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>130,
                    "goods_category_name" =>"红米",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ],
                [
                    "id" =>"3zyo3zm7rwo0",
                    "title" =>"荣耀",
                    "desc" =>"分类描述",
                    "source" =>"category",
                    "goods_category" =>127,
                    "goods_category_name" =>"荣耀",
                    "goods_ids" =>[],
                    "imageUrl" =>""
                ]
            ],
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(255, 255, 255, 1)",
            "componentEndBgColor" =>"rgba(196, 185, 185, 0.09)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>0,
            "elementBgColor" =>"rgba(255, 255, 255, 1)",
            "topElementRounded" =>9,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>10,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:20rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-horz-blank",
            "uses" =>0,
            "id" =>"3o8r22gujj60",
            "componentName" =>"HorzBlank",
            "componentTitle" =>"辅助空白",
            "ignore" =>[
                "pageBgColor",
                "componentBgUrl"
            ],
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(214, 120, 235, 1)",
            "componentEndBgColor" =>"rgba(222, 157, 237, 1)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>6,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>5,
                "bottom" =>0,
                "both" =>10
            ],
            "height" =>10,
            "pageStyle" =>"padding-top:10rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-text",
            "uses" =>0,
            "position" =>"",
            "id" =>"6sy24x6kmcw0",
            "componentName" =>"Text",
            "componentTitle" =>"标题",
            "ignore" =>[],
            "style" =>"style-2",
            "styleName" =>"风格2",
            "text" =>"平板系列",
            "link" => [
                "name" =>""
            ],
            "textColor" =>"#FFFFFF",
            "fontSize" =>16,
            "fontWeight" =>"bold",
            "textAlign" =>"center",
            "subTitle" => [
                "text" =>"一机一检 售后无忧",
                "color" =>"#FFFFFF",
                "fontSize" =>13,
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "more" => [
                "text" =>"查看更多",
                "control" =>true,
                "isShow" =>true,
                "link" => [
                    "parent" =>"DIY_LINK",
                    "name" =>"DIY_LINK",
                    "title" =>"商品分类",
                    "url" =>"/addon/phone_shop/pages/goods/category?category_id=27",
                    "action" =>""
                ],
                "color" =>"#FFFFFF"
            ],
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(222, 157, 237, 1)",
            "componentEndBgColor" =>"rgba(202, 86, 227, 0.61)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-phone-goods-list",
            "uses" =>0,
            "id" =>"739uxtpib8s0",
            "componentName" =>"PhoneGoodsList",
            "componentTitle" =>"商品列表",
            "ignore" =>[],
            "style" =>"style-1",
            "source" =>"category",
            "num" =>6,
            "goods_category" =>27,
            "goods_category_name" =>"平板",
            "goods_ids" =>[],
            "sortWay" =>"default",
            "goodsNameStyle" => [
                "color" =>"#303133",
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "priceStyle" => [
                "mainColor" =>"#FF4142",
                "mainControl" =>true,
                "lineColor" =>"#999CA7",
                "lineControl" =>true
            ],
            "saleStyle" => [
                "color" =>"#999999",
                "control" =>true
            ],
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(202, 86, 227, 0.6)",
            "componentEndBgColor" =>"rgba(64, 12, 186, 0.79)",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>10,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-horz-blank",
            "uses" =>0,
            "id" =>"5h4ij20nn9o0",
            "componentName" =>"HorzBlank",
            "componentTitle" =>"辅助空白",
            "ignore" =>[
                "pageBgColor",
                "componentBgUrl"
            ],
            "height" =>10,
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(255, 255, 255, 1)",
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>10,
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>10,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-text",
            "uses" =>0,
            "position" =>"",
            "id" =>"1hhdr8plf0ao",
            "componentName" =>"Text",
            "componentTitle" =>"标题",
            "ignore" =>[],
            "style" =>"style-2",
            "styleName" =>"风格2",
            "text" =>"智能产品",
            "link" => [
                "name" =>""
            ],
            "textColor" =>"#303133",
            "fontSize" =>16,
            "fontWeight" =>"normal",
            "textAlign" =>"center",
            "subTitle" => [
                "text" =>"手表｜手写笔｜耳机",
                "color" =>"#999999",
                "fontSize" =>12,
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "more" => [
                "text" =>"查看更多",
                "control" =>true,
                "isShow" =>true,
                "link" => [
                    "parent" =>"DIY_LINK",
                    "name" =>"DIY_LINK",
                    "title" =>"商品分类",
                    "url" =>"/addon/phone_shop/pages/goods/category?category_id=53",
                    "action" =>""
                ],
                "color" =>"#999999"
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
            "bottomRounded" =>0,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-phone-goods-list",
            "uses" =>0,
            "id" =>"47vtkt1radk0",
            "componentName" =>"PhoneGoodsList",
            "componentTitle" =>"商品列表",
            "ignore" =>[],
            "style" =>"style-1",
            "source" =>"category",
            "num" =>3,
            "goods_category" =>53,
            "goods_category_name" =>"手表",
            "goods_ids" =>[],
            "sortWay" =>"default",
            "goodsNameStyle" => [
                "color" =>"#303133",
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "priceStyle" => [
                "mainColor" =>"#FF4142",
                "mainControl" =>true,
                "lineColor" =>"#999CA7",
                "lineControl" =>true
            ],
            "saleStyle" => [
                "color" =>"#999999",
                "control" =>true
            ],
            "textColor" =>"#303133",
            "pageStartBgColor" =>"rgba(255, 255, 255, 0)",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(255, 255, 255, 1)",
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
                "both" =>10
            ],
            "pageStyle" =>"background-color:rgba(255, 255, 255, 0);padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-phone-goods-list",
            "uses" =>0,
            "id" =>"eoo4mbnvv74",
            "componentName" =>"PhoneGoodsList",
            "componentTitle" =>"商品列表",
            "ignore" =>[],
            "style" =>"style-1",
            "source" =>"category",
            "num" =>3,
            "goods_category" =>28,
            "goods_category_name" =>"配件",
            "goods_ids" =>[],
            "sortWay" =>"default",
            "goodsNameStyle" => [
                "color" =>"#303133",
                "control" =>true,
                "fontWeight" =>"normal"
            ],
            "priceStyle" => [
                "mainColor" =>"#FF4142",
                "mainControl" =>true,
                "lineColor" =>"#999CA7",
                "lineControl" =>true
            ],
            "saleStyle" => [
                "color" =>"#999999",
                "control" =>true
            ],
            "textColor" =>"#303133",
            "pageStartBgColor" =>"",
            "pageEndBgColor" =>"",
            "pageGradientAngle" =>"to bottom",
            "componentBgUrl" =>"",
            "componentBgAlpha" =>2,
            "componentStartBgColor" =>"rgba(255, 255, 255, 1)",
            "componentEndBgColor" =>"",
            "componentGradientAngle" =>"to bottom",
            "topRounded" =>0,
            "bottomRounded" =>10,
            "elementBgColor" =>"",
            "topElementRounded" =>0,
            "bottomElementRounded" =>0,
            "margin" => [
                "top" =>0,
                "bottom" =>0,
                "both" =>10
            ],
            "pageStyle" =>"padding-top:2rpx;padding-bottom:0rpx;padding-right:20rpx;padding-left:20rpx;"
        ],
        [
            "path" =>"edit-horz-line",
            "uses" =>0,
            "id" =>"2nc6d5593vo0",
            "componentName" =>"HorzLine",
            "componentTitle" =>"辅助线",
            "ignore" =>[
                "pageBgColor",
                "componentBgColor",
                "componentBgUrl",
                "topRounded",
                "bottomRounded"
            ],
            "borderWidth" =>1,
            "borderColor" =>"rgba(255, 255, 255, 1)",
            "borderStyle" =>"solid",
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
                "top" =>10,
                "bottom" =>0,
                "both" =>0
            ],
            "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
        ],
        [
            "path" =>"edit-text",
            "uses" =>0,
            "position" =>"",
            "id" =>"76ad7crrk140",
            "componentName" =>"Text",
            "componentTitle" =>"标题",
            "ignore" =>[],
            "style" =>"style-1",
            "styleName" =>"风格1",
            "text" =>"我要开店",
            "link" => [
                "parent" =>"DIY_PAGE",
                "name" =>"DIY_PAGE",
                "title" =>"开发者介绍",
                "url" =>"/app/pages/index/diy?id=100",
                "action" =>"decorate"
            ],
            "textColor" =>"#386ACE",
            "fontSize" =>14,
            "fontWeight" =>"normal",
            "textAlign" =>"center",
            "subTitle" => [
                "text" =>"副标题",
                "color" =>"#999999",
                "fontSize" =>14,
                "control" =>false,
                "fontWeight" =>"normal"
            ],
            "more" => [
                "text" =>"更多",
                "control" =>false,
                "isShow" =>true,
                "link" => [
                    "name" =>""
                ],
                "color" =>"#999999"
            ],
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
                "top" =>10,
                "bottom" =>0,
                "both" =>0
            ],
            "pageStyle" =>"padding-top:20rpx;padding-bottom:0rpx;padding-right:0rpx;padding-left:0rpx;"
        ]
    ]
]
        ],
        'phone_shop_index' => [ // 页面标识
            "title" => "手机商城首页2", // 页面名称
            'cover' => 'addon/phone_shop/diy/template/shop_index_two_cover.png', // 页面封面图
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
                    "bgUrl" => "addon/phone_shop/diy/index/bg.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/banner.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_notice.png",
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
                                    "url" => "/addon/phone_shop/pages/goods/list",
                                    "name" => "SHOP_GOODS_LIST"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/index/nav_supermarket.png",
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
                                    "url" => "/addon/phone_shop/pages/goods/category",
                                    "name" => "SHOP_GOODS_CATEGORY"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/index/nav_article.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_coupon.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "优惠券列表",
                                    "url" => "/addon/phone_shop/pages/coupon/list",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_pintuan.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_seckill.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_signin.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_invite_friends.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_sys_message.png",
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
                                "imageUrl" => "addon/phone_shop/diy/index/nav_point.png",
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
                        "imageUrl" => "addon/phone_shop/diy/index/hot_area.png",
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
                        "path" => "edit-phone-goods-list",
                        "uses" => 0,
                        "id" => "50pj7dmvbvo0",
                        "componentName" => "PhoneGoodsList",
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
                        ],
                        
    ],
    'DIY_PHONE_SHOP_MEMBER_INDEX' => [
        'phone_shop_member_index_style1' => [
            "title" => "商城个人中心1", // 页面名称
            'cover' => 'addon/phone_shop/diy/template/member_index_cover.png', // 页面封面图
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
                        "path" => "edit-phone-shop-member-info",
                        "id" => "3pt9pn9bvn20",
                        "componentName" => "PhoneShopMemberInfo",
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
                        "textColor" => "#303133",
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
                        "topRounded" => 8,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => -45,
                            "bottom" => 10,
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
                        "path" => "edit-phone-shop-order-info",
                        "uses" => 1,
                        "id" => "2jmnqqhc8ri0",
                        "componentName" => "PhoneShopOrderInfo",
                        "componentTitle" => "订单中心",
                        "ignore" => [],
                        "textColor" => "#303133",
                        "fontSize" => 16,
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
                        "topRounded" => 8,
                        "bottomRounded" => 8,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 5,
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
                        "topRounded" => 6,
                        "bottomRounded" => 6,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 5,
                            "both" => 10
                        ],
                        "list" => [
                            [
                                "link" => [
                                    "name" => ""
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/style1/banner.png",
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
                        "imageHeight" => 90
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
                        "topRounded" => 8,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 5,
                            "bottom" => 0,
                            "both" => 10
                        ],
                        "fontSize" => 16,
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
                        "bottomRounded" => 8,
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_sign_in.png",
                                "imgWidth" => 88,
                                "imgHeight" => 88,
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_balance.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "2aqy33banse8",
                                "imgWidth" => 88,
                                "imgHeight" => 88
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_address.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "hdk4145zk40",
                                "imgWidth" => 88,
                                "imgHeight" => 88
                            ],
                            [
                                "title" => "优惠券",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "name" => "SHOP_MY_COUPON",
                                    "title" => "我的优惠券",
                                    "url" => "/addon/phone_shop/pages/member/my_coupon",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_coupon.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "34t5xg9ik0i0",
                                "imgWidth" => 88,
                                "imgHeight" => 88
                            ],
                            [
                                "id" => "7dpefp0s9ew0",
                                "title" => "分销中心",
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_promote.png",
                                "imgWidth" => 88,
                                "imgHeight" => 88,
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_point_change.png",
                                "label" => [
                                    "control" => false,
                                    "text" => "热门",
                                    "textColor" => "#FFFFFF",
                                    "bgColorStart" => "#F83287",
                                    "bgColorEnd" => "#FE3423"
                                ],
                                "id" => "692put4jerg0",
                                "imgWidth" => 88,
                                "imgHeight" => 88
                            ],
                            [
                                "id" => "78kxbgr4lipw",
                                "title" => "核销台",
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_verify_index.png",
                                "imgWidth" => 88,
                                "imgHeight" => 88,
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_my_level.png",
                                "imgWidth" => 88,
                                "imgHeight" => 88,
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_collect.png",
                                "imgWidth" => 88,
                                "imgHeight" => 88,
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
                                "imageUrl" => "addon/phone_shop/diy/member/style1/nav_service.png",
                                "imgWidth" => 88,
                                "imgHeight" => 88,
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
        'phone_shop_member_index' => [
            "title" => "商城个人中心2", // 页面名称
            'cover' => 'addon/phone_shop/diy/template/member_index_cover.png', // 页面封面图
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
                            "url" => "/addon/phone_shop/pages/order/list",
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
                                    "url" => "/addon/phone_shop/pages/order/list?status=1",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/nav_wait_pay_order.png",
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
                                    "url" => "/addon/phone_shop/pages/order/list?status=2",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/nav_wait_delivery_order.png",
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
                                    "url" => "/addon/phone_shop/pages/order/list?status=3",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/nav_wait_take_order.png",
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
                                    "url" => "/addon/phone_shop/pages/order/list?status=5",
                                    "name" => "DIY_LINK"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/nav_wait_evaluate_order.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_refund_order.png",
                                "imgWidth" => 40,
                                "imgHeight" => 40,
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "退款列表",
                                    "url" => "/addon/phone_shop/pages/refund/list",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_signin.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_info.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_address.png",
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
                                    "url" => "/addon/phone_shop/pages/member/my_coupon",
                                    "name" => "SHOP_MY_COUPON"
                                ],
                                "imageUrl" => "addon/phone_shop/diy/member/nav_coupon.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_my_pintuan.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_gift.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_footmark.png",
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
                                "imageUrl" => "addon/phone_shop/diy/member/nav_point_change.png",
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
    'DIY_PHONE_SHOP_POINT_INDEX' => [
        'phone_shop_point_index_style1' => [
            "title" => "积分商城",
            'cover' => 'addon/phone_shop/diy/template/shop_point_index_style1_cover.jpg', // 页面封面图
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
                        "componentName" => "PhoneShopExchangeInfo",
                        "componentTitle" => "积分兑换",
                        "path" => "edit-phone-shop-exchange-info",
                        "uses" => 0,
                        "ignore" => [],
                        "bgUrl" => "addon/phone_shop/diy/point/point_index_bg.jpg",
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
                            "size" => 14,
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
                                "imageUrl" => "addon/phone_shop/diy/point/nav_point.png",
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
                                    "url" => "/addon/phone_shop/pages/point/order_list",
                                    "action" => ""
                                ],
                                "imageUrl" => "addon/phone_shop/diy/point/nav_my_exchange.png",
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
                                "imageUrl" => "addon/phone_shop/diy/point/nav_sign_in.png",
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
                        "pageStartBgColor" => null,
                        "pageEndBgColor" => "rgba(255, 255, 255, 1)",
                        "pageGradientAngle" => "to bottom",
                        "componentBgUrl" => "",
                        "componentBgAlpha" => 2,
                        "componentStartBgColor" => "rgba(255, 255, 255, 1)",
                        "componentEndBgColor" => "rgba(255, 255, 255, 1)",
                        "componentGradientAngle" => "to bottom",
                        "topRounded" => 8,
                        "bottomRounded" => 8,
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
                        "fontSize" => 16,
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
                            "fontSize" => 14,
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
                                "url" => "/addon/phone_shop/pages/point/list",
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
                            "both" => 10
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
                        "componentName" => "PhoneShopExchangeGoods",
                        "componentTitle" => "积分商品",
                        "path" => "edit-phone-shop-exchange-goods",
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
                        "topElementRounded" => 8,
                        "bottomElementRounded" => 8,
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
