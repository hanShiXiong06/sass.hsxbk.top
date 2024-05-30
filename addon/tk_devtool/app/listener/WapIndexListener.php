<?php
namespace addon\tk_devtool\app\listener;

/**
 * 手机端首页加载事件
 */
class WapIndexListener
{
    public function handle()
    {
        return [
            [
                'key' => 'tk_devtool',
                "title" => '助手工具',
                'desc' => '快捷使用的工具',
                "url" => "",
                'icon'=>'addon/tk_devtool/icon.png'
            ],
        ];
    }
}