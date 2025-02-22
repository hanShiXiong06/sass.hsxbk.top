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

namespace addon\ydc_docvite\app\service\admin\build;

use addon\ydc_docvite\app\job\vitepress\BuildDoc;
use addon\ydc_docvite\app\job\vitepress\ClearBuildDoc;
use addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress\Client;
use addon\ydc_docvite\app\library\ydcsdk\markdown\build\vitepress\Config;
use addon\ydc_docvite\app\service\admin\markdown\MarkdownService;
use addon\ydc_docvite\app\model\Config as ConfigModel;

use core\base\BaseAdminService;
use core\exception\CommonException;

use think\facade\Log;

use FilesystemIterator;
use RecursiveDirectoryIterator;
use RecursiveIteratorIterator;
use Throwable;

/**
 * Vitepress service.
 *
 * @package addon\ydc_docvite\app\service\admin\build
 */
class VitepressService extends BaseAdminService {

    // 0-未发布; 1-发布中; 2-已发布; 3-错误; 4-清理中; 5-排队中
    const BuildStatusNone       = 0;
    const BuildStatusPublishing = 1;
    const BuildStatusPublished  = 2;
    const BuildStatusError      = 3;
    const BuildStatusCleaning   = 4;
    const BuildStatusQueue      = 5;

    const AppName = 'ydc_docvite';

    protected ?MarkdownService $_markdown_service = NULL;

    public function __construct() {
        parent::__construct();
        $this->_markdown_service = new MarkdownService();
    }

    /**
     * 请求构建.
     *
     * @param int $vault_id
     * @param     ...$params
     *
     * @return void
     */
    public function requestBuild(int $vault_id, ...$params): void {
        Log::info(
            '[VitepressService -> requestBuild]: dispatch site {site} vault {id} build job',
            [
                'site' => $this->site_id,
                'id'   => $vault_id,
            ]
        );

        $vault = $this->_markdown_service->getVaultDetail($vault_id);
        if (empty($vault)) {
            throw new CommonException('仓库不存在!');
        }
        if ($vault['vite_status'] === self::BuildStatusPublishing ||
            $vault['vite_status'] === self::BuildStatusQueue ||
            $vault['vite_status'] === self::BuildStatusCleaning) {
            throw new CommonException('该仓库正在处理中，异常情况下请先清空再请求发布');
        }

        $this->_markdown_service->updateBuildStatus(
            $vault_id,
            self::BuildStatusQueue
        );

        BuildDoc::dispatch(
            [
                'site_id'  => $this->site_id,
                'vault_id' => $vault_id,
                'params'   => [...$params],
            ]
        );
    }

    /**
     * 请求清空构建.
     *
     * @param int $vault_id
     * @param     ...$params
     *
     * @return void
     */
    public function requestBuildClear(int $vault_id, ...$params): void {
        Log::info(
            '[VitepressService -> requestBuildClear]: dispatch site {site} vault {id} build clear job',
            [
                'site' => $this->site_id,
                'id'   => $vault_id,
            ]
        );

        $vault = $this->_markdown_service->getVaultDetail($vault_id);
        if (empty($vault)) {
            throw new CommonException('仓库不存在!');
        }

        $this->_markdown_service->updateBuildStatus(
            $vault_id,
            self::BuildStatusQueue
        );

        ClearBuildDoc::dispatch(
            [
                'site_id'  => $this->site_id,
                'vault_id' => $vault_id,
                'params'   => [...$params],
            ]
        );
    }

