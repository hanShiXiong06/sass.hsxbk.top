<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
            // *********************************** 快捷支付 ***********************************
		    {
				"path": "fast_pay/pages/pay/index",
				"style": {
					"navigationBarTitleText": "收银台"
				},
				"needLogin": true
			},

			{
				"path": "fast_pay/pages/pay/result",
				"style": {
					"navigationBarTitleText": "支付结果"
				},
				"needLogin": true
			},
			{
				"path": "fast_pay/pages/pay/list",
				"style": {
					"navigationBarTitleText": "支付记录"
				},
				"needLogin": true
			},
			{
				"path": "fast_pay/pages/pay/pay",
				"style": {
					"navigationBarTitleText": "商户收款"
				}
			},
			
			{
				"path": "fast_pay/pages/partner/index",
				"style": {
					"navigationBarTitleText": "收银台"
				},
				"needLogin": true
			},

			{
				"path": "fast_pay/pages/partner/result",
				"style": {
					"navigationBarTitleText": "支付结果"
				},
				"needLogin": true
			},
			{
				"path": "fast_pay/pages/partner/list",
				"style": {
					"navigationBarTitleText": "支付记录"
				},
				"needLogin": true
			},
			{
				"path": "fast_pay/pages/partner/pay",
				"style": {
					"navigationBarTitleText": "商户收款"
				}
			},
            // PAGE_END
EOT
];