<?php

namespace addon\tk_cps\app\service\admin;

use addon\tk_cps\app\service\core\CommonService;
use addon\tk_cps\app\service\core\ConfigService;
use addon\tk_cps\app\service\core\CoreWeappService;
use addon\tk_cps\app\service\core\UniappService;
use app\dict\addon\AddonDict;
use app\dict\sys\CloudDict;
use app\model\addon\Addon;
use app\model\weapp\WeappVersion;
use app\service\core\addon\CoreAddonDevelopDownloadService;
use app\service\core\addon\WapTrait;
use app\service\core\niucloud\CoreCloudBaseService;
use app\service\core\site\CoreSiteService;
use app\service\core\weapp\CoreWeappCloudService;
use app\service\core\weapp\CoreWeappConfigService;
use core\base\BaseAdminService;
use core\util\niucloud\CloudService;
use think\Exception;
use core\base\BaseApiService;
use core\exception\CommonException;
use addon\tk_cps\app\model\act\Act;
use addon\tk_cps\app\model\actitem\ActItem;
use addon\tk_cps\app\job\ActItemJob;
use addon\tk_cps\app\model\job\Job;

class VersionService extends CoreCloudBaseService
{
    protected $fromPath;
    protected $toPath;
    use WapTrait;

    public function __construct()
    {
        parent::__construct();
        $this->root_path = dirname(root_path()) . DIRECTORY_SEPARATOR;
        $this->addon_path = root_path() . 'addon' . DIRECTORY_SEPARATOR;
        $this->model = new WeappVersion();
    }

    /**
     * 添加小程序版本
     * @param array $data
     */
    public function add(array $data)
    {
        $this->site_id = $this->request->siteId();
        $uploading = $this->model->where([['site_id', '=', $this->site_id], ['status', '=', 0]])->field('id')->findOrEmpty();
        if (!$uploading->isEmpty()) throw new CommonException('WEAPP_UPLOADING');

        $version_no = $this->model->where([['site_id', '=', $this->site_id]])->order('version_no desc')->field('version_no')->findOrEmpty()->toArray()['version_no'] ?? 0;
        $version_no += 1;
        $version = "1.0.{$version_no}";

        $upload_res = $this->uploadWeapp([
            'site_id' => $this->site_id,
            'version' => $version,
            'desc' => $data['desc'] ?? ''
        ]);

        $res = $this->model->create([
            'site_id' => $this->site_id,
            'version' => $version,
            'version_no' => $version_no,
            'desc' => $data['desc'] ?? '',
            'create_time' => time(),
            'task_key' => $upload_res['key']
        ]);
        return $res->id;
    }

    /**
     * 上传小程序
     * @param $addon
     */
    public function uploadWeapp(array $data)
    {
        if (!request()->isSsl()) throw new CommonException('CURR_SITE_IS_NOT_OPEN_SSL');
        $this->site_id = $data['site_id'];
        $config = (new CoreWeappConfigService())->getWeappConfig($data['site_id']);
        if (empty($config['app_id'])) throw new CommonException('WEAPP_APPID_EMPTY');
        if (empty($config['upload_private_key'])) throw new CommonException('UPLOAD_KEY_EMPTY');
        if (!file_exists($config['upload_private_key'])) throw new CommonException('UPLOAD_KEY_NOT_EXIST');
        $compile_addon = (new Addon())->where([['compile', 'like', "%weapp%"]])->field('key')->findOrEmpty();
        // 上传任务key
        $task_key = uniqid();
        // 此次上传任务临时目录
        $temp_dir = runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'weapp' . DIRECTORY_SEPARATOR . $task_key;
        // 小程序源码存放路径
        $package_dir = $temp_dir . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR;
        // uni
        $uni_dir = $package_dir . 'uni-app';
        $editUniapp = (new UniappService())->codeUniapp();
        // 如果不存在编译版小程序
        if ($compile_addon->isEmpty()) {
            dir_copy($editUniapp, $uni_dir, exclude_dirs: ['node_modules', 'unpackage', 'dist']);
            $this->handleUniapp($uni_dir);
            $this->handelPageJson($uni_dir . '/src/pages.json');
            // 替换env文件
            $this->weappEnvReplace($uni_dir . DIRECTORY_SEPARATOR . '.env.production');
        } else {
            $compile_dir = $this->addonPath($compile_addon->key) . 'compile' . DIRECTORY_SEPARATOR . 'weapp';
            if (!is_dir($compile_dir)) throw new CommonException('CLOUD_WEAPP_COMPILE_NOT_EXIST');
            dir_copy($compile_dir, $uni_dir);
            $this->weappCompileReplace($uni_dir);
        }

        file_put_contents($package_dir . 'private.key', file_get_contents($config['upload_private_key']));
        // 将临时目录下文件生成压缩包
        $zip_file = $temp_dir . DIRECTORY_SEPARATOR . 'weapp.zip';
        (new CoreAddonDevelopDownloadService(''))->compressToZip($package_dir, $zip_file);
        $query = [
            'compile' => $compile_addon->isEmpty() ? 0 : 1,
            'authorize_code' => $this->auth_code,
            'appid' => $config['app_id'],
            'version' => $data['version'] ?? '',
            'desc' => $data['desc'] ?? '',
            'do' => 1,
            'timestamp' => time()
        ];
        $response = (new CloudService())->httpPost('cloud/weapp?' . http_build_query($query), [
            'multipart' => [
                [
                    'name' => 'file',
                    'contents' => fopen($zip_file, 'r'),
                    'filename' => 'weapp.zip'
                ]
            ],
        ]);

        // 删除临时文件
        del_target_dir(runtime_path() . 'backup' . DIRECTORY_SEPARATOR . 'weapp', true);
        $this->deleteFolder($editUniapp);
        if (isset($response['code']) && $response['code'] == 0) throw new CommonException($response['msg']);
        return ['key' => $query['timestamp']];
    }

