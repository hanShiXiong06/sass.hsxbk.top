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

namespace addon\phone_shop\app\service\admin\goods;

use addon\phone_shop\app\model\goods\Goods;
use addon\phone_shop\app\model\goods\Label;
use core\base\BaseAdminService;
use core\exception\AdminException;


/**
 * 商品标签服务层
 * Class LabelService
 * @package addon\phone_shop\app\service\admin\goods
 */
class LabelService extends BaseAdminService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Label();
    }

    /**
     * 获取商品标签列表
     * @param array $where
     * @return array
     */
    public function getPage(array $where = [])
    {
        $field = 'label_id, label_name, group_id, style_type, color_json, icon, status, memo, sort, create_time, update_time';
        $order = 'label_id desc';
        if (!empty($where[ 'order' ])) {
            $order = $where[ 'order' ] . ' ' . $where[ 'sort' ];
        }

        $search_model = $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ "label_name", 'group_id' ], $where)->field($field)
            ->with([
                'group' => function($query) {
                    $query->field('group_id, group_name');
                },
            ])
            ->order($order);
        $list = $this->pageQuery($search_model);
        return $list;
    }

    /**
     * 获取商品标签列表
     * @param array $where
     * @param string $field
     * @return array
     */
    public function getList(array $where = [], $field = 'label_id, label_name, group_id, style_type, color_json, icon, status, memo, sort, create_time, update_time')
    {
        $order = 'sort desc,label_id desc';
        return $this->model->where([ [ 'site_id', '=', $this->site_id ] ])->withSearch([ "label_name" ], $where)->field($field)
            ->with([
                'group' => function($query) {
                    $query->field('group_id, group_name');
                },
            ])->order($order)->select()->toArray();
    }

    /**
     * 获取商品标签信息
     * @param int $id
     * @return array
     */
    public function getInfo(int $id)
    {
        $field = 'label_id, label_name, group_id, style_type, color_json, icon, status, memo, sort, create_time, update_time';

        $info = $this->model->field($field)->where([ [ 'label_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])
            ->with([
                'group' => function($query) {
                    $query->field('group_id, group_name');
                },
            ])->findOrEmpty()->toArray();
        return $info;
    }

    /**
     * 添加商品标签
     * @param array $data
     * @return mixed
     */
    public function add(array $data)
    {
        $data[ 'site_id' ] = $this->site_id;
        $data[ 'create_time' ] = time();
        $brandInfo = $this->model->where([ [ 'site_id', '=', $this->site_id ], [ 'label_name', '=', $data[ 'label_name' ] ] ])->findOrEmpty()->toArray();
        if ($brandInfo) {
            throw new AdminException('标签已存在，请检查');
        }
        $res = $this->model->create($data);
        return $res->label_id;
    }

    /**
     * 商品标签编辑
     * @param int $id
     * @param array $data
     * @return bool
     */
    public function edit(int $id, array $data)
    {
        $data[ 'update_time' ] = time();
        $labelInfo = $this->model->where([ [ 'site_id', '=', $this->site_id ], [ 'label_name', '=', $data[ 'label_name' ] ] ])->findOrEmpty()->toArray();
        if ($labelInfo && $labelInfo[ 'label_id' ] != $id) {
            throw new AdminException('标签已存在，请检查');
        }

        $this->model->where([ [ 'label_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->update($data);
        return true;
    }

    /**
     * 删除商品标签
     * @param int $id
     * @return bool
     */
    public function del(int $id)
    {
        // 检测商品标签分组是否被使用
        $goods_model = new Goods();
        $count = $goods_model->where([
            [ 'site_id', '=', $this->site_id ],
        ])->withSearch([ 'label_ids' ], [ 'label_ids' => $id ])->count();
        if ($count) {
            throw new AdminException('该标签正在使用中，无法删除');
        }
        $model = $this->model->where([ [ 'label_id', '=', $id ], [ 'site_id', '=', $this->site_id ] ])->find();
        $res = $model->delete();
        return $res;
    }

    /**
     * 修改排序
     * @param $data
     * @return Label
     */
    public function modifySort($data)
    {
        return $this->model->where([
            [ 'label_id', '=', $data[ 'label_id' ] ],
            [ 'site_id', '=', $this->site_id ]
        ])->update([ 'sort' => $data[ 'sort' ] ]);
    }

    /**
     * 修改状态
     * @param $data
     * @return Label
     */
    public function modifyStatus($data)
    {
        return $this->model->where([
            [ 'label_id', '=', $data[ 'label_id' ] ],
            [ 'site_id', '=', $this->site_id ]
        ])->update([ 'status' => $data[ 'status' ] ]);
    }

}
