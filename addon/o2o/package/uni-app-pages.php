<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** 上门服务 ***********************************
				{
					"path": "o2o/pages/index",
					"style": {
                        // #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%o2o.pages.index%"
					}
				},
				{
					"path": "o2o/pages/goods/list",
					"style": {
						"navigationBarTitleText": "%o2o.pages.goods.list%"
					}
				},
				{
					"path": "o2o/pages/goods/detail",
					"style": {
						"navigationBarTitleText": "%o2o.pages.goods.detail%"
					}
				},
				{
					"path": "o2o/pages/goods/category",
					"style": {
						"navigationBarTitleText": "%o2o.pages.goods.category%"
					}
				},
				{
					"path": "o2o/pages/member/index",
					"style": {
                        // #ifndef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%o2o.pages.member.index%"
					}
				},
				{
					"path": "o2o/pages/technician/list",
					"style": {
						"navigationBarTitleText": "%o2o.pages.technician.list%"
					}
				},
				{
					"path": "o2o/pages/technician/detail",
					"style": {
						"navigationBarTitleText": "%o2o.pages.technician.detail%"
					}
				},
				{
					"path": "o2o/pages/order/payment",
					"style": {
						"navigationBarTitleText": "%o2o.pages.order.payment%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/order/list",
					"style": {
						"navigationBarTitleText": "%o2o.pages.order.list%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/order/detail",
					"style": {
						"navigationBarTitleText": "%o2o.pages.order.detail%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/refund/apply",
					"style": {
						"navigationBarTitleText": "%o2o.pages.refund.apply%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/refund/detail",
					"style": {
						"navigationBarTitleText": "%o2o.pages.refund.detail%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/refund/list",
					"style": {
						"navigationBarTitleText": "%o2o.pages.refund.list%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/refund/log",
					"style": {
						"navigationBarTitleText": "%o2o.pages.refund.log%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/address/index",
					"style": {
						"navigationBarTitleText": "%o2o.pages.address.index%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/address/edit",
					"style": {
						"navigationBarTitleText": "%o2o.pages.address.edit%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/address/address_edit",
					"style": {
						"navigationBarTitleText": "%o2o.pages.address.address_edit%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/master/task/list",
					"style": {
						"navigationBarTitleText": "%o2o.pages.master.task.list%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/master/task/detail",
					"style": {
						"navigationBarTitleText": "%o2o.pages.master.task.detail%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/master/task/add",
					"style": {
						"navigationBarTitleText": "%o2o.pages.master.task.add%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/master/task/show",
					"style": {
						"navigationBarTitleText": "%o2o.pages.master.task.show%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/master/task/refund",
					"style": {
						"navigationBarTitleText": "%o2o.pages.master.task.refund%"
					},
					"needLogin": true
				},
				{
					"path": "o2o/pages/master/statistics/index",
					"style": {
						"navigationBarTitleText": "%o2o.pages.master.statistics.index%"
					},
					"needLogin": true
				},
				// PAGE_END
EOT
];
