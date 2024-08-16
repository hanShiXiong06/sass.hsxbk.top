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

namespace addon\tk_devtool\app\service\admin;

use core\base\BaseAdminService;
use app\service\core\sys\CoreConfigService;
use core\exception\AddonException;
use core\exception\CommonException;
use core\util\Terminal;
use think\db\exception\PDOException;
use think\Exception;
use think\facade\Db;

/**
 * 配置信息服务层
 * Class DevtoolService
 * @package addon\tk_jhkd\service\core\devtool
 */
class DevtoolService extends BaseAdminService
{
    private $files = [
        'uni-app' => ['App.vue', 'package.json', 'windi.config.ts', 'vite.config.ts', 'tsconfig.json', 'package-lock.json', 'main.js', '.env.development', '.env.production'],
    ];
    private $config;

    public function __construct()
    {
        parent::__construct();
        if ($this->site_id != 0) throw new \Exception('非法访问');
        $this->config = $this->getConfig();
        $this->config = $this->config['value'];
        //增加环境检测npm检查
        $this->checkEnv();
    }

    /**
     * 检查环境
     */
    public function checkEnv()
    {
        if ($this->os() == 'linux') {
            if (!function_exists('putenv') || !function_exists('putenv')) throw new CommonException('请确保php环境函数putenv未禁用');
        }
        if (!function_exists('proc_open') || !function_exists('proc_close')) throw new CommonException('请确保php环境函数proc_open、proc_close未禁用');
//        $npmStatus = Terminal::execute(root_path(), 'npm -v');
//        if (!$npmStatus) throw new CommonException('npm环境检查异常');
    }

    /**
     * 获取配置信息
     */
    public function getConfig()
    {
        $data = (new CoreConfigService())->getConfig($this->site_id,'tk_devtool_gitconfig');
        if (empty($data)) {
            $data['value'] = ["username" => "", "password" => ""];
        }
        return $data;
    }

    /**
     * 设置配置信息
     */
    public function setConfig($value)
    {
        return (new CoreConfigService())->setConfig($this->site_id,'tk_devtool_gitconfig', $value);
    }

    /**
     * git执行命令
     */
    public function gitExecute($data, $type = 0)
    {
        $dir = $data['path'];
        chdir($dir);
        if ($this->os() == 'linux') {
            if (!function_exists('putenv') || !function_exists('putenv')) return 'Function putenv disabled';
            putenv("PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin");
        }
        $result = Terminal::execute($dir, $data['cmd']);
        if ($result !== true) {
            throw new CommonException($result);
        }
        return $result;
    }

