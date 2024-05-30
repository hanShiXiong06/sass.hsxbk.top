<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

use core\exception\CommonException;
use think\facade\Request;

$is_demo = env('system.is_demo', 0);
if ($is_demo && !Request::isGet()) {
    //加载插件路由
    throw new CommonException("演示数据不能进行修改");
}