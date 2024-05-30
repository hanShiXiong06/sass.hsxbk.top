<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
        {
            "path": "{{addon_name}}/pages/cps/index",
            "style": {
                // #ifdef H5
                "navigationStyle": "custom",
                // #endif
                "navigationBarTitleText": "%{{addon_name}}.pages.cps.index%"
            } 
		}
        ],
		"plugins": 
		{
			"meishi": {
				"version": "latest",
				"provider": "wx5c787b48e6a02a51"
			},
			"jtkMovie": {
                "version": "latest",
                "provider": "wx89752980e795bfde"
          }
	}
}
		// PAGE_END
EOT
];