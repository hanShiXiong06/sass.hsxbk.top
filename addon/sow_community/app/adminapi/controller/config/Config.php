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

namespace addon\sow_community\app\adminapi\controller\config;

use addon\sow_community\app\service\admin\config\ConfigService;
use core\base\BaseAdminController;


/**
 * 社区设置控制器
 * Class Config
 * @package addon\sow_community\app\adminapi\controller\config
 */
class Config extends BaseAdminController
{

    /**
     * 设置社区配置
     * @return \think\Response
     */
    public function setCommunityConfig()
    {
        $data = $this->request->params([
            [ "community_is_use", 1 ],  //社区工能开关 0:关闭 1:开启
            [ "content_review_status", 1 ], //内容审核开关 0:关 1:开
            [ "community_comments_status", 1 ], //社区评论开关 0:关 1:开
            [ "comment_moderation_status", 1 ] //评论审核开关 0:关 1:开
        ]);

        ( new ConfigService() )->setCommunityConfig($data);
        return success('SUCCESS');
    }

    /**
     * 获取充值套餐配置
     * @return \think\Response
     */
    public function getCommunityConfig()
    {
        return success(( new ConfigService() )->getCommunityConfig());
    }

}
