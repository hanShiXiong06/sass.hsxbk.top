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
class Markdown extends Validate {
    
    protected $rule = [
        'uuid'           => 'require',
        'id'             => 'require|integer|egt:1',
        'vault_id'       => 'require|integer|egt:1',
        'path_id'        => 'require|integer|egt:1',
        'title'          => 'require|length:2,100',
        'description'    => 'length:0,100',
        'keywords'       => 'length:0,100',
        'customProperty' => 'array',
        'content'        => 'require|length:2,50000',
    ];
    
    protected $message = [];
    
    protected $scene = [
        'add'     => ['vault_id', 'path_id', 'title', 'description', 'keywords', 'content', 'customProperty'],
        'edit'    => ['id', 'title', 'keywords', 'description', 'content', 'customProperty'],
        'detail'  => ['id'],
        'del'     => ['id'],
        'publish' => ['id'],
    ];
    
}