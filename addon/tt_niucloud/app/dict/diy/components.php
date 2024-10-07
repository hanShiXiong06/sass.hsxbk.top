<?php

return [
    'TTN' => [
        'title' => 'Trusty组件',
        'list' => [
            'ParentMember' => [
                'title' => '上级名片',
                'icon' => 'nc-iconfont nc-icon-ruzhurenV6xx',
                'path' => 'parent-member',
                'support_page' => [],
                'uses' => 1,
                'sort' => 10007,
                'value' => [
                    "style" => "style-1",
                    "styleName" => "风格1",
                    "tip" => "遇到问题加负责人微信咨询哟～",
                    "button_text" => "复制微信"
                ],
            ],
            'Poster' => [
                'title' => '推广海报',
                'icon' => 'nc-iconfont nc-icon-tuiguangV6xx',
                'path' => 'poster',
                'support_page' => [],
                'uses' => 0,
                'sort' => 10007,
                'value' => [
                    'sources' => 'diy',
                    'posterName' => '',
                    'type' => '',
                    'posterId' => 0
                ],
            ],
            'TtnGraphicNav' => [
                'title' => '图文导航',
                'icon' => 'iconfont icontuwendaohangpc',
                'path' => 'ttn-edit-graphic-nav',
                'support_page' => [],
                'uses' => 0,
                'sort' => 10003,
                'value' => [
                    "layout" => "horizontal",
                    "mode" => "graphic",
                    "type" => "img",
                    "showStyle" => "fixed",
                    "rowCount" => 4,
                    "pageCount" => 2,
                    "carousel" => [
                        "type" => "circle",
                        "color" => "#FFFFFF"
                    ],
                    "imageSize" => 40,
                    "aroundRadius" => 25,
                    "font" => [
                        "size" => 14,
                        "weight" => "normal",
                        "color" => "#303133"
                    ],
                    "list" => [
                        [
                            "title" => "",
                            "link" => [
                                "name" => ""
                            ],
                            "imageUrl" => "",
                            "showType" => "link",
                            "text" => "",
                            "imgPath" => "",
                            "label" => [
                                "control" => false,
                                "text" => "热门",
                                "textColor" => "#FFFFFF",
                                "bgColorStart" => "#F83287",
                                "bgColorEnd" => "#FE3423"
                            ]
                        ],
                        [
                            "title" => "",
                            "link" => [
                                "name" => ""
                            ],
                            "imageUrl" => "",
                            "showType" => "link",
                            "text" => "",
                            "imgPath" => "",
                            "label" => [
                                "control" => false,
                                "text" => "热门",
                                "textColor" => "#FFFFFF",
                                "bgColorStart" => "#F83287",
                                "bgColorEnd" => "#FE3423"
                            ]
                        ],
                        [
                            "title" => "",
                            "link" => [
                                "name" => ""
                            ],
                            "imageUrl" => "",
                            "showType" => "link",
                            "text" => "",
                            "imgPath" => "",
                            "label" => [
                                "control" => false,
                                "text" => "热门",
                                "textColor" => "#FFFFFF",
                                "bgColorStart" => "#F83287",
                                "bgColorEnd" => "#FE3423"
                            ]
                        ],
                        [
                            "title" => "",
                            "link" => [
                                "name" => ""
                            ],
                            "imageUrl" => "",
                            "showType" => "link",
                            "text" => "",
                            "imgPath" => "",
                            "label" => [
                                "control" => false,
                                "text" => "热门",
                                "textColor" => "#FFFFFF",
                                "bgColorStart" => "#F83287",
                                "bgColorEnd" => "#FE3423"
                            ]
                        ]
                    ],
                ]
            ],
        ],
    ],

];