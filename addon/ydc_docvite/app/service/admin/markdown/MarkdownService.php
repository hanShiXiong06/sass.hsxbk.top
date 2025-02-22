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

namespace addon\ydc_docvite\app\service\admin\markdown;

use Throwable;

use core\base\BaseAdminService;
use core\exception\CommonException;

use addon\ydc_docvite\app\service\admin\build\VitepressService;
use addon\ydc_docvite\app\model\Config;
use addon\ydc_docvite\app\model\Attach;
use addon\ydc_docvite\app\model\Path;
use addon\ydc_docvite\app\model\Vault;
use addon\ydc_docvite\app\model\Markdown;

/**
 * 文档业务逻辑.
 *
 * @package addon\ydc_docvite\app\service\admin\markdown
 */
class MarkdownService extends BaseAdminService {

    const MaxPathDepth = 10;

    protected ?Vault  $_md_vault  = NULL;
    protected ?Path   $_md_path   = NULL;
    protected ?Attach $_md_attach = NULL;
    protected ?Config $_md_config = NULL;

    public function __construct() {
        parent::__construct();
        $this->model      = new Markdown();
        $this->_md_vault  = new Vault();
        $this->_md_path   = new Path();
        $this->_md_attach = new Attach();
        $this->_md_config = new Config();
    }

    public function getSiteId(): int {
        return $this->site_id;
    }

    public function getConfigList(): array {
        return $this->_md_config->getConfigList($this->site_id);
    }

    public function saveConfigList(array $data): void {
        $this->_md_config->saveConfigList($data, $this->site_id);
    }

    /**
     * addMarkdown.
     *
     * @param array $data
     *
     * @return bool
     * @throws
     */
    public function addMarkdown(array $data): bool {
        $this->model->startTrans();
        try {

            $data['uuid']     = $this->_genUUIDForWeb($data);
            $data['filename'] = $data['title'] . '.md';

            if ($this->markdownExists($data['uuid'])) {
                throw new CommonException('ERR_MD_UUID_EXISTS');
            }

            if (!$this->vaultIdExists($data['vault_id'])) {
                throw new CommonException('ERR_VAULT_NO_FOUND');
            }

            if (!$this->pathIdExists($data['path_id'], $data['vault_id'])) {
                throw new CommonException('ERR_PATH_NOT_FOUND');
            }

            $record  = [
                'content'     => $data['content'],
                'site_id'     => $this->site_id,
                'create_time' => time(),
            ];
            $attachs = $data['attachs'] ?? [];

            if (isset($data['customProperty'])) {
                $data['property_json'] = json_encode($data['customProperty'], JSON_UNESCAPED_UNICODE);
            }

            $data = array_filter(
                $data,
                function ($k) {
                    return in_array(
                        $k,
                        [
                            'uid',
                            'uuid',
                            'filename',
                            'title',
                            'keywords',
                            'description',
                            'property_json',
                            'vault_id',
                            'path_id',
                        ]
                    );
                },
                ARRAY_FILTER_USE_KEY
            );

            $record = array_merge($record, $data);

            // 计算全部字符串类的长度.
            // 其他类型无关紧要.
            $contentLen = 0;
            foreach ($record as $item) {
                if (is_string($item)) {
                    $contentLen += strlen($item);
                }
            }

            $record['size'] = $contentLen;

            $m = $this->model->create($record);

            $this->_updateAttachInfo($attachs, $m->id);

            $this->model->commit();

            return TRUE;
        } catch (Throwable $e) {
            $this->model->rollback();
            throw $e;
        }
    }

    protected function _genUUIDForWeb(array $data): string {
        $path = $this->getPathFullName($data['path_id']);
        if ($path === '[N/A]') {
            throw new CommonException('ERR_PATH_NO_FOUND');
        }

        $vaultName = $this->vaultId2Name($data['vault_id']);
        if (empty($vaultName)) {
            throw new CommonException('ERR_VAULT_NO_FOUND');
        }

        return md5(sprintf('/%s/%s/%s.md', $vaultName, $path, $data['title']));
    }

    public function getPathFullName(int $pathId, int $site_id = NULL): string {
        if ($site_id === NULL) {
            $site_id = $this->site_id;
        }
        $path = $this->_md_path
            ->where(
                [
                    'site_id' => $site_id,
                    'id'      => $pathId,
                ]
            )
            ->find();
        if (empty($path)) {
            if ($pathId === 0) {
                return '/';
            }

            return '[N/A]';
        }

        $name = $path->name;
        if ($path->parent_id !== 0) {
            $parentPathName = $this->getPathFullName($path->parent_id, $site_id);
            if (!empty($parentPathName)) {
                $name = sprintf('%s/%s', $parentPathName, $name);
            }
        }

        return $name;
    }

    public function vaultId2Name(int $id): string {
        $record = $this->_md_vault
            ->where('site_id', $this->site_id)
            ->where('id', $id)
            ->find();
        if (empty($record)) {
            return '';
        }

        return $record->name;
    }

