DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_category`;
CREATE TABLE `{{prefix}}phone_shop_recycle_category` (
  `category_id` int NOT NULL AUTO_INCREMENT COMMENT '商品分类id',
  `site_id` int NOT NULL DEFAULT '0' COMMENT '站点id',
  `category_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '分类名称',
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '分类图片',
  `level` int NOT NULL DEFAULT '0' COMMENT '层级',
  `pid` int NOT NULL DEFAULT '0' COMMENT '上级分类id',
  `category_full_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '组装分类名称',
  `is_show` tinyint NOT NULL DEFAULT '1' COMMENT '是否显示（1：显示，0：不显示）',
  `sort` int NOT NULL DEFAULT '0' COMMENT '排序号',
  `create_time` int NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int NOT NULL DEFAULT '0' COMMENT '修改时间',
  `images` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机报价的图片',
  `need_vip` tinyint NOT NULL DEFAULT '0' COMMENT '是否需要VIP',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='报价分类表';


-- 创建收款方式信息表
DROP TABLE IF EXISTS `{{prefix}}phone_shop_payment_info`;
CREATE TABLE IF NOT EXISTS `{{prefix}}phone_shop_payment_info` (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `member_id` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '会员ID',
    `pay_type` varchar(50) NOT NULL DEFAULT '' COMMENT '收款方式',
    `account` varchar(255) NOT NULL DEFAULT '' COMMENT '收款账号',
    `qrcode_image` varchar(255) NOT NULL DEFAULT '' COMMENT '收款码图片',
    `is_default` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否默认(0-否,1-是)',
    `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
    `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
    PRIMARY KEY (`id`),
    KEY `idx_member_id` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='收款方式信息表';

SET FOREIGN_KEY_CHECKS = 1;
-- 删除旧表（如果存在）

-- 创建回收订单主表
DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_order`;
CREATE TABLE `{{prefix}}phone_shop_recycle_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_no` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '订单号',
  `member_id` int NOT NULL COMMENT '用户ID',
  `site_id` int NOT NULL COMMENT '站点 id',
  `count` int NOT NULL DEFAULT '0' COMMENT '设备数量',
  `express_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '快递单号',
  `send_username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '寄件人',
  `telphone` char(11) COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号',
  `pay_type` enum('微信','支付宝','银行卡') COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收款方式',
  `account` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '收款账号',
  `delivery_type` varchar(20) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'mail' COMMENT '发货方式：mail-邮寄，self-自送',
  `return_type` varchar(20) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'self' COMMENT '退货方式：self-自取，mail-邮寄',
  `qrcode_image` varchar(255) COLLATE utf8mb4_general_ci DEFAULT '' COMMENT '收款码图片',
  `return_address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT '' COMMENT '退货地址',
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT '1' COMMENT '订单状态:1待签收,2待质检,3质检中,4质检完成,5订单完成,-1已取消',
  `create_at` int DEFAULT NULL COMMENT '创建时间',
  `update_at` int DEFAULT NULL COMMENT '更新时间',
  `delete_at` int DEFAULT NULL COMMENT '删除时间',
  `over_at` int DEFAULT NULL COMMENT '订单结束时间',
  `comment` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  `close_express_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '退货单号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_order_no` (`order_no`),
  KEY `idx_member_site` (`member_id`,`site_id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='回收订单主表';

-- 创建退货单表
DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_return`;
CREATE TABLE `{{prefix}}phone_shop_recycle_return` (
  `id` int NOT NULL AUTO_INCREMENT,
  `return_no` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '退货单号',
  `order_id` int NOT NULL COMMENT '关联订单ID',
  `device_id` int NOT NULL COMMENT '关联设备ID',
  `site_id` int NOT NULL COMMENT '站点 id',
  `member_id` int NOT NULL COMMENT '用户ID',
  `return_type` varchar(20) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'self' COMMENT '退货方式：self-自取，mail-邮寄',
  `express_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '快递单号',
  `express_company` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '快递公司',
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT '' COMMENT '退货地址',
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'init' COMMENT '退货状态:init-初始化,waiting_sign-待签收,delivering-发货中,delivered-已发货,completed-已完成',
  `create_at` int DEFAULT NULL COMMENT '创建时间',
  `update_at` int DEFAULT NULL COMMENT '更新时间',
  `complete_at` int DEFAULT NULL COMMENT '完成时间',
  `comment` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_return_no` (`return_no`),
  KEY `idx_order_device` (`order_id`,`device_id`),
  KEY `idx_member_site` (`member_id`,`site_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='回收退货单表';

-- ----------------------------
-- Table structure for sass_phone_shop_recycle_order_device
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_order_device`;
CREATE TABLE `{{prefix}}phone_shop_recycle_order_device` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_id` int NOT NULL COMMENT '订单ID',
  `imei` varchar(50) COLLATE utf8mb4_general_ci NOT NULL COMMENT 'IMEI号码',
  `model` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '待识别' COMMENT '设备型号',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态：1-正常，2-已退回',
  `check_status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '验机状态：0-未验机，1-验机中，2-验机完成',
  `check_result` text COLLATE utf8mb4_general_ci COMMENT '验机详情',
  `check_images` text COLLATE utf8mb4_general_ci COMMENT '验机图片',
  `initial_price` decimal(10,2) DEFAULT '0.00' COMMENT '初始报价',
  `final_price` decimal(10,2) DEFAULT '0.00' COMMENT '最终报价',
  `price_remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '' COMMENT '报价备注',
  `remark` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `create_at` int DEFAULT NULL COMMENT '创建时间',
  `update_at` int DEFAULT NULL COMMENT '更新时间',
  `check_at` int DEFAULT NULL COMMENT '验机时间',
  `site_id` int NOT NULL COMMENT '站点 id',
  PRIMARY KEY (`id`),
  KEY `idx_order_id` (`order_id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='回收订单设备表';



-- 回收分类配置表
-- id , site_id, is_enable ,create_at , update_at
-- 创建sql
DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_category_config`;
CREATE TABLE `{{prefix}}phone_shop_recycle_category_config` (
  `id` int NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL COMMENT '站点id',
  `is_enable` tinyint NOT NULL DEFAULT '1' COMMENT '是否启用',
  `create_at` int NOT NULL COMMENT '创建时间',
  `update_at` int NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='回收分类配置表';


-- 回收banner表
DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_banner`;
CREATE TABLE `{{prefix}}phone_shop_recycle_banner` (
  `id` int NOT NULL AUTO_INCREMENT,
  `site_id` int NOT NULL COMMENT '站点id',
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '图片',
  `create_at` int NOT NULL COMMENT '创建时间',
  `update_at` int NOT NULL COMMENT '更新时间',
  `delete_time` int NOT NULL COMMENT '删除时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='回收banner表';
