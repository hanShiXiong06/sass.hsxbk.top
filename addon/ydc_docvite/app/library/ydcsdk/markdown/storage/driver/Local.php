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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\storage\driver;

use addon\ydc_docvite\app\library\ydcsdk\markdown\error\VolumeLimitException;

use Exception;
use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;

/**
 * 本地存储驱动.
 *
 * @package ydcsdk\library\markdown\storage\driver
 */
class Local implements StorageDriver {
    
    protected array $_config = [
        'root_path'    => '',
        'domain_url'   => '',
        'volume_limit' => -1,// 存储容量限制. 字节.
    ];
    
    /**
     * __construct.
     *
     * @param array $config
     *
     * @throws \Exception
     */
    public function __construct(array $config) {
        foreach ($this->_config as $key => &$value) {
            if (isset($config[ $key ])) {
                $value = $config[ $key ];
            }
        }
        
        if (!is_dir($this->_config['root_path']) || !is_writable($this->_config['root_path'])) {
            throw new Exception('root_path invalid');
        }
        $this->_config['root_path'] = rtrim($this->_config['root_path'], '/');
        
        if (empty($config['domain_url'])) {
            throw new Exception('root_path domain_url');
        }
        $this->_config['domain_url'] = rtrim($config['domain_url'], '/');
    }
    
    /**
     * Get file real path.
     *
     * @param string $filename
     *
     * @return string
     * @throws \Exception
     */
    protected function _getRealPathFilename(string $filename):string {
        if ($filename === '') {
            throw new Exception('invalid filename');
        }
        
        return sprintf('%s/%s', $this->_config['root_path'], ltrim($filename, '/'));
    }
    
    /**
     * 计算目录大小.
     *
     * @param string $path
     *
     * @return int
     */
    final protected function _calcDirSize(string $path):int {
        $total = 0;
        $path  = realpath($path);
        if ($path !== FALSE && $path != '' && is_dir($path)) {
            foreach (
                new RecursiveIteratorIterator(
                    new RecursiveDirectoryIterator($path, FilesystemIterator::SKIP_DOTS)
                ) as $object
            ) {
                $total += $object->getSize();
            }
        }
        
        return $total;
    }
    
    final protected function _getRootPathSize():int {
        return $this->_calcDirSize($this->_config['root_path']);
    }
    
    /**
     * @inheritDoc
     */
    public function save(string $filename, string $content):bool {
        if ($content === '') {
            return FALSE;
        }
        
        if ($this->_config['volume_limit'] !== -1) {
            $plus = strlen($content);
            if (($this->_getRootPathSize() + $plus) > $this->_config['volume_limit']) {
                throw new VolumeLimitException('Root path size exceed limit');
            }
        }
        
        if (FALSE === file_put_contents($this->_getRealPathFilename($filename), $content)) {
            return FALSE;
        }
        
        return TRUE;
    }
    
    /**
     * @inheritDoc
     */
    public function get(string $filename):string {
        return file_get_contents($this->_getRealPathFilename($filename));
    }
    
    /**
     * @inheritDoc
     */
    public function getList(int $start, int $limit = 30, array $filter = [], array $order = []):array {
        // todo: 列表读取.
        return [];
    }
    
    /**
     * @inheritDoc
     */
    public function remove(string $filename):void {
        @unlink($this->_getRealPathFilename($filename));
    }
    
    /**
     * @inheritDoc
     */
    public function getVolumeSize(string $path = ''):int {
        if ($path === '') {
            return $this->_getRootPathSize();
        }
        
        return $this->_calcDirSize($this->_getRealPathFilename($path));
    }
    
    /**
     * @inheritDoc
     */
    public function getURL(string $filename):string {
        return sprintf('%s/%s', $this->_config['domain_url'], $filename);
    }
    
    /**
     * @inheritDoc
     */
    public function exists(string $filename):bool {
        return is_file($this->_getRealPathFilename($filename));
    }
    
    /**
     * @inheritDoc
     */
    public function checkText(string $content):bool {
        return TRUE;
    }
}