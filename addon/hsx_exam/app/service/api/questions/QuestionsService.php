<?php


namespace addon\hsx_exam\app\service\api\questions;


use addon\hsx_exam\app\model\questions\Questions;
use addon\hsx_exam\app\model\questions\Category;
use addon\hsx_exam\app\model\questions\QuestionsType;
use addon\hsx_exam\app\service\core\questions\CoreQuestionsCategoryService;
use core\base\BaseApiService;


class QuestionsService extends BaseApiService
{
    /*
    * 构造函数初始化
    */
    public function __construct() {
        parent::__construct();
        $this->model = new Questions();
        
    }
     /*
    * 获取试题列表
    */
    // public function getList( array $where=[]) {
       
    //     $field=' id, category_id,questions_desc,questions_type,answer';
    //     $list= $this->model->where([['site_id', '=', $this->site_id]])->with(['searchQuestionsCategoryName']) ->withSearch(['id','questions_desc'])->field($field)->order('id asc')->select()->toArray();
    //     return  $list;
    // }
    /*
    * 获取试题分页
    */
    public function getPage( array $where=[])  {
        // return $where;
        $field=' id, category_id,questions_desc,questions_type,options,answer';

        // 默认搜索条件
        $sku_where = ["questions_desc"];
        
        if (!empty($where['category_id'])) {
            $sku_where[] = "category_id";
        }
        if (!empty($where['questions_type'])) {
            $sku_where[] = "questions_type";
        }

        $list= $this->model->where([['site_id', '=', $this->site_id]])->with(['searchQuestionsCategoryName'])->withSearch($sku_where,$where)->field($field)->order('id asc');
        return  $this->pageQuery($list );
    }
    
    /*
    * 获取试题详情
    */

    public function getInfo( int $id )  {
        $field=' id, category_id,questions_desc,questions_type,answer';
        $info= $this->model->where([['site_id', '=', $this->site_id],['id','=',$id] ])->field($field)->findOrEmpty();
        return $info;
    }

     /*
    * 获取试题的分类
    */


    public function category() {
        return ( new CoreQuestionsCategoryService() )->getTree([ [ 'site_id', '=', $this->site_id ] ]);
    }

    /**
     * 获取问题的类型
     * getQuestionsType
     * 
    */
    public function getQuestionsType() {
        $feild = 'questions_type , type_name';
        return ( new QuestionsType() )->where([['site_id', '=', $this->site_id]])->field($feild)->select()->toArray();
    }
}
