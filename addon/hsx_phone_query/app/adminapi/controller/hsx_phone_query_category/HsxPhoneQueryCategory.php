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

namespace addon\hsx_phone_query\app\adminapi\controller\hsx_phone_query_category;

use core\base\BaseAdminController;
use addon\hsx_phone_query\app\service\admin\hsx_phone_query_category\HsxPhoneQueryCategoryService;


/**
 * 分类控制器
 * Class HsxPhoneQueryCategory
 * @package addon\hsx_phone_query\app\adminapi\controller\hsx_phone_query_category
 */
class HsxPhoneQueryCategory extends BaseAdminController
{
   /**
    * 获取分类列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["type_id",""],
             ["name",""],
             ["price",""],
             ["is_show",""]
        ]);
        return success((new HsxPhoneQueryCategoryService())->getPage($data));
    }

    /**
     * 分类详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new HsxPhoneQueryCategoryService())->getInfo($id));
    }

    /**
     * 添加分类
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["type_id",0],
             ["name",""],
             ["price",0.00],
             ["is_show",1],
             ["sort",0]
        ]);
        $this->validate($data, 'addon\hsx_phone_query\app\validate\hsx_phone_query_category\HsxPhoneQueryCategory.add');
        $id = (new HsxPhoneQueryCategoryService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 分类编辑
     * @param $id  分类id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["type_id",0],
             ["name",""],
             ["price",0.00],
             ["is_show",1],
             ["sort",0]
        ]);
        $this->validate($data, 'addon\hsx_phone_query\app\validate\hsx_phone_query_category\HsxPhoneQueryCategory.edit');
        (new HsxPhoneQueryCategoryService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 修改排序
     * @param int $id
     * @return \think\Response
     */
    public function modifySort(int $id){
        $data = $this->request->params([
            ["sort", 0]
        ]);
        (new HsxPhoneQueryCategoryService())->modifySort($id, $data['sort']);
        return success('EDIT_SUCCESS');
    }

    /**
     * 修改显示状态
     * @param int $id
     * @return \think\Response
     */
    public function modifyShow(int $id){
        $data = $this->request->params([
            ["is_show", 1]
        ]);
        (new HsxPhoneQueryCategoryService())->modifyShow($id, $data['is_show']);
        return success('EDIT_SUCCESS');
    }

    /**
     * 分类删除
     * @param $id  分类id
     * @return \think\Response
     */
    public function del(int $id){
        (new HsxPhoneQueryCategoryService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