    public function markdownExists(string $uuid): bool {
        return $this->model
                   ->where('site_id', $this->site_id)
                   ->where('uuid', $uuid)
                   ->count('id') > 0;
    }

    public function vaultIdExists(int $vaultId): bool {
        return $this->_md_vault
                   ->where('site_id', $this->site_id)
                   ->where('id', $vaultId)
                   ->count('id') > 0;
    }

    public function pathIdExists(int $id, int $vaultId): bool {
        return $this->_md_path
                   ->where(
                       [
                           'site_id'  => $this->site_id,
                           'vault_id' => $vaultId,
                           'id'       => $id,
                       ]
                   )
                   ->count('id') > 0;
    }

    protected function _updateAttachInfo(array $ids, int $mid): void {
        $ids     = array_values(array_unique($ids));
        $records = $this->_md_attach
            ->where('site_id', $this->site_id)
            ->whereIn('id', $ids)
            ->select();
        if (is_iterable($records)) {
            foreach ($records as $record) {
                $old                = $record->mid_arr;
                $old             [] = $mid;
                $record->mid_arr    = $old;
                $record->save();
            }
        }
    }

    public function getVaultDetail(int $id, int $site_id = NULL): mixed {
        if ($site_id === NULL) {
            $site_id = $this->site_id;
        }
        $record = $this->_md_vault
            ->where('site_id', $site_id)
            ->where('id', $id)
            ->find();
        if (empty($record)) {
            return NULL;
        }

        return $record->toArray();
    }

    public function updateBuildStatus(int $id, int $status, string $msg = '', int $site_id = NULL): void {
        if ($site_id === NULL) {
            $site_id = $this->site_id;
        }
        $record = $this->_md_vault
            ->where('site_id', $site_id)
            ->where('id', $id)
            ->find();
        if (empty($record)) {
            return;
        }

        $record->vite_status = $status;
        if ($msg !== '') {
            $record->vite_last_err_msg = $msg;
        }

        $record->save();
    }

    public function updateMarkdown(int $id, array $change = [], array $attachs = []): void {
        $record = $this->model
            ->where(
                [
                    'site_id' => $this->site_id,
                    'id'      => $id,
                ]
            )
            ->find();
        if (empty($record)) {
            throw new CommonException('ERR_MD_NOT_FOUND');
        }

        if (isset($change['title'])) {
            $record->title = $change['title'];
        }
        if (isset($change['keywords'])) {
            $record->keywords = $change['keywords'];
        }
        if (isset($change['description'])) {
            $record->description = $change['description'];
        }
        if (isset($change['content'])) {
            $record->content = $change['content'];
        }
        if (isset($change['property_json'])) {
            $record->property_json = $change['property_json'];
        }

        $calc = $record->toArray();

        // 再重新计算新的容量.
        // 计算全部字符串类的长度.
        // 其他类型无关紧要.
        $contentLen = 0;
        foreach ($calc as $item) {
            if (is_string($item)) {
                $contentLen += strlen($item);
            }
        }

        $record->size = $contentLen;

        $record->save();
        $record->update_time = time();

        if (!empty($attachs)) {
            $this->_updateAttachInfo($attachs, $record->id);
        }
    }

    protected function _checkSiteFeatureList(array $data): void {
        if (!isset($data['site_feature_list'])) {
            return;
        }
        if (!is_array($data['site_feature_list'])) {
            throw new CommonException('首页特色栏目参数有误');
        }

        foreach ($data['site_feature_list'] as $datum) {
            if (empty($datum['title']) ||
                empty($datum['text']) ||
                empty($datum['url']) ||
                empty($datum['iconSrc']) ||
                empty($datum['iconWidth']) ||
                empty($datum['iconHeight'])) {
                throw new CommonException('首页特色栏目参数有误');
            }
        }
    }

    /**
     * 编辑仓库.
     *
     * @param array $data
     *
     * @return int
     */
    public function editVault(array $data): int {
        $res = $this->_editVault($data);
        if ($res === NULL) {
            return -1;
        }

        return $res->id;
    }