    /**
     * 执行命令
     */
    public function execute($data, $type = 0)
    {
        $cmdArray = ['npm install', 'npm run build', 'npm run build:h5', 'npm run build:mp-weixin', 'composer install', 'composer update'];
        if ($type == 0) {
            if (!in_array($data['cmd'], $cmdArray)) throw new CommonException('不允许执行的命令');
        }
        $dir = dirname(root_path()) . DIRECTORY_SEPARATOR . $data['path'];
        chdir($dir);
        if ($this->os() == 'linux') {
            if (!function_exists('putenv') || !function_exists('putenv')) return 'Function putenv disabled';
            putenv("PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin");
        }
        //设置admin文件夹目录
        if ($data['cmd'] == "npm run build") {
            //解决admin打包报错
            $this->deleteAdminProduction();
            $this->setFolderPermissions($dir, 0777);
            $this->setFolderPermissions(dirname(root_path()) . '/niucloud/public/admin', 0777);
        }
        //设置uni-app文件夹目录
        if ($data['cmd'] == "npm run build:h5") {
            $this->setFolderPermissions($dir, 0777);
            $this->setFolderPermissions(dirname(root_path()) . '/niucloud/public/wap', 0777);
            //修改.env.production文件
            $this->editEnvProductionUniappCli();
        }
        if ($data['cmd'] == "npm run build:mp-weixin") {
            $domain = $_SERVER['HTTP_HOST'];
            $baseUrl = 'https://' . $domain . '/api/';
            $imgUrl = 'https://' . $domain;
            $this->editEnvProductionUniappCli($baseUrl, $imgUrl);
            $this->setFolderPermissions($dir, 0777);
            $this->setFolderPermissions(dirname(root_path()) . '/miniappcli/dist', 0777);
        }
        //执行依赖安装前清除缓存
        if ($data['cmd'] == "npm install") {
            $result = Terminal::execute($dir, 'npm cache clean --force');
            if ($result !== true) {
                throw new CommonException($result);
            }
        }
        //composer命令执行增加环境检测
//        if($data['cmd']=="composer install"||$data['cmd']=="composer update"){
//            $npmStatus = Terminal::execute(root_path(), 'composer -v');
//            if (!$npmStatus) throw new CommonException('composer环境检查异常');
//        }
        $result = Terminal::execute($dir, $data['cmd']);
        if ($result !== true) {
            throw new CommonException($result);
        }
        //还原admin文件夹目录
        if ($data['cmd'] == "npm run build") {
            $this->setFolderPermissions($dir, 0755);
            $this->setFolderPermissions(dirname(root_path()) . '/niucloud/public/admin', 0755);
        }
        //还原uni-app-cli文件夹目录
        if ($data['cmd'] == "npm run build:h5") {
            $this->setFolderPermissions($dir, 0755);
            $this->setFolderPermissions(dirname(root_path()) . '/niucloud/public/wap', 0755);
        }
        if ($data['cmd'] == "npm run build:mp-weixin") {
            $this->setFolderPermissions($dir, 0755);
            $this->setFolderPermissions(dirname(root_path()) . '/miniappcli/dist', 0755);
        }
        return $result;
    }

    /**
     * 修改生产环境文件
     */
    public function editEnvProductionUniappCli($baseUrl = '/api/', $imgUrl = '')
    {
        $version = config('version')['version'];
        $file = dirname(root_path()) . '/uni-app/.env.production';
        $content = file_get_contents($file);
        $content = preg_replace('/VITE_APP_BASE_URL=.*/', "VITE_APP_BASE_URL='$baseUrl'", $content);
        $content = preg_replace('/VITE_IMG_DOMAIN=.*/', "VITE_IMG_DOMAIN= '$imgUrl'", $content);
//        $content = preg_replace('/^VITE_SITE_ID = .*/m', "VITE_SITE_ID = '$siteId'", $content);
        $content = preg_replace('/^VITE_APP_VERSION=.*/m', "VITE_APP_VERSION='$version'", $content);
        file_put_contents($file, $content);
    }

    /**
     * 移动文件
     * 初始admin打包移动文件，uni-app-cli框架构建
     */
    public function moveFile()
    {
        $basedir = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_devtool' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR;
        $from_admin_dir = $basedir . "admin";
        $from_uniappcli_dir = $basedir . "uni-app";
        $from_miniappcli_dir = $basedir . "miniappcli";
        // 放入的文件
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR;
        $to_admin_dir = $rootpath . "admin";
        $to_uniappcli_dir = $rootpath . "uni-app";
        $to_miniappcli_dir = $rootpath . "miniappcli";
//        // 移动admin迁移文件
//        if (file_exists($from_admin_dir)) {
//            dir_copy($from_admin_dir, $to_admin_dir);
//        }
//        // 移动uni-app框架文件
//        if (file_exists($from_uniappcli_dir)) {
//            dir_copy($from_uniappcli_dir, $to_uniappcli_dir);
//        }
        // 移动miniappcli框架文件
        if (file_exists($from_miniappcli_dir)) {
            dir_copy($from_miniappcli_dir, $to_miniappcli_dir);
        }
        return true;
    }

