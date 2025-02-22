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

namespace addon\ydc_docvite\app\library\ydcsdk\markdown;

/**
 * Markdown Utils.
 *
 * @package ydcsdk\library\markdown
 */
class Utils {
    const PropertyPattern = '/^[\r\n\s]*-{3}([\r\n]|\n+)(\s*?\w+:(.*?))-{3}/s';
    
    /**
     * 解析frontMatter返回文档属性和裁剪掉的剩余文档内容.
     *
     * @param string $content
     *
     * @return array
     */
    public static function decodeFrontMatter(string $content):array {
        $propertyMap = self::decodeMarkdownProperty($content);
        $source      = preg_replace(self::PropertyPattern, '', $content);// 去掉特殊的元数据部分.
        $source      = ltrim($source);
        
        return [$propertyMap, $source];
    }
    
    /**
     * 解析frontMatter.
     *
     * @param string $content
     *
     * @return array
     */
    public static function decodeMarkdownProperty(string $content):array {
        $matches = [];
        $content = html_entity_decode($content);
        preg_match_all(self::PropertyPattern, $content, $matches);
        $property = [];
        if (isset($matches[2][0])) {
            $property = yaml_parse($matches[2][0]);
        }
        
        return $property;
    }
}