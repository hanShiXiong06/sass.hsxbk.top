
ALTER TABLE `recharge` DROP COLUMN `coupon_id`;

ALTER TABLE `recharge` ADD COLUMN `gift_json` TEXT DEFAULT NULL COMMENT '赠品json';

ALTER TABLE `recharge` MODIFY `gift_json` TEXT DEFAULT NULL COMMENT '赠品json' AFTER `growth`;