    /**
     * 更改uni-app的，package.json的值
     */
    public function updateUniappPackageJson()
    {
//        $uniapp_npm_file = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'package.json';
//        $uniappJson = $this->jsonFileToArray($uniapp_npm_file);
//        $uniappJson['scripts']['build:h5'] = "uni build && node scripts/release.mjs";
//        $uniappJson['scripts']['build:mp-weixin'] = "uni build -p mp-weixin && node scripts/miniapp.mjs";
//        $this->writeArrayToJsonFile($uniappJson, $uniapp_npm_file);
        return true;
    }

    /**
     * 更改admin的，package.json的值
     */
    public function updateAdminPackageJson()
    {
//        $admin_npm_file = dirname(root_path()) . DIRECTORY_SEPARATOR . 'admin' . DIRECTORY_SEPARATOR . 'package.json';
//        $admin = $this->jsonFileToArray($admin_npm_file);
//        $admin['scripts']['build'] = "vite build && node scripts/release.mjs";
//        $this->writeArrayToJsonFile($admin, $admin_npm_file);
        return true;
    }

    /**
     * 还原admin，package.json的值
     */
    public function backAdminPackageJson()
    {
//        $admin_npm_file = dirname(root_path()) . DIRECTORY_SEPARATOR . 'admin' . DIRECTORY_SEPARATOR . 'package.json';
//        $admin = $this->jsonFileToArray($admin_npm_file);
//        $admin['scripts']['build'] = "vite build";
//        $this->writeArrayToJsonFile($admin, $admin_npm_file);
        return true;
    }

    /**
     * 合并admin依赖
     * 兼容前端同
     */
    public function dependadmin()
    {
        $admin_package_dir = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_devtool' . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR . 'admin-package.json';;
        $toadmin_package_dir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'admin/package.json';
        $admin_package_array = $this->jsonFileToArray($admin_package_dir);
        $toadmin_package_array = $this->jsonFileToArray($toadmin_package_dir);
        if (isset($admin_package_array['dependencies'])) {
            $toadmin_package_array['dependencies'] = array_merge($toadmin_package_array['dependencies'], $admin_package_array['dependencies']);
        }

        if (isset($admin_package_array['devDependencies'])) {
            $toadmin_package_array['devDependencies'] = array_merge($toadmin_package_array['devDependencies'], $admin_package_array['devDependencies']);
        }
        $this->writeArrayToJsonFile($toadmin_package_array, $toadmin_package_dir);
        return true;
    }

    /**
     * 合并uni-app依赖
     */
    public function depend()
    {
        //uni-app-package文件扩展
        $uniapp_package_dir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app/package.json';
        $uniappcli_package_dir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app-cli/package.json';
        $uniapp_package_array = $this->jsonFileToArray($uniapp_package_dir);
        $uniappcli_package_array = $this->jsonFileToArray($uniappcli_package_dir);
        if (isset($uniapp_package_array['dependencies'])) {
            $uniappcli_package_array['dependencies'] = array_merge($uniappcli_package_array['dependencies'], $uniapp_package_array['dependencies']);
        }

        if (isset($uniapp_package_array['devDependencies'])) {
            $uniappcli_package_array['devDependencies'] = array_merge($uniappcli_package_array['devDependencies'], $uniapp_package_array['devDependencies']);
        }
        $this->writeArrayToJsonFile($uniappcli_package_array, $uniappcli_package_dir);
        return true;
    }

    /**
     * 执行构建uniapp相关命令时候兼容uniapp文件，
     */
    public function syncUniapp()
    {
        return true;
    }

    /**
     *初始化git配置
     */
    public function gitStart($path, $url)
    {
        if ($this->os() !== 'linux') {
            throw new Exception('非linux环境暂不支持操作');
        }
        $this->deleteFolder($path . '/.git');
        $this->gitExecute(["path" => $path, "cmd" => "git init"]);
        $this->gitExecute(["path" => $path, "cmd" => "git remote add origin " . $url]);
        return true;
    }

