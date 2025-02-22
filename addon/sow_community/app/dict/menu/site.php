<?php
return [
    [
        'menu_name' => '种草社区',
        'menu_key' => 'sow_community',
        'menu_short_name' => '种草',
        'parent_key' => '',
        'menu_type' => '0',
        'icon' => 'iconfont iconzhongcaoshequ',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => '',
        'sort' => '110',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '社区分类',
                'menu_key' => 'sow_community_category',
                'menu_short_name' => '社区分类',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/category',
                'router_path' => 'sow_community/category/list',
                'view_path' => 'category/list',
                'methods' => 'get',
                'sort' => '100',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '社区分类添加',
                        'menu_key' => 'sow_community_category_add',
                        'menu_short_name' => '社区分类添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/category',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '社区分类编辑',
                        'menu_key' => 'sow_community_category_edit',
                        'menu_short_name' => '社区分类编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分类排序号修改',
                        'menu_key' => 'sow_community_category_sort_edit',
                        'menu_short_name' => '分类排序号修改',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/category/sort',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分类状态修改',
                        'menu_key' => 'sow_community_category_status_edit',
                        'menu_short_name' => '分类状态修改',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/category/status',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '社区分类删除',
                        'menu_key' => 'sow_community_category_delete',
                        'menu_short_name' => '社区分类删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/category/delete',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '社区话题',
                'menu_key' => 'sow_community_topic',
                'menu_short_name' => '社区话题',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/topic',
                'router_path' => 'sow_community/topic/list',
                'view_path' => 'topic/list',
                'methods' => 'get',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '社区话题添加',
                        'menu_key' => 'sow_community_topic_add',
                        'menu_short_name' => '社区话题添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/topic',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '社区话题编辑',
                        'menu_key' => 'sow_community_topic_edit',
                        'menu_short_name' => '社区话题编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/topic/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分类排序号修改',
                        'menu_key' => 'sow_community_topic_sort_edit',
                        'menu_short_name' => '分类排序号修改',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/topic/sort',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '分类状态修改',
                        'menu_key' => 'sow_community_topic_status_edit',
                        'menu_short_name' => '分类状态修改',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/topic/status',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '社区话题删除',
                        'menu_key' => 'sow_community_topic_delete',
                        'menu_short_name' => '社区话题删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'sow_community/topic/delete',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ]
            ],
            [
                'menu_name' => '社区内容',
                'menu_key' => 'sow_community_content',
                'menu_short_name' => '社区内容',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/content',
                'router_path' => 'sow_community/content/list',
                'view_path' => 'content/list',
                'methods' => 'get',
                'sort' => '80',
                'status' => '1',
                'is_show' => '1',
                'children' => []
            ],
            [
                'menu_name' => '社区内容添加',
                'menu_key' => 'sow_community_content_add',
                'menu_short_name' => '社区内容添加',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/content',
                'router_path' => 'sow_community/content/add',
                'view_path' => 'content/edit',
                'methods' => 'post',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0'
            ],
            [
                'menu_name' => '社区内容编辑',
                'menu_key' => 'sow_community_content_edit',
                'menu_short_name' => '社区内容编辑',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/content',
                'router_path' => 'sow_community/content/edit',
                'view_path' => 'content/edit',
                'methods' => 'post',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0'
            ],
            [
                'menu_name' => '社区评论',
                'menu_key' => 'sow_community_comment',
                'menu_short_name' => '社区评论',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/comment',
                'router_path' => 'sow_community/comment/list',
                'view_path' => 'comment/list',
                'methods' => 'get',
                'sort' => '70',
                'status' => '1',
                'is_show' => '1',
                'children' => []
            ],
            [
                'menu_name' => '宝贝库',
                'menu_key' => 'sow_community_treasure',
                'menu_short_name' => '宝贝库',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/treasure',
                'router_path' => 'sow_community/treasure/list',
                'view_path' => 'treasure/list',
                'methods' => 'get',
                'sort' => '60',
                'status' => '1',
                'is_show' => '1'
            ],
            [
                'menu_name' => '社区设置',
                'menu_key' => 'sow_community_config',
                'menu_short_name' => '社区设置',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/config',
                'router_path' => 'sow_community/config',
                'view_path' => 'config/config',
                'methods' => 'get',
                'sort' => '50',
                'status' => '1',
                'is_show' => '1',
                'children' => []
            ],
            [
                'menu_name' => '敏感词',
                'menu_key' => 'sow_community_sensitive',
                'menu_short_name' => '敏感词',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinliebiao1',
                'api_url' => 'sow_community/sensitive',
                'router_path' => 'sow_community/sensitive/index',
                'view_path' => 'sensitive/index',
                'methods' => 'get',
                'sort' => '40',
                'status' => '1',
                'is_show' => '1'
            ],
        ],
    ],
];
