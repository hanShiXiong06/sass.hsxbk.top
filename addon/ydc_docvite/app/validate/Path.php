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
class Path extends Validate {
    
    protected $rule = [
        'id'              => 'require|integer|egt:1',
        'vault_id'        => 'require|integer|egt:1',
        'vault_id_index'  => 'integer|egt:0',
        'parent_id'       => 'require|integer|egt:1',
        'parent_id_index' => 'integer|egt:0',
        'name'            => 'require|regex:/^[a-zA-Z0-9_]{2,50}$/',
        'alias_name'      => 'length:0,50',
    ];
    
    protected $message = [];
    
    protected $scene = [
        'index'      => ['vault_id_index', 'parent_id_index'],
        'add'        => ['vault_id', 'name', 'parent_id', 'alias_name'],
        'edit'       => ['id', 'name', 'alias_name'],
        'del'        => ['id',],
        'selectTree' => ['vault_id',],
    ];
    
}