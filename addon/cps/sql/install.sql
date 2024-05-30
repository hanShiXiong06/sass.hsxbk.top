CREATE TABLE IF NOT EXISTS `{{prefix}}cps` (
    `id` int unsigned NOT NULL AUTO_INCREMENT,
    `site_id` varchar(255) NOT NULL DEFAULT '' COMMENT '站点id',
    `my_uid` varchar(255) NOT NULL DEFAULT '' COMMENT '蚂蚁星球会员ID',
    `my_apikey` varchar(255) NOT NULL DEFAULT '' COMMENT '蚂蚁星球apikey',
    `my_secret` varchar(255) NOT NULL DEFAULT '' COMMENT '蚂蚁星球secret',
    `jutuike_pub_id` varchar(255) NOT NULL DEFAULT '' COMMENT '聚推客pub_id',
    `jutuike_apikey` varchar(255) NOT NULL DEFAULT '' COMMENT '聚推客apikey',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='cps联盟';  

