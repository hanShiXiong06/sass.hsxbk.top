
DROP TABLE IF EXISTS `{{prefix}}data_scope_user_dept`;
CREATE TABLE `{{prefix}}data_scope_user_dept`(
    `uid`     int(10) NOT NULL COMMENT 'sys_user，用户ID',
    `dept_id` int(10) NOT NULL DEFAULT 0 COMMENT '部门ID',
    PRIMARY KEY (`uid`, `dept_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `{{prefix}}data_scope_sys_dept`;
CREATE TABLE `{{prefix}}data_scope_sys_dept`(
    `dept_id`     int(10) NOT NULL AUTO_INCREMENT COMMENT '部门id',
    `p_dept_id`   int(10) NOT NULL DEFAULT 0 COMMENT '父级部门id',
    `site_id`     int(11) NOT NULL DEFAULT 0 COMMENT '站点ID',
    `dept_name`   varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '' COMMENT '部门名称',
    `sort`        int(4) NULL DEFAULT 0 COMMENT '显示顺序',
    `status`      tinyint(1) NULL DEFAULT 1 COMMENT '部门状态（1正常 0停用）',
    `create_time` int(11) NOT NULL COMMENT '添加时间',
    `update_time` int(11) NOT NULL COMMENT '最后修改时间',
    PRIMARY KEY (`dept_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '部门表' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `{{prefix}}data_scope_role_dept`;
CREATE TABLE `{{prefix}}data_scope_role_dept`(
    `role_id`        int(10) NOT NULL COMMENT '角色ID',
    `data_scope`     char(1) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1' COMMENT '数据范围',
    `check_strictly` int(4) NOT NULL DEFAULT 0 COMMENT '父子级不关联，0关联，1不关联',
    `dept_ids`       mediumtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '部门ID',
    PRIMARY KEY (`role_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '角色和部门关联表' ROW_FORMAT = Dynamic;
