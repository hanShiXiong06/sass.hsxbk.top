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

namespace addon\hsx_phone_query\app\service\admin\hsx_phone_query_category;

use addon\hsx_phone_query\app\model\HsxPhoneQueryCategory;

use core\base\BaseAdminService;


/**
 * 分类服务层
 * Class HsxPhoneQueryCategoryService
 * @package addon\hsx_phone_query\app\service\admin\hsx_phone_query_category
 */
class HsxPhoneQueryCategoryService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new HsxPhoneQueryCategory();
    }

    /**
     * 获取分类列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'id,site_id,type_id,name,price';
        $order = '';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["id","type_id","name","price"], $where)->field($field)->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取分类信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'id,site_id,type_id,name,price';

        $info = $this->model->field($field)->where([['site_id', "=", $id]])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加分类
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data['site_id'] = $this->site_id;
        $res = $this->model->create($data);
        return $res->site_id;

    }

    /**
     * 分类编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {

        $this->model->where([['site_id', '=', $id],['site_id', '=', $this->site_id]])->update($data);
        return true;
    }

    /**
     * 删除分类
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([['site_id', '=', $id],['site_id', '=', $this->site_id]])->find();
        $res = $model->delete();
        return $res;
    }
    
}
