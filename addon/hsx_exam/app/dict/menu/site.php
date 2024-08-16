<?php

return  [
    [
        'menu_name' => '考试',
        'menu_key' => 'hsx_exam',
        'menu_type' => 0,
        'icon' => 'iconfont iconyingyongshichang',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => 100,
        'status' => 1,
        'is_show' => 1,
        'children' => [
            [
                'menu_name' => '考试系统',
                'menu_key' => 'hsx_exam_hello_world',
                'menu_type' => 1,
                'icon' => '',
                'api_url' => 'hsx_exam/hello_world',
                'router_path' => 'hsx_exam/index',
                'view_path' => 'question/index',
                'methods' => 'get',
                'sort' => 100,
                'status' => 1,
                'is_show' => 1,
                'children' => []
            ],
            [
                'menu_name' => '试题管理',
                'menu_key' => 'hsx_exam_question',
                'menu_type' => 1,
                'icon' => '',
                'api_url' => '',
                'router_path' => '',
                'view_path' => '',
                'methods' => 'get',
                'sort' => 100,
                'status' => 1,
                'is_show' => 1,
                'children' => [
                    [
                        'menu_name' => '试题列表',
                        'menu_key' => 'hsx_exam_question_index',
                        'menu_type' => 1,
                        'icon' => '',
                        'api_url' => 'hsx_exam/hello_world',
                        'router_path' => 'hsx_exam/question/index',
                        'view_path' => 'question/list',
                        'methods' => 'get',
                        'sort'=>100,
                    ],
                    [
                        'menu_name' => '分类管理',
                        'menu_key' => 'hsx_exam_question_category',
                        'menu_type' => 1,
                        'icon' => '',
                        'api_url' => 'hsx_exam/hello_world',
                        'router_path' => 'hsx_exam/question/category',
                        'view_path' => 'question/category',
                        'methods' => 'get',
                        'sort'=> 100,
                    ]
                ]
            ],
        ]
    ]
];
