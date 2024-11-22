<?php
return [
    'pages' => <<<EOT
                // PAGE_BEGIN
                // *********************************** hello world ***********************************
                {
                    "path": "{{addon_name}}/pages/index",
                    "style": {
                        "navigationBarTitleText": "二手机回收报价单"
                    }
				}, {
                    "path": "phone_shop_price/pages/order",
                    "style": {
                        "navigationBarTitleText": "去下单"
                    }
				}, {
                    "path": "phone_shop_price/pages/order/list",
                    "style": {
                        "navigationBarTitleText": "我的订单"
                    }
				},
                // PAGE_END
EOT
];
