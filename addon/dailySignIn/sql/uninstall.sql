DROP TABLE IF EXISTS `{{prefix}}member_sign_in_logs`;
ALTER TABLE `{{prefix}}member` DROP `last_sign_in_time`;
ALTER TABLE `{{prefix}}member` DROP `consecutive_days`;
ALTER TABLE `{{prefix}}member` DROP `first_sign_in_time`;
DELETE FROM `{{prefix}}sys_config` where config_key = 'MEMBER_SIGN_IN_REWARD_CONFIG';