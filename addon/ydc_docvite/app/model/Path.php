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

/**
 * 仓库路径.
 *
 * @package addon\ydc_docvite\app\model
 */
class Path extends BaseModel {
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
    protected $name = 'ydc_docvite_path';
    
    public static function getAllChildIds(int $site_id, int $vault_id, int $id):array {
        $paths  = self::where([
                                  'site_id'   => $site_id,
                                  'vault_id'  => $vault_id,
                                  'parent_id' => $id,
                              ])
                      ->select();
        $result = [];
        if (!is_iterable($paths)) {
            return $result;
        }
        foreach ($paths as $path) {
            $result[] = $path->id;
            $result   = array_merge($result, self::getAllChildIds($site_id, $vault_id, $path->id));
        }
        
        return $result;
    }
}