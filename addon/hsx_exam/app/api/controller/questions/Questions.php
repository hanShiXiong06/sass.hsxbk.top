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

namespace addon\hsx_exam\app\api\controller\questions;

use addon\hsx_exam\app\service\api\questions\QuestionsService;
use core\base\BaseApiController;
use think\Response;


class Questions extends BaseApiController
{
    /**
     * 获取试题的列表
     * @return Response
     */
    public function getList()
    {


        $data = $this->request->params([
            ['questions_desc',''],
            ['category_id',''],
            ['questions_type',''],
            ['category_id','']

        ]);
        return success('SUCCESS', (new QuestionsService())->getPage($data));
    }
    /**
     * 获取试题分页
     * 
     * */ 
    public function getPage()
    {

       return success('SUCCESS', (new QuestionsService)->getPage());
    }

    /**
     * 获取试题详情
     * */ 
    public function getInfo(int $id)
    {
       

       return success('SUCCESS', (new QuestionsService())->getInfo($id));
    }
    
    /**
     * 获取试题的分类
     * */ 
    public function category()
    {

       return success('SUCCESS', (new QuestionsService)->category());
    }

    /**
     * 获取问题的类型
     * 
     * */
    public function type()
    {
        return success('SUCCESS', (new QuestionsService)->getQuestionsType());
    } 


}
