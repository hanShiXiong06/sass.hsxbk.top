<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				{
					"path": "recharge/pages/recharge",
					"style": {
						"navigationBarTitleText": "%recharge.pages.recharge%"
					},
					"needLogin": true
				},
				{
					"path": "recharge/pages/recharge_record",
					"style": {
						"navigationBarTitleText": "%recharge.pages.recharge_record%"
					},
					"needLogin": true
				},
				{
					"path": "recharge/pages/recharge_record_detail",
					"style": {
						"navigationBarTitleText": "%recharge.pages.recharge_record_detail%"
					},
					"needLogin": true
				},
				// PAGE_END
EOT
];