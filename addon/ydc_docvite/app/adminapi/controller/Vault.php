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

namespace addon\ydc_docvite\app\adminapi\controller;

use think\App;
use think\Response;

use core\base\BaseAdminController;

use addon\ydc_docvite\app\service\admin\build\VitepressService;
use addon\ydc_docvite\app\service\admin\markdown\MarkdownService;

/**
 * Index
 *
 * @package addon\ydc_docvite\app\adminapi\controller\markdown
 */
class Vault extends BaseAdminController {
    protected ?MarkdownService $_md_service = NULL;
    protected ?VitepressService $_vitepress_service = NULL;
    
    public function __construct(App $app) {
        parent::__construct($app);
        $this->_md_service        = new MarkdownService();
        $this->_vitepress_service = new VitepressService();
    }
    
    /**
     * 获取仓库列表
     *
     * @return \think\Response
     */
    public function index():Response {
        $params = $this->request->params(
            [
                ['name', NULL],
                ['alias_name', NULL],
            ]
        );
        
        return success($this->_md_service->getVaultPage($params));
    }
    
    /**
     * Add.
     *
     * @return \think\Response
     */
    public function add():Response {
        $data = $this->request->params(
            [
                ['name', NULL],
                ['alias_name', NULL],
                ['site_name', NULL],
                ['site_logo', NULL],
                ['site_title', NULL],
                ['site_subtitle', NULL],
                ['site_feature_list', NULL],
                ['site_home_content', NULL],
                ['site_custom_property', NULL],
                ['site_custom_css', NULL],
                ['site_custom_scripts', NULL],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Vault.add');
        $id = $this->_md_service->addVault($data);
        
        return success('ADD_SUCCESS', ['id' => $id]);
    }
    
    /**
     * Edit.
     *
     * @return \think\Response
     */
    public function edit():Response {
        $data = $this->request->params(
            [
                ['id', NULL],
                ['name', NULL],
                ['alias_name', NULL],
                ['site_name', NULL],
                ['site_logo', ''],
                ['site_title', ''],
                ['site_home_content', ''],
                ['site_subtitle', ''],
                ['site_feature_list', []],
                ['site_custom_property', []],
                ['site_custom_css', ''],
                ['site_custom_scripts', []],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Vault.edit');
        $id = $this->_md_service->editVault($data);
        
        return success('EDIT_SUCCESS', ['id' => $id]);
    }
    
    /**
     * Delete.
     *
     * @return \think\Response
     * @throws
     */
    public function del():Response {
        $params = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Vault.del');
        $this->_md_service->rmVault($params['id']);
        
        return success('DELETE_SUCCESS');
    }
    
    /**
     * Publish.
     *
     * @return \think\Response
     * @throws
     */
    public function publish():Response {
        $params = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Vault.publish');
        $this->_vitepress_service->requestBuild($params['id']);
        
        return success('SUC_PUBLISH');
    }
    
    /**
     * clearPublish.
     *
     * @return \think\Response
     * @throws
     */
    public function clearPublish():Response {
        $params = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Vault.clearPublish');
        $this->_vitepress_service->requestBuildClear($params['id'], TRUE);
        
        return success();
    }
    
    /**
     * pullPublishStatus.
     *
     * @return \think\Response
     * @throws
     */
    public function pullPublishStatus():Response {
        $params = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Vault.pullPublishStatus');
        
        $v = $this->_md_service->getVaultDetail($params['id']);
        if (empty($v)) {
            return fail('no such vault');
        }
        
        return success(
            [
                'status' => $v['vite_status'],
            ]
        );
    }
    
    /**
     * 仓库和目录选择树.
     *
     * @return \think\Response
     */
    public function selectTree():Response {
        $params = $this->request->params(
            [
                ['enableVaultSelect', 0],
                ['mode', -1],
            ]
        );
        
        return success(
            $this->_md_service->getAllVaultAndPathTree(
                !empty($params['enableVaultSelect']),
                $params['mode']
            )
        );
    }
    
    /**
     * 仓库选择列表.
     *
     * @return \think\Response
     */
    public function select():Response {
        $params = $this->request->params(
            [
                ['name', NULL],
            ]
        );
        
        return success(
            $this->_md_service->getVaultSelectList($params)
        );
    }
}