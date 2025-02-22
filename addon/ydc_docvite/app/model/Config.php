<?php

namespace addon\ydc_docvite\app\model;

use core\base\BaseModel;
use core\exception\CommonException;

/**
 * 配置.
 *
 * @property string $name   配置名称.
 * @property string $value  值.
 */
class Config extends BaseModel {
    protected $pk = 'id';
    protected $name = 'ydc_docvite_config';
    
    protected $autoWriteTimestamp = FALSE;
    protected $updateTime = '';
    
    /**
     * getConfigKV.
     *
     * @param int $site_id
     *
     * @return array
     * @throws
     */
    public static function getConfigKV(int $site_id):array {
        $data   = self::where('site_id', $site_id)
                      ->select();
        $config = [];
        foreach ($data as $v) {
            if (is_string($v['value']) && in_array(
                    $v['name'],
                    [
                        'addonNavis',
                        'footerText',
                        'footerCopyright',
                    ]
                )) {
                $v['value'] = json_decode($v['value'], TRUE);
            }
            $config[ $v['name'] ] = $v['value'];
        }
        
        return $config;
    }
    
    /**
     * getConfigList.
     *
     * @param int $site_id
     *
     * @return array
     * @throws
     */
    public function getConfigList(int $site_id):array {
        return self::getConfigKV($site_id);
    }
    
    /**
     * Save config list.
     *
     * @param array $data
     * @param int   $site_id
     *
     * @return void
     * @throws
     */
    public function saveConfigList(array $data, int $site_id):void {
        foreach ($data as $k => $v) {
            if ($k === 'addonNavis') {
                if (!is_array($v)) {
                    throw new CommonException('首页附加导航参数有误');
                }
                foreach ($v as $item) {
                    if (empty($item['text']) || empty($item['url'])) {
                        throw new CommonException('首页附加导航参数有误');
                    }
                }
            }
            if (!is_string($v) && in_array(
                    $k,
                    [
                        'addonNavis',
                        'footerText',
                        'footerCopyright',
                    ]
                )) {
                $v = json_encode($v);
            }
            $v = trim($v);
            if ($this->where('name', $k)
                     ->where('site_id', $site_id)
                     ->count('id') > 0) {
                $this->where('name', $k)
                     ->update(['value' => $v]);
                
                continue;
            }
            self::create(
                [
                    'site_id' => $site_id,
                    'name'    => $k,
                    'value'   => $v,
                ]
            );
        }
    }
}