    protected function _editVault(array $param): Vault|null {
        if (empty($param)) {
            return NULL;
        }

        $vault = $this->_md_vault
            ->where('site_id', $this->site_id)
            ->find($param['id']);
        if (empty($vault)) {
            return NULL;
        }

        if ($this->_md_vault
                ->where('site_id', $this->site_id)
                ->where('name', $param['name'])
                ->where('id', '<>', $vault->id)
                ->count() > 0) {
            throw new CommonException('ERR_VAULT_NAME_DUP');
        }
        if (isset($param['name'])) {
            $vault->name        = $param['name'];
            $vault->update_time = time();
        }
        if (isset($param['alias_name'])) {
            $vault->alias_name  = $param['alias_name'];
            $vault->update_time = time();
        }
        if (isset($param['site_name'])) {
            $vault->site_name   = $param['site_name'];
            $vault->update_time = time();
        }
        if (isset($param['site_logo'])) {
            $vault->site_logo = $param['site_logo'];
            // $vault->site_logo   = url($param['site_logo'], [], FALSE, true)->buildUrl();
            $vault->update_time = time();
        }
        if (isset($param['site_title'])) {
            $vault->site_title  = $param['site_title'];
            $vault->update_time = time();
        }
        if (isset($param['site_subtitle'])) {
            $vault->site_subtitle = $param['site_subtitle'];
            $vault->update_time   = time();
        }
        if (isset($param['site_feature_list'])) {
            $this->_checkSiteFeatureList($param);
            $vault->site_feature_list = json_encode($param['site_feature_list']);
            $vault->update_time       = time();
        }
        if (isset($param['site_home_content'])) {
            $vault->site_home_content  = $param['site_home_content'];
            $vault->update_time = time();
        }
        if (isset($param['site_custom_property'])) {
            $vault->site_custom_property = json_encode($param['site_custom_property']);
            $vault->update_time          = time();
        }
        if (!empty($param['site_custom_css'])) {
            $vault->site_custom_css = $param['site_custom_css'];
            $vault->update_time     = time();
        }
        if (isset($param['site_custom_scripts'])) {
            $vault->site_custom_scripts = $param['site_custom_scripts'];
            $vault->update_time         = time();
        }

        $vault->save();

        return $vault;
    }

    /**
     * 新增仓库.
     *
     * @param array $data
     *
     * @return int
     */
    public function addVault(array $data): int {
        $data['create_time'] = time();

        $res = $this->_addVault($data);
        if ($res === NULL) {
            return -1;
        }

        return $res->id;

    }

    protected function _addVault(array $param): Vault|null {
        if (empty($param)) {
            return NULL;
        }

        if ($this->_md_vault
                ->where('site_id', $this->site_id)
                ->where('name', $param['name'])
                ->count() > 0) {
            throw new CommonException('ERR_VAULT_NAME_DUP');
        }

        $allowed = [
            'name',
            'alias_name',
            'site_name',
            'site_logo',
            'site_title',
            'site_home_content',
            'site_subtitle',
            'site_feature_list',
            'site_custom_property',
            'site_custom_css',
            'site_custom_scripts',
        ];
        $param   = array_filter(
            $param,
            function ($key) use ($allowed) {
                return in_array($key, $allowed);
            },
            ARRAY_FILTER_USE_KEY
        );
        if (empty($param)) {
            return NULL;
        }
        if (!empty($param['site_feature_list'])) {
            $this->_checkSiteFeatureList($param);
            $param['site_feature_list'] = json_encode($param['site_feature_list']);
        } else {
            $param['site_feature_list'] = '[]';
        }
        if (!empty($param['site_custom_property'])) {
            $param['site_custom_property'] = json_encode($param['site_custom_property']);
        } else {
            $param['site_custom_property'] = '[]';
        }
        if (!empty($param['site_custom_scripts'])) {
            $param['site_custom_scripts'] = json_encode($param['site_custom_scripts']);
        } else {
            $param['site_custom_scripts'] = '[]';
        }
        if (empty($param['site_custom_css'])) {
            $param['site_custom_css'] = '';
        }
        if (empty($param['site_logo'])) {
            $param['site_logo'] = '';
        }
        if (empty($param['site_home_content'])) {
            $param['site_home_content'] = '';
        }

        $param['site_id'] = $this->site_id;
        $param['uuid']    = $this->_genVaultUUID();
        $m                = $this->_md_vault->create($param);

        // 创建固定目录. docs和blog.
        Path::create(

            [
                'name'       => 'docs',
                'alias_name' => '文档',
                'vault_id'   => $m->id,
                'site_id'    => $this->site_id,
            ]
        );
        Path::create(
            [
                'name'       => 'blog',
                'alias_name' => '资讯',
                'vault_id'   => $m->id,
                'site_id'    => $this->site_id,
            ]
        );

        return $m;
    }

    protected function _genVaultUUID(): string {
        return uniqid('Yd');
    }

    /**
     * rmVault
     *
     * @param int $id
     *
     * @throws
     */
    public function rmVault(int $id): void {
        try {
            $this->_md_vault->startTrans();

            $v = $this->_md_vault
                ->where(
                    [
                        'site_id' => $this->site_id,
                        'id'      => $id,
                    ]
                )
                ->find();
            if (empty($v)) {
                $this->_md_vault->commit();

                return;
            }

            $mids = $this->model
                ->where('site_id', $this->site_id)
                ->where('vault_id', $v->id)
                ->column('id');
            if (!empty($mids)) {
                foreach ($mids as $mid) {
                    $this->rmMarkdown($mid, TRUE, FALSE);
                }
            }

            $v->delete();
            $this->_rmVaultPath($id);
            $this->_md_vault->commit();
        } catch (Throwable $e) {
            $this->_md_vault->rollback();
            throw $e;
        }
    }

