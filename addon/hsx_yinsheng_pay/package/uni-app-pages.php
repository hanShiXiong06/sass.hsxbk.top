<?php
return [
    'pages' => <<<EOT
                // PAGE_BEGIN
                // *********************************** hello world ***********************************
                {
                    "path": "{{addon_name}}/pages/hello_world/index",
                    "style": {
                        "navigationBarTitleText": "%{{addon_name}}.pages.hello_world.index%"
                    }
				},
                // PAGE_END
EOT
];