    public function editGitConfig($path, $url)
    {
        if ($this->os() !== 'linux') {
            throw new Exception('非linux环境暂不支持操作');
        }
        $username = str_replace("@", "%40", $this->config['username']);
        $password = str_replace("@", "%40", $this->config['password']);
        $newurl = str_replace("https://", "https://" . $username . ":" . $password . "@", $url);
        $file = $path . "/.git/config";
        $content = file_get_contents($file);
        $newContent = str_replace($url, $newurl, $content);
        file_put_contents($file, $newContent);
    }

    public function backGitConfig($path, $url)
    {
        if ($this->os() !== 'linux') {
            throw new Exception('非linux环境暂不支持操作');
        }
        $username = str_replace("@", "%40", $this->config['username']);
        $password = str_replace("@", "%40", $this->config['password']);
        $newurl = str_replace("https://", "https://" . $username . ":" . $password . "@", $url);
        $file = $path . "/.git/config";
        $content = file_get_contents($file);
        $newContent = str_replace($newurl, $url, $content);
        file_put_contents($file, $newContent);
    }

    /**
     *强制拉取覆盖
     */
    public function gitPullForce($path)
    {
        if ($this->os() !== 'linux') {
            throw new Exception('非linux环境暂不支持操作');
        }
        // 备份文件夹
        $this->backupFolder(root_path() . 'public/admin', root_path() . 'public/back_admin');
        $this->backupFolder(root_path() . 'public/wap', root_path() . 'public/back_wap');
        $this->gitExecute(["path" => $path, "cmd" => "git fetch --all"]);
        $this->gitExecute(["path" => $path, "cmd" => "git reset --hard origin/master"]);
        $this->gitExecute(["path" => $path, "cmd" => "git pull origin master"]);
        // 还原备份文件夹
        $this->restoreBackup(root_path() . 'public/back_admin', root_path() . 'public/admin');
        $this->restoreBackup(root_path() . 'public/back_wap', root_path() . 'public/wap');
        //删除备份文件
        $this->deleteFolder(root_path() . 'public/back_wap');
        $this->deleteFolder(root_path() . 'public/back_admin');

    }

    /**
     *拉取最新代码
     */
    public function gitPull($path)
    {
        if ($this->os() !== 'linux') {
            throw new Exception('非linux环境暂不支持操作');
        }

//        $this->gitExecute(["path" => $path, "cmd" => "git stash"]);
//        $this->gitExecute(["path" => $path, "cmd" => "git merge FETCH_HEAD"]);
        $this->gitExecute(["path" => $path, "cmd" => "git pull origin master"]);
    }

    /**
     *备份version文件
     */
    public function backVersion()
    {
        if (file_exists(root_path() . 'config/version.php'))
            copy(root_path() . 'config/version.php', root_path() . 'config/backversion.php');
    }

    /**
     *备份.env文件
     */
    public function backEnv($type = 0)
    {
        if ($type == 0) {
            if (file_exists(root_path() . '.env'))
                copy(root_path() . '.env', root_path() . '.env.back');
        } else {
            if (file_exists(root_path() . '.env.back'))
                copy(root_path() . '.env.back', root_path() . '.env');
        }

    }

    public function updateSql()
    {
        $upgradeDir = dirname(root_path()) . '/upgrade';
        $this->getUpgradeFiles($upgradeDir);
        $filename = root_path() . 'config/backversion.php';
        if (file_exists($filename)) {
            unlink($filename);
        }
        return true;
    }

    public function deleteAdminProduction()
    {
        $file = dirname(root_path()) . '/admin/.env.production';
        $contents = file_get_contents($file);
        $newContents = str_replace("NODE_ENV = 'production'", '', $contents);
        file_put_contents($file, $newContents);
    }

