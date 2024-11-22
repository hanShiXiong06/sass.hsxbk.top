ALTER TABLE qfnotice_addon
    ADD COLUMN `email_content` longtext COMMENT '邮件内容',
    ADD COLUMN `email_title`   varchar(255) DEFAULT NULL COMMENT '标题',
    ADD COLUMN `email_desc`    varchar(255) DEFAULT NULL COMMENT '描述',
    ADD COLUMN `category_id`   int(11)      DEFAULT NULL COMMENT '应用分类',
    ADD COLUMN `status`        int(2)       DEFAULT '1' COMMENT '状态',
    ADD COLUMN `cat_id`        int(11)      DEFAULT NULL COMMENT '发送分类';


DROP TABLE IF EXISTS `qfnotice_category`;
CREATE TABLE `qfnotice_category`
(
    `id`          int(13)                                                       NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `site_id`     int(11)                                                       NOT NULL COMMENT '站点ID',
    `name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称',
    `create_time` int(13)                                                       NULL DEFAULT NULL COMMENT '创建实际',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 4
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '应用分类'
  ROW_FORMAT = Dynamic;

DROP TABLE IF EXISTS `qfnotice_user`;
CREATE TABLE `qfnotice_user`
(
    `id`          int(13)                                                       NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `site_id`     int(11)                                                       NULL DEFAULT NULL COMMENT '站点ID',
    `cat_id`      int(11)                                                       NULL DEFAULT NULL COMMENT '分类ID',
    `nickname`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '昵称',
    `headimg`     varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '头像',
    `config_id`   int(11) UNSIGNED ZEROFILL                                     NULL DEFAULT 00000000000 COMMENT '配置ID',
    `mobile`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '电话',
    `openid`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'openid',
    `unionid`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'unionid',
    `email`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
    `num`         int(11)                                                       NULL DEFAULT NULL COMMENT '发送次数',
    `create_time` int(13)                                                       NULL DEFAULT NULL COMMENT '创建时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 40957
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '用户列表'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for qfnotice_user_cat
-- ----------------------------
DROP TABLE IF EXISTS `qfnotice_user_cat`;
CREATE TABLE `qfnotice_user_cat`
(
    `id`          int(13)                                                       NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `site_id`     int(11)                                                       NOT NULL COMMENT '站点ID',
    `name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称',
    `create_time` int(13)                                                       NULL DEFAULT NULL COMMENT '创建实际',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 3
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '用户分类'
  ROW_FORMAT = Dynamic;

