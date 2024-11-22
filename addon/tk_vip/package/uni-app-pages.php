<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
                // *********************************** 付费会员权益 ***********************************
			{
				"path": "tk_vip/pages/index",
				"style": {
					"navigationBarTitleText": "付费会员"
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
                // PAGE_END
EOT
];