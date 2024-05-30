<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
				// *********************************** 旅游 ***********************************
				{
					"path": "tourism/pages/index",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.index%"
					}
				},
				{
					"path": "tourism/pages/way/list",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.way.list%"
					}
				},
				{
					"path": "tourism/pages/way/detail",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.way.detail%"
					}
				},
				{
					"path": "tourism/pages/way/order",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.way.order%"
					}
				},
				{
					"path": "tourism/pages/hotel/list",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.hotel.list%"
					}
				},
				{
					"path": "tourism/pages/hotel/detail",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.hotel.detail%"
					}
				},
				{
					"path": "tourism/pages/hotel/order",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.hotel.order%"
					},
					"needLogin": true
				},
				{
					"path": "tourism/pages/scenic/list",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.scenic.list%"
					}
				},
				{
					"path": "tourism/pages/scenic/detail",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.scenic.detail%"
					}
				},
				{
					"path": "tourism/pages/scenic/order",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.scenic.order%"
					}
				},
				{
					"path": "tourism/pages/member/index",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.member.index%"
					}
				},
				{
					"path": "tourism/pages/order/list",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.order.list%"
					}
				},
				{
					"path": "tourism/pages/order/detail",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.order.detail%"
					}
				},
				{
					"path": "tourism/pages/order/hotel_detail",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.order.hotel_detail%"
					}
				},
				{
					"path": "tourism/pages/verify/index",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.verify.index%"
					},
					"needLogin": true
				},
				{
					"path": "tourism/pages/verify/record",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.verify.record%"
					},
					"needLogin": true
				},
				{
					"path": "tourism/pages/verify/detail",
					"style": {
						// #ifdef H5
						"navigationStyle": "custom",
						// #endif
						"navigationBarTitleText": "%tourism.pages.verify.detail%"
					},
					"needLogin": true
				},
				// PAGE_END
EOT
];