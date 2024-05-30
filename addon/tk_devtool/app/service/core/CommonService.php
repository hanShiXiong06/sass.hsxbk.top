<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\tk_devtool\app\service\core;

use core\base\BaseAdminService;
use core\exception\CommonException;
use core\util\Terminal;

/**
 * 配置信息服务层
 * Class DevtoolService
 * @package addon\tk_devtool\service\core\common
 */
class CommonService extends BaseAdminService
{


    public function __construct()
    {
        parent::__construct();

    }

    /**
     * 设置文件夹权限
     */
    public function setFolderPermissions($folderPath, $permission)
    {
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

    /**
     * 获取当前操作系统
     */
    public function os()
    {
        return strtolower(PHP_OS);
    }
    public function getUrl()
    {
        $isSecure = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on';
        $domain = $_SERVER['HTTP_HOST'];
        if ($isSecure) {
            $url = 'https://' . $domain;
        } else {
            $url = 'http://' . $domain;
        }
        return $url;
    }
    /**
     * 执行命令函数
     */
    public function doTerminal($command,$cwd){
        if (!function_exists('proc_open') || !function_exists('proc_close')) return 'Function proc_open or proc_close disabled';

        // 设置执行时长
        set_time_limit(0);

        // 执行命令，并将输出保存到变量中
        $descriptorspec = array(
            0 => array("pipe", "r"),  // 标准输入，我们不需要
            1 => array("pipe", "w"),  // 标准输出，我们需要将其捕获
            2 => array("pipe", "w")   // 标准错误，我们也需要将其捕获
        );
        $process = proc_open($command, $descriptorspec, $pipes, $cwd);

        // 检查进程是否成功创建
        if (!is_resource($process)) {
            return "Could not execute command: $command";
        }

        // 从管道中获取命令的输出
        $output = '';
        while (!feof($pipes[1])) {
            $output .= fgets($pipes[1]);
        }
        while (!feof($pipes[2])) {
            $output .= fgets($pipes[2]);
        }

        // 关闭管道和进程
        fclose($pipes[0]);
        fclose($pipes[1]);
        fclose($pipes[2]);
        $status = proc_close($process);

        // 判断命令的执行结果
        if ($status === 0) {
            return strpos($output, 'Command failed') !== false ? $output : true;
        } else {
            return $output;
        }
    }

}