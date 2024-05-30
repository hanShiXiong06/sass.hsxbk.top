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

namespace addon\tk_devtool\app\adminapi\controller;


use addon\tk_devtool\app\job\AdminBuild;
use addon\tk_devtool\app\job\AdminInstall;
use addon\tk_devtool\app\job\UniappBuildH5;
use addon\tk_devtool\app\job\UniappInstall;
use core\base\BaseAdminController;
use addon\tk_devtool\app\service\admin\DevtoolService;
use app\service\core\addon\CoreAddonInstallService;
use core\exception\AddonException;
use think\db\exception\PDOException;
use think\Exception;
use think\facade\Cache;
use think\facade\Db;
use think\cache\driver\Redis;
class Index extends BaseAdminController
{
    public function checkBuild()
    {
        $keyh5buid = '{redis-queue}-waitingaddon\tk_devtool\app\job\UniappBuildH5';
        $keyh5 = '{redis-queue}-waitingaddon\tk_devtool\app\job\UniappInstall';
        $keyadminbuid = '{redis-queue}-waitingaddon\tk_devtool\app\job\AdminBuild';
        $keyadmin = '{redis-queue}-waitingaddon\tk_devtool\app\job\AdminInstall';
        $redis = new Redis();
        $keyh5buid = $redis->lRange( $keyh5buid, 0, -1);
        $keyh5 = $redis->lRange( $keyh5, 0, -1);
        $keyadminbuid = $redis->lRange($keyadminbuid, 0, -1);
        $keyadmin = $redis->lRange($keyadmin, 0, -1);
        if (!empty($keyh5buid)||!empty($keyh5)||!empty($keyadminbuid)||!empty($keyadmin))
        {
            return success('正在编译',['code'=>0,'msg'=>'正在编译']);
        }else{
            return success('暂无任务',['code'=>1,'msg'=>'无编译任务']);
        }
    }
    public function asyncBuild()
    {
        $keyh5buid = '{redis-queue}-waitingaddon\tk_devtool\app\job\UniappBuildH5';
        $keyh5 = '{redis-queue}-waitingaddon\tk_devtool\app\job\UniappInstall';
        $keyadminbuid = '{redis-queue}-waitingaddon\tk_devtool\app\job\AdminBuild';
        $keyadmin = '{redis-queue}-waitingaddon\tk_devtool\app\job\AdminInstall';
        $redis = new Redis();
        $keyh5buid = $redis->lRange( $keyh5buid, 0, -1);
        $keyh5 = $redis->lRange( $keyh5, 0, -1);
        $keyadminbuid = $redis->lRange($keyadminbuid, 0, -1);
        $keyadmin = $redis->lRange($keyadmin, 0, -1);
        if (!empty($keyh5buid)||!empty($keyh5)||!empty($keyadminbuid)||!empty($keyadmin))
            throw new Exception('正在安装编译，预计3-5分钟完成');
        AdminInstall::dispatch([]);
        UniappInstall::dispatch([]);
        AdminBuild::dispatch([]);
        UniappBuildH5::dispatch([]);
        return success("请3-5分钟后刷新页面查看效果");
    }

    /**
     * 执行命令
     */
    public function execute()
    {
        $data = $this->request->params([
            ["path", "admin"],
            ["cmd", "npm run build"],
        ]);

        return success('TK_DEVTOOL_SUCCESS', (new DevtoolService())->execute($data));
    }

    /**
     * 移动文件
     */
    public function moveFile()
    {
        //初始化文件
        (new DevtoolService())->moveFile();
        (new DevtoolService())->updateAdminPackageJson();
        //修改uniapp打包配置
        (new DevtoolService())->updateUniappPackageJson();
        return success("TK_DEVTOOL_SUCCESS");
    }

    /**
     * 移动文件
     */
    public function depend()
    {
        return success((new DevtoolService())->depend());
    }

    public function asyncAdmin()
    {
        //初始化文件
        (new DevtoolService())->moveFile();
        (new DevtoolService())->updateAdminPackageJson();
        (new DevtoolService())->dependadmin();
        return success("TK_DEVTOOL_SUCCESS");
    }

    /**
     * 初始化仓库
     */
    public function setGit()
    {
        $url = "https://gitee.com/niucloud-team/niucloud-admin.git";
        $path = dirname(root_path());
        (new DevtoolService())->gitStart($path, $url);
        $this->gitForce();
        return success('TK_DEVTOOL_SUCCESS');
    }

    /**
     * 强制拉取远程代码
     */
    public function gitForce()
    {
        $url = "https://gitee.com/niucloud-team/niucloud-admin.git";
        $path = dirname(root_path());
        (new DevtoolService())->editGitConfig($path, $url);
        (new DevtoolService())->backEnv();
        (new DevtoolService())->backVersion();
        (new DevtoolService())->gitPullForce($path);
        (new DevtoolService())->backGitConfig($path, $url);
        (new DevtoolService())->backEnv(1);
        return success('TK_DEVTOOL_SUCCESS');
    }

    /**
     * 拉取最新代码远程代码
     */
    public function gitUpdate()
    {
        $url = "https://gitee.com/niucloud-team/niucloud-admin.git";
        $path = dirname(root_path());
        (new DevtoolService())->editGitConfig($path, $url);
        (new DevtoolService())->backEnv();
        (new DevtoolService())->backVersion();
        (new DevtoolService())->gitPull($path);
        (new DevtoolService())->backGitConfig($path, $url);
        (new DevtoolService())->backEnv(1);
        return success('TK_DEVTOOL_SUCCESS');
    }

    /**
     * 更新数据库
     */
    public function updateSql()
    {
        (new DevtoolService())->updateSql();
        return success('TK_DEVTOOL_SUCCESS');
    }

    /**
     * 接口数据
     */
    public function getConfig()
    {

        return success("TK_DEVTOOL_SUCCESS", (new DevtoolService())->getConfig());
    }

    public function setConfig()
    {
        $data = $this->request->params([
            ['username', ''],
            ['password', ''],
        ]);
        (new DevtoolService())->setConfig($data);
        return success('TK_DEVTOOL_SUCCESS');
    }

    public function getOs()
    {
        $os = (new DevtoolService())->os();
        $win = 'win';
        if (strpos($os, $win) !== false) {
            return success('win');
        } else {
            return success('返回成功');
        }

    }

    public function backupFolder($source, $destination)
    {
        if (!is_dir($destination)) {
            mkdir($destination, 0755, true);
        }

        $dir = opendir($source);

        while (($file = readdir($dir)) !== false) {
            if ($file != '.' && $file != '..') {
                $sourcePath = $source . '/' . $file;
                $destinationPath = $destination . '/' . $file;

                if (is_dir($sourcePath)) {
                    $this->backupFolder($sourcePath, $destinationPath);
                } else {
                    copy($sourcePath, $destinationPath);
                }
            }
        }

        closedir($dir);
    }

    public function restoreBackup($source, $destination)
    {
        if (!is_dir($destination)) {
            mkdir($destination, 0755, true);
        }

        $dir = opendir($source);

        while (($file = readdir($dir)) !== false) {
            if ($file != '.' && $file != '..') {
                $sourcePath = $source . '/' . $file;
                $destinationPath = $destination . '/' . $file;

                if (is_dir($sourcePath)) {
                    $this->restoreBackup($sourcePath, $destinationPath);
                } else {
                    copy($sourcePath, $destinationPath);
                }
            }
        }

        closedir($dir);
    }

}
