<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** 卡项 ***********************************
				{
					"path": "vipcard/pages/index",
					"style": {
                        // #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%vipcard.pages.index%"
					}
				},
				{
					"path": "vipcard/pages/card/list",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.card.list%"
					}
				},
				{
					"path": "vipcard/pages/card/detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.card.detail%"
					}
				},
				{
					"path": "vipcard/pages/service/list",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.service.list%"
					}
				},
				{
					"path": "vipcard/pages/service/detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.service.detail%"
					}
				},
				{
					"path": "vipcard/pages/service/reserve_detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.service.reserve_detail%"
					}
				},
				{
					"path": "vipcard/pages/order/my_reserved",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.my_reserved%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/my_reserved_detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.my_reserved_detail%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/my_card",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.my_card%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/card_record",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.card_record%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/my_card_detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.my_card_detail%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/payment",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.payment%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/list",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.list%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/order/detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.order.detail%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/verify/index",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.verify.index%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/verify/record",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.verify.record%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/verify/detail",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.verify.detail%"
					},
					"needLogin": true
				},
				{
					"path": "vipcard/pages/reserve/result",
					"style": {
						"navigationBarTitleText": "%vipcard.pages.reserve.result%"
					},
					"needLogin": true
				},
				// PAGE_END
EOT
];