    public function rmMarkdown(int $id, bool $rmAttach = FALSE, bool $rmPath = TRUE): void {
        $record = $this->model
            ->where('site_id', $this->site_id)
            ->where('id', $id)
            ->find();
        if (empty($record)) {
            return;
        }

        $vaultId = $record->vault_id;
        $pathId  = $record->path_id;
        $record->delete();

        // 删除附件.
        // $mid = $record->id;
        // if ($rmAttach) {
        //     $this->_rmMarkdownAttach($mid, $keepAttachIds);
        // }

        if ($rmPath) {
            // 删除空目录.
            $this->_rmMarkdownPath($vaultId, $pathId);
        }
    }

    protected function _rmMarkdownPath(int $vaultId, int $pathId): void {
        $ids       = [$pathId];
        $parentIds = $this->_getPathAllParentIds($pathId);
        $ids       = array_merge($ids, $parentIds);
        foreach ($ids as $id) {
            if (!$this->_pathInUsed($vaultId, $id)) {
                // 特殊目录保留.
                $p = $this->_md_path->find($id);
                if (!empty($p)) {
                    if ($p->name === 'docs' && $p->parent_id == 0) {
                        continue;
                    }
                    if ($p->name === 'blog' && $p->parent_id == 0) {
                        continue;
                    }
                }
                $this->_md_path
                    ->where(
                        [
                            'site_id' => $this->site_id,
                            'id'      => $id,
                        ]
                    )
                    ->delete();
            }
        }
    }

    protected function _getPathAllParentIds(int $pathId): array {
        $ids    = [];
        $record = $this->_md_path
            ->where(
                [
                    'site_id' => $this->site_id,
                    'id'      => $pathId,
                ]
            )
            ->find();
        if (empty($record) || $record->parent_id === 0) {
            return $ids;
        }

        $parentId = $record->parent_id;
        $ids[]    = $parentId;
        do {
            $record = $this->_md_path
                ->where(
                    [
                        'site_id' => $this->site_id,
                        'id'      => $parentId,
                    ]
                )
                ->find();
            if (empty($record)) {
                break;
            }

            $parentId = $record->parent_id;
            if ($parentId !== 0) {
                $ids[] = $parentId;
            }
        } while ($parentId !== 0);

        return $ids;
    }

    protected function _pathInUsed(int $vaultId, int $id): bool {
        if ($this->model
                ->where(
                    [
                        'site_id'  => $this->site_id,
                        'vault_id' => $vaultId,
                        'path_id'  => $id,
                    ]
                )
                ->count('id') > 0) {
            return TRUE;
        }

        return $this->_md_path
                   ->where(
                       [
                           'site_id'   => $this->site_id,
                           'vault_id'  => $vaultId,
                           'parent_id' => $id,
                       ]
                   )
                   ->count('id') > 0;
    }

    protected function _rmVaultPath(int $vaultId): void {
        $this->_md_path
            ->where(
                [
                    'site_id'  => $this->site_id,
                    'vault_id' => $vaultId,
                ]
            )
            ->delete();
    }

    public function getMarkdownDetail(
        int   $id,
        array $fields
        = [
            'id',
            'uuid',
            'filename',
            'content',
            'title',
            'keywords',
            'description',
            'property_json',
            'vault_id',
            'path_id',
            'size',
            'create_time',
            'update_time',
        ]
    ): array {
        $record = $this->model
            ->where([['site_id', '=', $this->site_id]])
            ->field($fields)
            ->find($id);
        if (empty($record)) {
            return [];
        }
        $record = $record->toArray();
        if (!empty($record['property_json'])) {
            $record['customProperty'] = json_decode($record['property_json'], TRUE);
        }

        if (!empty($record['vault_id'])) {
            $record['vault_name'] = $this->vaultId2Name($record['vault_id']);
        }

        if (!empty($record['path_id'])) {
            $record['path_name'] = $this->getPathFullName($record['path_id']);
        }

        return $record;
    }

