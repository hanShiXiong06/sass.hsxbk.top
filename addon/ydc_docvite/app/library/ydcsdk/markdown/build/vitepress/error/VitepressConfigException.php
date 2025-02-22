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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress\error;

use addon\ydc_docvite\app\library\ydcsdk\markdown\error\GeneralException;

use Throwable;

/**
 * VitepressConfigException.
 *
 * @package ydcsdk\library\markdown\error
 */
class VitepressConfigException extends GeneralException {
    const ErrCode = 500000;
    
    public function __construct($message = "VitepressConfigException", $code = self::ErrCode, Throwable $previous = NULL) {
        parent::__construct($message, $code, $previous);
    }
}