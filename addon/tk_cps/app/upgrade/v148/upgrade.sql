
CREATE TABLE `cps_fenxiao_member`
(
    `member_id`         int UNSIGNED NOT NULL DEFAULT 0 COMMENT '会员id',
    `site_id`           int NOT NULL DEFAULT 0 COMMENT '站点id',
    `pid`               int NULL DEFAULT 0 COMMENT '推荐会员id(分销)',
    `fenxiao_member_id` int NULL DEFAULT 0 COMMENT '会员上级分销商会员id',
    `is_fenxiao`        tinyint NULL DEFAULT 0 COMMENT '是否是分销商',
    `bind_time`         int NULL DEFAULT 0 COMMENT '绑定时间',
    `create_time`       int NULL DEFAULT 0 COMMENT '创建时间',
    PRIMARY KEY (`member_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

CREATE TABLE `cps_fenxiao_order`
(
    `id`               int NOT NULL AUTO_INCREMENT COMMENT 'id',
    `member_id`        int UNSIGNED NOT NULL DEFAULT 0 COMMENT '会员id',
    `site_id`          int NOT NULL DEFAULT 0 COMMENT '站点id',
    `order_id`         varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '会员id',
    `type`             varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '类型',
    `state`            int NULL DEFAULT NULL COMMENT '订单状态',
    `first_commission` decimal(10, 2) NULL DEFAULT NULL COMMENT '一级佣金',
    `two_commission`   decimal(10, 2) NULL DEFAULT NULL COMMENT '二级佣金',
    `status`           varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态',
    `create_time`      int NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time`      int NULL DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;
