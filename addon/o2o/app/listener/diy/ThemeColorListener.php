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

namespace addon\o2o\app\listener\diy;

/**
 * 主题色
 * Class ThemeColorListener
 * @package addon\o2o\app\listener\diy
 */
class ThemeColorListener
{

    public function handle($params)
    {
        if (!empty($params[ 'key' ]) && $params[ 'key' ] == 'o2o') {
            return [
                'title' => '活力橙',
                'name' => 'orange',
                'theme' => [
                    '--primary-color' => '#FA6400', // 主色
                    '--primary-help-color' => '#FA6400', // 辅色
                    '--price-text-color' => '#FF2525',// 价格颜色
                    '--primary-color-dark' => '#F48032', // 灰色
                    '--primary-color-disabled' => '#FFC29A', // 禁用色
                    '--primary-color-light' => '#FFF4ED', // 边框色（深）
                    '--primary-color-light2' => '#FFF4ED', // 边框色（淡）
                    '--page-bg-color' => '#f6f6f6', // 页面背景色
                ],
            ];
        }
    }
}