CREATE TABLE `{{prefix}}hlwoauth_domain` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `site_id` int(11) NOT NULL COMMENT '站点ID',
  `name` varchar(50) NOT NULL COMMENT '名称',
  `domain` varchar(255) NOT NULL COMMENT '域名',
  `auth_url` varchar(255) NOT NULL COMMENT '授权链接',
  `scope` enum('snsapi_base','snsapi_userinfo','') NOT NULL DEFAULT 'snsapi_base' COMMENT '授权方式',
  `number` int(11) NOT NULL DEFAULT '0' COMMENT '次数',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态:1=正常,0=禁用',
  `create_time` int(11) DEFAULT NULL COMMENT '创建时间',
  `update_time` int(11) DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COMMENT='域名授权';