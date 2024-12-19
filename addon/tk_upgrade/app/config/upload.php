<?php

return [
    // 默认规则
    'rules' => [
        'applet' => [
            'ext' => ['zip', 'rar'],
            'mime' => [
                'application/zip',
                'application/vnd.rar',
                'application/x-zip-compressed'
            ],
            'size' => 2097152000
        ],
    ],
];

