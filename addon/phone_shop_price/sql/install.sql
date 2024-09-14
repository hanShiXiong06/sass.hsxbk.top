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