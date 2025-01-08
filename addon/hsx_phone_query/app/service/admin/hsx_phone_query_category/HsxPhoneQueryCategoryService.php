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
        $field = 'id,site_id,type_id,name,price,is_show,sort';
        $order = 'sort desc,id desc';

        $search_model = $this->model->where([ [ 'site_id' ,"=", $this->site_id ] ])->withSearch(["id","type_id","name","price","is_show"], $where)->field($field)->order($order);
        
        // 添加调试信息
        $debug_info = [
            'SQL' => $search_model->fetchSql(true)->select(),
            'where条件' => $where,
            'site_id' => $this->site_id,
            'search_fields' => ["id","type_id","name","price","is_show"]
        ];
        trace('分类列表查询调试信息：' . json_encode($debug_info, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), 'debug');
        
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
        $field = 'id,site_id,type_id,name,price,is_show,sort';

        $info = $this->model->field($field)->where([
            ['id', "=", $id],
            ['site_id', "=", $this->site_id]
        ])->findOrEmpty()->toArray();
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
        // 获取最大排序值
        $max_sort = $this->model->where([['site_id', '=', $this->site_id]])->max('sort');
        $data['sort'] = $max_sort + 10;
        $res = $this->model->create($data);
        return $res->id;
    }

    /**
     * 修改排序
     * @param int $id
     * @param int $sort
     * @return bool
     */
    public function modifySort(int $id, int $sort)
    {
        $this->model->where([
            ['id', '=', $id],
            ['site_id', '=', $this->site_id]
        ])->update(['sort' => $sort]);
        return true;
    }

    /**
     * 修改显示状态
     * @param int $id
     * @param int $is_show
     * @return bool
     */
    public function modifyShow(int $id, int $is_show)
    {
        $this->model->where([
            ['id', '=', $id],
            ['site_id', '=', $this->site_id]
        ])->update(['is_show' => $is_show]);
        return true;
    }

    /**
     * 分类编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $this->model->where([
            ['id', '=', $id],
            ['site_id', '=', $this->site_id]
        ])->update($data);
        return true;
    }

    /**
     * 删除分类
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        $model = $this->model->where([
            ['id', '=', $id],
            ['site_id', '=', $this->site_id]
        ])->find();
        if (!$model) {
            return false;
        }
        $res = $model->delete();
        return $res;
    }
    
}
