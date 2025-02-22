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

namespace addon\sow_community\app\adminapi\controller\sensitive;

use addon\sow_community\app\service\admin\sensitive\SensitiveService;
use core\base\BaseAdminController;


/**
 * 社区敏感词控制器
 * Class Sensitive
 * @package addon\sow_community\app\adminapi\controller\sensitive
 */
class Sensitive extends BaseAdminController
{

    /**
     * 设置配置
     * @return \think\Response
     */
    public function setSensitive()
    {
        $data = $this->request->params([
            [ "value", '' ],  //敏感词
        ]);
        ( new SensitiveService() )->setSensitive($data);
        return success('SUCCESS');
    }

    /**
     * 获取配置
     * @return \think\Response
     */
    public function getSensitive()
    {
        return success(( new SensitiveService() )->getSensitive());
    }

}
