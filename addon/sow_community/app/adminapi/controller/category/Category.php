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

namespace addon\sow_community\app\adminapi\controller\category;

use addon\sow_community\app\service\admin\category\CategoryService;
use core\base\BaseAdminController;


/**
 * 社区分类控制器
 * Class Category
 * @package addon\sow_community\app\adminapi\controller\category
 */
class Category extends BaseAdminController
{

    /**
     * 获取社区分类分页列表
     * @return \think\Response
     */
    public function pages()
    {
        $data = $this->request->params([
            [ "category_name", "" ],
            [ 'status', '' ],
            [ 'order', '' ],
            [ 'sort', '' ]
        ]);
        return success(( new CategoryService() )->getPage($data));
    }

    /**
     * 获取社区分类列表
     * @return \think\Response
     */
    public function lists()
    {
        $data = $this->request->params([
            [ "category_name", "" ],
            [ 'status', '' ]
        ]);
        return success(( new CategoryService() )->getList($data));
    }

    /**
     * 社区分类详情
     * @param int $id
     * @return \think\Response
     */
    public function info(int $id)
    {
        return success(( new CategoryService() )->getInfo($id));
    }

    /**
     * 添加社区分类
     * @return \think\Response
     */
    public function add()
    {
        $data = $this->request->params([
            [ "category_name", "" ],
            [ 'status', 0 ],
            [ "sort", 0 ]
        ]);
        $this->validate($data, 'addon\sow_community\app\validate\category\Category.add');
        $id = ( new CategoryService() )->add($data);
        return success('ADD_SUCCESS', [ 'id' => $id ]);
    }

    /**
     * 社区分类编辑
     * @param $id - 社区分类id
     * @return \think\Response
     */
    public function edit(int $id)
    {
        $data = $this->request->params([
            [ "category_name", "" ],
            [ 'status', 0 ],
            [ "sort", 0 ]
        ]);
        $data[ 'category_id' ] = $id;
        $this->validate($data, 'addon\sow_community\app\validate\category\Category.edit');
        ( new CategoryService() )->edit($id, $data);
        return success('EDIT_SUCCESS');
    }

    /**
     * 社区分类删除
     * @param $id - 社区分类id
     * @return \think\Response
     */
    public function del(int $id)
    {
        ( new CategoryService() )->del($id);
        return success('DELETE_SUCCESS');
    }

    /**
     * 修改社区分类排序号
     * @return \think\Response
     */
    public function modifySort()
    {
        $data = $this->request->params([
            [ 'category_id', '' ],
            [ 'sort', '' ],
        ]);
        ( new CategoryService() )->modifySort($data);
        return success('SUCCESS');
    }

    /**
     * 修改社区分类状态
     * @return \think\Response
     */
    public function modifyStatus()
    {
        $data = $this->request->params([
            [ 'category_id', '' ],
            [ 'status', '' ],
        ]);
        ( new CategoryService() )->modifyStatus($data);
        return success('SUCCESS');
    }

}
