<?php
return [
    'pages' => <<<EOT
                // PAGE_BEGIN
                // *********************************** hello world ***********************************
                {
					"path": "hsx_phone_query/pages/index",
					"style": {
						"navigationBarTitleText": "查询界面"
					},
					"needLogin": true
				},
				{
					"path": "hsx_phone_query/pages/history",
					"style": {
						"navigationBarTitleText": "查询历史"
					},
					"needLogin": true
				},
				{
					"path": "hsx_phone_query/pages/detail",
					"style": {
						"navigationBarTitleText": "查询详情"
					},
					"needLogin": true
				},
                // PAGE_END
EOT
];
