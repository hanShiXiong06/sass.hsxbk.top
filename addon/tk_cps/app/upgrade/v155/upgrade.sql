DROP TABLE IF EXISTS `cps_act_order`;
CREATE TABLE `cps_act_order`
(
    `id`          int(11) NOT NULL AUTO_INCREMENT,
    `sid`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '跟单参数',
    `site_id`     int(11) NOT NULL COMMENT '站点id',
    `member_id`   varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '会员id',
    `name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单别称',
    `chanel`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '渠道',
    `order_id`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单号',
    `pay_money`   decimal(13, 2) NULL DEFAULT NULL COMMENT '支付金额',
    `rate`        varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '结算比列',
    `commission`  decimal(13, 2) NULL DEFAULT NULL COMMENT '结算佣金',
    `status`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态',
    `status_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态名称',
    `jl_js`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '激励结算',
    `pt_js`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '平台结算',
    `create_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建时间',
    `pay_time`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '支付时间',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX         `id`(`id`, `site_id`, `member_id`, `name`, `order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 62 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'CPS活动订单' ROW_FORMAT = DYNAMIC;

DROP TABLE IF EXISTS `cps_site`;
CREATE TABLE `cps_site`
(
    `id`       int(11) NOT NULL AUTO_INCREMENT,
    `site_id`  int(11) NOT NULL COMMENT '站点id',
    `site_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点key',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX      `id`(`id`, `site_key`, `site_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 25 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '站点对应跟单参数' ROW_FORMAT = DYNAMIC;


