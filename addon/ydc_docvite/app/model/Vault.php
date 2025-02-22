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

namespace addon\ydc_docvite\app\model;

use core\base\BaseModel;
use think\db\Query;

/**
 * 仓库.
 *
 * @package addon\ydc_docvite\app\model
 *
 * @property int    $id
 * @property int    $site_id
 * @property string $name
 * @property string $alias_name
 */
class Vault extends BaseModel {
    /**
     * 数据表主键
     *
     * @var string
     */
    protected $pk = 'id';
    
    /**
     * 模型名称
     *
     * @var string
     */
    protected $name = 'ydc_docvite_vault';
    
    public function searchNameAttr(Query $query, $value, $data):void {
        if ($value) {
            $query->where('name|alias_name', 'like', "$value%");
        }
    }
    
}