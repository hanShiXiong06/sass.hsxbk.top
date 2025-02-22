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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\error;

use Throwable;

/**
 * 队列满.
 *
 * @package ydcsdk\library\markdown\error
 */
class QueueFullException extends GeneralException {
    const ErrCode = 1001;
    
    public function __construct($message = "QueueFullException", $code = self::ErrCode, Throwable $previous = NULL) {
        parent::__construct($message, $code, $previous);
    }
}