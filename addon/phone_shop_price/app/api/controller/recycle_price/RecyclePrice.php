<?php

namespace addon\phone_shop_price\app\api\controller\recycle_price;

use core\base\BaseAdminController;
// 这个 recycle_price/RecycleCategoryService 是为了和 报价单的 程序部分做出区分
// 这个是给客户返回的是报价信息 (不是图片)
use addon\phone_shop_price\app\service\api\recycle_price\RecycleCategoryService;
//  addon/phone_shop_price/app/service/api/recycle_price/RecycleCategoryService.php
// Class RecyclePrice extends BaseController
class RecyclePrice extends BaseAdminController
{
    // public function __construct(){
    //     parent::__construct();
    // }

    public function recycle_category_tree(){
        return success(( new RecycleCategoryService() )->getTree());
    }
    // recycle_model 
    // 获取回收的机型
    public function recycle_model(){
        // 获取请求参数
        $data = $this->request->params([
            ['typeId',''] ,
            ['brandId',''],
            ['limit',''],
            ['page','']
       ]);

        return success( (new RecycleCategoryService())->getModel( $data ) );
    }
    // 获取回收型号的机框问题
    public function question_list (){
        $data = $this->request->params([
            ['modelId',''] 
       ]);
       return success( (new RecycleCategoryService())->getQuestionList( $data ) );
    }

    // 获取 回收 的参考价格 calculate_price
    public function calculate_price(){
        $data = $this->request->params([
            ['modelId',''] ,
            ['questionList',null]
       ]);
    //    $data['questionList'] = json_decode($data['questionList'], true);
       // 强制将   $data['modelId']转为 number
       
       return success( (new RecycleCategoryService())->getCalculatePrice( $data ) );


    }

    
}