    /**
     * 获取文档列表
     *
     * @param array $where
     *
     * @return array
     * @throws
     */
    public function getMarkdownPage(array $where = []): array {
        $page_params = $this->getPageParam();
        $newWhere[]  = ['site_id', '=', $this->site_id];
        $fields      = [
            'id',
            'uuid',
            'filename',
            'title',
            'keywords',
            'description',
            'vault_id',
            'path_id',
            'size',
            'create_time',
            'update_time',
        ];
        $order       = 'create_time desc';
        $vaultId     = 0;
        if (isset($where['vault_id'])) {
            $vaultId = $where['vault_id'];
            unset($where['vault_id']);
        }
        $pathId = 0;
        if (isset($where['path_id'])) {
            $pathId = $where['path_id'];
            unset($where['path_id']);
        }
        if ($vaultId != 0) {
            $newWhere['vault_id'] = $vaultId;
        }
        if ($vaultId != 0 && $pathId != 0 && is_numeric($pathId)) {
            $allPathIds          = [
                $pathId,
                ...Path::getAllChildIds($this->site_id, $vaultId, $pathId),
            ];
            $newWhere['path_id'] = $allPathIds;
        }

        $model    = $this->model
            ->where($newWhere)
            ->withSearch(['title', 'create_time', 'update_time', 'content'], $where)
            ->field($fields)
            ->order($order);
        $page     = $page_params['page'];
        $limit    = $page_params['limit'];
        $pageData = $model
            ->paginate(
                [
                    'list_rows' => $limit,
                    'page'      => $page,
                ]
            )
            ->toArray();

        $records  = $pageData['data'];
        $pathIds  = [];
        $vaultIds = [];

        $data = [];
        foreach ($records as $record) {
            $pathIds[$record['path_id']]   = 1;
            $vaultIds[$record['vault_id']] = 1;
            $data[]                        = $record;
        }

        $pathMap  = $this->getPathsFullName(array_keys($pathIds));
        $vaultMap = $this->vaultIds2Names(array_keys($vaultIds));
        foreach ($data as &$datum) {
            if (isset($pathMap[$datum['path_id']])) {
                $datum['path_name'] = $pathMap[$datum['path_id']];
            } else {
                $datum['path_name'] = '';
            }

            if (isset($vaultMap[$datum['vault_id']])) {
                $datum['vault_name'] = $vaultMap[$datum['vault_id']];
            } else {
                $datum['vault_name'] = '';
            }

            $datum['size'] = self::formatSizeUnit($datum['size']);
        }

        return [
            'total'        => $pageData['total'],
            'per_page'     => $pageData['per_page'],
            'current_page' => $pageData['current_page'],
            'last_page'    => $pageData['last_page'],
            'data'         => $data,
        ];
    }

    /**
     * Get paths full name map.
     *
     * @param array    $pathIds
     * @param int|null $site_id
     *
     * @return array
     */
    public function getPathsFullName(array $pathIds, int $site_id = NULL): array {
        $result = [];
        foreach ($pathIds as $pathId) {
            $f               = $this->getPathFullName($pathId, $site_id);
            $result[$pathId] = $f;
        }

        return $result;
    }

    public function vaultIds2Names(array $ids): array {
        $records = $this->_md_vault
            ->where('site_id', $this->site_id)
            ->whereIn('id', $ids)
            ->select();
        if (!is_iterable($records)) {
            return [];
        }

        $map = [];
        foreach ($records as $record) {
            $map[$record->id] = $record->name;
        }

        return $map;
    }

    public static function formatSizeUnit(int $size): string {
        if ($size == 0) {
            return '0 byte';
        }
        // 0 ~ 1KB
        if ($size > 0 && $size < (1 << 10)) {
            return "{$size} byte";
        }

        // 1KB ~ 1MB
        if ($size > (1 << 10) && $size < (1 << 20)) {
            return number_format($size / (1 << 10), 2) . ' KB';
        }

        // 1MB ~ 1GB
        if ($size > (1 << 20) && $size < (1 << 30)) {
            return number_format($size / (1 << 20), 2) . ' MB';
        }

        // 1GB ~ xx
        return number_format($size / (1 << 30), 2) . ' GB';
    }

    /**
     * 获取仓库列表
     *
     * @param array $where
     *
     * @return array
     * @throws
     */
    public function getVaultPage(array $where = []): array {
        $page_params = $this->getPageParam();
        $where[]     = ['site_id', '=', $this->site_id];
        $fields      = [
            'id',
            'name',
            'alias_name',
            'site_name',
            'site_logo',
            'site_title',
            'site_subtitle',
            'site_feature_list',
            'site_home_content',
            'site_custom_property',
            'site_custom_css',
            'site_custom_scripts',
            'vite_status',
            'vite_last_err_msg',
            'create_time',
            'update_time',
        ];
        $order       = 'create_time desc';

        $search_model = $this->_md_vault
            ->where([['site_id', '=', $this->site_id]])
            ->withSearch(['name', 'alias_name'], $where)
            ->field($fields)
            ->order($order);

        $page     = $page_params['page'];
        $limit    = $page_params['limit'];
        $pageData = $search_model
            ->paginate(
                [
                    'list_rows' => $limit,
                    'page'      => $page,
                ]
            )
            ->toArray();

        $records = $pageData['data'];
        $data    = [];
        foreach ($records as $record) {
            $record['url'] = url(
                sprintf(
                    '/%s/%d/%s/index.html',
                    VitepressService::AppName,
                    $this->site_id,
                    $record['name']
                ),
                [],
                FALSE,
                TRUE
            )->buildUrl();
            if (!empty($record['site_feature_list'])) {
                $record['site_feature_list'] = json_decode($record['site_feature_list'], TRUE);
            }
            if (!empty($record['site_custom_property'])) {
                $record['site_custom_property'] = json_decode($record['site_custom_property'], TRUE);
            }
            if (!empty($record['site_custom_scripts'])) {
                $record['site_custom_scripts'] = json_decode($record['site_custom_scripts'], TRUE);
            }
            $data[] = $record;
        }

        return [
            'total'        => $pageData['total'],
            'per_page'     => $pageData['per_page'],
            'current_page' => $pageData['current_page'],
            'last_page'    => $pageData['last_page'],
            'data'         => $data,
        ];
    }

