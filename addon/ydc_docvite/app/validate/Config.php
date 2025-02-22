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
 * Config validator.
 *
 * @package addon\ydc_docvite\app\validate
 */
class Config extends Validate {
    
    protected $rule = [
        'data' => 'require|array',
    ];
    
    protected $message = [];
    
    protected $scene = [
        'edit' => ['data'],
    ];
    
}