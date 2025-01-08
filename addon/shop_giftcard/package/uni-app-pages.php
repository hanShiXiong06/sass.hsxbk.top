<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** 礼品卡 ***********************************
				{
					"path": "shop_giftcard/pages/index",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop_giftcard.pages.index%"
					}
				},
				{
					"path": "shop_giftcard/pages/list",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.list%"
					}
				},
				{
					"path": "shop_giftcard/pages/detail",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.detail%"
					}
				},
				{
					"path": "shop_giftcard/pages/order_list",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.order_list%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/order_detail",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.order_detail%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/member",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop_giftcard.pages.member%"
					}
				},
				{
					"path": "shop_giftcard/pages/my_card_list",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.my_card_list%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/card_bag",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.card_bag%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/activate",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop_giftcard.pages.activate%"
					}
				},
				{
					"path": "shop_giftcard/pages/receive_list",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.receive_list%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/give_list",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.give_list%",
						"needLogin": true
					}
				},
				{
					"path": "shop_giftcard/pages/give_detail",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.give_detail%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/give",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.give%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/receive_info",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.receive_info%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/use_card",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.use_card%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/use_goods_select",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.use_goods_select%"
					},
					"needLogin": true
				},
				{
					"path": "shop_giftcard/pages/payment",
					"style": {
						"navigationBarTitleText": "%shop_giftcard.pages.payment%"
					},
					"needLogin": true
				},
				// PAGE_END
EOT
];