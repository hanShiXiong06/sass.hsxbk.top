<?php
// +----------------------------------------------------------------------
// | cps联盟
// +----------------------------------------------------------------------
// | 官方网址：https://xuanloo.com
// +----------------------------------------------------------------------
// | 河南省炫洛网络科技有限公司
// +----------------------------------------------------------------------
// | Author: 小洛
// +----------------------------------------------------------------------


namespace addon\cps\app\listener;

/**
 * 应用管理
 * Class AppManage
 * @package app\listener\hello_world
 */
class AppManageListener
{
    /**
     * 应用管理
     * @param $data
     */
    public function handle()
    {
        return [
            "category" => [
                //插件如果要单独分类展示，需要专门定义
                [
                    "key" => "cps_category",
                    "name" => "第三方应用",
                ],
            ],
            [
                "addon" => "cps",
                "title" => "cps联盟",
                "category" => "cps_category",  //设置插件对应展示分类，默认basic
                "desc" => "cps联盟",
                "icon" => addon_resource("cps", "icon.png"),  //图标
                "cover" => "",  //封面
                "url" => "/cps/config"
            ],
        ];
    }
}