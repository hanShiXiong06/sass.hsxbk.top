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
class Config extends BaseAdminController {
    
    protected ?MarkdownService $_md_service = NULL;
    
    public function __construct(App $app) {
        parent::__construct($app);
        $this->_md_service = new MarkdownService();
    }
    
    /**
     * 配置列表
     *
     * @return \think\Response
     */
    public function index():Response {
        return success($this->_md_service->getConfigList());
    }
    
    /**
     * Edit.
     *
     * @return \think\Response
     */
    public function edit():Response {
        $params = $this->request->params(
            [
                ['data', NULL],
            ]
        );
        
        $this->validate($params, 'addon\ydc_docvite\app\validate\Config.edit');
        $this->_md_service->saveConfigList($params['data']);
        
        return success('EDIT_SUCCESS');
    }
    
}