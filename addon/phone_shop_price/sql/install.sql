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

DROP TABLE IF EXISTS `{{prefix}}phone_shop_recycle_order`;
CREATE TABLE `{{prefix}}phone_shop_recycle_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NOT NULL COMMENT '用户ID',
  `site_id` int NOT NULL COMMENT '站点 id',
  `count` int NOT NULL COMMENT '数量',
  `express_id` int NOT NULL COMMENT '快递单号',
  `send_username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '寄件人',
  `telphone` char(11) COLLATE utf8mb4_general_ci NOT NULL COMMENT '手机号',
  `pay_type` enum('微信','支付宝','银行卡') COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '收款方式',
  `account` varchar(255) COLLATE utf8mb4_general_ci NOT NULL COMMENT '收款账号',
  `status` varchar(255) COLLATE utf8mb4_general_ci DEFAULT '1' COMMENT '订单状态 , 1 是 待签收 2 待质检 3.  质检中 4. 质检完成  5. 订单完成 6. 有退货 7 全部退货',
  `create_at` int DEFAULT NULL COMMENT '创建时间',
  `over_at` int DEFAULT NULL COMMENT '订单结束时间',
  `comment` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '备注',
  `close_express_id` int NOT NULL COMMENT '退货单号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

Alter table `{{prefix}}phone_shop_site` add  `price_status` tinyint default 0 ;