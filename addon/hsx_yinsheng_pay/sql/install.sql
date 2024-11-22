DROP TABLE IF EXISTS `{{prefix}}hsx_yinsheng_order`;
CREATE TABLE `{{prefix}}hsx_yinsheng_order`  (
                                               `order_id` int(11) NOT NULL AUTO_INCREMENT,
                                               `site_id` int(11) NULL DEFAULT 0 COMMENT '站点id',
                                               `merchant_id` int(11) NULL DEFAULT NULL COMMENT '商户id',
                                               `order_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '订单编号',
                                               `order_from` varchar(55) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '订单来源',
                                               `order_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '订单类型',
                                               `out_trade_no` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '支付流水号',
                                               `order_status` int(11) NULL DEFAULT 0 COMMENT '订单状态',
                                               `refund_status` int(11) NULL DEFAULT 0 COMMENT '退款状态',
                                               `member_id` int(11) NULL DEFAULT 0 COMMENT '会员id',
                                               `ip` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '会员ip',
                                               `member_message` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '会员留言信息',
                                               `order_item_money` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '订单项目金额',
                                               `order_discount_money` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '订单优惠金额',
                                               `order_money` decimal(10, 2) NULL DEFAULT 0.00 COMMENT '订单金额',
                                               `create_time` int(11) NULL DEFAULT 0 COMMENT '创建时间',
                                               `pay_time` int(11) NULL DEFAULT 0 COMMENT '订单支付时间',
                                               `close_time` int(11) NULL DEFAULT 0 COMMENT '订单关闭时间',
                                               `is_delete` int(11) NULL DEFAULT 0 COMMENT '是否删除(针对后台)',
                                               `is_enable_refund` int(11) NULL DEFAULT 0 COMMENT '是否允许退款',
                                               `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '商家留言',
                                               `invoice_id` int(11) NULL DEFAULT 0 COMMENT '发票id，0表示不开发票',
                                               `close_reason` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT '' COMMENT '关闭原因',
                                               PRIMARY KEY (`order_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 49 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = '订单表' ROW_FORMAT = Dynamic;