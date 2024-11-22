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

namespace addon\qf_notice\app\adminapi\controller\category;

use core\base\BaseAdminController;
use addon\qf_notice\app\service\admin\category\CategoryService;


/**
 * 应用分类控制器
 * Class Category
 * @package addon\qf_notice\app\adminapi\controller\category
 */
class Category extends BaseAdminController
{
   /**
    * 获取应用分类列表
    * @return \think\Response
    */
    public function lists(){
        $data = $this->request->params([
             ["name",""]
        ]);
        return success((new CategoryService())->getPage($data));
    }

    /**
     * 应用分类详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id){
        return success((new CategoryService())->getInfo($id));
    }

    /**
     * 添加应用分类
     * @return \think\Response
     */
    public function add(){
        $data = $this->request->params([
             ["name",""],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\category\Category.add');
        $id = (new CategoryService())->add($data);
        return success('ADD_SUCCESS', ['id' => $id]);
    }

    /**
     * 应用分类编辑
     * @param $id  应用分类id
     * @return \think\Response
     */
    public function edit(int $id){
        $data = $this->request->params([
             ["name",""],

        ]);
        $this->validate($data, 'addon\qf_notice\app\validate\category\Category.edit');
        (new CategoryService())->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 应用分类删除
     * @param $id  应用分类id
     * @return \think\Response
     */
    public function del(int $id){
        (new CategoryService())->del($id);
        return success('DELETE_SUCCESS');
    }

    
}
