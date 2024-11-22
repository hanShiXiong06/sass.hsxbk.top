-- ----------------------------
-- Table structure for {{prefix}}manage_oss
-- ----------------------------
DROP TABLE IF EXISTS `{{prefix}}manage_oss`;
CREATE TABLE `{{prefix}}manage_oss`
(
    `id`      int(13) NOT NULL AUTO_INCREMENT,
    `site_id` int(11) NULL DEFAULT NULL COMMENT '站点',
    `value`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '驱动',
    `size` double NULL DEFAULT NULL COMMENT '总存储',
    `use_size` double NOT NULL COMMENT '已用',
    `limit`   varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '限制上传大小',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;