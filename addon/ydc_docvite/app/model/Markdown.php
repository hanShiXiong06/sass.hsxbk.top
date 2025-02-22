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

use think\db\Query;
use think\model\relation\HasOne;

use core\exception\CommonException;
use core\base\BaseModel;

/**
 * 文档.
 *
 * @package addon\ydc_docvite\app\model
 * @property int    $id
 * @property string $name
 * @property string $alias_name
 * @property int    $vault_id
 * @property int    $path_id
 */
class Markdown extends BaseModel {
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
    protected $name = 'ydc_docvite_markdown';
    
    public function withVault():HasOne {
        return $this->hasOne(Vault::class, 'id', 'vault_id');
    }
    
    public function withPath():HasOne {
        return $this->hasOne(Path::class, 'id', 'path_id');
    }
    
    public function searchTitleAttr(Query $query, $value, $data):void {
        if ($value) {
            $query->where('title|keywords|description', 'like', "$value%");
        }
    }
    
    public function searchContentAttr(Query $query, $value, $data):void {
        if ($value) {
            $query->where('content', 'like', "$value%");
        }
    }
    
    /**
     * $propertyMap 获取器.
     *
     * @param mixed $value
     * @param mixed $data
     *
     * @return array
     */
    public function getPropertyMapAttr($value, $data):array {
        if (empty($data['property_json'])) {
            return [];
        }
        
        return json_decode($data['property_json'], JSON_UNESCAPED_UNICODE);
    }
    
    /**
     * $propertyMap 修改器.
     *
     * @param mixed $value
     *
     * @return void
     * @throws \Exception
     */
    public function setPropertyMapAttr($value):void {
        if (!is_array($value)) {
            throw new CommonException('property map needs to be an array');
        }
        
        $js = json_encode($value);
        if ($js === FALSE) {
            throw new CommonException('property map cannot be json encoded');
        }
        
        $this->set('property_json', $js);
    }
}