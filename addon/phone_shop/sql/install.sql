-- DROP TABLE IF EXISTS `{{prefix}}phone_shop_address`;
CREATE TABLE `{{prefix}}phone_shop_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `contact_name` varchar(255) NOT NULL DEFAULT '' COMMENT '联系人',
  `mobile` varchar(50) NOT NULL DEFAULT '' COMMENT '手机号',
  `province_id` int(11) NOT NULL DEFAULT '0' COMMENT '省',
  `city_id` int(11) NOT NULL DEFAULT '0' COMMENT '市',
  `district_id` int(11) NOT NULL DEFAULT '0' COMMENT '区',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
  `full_address` varchar(1000) NOT NULL DEFAULT '' COMMENT '地址',
  `lat` varchar(50) NOT NULL DEFAULT '' COMMENT '纬度',
  `lng` varchar(50) NOT NULL DEFAULT '' COMMENT '经度',
  `is_delivery_address` int(11) NOT NULL DEFAULT '0' COMMENT '是否是发货地址',
  `is_refund_address` int(11) NOT NULL DEFAULT '0' COMMENT '是否是退货地址',
  `is_default_delivery` int(11) NOT NULL DEFAULT '0' COMMENT '默认发货地址',
  `is_default_refund` int(11) NOT NULL DEFAULT '0' COMMENT '默认收货地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商家地址库';


-- DROP TABLE IF EXISTS `{{prefix}}phone_shop_cart`;
CREATE TABLE `{{prefix}}phone_shop_cart` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '购物车表ID',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
  `goods_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '商品ID',
  `sku_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT 'sku id',
  `num` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '商品数量',
  `market_type` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '活动类型',
  `market_type_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '活动id',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '添加时间',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '购物车商品状态',
  `invalid_remark` varchar(255) NOT NULL DEFAULT '' COMMENT '失效原因',
  PRIMARY KEY (`id`),
  KEY `goods_id` (`goods_id`),
  KEY `member_id` (`member_id`),
  KEY `sku_id` (`sku_id`),
  KEY `type` (`market_type`),
  KEY `type_id` (`market_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='购物车表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_coupon`;
CREATE TABLE `{{prefix}}phone_shop_coupon` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '名称',
  `start_time` int(11) NOT NULL DEFAULT '0' COMMENT '活动开启时间',
  `end_time` int(11) NOT NULL DEFAULT '0' COMMENT '活动结束时间',
  `remain_count` int(11) NOT NULL DEFAULT '0' COMMENT '剩余数量',
  `receive_count` int(11) NOT NULL DEFAULT '0' COMMENT '已领取数量',
  `limit_count` int(11) NOT NULL DEFAULT '0' COMMENT '单个会员限制领取数量',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT ' 状态 1 正常 2 未开启 3 已无效',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '添加时间',
  `price` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '面值',
  `min_condition_money` decimal(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '商品最低多少金额可用优惠券',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '优惠券类型 1通用优惠券 2商品品类优惠券 3商品优惠券',
  `receive_type` int(11) NOT NULL DEFAULT '0' COMMENT '领取方式',
  `valid_type` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '有效时间',
  `length` int(11) NOT NULL DEFAULT '0' COMMENT '有效期时长(天)',
  `valid_start_time` int(11) NOT NULL DEFAULT '0' COMMENT '有效期开始时间',
  `valid_end_time` int(11) NOT NULL DEFAULT '0' COMMENT '有效期结束时间',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `receive_status` tinyint(4) NOT NULL DEFAULT '1' COMMENT ' 状态 1 正常 2 关闭',
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `title` (`title`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='优惠券表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_coupon_goods`;
CREATE TABLE `{{prefix}}phone_shop_coupon_goods` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增ID',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `coupon_id` int(11) NOT NULL DEFAULT '0' COMMENT '优惠券模板id',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品id',
  `category_id` int(11) NOT NULL DEFAULT '0' COMMENT '分类id',
  PRIMARY KEY (`id`),
  KEY `index_category_id` (`category_id`),
  KEY `index_coupon_id` (`coupon_id`),
  KEY `index_goods_id` (`goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='优惠券商品或品类关联表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_coupon_member`;
CREATE TABLE `{{prefix}}phone_shop_coupon_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '优惠券发放记录id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `coupon_id` int(11) NOT NULL DEFAULT '0' COMMENT '优惠券id',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员id',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '领取时间',
  `expire_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '过期时间',
  `use_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '使用时间',
  `type` varchar(32) NOT NULL DEFAULT '' COMMENT '优惠券类型',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态',
  `title` varchar(255) NOT NULL DEFAULT '' COMMENT '优惠券名称',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '面值',
  `min_condition_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '最低使用门槛',
  `receive_type` varchar(255) NOT NULL DEFAULT '' COMMENT '领取方式',
  `trade_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联业务id',
  PRIMARY KEY (`id`),
  KEY `coupon_id` (`coupon_id`),
  KEY `member_id` (`member_id`),
  KEY `status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='优惠券会员领取记录表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_company`;
CREATE TABLE `{{prefix}}phone_shop_delivery_company` (
  `company_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `company_name` varchar(255) NOT NULL DEFAULT '' COMMENT '物流公司名称',
  `logo` varchar(255) NOT NULL DEFAULT '' COMMENT '物流公司logo',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '物流公司网站',
  `express_no` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '物流公司编号(用于物流跟踪)',
  `express_no_electronic_sheet` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '物流公司编号(用于电子面单)',
  `electronic_sheet_switch` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '是否支持电子面单（0：不支持，1：支持）',
  `print_style` VARCHAR(2000) NOT NULL DEFAULT '' COMMENT '电子面单打印模板样式，json字符串',
  `exp_type` VARCHAR(2000) NOT NULL DEFAULT '' COMMENT '物流公司业务类型，json字符串',
  `create_time` int(11) NOT NULL DEFAULT '0',
  `update_time` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_deliver`;
CREATE TABLE `{{prefix}}phone_shop_delivery_deliver` (
  `deliver_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '配送员id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `deliver_name` varchar(255) NOT NULL DEFAULT '' COMMENT '配送员名称',
  `deliver_mobile` varchar(20) NOT NULL DEFAULT '' COMMENT '配送员手机号',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `modify_time` int(11) NOT NULL DEFAULT '0' COMMENT '修改时间',
  `store_id` int(11) NOT NULL DEFAULT '0' COMMENT '门店id',
  PRIMARY KEY (`deliver_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='配送员表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_electronic_sheet`;
CREATE TABLE `{{prefix}}phone_shop_delivery_electronic_sheet` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `template_name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '模板名称',
  `express_company_id` INT(11) NOT NULL DEFAULT 0 COMMENT '物流公司id',
  `customer_name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '电子面单客户账号（CustomerName）',
  `customer_pwd` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '电子面单密码（CustomerPwd）',
  `send_site` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SendSite',
  `send_staff` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SendStaff',
  `month_code` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'MonthCode',
  `pay_type` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '邮费支付方式（1：现付，2：到付，3：月结）',
  `is_notice` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '快递员上门揽件（0：否，1：是）',
  `status` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '状态（1：开启，0：关闭）',
  `exp_type` INT(11) NOT NULL DEFAULT 0 COMMENT '物流公司业务类型',
  `print_style` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '电子面单打印模板样式',
  `is_default` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '是否默认（1：是，0：否）',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='电子面单';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_local_delivery`;
CREATE TABLE `{{prefix}}phone_shop_delivery_local_delivery` (
  `local_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `fee_type` varchar(30) NOT NULL DEFAULT '' COMMENT '费用类型',
  `base_dist` decimal(10,1) NOT NULL DEFAULT '0.0' COMMENT '多少km内',
  `base_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '配送费用',
  `grad_dist` decimal(10,1) NOT NULL DEFAULT '0.0' COMMENT '每超出多少km内',
  `grad_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '配送费用',
  `weight_start` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '重量多少内不额外收费',
  `weight_unit` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '每超出多少kg',
  `weight_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '价格',
  `delivery_type` varchar(2000) NOT NULL DEFAULT '' COMMENT '配送类型',
  `area` longtext NOT NULL COMMENT '配送区域',
  `center` varchar(255) NOT NULL DEFAULT '' COMMENT '发货地址中心点',
  PRIMARY KEY (`local_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_shipping_template`;
CREATE TABLE `{{prefix}}phone_shop_delivery_shipping_template` (
  `template_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `template_name` varchar(50) NOT NULL DEFAULT '' COMMENT '模板名称',
  `fee_type` varchar(20) NOT NULL DEFAULT '' COMMENT '运费计算方式1.重量2体积3按件',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '修改时间',
  `is_free_shipping` smallint(6) NOT NULL DEFAULT '0' COMMENT '该区域是否包邮',
  `no_delivery` smallint(6) NOT NULL DEFAULT '0' COMMENT '是否指定该区域不配送',
  PRIMARY KEY (`template_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='运费模板';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_shipping_template_item`;
CREATE TABLE `{{prefix}}phone_shop_delivery_shipping_template_item` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `template_id` int(11) NOT NULL DEFAULT '0' COMMENT '模板id',
  `city_id` int(11) NOT NULL DEFAULT '0' COMMENT '市id',
  `snum` int(11) NOT NULL DEFAULT '0' COMMENT '起步计算标准',
  `sprice` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '起步计算价格',
  `xnum` int(11) NOT NULL DEFAULT '0' COMMENT '续步计算标准',
  `xprice` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '续步计算价格',
  `fee_type` varchar(20) NOT NULL DEFAULT '1' COMMENT '运费计算方式',
  `fee_area_ids` text NOT NULL COMMENT '运费设置区域id集',
  `fee_area_names` text NOT NULL COMMENT '运费设置区域名称集',
  `no_delivery` smallint(6) NOT NULL DEFAULT '0' COMMENT '是否指定该区域不配送',
  `no_delivery_area_ids` text NOT NULL COMMENT '不配送的区域id集',
  `no_delivery_area_names` text NOT NULL COMMENT '不配送的区域名称集',
  `is_free_shipping` smallint(6) NOT NULL DEFAULT '0' COMMENT '该区域是否包邮',
  `free_shipping_area_ids` text NOT NULL COMMENT '包邮的区域id集',
  `free_shipping_area_names` text NOT NULL COMMENT '包邮的区域名称集',
  `free_shipping_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '满足包邮的条件',
  `free_shipping_num` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`item_id`),
  KEY `express_template_item_city_id` (`city_id`),
  KEY `express_template_item_fee_type` (`fee_type`),
  KEY `express_template_item_template_id` (`template_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='运费模板细节';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods`;
CREATE TABLE `{{prefix}}phone_shop_goods` (
  `goods_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品id',
  `goods_no` int(11) unsigned NOT NULL  COMMENT '商品no',
  `source` varchar(11) NOT NULL DEFAULT '' COMMENT 'source来源',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `goods_name` varchar(255) NOT NULL DEFAULT '' COMMENT '商品名称',
  `goods_type` varchar(50) NOT NULL DEFAULT 'real' COMMENT '商品类型',
  `sub_title` varchar(255) NOT NULL DEFAULT '' COMMENT '副标题',
  `goods_cover` varchar(2000) NOT NULL DEFAULT '' COMMENT '商品封面',
  `goods_image` text COMMENT '商品图片',
  `goods_category` varchar(255) NOT NULL DEFAULT '' COMMENT '商品分类',
  `goods_desc` text COMMENT '商品介绍',
  `brand_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品品牌id',
   `memory_group` varchar(255) NOT NULL DEFAULT '' COMMENT '内存分组',
   `goods_url` varchar(255) NOT NULL DEFAULT '' COMMENT '商品链接',
  `label_ids` varchar(255) NOT NULL DEFAULT '' COMMENT '标签组',
  `service_ids` varchar(255) NOT NULL DEFAULT '' COMMENT '商品服务',
  `unit` varchar(255) NOT NULL DEFAULT '件' COMMENT '单位',
  `stock` int(11) NOT NULL DEFAULT '0' COMMENT '商品库存（总和）',
  `sale_num` int(11) NOT NULL DEFAULT '0' COMMENT '销量',
  `virtual_sale_num` int(11) NOT NULL DEFAULT '0' COMMENT '虚拟销量',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '商品状态（1.正常0下架）',
  `is_proxy` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否代理商品',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `delivery_type` varchar(255) NOT NULL DEFAULT '' COMMENT '支持的配送方式',
  `is_free_shipping` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否免邮',
  `fee_type` varchar(255) NOT NULL DEFAULT '' COMMENT '运费设置，选择模板：template，固定运费：fixed',
  `delivery_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '固定运费',
  `delivery_template_id` int(11) NOT NULL DEFAULT '0' COMMENT '运费模板',
  `virtual_auto_delivery` tinyint(4) NOT NULL DEFAULT '0' COMMENT '虚拟商品是否自动发货',
  `virtual_receive_type` varchar(255) NOT NULL DEFAULT 'artificial' COMMENT '虚拟商品收货方式，auto：自动收货，artificial：买家确认收货，verify：到店核销',
  `virtual_verify_type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '虚拟商品核销有效期类型，0：不限，1：购买后几日有效，2：指定过期日期',
  `virtual_indate` int(11) NOT NULL DEFAULT '0' COMMENT '虚拟到期时间',
  `supplier_id` int(11) NOT NULL DEFAULT '0' COMMENT '供应商id',
  `attr_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品参数id',
  `attr_format` text COMMENT '商品参数内容，json格式',
  `is_discount` int(11) NOT NULL DEFAULT '0' COMMENT '是否参与限时折扣',
  `member_discount` varchar(255) NOT NULL DEFAULT 'fixed_price' COMMENT '会员等级折扣，不参与：空，会员折扣：discount，指定会员价：fixed_price',
  `poster_id` int(11) NOT NULL DEFAULT '0' COMMENT '海报id',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '修改时间',
  `delete_time` int(11) NOT NULL DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`goods_id`),
  KEY `idx_goods_category` (`goods_category`),
  KEY `idx_goods_create_time` (`create_time`),
  KEY `idx_goods_delete_time` (`delete_time`),
  KEY `idx_goods_name` (`goods_name`),
  KEY `idx_goods_sort` (`sort`),
  KEY `idx_goods_status` (`status`),
  KEY `idx_goods_sub_title` (`sub_title`),
  KEY `IDX_ns_goods_goods_class` (`goods_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_attr`;
CREATE TABLE `{{prefix}}phone_shop_goods_attr` (
  `attr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品参数id',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `attr_name` varchar(255) NOT NULL DEFAULT '' COMMENT '参数名称',
  `attr_value_format` text COMMENT '参数值，json格式',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '参数排序号',
  PRIMARY KEY (`attr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品参数表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_brand`;
CREATE TABLE `{{prefix}}phone_shop_goods_brand` (
  `brand_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '品牌ID',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `brand_name` varchar(100) NOT NULL DEFAULT '' COMMENT '品牌名称',
  `logo` varchar(255) NOT NULL DEFAULT '' COMMENT '品牌logo',
  `desc` text NOT NULL COMMENT '品牌介绍',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `delete_time` int(11) NOT NULL DEFAULT '0' COMMENT '删除时间',
  PRIMARY KEY (`brand_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品品牌表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_category`;
CREATE TABLE `{{prefix}}phone_shop_goods_category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品分类id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `category_name` varchar(255) NOT NULL DEFAULT '' COMMENT '分类名称',
  `image` varchar(255) NOT NULL DEFAULT '' COMMENT '分类图片',
  `level` int(11) NOT NULL DEFAULT '0' COMMENT '层级',
  `pid` int(11) NOT NULL DEFAULT '0' COMMENT '上级分类id',
  `category_full_name` varchar(255) NOT NULL DEFAULT '' COMMENT '组装分类名称',
  `is_show` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否显示（1：显示，0：不显示）',
  `memory_group` int(11)  COMMENT '内存分组id',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序号',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '修改时间',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品分类表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_collect`;
CREATE TABLE `{{prefix}}phone_shop_goods_collect` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员id',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品id',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '收藏时间',
  PRIMARY KEY (`id`),
  KEY `IDX_member_collect_goods` (`goods_id`),
  KEY `IDX_member_collect_member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品收藏记录表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_evaluate`;
CREATE TABLE `{{prefix}}phone_shop_goods_evaluate` (
  `evaluate_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单id',
  `order_goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单项ID',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品ID',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员ID',
  `member_head` varchar(255) NOT NULL DEFAULT '' COMMENT '会员头像',
  `member_name` varchar(100) NOT NULL DEFAULT '' COMMENT '会员名称',
  `content` varchar(3000) NOT NULL COMMENT '评价内容',
  `images` varchar(3000) NOT NULL DEFAULT '' COMMENT '评价图片',
  `is_anonymous` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1匿名  2不匿名',
  `scores` tinyint(4) NOT NULL DEFAULT '1' COMMENT '评论分数 1-5',
  `is_audit` tinyint(4) NOT NULL DEFAULT '1' COMMENT '审核状态 1待审 2通过 3拒绝',
  `explain_first` varchar(3000) NOT NULL DEFAULT '' COMMENT '解释内容',
  `topping` int(11) NOT NULL DEFAULT '0' COMMENT '排序 置顶',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '评论时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '修改时间',
  PRIMARY KEY (`evaluate_id`),
  KEY `idx_shop_goods_evaluate_create_time` (`create_time`),
  KEY `idx_shop_goods_evaluate_goods_id` (`goods_id`),
  KEY `idx_shop_goods_evaluate_is_anonymous` (`is_anonymous`),
  KEY `idx_shop_goods_evaluate_is_audit` (`is_audit`),
  KEY `idx_shop_goods_evaluate_member_id` (`member_id`),
  KEY `idx_shop_goods_evaluate_order_id` (`order_id`),
  KEY `idx_shop_goods_evaluate_scores` (`scores`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品评价表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_label`;
CREATE TABLE `{{prefix}}phone_shop_goods_label` (
  `label_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '标签ID',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `label_name` varchar(255) NOT NULL DEFAULT '' COMMENT '标签名称',
  `memo` varchar(255) NOT NULL DEFAULT '' COMMENT '标签说明',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`label_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品标签表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_service`;
CREATE TABLE `{{prefix}}phone_shop_goods_service` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `service_name` varchar(255) NOT NULL DEFAULT '' COMMENT '服务名称',
  `image` varchar(255) NOT NULL DEFAULT '' COMMENT '图片',
  `desc` varchar(255) NOT NULL DEFAULT '' COMMENT '描述',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品服务表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_sku`;
CREATE TABLE `{{prefix}}phone_shop_goods_sku` (
  `sku_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品sku_id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `sku_name` varchar(255) NOT NULL DEFAULT '' COMMENT '商品sku名称',
  `sku_image` varchar(2000) NOT NULL DEFAULT '' COMMENT 'sku主图',
  `sku_no` varchar(255) NOT NULL DEFAULT '' COMMENT '商品sku编码',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品id',
  `sku_spec_format` text COMMENT 'sku规格格式',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT 'sku单价',
  `market_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '划线价',
  `sale_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '实际卖价（有活动显示活动价，默认原价）',
  `cost_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT 'sku成本价',
  `stock` int(11) NOT NULL DEFAULT '0' COMMENT '商品sku库存',
  `weight` decimal(10,3) NOT NULL DEFAULT '0.000' COMMENT '重量（单位kg）',
  `volume` decimal(10,3) NOT NULL DEFAULT '0.000' COMMENT '体积（单位立方米）',
  `sale_num` int(11) NOT NULL DEFAULT '0' COMMENT '销量',
  `is_default` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否默认',
  `member_price` text COMMENT '会员价，json格式，指定会员价，数据结构为：{"level_1":"10.00","level_2":"10.00"}',
  PRIMARY KEY (`sku_id`),
  KEY `idx_goods_sku_is_default` (`is_default`),
  KEY `idx_goods_sku_price` (`price`),
  KEY `idx_goods_sku_sale_price` (`sale_price`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品规格表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_spec`;
CREATE TABLE `{{prefix}}phone_shop_goods_spec` (
  `spec_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '规格id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联商品id',
  `spec_name` varchar(255) NOT NULL DEFAULT '' COMMENT '规格项名称',
  `spec_values` text COMMENT '规格值名称，多个逗号隔开',
  PRIMARY KEY (`spec_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品规格项/值表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_invoice`;
CREATE TABLE `{{prefix}}phone_shop_invoice` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '发票id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员id',
  `trade_type` varchar(10) NOT NULL DEFAULT 'order' COMMENT '开票分类 order:订单',
  `trade_id` int(11) NOT NULL DEFAULT '0' COMMENT '业务id',
  `header_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '抬头类型',
  `header_name` varchar(100) NOT NULL DEFAULT '' COMMENT '名称（发票抬头）',
  `type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '发票类型',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '发票内容',
  `tax_number` varchar(50) NOT NULL DEFAULT '' COMMENT '公司税号',
  `mobile` varchar(30) NOT NULL DEFAULT '' COMMENT '开票人手机号',
  `email` varchar(100) NOT NULL DEFAULT '' COMMENT '开票人邮箱',
  `telephone` varchar(30) NOT NULL DEFAULT '' COMMENT '注册电话',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '注册地址',
  `bank_name` varchar(50) NOT NULL DEFAULT '' COMMENT '开户银行',
  `bank_card_number` varchar(50) NOT NULL DEFAULT '' COMMENT '银行账号',
  `money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '开票金额',
  `is_invoice` tinyint(4) NOT NULL DEFAULT '0' COMMENT '是否开票',
  `invoice_number` varchar(50) NOT NULL DEFAULT '' COMMENT '发票代码',
  `invoice_voucher` varchar(1000) NOT NULL DEFAULT '' COMMENT '发票凭证',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '备注',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '申请时间',
  `invoice_time` int(11) NOT NULL DEFAULT '0' COMMENT '开票时间',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '是否生效',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='发票表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order`;
CREATE TABLE `{{prefix}}phone_shop_order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `order_no` varchar(50) NOT NULL DEFAULT '' COMMENT '订单编号',
  `body` varchar(1000) NOT NULL DEFAULT '' COMMENT '订单内容',
  `order_type` varchar(55) NOT NULL DEFAULT '' COMMENT '订单类型',
  `order_from` varchar(55) NOT NULL DEFAULT '' COMMENT '订单来源',
  `out_trade_no` varchar(50) NOT NULL DEFAULT '' COMMENT '支付流水号',
  `status` varchar(55) NOT NULL DEFAULT '' COMMENT '订单状态',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员id',
  `ip` varchar(20) NOT NULL DEFAULT '' COMMENT 'ip',
  `goods_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品金额',
  `delivery_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '配送金额',
  `discount_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '优惠金额',
  `order_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单金额',
  `pay_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '支付金额',
  `invoice_id` int(11) NOT NULL DEFAULT '0' COMMENT '发票id，0表示不开发票',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `pay_time` int(11) NOT NULL DEFAULT '0' COMMENT '订单支付时间',
  `delivery_time` int(11) NOT NULL DEFAULT '0' COMMENT '订单发货时间',
  `take_time` int(11) NOT NULL DEFAULT '0' COMMENT '订单收货时间',
  `finish_time` int(11) NOT NULL DEFAULT '0' COMMENT '订单完成时间',
  `close_time` int(11) NOT NULL DEFAULT '0' COMMENT '订单关闭时间',
  `delete_time` int(11) NOT NULL DEFAULT '0' COMMENT '是否删除(针对后台)',
  `timeout` int(11) NOT NULL DEFAULT '0' COMMENT '通用业务超时时间记录',
  `delivery_type` varchar(255) NOT NULL DEFAULT '' COMMENT '配送方式',
  `take_store_id` int(11) NOT NULL DEFAULT '0' COMMENT '自提点',
  `taker_name` varchar(500) NOT NULL DEFAULT '' COMMENT '收货人',
  `taker_mobile` varchar(50) NOT NULL DEFAULT '' COMMENT '收货人手机号',
  `taker_province` int(11) NOT NULL DEFAULT '0' COMMENT '收货省',
  `taker_city` int(11) NOT NULL DEFAULT '0' COMMENT '收货市',
  `taker_district` int(11) NOT NULL DEFAULT '0' COMMENT '收货区县',
  `taker_address` varchar(1000) NOT NULL DEFAULT '' COMMENT '收货地址',
  `taker_full_address` varchar(1000) NOT NULL DEFAULT '' COMMENT '收货详细地址',
  `taker_longitude` varchar(50) NOT NULL DEFAULT '' COMMENT '收货地址经度',
  `taker_latitude` varchar(50) NOT NULL DEFAULT '' COMMENT '收货详细纬度',
  `taker_store_id` varchar(50) NOT NULL DEFAULT '' COMMENT '收货门店',
  `is_enable_refund` int(11) NOT NULL DEFAULT '0' COMMENT '是否允许退款',
  `member_remark` varchar(50) NOT NULL DEFAULT '' COMMENT '会员留言信息',
  `{{prefix}}phone_shop_remark` varchar(255) NOT NULL DEFAULT '' COMMENT '商家留言',
  `close_remark` varchar(255) NOT NULL DEFAULT '' COMMENT '关闭原因',
  `close_type` varchar(255) NOT NULL DEFAULT '' COMMENT '关闭来源(未支付自动关闭   手动关闭  退款关闭)',
  `refund_status` int(11) NOT NULL DEFAULT '1' COMMENT '退款状态  1不存在退款  2 部分退款  3 全部退款',
  `has_goods_types` varchar(255) NOT NULL DEFAULT '' COMMENT '包含的商品类型 json',
  `is_evaluate` int(11) NOT NULL DEFAULT '0' COMMENT '是否评论',
  `relate_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联id',
  `point` int(11) NOT NULL DEFAULT '0' COMMENT '积分兑换',
  `activity_type` varchar(255) NOT NULL DEFAULT '' COMMENT '营销类型',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_batch_delivery`;
CREATE TABLE `{{prefix}}phone_shop_order_batch_delivery` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `main_id` INT(11) NOT NULL DEFAULT 0 COMMENT '操作人id',
  `status` INT(11) NOT NULL DEFAULT 1 COMMENT '状态 进行中  已完成  已失败',
  `type` VARCHAR(255) NOT NULL DEFAULT '操作类型 批量发货  批量打单 ....' COMMENT '操作类型',
  `total_num` INT(11) NOT NULL DEFAULT 0 COMMENT '总发货单数',
  `success_num` INT(11) NOT NULL DEFAULT 0 COMMENT '成功发货单数',
  `fail_num` INT(11) NOT NULL DEFAULT 0 COMMENT '失败发货单数',
  `data` VARCHAR(2000) NOT NULL DEFAULT '' COMMENT '导入文件的路径',
  `output` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '对外输出记录',
  `fail_output` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '失败记录',
  `fail_remark` VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '失败原因',
  `create_time` INT(11) NOT NULL COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '操作时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单批量发货表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_delivery`;
CREATE TABLE `{{prefix}}phone_shop_order_delivery` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(50) NOT NULL DEFAULT '' COMMENT '包裹名称',
  `delivery_type` varchar(50) NOT NULL DEFAULT '' COMMENT '配送方式',
  `sub_delivery_type` varchar(50) NOT NULL DEFAULT '' COMMENT '详细配送方式',
  `express_company_id` int(11) NOT NULL DEFAULT '0' COMMENT '快递公司id',
  `express_number` varchar(50) NOT NULL DEFAULT '' COMMENT '配送单号',
  `local_deliver_id` int(11) NOT NULL DEFAULT '0' COMMENT '同城配送员',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '配送状态',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `remark` varchar(1000) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单发货表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_discount`;
CREATE TABLE `{{prefix}}phone_shop_order_discount` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单id',
  `order_goods_ids` varchar(255) NOT NULL DEFAULT '' COMMENT '参与的订单商品项',
  `type` varchar(255) NOT NULL DEFAULT '' COMMENT '类型 discount 优惠，gift 赠送',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '使用数量',
  `money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '优惠金额',
  `discount_type` varchar(255) NOT NULL DEFAULT '' COMMENT '优惠类型',
  `discount_type_id` int(11) NOT NULL DEFAULT '0' COMMENT '优惠类型id',
  `content` varchar(255) NOT NULL DEFAULT '' COMMENT '订单优惠说明',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `status` int(11) NOT NULL DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单优惠表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_discount_goods`;
CREATE TABLE `{{prefix}}phone_shop_order_discount_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_discount_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单优惠id',
  `order_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单id',
  `order_goods_id` varchar(255) NOT NULL DEFAULT '' COMMENT '参与的订单商品项',
  `type` varchar(255) NOT NULL DEFAULT '' COMMENT '类型 discount 优惠，gift 赠送',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '使用数量',
  `money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '优惠金额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单项优惠表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_goods`;
CREATE TABLE `{{prefix}}phone_shop_order_goods` (
  `order_goods_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单id',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '购买会员id',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品id',
  `sku_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品规格id',
  `sku_no` int(11) NOT NULL DEFAULT '0' COMMENT '商品编号',
  `goods_name` varchar(400) NOT NULL DEFAULT '' COMMENT '商品名称',
  `sku_name` varchar(400) NOT NULL DEFAULT '' COMMENT '商品规格名称',
  `goods_image` varchar(2000) NOT NULL DEFAULT '' COMMENT '商品图片',
  `sku_image` varchar(1000) NOT NULL COMMENT 'sku规格图片',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品单价',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '购买数量',
  `goods_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品总价',
  `is_enable_refund` int(11) NOT NULL DEFAULT '0' COMMENT '是否允许退款',
  `goods_type` varchar(255) NOT NULL DEFAULT '' COMMENT '商品类型',
  `delivery_status` varchar(255) NOT NULL DEFAULT '' COMMENT '配送状态',
  `delivery_id` int(11) NOT NULL DEFAULT '0' COMMENT '发货单号',
  `discount_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '优惠金额',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '状态',
  `order_refund_no` varchar(50) NOT NULL DEFAULT '' COMMENT '退款单号',
  `order_goods_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '订单项实付金额',
  `original_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品原价',
  `extend` varchar(1000) NOT NULL DEFAULT '' COMMENT '数据项扩展',
  `verify_count` int(11) NOT NULL DEFAULT '0' COMMENT '已核销次数',
  `verify_expire_time` int(11) NOT NULL DEFAULT '0' COMMENT '过期时间 0 为永久',
  `is_verify` int(11) NOT NULL DEFAULT '0' COMMENT '是否需要核销',
  PRIMARY KEY (`order_goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单项表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_log`;
CREATE TABLE `{{prefix}}phone_shop_order_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `order_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单id',
  `main_type` varchar(255) NOT NULL DEFAULT '操作人类型',
  `main_id` int(11) NOT NULL DEFAULT '0' COMMENT '操作人id',
  `status` int(11) DEFAULT NULL COMMENT '订单状态',
  `type` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) DEFAULT NULL COMMENT '日志内容',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单日志表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_refund`;
CREATE TABLE `{{prefix}}phone_shop_order_refund` (
  `refund_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `order_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单id',
  `order_goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '订单项id',
  `order_refund_no` varchar(255) NOT NULL DEFAULT '0' COMMENT '退款单号',
  `refund_type` varchar(255) NOT NULL DEFAULT '0' COMMENT '退款方式 ',
  `reason` varchar(255) NOT NULL DEFAULT '0' COMMENT '退款原因 ',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员id',
  `apply_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '申请退款',
  `money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '实际退款',
  `status` varchar(30) NOT NULL DEFAULT '0' COMMENT '退款状态',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `transfer_time` int(11) NOT NULL DEFAULT '0' COMMENT '转账时间',
  `remark` varchar(2000) NOT NULL DEFAULT '描述' COMMENT '描述',
  `voucher` varchar(2000) NOT NULL DEFAULT '凭证' COMMENT '凭证',
  `source` varchar(255) NOT NULL DEFAULT '' COMMENT '来源 system 系统 member 会员',
  `timeout` int(11) NOT NULL DEFAULT '0' COMMENT '操作超时时间',
  `refund_no` varchar(255) NOT NULL DEFAULT '' COMMENT '退款交易号',
  `delivery` varchar(500) NOT NULL DEFAULT '' COMMENT '退货配送信息',
  `{{prefix}}phone_shop_reason` varchar(255) NOT NULL DEFAULT '' COMMENT '上架拒绝原因',
  `refund_address` varchar(1000) NOT NULL DEFAULT '' COMMENT '商家退货地址',
  `is_refund_delivery` INT(11) NOT NULL DEFAULT 0 COMMENT '是否退运费',
  PRIMARY KEY (`refund_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单退款表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_refund_log`;
CREATE TABLE `{{prefix}}phone_shop_order_refund_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `order_refund_no` varchar(100) NOT NULL DEFAULT '' COMMENT '退款编号',
  `main_type` varchar(255) NOT NULL DEFAULT '操作人类型',
  `main_id` int(11) NOT NULL DEFAULT '0' COMMENT '操作人id',
  `status` int(11) DEFAULT NULL COMMENT '退款状态',
  `type` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) DEFAULT NULL COMMENT '日志内容',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='订单退款日志表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_point_exchange`;
CREATE TABLE `{{prefix}}phone_shop_point_exchange` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '兑换活动主键id',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `type` varchar(255) NOT NULL DEFAULT '' COMMENT '兑换类型（商品、优惠券、红包）',
  `names` varchar(255) NOT NULL DEFAULT '' COMMENT '兑换标题',
  `title` varchar(255) NOT NULL COMMENT '副标题',
  `image` text COMMENT '图片',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '兑换状态 0 下架  1上架  -1 删除',
  `product_detail` varchar(1000) NOT NULL DEFAULT '0' COMMENT '兑换产品信息',
  `point` int(11) NOT NULL DEFAULT '0' COMMENT '兑换所需积分',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '兑换所需金额',
  `limit_num` int(11) NOT NULL DEFAULT '0' COMMENT '限制数量',
  `content` text COMMENT '产品介绍',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '排序',
  `total_point_num` int(11) DEFAULT '0' COMMENT '积分消费总额',
  `total_price_num` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '总支付金额',
  `total_order_num` int(11) DEFAULT '0' COMMENT '订单笔数',
  `total_member_num` int(11) DEFAULT '0' COMMENT '参与会员数',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `stock` int(11) NOT NULL DEFAULT '0' COMMENT '库存',
  `total_exchange_num` int(11) NOT NULL DEFAULT '0' COMMENT '兑换数量',
  PRIMARY KEY (`id`,`total_price_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='积分兑换表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_point_exchange_order`;
CREATE TABLE `{{prefix}}phone_shop_point_exchange_order` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '兑换记录id',
  `order_no` varchar(255) NOT NULL DEFAULT '' COMMENT '订单编号',
  `out_trade_no` varchar(255) NOT NULL DEFAULT '' COMMENT '支付流水表',
  `site_id` int(11) NOT NULL COMMENT '站点id',
  `exchange_id` int(11) NOT NULL DEFAULT '0' COMMENT '兑换活动id',
  `exchange_name` varchar(255) NOT NULL DEFAULT '' COMMENT '兑换商品名称',
  `exchange_image` varchar(600) NOT NULL DEFAULT '' COMMENT '兑换商品图片',
  `type` varchar(50) NOT NULL DEFAULT '' COMMENT '兑换类型',
  `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '消费会员id',
  `member_address_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员地址id',
  `relate_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联业务id',
  `relate_order_id` int(11) NOT NULL DEFAULT '0' COMMENT '关联订单id',
  `point` int(11) NOT NULL DEFAULT '0' COMMENT '使用积分',
  `price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '支付金额',
  `balance` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '赠送余额',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `pay_time` int(11) NOT NULL DEFAULT '0' COMMENT '兑换时间',
  `close_time` int(11) NOT NULL DEFAULT '0' COMMENT '关闭时间',
  `delete_time` int(11) NOT NULL DEFAULT '0' COMMENT '订单删除',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '兑换数量',
  `status` varchar(50) NOT NULL DEFAULT '' COMMENT '订单状态',
  `order_money` decimal(10,2) NOT NULL COMMENT '订单金额',
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='积分兑换订单表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_stat`;
CREATE TABLE `{{prefix}}phone_shop_stat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `date` varchar(255) NOT NULL DEFAULT '' COMMENT '日期',
  `date_time` int(11) NOT NULL DEFAULT '0' COMMENT '时间戳',
  `order_num` int(11) NOT NULL DEFAULT '0' COMMENT '订单总数',
  `sale_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '销售总额',
  `refund_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '退款总额',
  `access_sum` int(11) NOT NULL DEFAULT '0' COMMENT '访问数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci;


DROP TABLE IF EXISTS `{{prefix}}phone_shop_store`;
CREATE TABLE `{{prefix}}phone_shop_store` (
  `store_id` int(11) NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
  `store_name` varchar(255) NOT NULL DEFAULT '' COMMENT '门店名称',
  `store_desc` varchar(3000) NOT NULL DEFAULT '' COMMENT '简介',
  `store_logo` varchar(255) NOT NULL DEFAULT '' COMMENT '门店logo',
  `store_mobile` varchar(255) NOT NULL DEFAULT '' COMMENT '手机号',
  `province_id` int(11) NOT NULL DEFAULT '0' COMMENT '省id',
  `city_id` int(11) NOT NULL DEFAULT '0' COMMENT '市',
  `district_id` int(11) NOT NULL DEFAULT '0' COMMENT '县（区）',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
  `full_address` varchar(255) NOT NULL DEFAULT '' COMMENT '完整地址',
  `longitude` varchar(255) NOT NULL DEFAULT '' COMMENT '经度',
  `latitude` varchar(255) NOT NULL DEFAULT '' COMMENT '纬度',
  `trade_time` varchar(255) NOT NULL DEFAULT '' COMMENT '营业时间',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '添加时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`store_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='自提门店表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_active`;
CREATE TABLE `{{prefix}}phone_shop_active` (
  `active_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '活动id',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `active_name` varchar(255) NOT NULL DEFAULT '' COMMENT '活动名称',
  `active_desc` text COMMENT '活动说明',
  `active_type` varchar(255) NOT NULL DEFAULT '' COMMENT '活动类型(店铺活动，会员活动，商品活动)',
  `active_goods_type` varchar(255) NOT NULL DEFAULT '' COMMENT '商品活动类型（单品，独立商品，店铺整体商品）',
  `active_goods_info` text COMMENT '参与活动商品信息',
  `active_class` varchar(255) NOT NULL DEFAULT '' COMMENT '活动类别',
  `active_class_category` varchar(255) NOT NULL DEFAULT '' COMMENT '活动类别子分类（活动管理）',
  `relate_member` varchar(1000) NOT NULL DEFAULT '' COMMENT '参与会员条件(默认全部)',
  `active_value` text COMMENT '活动扩展信息数据',
  `start_time` int(11) NOT NULL DEFAULT '0' COMMENT '活动开始时间',
  `end_time` int(11) NOT NULL DEFAULT '0' COMMENT '活动结束时间',
  `active_status` varchar(50) NOT NULL DEFAULT '' COMMENT '活动状态',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '添加时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '修改时间',
  `active_order_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '活动累计金额',
  `active_order_num` int(11) NOT NULL DEFAULT '0' COMMENT '活动累计订单数',
  `active_member_num` int(11) NOT NULL DEFAULT '0' COMMENT '活动参与会员数',
  `active_success_num` int(11) NOT NULL DEFAULT '0' COMMENT '活动成功参与会员数',
  PRIMARY KEY (`active_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='店铺营销活动表（整体活动）';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_active_goods`;
CREATE TABLE `{{prefix}}phone_shop_active_goods` (
  `active_goods_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '活动商品id',
  `active_id` int(11) NOT NULL DEFAULT '0' COMMENT '活动id',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `goods_id` int(11) NOT NULL DEFAULT '0' COMMENT '商品id',
  `active_goods_type` varchar(255) NOT NULL DEFAULT '' COMMENT '商品活动类型（单品，独立商品，店铺整体商品）',
  `active_class` varchar(255) NOT NULL DEFAULT '' COMMENT '商品活动类别',
  `active_goods_label` varchar(1000) NOT NULL DEFAULT '' COMMENT '活动商品标签（针对活动有标签）',
  `active_goods_category` varchar(1000) NOT NULL DEFAULT '' COMMENT '活动商品分类（针对活动有分类）',
  `active_goods_value` text COMMENT '活动商品信息数据',
  `active_goods_status` varchar(50) NOT NULL DEFAULT '' COMMENT '活动状态',
  `active_goods_point` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '活动商品积分（展示，搜索）',
  `active_goods_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '活动商品价格（展示，搜索）',
  `active_goods_stock` int(11) NOT NULL DEFAULT '0' COMMENT '活动商品库存（针对参与库存）',
  `active_goods_order_money` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '活动累计金额',
  `active_goods_order_num` int(11) NOT NULL DEFAULT '0' COMMENT '活动累计订单数',
  `active_goods_member_num` int(11) NOT NULL DEFAULT '0' COMMENT '活动参与会员数',
  `active_goods_success_num` int(11) NOT NULL DEFAULT '0' COMMENT '活动成功参与会员数',
  PRIMARY KEY (`active_goods_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='店铺营销活动';


-- ALTER TABLE `{{prefix}}phone_shop_order_goods` ADD `original_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '商品原价';

ALTER TABLE `{{prefix}}phone_shop_order` CHANGE COLUMN taker_name taker_name VARCHAR(500) NOT NULL DEFAULT '' COMMENT '收货人';

ALTER TABLE `{{prefix}}phone_shop_order` CHANGE COLUMN taker_address taker_address VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '收货地址';

ALTER TABLE `{{prefix}}phone_shop_order` CHANGE COLUMN taker_full_address taker_full_address VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '收货详细地址';

ALTER TABLE `{{prefix}}phone_shop_invoice` MODIFY COLUMN invoice_voucher VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '发票凭证';

drop table if exists `{{prefix}}phone_shop_goods_attr`;
CREATE TABLE `{{prefix}}phone_shop_goods_attr` (
  `attr_id` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品参数id',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
  `attr_name` varchar(255) NOT NULL DEFAULT '' COMMENT '参数名称',
  `attr_value_format` text COMMENT '参数值，json格式',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '参数排序号',
  PRIMARY KEY (`attr_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品参数表';








ALTER TABLE `{{prefix}}phone_shop_point_exchange` CHANGE COLUMN `product_detail` `product_detail` TEXT DEFAULT NULL COMMENT '兑换产品信息';

DROP TABLE IF EXISTS `{{prefix}}phone_shop_order_batch_delivery`;
CREATE TABLE `{{prefix}}phone_shop_order_batch_delivery` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `main_id` INT(11) NOT NULL DEFAULT 0 COMMENT '操作人id',
  `status` INT(11) NOT NULL DEFAULT 1 COMMENT '状态 进行中  已完成  已失败',
  `type` VARCHAR(255) NOT NULL DEFAULT '操作类型 批量发货  批量打单 ....' COMMENT '操作类型',
  `total_num` INT(11) NOT NULL DEFAULT 0 COMMENT '总发货单数',
  `success_num` INT(11) NOT NULL DEFAULT 0 COMMENT '成功发货单数',
  `fail_num` INT(11) NOT NULL DEFAULT 0 COMMENT '失败发货单数',
  `data` VARCHAR(2000) NOT NULL DEFAULT '' COMMENT '导入文件的路径',
  `output` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '对外输出记录',
  `fail_output` VARCHAR(500) NOT NULL DEFAULT '' COMMENT '失败记录',
  `fail_remark` VARCHAR(1000) NOT NULL DEFAULT '' COMMENT '失败原因',
  `create_time` INT(11) NOT NULL COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '操作时间',
  PRIMARY KEY (`id`)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = '订单批量发货表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_delivery_electronic_sheet`;
CREATE TABLE `{{prefix}}phone_shop_delivery_electronic_sheet` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `template_name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '模板名称',
  `express_company_id` INT(11) NOT NULL DEFAULT 0 COMMENT '物流公司id',
  `customer_name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '电子面单客户账号（CustomerName）',
  `customer_pwd` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '电子面单密码（CustomerPwd）',
  `send_site` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SendSite',
  `send_staff` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SendStaff',
  `month_code` VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'MonthCode',
  `pay_type` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '邮费支付方式（1：现付，2：到付，3：月结）',
  `is_notice` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '快递员上门揽件（0：否，1：是）',
  `status` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '状态（1：开启，0：关闭）',
  `exp_type` INT(11) NOT NULL DEFAULT 0 COMMENT '物流公司业务类型',
  `print_style` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '电子面单打印模板样式',
  `is_default` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '是否默认（1：是，0：否）',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间',
  PRIMARY KEY (`id`)
)
ENGINE = INNODB,
CHARACTER SET utf8mb4,
COLLATE utf8mb4_general_ci,
COMMENT = '电子面单';

ALTER TABLE `{{prefix}}phone_shop_delivery_company` CHANGE COLUMN `express_no` `express_no` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '物流公司编号(用于物流跟踪)';



DROP TABLE IF EXISTS `{{prefix}}phone_shop_newcomer_member_records`;
CREATE TABLE `{{prefix}}phone_shop_newcomer_member_records` (
  `record_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `validity_time` INT(11) NOT NULL DEFAULT 0 COMMENT '有效期',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '参与时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
  `is_join` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '是否参与',
  `order_id` INT(11) NOT NULL DEFAULT 0 COMMENT '参与订单id',
  `goods_ids` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '参与商品id集合',
  `sku_ids` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '参与商品规格id集合',
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='新人专享会员参与记录表';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `goods_video` VARCHAR(555) DEFAULT '' COMMENT '商品视频';

ALTER TABLE `{{prefix}}phone_shop_goods` MODIFY `goods_video` VARCHAR(555) DEFAULT '' COMMENT '商品视频' AFTER `goods_image`;

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `time_is_open` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '配送时间设置 0 关闭 1 开启';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `time_type` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '时间选取类型 0 每天  1 自定义';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `time_week` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '营业时间  周一 周二.......';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `time_interval` INT(11) NOT NULL DEFAULT 30 COMMENT '时段设置单位分钟';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `advance_day` INT(11) NOT NULL DEFAULT 0 COMMENT '时间选择需提前多少天';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `most_day` INT(11) NOT NULL DEFAULT 7 COMMENT '最多可预约多少天';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `start_time` INT(11) NOT NULL DEFAULT 0 COMMENT '当日的起始时间';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `end_time` INT(11) NOT NULL DEFAULT 0 COMMENT '当日的营业结束时间';

ALTER TABLE `{{prefix}}phone_shop_delivery_local_delivery` ADD COLUMN `delivery_time` VARCHAR(2000) NOT NULL DEFAULT '' COMMENT '配送时间段';

ALTER TABLE `{{prefix}}phone_shop_active_goods` ADD COLUMN `sku_id` INT(11) DEFAULT 0 COMMENT '商品规格id';

ALTER TABLE `{{prefix}}phone_shop_active_goods` MODIFY `sku_id` INT(11) DEFAULT 0 COMMENT '商品规格id' AFTER `goods_id`;

DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_label_group`;
CREATE TABLE `{{prefix}}phone_shop_goods_label_group` (
  group_id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '分组ID',
  site_id INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  group_name VARCHAR(255) NOT NULL DEFAULT '' COMMENT '分组名称',
  sort INT(11) NOT NULL DEFAULT 0 COMMENT '排序',
  create_time INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  update_time INT(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (group_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品标签分组表';

ALTER TABLE `{{prefix}}phone_shop_goods_label` ADD COLUMN `group_id` INT(11) NOT NULL DEFAULT 0 COMMENT '标签分组id';

ALTER TABLE `{{prefix}}phone_shop_goods_label` ADD COLUMN `style_type` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '效果设置，diy：自定义，icon：图片';

ALTER TABLE `{{prefix}}phone_shop_goods_label` ADD COLUMN `color_json` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '自定义颜色（文字、背景、边框），json格式';

ALTER TABLE `{{prefix}}phone_shop_goods_label` ADD COLUMN `icon` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '图标';

ALTER TABLE `{{prefix}}phone_shop_goods_label` ADD COLUMN status INT(11) NOT NULL DEFAULT 0 COMMENT '状态，1：启用，0；关闭';

ALTER TABLE `{{prefix}}phone_shop_goods_label` MODIFY `memo` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '标签说明' AFTER `status`;

ALTER TABLE `{{prefix}}phone_shop_goods_label` MODIFY `sort` INT(11) NOT NULL DEFAULT 0 COMMENT '排序' AFTER `memo`;

ALTER TABLE `{{prefix}}phone_shop_goods_label` MODIFY `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间' AFTER `sort`;

ALTER TABLE `{{prefix}}phone_shop_goods_label` MODIFY `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '更新时间' AFTER `create_time`;

DROP TABLE IF EXISTS `{{prefix}}phone_shop_site`;
CREATE TABLE `{{prefix}}phone_shop_site` (
  `id` int NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL COMMENT '站点id',
  `site_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '商户名',
  `client` tinyint NOT NULL DEFAULT '0' COMMENT '是否是回收商 默认0 , 1是',
  `category_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点分类',
  `brand_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点品牌',
  `label_group_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点标签分组',
  `label_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点的标签',
  `service_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点的服务信息',
  `price_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点的回收价格',
  `memory_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点的内存规格',
  `memory_group_status` tinyint NOT NULL DEFAULT '1' COMMENT '是否使用0站点的内存分组',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
drop TABLE if exists `{{prefix}}phone_shop_recycler`;
CREATE TABLE `{{prefix}}phone_shop_recycler` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点ID',
  `contact_name` varchar(50) NOT NULL DEFAULT '' COMMENT '联系人',
  `contact_mobile` varchar(20) NOT NULL DEFAULT '' COMMENT '联系电话',
  `province_id` int(11) NOT NULL DEFAULT '0' COMMENT '省份ID',
  `city_id` int(11) NOT NULL DEFAULT '0' COMMENT '城市ID',
  `district_id` int(11) NOT NULL DEFAULT '0' COMMENT '区县ID',
  `address` varchar(255) NOT NULL DEFAULT '' COMMENT '详细地址',
  `area` varchar(255) NOT NULL DEFAULT '' COMMENT '地区',
  `full_address` varchar(255) NOT NULL DEFAULT '' COMMENT '完整地址',
  `category` text COMMENT '经营品类ID，多个用逗号分隔',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态（1：启用，0：禁用）',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_site_id` (`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='回收商信息表';
drop TABLE`{{prefix}}phone_shop_recycler_price_config`;
CREATE TABLE `{{prefix}}phone_shop_recycler_price_config` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点ID',
  `recycler_id` int(11) NOT NULL DEFAULT '0' COMMENT '回收商ID',
  `price_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '加价类型（1：统一加价，2：区间加价）',
  `member_markup` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '会员加价比例',
  `non_member_markup` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '非会员加价比例',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_site_recycler` (`site_id`, `recycler_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='回收商价格配置表';
drop TABLE if exists `{{prefix}}phone_shop_recycler_price_range`;
CREATE TABLE `{{prefix}}phone_shop_recycler_price_range` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `config_id` int(11) NOT NULL DEFAULT '0' COMMENT '价格配置ID',
  `min_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '最小价格',
  `max_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '最大价格',
  `member_markup` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '加价比例',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  KEY `idx_config_id` (`config_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='回收商价格区间表';
drop TABLE if exists `{{prefix}}phone_shop_goods_proxy`;
CREATE TABLE `{{prefix}}phone_shop_goods_proxy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `goods_id` int(11) NOT NULL COMMENT '商品ID',
  `source_site_id` int(11) NOT NULL COMMENT '来源站点ID',
  `site_id` int(11) NOT NULL COMMENT '代理站点ID',
  `markup_type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '加价类型（1：固定金额 2：区间加价）',
  `markup_value` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '加价值',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态（0：禁用 1：启用）',
  `create_time` int(11) NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT '0' COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_goods_site` (`goods_id`, `site_id`),
  KEY `idx_source_site` (`source_site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品代理关系表';
drop TABLE if exists `{{prefix}}phone_shop_site_agent`;
CREATE TABLE `{{prefix}}phone_shop_site_agent` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点ID（代理商）',
  `agent_site_id` int(11) NOT NULL DEFAULT '0' COMMENT '被代理的站点ID',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态（1：启用，0：禁用）',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商户代理关系表';






-- 内存规格分组表
drop TABLE if exists `{{prefix}}phone_shop_memory_group`;
CREATE TABLE `{{prefix}}phone_shop_memory_group` (
  `group_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '分组ID',
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `group_name` varchar(50) NOT NULL DEFAULT '' COMMENT '分组名称,如iPhone系列、安卓系列等',
  `memory_ids` varchar(255) NOT NULL DEFAULT '' COMMENT '内存规格id集合',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
  PRIMARY KEY (`group_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='内存规格分组表';
-- 内存规格表
drop TABLE if exists `{{prefix}}phone_shop_memory_spec`;
CREATE TABLE `{{prefix}}phone_shop_memory_spec` (
  `spec_id` int(11) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT '规格ID',
  `site_id` int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `spec_name` varchar(50) NOT NULL DEFAULT '' COMMENT '规格名称,如64G、8+128G等',
  `sort` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` int(11) NOT NULL DEFAULT 0 COMMENT '更新时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='内存规格表';


DROP TABLE IF EXISTS `{{prefix}}phone_shop_goods_stat`;
CREATE TABLE `{{prefix}}phone_shop_goods_stat` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `date` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '日期',
  `date_time` INT(11) NOT NULL DEFAULT 0 COMMENT '时间戳',
  `goods_id` INT(11) NOT NULL DEFAULT 0 COMMENT '商品id',
  `cart_num` INT(11) NOT NULL DEFAULT 0 COMMENT '加入购物车数量',
  `sale_num` INT(11) NOT NULL DEFAULT 0 COMMENT '商品销量（下单数）',
  `pay_num` INT(11) NOT NULL DEFAULT 0 COMMENT '支付件数',
  `pay_money` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '支付总金额',
  `refund_num` INT(11) NOT NULL DEFAULT 0 COMMENT '退款件数',
  `refund_money` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '退款总额',
  `access_num` INT(11) NOT NULL DEFAULT 0 COMMENT '访问次数（浏览量）',
  `collect_num` INT(11) NOT NULL DEFAULT 0 COMMENT '收藏数量',
  `evaluate_num` INT(11) NOT NULL DEFAULT 0 COMMENT '评论数量',
  `goods_visit_member_count` INT(11) NOT NULL DEFAULT 0 COMMENT '商品访客数',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='商品数据统计';


ALTER TABLE `{{prefix}}phone_shop_order_goods` ADD COLUMN `{{prefix}}phone_shop_active_refund` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '商家主动退款（0否  1是）';

ALTER TABLE `{{prefix}}phone_shop_order_goods` ADD COLUMN `{{prefix}}phone_shop_active_refund_money` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '商家主动退款金额';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `is_limit` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '商品是否限购(0:否 1:是)';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `limit_type` TINYINT(4) NOT NULL DEFAULT 1 COMMENT '限购类型，1：单次限购，2：单人限购';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `max_buy` INT(11) NOT NULL DEFAULT 0 COMMENT '限购数';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `min_buy` INT(11) NOT NULL DEFAULT 0 COMMENT '起购数';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `is_gift` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '商品是否赠品(0:否 1:是)';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `access_num` INT(11) NOT NULL DEFAULT 0 COMMENT '访问次数（浏览量）';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `cart_num` INT(11) NOT NULL DEFAULT 0 COMMENT '加入购物车数量';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `pay_num` INT(11) NOT NULL DEFAULT 0 COMMENT '支付件数';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `pay_money` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '支付总金额';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `collect_num` INT(11) NOT NULL DEFAULT 0 COMMENT '收藏数量';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `evaluate_num` INT(11) NOT NULL DEFAULT 0 COMMENT '评论数量';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `refund_num` INT(11) NOT NULL DEFAULT 0 COMMENT '退款件数';

ALTER TABLE `{{prefix}}phone_shop_goods` ADD COLUMN `refund_money` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '退款总额';


ALTER TABLE `{{prefix}}phone_shop_goods`  ADD COLUMN `memory_group_id` int(11) NOT NULL DEFAULT 0 COMMENT '内存分组ID' AFTER `brand_id`;

ALTER TABLE `{{prefix}}phone_shop_goods`  ADD COLUMN `memory_ids` int(11) COMMENT '内存规格值,如64G、8+128G等' AFTER `memory_group_id`;

ALTER TABLE `{{prefix}}phone_shop_goods` MODIFY `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间' AFTER `refund_money`;

ALTER TABLE `{{prefix}}phone_shop_goods` MODIFY `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间' AFTER `create_time`;

ALTER TABLE `{{prefix}}phone_shop_goods` MODIFY `delete_time` INT(11) NOT NULL DEFAULT 0 COMMENT '删除时间' AFTER `update_time`;