<?php

namespace addon\tk_cps\app\service\core;

use app\service\core\addon\CoreAddonDevelopDownloadService;
use app\service\core\addon\WapTrait;
use core\base\BaseAdminService;
use core\exception\CommonException;
use think\Exception;
use app\model\sys\SysUserRole;

class UniappService extends BaseAdminService
{
    use WapTrait;

    public function addFile()
    {
//        $roleInfo = (new SysUserRole())->where(['uid' => $this->uid, 'site_id' => 0])->findOrEmpty();
//        if ($roleInfo->isEmpty()) throw new Exception('仅站点管理员可操作');
        //备份文件
        $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'backcommon.ts';
        //进行备份文件验证
        $search_string = 'style=embedded';
        $file_content = file_get_contents($backfrom);
        if (!strpos($file_content, $search_string) || !file_exists($backto)) {
            copy($backfrom, $backto);
        }
        //增加半屏小程序支持
        $from = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'common.ts';
        $to = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        copy($from, $to);
        //修复小程序不显示问题
        $fromCps = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'cps.ts';
        $toCps = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'api' . DIRECTORY_SEPARATOR . 'cps.ts';
        copy($fromCps, $toCps);
        //增加插件文件包
        $basedir = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'sub';
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app/src';
        //拦截底部导航
        $fromCps = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'tabbar.vue';
        $toCps = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'tabbar' . DIRECTORY_SEPARATOR . 'tabbar.vue';
        copy($fromCps, $toCps);
        if (file_exists($basedir)) {
            dir_copy($basedir, $rootpath);
        }

        return true;
    }

    public function delFile()
    {
        //增加权限验证，仅管理员所属站点可下载
        $roleInfo = (new SysUserRole())->where(['uid' => $this->uid, 'site_id' => 0])->findOrEmpty();
        if ($roleInfo->isEmpty()) throw new Exception('仅站点管理员可操作');
        //恢复备份
        $backfrom = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'utils' . DIRECTORY_SEPARATOR . 'common.ts';
        $backto = root_path() . 'addon' . DIRECTORY_SEPARATOR . 'tk_cps' . DIRECTORY_SEPARATOR . 'movefile' . DIRECTORY_SEPARATOR . 'uniapp' . DIRECTORY_SEPARATOR . 'backcommon.ts';
        if (file_exists($backto)) {
            copy($backto, $backfrom);
            //删除文件备份
            unlink($backto);
        }
        //删除插件文件包
        $rootpath = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app/src';
        if (is_dir($rootpath . '/cpsdc')) {
            $this->deleteFolder($rootpath . '/cpsdc');
        }
        if (is_dir($rootpath . '/cpsmeishi')) {
            $this->deleteFolder($rootpath . '/cpsmeishi');
        }
        if (is_dir($rootpath . '/cpsmenpiao')) {
            $this->deleteFolder($rootpath . '/cpsmenpiao');
        }
        if (is_dir($rootpath . '/cpsmovie')) {
            $this->deleteFolder($rootpath . '/cpsmovie');
        }
        if (is_dir($rootpath . '/cpshotel')) {
            $this->deleteFolder($rootpath . '/cpshotel');
        }
        return true;
    }

