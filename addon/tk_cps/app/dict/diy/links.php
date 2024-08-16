<?php

return [
    'TK_CPS_COMMONLINK' => [
        'key' => 'tk_cps',
        'addon_title' => 'CPS联盟',
        'title' => 'CPS联盟',
        'child_list' => [
            [
                'name' => 'TK_CPS_DIY',
                'title' => 'CPS首页',
                'url' => '/addon/tk_cps/pages/diy',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_DIY_MEMBER',
                'title' => 'CPS个人中心',
                'url' => '/addon/tk_cps/pages/member',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_ACT_LIST',
                'title' => '活动列表',
                'url' => '/addon/tk_cps/pages/act',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ACT_BWC_LIST',
                'title' => '霸王餐列表',
                'url' => '/addon/tk_cps/pages/bwc/act',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ORDER_BWC_LIST',
                'title' => '霸王餐订单',
                'url' => '/addon/tk_cps/pages/bwc/order',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_HOME',
                'title' => '美团红包',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=89&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_MEITUAN_DAODIAN',
                'title' => '美团到店',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=9&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEITUAN_QUANBAO',
                'title' => '美团券包',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=117&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_SHOP',
                'title' => '美团外卖',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=7&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_TG_MXBT',
                'title' => '美团团购',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=74&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_XIANHUAPEISONG',
                'title' => '鲜花配送',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=75&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_ELE',
                'title' => '饿了么',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=159&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ELE_SALES_NEW',
                'title' => '饿了么零售',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=129&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ELM_WUMENKAN',
                'title' => '饿了么无门槛',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=59&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_DIDI',
                'title' => '滴滴出行',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=42&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_DIDIDAIJIA',
                'title' => '滴滴代驾',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=53&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_DIDIHUOYUN',
                'title' => '滴滴货运',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=44&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MEISHI_DIDIJIAYOU',
                'title' => '滴滴加油',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=43&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_DACHE_HUAXIAOZHU',
                'title' => '花小猪',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=49&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_KUAIDI',
                'title' => '特惠快递',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=74&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MOVIE',
                'title' => '热门电影',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=76&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_MENPIAO',
                'title' => '景区门票',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=105&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_JIUDIAN_TONGCHENG',
                'title' => '同程酒店',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=94&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZHOUBIANYOU',
                'title' => '周边游',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=85&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_FEIZHU',
                'title' => '飞猪',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=120&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_SHOP_WEIPINHUI',
                'title' => '唯品会',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=84&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_SHOP_DIANSHANG_JDMH',
                'title' => '京东盲盒',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=34&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_SHOP_JINGDONGJKJ',
                'title' => '京东9.9',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=114&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_HOME',
                'title' => '点餐首页',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=43&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_KDJ',
                'title' => '肯德基',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=38&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_MDL',
                'title' => '麦当劳',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=26&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_XBK',
                'title' => '星巴克',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=34&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_RXKF',
                'title' => '瑞幸咖啡',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=33&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_XC',
                'title' => '喜茶',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=37&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_NXDC',
                'title' => '奈雪的茶',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=32&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_BXK',
                'title' => '必胜客',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=64&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_ZXDC_KDKF',
                'title' => '库迪咖啡',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=205&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],

            [
                'name' => 'TK_CPS_ZXDC_BAIGUOYUAN',
                'title' => '百果园',
                'url' => ' /addon/tk_cps/pages/index?type=0&act_id=31&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_CARD_LIULIANGKA',
                'title' => '超值流量卡',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=188&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_DOUYIN_TUANGOU',
                'title' => '抖音团购',
                'url' => '/addon/tk_cps/pages/index?type=0&act_id=152&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
//            [
//                'name' => 'TK_CPS_DOUYIN_UNION',
//                'title' => '抖音精选联盟',
//                'url' => '/addon/tk_cps/pages/index?type=0&act_id=56&style=embedded',
//                'is_share' => 1,
//                'action' => ''
//            ],

            [
                'name' => 'TK_CPS_ZHEKOU_JUHECHONGZHI',
                'title' => '聚合充值',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=189&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_FULI_PINDUODUO',
                'title' => '拼多多福利券',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=33&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
            [
                'name' => 'TK_CPS_FULI_PINDUODUO_BAIYI',
                'title' => '拼多多百亿补贴',
                'url' => '/addon/tk_cps/pages/index?type=1&act_id=41&style=embedded',
                'is_share' => 1,
                'action' => ''
            ],
        ]
    ],
    'TK_CPS_LINK_WEAPP' => [
        'key' => 'tk_cps_weapp',
        'addon_title' => 'CPS插件',
        'title' => 'CPS插件',
        'child_list' => [
            [
                'name' => 'TK_CPS_WEAPP_DOUYINTUANGOU',
                'title' => '抖音团购',
                'url' => '/cpsmeishi/pages/index?type=11&act_id=152',
                'is_share' => 1,
                'action' => 'decorate'
            ],
//            [
//                'name' => 'TK_CPS_WEAPP_DOUYINHAOWU',
//                'title' => '抖音好物',
//                'url' => '/cpsmeishi/pages/index?type=11&act_id=56',
//                'is_share' => 1,
//                'action' => 'decorate'
//            ],
            [
                'name' => 'TK_CPS_WEAPP_JINGDONG_JINGXUAN',
                'title' => '京东精选',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=114',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_MEITUAN_WAIMAI',
                'title' => '美团外卖',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=7',
                'is_share' => 1,
                'action' => 'decorate'
            ],
//            [
//                'name' => 'TK_CPS_WEAPP_MEITUAN_DAODIAN',
//                'title' => '美团到店',
//                'url' => '/addon/tk_cps/pages/index?type=11&act_id=9',
//                'is_share' => 1,
//                'action' => 'decorate'
//            ],
//            [
//                'name' => 'TK_CPS_WEAPP_TUANGOU_ZHUSJOU',
//                'title' => '团购助手',
//                'url' => '/addon/tk_cps/pages/index?type=11&act_id=2409',
//                'is_share' => 1,
//                'action' => 'decorate'
//            ],
            [
                'name' => 'TK_CPS_WEAPP_ELE_WAIMAI',
                'title' => '饿了么外卖',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=59',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DACHE',
                'title' => '打车出行',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=42',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_HOTEL',
                'title' => '酒店住宿',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=94',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_MEITUAN_QUANBAO',
                'title' => '美团券包',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=117',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_SHOUYE',
                'title' => '大牌点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=57',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_KENDEJI',
                'title' => '肯德基点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=16',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_MAIDANGNAO',
                'title' => '麦当劳点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=26',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_XBK',
                'title' => '星巴克点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=34',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_RUIXIN',
                'title' => '瑞幸点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=33',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_NAIXUE',
                'title' => '奈雪点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=32',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_BSK',
                'title' => '必胜客点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=64',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DAPAI_DIANCAN_KUDI',
                'title' => '库迪点餐',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=136',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_DIAN_YING',
                'title' => '热门电影',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=76',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_JINGQU_MENPIAN',
                'title' => '景区门票',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=105',
                'is_share' => 1,
                'action' => 'decorate'
            ],
            [
                'name' => 'TK_CPS_WEAPP_ZHUSHU_ORDER',
                'title' => '住宿预订',
                'url' => '/addon/tk_cps/pages/index?type=11&act_id=131',
                'is_share' => 1,
                'action' => 'decorate'
            ],
        ]
    ]
];