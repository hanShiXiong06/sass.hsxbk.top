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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\storage;

use addon\ydc_docvite\app\library\ydcsdk\markdown\storage\driver\Local;
use addon\ydc_docvite\app\library\ydcsdk\markdown\storage\driver\StorageDriver;
use addon\ydc_docvite\app\library\ydcsdk\markdown\storage\driver\TXCOS;
use Exception;
use think\file\UploadedFile;

/**
 * 文档附件存储.
 *
 * @package ydcsdk\library\markdown\storage
 */
class Attachment {
    
    protected array $_config = [
        'driver'       => 'Local',
        'driverConfig' => [],
    ];
    protected ?StorageDriver $_driver = NULL;
    
    /**
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
        
        $this->_initDriver();
    }
    
    /**
     * _initDriver.
     *
     * @return void
     * @throws \Exception
     */
    protected function _initDriver():void {
        if ($this->_config['driver'] === 'Local') {
            $this->_driver = new Local($this->_config['driverConfig']);
            
            return;
        }
        if ($this->_config['driver'] === 'TXCOS') {
            $this->_driver = new TXCOS($this->_config['driverConfig']);
            
            return;
        }
        
        throw new Exception('unknown driver');
        
        // TODO：其他驱动.
    }
    
    /**
     * Save upload file.
     *
     * @param string                   $filename
     * @param \think\file\UploadedFile $file
     *
     * @return void
     * @throws \Exception
     */
    public function saveUpload(string $filename, UploadedFile $file):void {
        $upFileRealPath = $file->getRealPath();
        if ($upFileRealPath === FALSE) {
            throw new Exception('failed to get uploaded file');
        }
        
        $content = file_get_contents($upFileRealPath);
        if (empty($content)) {
            throw new Exception('failed to get content of uploaded file');
        }
        if (!$this->_driver->save($filename, $content)) {
            throw new Exception('failed to save uploaded file');
        }
    }
    
    /**
     * 附件是否存在.
     *
     * @param string $filename
     *
     * @return bool
     * @throws \Exception
     */
    public function exists(string $filename):bool {
        return $this->_driver->exists($filename);
    }
    
    /**
     * 获取附件url.
     *
     * @param string $filename
     *
     * @return string
     * @throws \Exception
     */
    public function getUrl(string $filename):string {
        return $this->_driver->getURL($filename);
    }
    
    /**
     * 删除附件.
     *
     * @param string $filename
     *
     * @return void
     * @throws \Exception
     */
    public function delete(string $filename):void {
        $this->_driver->remove($filename);
    }
    
    /**
     * checkText.
     *
     * @param string $content
     *
     * @return bool
     * @throws
     */
    public function checkText(string $content):bool {
        if ($content === '') {
            return TRUE;
        }
        
        return $this->_driver->checkText($content);
    }
}