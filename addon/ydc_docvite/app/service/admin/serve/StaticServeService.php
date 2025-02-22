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

namespace addon\ydc_docvite\app\service\admin\serve;

use core\base\BaseAdminService;

/**
 * Static file serve.
 *
 * @package addon\ydc_docvite\app\service\admin\serve
 */
class StaticServeService extends BaseAdminService {
    const CHUNK_SIZE = 1048576;
    
    public function serveFile($filename = ''):void {
        if (!$filename || !($fd = fopen($filename, 'rb'))) {
            header('Status: 404');
            
            return;
        }
        ob_clean();
        header('Content-Type:' . filetype($filename));
        while (!feof($fd)) {
            echo fread($fd, self::CHUNK_SIZE);
            ob_flush();
        }
        fclose($fd);
    }
}