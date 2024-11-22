-- ----------------------------
-- Table structure for {{prefix}}qfnotice_addon
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}qfnotice_addon`;
CREATE TABLE `{{prefix}}qfnotice_addon`
(
    `id`            int(13)                                                       NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `site_id`       int(11)                                                       NOT NULL COMMENT '站点ID',
    `name`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称',
    `desc`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
    `image`         varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '图像',
    `is_main`       int(3)                                                        NULL DEFAULT 1 COMMENT '使用框架',
    `type`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'wechat' COMMENT '类型',
    `send_type`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'one' COMMENT '发送类型',
    `level_id`      int(13)                                                       NULL DEFAULT NULL COMMENT '会员等级ID',
    `category_id`   int(11)                                                       NULL DEFAULT NULL COMMENT '应用分类',
    `status`        int(2)                                                        NULL DEFAULT 1 COMMENT '状态',
    `cat_id`        int(11)                                                       NULL DEFAULT NULL COMMENT '发送分类',
    `config_id`     int(11)                                                       NULL DEFAULT NULL COMMENT '对应渠道参数',
    `value`         longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci     NOT NULL COMMENT '配置值',
    `sms_content`   varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '短信发送内容',
    `email_content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci     NULL COMMENT '邮件内容',
    `email_title`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '标题',
    `email_desc`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '描述',
    `template_id`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '模板ID',
    `is_go_url`     int(11)                                                       NULL DEFAULT 1 COMMENT '跳转链接',
    `url`           varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '跳转url值',
    `page`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '跳转小程序页面',
    `create_time`   int(13)                                                       NULL DEFAULT NULL COMMENT '创建时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 10
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '群发应用'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for {{prefix}}qfnotice_category
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}qfnotice_category`;
CREATE TABLE `{{prefix}}qfnotice_category`
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

-- ----------------------------
-- Table structure for {{prefix}}qfnotice_log
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}qfnotice_log`;
CREATE TABLE `{{prefix}}qfnotice_log`
(
    `id`          int(13)                                                       NOT NULL AUTO_INCREMENT COMMENT 'ID',
    `site_id`     int(11)                                                       NOT NULL COMMENT '站点ID',
    `addon_name`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称',
    `wx_openid`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'openid',
    `email`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '邮箱',
    `mobile`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '手机',
    `type`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'wechat' COMMENT '类型',
    `log`         longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci     NULL COMMENT '发送日志',
    `create_time` int(13)                                                       NULL DEFAULT NULL COMMENT '创建时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 83
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '发送日志'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for {{prefix}}qfnotice_user
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}qfnotice_user`;
CREATE TABLE `{{prefix}}qfnotice_user`
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
-- Table structure for {{prefix}}qfnotice_user_cat
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}qfnotice_user_cat`;
CREATE TABLE `{{prefix}}qfnotice_user_cat`
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

