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

namespace addon\phone_shop\app\dict\site;

class SiteDict
{
    // 实物商品
    const ON = 1;

    // 虚拟商品
    const OFF = 0;

    /**
     * 商品类型
     * @param $type
     * @return array|mixed|string
     */
    public static function getType($type = '')
    {
        $list = [
            self::ON => [
                'type' => self::ON,
                'name' => "开启",
                'desc' => "是否开启",
                'path' => '/phone_shop/site',
            ],
            self::OFF => [
                'type' => self::OFF,
                'name' => '关闭',
                'desc' => '是否关闭',
                'path' => '/phone_shop/site',
            ]
        ];
        if ($type == '') return $list;
        return $list[ $type ];
    }
}
