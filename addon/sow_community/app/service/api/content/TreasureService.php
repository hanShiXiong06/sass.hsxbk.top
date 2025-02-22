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

namespace addon\sow_community\app\service\api\content;

use addon\sow_community\app\model\Treasure;
use addon\sow_community\app\service\core\treasure\CoreTreasureService;
use core\base\BaseApiService;


/**
 * 社区宝贝库服务层
 * Class TreasureService
 * @package addon\sow_community\app\service\api\content
 */
class TreasureService extends BaseApiService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Treasure();
    }

    /**
     * 获取社区宝贝库选择列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $where[ 'site_id' ] = $this->site_id;
        return ( new CoreTreasureService() )->getTreasureSelectList($where);
    }

    /**
     * 获取社区宝贝库类型列表
     * @return array
     */
    public function getTypeList()
    {
        return ( new CoreTreasureService() )->getTreasureTypeList();
    }
}
