<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** 二手商城 ***********************************
				{
					"path": "phone_shop/pages/index",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
                        "navigationBarTitleText": "%shop.pages.index%"
					}
				},
				{
					"path": "phone_shop/pages/coupon/list",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop.pages.coupon.list%"
					}
				},
				{
					"path": "phone_shop/pages/coupon/detail",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop.pages.coupon.detail%"
					}
				},
				{
					"path": "phone_shop/pages/discount/list",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop.pages.discount.list%"
					}
				},
				{
					"path": "phone_shop/pages/evaluate/list",
					"style": {
						"navigationBarTitleText": "%shop.pages.evaluate.list%"
					}
				},
				{
					"path": "phone_shop/pages/evaluate/order_evaluate",
					"style": {
						"navigationBarTitleText": "%shop.pages.evaluate.order_evaluate%"
					}
				},
				{
					"path": "phone_shop/pages/evaluate/order_evaluate_view",
					"style": {
						"navigationBarTitleText": "%shop.pages.evaluate.order_evaluate_view%"
					}
				},
				{
					"path": "phone_shop/pages/member/my_coupon",
					"style": {
						"navigationBarTitleText": "%shop.pages.member.my_coupon%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/member/index",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
                        "navigationBarTitleText": "%shop.pages.member.index%"
					}
				},
				{
					"path": "phone_shop/pages/goods/search",
					"style": {
						"navigationBarTitleText": "%shop.pages.goods.search%"
					}
				},
				{
					"path": "phone_shop/pages/goods/list",
					"style": {
						"navigationBarTitleText": "%shop.pages.goods.list%"
					}
				},
				{
					"path": "phone_shop/pages/goods/detail",
					"style": {
						"navigationBarTitleText": "%shop.pages.goods.detail%",
						"navigationStyle": "custom"
					}
				},
				{
					"path": "phone_shop/pages/goods/cart",
					"style": {
						"navigationBarTitleText": "%shop.pages.goods.cart%"
					}
				},
				{
					"path": "phone_shop/pages/goods/category",
					"style": {
						"navigationBarTitleText": "%shop.pages.goods.category%"
					}
				},
				{
					"path": "phone_shop/pages/order/detail",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop.pages.order.detail%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/order/list",
					"style": {
						"navigationBarTitleText": "%shop.pages.order.list%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/order/payment",
					"style": {
						"navigationBarTitleText": "%shop.pages.order.payment%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/refund/apply",
					"style": {
						"navigationBarTitleText": "%shop.pages.refund.apply%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/refund/edit_apply",
					"style": {
						"navigationBarTitleText": "%shop.pages.refund.edit_apply%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/refund/list",
					"style": {
						"navigationBarTitleText": "%shop.pages.refund.list%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/refund/detail",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop.pages.refund.detail%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/refund/log",
					"style": {
						"navigationBarTitleText": "%shop.pages.refund.log%"
					},
					"needLogin": true
				},
				{
					"path": "phone_shop/pages/point/index",
					"style": {
						// #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%shop.pages.point.index%"
					}
				},
				{
					"path": "phone_shop/pages/point/list",
					"style": {
						"navigationBarTitleText": "%shop.pages.point.list%"
					}
				},
				{
					"path": "phone_shop/pages/point/detail",
					"style": {
						"navigationStyle": "custom",
						"navigationBarTitleText": "%shop.pages.point.detail%"
					}
				},
				{
					"path": "phone_shop/pages/point/payment",
					"style": {
						"navigationBarTitleText": "%shop.pages.point.payment%"
					}
				},
				{
					"path": "phone_shop/pages/point/order_list",
					"style": {
						"navigationBarTitleText": "%shop.pages.point.order_list%"
					}
				},
				{
					"path": "phone_shop/pages/goods/operation",
					"style": {
						"navigationBarTitleText": "操作台"
					}
				},
				// PAGE_END
EOT
];