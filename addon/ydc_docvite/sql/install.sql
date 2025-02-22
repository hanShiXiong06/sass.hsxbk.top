DROP TABLE IF EXISTS `{{prefix}}ydc_docvite_attach`;
CREATE TABLE `{{prefix}}ydc_docvite_attach`
(
    `id`          bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键.',
    `site_id`     int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
    `vault_id`    bigint(20) NOT NULL COMMENT '仓库 ID.',
    `hash`        varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci   NOT NULL COMMENT '附件哈希，唯一 id.',
    `mids`        varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '所属文档列表，英文逗号分隔. ydcdoc_markdown.id',
    `name`        varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '文件名',
    `oss_key`     varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT 'OSS存储键',
    `mime`        varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '文件类型',
    `url`         varchar(240) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '访问地址，可能是过期状态',
    `size`        bigint(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT '文档占用空间，包括文档内容在内的全部字符串类型，不包括附件. 单位字节.',
    `blocked`     tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否被封禁：0-否；1-是',
    `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time` int(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
    `delete_time` int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
    PRIMARY KEY (`id`) USING BTREE,
    UNIQUE INDEX `uk-site_id-hash`(`site_id`, `hash`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '易东文档Vite-文档附件表' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `{{prefix}}ydc_docvite_config`;
CREATE TABLE `{{prefix}}ydc_docvite_config`
(
    `id`          bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键.',
    `site_id`     int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
    `name`        varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '名称',
    `value`       varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '值',
    `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
    `delete_time` int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
    PRIMARY KEY (`id`) USING BTREE,
    UNIQUE INDEX `uk-site_id-name`(`site_id`, `name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '易东文档Vite-配置参数' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `{{prefix}}ydc_docvite_markdown`;
CREATE TABLE `{{prefix}}ydc_docvite_markdown`
(
    `id`            bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键.',
    `site_id`       int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
    `uuid`          varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NOT NULL COMMENT '唯一 id.',
    `vault_id`      bigint(20) NOT NULL COMMENT '所属仓库. {{prefix}}ydc_docvite_vault.id',
    `path_id`       bigint(20) NOT NULL COMMENT '直接目录.{{prefix}}ydc_docvite_path.id',
    `filename`      varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文档文件名.',
    `title`         varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文档标题.',
    `keywords`      varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文档关键词.',
    `description`   varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '文档描述.',
    `content`       longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '文档内容',
    `property_json` varchar(10240) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '文档属性JOSN字符串.',
    `sort`          int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'sort',
    `size`          int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '大小，字节.',
    `status`        tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '发布状态: 1-已发布；0-未发布.',
    `create_time`   int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time`   int(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
    `delete_time`   int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '易东文档Vite-文档表' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `{{prefix}}ydc_docvite_path`;
CREATE TABLE `{{prefix}}ydc_docvite_path`
(
    `id`          bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键.',
    `site_id`     int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
    `name`        varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '名称',
    `alias_name`  varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '别名.',
    `vault_id`    bigint(20) NOT NULL COMMENT '所属仓库. {{prefix}}ydc_docvite_vault.id',
    `parent_id`   bigint(20) NOT NULL DEFAULT 0 COMMENT '所属父级目录. 0 表示没有',
    `sort`        tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '排序.',
    `create_time` int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time` int(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
    `delete_time` int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
    PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '易东文档Vite-仓库目录表' ROW_FORMAT = Dynamic;


DROP TABLE IF EXISTS `{{prefix}}ydc_docvite_vault`;
CREATE TABLE `{{prefix}}ydc_docvite_vault`
(
    `id`                     bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '主键.',
    `site_id`                int(11) NOT NULL DEFAULT 0 COMMENT '站点id',
    `name`                   varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '名称',
    `alias_name`             varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '别名',
    `site_name`              varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '站点名称，品牌名称，为空时取name和alias_name',
    `site_logo`              varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '站点左上角logo图片地址',
    `site_title`             varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '仓库站点首页标题，为空时取name和alias_name',
    `site_subtitle`          varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '仓库站点首页副标题，为空时取name和alias_name',
    `site_feature_list`      text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '首页特色栏目配置',
    `site_custom_property`   text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '定制化配置',
    `site_custom_css`        text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'vitepress的css覆盖.',
    `site_home_content`      text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'vitepress的首页自定义md内容.',
    `site_custom_scripts`    varchar(2048) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '' COMMENT '插入的自定义script标签脚本地址数组.',
    `vite_status`            tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT 'vitepress发布状态：0-未发布; 1-发布中; 2-已发布; 3-错误; 4-清理中; 5-排队中',
    `vite_last_err_msg`      text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT 'vitepress发布的上一个错误消息. vite_status=3时有意义.',
    `url`                    varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '打包完成后更新的访问url.',
    `domain`                 varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '打包完成之后的访问域名.',
    `custom_domain_tls_cert` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '自定义域名的证书. PEM.',
    `custom_domain_tls_key`  text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '自定义域名的证书密钥. PEM.',
    `custom_url`             varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '注册自定义域名之后更新的自定义访问url.',
    `custom_domain`          varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci  NOT NULL DEFAULT '' COMMENT '自定义域名. 全局唯一.',
    `is_public`              tinyint(3) UNSIGNED NOT NULL DEFAULT 0 COMMENT '0-不公开;1-公开',
    `sort`                   int(10) UNSIGNED NOT NULL DEFAULT 0 COMMENT '排序权重',
    `create_time`            int(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
    `update_time`            int(11) NOT NULL DEFAULT 0 COMMENT '更新时间',
    `delete_time`            int(11) NOT NULL DEFAULT 0 COMMENT '删除时间',
    PRIMARY KEY (`id`) USING BTREE,
    UNIQUE INDEX `uk-site_id-name`(`site_id`, `name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '易东文档Vite-仓库表' ROW_FORMAT = Dynamic;