    /**
     * 下载uniapp
     * @return string
     * @throws Exception
     */
    public function copyUniapp()
    {
        //增加权限验证，仅管理员所属站点可下载
        $roleInfo = (new SysUserRole())->where(['uid' => $this->uid, 'site_id' => 0])->findOrEmpty();
        if ($roleInfo->isEmpty()) throw new Exception('请联系站点管理员下载，暂不支持自助下载');
        $fromDir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app';
        $toDir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'niucloud/public/upload/tk_cps/uniapp/' . $this->site_id;
        if (is_dir($toDir)) {
            $this->deleteFolder($toDir);
        }
        if (file_exists($fromDir)) {
            dir_copy($fromDir, $toDir, exclude_dirs: ['node_modules', 'unpackage', 'dist']);
        } else {
            throw new Exception('uni-app文件夹异常');
        }
        $jsonArr = $this->uniappPageJsonToArr();
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
        };
        $jsonArr['subPackages'] = $subPackages;
        $this->uniappPageJsonWrite($jsonArr, $toDir . '/src/pages.json');
        //修改打包文件信息
        $envPath = $toDir . '/.env.production';
        $domain = 'https://' . $_SERVER['HTTP_HOST'];
        $this->updateConfig($envPath, $domain . '/api/', $domain, $this->site_id);
        $zip_file = dirname(root_path()) . DIRECTORY_SEPARATOR . 'niucloud/public/upload/tk_cps/uniapp/' . $this->site_id . '_uniapp.zip';
        (new CoreAddonDevelopDownloadService(''))->compressToZip($toDir, $zip_file);
        $this->deleteFolder($toDir);
        return (new CommonService())->getUrl() . '/upload/tk_cps/uniapp/' . $this->site_id . '_uniapp.zip';
    }

    /**
     * @Notes:新的上传
     * @Interface codeUniapp
     * @return string
     * @throws Exception
     * @author: TK
     * @Time: 2024/6/14   下午7:28
     */
    public function codeUniapp()
    {
        $fromDir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app';
        $toDir = dirname(root_path()) . DIRECTORY_SEPARATOR . 'niucloud/public/upload/tk_cps/uniapp/' . $this->site_id;
        if (is_dir($toDir)) {
            $this->deleteFolder($toDir);
        }
        if (file_exists($fromDir)) {
            dir_copy($fromDir, $toDir, exclude_dirs: ['node_modules', 'unpackage', 'dist']);
        } else {
            throw new Exception('uni-app文件夹异常');
        }
//        $jsonArr = $this->uniappPageJsonToArr();
//        $subPackages = $jsonArr['subPackages'];
//
//        $newSubPackages = [
//            [
//                "root" => "cpsmeishi",
//                "pages" => [
//                    [
//                        "path" => "pages/index",
//                        "style" => [
//                            "navigationBarTitleText" => "CPS联盟"
//                        ]
//                    ]
//                ],
//                "plugins" => [
//                    "meishi" => [
//                        "version" => "latest",
//                        "provider" => "wx5c787b48e6a02a51"
//                    ]
//                ]
//            ],
//            [
//                "root" => "cpsdc",
//                "pages" => [
//                    [
//                        "path" => "pages/index",
//                        "style" => [
//                            "navigationBarTitleText" => "CPS联盟"
//                        ]
//                    ]
//                ],
//                "plugins" => [
//                    "jtkDc" => [
//                        "version" => "latest",
//                        "provider" => "wx6c999744b6d125ef"
//                    ]
//                ]
//            ],
//            [
//                "root" => "cpsmovie",
//                "pages" => [
//                    [
//                        "path" => "pages/index",
//                        "style" => [
//                            "navigationBarTitleText" => "CPS联盟"
//                        ]
//                    ]
//                ],
//                "plugins" => [
//                    "jtkMovie" => [
//                        "version" => "latest",
//                        "provider" => "wx89752980e795bfde"
//                    ]
//                ]
//            ],
//            [
//                "root" => "cpsmenpiao",
//                "pages" => [
//                    [
//                        "path" => "pages/index",
//                        "style" => [
//                            "navigationBarTitleText" => "CPS联盟"
//                        ]
//                    ]
//                ],
//                "plugins" => [
//                    "menpiao-plugin" => [
//                        "version" => "latest",
//                        "provider" => "wx06aa3a687000c5d1"
//                    ]
//                ]
//            ],
//            [
//                "root" => "cpshotel",
//                "pages" => [
//                    [
//                        "path" => "pages/index",
//                        "style" => [
//                            "navigationBarTitleText" => "CPS联盟"
//                        ]
//                    ]
//                ],
//                "plugins" => [
//                    "hotel-plugin" => [
//                        "version" => "latest",
//                        "provider" => "wx3c08fc3019c05906"
//                    ]
//                ]
//            ]
//        ];
//        foreach ($newSubPackages as $newSubPackage) {
//            // 将新的分包添加到现有的分包数组中
//            $subPackages[] = $newSubPackage;
//        };
//        $jsonArr['subPackages'] = $subPackages;
//        $this->uniappPageJsonWrite($jsonArr, $toDir . '/src/pages.json');
        //修改打包文件信息
        $envPath=$toDir.'/.env.production';
        $domain = 'https://'.$_SERVER['HTTP_HOST'];
        $this->updateConfig($envPath,$domain.'/api/',$domain,$this->site_id);
        $zip_file =dirname(root_path()) . DIRECTORY_SEPARATOR . 'niucloud/public/upload/tk_cps/uniapp/'.$this->site_id.'_uniapp.zip';
        (new CoreAddonDevelopDownloadService(''))->compressToZip($toDir, $zip_file);
//        $this->deleteFolder($toDir);
        return $toDir;
    }

    public function updateConfig($filePath, $baseUrl, $imgDomain, $siteId)
    {
        $content = file_get_contents($filePath);
        $content = preg_replace('/VITE_APP_BASE_URL=\'(.*?)\'/', "VITE_APP_BASE_URL='$baseUrl'", $content);
        $content = preg_replace('/VITE_IMG_DOMAIN=\'(.*?)\'/', "VITE_IMG_DOMAIN='$imgDomain'", $content);
        $content = preg_replace('/VITE_SITE_ID = \'(.*?)\'/', "VITE_SITE_ID = '$siteId'", $content);
        file_put_contents($filePath, $content);
    }

    public function uniappPageJsonToArr()
    {
        //处理page.json文件
        $path = dirname(root_path()) . DIRECTORY_SEPARATOR . 'uni-app' . DIRECTORY_SEPARATOR . 'src' . DIRECTORY_SEPARATOR . 'pages.json';
        $chanagew = 'changew';
        // 读取JSON文件内容
        $jsonString = @file_get_contents($path);
        $jsonString = preg_replace('/\/\/.*/', '', $jsonString); // 去除 // 注释
        $jsonString = preg_replace('!/\*.*?\*/!s', '', $jsonString); // 去除 /* 注释 */
        $jsonString = preg_replace('/\\\\W/', $chanagew, $jsonString);
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
}