    /**
     * 复制文件/文件夹
     */
    public function copyFolder($source, $destination, $excludeFiles = [], $excludeFolders = [])
    {
        if (!is_dir($destination)) {
            mkdir($destination, 0777, true);
        }
        $dir = opendir($source);
        while (($file = readdir($dir)) !== false) {
            if ($file != '.' && $file != '..') {
                $sourceFile = $source . '/' . $file;
                $destinationFile = $destination . '/' . $file;

                if (in_array($file, $excludeFiles)) {
                    continue;
                }

                if (in_array($file, $excludeFolders) && is_dir($sourceFile)) {
                    continue;
                }

                if (is_dir($sourceFile)) {
                    $this->copyFolder($sourceFile, $destinationFile, $excludeFiles, $excludeFolders);
                } else {
                    copy($sourceFile, $destinationFile);
                }
            }
        }

        closedir($dir);
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

    /**
     * 读取json文件转化成数组返回
     * @param $json_file_path //json文件目录
     */
    public function jsonFileToArray(string $json_file_path)
    {
        if (file_exists($json_file_path)) {
            $content_json = @file_get_contents($json_file_path);
            return json_decode($content_json, true);
        } else
            return ["msg" => "文件不存在"];
    }

    /**
     * 读取json文件转化成数组返回
     * @param $json_file_path //json文件目录
     */
    public function writeArrayToJsonFile(array $content, string $file_path)
    {
        $content_json = json_encode($content, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        $result = @file_put_contents($file_path, $content_json);
        if (!$result) {
            throw new CommonException($file_path . '文件不存在或者权限不足');
        }
        return true;
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
                    $this->setFolderPermissions($filePath, $permission);
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

    public function getUpgradeFiles($dir)
    {
        $sqlFiles = array();

        // 获取目录下的所有文件和文件夹
        $files = scandir($dir);

        foreach ($files as $file) {
            if ($file == '.' || $file == '..') {
                continue;
            }
            $path = $dir . '/' . $file;
            if (is_file($path) && pathinfo($file, PATHINFO_EXTENSION) == 'sql' && $file == 'upgrade.sql') {
                // 如果是upgrade.sql文件，则添加到数组中
                $text = basename(dirname($path));
                $version = substr($text, strpos($text, ".") + 1);
                $result = $this->compareVersions(config('version')['version'], $version);
                if ($result == -1) {
//                    $sqlFiles[] = $path;
                    $this->executeSql($path);
                }
            } elseif (is_dir($path)) {
                // 如果是文件夹，则递归调用函数继续查找
                $sqlFiles = array_merge($sqlFiles, $this->getUpgradeFiles($path));
            }
        }

        return $sqlFiles;
    }

    public static function executeSql(string $sql_file): bool
    {
        if (is_file($sql_file)) {
            $sql = file_get_contents($sql_file);
            // 执行sql
            $sql_arr = parse_sql($sql);
            if (!empty($sql_arr)) {
                $prefix = config('database.connections.mysql.prefix');
                Db::startTrans();
                try {
                    foreach ($sql_arr as $sql_line) {
                        $sql_line = trim($sql_line);
                        if (!empty($sql_line)) {
                            $sql_line = str_ireplace('{{prefix}}', $prefix, $sql_line);
                            $sql_line = str_ireplace('INSERT INTO ', 'INSERT IGNORE INTO ', $sql_line);
                            Db::execute($sql_line);
                        }
                    }
                    Db::commit();
                    return true;
                } catch (PDOException $e) {
                    Db::rollback();
                    throw new AddonException($e->getMessage());
                }
            }
        }
        return true;
    }

    public function compareVersions($version1, $version2)
    {
        $parts1 = explode(".", $version1);
        $parts2 = explode(".", $version2);
        $length = max(count($parts1), count($parts2));

        for ($i = 0; $i < $length; $i++) {
            $part1 = isset($parts1[$i]) ? intval($parts1[$i]) : 0;
            $part2 = isset($parts2[$i]) ? intval($parts2[$i]) : 0;

            if ($part1 < $part2) {
                return -1;
            } elseif ($part1 > $part2) {
                return 1;
            }
        }
        return 0;
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