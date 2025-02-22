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

namespace addon\ydc_docvite\app\library\ydcsdk\network;

use Exception;

class System {
    
    /**
     * getAllSystemMACAddresses.
     *
     * @throws \Exception
     */
    public static function getAllSystemMACAddresses():array {
        exec('/sbin/ifconfig -a', $config, $retCode);
        if ($retCode != 0 || empty($config)) {
            throw new Exception('failed to run ifconfig, code ' . $retCode);
        }
        $temp_array = [];
        $mac_addrs  = [];
        foreach ($config as $value) {
            if (preg_match(
                    '/[0-9a-f][0-9a-f][:-]' . '[0-9a-f][0-9a-f][:-]' . '[0-9a-f][0-9a-f][:-]' . '[0-9a-f][0-9a-f][:-]' . '[0-9a-f][0-9a-f][:-]' . '[0-9a-f][0-9a-f]/i',
                    $value,
                    $temp_array
                ) === 1) {
                if (isset($temp_array[0])) {
                    $mac_addrs[] = $temp_array[0];
                }
            }
        }
        
        return $mac_addrs;
    }
}