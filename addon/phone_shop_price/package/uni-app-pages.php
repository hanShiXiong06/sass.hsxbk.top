<?php
return [
    'pages' => <<<EOT
                // PAGE_BEGIN
                // *********************************** hello world ***********************************
               {
					"path": "phone_shop_price/pages/index",
					"style": {
						"navigationBarTitleText": "二手机回收报价单"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop_price/pages/order/order",
					"style": {
						"navigationBarTitleText": "立即下单"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop_price/pages/order/detail",
					"style": {
						"navigationBarTitleText": "订单详情"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop_price/pages/payment/index",
					"style": {
						"navigationBarTitleText": "收款方式"
					},
					"needLogin": true
				},
                
                // PAGE_END
EOT
];
