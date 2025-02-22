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

namespace addon\sow_community\app\service\core\treasure;

use addon\sow_community\app\model\Treasure;
use core\base\BaseCoreService;

/**
 * 社区宝贝库服务层
 * Class CoreTreasureService
 * @package  addon\sow_community\app\service\admin\content;
 */
class CoreTreasureService extends BaseCoreService
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Treasure();
    }

    /**
     * 获取宝贝类型列表
     * @return array
     */
    public function getTreasureTypeList()
    {
        $type_array = array_filter(event("TreasureType")) ?? [];
        $type_list = [];
        foreach ($type_array as $v) {
            $type_list = empty($type_list) ? $v : array_merge($type_list, $v);
        }
        return $type_list;
    }

    /**
     * 获取宝贝数据列表
     * @return array
     */
    public function getTreasureDataList(array $data = [], bool $is_page = true)
    {
        $where = [
            'keyword' => $data[ 'keyword' ] ?? '',        //搜索关键字
            'relate_ids' => $data[ 'relate_ids' ] ?? [],  //勾选宝贝id
            'join_ids' => $data[ 'join_ids' ] ?? []       //已参与宝贝id
        ];
        $page = [];
        if ($is_page) {
            $page = $this->getPageParam();
        }
        $data_array = array_filter(event("TreasureData", [ 'site_id' => $data[ 'site_id' ], 'relate_type' => $data[ 'relate_type' ], 'where' => $where, 'page' => $page ])) ?? [];
        $treasure_list = [];
        foreach ($data_array as $v) {
            $treasure_list = empty($treasure_list) ? $v : array_merge($treasure_list, $v);
        }
        return $treasure_list;
    }

    /**
     * 获取社区宝贝库选择列表
     * @param array $where
     * @return array
     * @throws \think\db\exception\DbException
     */
    public function getTreasureSelectList(array $where = [])
    {
        $field = 'treasure_id,treasure_name,treasure_sub_name,treasure_image,treasure_price,treasure_url,relate_id,relate_type,is_join';
        $order = 'create_time desc';
        $treasure_where = [
            [ 'is_join', "=", 1 ],
            [ 'site_id', "=", $where[ 'site_id' ] ]
        ];

        //检测返回有效的宝贝关联id
        $relate_ids = [];
        $join_relate_ids = $this->model->where($treasure_where)->withSearch([ 'keyword', 'relate_type' ], $where)->column('relate_id');
        if (!empty($join_relate_ids)) {
            $data[ 'site_id' ] = $where[ 'site_id' ];
            $data[ 'relate_ids' ] = $join_relate_ids;
            $data[ 'relate_type' ] = $where[ 'relate_type' ];
            $list = $this->getTreasureDataList($data, false);
            // 如果返回的关联数据中不包含已选择的数据，则将旧数据设为不参与
            $relate_ids = array_column($list, 'relate_id');
            $relate_ids_diff = array_diff($data[ 'relate_ids' ], $relate_ids);
            $this->model->where([ [ 'relate_id', 'in', $relate_ids_diff ], [ 'relate_type', '=', $data[ 'relate_type' ] ], [ 'site_id', '=', $data[ 'site_id' ] ] ])->update([ 'is_join' => 0 ]);
        }

        $treasure_where[] = [ 'relate_id', 'in', $relate_ids ];

        if (!empty($where[ 'treasure_ids' ]) && $where[ 'select_type' ] == 'selected') $treasure_where[] = [ 'treasure_id', 'in', $where[ 'treasure_ids' ] ];
        $search_model = $this->model->where($treasure_where)->withSearch([ 'keyword', 'relate_type' ], $where)->field($field)->order($order)->append([ 'relate_type_name' ]);
        $list = $this->pageQuery($search_model);
        if (!empty($where[ 'treasure_ids' ])) {
            $list[ 'treasure_ids' ] = $this->getTreasureSelectedList($where);//获取并返回有效的宝贝id
        }
        return $list;
    }

    /**
     * 获取有效的宝贝id
     * @return array
     */
    public function getTreasureSelectedList(array $where = [])
    {
        return $this->model->where([ [ 'treasure_id', 'in', $where[ 'treasure_ids' ] ], [ 'is_join', "=", 1 ], [ 'site_id', '=', $where[ 'site_id' ] ] ])->withSearch([ 'keyword', 'relate_type' ], $where)->column('treasure_id');
    }

}