    public function handelPageJson($path)
    {
        $jsonArr = $this->uniappPageJsonToArr($path);
        $subPackages = $jsonArr['subPackages'];

        $newSubPackages = [
            [
                "root" => "cpsmeishi",
                "pages" => [
                    [
                        "path" => "pages/index",
                        "style" => [
                            "navigationBarTitleText" => "CPS联盟"
                        ]
                    ]
                ],
                "plugins" => [
                    "meishi" => [
                        "version" => "latest",
                        "provider" => "wx5c787b48e6a02a51"
                    ]
                ]
            ],
            [
                "root" => "cpsdc",
                "pages" => [
                    [
                        "path" => "pages/index",
                        "style" => [
                            "navigationBarTitleText" => "CPS联盟"
                        ]
                    ]
                ],
                "plugins" => [
                    "jtkDc" => [
                        "version" => "latest",
                        "provider" => "wx6c999744b6d125ef"
                    ]
                ]
            ],
            [
                "root" => "cpsmovie",
                "pages" => [
                    [
                        "path" => "pages/index",
                        "style" => [
                            "navigationBarTitleText" => "CPS联盟"
                        ]
                    ]
                ],
                "plugins" => [
                    "jtkMovie" => [
                        "version" => "latest",
                        "provider" => "wx89752980e795bfde"
                    ]
                ]
            ],
            [
                "root" => "cpsmenpiao",
                "pages" => [
                    [
                        "path" => "pages/index",
                        "style" => [
                            "navigationBarTitleText" => "CPS联盟"
                        ]
                    ]
                ],
                "plugins" => [
                    "menpiao-plugin" => [
                        "version" => "latest",
                        "provider" => "wx06aa3a687000c5d1"
                    ]
                ]
            ],
            [
                "root" => "cpshotel",
                "pages" => [
                    [
                        "path" => "pages/index",
                        "style" => [
                            "navigationBarTitleText" => "CPS联盟"
                        ]
                    ]
                ],
                "plugins" => [
                    "hotel-plugin" => [
                        "version" => "latest",
                        "provider" => "wx3c08fc3019c05906"
                    ]
                ]
            ]
        ];
        foreach ($newSubPackages as $newSubPackage) {
            // 将新的分包添加到现有的分包数组中
            $subPackages[] = $newSubPackage;
            //进行插件申请
            $this->addPlugin();
        }
        $jsonArr['subPackages'] = $subPackages;
        $this->uniappPageJsonWrite($jsonArr, $path);
    }

