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

namespace addon\hsx_exam\app\adminapi\controller\questions;

use core\base\BaseAdminController;
use addon\hsx_exam\app\service\admin\questions\QuestionTypeService;


/**
 * 商品分类控制器
 * Class Category
 * @package addon\shop\app\adminapi\controller\goods
 */
class QuestionType extends BaseAdminController
{
    /**
     * 获取商品分类列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([]);
        return success((new QuestionTypeService())->getPage($data));
    }

}