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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress;

use addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress\error\VitepressConfigException;

/**
 * Vitepress 构建服务配置.
 *
 * @package addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress
 */
class Config {
    public string $workdir = '';
    
    /**
     * validate config.
     *
     * @return void
     * @throws
     */
    public function validate():void {
        if (!is_dir($this->workdir) || !is_writable($this->workdir)) {
            throw new VitepressConfigException('invalid workdir');
        }
    }
    
}