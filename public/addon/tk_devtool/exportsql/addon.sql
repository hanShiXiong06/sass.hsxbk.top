CREATE TABLE IF NOT EXISTS `{{prefix}}addon`  (
`id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
`title` varchar(40) NOT NULL COMMENT '插件名称',
`icon` varchar(255) NOT NULL COMMENT '插件图标',
`key` varchar(20) NOT NULL COMMENT '插件标识',
`desc` text COMMENT '插件描述',
`status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '状态',
`author` varchar(40) NOT NULL COMMENT '作者',
`version` varchar(20) NOT NULL COMMENT '版本号',
`create_time` int(11) NOT NULL COMMENT '创建时间',
`install_time` int(11) NOT NULL COMMENT '安装时间',
`update_time` int(11) NOT NULL COMMENT '更新时间',
`cover` varchar(255) NOT NULL COMMENT '封面',
`type` varchar(255) NOT NULL DEFAULT 'app' COMMENT '插件类型app，addon',
`support_app` varchar(255) NOT NULL COMMENT '插件支持的应用空表示通用插件',
`is_star` tinyint(4) NOT NULL DEFAULT '1' COMMENT '是否加星',
`compile` varchar(2000) NOT NULL COMMENT '编译端口',
PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 220 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '代码生成表字段信息表' ROW_FORMAT = Dynamic;
INSERT INTO `{{prefix}}addon` VALUES ('1','一号通','addon/tk_yht/icon.png','tk_yht','一号通API接口接入','1','','1.2.0','1709905644','1709905644','1713139260','','addon','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('2','AI助理','addon/tk_ai/icon.png','tk_ai','多驱动多场景智能对话，多类驱动字典集成','1','addon888','0.1.0','1709905661','1709905661','1711987126','','app','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('10','智能对话','addon/ai_chat/icon.png','ai_chat','智能对话AI助理插件','1','addon888','0.0.3','1710390196','1710390196','1711987141','','addon','tk_ai','1','');
INSERT INTO `{{prefix}}addon` VALUES ('18','助通三方短信','addon/zt_sms/icon.png','zt_sms','','1','','0.0.2','1711192871','1711192871','1711987157','','addon','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('20','123云盘存储','addon/tk_pan/icon.png','tk_pan','123云盘存储空间','1','','0.0.4','1711374107','1711374107','1711987172','','addon','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('28','CPS联盟','addon/tk_cps/icon.png','tk_cps','实时100多种活动转链，后台活动细节展示，支持小程序、H5、半屏小程序等推广打开','1','','1.2.9','1711760382','1711760382','1711987093','','addon','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('32','聚合快递','addon/tk_jhkd/icon.png','tk_jhkd','全网快递一件比价','1','addon888','1.1.0','1711890575','1711890575','1713030560','','app','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('33','商城系统','addon/shop/icon.png','shop','实物虚拟商品，订单，物流同城配送，门店自提','1','','1.1.1','1712014118','1712014118','1713015677','','app','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('34','旅游系统','addon/tourism/icon.png','tourism','旅游系统','1','','1.0.8','1712014145','1712014145','1712014145','','app','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('35','出票通知插件','addon/tourism_tick/icon.png','tourism_tick','','1','','0.0.3','1712015327','1712015327','1712015327','','addon','tourism','1','');
INSERT INTO `{{prefix}}addon` VALUES ('36','短视频','addon/tk_video/icon.png','tk_video','','1','','0.0.1','1712730927','1712730927','1712730927','','addon','','1','');
INSERT INTO `{{prefix}}addon` VALUES ('43','助手工具','addon/tk_devtool/icon.png','tk_devtool','内置便捷工具，一键打包，命令执行，框架更新','1','','1.0.0','1713147874','1713147874','1713147874','','app','','1','');