    public function getVaultSelectList(array $params = []): array {
        $opts    = [];
        $records = $this->_md_vault
            ->where(
                [
                    'site_id' => $this->site_id,
                ]
            )
            ->withSearch(['name'], $params)
            ->field(
                [
                    'id',
                    'name',
                    'alias_name',
                ]
            )
            ->select();
        if (!is_iterable($records)) {
            return $opts;
        }

        foreach ($records as $record) {
            $opts[] = $record->toArray();
        }

        return $opts;
    }

    /**
     * getVaultAndPathTree.
     *
     * @param bool $enableVaultSelect
     * @param int  $mode -1:获取全部根目录;0-只获取docs根目录;1-只获取blog根目录
     *
     * @return array
     * @throws
     */
    public function getAllVaultAndPathTree(bool $enableVaultSelect = FALSE, int $mode = -1): array {
        $tree    = [];
        $records = $this->_md_vault
            ->where(
                [
                    'site_id' => $this->site_id,
                ]
            )
            ->field(
                [
                    'id',
                    'name',
                    'alias_name',
                ]
            )
            ->select();
        if (!is_iterable($records)) {
            return $tree;
        }

        foreach ($records as $record) {
            $tree_node = [
                'id'         => uniqid('v-' . $record->id . '-'),
                'vault_id'   => $record->id,
                'is_vault'   => 1,
                'label'      => $record['name'],
                'name'       => $record['name'],
                'alias_name' => $record['alias_name'],
                'sort'       => $record['sort'],
                'parent_id'  => 0,
                'disabled'   => !$enableVaultSelect,// 不能直接选取仓库节点. disabled: true,
                'children'   => [],
            ];
            if ($mode == 0) {
                $p = $this->_md_path
                    ->where(
                        [
                            'name'     => 'docs',
                            'vault_id' => $record->id,
                        ]
                    )
                    ->find();
                if (!empty($p)) {
                    $tree_node['children'] = [
                        [
                            'id'         => $p['id'],
                            'label'      => $p['name'],
                            'name'       => $p['name'],
                            'vault_id'   => $p['vault_id'],
                            'alias_name' => $p['alias_name'],
                            'sort'       => $p['sort'],
                            'parent_id'  => $p['parent_id'],
                            'children'   => $this->getVaultPathTree($record->id, $p->id),
                        ],
                    ];
                }
            } else if ($mode == 1) {
                $p = $this->_md_path
                    ->where(
                        [
                            'name'     => 'blog',
                            'vault_id' => $record->id,
                        ]
                    )
                    ->find();
                if (!empty($p)) {
                    $tree_node['children'] = [
                        [
                            'id'         => $p['id'],
                            'label'      => $p['name'],
                            'name'       => $p['name'],
                            'vault_id'   => $p['vault_id'],
                            'alias_name' => $p['alias_name'],
                            'sort'       => $p['sort'],
                            'parent_id'  => $p['parent_id'],
                            'children'   => $this->getVaultPathTree($record->id, $p->id),
                        ],
                    ];
                }
            } else {
                $tree_node = [
                    'id'         => uniqid('v-' . $record->id . '-'),
                    'vault_id'   => $record->id,
                    'is_vault'   => 1,
                    'label'      => $record['name'],
                    'name'       => $record['name'],
                    'alias_name' => $record['alias_name'],
                    'sort'       => $record['sort'],
                    'parent_id'  => 0,
                    'disabled'   => !$enableVaultSelect,//不能直接选取仓库节点. disabled: true,
                    'children'   => $this->getVaultPathTree($record->id, 0),
                ];
            }

            $tree[] = $tree_node;
        }

        return $tree;
    }

    /**
     * getVaultPathTree.
     *
     * @param int   $vaultId
     * @param int   $parentId
     * @param array $cond
     *
     * @return array
     * @throws
     */
    public function getVaultPathTree(int $vaultId = 0, int $parentId = 0, array $cond = []): array {
        $criteria = [
            'site_id'   => $this->site_id,
            'parent_id' => $parentId,
        ];
        if ($vaultId != 0) {
            $criteria['vault_id'] = $vaultId;
        }
        $criteria = array_merge($criteria, $cond);
        $records  = $this->_md_path
            ->where(
                $criteria
            )
            ->select();
        if (!is_iterable($records)) {
            return [];
        }

        $tree = [];
        foreach ($records as $record) {
            $record = $record->toArray();
            $tree[] = [
                'id'         => $record['id'],
                'label'      => $record['name'],
                'name'       => $record['name'],
                'vault_id'   => $record['vault_id'],
                'alias_name' => $record['alias_name'],
                'sort'       => $record['sort'],
                'parent_id'  => $record['parent_id'],
                'children'   => $this->getVaultPathTree($vaultId, $record['id'], $cond),
            ];
        }

        return $tree;
    }

