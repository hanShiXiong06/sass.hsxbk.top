
-- DROP TABLE IF EXISTS `{{prefix}}hsx_phone_query_config`;
-- CREATE TABLE `{{prefix}}hsx_phone_query_config` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
--   `appid` varchar(255) NOT NULL DEFAULT '' COMMENT '由系统分配的AppID，在个人中心中查看',
--   `Secret` varchar(255) NOT NULL DEFAULT '' COMMENT '由系统分配的密钥，在个人中心中查看',
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='';

-- DROP TABLE IF EXISTS `{{prefix}}hsx_phone_query_category`;
-- CREATE TABLE `{{prefix}}hsx_phone_query_category` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `site_id` int NOT NULL DEFAULT 0 COMMENT '站点id',
--   `type_id` int(11) NOT NULL DEFAULT 0 COMMENT '分类id',
--   `name` varchar(255) NOT NULL DEFAULT '' COMMENT '分类名称',
--   `price` decimal(10, 2) NOT NULL DEFAULT 0.00 COMMENT '价格',
--    PRIMARY KEY (`id`, `site_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_general_ci COMMENT='';

/*
insert into `sass_hsx_phone_query_category` (`id`,`site_id`,`type_id`, `name` , `price`) values
(10101,100005,1,"苹果保修查询",0.05),
(10102,100005,1,"苹果保修查询（容量/颜色）",0.2),
(10103,100005,1,"苹果保修查询（备用）",0.5),
(10104,100005,1,"苹果激活锁查询",0.12),
(10105,100005,1,"苹果ID黑白查询",0.2),
(10106,100005,1,"苹果维修状态查询",0.05),
(10107,100005,1,"苹果型号配置查询",0.24),
(10108,100005,1,"苹果IMEI转序列号",0.22),
(10109,100005,1,"苹果IMEI2查询",0.39),
(10110,100005,1,"苹果激活锁查询（备用）",0.24),
(10111,100005,1,"苹果验机报告（网络锁）",1),
(10112,100005,1,"苹果验机报告（网络锁/运营商）",1.2),
(10113,100005,1,"苹果验机报告（购买日期）",1.2),
(10114,100005,1,"苹果验机报告（产品类型）",1.35),
(10115,100005,1,"苹果验机报告（旗舰版）",1.35),
(10116,100005,1,"苹果网络锁查询",0.2),
(10117,100005,1,"苹果运营商查询",0.22),
(10118,100005,1,"苹果购买日期查询",0.32),
(10119,100005,1,"苹果购买日期查询（DOP）",0.5),
(10120,100005,1,"型号/销售地查询",0.28),
(10121,100005,1,"型号/销售地查询（全部设备）",0.39),
(10122,100005,1,"苹果型号号码查询",0.5),
(10123,100005,1,"Mac激活锁查询",0.8),
(10124,100005,1,"Mac配置查询",0.18),
(10125,100005,1,"苹果监管锁查询",3),
(10126,100005,1,"苹果型号查询",0.01),
(10127,100005,1,"苹果机型查询",0.09),
(10128,100005,1,"苹果容量/颜色查询",0.24),
(20101,100005,2,"华为保修查询",0.14),(20201,100005,2,"小米保修查询",0.24),(20202,100005,2,"小米账号锁查询",0.01),
(20301,100005,2,"OPPO保修查询",0.12),(20302,100005,2,"OPPO保修查询（官网版）",0.3),
(20401,100005,9,"vivo保修查询",0.12),
(20501,100005,9,"三星保修查询",0.3),
(20502,100005,9,"三星销售地查询",0.29),
(20601,100005,9,"荣耀保修查询",0.3),
(20701,100005,9,"一加保修查询",0.29),
(20801,100005,9,"魅族保修查询",0.24),
(20901,100005,9,"realme保修查询",0.3),
(21001,100005,9,"努比亚保修查询",0.24),
(21101,100005,9,"华硕保修查询",0.24),
(21201,100005,9,"索尼保修查询",0.24),
(90101,100005,9,"GSMA黑白查询",0.18),
(90102,100005,9,"美国黑名单查询",0.26),
(90103,100005,9,"AT&amp;T黑白查询",0.36),
(90104,100005,9,"T-Mobile黑白查询",0.18),
(90105,100005,9,"Verizon黑白查询",0.4),
(90106,100005,9,"TracFone黑白查询",0.18),
(90107,100005,9,"KDDI黑白查询",0.2),
(90108,100005,9,"SoftBank黑白查询",0.2),
(90109,100005,9,"DOCOMO黑白查询",0.2),
(90110,100005,9,"UQMobile黑白查询",0.18),
(90901,100005,9,"日本运营商查询",0.48),
(90902,100005,9,"条形码查询",0.01),
(90903,100005,9,"IP地址查询",0.01),
(90904,100005,9,"号码归属地查询",0.01);
*/
-- drop TABLE  IF EXISTS `{{prefix}}hsx_phone_query_info`;
-- CREATE TABLE `{{prefix}}hsx_phone_query_info` (
--     `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT '自增主键',
--     `imei` VARCHAR(50) NOT NULL COMMENT 'IMEI码',
--     `member_id` INT UNSIGNED NOT NULL COMMENT '会员id',
--     `sn` VARCHAR(50) NOT NULL COMMENT '序列号',
--     `info` TEXT NOT NULL COMMENT '查询信息，以JSON格式存储',
--     `type_id` INT UNSIGNED NOT NULL COMMENT '类型ID，关联其他表',
--     `create_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='存储HSX手机查询信息的表';
