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

namespace addon\hsx_phone_query\app\api\controller\hsx_phone_query;

use core\base\BaseAdminController;
use addon\hsx_phone_query\app\service\api\hsx_phone_query\HsxPhoneQueryService;


/**
 * 分类控制器
 * Class HsxPhoneQueryCategory
 * @package addon\hsx_phone_query\app\api\controller\hsx_phone_query_category
 */
class HsxPhoneQuery extends BaseAdminController
{
   /**
    * 获取分类列表
    * @return \think\Response
    */
    public function query(){
        $data = $this->request->params([
             ["imeis",""],
             ["id",""],
             ['payType','']
        ]);

        $data = (new HsxPhoneQueryService())->query($data);
        if($data['code'] != 200){
            return success( msg:$data['message'] , code: $data['code'] );
        }
        return  success( data:$data['data'] );
        
    }
    // lists 获取个人用户 的查询过的列表
    public function lists(){
        $data=$this->request->params([
            ["pages",1],
            ["limit",30],
       ]);
      return success( (new HsxPhoneQueryService())->lists($data));
    }
    // detail
    public function detail(){
        $data=$this->request->params([
            ["id",""],
       ]);
      return success( (new HsxPhoneQueryService())->detail($data));
    }
}