    /**
     * addPath
     *
     * @param array $param
     *
     * @return \addon\ydc_docvite\app\model\Path|null
     * @throws
     */
    public function addPath(array $param): Path|null {
        if (empty($param)) {
            return NULL;
        }

        if ($this->_md_path
                ->where('site_id', $this->site_id)
                ->where('vault_id', $param['vault_id'])
                ->where('parent_id', $param['parent_id'])
                ->where('name', $param['name'])
                ->count() > 0) {
            throw new CommonException('ERR_VAULT_PATH_DUP');
        }

        if (!empty($param['parent_id']) &&
            (count($this->_getPathAllParentIds($param['parent_id'])) + 1 > self::MaxPathDepth)) {
            throw new CommonException('ERR_PATH_DEPTH_LIMIT');
        }

        $allowed = [
            'name',
            'alias_name',
            'parent_id',
            'vault_id',
            'sort',
        ];
        $param   = array_filter(
            $param,
            function ($key) use ($allowed) {
                return in_array($key, $allowed);
            },
            ARRAY_FILTER_USE_KEY
        );
        if (empty($param)) {
            return NULL;
        }
        $param['site_id'] = $this->site_id;

        return $this->_md_path->create($param);
    }

    /**
     * 编辑目录.
     *
     * @param array $data
     *
     * @return int
     */
    public function editPath(array $data): int {
        $res = $this->_editPath($data);
        if ($res === NULL) {
            return -1;
        }

        return $res->id;
    }

    protected function _editPath(array $param): Vault|null {
        if (empty($param)) {
            return NULL;
        }

        $path = $this->_md_path
            ->where('site_id', $this->site_id)
            ->find($param['id']);
        if (empty($path)) {
            return NULL;
        }

        $allowed = [
            // 'name',
            'alias_name',
        ];
        $param   = array_filter(
            $param,
            function ($key) use ($allowed) {
                return in_array($key, $allowed);
            },
            ARRAY_FILTER_USE_KEY
        );
        if (empty($param)) {
            return NULL;
        }
        // if (isset($param['name'])) {
        //     $path->name = $param['name'];
        // }
        if (isset($param['alias_name'])) {
            $path->alias_name  = $param['alias_name'];
            $path->update_time = time();
        }
        $path->save();

        return $path;
    }

    /**
     * rmPath.
     *
     * @param int $id
     *
     * @return void
     * @throws
     */
    public function rmPath(int $id): void {
        try {
            $this->_md_path->startTrans();

            $v = $this->_md_path
                ->where(
                    [
                        'site_id' => $this->site_id,
                        'id'      => $id,
                    ]
                )
                ->find();
            if (empty($v)) {
                return;
            }

            if ($v->name === 'docs' && $v->parent_id == 0) {
                throw new CommonException('ERR_DEL_DOCS_PATH');
            }
            if ($v->name === 'blog' && $v->parent_id == 0) {
                throw new CommonException('ERR_DEL_BLOG_PATH');
            }

            if ($this->_md_path
                    ->where(
                        [
                            'site_id'   => $this->site_id,
                            'parent_id' => $id,
                        ]
                    )
                    ->count('id') > 0) {
                throw new CommonException('ERR_DEL_PARENT_PATH');
            }

            if ($this->model
                    ->where(
                        [
                            'site_id' => $this->site_id,
                            'path_id' => $id,
                        ]
                    )
                    ->count('id') > 0) {
                throw new CommonException('ERR_DEL_PATH_WITH_DATA');
            }

            $v->delete();
            $this->_md_path->commit();
        } catch (Throwable $e) {
            $this->_md_path->rollback();
            throw $e;
        }
    }

    /**
     * 获取 文档 分类的markdown.
     *
     * @param int $vault_id
     * @param int $site_id
     * @param int $start
     * @param int $limit
     *
     * @return array
     * @throws
     */
    public function getDocsMarkdowns(int $vault_id, int $site_id, int $start = 0, int $limit = 100): array {
        return $this->_getPathNameDocsData('docs', $vault_id, $site_id, $start, $limit);
    }

