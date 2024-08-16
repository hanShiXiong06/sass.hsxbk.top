<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace addon\hsx_exam\app\service\admin\questions;

use addon\hsx_exam\app\model\questions\QuestionType;
use addon\hsx_exam\app\model\questions\Questions;
use addon\hsx_exam\app\service\core\questions\CoreQuestionsCategoryService;
use core\base\BaseAdminService;
use core\exception\AdminException;
use core\exception\CommonException;


/**
 * 商品分类服务层
 * Class CategoryService
 * @package addon\hsx_exam\app\service\admin\questions
 */
class QuestionTypeService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new QuestionType();
    }

    /**
     * 获取问题类型
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'questions_type, type_name ,sort';
        $order = 'create_time desc';
        $search_model = $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }



}
