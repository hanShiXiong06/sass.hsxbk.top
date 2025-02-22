<?php
/*
 *
 * // +----------------------------------------------------------------------
 * // | 易东云文档发布应用
 * // +----------------------------------------------------------------------
 * // | 官方网址：https://web.ydc.show
 * // +----------------------------------------------------------------------
 * // | 易东云团队 版权所有 开源版本可自由商用
 * // +----------------------------------------------------------------------
 * // | Author: YiDong Cloud Team
 * // +----------------------------------------------------------------------
 */

namespace addon\ydc_docvite\app\validate;

use think\Validate;

/**
 * Markdown validator.
 *
 * @package addon\ydc_docvite\app\validate
 */
class Vault extends Validate {

    protected $message = [];

    protected $rule
        = [
            'id'                   => 'require|integer|egt:1',
            'name'                 => 'require|regex:/^[a-zA-Z0-9_]{2,50}$/',
            'alias_name'           => 'length:0,50',
            'site_name'            => 'length:0,100',
            'site_logo'            => 'length:0,300',
            'site_title'           => 'length:0,100',
            'site_subtitle'        => 'length:0,200',
            'site_home_content'    => 'length:0,50000',
            'site_feature_list'    => 'array',
            'site_custom_property' => 'array',
            'site_custom_css'      => 'length:0,50000',
            'site_custom_scripts'  => 'length:0,50000',
        ];

    protected $scene
        = [
            'add'               => ['name', 'alias_name'],
            'edit'              => [
                'id',
                'name',
                'alias_name',
                'site_name',
                'site_logo',
                'site_title',
                'site_subtitle',
                'site_home_content',
                'site_feature_list',
                'site_custom_property',
                'site_custom_css',
                'site_custom_scripts',
            ],
            'del'               => ['id',],
            'publish'           => ['id',],
            'clearPublish'      => ['id',],
            'pullPublishStatus' => ['id',],
        ];

}