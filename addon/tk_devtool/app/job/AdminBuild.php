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
class AdminBuild extends BaseJob
{
    public function doJob()
    {
        // 设置队列任务的执行时间限制（单位：秒）
        (new DevtoolService())->execute(["path" => "admin", "cmd" => 'npm run build']);
        Log::write('tk_devtool==admin端编译任务,执行时间:'.date('Y-m-d h:i:s'));
        return true;
    }
}
