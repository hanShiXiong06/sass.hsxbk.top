<?php

return [
    // 默认规则
    'rules' => [
        'applet' => [
            'ext' => ['zip', 'rar', 'xlsx'], // 添加了 'xlsx' 和 'csv'
            'mime' => [
                'application/zip',
                'application/vnd.rar',
                'application/x-zip-compressed',
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // 添加了 xlsx 的 MIME 类型
                'text/csv' // 添加了 csv 的 MIME 类型
            ],
            'size' => 20971520000 // 这是文件大小限制，当前设置为 2 MB
        ],
    ],
];

