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

use addon\ydc_docvite\app\service\admin\markdown\MarkdownService;

/**
 * Index
 *
 * @package addon\ydc_docvite\app\adminapi\controller\markdown
 */
class Path extends BaseAdminController {
    protected ?MarkdownService $_md_service = NULL;
    
    public function __construct(App $app) {
        parent::__construct($app);
        $this->_md_service = new MarkdownService();
    }
    
    /**
     * 获取酒店列表
     *
     * @return \think\Response
     */
    public function selectTree():Response {
        $params = $this->request->params(
            [
                ['vault_id', 0],
                ['parent_id', 0],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Path.selectTree');
        
        return success(
            $this->_md_service->getVaultPathTree(
                $params['vault_id'],
                $params['parent_id']
            )
        );
    }
    
    /**
     * 获取仓库列表
     *
     * @return \think\Response
     */
    public function index():Response {
        $params = $this->request->params(
            [
                ['vault_id_index', 0],
                ['parent_id_index', 0],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Path.index');
        
        return success(
            $this->_md_service->getVaultPathTree(
                $params['vault_id_index'],
                $params['parent_id_index']
            )
        );
    }
    
    public function add():Response {
        $data = $this->request->params(
            [
                ['name', NULL],
                ['alias_name', NULL],
                ['vault_id', NULL],
                ['parent_id', NULL],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Path.add');
        $id = $this->_md_service->addPath($data);
        
        return success('ADD_SUCCESS', ['id' => $id]);
    }
    
    public function edit():Response {
        $data = $this->request->params(
            [
                ['id', NULL],
                // ['name', NULL],
                ['alias_name', NULL],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Path.edit');
        $id = $this->_md_service->editPath($data);
        
        return success('EDIT_SUCCESS', ['id' => $id]);
    }
    
    /**
     * @throws
     */
    public function del():Response {
        $params = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Path.del');
        $this->_md_service->rmPath($params['id']);
        
        return success('DELETE_SUCCESS');
    }
    
    /**
     * publish.
     *
     * @return \think\Response
     */
    public function publish():Response {
        $data = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Markdown.publish');
        // TODO: 待实现.
        
        return success('SUC_PUBLISH');
    }
    
}