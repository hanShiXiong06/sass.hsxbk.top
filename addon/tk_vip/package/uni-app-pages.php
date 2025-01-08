<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** 付费会员权益 ***********************************
				{
					"path": "tk_vip/pages/index",
					"style": {
						"navigationBarTitleText": "付费会员",
						// #ifndef H5
						"navigationStyle": "custom"
						// #endif 
					},
					"needLogin": true
				},
				{
					"path": "tk_vip/pages/list",
					"style": {
						"navigationBarTitleText": "购买记录"
					},
					"needLogin": true
				},
				{
					"path": "tk_vip/pages/real",
					"style": {
						"navigationBarTitleText": "实名认证"
					},
					"needLogin": true
				},
				{
					"path": "tk_vip/pages/manage",
					"style": {
						"navigationBarTitleText": "会员管理"
					},
					"needLogin": true
				},
				{
					"path": "tk_vip/pages/member",
					"style": {
						"navigationBarTitleText": "会员详情"
					},
					"needLogin": true
				},
				// PAGE_END
EOT
];