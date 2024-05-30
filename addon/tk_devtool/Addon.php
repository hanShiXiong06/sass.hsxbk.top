<?php

namespace addon\tk_devtool;

use addon\tk_devtool\app\service\admin\DevtoolService;
use addon\tk_devtool\app\job\AdminInstall;
use addon\tk_devtool\app\job\AdminBuild;
use addon\tk_devtool\app\job\UniappInstall;
use addon\tk_devtool\app\job\UniappBuildH5;
/**
 * 插件安装之后单独的插件方法
 * Class HelloWorld
 * @package addon\hello_world
 */
class Addon
{
    /**
     * 插件安装执行
     */
    public function install()
    {
        //初始文件及配置
        (new DevtoolService())->moveFile();
        //修改admin打包配置
        //合并依赖
        (new DevtoolService())->dependadmin();
        //执行相关命令队列
        AdminInstall::dispatch([]);
        AdminBuild::dispatch([]);
        UniappInstall::dispatch([]);
        UniappBuildH5::dispatch([]);

        return true;
    }

    /**
     * 插件卸载执行
     */
    public function uninstall()
    {
        return true;
    }

    /**
     * 插件升级执行
     */
    public function upgrade()
    {
        return true;
    }

    /**
     * 删除文件夹
     */
    public function deleteFolder($folderPath)
    {
        if (!is_dir($folderPath)) {
            return;
        }

        $files = array_diff(scandir($folderPath), array('.', '..'));

        foreach ($files as $file) {
            $filePath = $folderPath . '/' . $file;

            if (is_dir($filePath)) {
                $this->deleteFolder($filePath);
            } else {
                unlink($filePath);
            }
        }

        rmdir($folderPath);
    }
}