<?php

namespace addon\ydc_docvite;

/**
 * 插件安装之后单独的插件方法
 */
class Addon {
    /**
     * 插件安装执行
     */
    public function install() {
        return TRUE;
    }
    
    /**
     * 插件卸载执行
     */
    public function uninstall() {
        return TRUE;
    }
    
    /**
     * 插件升级执行
     */
    public function upgrade() {
        return TRUE;
    }
    
}