    /**
     * 执行构建清空.
     * - 一般是后台消息队列调用.
     *
     * @param int $site_id
     * @param int $vault_id
     * @param     ...$params
     *
     * @return void
     * @throws
     */
    public function clearBuild(int $site_id, int $vault_id, ...$params): void {
        $vault = $this->_markdown_service->getVaultDetail($vault_id, $site_id);
        if (empty($vault)) {
            Log::warning('[VitepressService -> clearBuild]: vault is null, skipped.');

            return;
        }

        Log::info(
            '[VitepressService -> clearBuild]: clearing vault: {vault}',
            [
                'vault' => $vault['name'],
            ]
        );

        $this->_markdown_service->updateBuildStatus(
            $vault_id,
            self::BuildStatusCleaning,
            '',
            $site_id
        );

        try {
            $srcDir     = $this->_getSrcDir($site_id, $vault['name']);
            $outDir     = $this->_getOutDir($site_id, $vault['name']);
            $cacheDir   = $this->_getCacheDir($site_id, $vault['name']);
            $outDestDir = $this->_getDeployDir($site_id, $vault['name']);
            Log::info(
                '[VitepressService -> clearBuild]: clean dir: srcDir:{srcDir}, outDir:{outDir}, cacheDir:{cacheDir}, outDestDir:{outDestDir}',
                [
                    'srcDir'     => $srcDir,
                    'outDir'     => $outDir,
                    'cacheDir'   => $cacheDir,
                    'outDestDir' => $outDestDir,
                ]
            );
            $this->_rmDir(
                $srcDir,
                FALSE
            );
            $this->_rmDir(
                $outDir,
                FALSE
            );
            $this->_rmDir(
                $cacheDir,
                FALSE
            );
            $this->_rmDir($outDestDir);

        } catch (Throwable $e) {
            $this->_markdown_service->updateBuildStatus(
                $vault_id,
                self::BuildStatusError,
                $e->getMessage(),
                $site_id
            );
            throw $e;
        }

        $this->_markdown_service->updateBuildStatus(
            $vault_id,
            self::BuildStatusNone,
            '',
            $site_id
        );
    }

    protected function _getSrcDir(int $site_id, string $vault_name): string {
        return sprintf(
            '%s/src',
            $this->_getVaultWorkdir(
                $site_id,
                $vault_name
            ),
        );
    }

    protected function _getVaultWorkdir(int $site_id, string $vault_name): string {
        return sprintf(
            '%s/%d/%s',
            $this->_getWorkdirCopy(),
            $site_id,
            $vault_name
        );
    }

    protected function _getWorkdirCopy(): string {
        $addon_dir  = runtime_path() . 'addon' . DIRECTORY_SEPARATOR;
        $addon_path = $addon_dir . self::AppName;

        $dir = $addon_path . DIRECTORY_SEPARATOR . 'vitepress_copies';
        if (!is_dir($dir)) {
            mkdir($dir, 0755, TRUE);
        }

        return $dir;
    }

    protected function _getOutDir(int $site_id, string $vault_name): string {
        $dir = sprintf(
            '%s/dist',
            $this->_getVaultWorkdir(
                $site_id,
                $vault_name
            ),
        );
        if (!is_dir($dir)) {
            mkdir(
                $dir,
                0755,
                TRUE
            );
        }

        return $dir;
    }

    protected function _getCacheDir(int $site_id, string $vault_name): string {
        $dir = sprintf(
            '%s/cache',
            $this->_getVaultWorkdir(
                $site_id,
                $vault_name
            ),
        );
        if (!is_dir($dir)) {
            mkdir(
                $dir,
                0666,
                TRUE
            );
        }

        return $dir;
    }

    protected function _getDeployDir(int $site_id, string $vault_name): string {
        $dir = sprintf(
            '%s/ydc_docvite/%d/%s',
            rtrim(
                public_path(),
                '/'
            ),
            $site_id,
            $vault_name
        );
        if (!is_dir($dir)) {
            mkdir(
                $dir,
                0755,
                TRUE
            );
        }

        return $dir;
    }

    protected function _rmDir(string $dirname, bool $withSelf = TRUE): void {
        try {
            if (!is_dir($dirname)) {
                return;
            }

            $it = new RecursiveIteratorIterator(
                new RecursiveDirectoryIterator($dirname, FilesystemIterator::SKIP_DOTS),
                RecursiveIteratorIterator::CHILD_FIRST
            );

            $it->rewind();
            while ($it->valid()) {

                if (!$it->isDot()) {
                    $todo = ($it->isDir() ? 'rmdir' : 'unlink');
                    $todo($it->key());
                }

                $it->next();
            }

            if ($withSelf) {
                @rmdir($dirname);
            }

        } catch (Throwable $e) {
            Log::error(
                '[VitepressService -> _rmDir]: failed to rm dir {dir}: {msg}',
                ['dir' => $dirname, 'msg' => $e->getMessage()]
            );
            throw new CommonException('ERR_VITE_RM_DIR');
        }
    }

