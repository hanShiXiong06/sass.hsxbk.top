<?php

return [
    'DIY_CPS_INDEX' => [
        'cps_index' => [ // 页面标识
            "title" => "CPS联盟", // 页面名称
            'cover' => 'addon/shop/diy/template/cps-cover.png', // 页面封面图
            'preview' => '', // 页面预览图
            'desc' => '', // 页面描述
            'mode' => 'diy', // 页面模式：diy：自定义，fixed：固定
            // 页面数据源
            "data" => [
                "global" => [
                    "title" => "CPS联盟",
                    "pageBgColor" => "rgba(255, 255, 255, 1)",
                    "bgUrl" => "addon/cps/diy/index/bg.png",
                    "imgWidth" => 750,
                    "imgHeight" => 1485,
                    "bottomTabBarSwitch" => true,
                    "template" => [
                        'textColor' => "#303133",
                        "pageBgColor" => "",
                        "componentBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 12
                        ]
                    ],
                    'topStatusBar' => [
                        "bgColor" => "#ffffff",
                        "isTransparent" => false,
                        "isShow" => true,
                        "style" => "style-1",
                        "textColor" => "#333333",
                        "textAlign" => "center"
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
                        "iconType" => "img",
                        "imageUrl" => "",
                        "textColor" => "#303133",
                        "pageBgColor" => "",
                        "componentBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 20,
                            "bottom" => 15,
                            "both" => 12
                        ]
                    ],
                    
                    [
                        "path" => "edit-notice",
                        "uses" => 0,
                        "id" => "1xpv3z7vvtds",
                        "componentName" => "Notice",
                        "componentTitle" => "公告",
                        "ignore" => [],
                        "list" => [
                            "link" => [
                                "name" => ""
                            ],
                            "text" => "最新公告：欢迎使用cps联盟系统！"
                        ],
                        "iconType" => "system",
                        "systemIcon" => "style_01",
                        "showType" => "popup",
                        "imageUrl" => "",
                        "textColor" => "#303133",
                        "pageBgColor" => "",
                        "componentBgColor" => "rgba(255, 255, 255, 1)",
                        "topRounded" => 9,
                        "bottomRounded" => 9,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 10,
                            "both" => 12
                        ],
                        "fontSize" => 12
                    ],
                    [
                        "path" => "edit-graphic-nav",
                        "uses" => 0,
                        "id" => "5tnh9iiuxv40",
                        "componentName" => "GraphicNav",
                        "componentTitle" => "图文导航",
                        "ignore" => [],
                        "layout" => "horizontal",
                        "navTitle" => "",
                        "subNavTitle" => "",
                        "subNavTitleLink" => [
                            "name" => ""
                        ],
                        "subNavColor" => "#999999",
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
                                "title" => "美团到店",
                                "link" => [
                                    "parent" => "SYSTEM_LINK",
                                    "title" => "美团到店",
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
                                "title" => "抖音团购",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "抖音团购",
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
                                "title" => "蜜雪冰城",
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "蜜雪冰城",
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
                                "title" => "酒店预定",
                                "imageUrl" => "addon/shop/diy/index/nav_coupon.png",
                                "imgWidth" => 50,
                                "imgHeight" => 50,
                                "link" => [
                                    "parent" => "SHOP_LINK",
                                    "title" => "酒店预定",
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
                                "title" => "折扣影票",
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
                                "title" => "聚合点餐",
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
                                "title" => "抖音商城",
                                "imageUrl" => "addon/shop/diy/index/nav_signin.png",
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
                                "id" => "13itkrdjqteo",
                                "title" => "电商聚合",
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
                                "title" => "肯德基",
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
                                "title" => "景区门票",
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
                        "pageBgColor" => "",
                        "componentBgColor" => "rgba(255, 255, 255, 0.87)",
                        "topRounded" => 9,
                        "bottomRounded" => 9,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 12,
                            "both" => 12
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
                                "imageUrl" => "addon/shop/diy/index/czgg.jpg",
                                "imgWidth" => 702,
                                "imgHeight" => 320,
                                "id" => "7ao3t56ug4o0",
                                "width" => 375,
                                "height" => 170.94
                            ]
                        ],
                        "textColor" => "#303133",
                        "pageBgColor" => "",
                        "componentBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 10,
                            "both" => 12
                        ]
                    ],
                    [
                        "path" => "edit-goods-list",
                        "uses" => 0,
                        "id" => "50pj7dmvbvo0",
                        "componentName" => "GoodsList",
                        "componentTitle" => "商品列表",
                        "ignore" => [],
                        "style" => "style1",
                        "source" => "all",
                        "num" => 10,
                        "goods_category" => "",
                        "goods_ids" => [],
                        "textColor" => "#303133",
                        "pageBgColor" => "",
                        "componentBgColor" => "",
                        "topRounded" => 0,
                        "bottomRounded" => 0,
                        "elementBgColor" => "",
                        "topElementRounded" => 0,
                        "bottomElementRounded" => 0,
                        "margin" => [
                            "top" => 0,
                            "bottom" => 0,
                            "both" => 12
                        ]
                    ]
                ]
            ]
        ]
    ]
];
