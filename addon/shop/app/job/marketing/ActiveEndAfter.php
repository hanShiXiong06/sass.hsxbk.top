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
namespace addon\shop\app\job\marketing;

use addon\shop\app\dict\active\ActiveDict;
use addon\shop\app\model\active\Active;
use addon\shop\app\service\core\marketing\CoreActiveService;
use core\base\BaseJob;
use think\facade\Log;

/**
 * 活动自动关闭后操作
 */
class ActiveEndAfter extends BaseJob
{
    /**
     * 消费
     * @return true
     */
    public function doJob($active_id)
    {
        try {
            $info = (new Active())->where([ ['active_id', '=', $active_id] ])->findOrEmpty()->toArray();
            event('ActiveEndAfter', $info);
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

}