    /**
     * 执行构建.
     * - 一般是后台消息队列调用.
     *
     * @param int $site_id
     * @param int $vault_id
     * @param     ...$params
     *
     * @return void
     * @throws
     */
    public function build(int $site_id, int $vault_id, ...$params): void {
        $vault = $this->_markdown_service->getVaultDetail($vault_id, $site_id);
        if (empty($vault)) {
            Log::warning('[VitepressService -> build]: vault is null, skipped.');

            return;
        }

        Log::info(
            '[VitepressService -> build]: building vault: {vault}',
            [
                'vault' => $vault['name'],
            ]
        );

        $siteConfig = ConfigModel::getConfigKV($site_id);
        Log::info(
            '[VitepressService -> build]: site config {conf}',
            [
                'conf' => json_encode(
                    $siteConfig,
                    JSON_PRETTY_PRINT
                ),
            ]
        );

        $this->_markdown_service->updateBuildStatus(
            $vault_id,
            self::BuildStatusPublishing,
            '',
            $site_id
        );

        try {
            $workDir = $this->_prepareWorkDirCopy(
                $site_id,
                $vault['name']
            );

            $config          = new Config();
            $config->workdir = $workDir;
            $c               = new Client($config);
            $srcDir          = $this->_getSrcDir(
                $site_id,
                $vault['name']
            );
            $outDir          = $this->_getOutDir(
                $site_id,
                $vault['name']
            );
            $cacheDir        = $this->_getCacheDir(
                $site_id,
                $vault['name']
            );
            $this->_rmDir(
                $srcDir,
                FALSE
            );
            $this->_rmDir(
                $outDir,
                FALSE
            );
            $this->_rmDir(
                $cacheDir,
                FALSE
            );

            // 1. prepare doc data.

            Log::info('[VitepressService -> build]: generate index page...');

            // index.md
            $this->_loadIndexPage(
                $vault,
                $srcDir
            );

            Log::info('[VitepressService -> build]: prepare markdown data...');

            [$docsEntry, $blogEntry, $docsNum, $blogNum] = $this->_loadMarkdowns(
                $vault_id,
                $site_id,
                $srcDir
            );

            Log::info(
                '[VitepressService -> build]: markdown data written, docs num: {docsNum}, blog num: {blogNum}' .
                ', docsEntry: {docsEntry}, blogEntry: {blogEntry}',
                [
                    'docsNum'   => $docsNum,
                    'blogNum'   => $blogNum,
                    'docsEntry' => $docsEntry,
                    'blogEntry' => $blogEntry,
                ]
            );

            // 2. generate config file.
            Log::info('[VitepressService -> build]: generate build config...');
            $this->_prepareBuildConfig(
                $site_id,
                $vault,
                $docsEntry,
                $blogEntry,
                $siteConfig
            );

            // 3. build.
            Log::info('[VitepressService -> build]: building...');
            $c->build();

            // 5. copy to public/.
            $outDestDir = $this->_getDeployDir($site_id, $vault['name']);
            Log::info(
                '[VitepressService -> build]: deploy dist from {from} to {to}...',
                ['from' => $outDir, 'to' => $outDestDir]
            );
            $this->_copyDir(
                $outDir,
                $outDestDir
            );
        } catch (Throwable $e) {
            $this->_markdown_service->updateBuildStatus(
                $vault_id,
                self::BuildStatusError,
                $e->getMessage(),
                $site_id
            );
            throw $e;
        }

        $this->_markdown_service->updateBuildStatus(
            $vault_id,
            self::BuildStatusPublished,
            '',
            $site_id
        );
    }

