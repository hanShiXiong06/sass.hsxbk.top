<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** CPS联盟 ***********************************
				{
					"path": "tk_cps/pages/bwc/act",
					"style": {
						"navigationBarTitleText": "同城霸王餐"
					}
				},
				{
					"path": "tk_cps/pages/bwc/order",
					"style": {
						"navigationBarTitleText": "订单列表"
					},
					"needLogin": true

				},
				{
					"path": "tk_cps/pages/member",
					"style": {
						"navigationBarTitleText": "个人中心",
						// #ifndef H5
						"navigationStyle": "custom",
						"app-plus": {
							"titleView": false
						}
						// #endif 
					}

				},
				{
					"path": "tk_cps/pages/bwc/orderdetail",
					"style": {
						"navigationBarTitleText": "订单详情"
					},
					"needLogin": true
				},
				{
					"path": "tk_cps/pages/bwc/detail",
					"style": {
						"navigationBarTitleText": "活动报名",
						"enablePullDownRefresh": true
					}
				},
				{
					"path": "tk_cps/pages/act",
					"style": {
						"navigationBarTitleText": "CPS联盟活动推广"
					}
				},
				{
					"path": "tk_cps/pages/index",
					"style": {
						"navigationBarTitleText": "CPS联盟首页",
						"enablePullDownRefresh": true

					}
				},
				{
					"path": "tk_cps/pages/diy",
					"style": {
						"navigationBarTitleText": "%tk_cps.pages.diy%",
						"enablePullDownRefresh": true,
						"usingComponents": {
							"diy-group": "../../../../addon/components/diy/group/index",
							"fixed-group": "../../../../addon/components/fixed/group/index"
						},
						// #ifndef H5
						"navigationStyle": "custom",
						"app-plus": {
							"titleView": false
						}
						// #endif 
					}
				},
				{
				  "path": "tk_cps/pages/fenxiao/index",
				  "style": {
					"navigationBarTitleText": "分销中心"
				   },
				  "needLogin": true
			    },
				// PAGE_END
EOT
];