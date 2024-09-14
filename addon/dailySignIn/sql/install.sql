DROP TABLE IF EXISTS `{{prefix}}member_sign_in_logs`;
CREATE TABLE `{{prefix}}member_sign_in_logs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `member_id` int(11) NOT NULL DEFAULT '0' COMMENT '会员id',
    `site_id` int(11) NOT NULL DEFAULT '0' COMMENT '站点id',
    `sign_in_date` datetime DEFAULT NULL COMMENT '签到日期',
    `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '签到奖励描述',
    `created_at` datetime DEFAULT NULL COMMENT '创建时间',
    `updated_at` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '修改时间',
    PRIMARY KEY (`id`),
    KEY `member_id` (`member_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='会员签到日志表';
ALTER TABLE `{{prefix}}member` ADD `last_sign_in_time` datetime DEFAULT NULL COMMENT '最后一次签到的时间' AFTER `commission_cash_outing`;
ALTER TABLE `{{prefix}}member` ADD `consecutive_days` int(11) NOT NULL DEFAULT '0' COMMENT '持续签到的天数'AFTER `last_sign_in_time`;
ALTER TABLE `{{prefix}}member` ADD `first_sign_in_time` datetime DEFAULT NULL COMMENT '首次签到的时间' AFTER `last_sign_in_time`;