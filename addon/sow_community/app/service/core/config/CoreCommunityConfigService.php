<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\sow_community\app\service\core\config;

use app\service\core\sys\CoreConfigService;
use core\base\BaseCoreService;

/**
 * 社区配置
 * Class CoreCommunityConfigService
 * @package addon\sow_community\app\service\core
 */
class CoreCommunityConfigService extends BaseCoreService
{
    //系统配置文件
    public $core_config_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_config_service = new CoreConfigService();
    }

    /**
     * 设置社区配置
     * @param array $params
     * @return bool
     */
    public function setCommunityConfig($params)
    {
        $value = [
            "community_is_use" => $params[ 'community_is_use' ], //社区功能开关 0:关闭 1:开启
            "content_review_status" => $params[ 'content_review_status' ], //内容审核开关 0:关 1:开
            "community_comments_status" => $params[ 'community_comments_status' ], //社区评论开关 0:关 1:开
            "comment_moderation_status" => $params[ 'comment_moderation_status' ] //评论审核开关 0:关 1:开
        ];

        $this->core_config_service->setConfig($params[ 'site_id' ], 'SOW_COMMUNITY_CONFIG', $value);
        return true;
    }

    /**
     * 获取社区配置
     * @param int $site_id
     * @return array
     */
    public function getCommunityConfig(int $site_id)
    {
        $res = ( new CoreConfigService() )->getConfig($site_id, 'SOW_COMMUNITY_CONFIG');
        $data = [
            'community_is_use' => $res[ 'value' ][ 'community_is_use' ] ?? 1,
            'content_review_status' => $res[ 'value' ][ 'content_review_status' ] ?? 1,
            'community_comments_status' => $res[ 'value' ][ 'community_comments_status' ] ?? 1,
            'comment_moderation_status' => $res[ 'value' ][ 'comment_moderation_status' ] ?? 1
        ];
        return $data;
    }
}

