<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
			// *********************************** 聚合快递 ***********************************
			{
				"path": "tk_jhkd/pages/addresslist",
				"style": {
					"navigationBarTitleText": "地址列表"
				},
				"needLogin": true
			},
			{
				"path": "tk_jhkd/pages/addressedit",
				"style": {
					"navigationBarTitleText": "地址操作"
				},
				"needLogin": true
			},
			{
				"path": "tk_jhkd/pages/agreement",
				"style": {
					"navigationBarTitleText": "协议详情"
				},
				"needLogin": true
			},
			{
				"path": "tk_jhkd/pages/help",
				"style": {
					"navigationBarTitleText": "帮助中心"
				},
				"needLogin": false
			},
			{
				"path": "tk_jhkd/pages/ordersubmit",
				"style": {
					"navigationBarTitleText": "快递下单"
				},
				"needLogin": true
			},
			{
				"path": "tk_jhkd/pages/orderlist",
				"style": {
					"navigationBarTitleText": "订单列表"
				},
				"needLogin": true
			},
			{
				"path": "tk_jhkd/pages/orderaddlist",
				"style": {
					"navigationBarTitleText": "补单列表"
				},
				"needLogin": true
			},
			{
				"path": "tk_jhkd/pages/orderdetail",
				"style": {
					"navigationBarTitleText": "订单详情"
				},
				"needLogin": true
			}, {
				"path": "tk_jhkd/pages/index",
				"style": {
					"navigationBarTitleText": "首页",
					// #ifndef H5
					"navigationStyle": "custom",
					"app-plus": {
						"titleView": false
					}
					// #endif 

				}

			},
			// PAGE_END
EOT
];