    /**
     * _getPathNameDocsData.
     *
     * @param string $path_name
     * @param int    $vault_id
     * @param int    $site_id
     * @param int    $start
     * @param int    $limit
     *
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     */
    protected function _getPathNameDocsData(
        string $path_name,
        int    $vault_id,
        int    $site_id,
        int    $start = 0,
        int    $limit = 100
    ): array {
        $data = [
            'mds'        => [],
            'next_start' => -1,
            'end'        => TRUE,
        ];
        if ($start < 0 || $limit < 1) {
            return $data;
        }

        $v = $this->_md_vault
            ->where(
                [
                    'site_id' => $site_id,
                    'id'      => $vault_id,
                ]
            )
            ->find();
        if (empty($v)) {
            return $data;
        }

        $p = $this->_md_path
            ->where(
                [
                    'name'      => $path_name,
                    'vault_id'  => $v->id,
                    'site_id'   => $site_id,
                    'parent_id' => 0,
                ]
            )
            ->find();
        if (empty($p)) {
            return $data;
        }

        $allPathIds = array_merge(
            [$p->id],
            $this->_getAllChildrenPathIds(
                $vault_id,
                $p->id,
                $site_id
            )
        );

        $m     = $this->model->where(
            [
                'vault_id' => $v->id,
                'path_id'  => $allPathIds,
                'site_id'  => $site_id,
            ]
        );
        $total = $m->count('id');
        if ($start > $total - 1) {
            return $data;
        }

        $mds = $m
            ->limit($start, $limit)
            ->order('sort desc')
            ->order('id desc')
            ->select();

        if (!is_iterable($mds)) {
            $data['end'] = TRUE;

            return $data;
        }

        $data['next_start'] = $start + $limit;
        if ($data['next_start'] > $total - 1) {
            $data['next_start'] = -1;
        } else {
            $data['end'] = FALSE;
        }

        $pathIds = [];
        foreach ($mds as $md) {
            $row = $md->toArray();

            if (!empty($md->property_map)) {
                $row['property_json'] = $p;
            } else {
                $row['property_json'] = [];
            }

            $pathIds[$row['path_id']] = 1;
            $data['mds'][]            = $row;
        }
        $pathMap = $this->getPathsFullName(array_keys($pathIds), $site_id);
        foreach ($data['mds'] as &$datum) {
            if (isset($pathMap[$datum['path_id']])) {
                $datum['full_path'] = sprintf("%s/%s", $pathMap[$datum['path_id']], $datum['filename']);
            } else {
                $datum['full_path'] = '';
            }
        }

        return $data;
    }

    public function _getAllChildrenPathIds(int $vaultId, int $id, int $site_id): array {
        $paths  = $this->_md_path
            ->where(
                [
                    'vault_id'  => $vaultId,
                    'parent_id' => $id,
                    'site_id'   => $site_id,
                ]
            )
            ->select();
        $result = [];
        if (!is_iterable($paths)) {
            return $result;
        }
        foreach ($paths as $path) {
            $result[] = $path->id;
            $result   = array_merge(
                $result,
                $this->_getAllChildrenPathIds(
                    $vaultId,
                    $path->id,
                    $site_id
                )
            );
        }

        return $result;
    }

    /**
     * 获取 动态(blog) 分类的markdown.
     *
     * @param int $vault_id
     * @param int $site_id
     * @param int $start
     * @param int $limit
     *
     * @return array
     * @throws
     */
    public function getBlogMarkdowns(int $vault_id, int $site_id, int $start = 0, int $limit = 100): array {
        return $this->_getPathNameDocsData('blog', $vault_id, $site_id, $start, $limit);
    }

    protected function _rmMarkdownAttach(int $mid, array $excludeIds = []): void {
        $records = $this->_md_attach
            ->where('site_id', $this->site_id)
            ->whereFindInSet('mids', $mid)
            ->select();
        if (is_iterable($records)) {
            foreach ($records as $record) {
                $mids = $record->mid_arr;
                foreach ($mids as $idx => $id) {
                    if ($id == $mid) {
                        unset($mids[$idx]);
                    }
                }

                if (empty($mids)) {
                    if (in_array($record->id, $excludeIds)) {
                        $record->mid_arr = $mids;
                        $record->save();
                        continue;
                    }
                    // @todo: 附件删除
                    // $this->_attachment->delete($record->oss_key);
                    $record->delete();
                    continue;
                }

                $record->mid_arr = $mids;
                $record->save();
            }
        }
    }

    protected function _getApiIdConfig(): string {
        $v = $this->_getConfig('apiId');
        if (empty($v)) {
            throw new CommonException('ERR_CONFIG_API_ID');
        }

        return $v;
    }

    /**
     * get config.
     *
     * @param string $name
     *
     * @return string
     * @throws
     */
    protected function _getConfig(string $name): string {
        $config = $this->_md_config
            ->where(
                [
                    'site_id' => $this->site_id,
                    'name'    => $name,
                ]
            )
            ->find();
        if (empty($config)) {
            return '';
        }

        return $config->value;
    }

    protected function _getApiKeyConfig(): string {
        $v = $this->_getConfig('apiKey');
        if (empty($v)) {
            throw new CommonException('ERR_CONFIG_API_KEY');
        }

        return $v;
    }

    protected function _getApiSecretConfig(): string {
        $v = $this->_getConfig('apiSecret');
        if (empty($v)) {
            throw new CommonException('ERR_CONFIG_API_SEC');
        }

        return $v;
    }

    protected function _getPublishUrlConfig(): string {
        $v = $this->_getConfig('publishUrl');
        if (empty($v)) {
            throw new CommonException('ERR_CONFIG_PUB_URL');
        }

        return $v;
    }

}// End of class MarkdownService.