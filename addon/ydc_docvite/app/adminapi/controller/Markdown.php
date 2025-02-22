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
class Markdown extends BaseAdminController {
    
    protected ?MarkdownService $_md_service = NULL;
    
    public function __construct(App $app) {
        parent::__construct($app);
        $this->_md_service = new MarkdownService();
    }
    
    /**
     * 获取文档列表
     *
     * @return \think\Response
     */
    public function index():Response {
        $params = $this->request->params(
            [
                ['filename', NULL],
                ['vault_id', 0],
                ['path_id', 0],
            ]
        );
        
        return success($this->_md_service->getMarkdownPage($params));
    }
    
    /**
     * 文档详情.
     *
     * @return \think\Response
     */
    public function detail():Response {
        $params = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $md = $this->_md_service->getMarkdownDetail($params['id'], [
            'id',
            'content',
            'title',
            'keywords',
            'description',
            'property_json',
            'vault_id',
            'path_id',
            'create_time',
            'update_time',
        ]);
        
        if (empty($md)) {
            return fail('ERR_MD_NOT_FOUND');
        }
        
        return success($md);
    }
    
    /**
     * add.
     *
     * @return \think\Response
     * @throws
     */
    public function add():Response {
        $data = $this->request->params(
            [
                ['vault_id', NULL],
                ['path_id', NULL],
                ['title', ''],
                ['keywords', ''],
                ['description', ''],
                ['content', ''],
                ['customProperty', []],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Markdown.add');
        $this->_md_service->addMarkdown($data);
        
        return success('ADD_SUCCESS');
    }
    
    /**
     * edit.
     *
     * @return \think\Response
     */
    public function edit():Response {
        $data = $this->request->params(
            [
                ['id', NULL],
                ['title', ''],
                ['keywords', ''],
                ['description', ''],
                ['content', ''],
                ['customProperty', []],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Markdown.edit');
        $this->_md_service->updateMarkdown($data['id'], $data);
        
        return success('ADD_SUCCESS');
    }
    
    /**
     * edit.
     *
     * @return \think\Response
     */
    public function del():Response {
        $data = $this->request->params(
            [
                ['id', NULL],
            ]
        );
        
        $this->validate($data, 'addon\ydc_docvite\app\validate\Markdown.del');
        $this->_md_service->rmMarkdown($data['id'], TRUE, TRUE);
        
        return success('ADD_SUCCESS');
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
        $this->_md_service->publishMarkdown($data['id']);
        
        return success('SUC_PUBLISH');
    }
}