    public function addPlugin()
    {
        $site_id = $this->request->siteId();
        $plugin_appids = [
            'meishi' => 'wx5c787b48e6a02a51',
            'jtkDc' => 'wx6c999744b6d125ef',
            'jtkMovie' => 'wx89752980e795bfde',
            'menpiao-plugin' => 'wx06aa3a687000c5d1',
            'hotel-plugin' => 'wx3c08fc3019c05906'
        ];
        foreach ($plugin_appids as $plugin_name => $appid) {
            (new CoreWeappService())->addPlugin($site_id, $appid);
        }
        return true;
    }

    public function uniappPageJsonToArr($path)
    {
        $chanagew = 'changew';
        // 读取JSON文件内容
        $jsonString = @file_get_contents($path);
        $jsonString = preg_replace('/\/\/.*/', '', $jsonString); // 去除 // 注释
        $jsonString = preg_replace('!/\*.*?\*/!s', '', $jsonString); // 去除 /* 注释 */
        $jsonString = preg_replace('/\\\\W/', $chanagew, $jsonString);
        // 去除空格和换行
        $jsonString = preg_replace('/\s+/', '', $jsonString);
        $jsonArray = json_decode($jsonString, true);
        if ($jsonArray === null && json_last_error() !== JSON_ERROR_NONE) {
            // JSON解析出错
            throw new \Exception('JSON解析出错：' . json_last_error_msg());
        } else {
            // JSON解析成功
            return $jsonArray;
        }
    }

    public function uniappPageJsonWrite($arr, $path)
    {

        $arrToString = json_encode($arr);

        $changew = 'changew';
        $arrToString = preg_replace('/' . $changew . '/', '\\\\w', $arrToString);

        $result = @file_put_contents($path, $arrToString);
        if (!$result) {
            throw new CommonException($path . '文件不存在或者权限不足');
        }
        return true;
    }

    public function deleteFolder($folderPath)
    {
        if (is_dir($folderPath)) {
            $files = array_diff(scandir($folderPath), array('.', '..'));
            foreach ($files as $file) {
                $filePath = $folderPath . DIRECTORY_SEPARATOR . $file;
                if (is_dir($filePath)) {
                    $this->deleteFolder($filePath);
                } else {
                    unlink($filePath);
                }
            }
            rmdir($folderPath);
        }
    }

    /**
     * 处理uniapp 查询出站点没有的插件进行移除
     * @param string $dir
     * @return void
     */
    private function handleUniapp(string $dir)
    {
        $site_addon = (new CoreSiteService())->getAddonKeysBySiteId($this->site_id);
        $local_addon = (new Addon())->where([['status', '=', AddonDict::ON]])->column('key');

        // 移除uniapp中该站点没有的插件
        $diff_addon = array_filter(array_map(function ($key) use ($site_addon) {
            if (!in_array($key, $site_addon)) return $key;
        }, $local_addon));

        $this->handlePageCode($dir . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR, $site_addon);

        if (!empty($diff_addon)) {
            foreach ($diff_addon as $addon) {
                $this->addon = $addon;

                $addon_dir = $dir . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'addon' . DIRECTORY_SEPARATOR . $addon;
                if (is_dir($addon_dir)) del_target_dir($addon_dir, true);

                // 编译 diy-group 自定义组件代码文件
                $this->compileDiyComponentsCode($dir . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR, $addon);
                // 编译 fixed-group 固定模板组件代码文件
                $this->compileFixedComponentsCode($dir . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR, $addon);
                // 编译 加载插件标题语言包
                $this->compileLocale($dir . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR, $addon);

                $manifest_json = root_path() . 'addon' . DIRECTORY_SEPARATOR . $addon . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR . 'manifest.json';
                if (file_exists($manifest_json)) {
                    $this->mergeManifestJson($dir . DIRECTORY_SEPARATOR, json_decode($manifest_json, true));
                }
            }
        }
    }

