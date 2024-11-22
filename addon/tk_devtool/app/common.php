<?php

use think\Container;
use think\Response;
use think\facade\Lang;
use think\facade\Queue;
use think\facade\Cache;
use core\util\Snowflake;
use app\service\core\upload\CoreImageService;
// 应用公共文件

/**
 * 设置文件夹权限
 */
function setFolderPermissions($folderPath, $permission) {
    // 设置当前文件夹的权限
    chmod($folderPath, $permission);

    // 打开文件夹，迭代设置其子目录的权限
    $folder = opendir($folderPath);
    while ($file = readdir($folder)) {
        if ($file != '.' && $file != '..') {
            $filePath = $folderPath . '/' . $file;
            // 如果是文件夹，则递归调用此函数设置其权限
            if (is_dir($filePath)) {
                setFolderPermissions($filePath, $permission);
            }
            // 设置文件权限
            chmod($filePath, $permission);
        }
    }
    closedir($folder);
}


