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
 * VitepressCmdFailedException.
 *
 * @package ydcsdk\library\markdown\error
 */
class VitepressCmdFailedException extends GeneralException {
    const ErrCode = 500001;
    
    public function __construct($message = "ViteCmdFailedException", $code = self::ErrCode, Throwable $previous = NULL) {
        parent::__construct($message, $code, $previous);
    }
}