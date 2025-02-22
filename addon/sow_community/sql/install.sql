
DROP TABLE IF EXISTS `{{prefix}}sow_community_treasure`;
CREATE TABLE `{{prefix}}sow_community_treasure` (
  `treasure_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '宝贝id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `treasure_name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '宝贝名称',
  `treasure_sub_name` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '宝贝副标题',
  `treasure_image` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '宝贝图片',
  `treasure_price` DECIMAL(10, 2) NOT NULL DEFAULT 0.00 COMMENT '宝贝价格',
  `treasure_url` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '宝贝跳转链接',
  `relate_id` INT(11) NOT NULL DEFAULT 0 COMMENT '关联业务id',
  `relate_type` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '关联业务类型',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `is_join` TINYINT(1) NOT NULL DEFAULT 0 COMMENT '是否参与',
  PRIMARY KEY (`treasure_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区宝贝库表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_topic`;
CREATE TABLE `{{prefix}}sow_community_topic` (
  `topic_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '话题id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `category_id` INT(11) NOT NULL DEFAULT 0 COMMENT '分类id',
  `topic_name` VARCHAR(255) DEFAULT '' COMMENT '话题名称',
  `status` TINYINT(4) NOT NULL DEFAULT 1 COMMENT '状态（0：禁用，1：启用）',
  `is_recommend` TINYINT(4) NOT NULL DEFAULT 1 COMMENT '是否推荐（0：否，1：是）',
  `content_num` INT(11) NOT NULL DEFAULT 0 COMMENT '相关内容数',
  `member_num` INT(11) NOT NULL DEFAULT 0 COMMENT '相关作者数',
  `view_num` INT(11) NOT NULL DEFAULT 0 COMMENT '话题内容浏览量',
  `sort` INT(11) NOT NULL DEFAULT 0 COMMENT '排序号',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间',
  PRIMARY KEY (`topic_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区话题表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_sensitive`;
CREATE TABLE `{{prefix}}sow_community_sensitive` (
  `id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `config_key` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '配置项关键字',
  `value` TEXT DEFAULT NULL COMMENT '敏感词',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区敏感词表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_member_records`;
CREATE TABLE `{{prefix}}sow_community_member_records` (
  `record_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '记录id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `topic_id` INT(11) NOT NULL DEFAULT 0 COMMENT '话题id',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`record_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区用户偏好记录表';

DROP TABLE IF EXISTS `{{prefix}}sow_community_member`;
CREATE TABLE `{{prefix}}sow_community_member` (
  `id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `follow_num` INT(11) NOT NULL DEFAULT 0 COMMENT '关注数',
  `fans_num` INT(11) NOT NULL DEFAULT 0 COMMENT '粉丝数',
  `like_num` INT(11) NOT NULL DEFAULT 0 COMMENT '获赞数',
  `collect_num` INT(11) NOT NULL DEFAULT 0 COMMENT '收藏数',
  `content_num` INT(11) NOT NULL DEFAULT 0 COMMENT '内容数',
  `intro` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '个人简介',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区用户信息表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_follow`;
CREATE TABLE `{{prefix}}sow_community_follow` (
  `follow_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '关注id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `follow_member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '关注会员id',
  `is_follow` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '是否关注（0：未关注，1：已关注）',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`follow_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区用户关注关系表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_content_like`;
CREATE TABLE `{{prefix}}sow_community_content_like` (
  `content_like_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '社区内容点赞id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `content_id` INT(11) NOT NULL DEFAULT 0 COMMENT '内容id',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`content_like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区内容点赞记录表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_content_collect`;
CREATE TABLE `{{prefix}}sow_community_content_collect` (
  `collect_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '社区内容收藏id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `content_id` INT(11) NOT NULL DEFAULT 0 COMMENT '内容id',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`collect_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区内容收藏记录表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_content`;
CREATE TABLE `{{prefix}}sow_community_content` (
  `content_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '内容id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '发布会员id',
  `category_id` INT(11) NOT NULL DEFAULT 0 COMMENT '分类id',
  `topic_ids` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '话题id集合',
  `content_type` TINYINT(4) NOT NULL DEFAULT 1 COMMENT '内容类型（1：图文，2：短视频）',
  `content_title` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '内容标题',
  `content_image` TEXT DEFAULT NULL COMMENT '内容图片',
  `content_video` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '内容视频',
  `content_cover` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '内容封面',
  `content_cover_width` varchar(255) NOT NULL DEFAULT '' COMMENT '封面图片宽度',
  `content_cover_height` varchar(255) NOT NULL DEFAULT '' COMMENT '封面图片高度',
  `content` TEXT DEFAULT NULL COMMENT '内容正文',
  `treasure_ids` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '宝贝id集合',
  `status` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '状态（0：无需审核，1：待审核，2：审核通过，-1：审核拒绝，-2：强制下架）',
  `refuse_reason` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '拒绝原因',
  `is_recommend` TINYINT(4) NOT NULL DEFAULT 1 COMMENT '是否推荐（0：否，1：是）',
  `lat` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '纬度',
  `lng` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '经度',
  `location` VARCHAR(255) NOT NULL DEFAULT '' COMMENT '位置',
  `like_num` INT(11) NOT NULL DEFAULT 0 COMMENT '获赞数',
  `comment_num` INT(11) NOT NULL DEFAULT 0 COMMENT '评论数',
  `share_num` INT(11) NOT NULL DEFAULT 0 COMMENT '分享数',
  `collect_num` INT(11) NOT NULL DEFAULT 0 COMMENT '收藏数',
  `view_num` INT(11) NOT NULL DEFAULT 0 COMMENT '浏览量',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间',
  PRIMARY KEY (`content_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区内容表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_comment_like`;
CREATE TABLE `{{prefix}}sow_community_comment_like` (
  `comment_like_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '社区评论点赞id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '会员id',
  `comment_id` INT(11) NOT NULL DEFAULT 0 COMMENT '评论id',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`comment_like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区评论点赞记录表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_comment`;
CREATE TABLE `{{prefix}}sow_community_comment` (
  `comment_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '评论id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `content_id` INT(11) NOT NULL DEFAULT 0 COMMENT '内容id',
  `member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '评论会员id',
  `reply_member_id` INT(11) NOT NULL DEFAULT 0 COMMENT '回复会员id',
  `parent_comment_id` INT(11) NOT NULL DEFAULT 0 COMMENT '父评论id',
  `comment_content` VARCHAR(3000) NOT NULL DEFAULT '' COMMENT '评论内容',
  `comment_image` VARCHAR(3000) NOT NULL DEFAULT '' COMMENT '评价图片',
  `status` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '状态（0：无需审核，1：待审核，2：审核通过，-1：审核拒绝）',
  `like_num` INT(11) NOT NULL DEFAULT 0 COMMENT '获赞数',
  `reply_num` INT(11) NOT NULL DEFAULT 0 COMMENT '回复数',
  `level` TINYINT(4) NOT NULL DEFAULT 0 COMMENT '评论层级（0评论，1一级回复，2二级回复）',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区评论表';


DROP TABLE IF EXISTS `{{prefix}}sow_community_category`;
CREATE TABLE `{{prefix}}sow_community_category` (
  `category_id` INT(11) NOT NULL AUTO_INCREMENT COMMENT '分类id',
  `site_id` INT(11) NOT NULL DEFAULT 0 COMMENT '站点id',
  `category_name` VARCHAR(255) DEFAULT '' COMMENT '分类名称',
  `status` INT(11) NOT NULL DEFAULT 1 COMMENT '状态（0，关闭，1：开启）',
  `sort` INT(11) NOT NULL DEFAULT 0 COMMENT '排序号',
  `create_time` INT(11) NOT NULL DEFAULT 0 COMMENT '创建时间',
  `update_time` INT(11) NOT NULL DEFAULT 0 COMMENT '修改时间',
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='种草社区分类表';
