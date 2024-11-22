-- ----------------------------
-- Table structure for {{prefix}}cps_act
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cps_act`;
CREATE TABLE `{{prefix}}cps_act`
(
    `id`                  int(11)                                                        NOT NULL AUTO_INCREMENT COMMENT '活动id',
    `site_id`             int(11)                                                        DEFAULT NULL COMMENT '站点ID',
    `type`                int(255)                                                       NULL DEFAULT 0 COMMENT '活动类型',
    `cid`                 int(11)                                                        NULL DEFAULT NULL COMMENT '分类',
    `act_id`              int(11)                                                        NULL DEFAULT NULL COMMENT '活动id',
    `act_name`            varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '活动名称',
    `desc`                varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL COMMENT '描述',
    `img`                 varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci  NULL DEFAULT NULL COMMENT '图像',
    `icon`                varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '图标',
    `poster`              varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '海报',
    `commission_rate`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '比例',
    `introduce`           text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci          NULL COMMENT '活动介绍',
    `attribution_explain` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci          NULL COMMENT '归属说明',
    `settlement_time`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '结算时间',
    `start_date`          varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   NULL DEFAULT NULL COMMENT '开始时间',
    `end_date`            varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   NULL DEFAULT NULL COMMENT '结算时间',
    `create_time`         int(13)                                                        NULL DEFAULT NULL COMMENT '创建时间',
    `update_time`         int(13)                                                        NULL DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 926
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = 'CPS活动链接'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for {{prefix}}cps_act_item
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cps_act_item`;
CREATE TABLE `{{prefix}}cps_act_item`
(
    `id`          int(11)                                                        NOT NULL AUTO_INCREMENT,
    `act_id`      int(11)                                                        NOT NULL COMMENT '活动id',
    `act_name`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '活动名称',
    `type`        int(255)                                                       NULL DEFAULT NULL COMMENT '活动类型',
    `site_id`     int(11)                                                        NULL DEFAULT NULL COMMENT '站点id',
    `h5`          varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'h5链接',
    `weapp`       varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '微信小程序信息',
    `aliapp`      varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '支付宝小程序信息',
    `share_info`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '推广信息',
    `create_time` int(13)                                                        NULL DEFAULT NULL COMMENT '创建时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 336
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '活动详情'
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for {{prefix}}cpsbwc_order
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cpsbwc_order`;
CREATE TABLE `{{prefix}}cpsbwc_order`
(
    `id`               int                                                           NOT NULL AUTO_INCREMENT,
    `site_id`          int                                                           NOT NULL COMMENT '站点id',
    `member_id`        int                                                           NULL DEFAULT NULL COMMENT '会员id',
    `orderSn`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '霸王餐订单号',
    `order_no`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '商城订单号',
    `userOrderSn`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '三方订单号',
    `paidAmount`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '支付金额',
    `shopOriginId`     varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '店铺id',
    `orderTelephone`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报名电话',
    `name`             varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '名称',
    `logo`             varchar(800) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'logo',
    `address`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '地址',
    `distance`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '距离',
    `planType`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '活动类型',
    `platform`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '平台',
    `platformName`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '平台名称',
    `platformLogo`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '平台logo',
    `source`           int                                                           NULL DEFAULT NULL COMMENT '来源',
    `actionUrl`        longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci     NULL COMMENT '下单地址',
    `planId`           varchar(800) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报名活动ID',
    `planTypeCh`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '要求',
    `planTypeDescCh`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '活动限制',
    `plan`             longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci     NULL COMMENT '活动详情',
    `commissionType`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '结算方式',
    `sid`              varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '跟单参数',
    `minAmount`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '门槛',
    `maxAmount`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '最大返现',
    `commission`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '结算金额',
    `commissionRatio`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '佣金比例',
    `ecommission`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '预估金额',
    `ecommissionRatio` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '预估比率',
    `state`            varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态',
    `createTime`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建时间',
    `finishedTime`     varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '完成时间',
    `xgzSettleStatus`  varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '结算状态',
    `xgzSettleTime`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '结算时间',
    `create_time`      int                                                           NULL DEFAULT NULL COMMENT '创建时间',
    `close_time`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '关闭时间',
    `reason`           varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '原因',
    `fanxian`          varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '返现',
    `is_fanxian`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '是否返现',
    `js_type`          int                                                                DEFAULT '0' COMMENT '计算类型',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 20
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for {{prefix}}cps_fenxiao_member
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cps_fenxiao_member`;
CREATE TABLE `{{prefix}}cps_fenxiao_member`
(
    `member_id`         int UNSIGNED NOT NULL DEFAULT 0 COMMENT '会员id',
    `site_id`           int          NOT NULL DEFAULT 0 COMMENT '站点id',
    `pid`               int          NULL     DEFAULT 0 COMMENT '推荐会员id(分销)',
    `fenxiao_member_id` int          NULL     DEFAULT 0 COMMENT '会员上级分销商会员id',
    `is_fenxiao`        tinyint      NULL     DEFAULT 0 COMMENT '是否是分销商',
    `bind_time`         int          NULL     DEFAULT 0 COMMENT '绑定时间',
    `create_time`       int          NULL     DEFAULT 0 COMMENT '创建时间',
    PRIMARY KEY (`member_id`) USING BTREE
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci
  ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for {{prefix}}cps_fenxiao_order
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cps_fenxiao_order`;
CREATE TABLE `{{prefix}}cps_fenxiao_order`
(
    `id`               int                                                           NOT NULL AUTO_INCREMENT COMMENT 'id',
    `member_id`        int UNSIGNED                                                  NOT NULL DEFAULT 0 COMMENT '会员id',
    `site_id`          int                                                           NOT NULL DEFAULT 0 COMMENT '站点id',
    `order_id`         varchar(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL     DEFAULT NULL COMMENT '会员id',
    `type`             varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL     DEFAULT NULL COMMENT '类型',
    `state`            int                                                           NULL     DEFAULT NULL COMMENT '订单状态',
    `first_commission` decimal(10, 2)                                                NULL     DEFAULT NULL COMMENT '一级佣金',
    `two_commission`   decimal(10, 2)                                                NULL     DEFAULT NULL COMMENT '二级佣金',
    `status`           varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL     DEFAULT NULL COMMENT '状态',
    `create_time`      int                                                           NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time`      int                                                           NULL     DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci
  ROW_FORMAT = Dynamic;


-- ----------------------------
-- Table structure for {{prefix}}cps_act_order
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cps_act_order`;
CREATE TABLE `{{prefix}}cps_act_order`
(
    `id`          int(11)                                                       NOT NULL AUTO_INCREMENT,
    `sid`         varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '跟单参数',
    `site_id`     int(11)                                                       NOT NULL COMMENT '站点id',
    `member_id`   varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '会员id',
    `name`        varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单别称',
    `chanel`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '渠道',
    `order_id`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '订单号',
    `pay_money`   decimal(13, 2)                                                NULL DEFAULT NULL COMMENT '支付金额',
    `rate`        varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NULL DEFAULT NULL COMMENT '结算比列',
    `commission`  decimal(13, 2)                                                NULL DEFAULT NULL COMMENT '结算佣金',
    `status`      varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态',
    `status_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '状态名称',
    `jl_js`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '激励结算',
    `pt_js`       varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '0' COMMENT '平台结算',
    `create_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建时间',
    `pay_time`    varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '支付时间',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `id` (`id`, `site_id`, `member_id`, `name`, `order_id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 62
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = 'CPS活动订单'
  ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Table structure for {{prefix}}cps_site
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}cps_site`;
CREATE TABLE `{{prefix}}cps_site`
(
    `id`       int(11)                                                       NOT NULL AUTO_INCREMENT,
    `site_id`  int(11)                                                       NOT NULL COMMENT '站点id',
    `site_key` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '站点key',
    PRIMARY KEY (`id`) USING BTREE,
    INDEX `id` (`id`, `site_key`, `site_id`) USING BTREE
) ENGINE = InnoDB
  AUTO_INCREMENT = 25
  CHARACTER SET = utf8mb4
  COLLATE = utf8mb4_general_ci COMMENT = '站点对应跟单参数'
  ROW_FORMAT = DYNAMIC;


