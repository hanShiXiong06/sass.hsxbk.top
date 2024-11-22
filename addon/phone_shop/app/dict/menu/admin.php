<?php
return [
    [
        'menu_name' => '商品管理',
        'menu_key' => 'phone_shop_goods',
        'menu_short_name' => '商品',
        'parent_key' => 'setting_manage',
        'menu_type' => '0',
        'icon' => 'iconfont iconshangpinguanli',
        'api_url' => '',
        'router_path' => '',
        'view_path' => '',
        'methods' => 'get',
        'sort' => '90',
        'status' => '1',
        'is_show' => '1',
        'children' => [
            [
                'menu_name' => '站点管理',
                'menu_key' => 'phone_shop_site',
                'menu_short_name' => '站点管理',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinfenlei',
                'api_url' => '/phone_shop/site',
                'router_path' => 'phone_shop/site',
                'view_path' => 'site/site',
                'methods' => 'get',
                'sort' => '90',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '站点管理添加',
                        'menu_key' => 'phone_shop_goods_category_add',
                        'menu_short_name' => '站点管理添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => '/phone_shop/site',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '站点管理编辑',
                        'menu_key' => 'phone_shop_goods_category_edit',
                        'menu_short_name' => '站点管理编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/site',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '站点管理删除',
                        'menu_key' => 'phone_shop_goods_category_delete',
                        'menu_short_name' => '站点管理删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/site',
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
                'menu_name' => '商品分类',
                'menu_key' => 'phone_shop_goods_category_list',
                'menu_short_name' => '商品分类',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinfenlei',
                'api_url' => 'phone_shop/goods/category',
                'router_path' => 'phone_shop/goods/category',
                'view_path' => 'goods/category',
                'methods' => 'get',
                'sort' => '89',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '商品分类添加',
                        'menu_key' => 'phone_shop_goods_category_add',
                        'menu_short_name' => '商品分类添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/category',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品分类编辑',
                        'menu_key' => 'phone_shop_goods_category_edit',
                        'menu_short_name' => '商品分类编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品分类删除',
                        'menu_key' => 'phone_shop_goods_category_delete',
                        'menu_short_name' => '商品分类删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/category/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'delete',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品分类拖拽排序',
                        'menu_key' => 'phone_shop_goods_category_sort',
                        'menu_short_name' => '商品分类拖拽排序',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/category/update',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '分类设置',
                'menu_key' => 'phone_shop_goods_category_config',
                'menu_short_name' => '分类设置',
                'menu_type' => '1',
                'icon' => 'iconfont iconfenleishezhi',
                'api_url' => '',
                'router_path' => 'phone_shop/goods/category/config',
                'view_path' => 'goods/category_config',
                'methods' => '',
                'sort' => '88',
                'status' => '1',
                'is_show' => '0',
                'children' => [
                    [
                        'menu_name' => '分类设置编辑',
                        'menu_key' => 'phone_shop_goods_category_config_set',
                        'menu_short_name' => '分类设置编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/category/config',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '商品标签分组',
                'menu_key' => 'phone_shop_goods_label_group_list',
                'menu_short_name' => '商品标签分组',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinbiaoqian',
                'api_url' => 'phone_shop/goods/label/group',
                'router_path' => 'phone_shop/goods/label/group',
                'view_path' => 'goods/label_group_list',
                'methods' => 'get',
                'sort' => '88',
                'status' => '1',
                'is_show' => '0',
                'children' => [
                    [
                        'menu_name' => '商品标签分组添加',
                        'menu_key' => 'phone_shop_goods_label_group_add',
                        'menu_short_name' => '商品标签分组添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/label/group',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品标签分组编辑',
                        'menu_key' => 'phone_shop_goods_label_group_edit',
                        'menu_short_name' => '商品标签分组编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/label/group/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品标签分组删除',
                        'menu_key' => 'phone_shop_goods_label_group_delete',
                        'menu_short_name' => '商品标签分组删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/label/group/<id>',
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
                'menu_name' => '商品标签',
                'menu_key' => 'phone_shop_goods_label_list',
                'menu_short_name' => '商品标签',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinbiaoqian',
                'api_url' => 'phone_shop/goods/label',
                'router_path' => 'phone_shop/goods/label',
                'view_path' => 'goods/label_list',
                'methods' => 'get',
                'sort' => '87',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '商品标签添加',
                        'menu_key' => 'phone_shop_goods_label_add',
                        'menu_short_name' => '商品标签添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/label',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品标签编辑',
                        'menu_key' => 'phone_shop_goods_label_edit',
                        'menu_short_name' => '商品标签编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/label/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品标签删除',
                        'menu_key' => 'phone_shop_goods_label_delete',
                        'menu_short_name' => '商品标签删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/label/<id>',
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
                'menu_name' => '商品品牌',
                'menu_key' => 'phone_shop_goods_brand_list',
                'menu_short_name' => '商品品牌',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinpinpai',
                'api_url' => 'phone_shop/goods/brand',
                'router_path' => 'phone_shop/goods/brand',
                'view_path' => 'goods/brand_list',
                'methods' => 'get',
                'sort' => '86',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '商品品牌添加',
                        'menu_key' => 'phone_shop_goods_brand_add',
                        'menu_short_name' => '商品品牌添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/brand',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品品牌编辑',
                        'menu_key' => 'phone_shop_goods_brand_edit',
                        'menu_short_name' => '商品品牌编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/brand/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品品牌删除',
                        'menu_key' => 'phone_shop_goods_brand_delete',
                        'menu_short_name' => '商品品牌删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/brand/<id>',
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
                'menu_name' => '商品服务',
                'menu_key' => 'phone_shop_goods_service_list',
                'menu_short_name' => '商品服务',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinfuwu',
                'api_url' => 'phone_shop/goods/service',
                'router_path' => 'phone_shop/goods/service',
                'view_path' => 'goods/service',
                'methods' => 'get',
                'sort' => '85',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '商品服务添加',
                        'menu_key' => 'phone_shop_goods_service_add',
                        'menu_short_name' => '商品服务添加',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/service',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'post',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品服务编辑',
                        'menu_key' => 'phone_shop_goods_service_edit',
                        'menu_short_name' => '商品服务编辑',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/service/<id>',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '商品服务删除',
                        'menu_key' => 'phone_shop_goods_service_delete',
                        'menu_short_name' => '商品服务删除',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/service/<id>',
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
                'menu_name' => '参数模板',
                'menu_key' => 'phone_shop_goods_attr_list',
                'menu_short_name' => '参数模板',
                'menu_type' => '1',
                'icon' => 'iconfont iconshangpinfuwu',
                'api_url' => 'phone_shop/goods/attr',
                'router_path' => 'phone_shop/goods/attr',
                'view_path' => 'goods/attr',
                'methods' => 'get',
                'sort' => '84',
                'status' => '1',
                'is_show' => '1',
                'children' => [
                    [
                        'menu_name' => '修改参数模板排序号',
                        'menu_key' => 'phone_shop_goods_attr_sort_edit',
                        'menu_short_name' => '修改参数模板排序号',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/attr/sort',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '修改参数模板名称',
                        'menu_key' => 'phone_shop_goods_attr_name_edit',
                        'menu_short_name' => '修改参数模板名称',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/attr/attr_name',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                    [
                        'menu_name' => '修改参数模板值',
                        'menu_key' => 'phone_shop_goods_attr_value_edit',
                        'menu_short_name' => '修改参数模板值',
                        'menu_type' => '2',
                        'icon' => '',
                        'api_url' => 'phone_shop/goods/attr/attr_value',
                        'router_path' => '',
                        'view_path' => '',
                        'methods' => 'put',
                        'sort' => '0',
                        'status' => '1',
                        'is_show' => '0',
                    ],
                ],
            ],
            [
                'menu_name' => '删除参数模板',
                'menu_key' => 'phone_shop_goods_attr_delete',
                'menu_short_name' => '删除参数模板',
                'menu_type' => '2',
                'icon' => '',
                'api_url' => 'phone_shop/goods/attr/<id>',
                'router_path' => '',
                'view_path' => '',
                'methods' => 'delete',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '编辑参数模板',
                'menu_key' => 'phone_shop_goods_attr_edit',
                'menu_short_name' => '编辑参数模板',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'phone_shop/goods/attr/<id>',
                'router_path' => 'phone_shop/goods/attr_edit',
                'view_path' => 'goods/attr_edit',
                'methods' => 'put',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],
            [
                'menu_name' => '添加参数模板',
                'menu_key' => 'phone_shop_goods_attr_add',
                'menu_short_name' => '添加参数模板',
                'menu_type' => '1',
                'icon' => '',
                'api_url' => 'phone_shop/goods/attr',
                'router_path' => 'phone_shop/goods/attr_edit',
                'view_path' => 'goods/attr_edit',
                'methods' => 'post',
                'sort' => '0',
                'status' => '1',
                'is_show' => '0',
            ],
        ],
    ],
];