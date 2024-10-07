<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
                // *********************************** hello world ***********************************
                {
                    "path": "tt_niucloud/pages/hello_world/index",
                    "style": {
                        "navigationBarTitleText": "%tt_niucloud.pages.hello_world.index%"
                    }
				},
				{
				    "path": "tt_niucloud/pages/team/index",
				    "style": {
				        "navigationBarTitleText": "%tt_niucloud.pages.team.index%"
				    },
					"needLogin": true
				},
				{
				    "path": "tt_niucloud/pages/auth/bind-wx",
				    "style": {
				        "navigationBarTitleText": "%tt_niucloud.pages.auth.bind-wx%"
				    },
					"needLogin": true
				},
                // PAGE_END
EOT
];