    private function handlePageCode($compile_path, $addon_arr)
    {
        $pages = [];
        foreach ($addon_arr as $addon) {
            if (!file_exists($this->geAddonPackagePath($addon) . 'uni-app-pages.php')) continue;
            $uniapp_pages = require $this->geAddonPackagePath($addon) . 'uni-app-pages.php';
            if (empty($uniapp_pages['pages'])) continue;

            $page_begin = strtoupper($addon) . '_PAGE_BEGIN';
            $page_end = strtoupper($addon) . '_PAGE_END';

            // 对0.2.0之前的版本做处理
            $uniapp_pages['pages'] = preg_replace_callback('/(.*)(\\r\\n.*\/\/ PAGE_END.*)/s', function ($match) {
                return $match[1] . (substr($match[1], -1) == ',' ? '' : ',') . $match[2];
            }, $uniapp_pages['pages']);

            $uniapp_pages['pages'] = str_replace('PAGE_BEGIN', $page_begin, $uniapp_pages['pages']);
            $uniapp_pages['pages'] = str_replace('PAGE_END', $page_end, $uniapp_pages['pages']);
            $uniapp_pages['pages'] = str_replace('{{addon_name}}', $addon, $uniapp_pages['pages']);

            $pages[] = $uniapp_pages['pages'];
        }

        $content = @file_get_contents($compile_path . "pages.json");
        $content = preg_replace_callback('/(.*\/\/ \{\{ PAGE_BEGAIN \}\})(.*)(\/\/ \{\{ PAGE_END \}\}.*)/s', function ($match) use ($pages) {
            return $match[1] . PHP_EOL . implode(PHP_EOL, $pages) . PHP_EOL . $match[3];
        }, $content);

        // 找到页面路由文件 pages.json，写入内容
        return file_put_contents($compile_path . "pages.json", $content);
    }

    /**
     * 小程序上传env文件处理
     * @param string $env_file
     * @return void
     */
    private function weappEnvReplace(string $env_file)
    {
        $env = file_get_contents($env_file);
        $env = str_replace("VITE_APP_BASE_URL=''", "VITE_APP_BASE_URL='" . (string)url('/api/', [], '', true) . "'", $env);
        $env = str_replace("VITE_IMG_DOMAIN=''", "VITE_IMG_DOMAIN='" . (string)url('/', [], '', true) . "'", $env);
        $env = str_replace("VITE_SITE_ID = ''", "VITE_SITE_ID='" . $this->site_id . "'", $env);
        file_put_contents($env_file, $env);
    }

    /**
     * 小程序上传vendor文件处理
     * @param string $vendor_file
     * @return void
     */
    private function weappCompileReplace(string $path)
    {
        // 替换request.js
        $request_file = $path . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'request.js';
        $content = file_get_contents($request_file);
        $content = str_replace('{{$baseUrl}}', (string)url('/api/', [], '', true), $content);
        $content = str_replace('{{$siteId}}', $this->site_id, $content);
        file_put_contents($request_file, $content);

        // 替换common.js
        $common_file = $path . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.js';
        $content = file_get_contents($common_file);
        $content = str_replace('{{$imgUrl}}', (string)url('/', [], '', true), $content);
        file_put_contents($common_file, $content);
    }

    /**
     * 获取微信小程序预览码
     * @return void
     */
    public function getWeappPreviewImage()
    {
        $query = [
            'authorize_code' => $this->auth_code,
        ];
        $preview_url = (new CloudService())->getUrl('cloud/get_weapp_preview?' . http_build_query($query));

        try {
            $path = runtime_path() . uniqid() . '.jpg';
            file_put_contents($path, file_get_contents($preview_url));
            return image_to_base64($path, true);
        } catch (\Exception $e) {
            return '';
        }
    }

    /**
     * 获取小程序编译日志
     * @param string $timestamp
     * @return void
     */
    public function getWeappCompileLog(string $timestamp)
    {
        $query = [
            'authorize_code' => $this->auth_code,
            'timestamp' => $timestamp
        ];
        $build_log = (new CloudService())->httpGet('cloud/get_weapp_logs?' . http_build_query($query));

        if (isset($build_log['data']) && isset($build_log['data'][0]) && is_array($build_log['data'][0])) {
            $last = end($build_log['data'][0]);
            if ($last['code'] == 0) {
                (new WeappVersion())->update(['status' => CloudDict::APPLET_UPLOAD_FAIL, 'fail_reason' => $last['msg'] ?? '', 'update_time' => time()], ['task_key' => $timestamp]);
                return $build_log;
            }
            if ($last['percent'] == 100) {
                (new WeappVersion())->update(['status' => CloudDict::APPLET_UPLOAD_SUCCESS, 'update_time' => time()], ['task_key' => $timestamp]);
            }
        }
        return $build_log;
    }

    /**
     * 获取插件定义的package目录
     * @param string $addon
     * @return string
     */
    public function geAddonPackagePath(string $addon)
    {
        return $this->addon_path . $addon . DIRECTORY_SEPARATOR . 'package' . DIRECTORY_SEPARATOR;
    }

}