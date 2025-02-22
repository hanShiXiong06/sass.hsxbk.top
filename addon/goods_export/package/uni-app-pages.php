<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
        {
            "root": "addon/goods_export", 
            "pages": [
				{
                    "path": "{{addon_name}}/pages/hello_world/index",
                    "style": {
                        "navigationBarTitleText": "%{{addon_name}}.pages.hello_world.index%"
                    }
				}
			]
        },
// PAGE_END
EOT
];