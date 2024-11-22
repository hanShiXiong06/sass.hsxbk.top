-- ----------------------------
-- Table structure for {{prefix}}spdr_list
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}hsx_spdr_list`;
CREATE TABLE `{{prefix}}hsx_spdr_list`
(
    `id`          int(11) NOT NULL AUTO_INCREMENT,
    `site_id`     int(11) NULL DEFAULT NULL COMMENT '站点ID',
    `name`        varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '名称',
    `cat_id`      int(11) NULL DEFAULT NULL COMMENT '分类ID',
    `cat_name`    varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类名称',
    `flie`        varchar(500) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文件路径',
    `num`         int(11) NULL DEFAULT NULL COMMENT '数据条数',
    `success_num` int(11) NULL DEFAULT NULL COMMENT '成功数量',
    `fail_num`    int(11) NULL DEFAULT NULL COMMENT '失败数量',
    `status`      varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '状态',
    `create_time` int(13) NULL DEFAULT NULL COMMENT '创建时间',
    `update_time` int(13) NULL DEFAULT NULL,
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 86 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '二手商品导入列表' ROW_FORMAT = Dynamic;

