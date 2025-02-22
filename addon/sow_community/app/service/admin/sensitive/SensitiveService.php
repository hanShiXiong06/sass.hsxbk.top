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

namespace addon\sow_community\app\service\admin\sensitive;

use addon\sow_community\app\service\core\sensitive\CoreSensitiveService;
use core\base\BaseAdminService;


/**
 * 社区敏感词服务层
 * Class SensitiveService
 * @package  addon\sow_community\app\service\admin\sensitive;
 */
class SensitiveService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * 设置社区配置
     * @param array $params
     * @return bool
     */
    public function setSensitive(array $params = [])
    {
        $params[ 'site_id' ] = $this->site_id;
        return ( new CoreSensitiveService() )->setSensitive($params);
    }

    /**
     * 获取社区配置
     * @return array
     */
    public function getSensitive()
    {
        return ( new CoreSensitiveService() )->getSensitive($this->site_id);
    }

}
