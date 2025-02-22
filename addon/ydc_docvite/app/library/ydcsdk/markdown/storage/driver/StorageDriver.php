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

/**
 * 存储驱动接口定义.
 */
interface StorageDriver {
    
    /**
     * 保存文件.
     *
     * @param string $filename
     * @param string $content
     *
     * @return bool
     * @throws  \Exception
     */
    public function save(string $filename, string $content):bool;
    
    /**
     * 获取文件.
     *
     * @param string $filename
     *
     * @return string
     * @throws  \Exception
     */
    public function get(string $filename):string;
    
    /**
     * 文件是否存在.
     *
     * @param string $filename
     *
     * @return bool
     * @throws  \Exception
     */
    public function exists(string $filename):bool;
    
    /**
     * 获取文件访问地址.
     *
     * @param string $filename
     *
     * @return string
     * @throws  \Exception
     */
    public function getURL(string $filename):string;
    
    /**
     * 获取文件列表.
     *
     * @param int   $start
     * @param int   $limit
     * @param array $filter
     * @param array $order
     *
     * @return array
     * @throws  \Exception
     */
    public function getList(int $start, int $limit = 30, array $filter = [], array $order = []):array;
    
    /**
     * 删除文件.
     *
     * @param string $filename
     *
     * @return void
     * @throws  \Exception
     */
    public function remove(string $filename):void;
    
    /**
     * 获取存储容量.
     *
     * @param string $path 指定相对路径. 为空表示获取根大小.
     *
     * @return int
     * @throws  \Exception
     */
    public function getVolumeSize(string $path = ''):int;
    
    /**
     * 检查文本内容安全.
     *
     * @param string $content 内容.
     *
     * @return bool
     * @throws \app\exception\TipException
     * @throws \Exception
     */
    public function checkText(string $content):bool;
}