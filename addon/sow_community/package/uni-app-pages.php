<?php
return [
    'pages' => <<<EOT
        // PAGE_BEGIN
        {
            "root": "addon/sow_community",
            "pages": [{
                    "path": "pages/index",
                    "style": {
                        // #ifndef H5
                        "navigationStyle": "custom",
                        // #endif
                        "navigationBarTitleText": "%sow_community.pages.index%"
                    }
                },
                {
                    "path": "pages/search",
                    "style": {
                        "navigationBarTitleText": "%sow_community.pages.search%"
                    }
                },
                {
                    "path": "pages/image/detail",
                    "style": {
                        "navigationBarTitleText": "%sow_community.pages.image.detail%"
                    }
                },
                {
                    "path": "pages/video/detail",
                    "style": {
                        // #ifndef H5
                        "navigationStyle": "custom",
                        // #endif
                        "navigationBarTitleText": "%sow_community.pages.video.detail%"
                    }
                },
                {
                    "path": "pages/member",
                    "style": {
                        // #ifndef H5
                        "navigationStyle": "custom",
                        // #endif
                        "navigationBarTitleText": "%sow_community.pages.member%"
                    }
                },
                {
                    "path": "pages/topic_list",
                    "style": {
                        "navigationBarTitleText": "%sow_community.pages.topic_list%"
                    }
                },
                {
                    "path": "pages/create",
                    "style": {
                        "navigationBarTitleText": "%sow_community.pages.create%"
                    }
                },
                {
                    "path": "pages/follow",
                    "style": {
                        "navigationBarTitleText": "%sow_community.pages.follow%"
                    },
                    "needLogin": true
                },
                {
                    "path": "pages/sow_show",
                    "style": {
                        "navigationBarTitleText": "%sow_community.pages.sow_show%"
                    }
                }
            ]
        },
        // PAGE_END
EOT
];