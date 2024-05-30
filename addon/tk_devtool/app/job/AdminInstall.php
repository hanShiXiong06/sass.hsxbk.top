<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tk_devtool\app\job;

use core\base\BaseJob;
use think\facade\Log;
use addon\tk_devtool\app\service\admin\DevtoolService;
/**
 * 插件计划任务
 */
class AdminInstall extends BaseJob
{
    public function doJob()
    {
        (new DevtoolService())->execute(["path" => "admin", "cmd" => 'npm install']);
        Log::write('tk_devtool====后台依赖任务,执行时间:'.date('Y-m-d h:i:s'));
        return true;
    }
}