    protected function _prepareWorkDirCopy(int $site_id, string $vault_name): string {
        $newDir = $this->_getVaultWorkdir(
            $site_id,
            $vault_name
        );
        $oldDir = $this->_getWorkdir();
        $this->_copyDir(
            $oldDir,
            $newDir
        );

        return $newDir;
    }

    protected function _getWorkdir(): string {
        $addon_dir  = root_path() . 'addon' . DIRECTORY_SEPARATOR;
        $addon_path = $addon_dir . self::AppName;

        return $addon_path . DIRECTORY_SEPARATOR . 'app' . DIRECTORY_SEPARATOR . 'buildworkdir/vitepress';
    }

    protected function _copyDir(string $src, string $dest, bool $rmBefore = TRUE): void {
        if ($rmBefore) {
            $this->_rmDir($dest);
        }
        try {
            if (!is_dir($dest)) {
                mkdir(
                    $dest,
                    0755,
                    TRUE
                );
            }
            $it = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($src, FilesystemIterator::SKIP_DOTS));

            $it->rewind();
            while ($it->valid()) {
                if ($it->isDir()) {
                    $dir = $dest . DIRECTORY_SEPARATOR . $it->getSubPathname();
                    if (!is_dir($dir)) {
                        mkdir(
                            $dir,
                            0755,
                            TRUE
                        );
                    }
                } else {
                    $file = $dest . DIRECTORY_SEPARATOR . $it->getSubPathname();
                    if (!is_dir(dirname($file))) {
                        mkdir(
                            dirname($file),
                            0755,
                            TRUE
                        );
                    }
                    copy(
                        $it->key(),
                        $file
                    );
                    chmod(
                        $file,
                        0755
                    );
                }

                $it->next();
            }
        } catch (Throwable $e) {
            Log::error(
                '[VitepressService]: failed to copy from {from} to {to}: {msg}',
                ['from' => $src, 'to' => $dest, 'msg' => $e->getMessage()]
            );
            throw new CommonException('ERR_VITE_COPY_DIR');
        }
    }

    protected function _loadIndexPage(array $vault, string $save_path): bool {
        //---
        //# https://vitepress.dev/reference/default-theme-home-page
        //layout: home
        //
        //hero:
        //  name: "My Awesome Project"
        //  text: "A VitePress Site"
        //  tagline: My great project tagline
        //  actions:
        //    - theme: brand
        //      text: Markdown Examples
        //      link: /markdown-examples
        //    - theme: alt
        //      text: API Examples
        //      link: /api-examples
        //
        //features:
        //  - title: Feature A
        //    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        //  - title: Feature B
        //    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        //  - title: Feature C
        //    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
        //---

        $config = [
            'layout'   => 'home',
            'hero'     => [
                'name'    => $vault['site_name'],
                'text'    => $vault['site_title'],
                'tagline' => $vault['site_subtitle'],
            ],
            'features' => [],
        ];

        if (!empty($vault['site_feature_list'])) {
            $featureList = json_decode(
                $vault['site_feature_list'],
                TRUE
            );
            foreach ($featureList as $item) {
                $config['features'][] = [
                    'title'   => $item['title'],
                    'details' => $item['text'],
                    'link'    => $item['url'],
                    'icon'    => [
                        'src'    => rtrim(config('app.app_host'), '/') . '/' . $item['iconSrc'],
                        'width'  => $item['iconWidth'],
                        'height' => $item['iconHeight'],
                    ],
                ];
            }
        }

        $customHomeContent = $vault['site_home_content'] ?? '';

        $content = sprintf(
            "---\n%s\n---\n%s\n",
            $this->_yaml_emit($config),
            $customHomeContent
        );
        $path    = sprintf(
            '%s/index.md',
            rtrim(
                $save_path,
                '/'
            ),
        );
        Log::info(
            '[VitepressService -> _loadIndexPage]: save index page data {data} to {path}...',
            [
                'data' => json_encode($config, JSON_PRETTY_PRINT),
                'path' => $path,
            ]
        );

        return $this->_writeMarkdown(
            $content,
            $path
        );
    }

    protected function _yaml_emit(mixed $data): string {
        if (empty($data)) {
            return '';
        }
        $yaml = yaml_emit(
            $data,
            YAML_ANY_ENCODING,
            YAML_LN_BREAK
        );
        if (empty($yaml)) {
            return '';
        }

        return str_replace(
            ["---\n", "\n..."],
            '',
            $yaml
        );
    }

    protected function _writeMarkdown(string $content, string $save_path, array $props = []): bool {
        if (!is_dir(dirname($save_path))) {
            if (!mkdir(
                dirname($save_path),
                0755,
                TRUE
            )) {
                Log::error(
                    '[VitepressService -> _writeMarkdowns]: unable to create path for writing: {path}.',
                    [
                        'path' => dirname($save_path),
                    ]
                );

                return FALSE;
            }
        }

        if (file_put_contents(
                $save_path,
                $this->_concatContent(
                    $content,
                    $props,
                )
            ) === FALSE) {
            Log::error(
                '[VitepressService -> _writeMarkdowns]: unable to write markdown: {path}.',
                [
                    'path' => $save_path,
                ]
            );

            return FALSE;
        }

        // 可访问权限.
        if (!chmod(
            $save_path,
            0755
        )) {
            Log::error(
                '[VitepressService -> _writeMarkdowns]: unable to chmod 0755: {path}.',
                [
                    'path' => $save_path,
                ]
            );
        }

        return TRUE;
    }

    protected function _concatContent(string $content, array $props): string {
        if (empty($props)) {
            return $content;
        }

        $yaml = $this->_yaml_emit($props);
        if (empty($yaml)) {
            return $content;
        }

        return sprintf(
            "---\n%s\n---\n%s",
            $yaml,
            $content
        );
    }

    protected function _loadMarkdowns(int $vault_id, int $site_id, string $vault_path): array {
        $docsEntry = '';
        $blogEntry = '';
        $docsNum   = 0;
        $blogNum   = 0;

        // 1. 文档 分类的markdown.
        $start = 0;
        $limit = 100;
        Log::info(
            '[VitepressService -> build]: loading docs markdowns @{path}...',
            ['path' => $vault_path,]
        );
        do {
            $data = $this->_markdown_service->getDocsMarkdowns(
                $vault_id,
                $site_id,
                $start,
                $limit
            );
            if (empty($data['mds'])) {
                break;
            }
            if (empty($docsEntry)) {
                $docsEntry = $data['mds'][0]['full_path'];
            }
            $start   = $data['next_start'];
            $docsNum += $this->_writeMarkdowns(
                $data['mds'],
                $vault_path
            );
        } while (!$data['end']);

        // 2. 动态(blog) 分类的markdown.
        $start = 0;
        Log::info(
            '[VitepressService -> build]: loading blog markdowns @{path}...',
            ['path' => $vault_path,]
        );
        do {
            $data = $this->_markdown_service->getBlogMarkdowns(
                $vault_id,
                $site_id,
                $start,
                $limit
            );
            if (empty($data['mds'])) {
                break;
            }
            if (empty($blogEntry)) {
                $blogEntry = $data['mds'][0]['full_path'];
            }
            $start   = $data['next_start'];
            $blogNum += $this->_writeMarkdowns(
                $data['mds'],
                $vault_path
            );
        } while (!$data['end']);

        return [$docsEntry, $blogEntry, $docsNum, $blogNum];
    }

    protected function _writeMarkdowns(array $docs, string $save_path): int {
        $count = 0;
        // 定制属性.
        // 关闭当前页面“在github上编辑此页面”入口.
        $props = [
            // 'editLink' => FALSE,
        ];
        foreach ($docs as $doc) {
            $path = sprintf(
                '%s/%s',
                rtrim(
                    $save_path,
                    '/'
                ),
                $doc['full_path']
            );
            $this->_writeMarkdown(
                $doc['content'],
                $path,
                array_merge(
                    $props,
                    $doc['property_json'] ?? []
                )
            );
            $count++;
        }

        return $count;
    }

    protected function _prepareBuildConfig(
        int    $site_id,
        array  $vault,
        string $docs_entry,
        string $blog_entry,
        array  $site_config = []
    ): void {
        $path = $this->_getConfigDir(
                $site_id,
                $vault['name']
            ) . DIRECTORY_SEPARATOR . 'config.yml';
        $v    = [
            'site' => [
                'title'       => $vault['site_name'],
                'description' => $vault['site_title'],

                // 相对于public的目录.
                'base'        => sprintf(
                    '/ydc_docvite/%d/%s/',
                    $site_id,
                    $vault['name']
                ),

                'docsEntry' => str_replace(
                    '.md',
                    '',
                    $docs_entry
                ),
                'blogEntry' => str_replace(
                    '.md',
                    '',
                    $blog_entry
                ),

                // 这几个路径只能是相对的.
                // 相对于工作根目录.
                'srcDir'    => basename(
                    $this->_getSrcDir(
                        $site_id,
                        $vault['name']
                    )
                ),
                'outDir'    => basename(
                    $this->_getOutDir(
                        $site_id,
                        $vault['name']
                    )
                ),
                'cacheDir'  => basename(
                    $this->_getCacheDir(
                        $site_id,
                        $vault['name']
                    )
                ),

                // export default {
                //  themeConfig: {
                //    footer: {
                //      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
                //      copyright: 'Copyright © 2019-present <a href="https://github.com/yyx990803">Evan You</a>'
                //    }
                //  }
                //}
                'footer'    => [
                    'message'   => '易东文档W',
                    'copyright' => '2025',
                ],
            ],
        ];
        if (!empty($site_config['addonNavis']) && is_array($site_config['addonNavis'])) {
            foreach ($site_config['addonNavis'] as $addonNavi) {
                $v['site']['addonNavis'][] = [
                    'text' => $addonNavi['text'],
                    'url'  => $addonNavi['url'],
                ];
            }
        }

        if (!empty($site_config['footerText']) && is_array($site_config['footerText'])) {
            $footerTextConf = $site_config['footerText'][0];
            if (!empty($footerTextConf['text']) && $footerTextConf['url']) {
                $v['site']['footer']['message'] = sprintf(
                    '<a href="%s">%s</a>',
                    $footerTextConf['url'],
                    $footerTextConf['text']
                );
            }
        }
        if (!empty($site_config['footerCopyright']) && is_array($site_config['footerCopyright'])) {
            $footerCopyrightConf = $site_config['footerCopyright'][0];
            if (!empty($footerCopyrightConf['text']) && $footerCopyrightConf['url']) {
                $v['site']['footer']['copyright'] = sprintf(
                    '<a href="%s">%s</a>',
                    $footerCopyrightConf['url'],
                    $footerCopyrightConf['text']
                );
            }
        }
        if (isset($site_config['docPageEditLinkText']) && ($site_config['docPageEditLinkText'] !== '')) {
            if (isset($site_config['docPageEditLink']) && ($site_config['docPageEditLink'] !== '')) {
                $v['site']['editLink'] = [
                    'text' => $site_config['docPageEditLinkText'],
                    'link' => $site_config['docPageEditLink'],
                ];
            }
        }

        Log::info(
            '[VitepressService -> build]: build config file {file}...',
            [
                'file' => json_encode(
                    $v,
                    JSON_PRETTY_PRINT
                ),
            ]
        );

        if (!yaml_emit_file(
            $path,
            $v
        )) {
            throw new CommonException('ERR_VITE_GEN_CONF');
        }
    }

    protected function _getConfigDir(int $site_id, string $vault_name): string {
        return $this->_getVaultWorkdir(
                $site_id,
                $vault_name
            ) . DIRECTORY_SEPARATOR . '.vitepress';
    }

    protected function _logBruch(...$params): void {
        Log::debug(
            "[VitepressService -> _logBruch]: \n{msg}",
            [
                'msg' => var_export(
                    $params,
                    TRUE
                ),
            ]
        );

        throw  new CommonException('ERR_VITE_BRUCH_DEBUG');
    }
}