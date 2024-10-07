<?php
namespace addon\hsx_yinsheng_pay\app\util;

class CacheUtil
{
    private static $cacheMap = [];

    public static function getCacheValue($key, $func)
    {
        if (array_key_exists($key, self::$cacheMap)) {
            return self::$cacheMap[$key];
        }
        if (is_callable($func)) {
            return self::$cacheMap[$key] = call_user_func($func);
        }
        return null;
    }
}